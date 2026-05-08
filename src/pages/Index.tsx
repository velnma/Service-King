import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ShieldCheck, Plane, Brain, FileSearch, Users, Wrench,
  Scale, Phone, CalendarCheck, CheckCircle2, MapPin, ArrowRight
} from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import droneImg from "@/assets/drone-tech.jpg";
import { ScheduleDialog } from "@/components/ScheduleDialog";

const PHONE_DISPLAY = "(239) 789-3783";
const PHONE_TEL = "tel:+12397893783";

const trustItems = [
  "Independent Third-Party Inspections",
  "Drone & AI Technology",
  "Insurance Claim Support",
  "Vetted Contractor Network",
];

const services = [
  { icon: FileSearch, title: "Roof & Building Inspections", desc: "Storm damage evaluation, condition assessments, and detailed reporting you can actually rely on." },
  { icon: Plane, title: "Thermal Drone Imaging", desc: "High-resolution aerial analysis that reveals hidden moisture and insulation issues invisible from the ground." },
  { icon: Brain, title: "AI-Assisted Detection", desc: "Machine-learning damage recognition flags impact, granule loss, and storm patterns with precision." },
  { icon: ShieldCheck, title: "Insurance Claim Support", desc: "Documentation your carrier can review — supporting valid claims and preventing bad ones." },
  { icon: Users, title: "Vetted Contractor Network", desc: "We bid your job across trusted pros so you get options, leverage, and the right specialist." },
  { icon: Wrench, title: "Maintenance Programs", desc: "Routine inspections and preventative care for homeowners, HOAs, and commercial properties." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container flex items-center justify-between py-6">
          <a href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-gradient-gold flex items-center justify-center shadow-gold">
              <span className="font-display font-black text-primary text-xl">K</span>
            </div>
            <div className="text-primary-foreground">
              <div className="font-display font-bold text-lg leading-none">Service King</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">Inspect · Protect · Connect</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/90">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#technology" className="hover:text-accent transition-colors">Technology</a>
            <a href="#claims" className="hover:text-accent transition-colors">Insurance</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          <ScheduleDialog
            trigger={
              <Button variant="hero" size="sm">Schedule Inspection</Button>
            }
          />
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Aerial drone view of a Southwest Florida tile roof at sunset"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary/40 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              <MapPin className="h-3.5 w-3.5" /> Serving Southwest Florida
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-black text-primary-foreground leading-[1.05]">
              Get the Truth About Your Roof —{" "}
              <span className="text-gradient-gold">Before You File a Claim.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              Independent inspections, thermal drone imaging, and AI technology to accurately
              identify storm damage — or confirm your property is in good condition.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ScheduleDialog
                trigger={
                  <Button variant="hero" size="xl">
                    <CalendarCheck className="h-5 w-5" /> Schedule Inspection
                  </Button>
                }
              />
              <Button variant="outlineLight" size="xl" asChild>
                <a href={PHONE_TEL}><Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gradient-navy border-y border-accent/20">
        <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((t) => (
            <div key={t} className="flex items-center gap-3 text-primary-foreground/90 text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">What We Do</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-primary">
              Clear, unbiased roof &amp; property inspections.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Service King is a third-party inspection company providing honest, detailed
              evaluations of your roof or building. We work for the truth — not for a sale.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Determine if you have legitimate storm damage",
                "Confirm if your roof is still in good condition",
                "Get clear guidance on what your next steps should be",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-2xl" />
            <Card className="relative overflow-hidden rounded-2xl shadow-elegant border-0">
              <img
                src={droneImg}
                alt="Inspection drone hovering over a tile roof"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Our Services</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-primary">
              Inspection technology that sees what others miss.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="group p-8 bg-card border border-border hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 shadow-card hover:shadow-elegant">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY DEEP DIVE */}
      <section id="technology" className="py-24 bg-gradient-navy text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="container relative grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Technology</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              Advanced inspections, <span className="text-gradient-gold">unbeatable accuracy.</span>
            </h2>
            <p className="mt-6 text-primary-foreground/75 leading-relaxed">
              We combine FAA-compliant drones, thermal optics, and AI vision to detect what walking a roof simply can't.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            {[
              { k: "Thermal", v: "Drone Imaging", d: "Detects hidden moisture and insulation breaches." },
              { k: "AI", v: "Damage Recognition", d: "Pattern-matches storm impact across thousands of roofs." },
              { k: "4K", v: "Aerial Analysis", d: "Pixel-level inspection without ever risking a ladder." },
            ].map((b) => (
              <div key={b.v} className="rounded-xl border border-accent/30 bg-primary/30 backdrop-blur p-6">
                <div className="text-gradient-gold font-display text-4xl font-black">{b.k}</div>
                <div className="mt-1 font-semibold">{b.v}</div>
                <p className="mt-3 text-sm text-primary-foreground/70">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE + CONTRACTORS split */}
      <section id="claims" className="py-24">
        <div className="container grid md:grid-cols-2 gap-8">
          <Card className="p-10 border-0 shadow-elegant bg-card">
            <ShieldCheck className="h-10 w-10 text-accent" />
            <h3 className="mt-6 text-3xl font-black text-primary">Support Your Claim — Or Avoid a Bad One</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our reports help support valid insurance claims, provide documentation your carrier can review,
              and prevent unnecessary claims when no damage exists. Accuracy, not sales pressure.
            </p>
            <ul className="mt-6 space-y-3">
              {["Carrier-ready documentation", "Honest damage verification", "Claim guidance from real data"].map(i => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {i}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-10 border-0 shadow-elegant bg-primary text-primary-foreground">
            <Users className="h-10 w-10 text-accent" />
            <h3 className="mt-6 text-3xl font-black">Get the Best Contractor — at the Best Price</h3>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed">
              If repairs are needed, we connect you with vetted contractors and bid your job across our network
              to create competitive pricing. You get options and leverage.
            </p>
            <ul className="mt-6 space-y-3">
              {["Vetted, specialist-matched pros", "Competitive cross-network bidding", "Transparent pricing, no kickbacks"].map(i => (
                <li key={i} className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {i}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* MAINTENANCE + LEGAL */}
      <section className="py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-8">
          <Card className="p-10 border border-border bg-card">
            <Wrench className="h-10 w-10 text-accent" />
            <h3 className="mt-6 text-2xl font-black text-primary">Protect Your Property Long-Term</h3>
            <p className="mt-3 text-muted-foreground">Service agreements that include routine inspections, preventative maintenance, early issue detection, and cost-saving strategies. Built for homeowners, HOAs, and commercial properties.</p>
          </Card>
          <Card className="p-10 border border-border bg-card">
            <Scale className="h-10 w-10 text-accent" />
            <h3 className="mt-6 text-2xl font-black text-primary">When Insurance Gets Difficult — We Have Backup</h3>
            <p className="mt-3 text-muted-foreground">We work with experienced property claim law firms that operate on contingency: no upfront cost, paid only if they recover funds.</p>
          </Card>
        </div>
      </section>

      {/* SEO LOCAL */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Southwest Florida Coverage</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-primary">
            Trusted roof inspections across SWFL
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Service King provides professional roof inspections in Southwest Florida — including
            <strong className="text-foreground"> Fort Myers, Cape Coral, Naples, Bonita Springs,</strong> and surrounding areas.
            Our third-party services use thermal drone technology and AI-assisted analysis to identify
            storm damage, hidden moisture, and overall roof condition. Whether you need an inspection
            for an insurance claim, preventative maintenance, or a property evaluation, you get unbiased,
            detailed reports you can trust — plus access to a vetted contractor network with competitive bidding.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["Fort Myers", "Cape Coral", "Naples", "Bonita Springs", "Estero", "Lee County"].map(c => (
              <span key={c} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-primary border border-border">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative py-28 bg-gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute -bottom-20 -left-20 h-96 w-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute -top-20 -right-20 h-96 w-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="container relative text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Don't guess about your roof. <span className="text-gradient-gold">Know for sure.</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            Get a professional inspection backed by real data and advanced technology.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ScheduleDialog
              trigger={
                <Button variant="hero" size="xl">
                  <CalendarCheck className="h-5 w-5" /> Schedule Inspection
                </Button>
              }
            />
            <Button variant="outlineLight" size="xl" asChild>
              <a href={PHONE_TEL}>
                <Phone className="h-5 w-5" /> Speak With an Expert · {PHONE_DISPLAY}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/70 py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-black text-primary">K</span>
            </div>
            <span className="font-display font-bold text-primary-foreground">Service King</span>
          </div>
          <p>© {new Date().getFullYear()} Service King · Inspection · Protection · Connection</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
