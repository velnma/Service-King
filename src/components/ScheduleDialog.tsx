import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(25),
  address: z.string().trim().min(5, "Please enter your property address").max(255),
  propertyType: z.string().min(1, "Select a property type"),
  date: z.date({ required_error: "Pick a preferred date" }),
  timeWindow: z.string().min(1, "Select a time window"),
  notes: z.string().max(1000).optional(),
});

type ScheduleDialogProps = {
  trigger: React.ReactNode;
};

export const ScheduleDialog: React.FC<ScheduleDialogProps> = ({ trigger }) => {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>();
  const [propertyType, setPropertyType] = React.useState("");
  const [timeWindow, setTimeWindow] = React.useState("");
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const reset = () => {
    setSubmitted(false);
    setDate(undefined);
    setPropertyType("");
    setTimeWindow("");
    setErrors({});
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      address: String(fd.get("address") || ""),
      propertyType,
      date: date as Date,
      timeWindow,
      notes: String(fd.get("notes") || ""),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    // Build a mailto fallback so the request actually goes somewhere
    const subject = encodeURIComponent(
      `Inspection Request — ${parsed.data.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nAddress: ${parsed.data.address}\nProperty Type: ${parsed.data.propertyType}\nPreferred Date: ${format(parsed.data.date, "PPP")}\nTime Window: ${parsed.data.timeWindow}\n\nNotes:\n${parsed.data.notes || "(none)"}`,
    );
    window.location.href = `mailto:schedule@serviceking.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    toast({
      title: "Inspection request received",
      description: "We'll confirm your appointment within one business day.",
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[560px] max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <CheckCircle2 className="h-7 w-7 text-primary" />
            </div>
            <DialogTitle className="mt-5 font-display text-2xl text-primary">
              Request Sent
            </DialogTitle>
            <DialogDescription className="mt-2">
              Thanks — a Service King inspector will reach out within one
              business day to confirm your appointment. For urgent needs call{" "}
              <a
                href="tel:+12397893783"
                className="font-semibold text-primary underline"
              >
                (239) 789-3783
              </a>
              .
            </DialogDescription>
            <Button
              className="mt-6"
              variant="hero"
              onClick={() => setOpen(false)}
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-primary">
                Schedule Your Inspection
              </DialogTitle>
              <DialogDescription>
                Tell us about your property and preferred timing. We'll confirm
                within one business day.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="grid gap-4 mt-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Jane Smith" />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(239) 555-1234"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Property Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 Main St, Fort Myers, FL"
                />
                {errors.address && (
                  <p className="text-xs text-destructive">{errors.address}</p>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Property Type</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Single Family Home">
                        Single Family Home
                      </SelectItem>
                      <SelectItem value="Condo / Townhome">
                        Condo / Townhome
                      </SelectItem>
                      <SelectItem value="HOA / Multi-Unit">
                        HOA / Multi-Unit
                      </SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.propertyType && (
                    <p className="text-xs text-destructive">
                      {errors.propertyType}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) =>
                          d < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && (
                    <p className="text-xs text-destructive">{errors.date}</p>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Time Window</Label>
                <Select value={timeWindow} onValueChange={setTimeWindow}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred window" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Morning (8am – 12pm)">
                      Morning (8am – 12pm)
                    </SelectItem>
                    <SelectItem value="Afternoon (12pm – 4pm)">
                      Afternoon (12pm – 4pm)
                    </SelectItem>
                    <SelectItem value="Late Afternoon (4pm – 6pm)">
                      Late Afternoon (4pm – 6pm)
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.timeWindow && (
                  <p className="text-xs text-destructive">{errors.timeWindow}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Recent storm damage, leaks, age of roof, etc."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="mt-2">
                Request Inspection
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Prefer to talk now? Call{" "}
                <a
                  href="tel:+12397893783"
                  className="font-semibold text-primary"
                >
                  (239) 789-3783
                </a>
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
