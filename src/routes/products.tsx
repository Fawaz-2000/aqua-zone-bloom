import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Filter, Zap, Droplets, Sun, FlaskConical, Sparkles, Wrench, Waves,
  Settings, Thermometer, Cpu, Award, ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: "Products – Swimming Pool Equipment & Materials | Aqua Zone" },
      { name: "description", content: "Explore Aqua Zone's full range of premium swimming pool equipment: filtration, pumps, lighting, chemicals, heat pumps, automation and more." },
      { property: "og:title", content: "Aqua Zone Products" },
      { property: "og:description", content: "Complete range of premium swimming pool equipment and materials." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

const categories = [
  { icon: Filter, title: "Pool Filtration Systems", desc: "High-efficiency sand, cartridge and DE filters engineered for crystal-clear water and long service life." },
  { icon: Zap, title: "Pool Pumps", desc: "Quiet, energy-efficient variable-speed circulation pumps for residential and commercial pools." },
  { icon: Filter, title: "Cartridge & Sand Filters", desc: "Premium filter media, cartridges and complete filtration assemblies." },
  { icon: Droplets, title: "Drainage Systems", desc: "Overflow gratings, gullies and complete drainage solutions in premium finishes." },
  { icon: Sun, title: "Underwater Lighting", desc: "LED and RGB pool lights with automation, plus premium stainless niches and fittings." },
  { icon: FlaskConical, title: "Water Treatment", desc: "Salt chlorinators, UV, ozone and complete water sanitation systems." },
  { icon: Sparkles, title: "Pool Chemicals", desc: "Sanitisers, pH balancers, clarifiers, algaecides and specialty pool chemistry." },
  { icon: Wrench, title: "Cleaning Equipment", desc: "Robotic cleaners, poles, brushes, leaf nets and vacuum systems." },
  { icon: Waves, title: "Pool Accessories", desc: "Ladders, handrails, safety covers and premium finishing items." },
  { icon: Settings, title: "Pool Fittings", desc: "Skimmers, inlets, main drains, stainless steel fittings and installation hardware." },
  { icon: Thermometer, title: "Heat Pumps", desc: "Inverter heat pumps for year-round comfort and reliable pool heating." },
  { icon: Cpu, title: "Automation Systems", desc: "Smart controllers for pumps, lighting, water chemistry and full pool control." },
];

function Products() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        title="Complete Range of Premium Pool Equipment"
        subtitle="From filtration to drainage — every component your swimming pool needs, sourced from world-class manufacturers."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative overflow-hidden rounded-3xl border bg-white p-8 shadow-card hover:shadow-water hover:-translate-y-1 transition-all">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-water opacity-10 group-hover:opacity-25 transition" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-water grid place-items-center shadow-glow mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[3.5rem]">{desc}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean group-hover:gap-2 transition-all">
                    Enquiry <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-water text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Award className="h-12 w-12 mx-auto text-aqua" />
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">Need a Custom Package?</h2>
          <p className="mt-4 text-white/85">Our specialists will design a complete equipment package tailored to your project.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-ocean font-semibold px-8 py-4 shadow-water hover:shadow-glow transition">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
