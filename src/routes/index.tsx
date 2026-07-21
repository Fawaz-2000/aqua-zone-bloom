import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ShieldCheck, Award, Truck, Headphones, Droplets, Filter, Zap,
  Waves, Sparkles, Sun, Settings, Wrench, FlaskConical, Thermometer, Cpu,
  Star, Building2, Home as HomeIcon, Hotel, HardHat, Factory, Landmark,
  MapPin, Phone, Mail, Clock, Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Wave } from "@/components/site/Wave";
import heroPool from "@/assets/hero-pool.jpg";
import equipmentImg from "@/assets/equipment.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal5 from "@/assets/gallery-5.jpg";
import gal6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Aqua Zone – Premium Swimming Pool Materials Supplier in Dubai" },
      { name: "description", content: "Complete swimming pool materials in the UAE — filtration, pumps, lighting, water treatment, heat pumps, automation & accessories. Trusted by villas, hotels & contractors." },
      { property: "og:title", content: "Aqua Zone – Premium Pool Materials in Dubai" },
      { property: "og:description", content: "Everything your swimming pool needs — from A to Z. Dubai's one-stop supplier of premium pool equipment." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function useCounter(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("in"), delay); } });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="reveal">{children}</div>;
}

const productCategories = [
  { icon: Filter, title: "Pool Filtration Systems", desc: "High-efficiency sand & cartridge filters for crystal-clear water." },
  { icon: Zap, title: "Pool Pumps", desc: "Quiet, energy-efficient variable speed circulation pumps." },
  { icon: Droplets, title: "Drainage Systems", desc: "Overflow grating, gullies and complete drainage solutions." },
  { icon: Sun, title: "Underwater Lighting", desc: "LED pool lights & RGB automation with premium finishes." },
  { icon: FlaskConical, title: "Water Treatment", desc: "Chlorinators, salt systems, UV and ozone treatment." },
  { icon: Sparkles, title: "Pool Chemicals", desc: "Sanitisers, pH balancers, clarifiers and algaecides." },
  { icon: Wrench, title: "Cleaning Equipment", desc: "Robotic cleaners, brushes, nets and vacuum systems." },
  { icon: Waves, title: "Pool Accessories", desc: "Ladders, handrails, covers and premium finishing items." },
  { icon: Settings, title: "Pool Fittings", desc: "Skimmers, inlets, main drains and stainless fittings." },
  { icon: Thermometer, title: "Heat Pumps", desc: "Year-round comfort with efficient inverter heat pumps." },
  { icon: Cpu, title: "Automation Systems", desc: "Smart controllers for pumps, lighting and water chemistry." },
  { icon: Award, title: "Complete Solutions", desc: "End-to-end supply for residential and commercial projects." },
];

const industries = [
  { icon: HomeIcon, label: "Residential" }, { icon: Hotel, label: "Hotels & Resorts" },
  { icon: Building2, label: "Villas" }, { icon: HardHat, label: "Contractors" },
  { icon: Wrench, label: "Pool Builders" }, { icon: Factory, label: "Facility Management" },
  { icon: Building2, label: "Commercial" }, { icon: Landmark, label: "Government" },
];

const brands = ["Aqua", "Elecro Engineering", "DAB", "SACI", "ASTRAL", "Reviglass Mosaic", "Vespa"];

const testimonials = [
  { name: "Ahmed Al Mansoori", role: "Villa Owner, Palm Jumeirah", quote: "Aqua Zone delivered every component for our infinity pool with impeccable quality. Truly a one-stop partner." },
  { name: "Sarah Thompson", role: "Project Manager, Emaar Contracting", quote: "Reliable stock, competitive pricing and expert guidance. They've become our go-to supplier for pool projects." },
  { name: "Rajesh Kumar", role: "Chief Engineer, Al Bahar Resort", quote: "Their equipment expertise and after-sales support are unmatched in the UAE market." },
];

function StatItem({ end, label, suffix }: { end: number; label: string; suffix: string }) {
  const { val, ref } = useCounter(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-bold tracking-tight">{val}{suffix}</div>
      <div className="mt-2 text-white/80 text-sm md:text-base uppercase tracking-widest">{label}</div>
    </div>
  );
}

function Home() {
  const stats = [
    { end: 1200, label: "Projects Supplied", suffix: "+" },
    { end: 15, label: "Years of Expertise", suffix: "+" },
    { end: 50, label: "Premium Brands", suffix: "+" },
    { end: 98, label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroPool}
          alt="Luxury swimming pool at a Dubai villa at sunset"
          width={1920} height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{ backgroundImage: "var(--gradient-glow)" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-40 w-full">
          <div className="max-w-3xl text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse" />
              Dubai's Trusted Pool Materials Supplier
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Your Trusted Partner for<br />
              <span className="bg-gradient-to-r from-aqua via-white to-water bg-clip-text text-transparent">
                Premium Pool Materials
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Providing complete swimming pool solutions — from filtration to drainage — across the United Arab Emirates.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-white text-ocean font-semibold px-7 py-4 shadow-water hover:shadow-glow transition">
                Explore Products <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-water text-white font-semibold px-7 py-4 shadow-water hover:opacity-95 transition">
                Request a Quote
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 backdrop-blur text-white font-semibold px-7 py-4 hover:bg-white/10 transition">
                Contact Us
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { icon: ShieldCheck, label: "Certified Brands" },
                { icon: Truck, label: "UAE-Wide Delivery" },
                { icon: Headphones, label: "Expert Support" },
                { icon: Award, label: "Premium Quality" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/90 text-sm">
                  <Icon className="h-5 w-5 text-aqua" /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Wave color="white" className="absolute bottom-0 left-0 right-0 z-10" />
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-water opacity-20 blur-3xl rounded-full" />
              <img src={equipmentImg} alt="Pool equipment room" width={1200} height={900} loading="lazy" className="relative rounded-3xl shadow-water w-full" />
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white rounded-2xl shadow-card p-6 max-w-[240px] animate-float">
                <div className="text-4xl font-bold text-ocean">15+</div>
                <div className="text-sm text-muted-foreground">Years supplying premium pool materials across the UAE.</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <div className="inline-block text-xs uppercase tracking-[0.3em] text-water font-semibold mb-4">About Aqua Zone</div>
              <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight">
                Complete Pool Solutions from <span className="text-gradient-water">A to Z</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Aqua Zone Trading FZE LLC is Dubai's premier destination for complete swimming pool materials, equipment and water treatment solutions. From residential villas to five-star resorts, we deliver premium products, expert guidance and end-to-end support.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  ["Premium Brands", "Only certified international manufacturers."],
                  ["Expert Guidance", "Technical consultants for every project."],
                  ["End-to-End Supply", "Every component under one roof."],
                  ["UAE-Wide Delivery", "Fast dispatch across the Emirates."],
                ].map(([t, d]) => (
                  <div key={t} className="p-5 rounded-2xl bg-gradient-soft border">
                    <div className="font-semibold text-ocean">{t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{d}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-ocean font-semibold hover:gap-3 transition-all">
                Discover our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20 bg-gradient-water text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => <StatItem key={s.label} {...s} />)}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-24 md:py-32 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block text-xs uppercase tracking-[0.3em] text-water font-semibold mb-4">Our Product Categories</div>
              <h2 className="text-3xl md:text-5xl font-bold text-ink">Everything for Your Swimming Pool</h2>
              <p className="mt-4 text-muted-foreground text-lg">A complete range of premium pool equipment, materials and accessories — sourced from the world's leading manufacturers.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 40}>
                <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-card hover:shadow-water hover:-translate-y-1 transition-all duration-300 border h-full">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-water opacity-10 group-hover:opacity-20 transition" />
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-water grid place-items-center shadow-glow mb-6">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean opacity-0 group-hover:opacity-100 transition">
                      Enquire now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-water font-semibold mb-4">Why Choose Aqua Zone</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink">Engineering Excellence, End-to-End</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, t: "Premium Quality", d: "Only certified, internationally recognised brands." },
              { icon: ShieldCheck, t: "Trusted Supplier", d: "A partner to leading contractors and resorts." },
              { icon: Truck, t: "Fast Delivery", d: "Ready stock and quick dispatch UAE-wide." },
              { icon: Headphones, t: "Expert Support", d: "Technical consultation from concept to installation." },
            ].map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="p-8 rounded-3xl bg-gradient-soft border hover:shadow-water transition h-full">
                  <Icon className="h-10 w-10 text-water" />
                  <h3 className="mt-5 text-lg font-semibold text-ink">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20 bg-gradient-soft border-y">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-water font-semibold">Brands We Supply</div>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-ink">World-Class Manufacturing Partners</h2>
          </div>
          <div className="overflow-hidden relative">
            <div className="flex gap-6 marquee w-max">
              {[...brands, ...brands].map((b, i) => (
                <div key={i} className="shrink-0 min-w-[220px] h-24 rounded-2xl bg-white border shadow-card flex items-center justify-center px-8">
                  <span className="text-xl font-bold text-ocean tracking-wide">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-water font-semibold mb-4">Industries We Serve</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink">Trusted Across Every Sector</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {industries.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 40}>
                <div className="group aspect-square rounded-3xl bg-gradient-soft border hover:bg-gradient-water hover:text-white transition-all duration-500 flex flex-col items-center justify-center gap-3 hover:shadow-water hover:-translate-y-1">
                  <Icon className="h-10 w-10 text-water group-hover:text-white transition" />
                  <div className="font-semibold text-ink group-hover:text-white transition text-center px-2">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 md:py-32 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-water font-semibold">Gallery</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-ink">Projects & Installations</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-ocean font-semibold hover:gap-3 transition-all">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gal1, gal2, gal3, gal4, gal5, gal6].slice(0, 6).map((src, i) => (
              <div key={i} className={`group overflow-hidden rounded-2xl shadow-card ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={src} alt={`Pool project ${i + 1}`} loading="lazy" className="h-full w-full object-cover aspect-square group-hover:scale-110 transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-water font-semibold mb-4">Testimonials</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink">Why Customers Trust Aqua Zone</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="relative p-8 rounded-3xl bg-gradient-soft border shadow-card h-full">
                  <Quote className="h-10 w-10 text-water/40 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-water text-water" />)}
                  </div>
                  <p className="text-ink leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 pt-6 border-t">
                    <div className="font-semibold text-ocean">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-ink text-white">
        <img src={gal2} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ocean/70" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Build a <span className="bg-gradient-to-r from-aqua to-water bg-clip-text text-transparent">Perfect Pool</span>?
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            Speak with our specialists today. From concept to commissioning, we supply everything you need.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-white text-ocean font-semibold px-8 py-4 shadow-water hover:shadow-glow transition">Request a Quote</Link>
            <a href="tel:+97140000000" className="rounded-full bg-gradient-water text-white font-semibold px-8 py-4 shadow-water hover:opacity-95 transition inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> +971 4 000 0000
            </a>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            {[
              { icon: MapPin, t: "Location", d: "Dubai, United Arab Emirates" },
              { icon: Mail, t: "Email", d: "info@aquazone.ae" },
              { icon: Clock, t: "Hours", d: "Mon–Sat, 8 AM – 8 PM" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-3 items-start p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <Icon className="h-5 w-5 text-aqua shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">{t}</div>
                  <div className="mt-1 font-medium">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[400px] w-full">
        <iframe
          title="Aqua Zone Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115401.35843878795!2d55.16407255!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </SiteLayout>
  );
}
