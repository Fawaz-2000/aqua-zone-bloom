import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Shield, Users, Award, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Aqua Zone – Dubai's Premium Pool Materials Supplier" },
      { name: "description", content: "Learn about Aqua Zone Trading FZE LLC — our mission, vision, values and commitment to delivering premium swimming pool materials across the UAE." },
      { property: "og:title", content: "About Aqua Zone" },
      { property: "og:description", content: "Our mission, vision and commitment to premium pool materials in Dubai." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Trusted Partner for Premium Pool Materials"
        subtitle="Aqua Zone Trading FZE LLC is Dubai's one-stop destination for complete swimming pool solutions."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-water font-semibold mb-3">Company Introduction</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight">
              Engineering Excellence for <span className="text-gradient-water">Every Pool</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Founded in Dubai and rooted in engineering excellence, Aqua Zone supplies premium swimming pool materials and equipment to residential, commercial and government clients across the United Arab Emirates.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              From filtration systems and heat pumps to lighting, chemicals and finishing accessories — every product we deliver is sourced from world-class manufacturers and backed by expert technical support.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-water opacity-20 blur-3xl rounded-full" />
            <img src={aboutImg} alt="Aqua Zone technicians installing pool equipment" width={1400} height={1000} loading="lazy" className="relative rounded-3xl shadow-water w-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", body: "To supply the UAE market with premium pool materials while delivering unmatched service, technical guidance and reliability at every stage." },
            { icon: Eye, title: "Our Vision", body: "To be the most trusted one-stop destination for complete swimming pool solutions — from filtration to drainage — across the region." },
            { icon: Heart, title: "Our Values", body: "Integrity, engineering excellence, customer partnership and a relentless commitment to premium quality." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="group p-8 rounded-3xl bg-white border shadow-card hover:shadow-water hover:-translate-y-1 transition-all">
              <div className="h-14 w-14 rounded-2xl bg-gradient-water grid place-items-center shadow-glow">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-water font-semibold mb-3">Business Philosophy</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink">Built on Trust, Quality & Partnership</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, t: "Uncompromising Quality", d: "Only internationally certified products from proven brands." },
              { icon: Users, t: "Customer First", d: "Every recommendation tailored to your project requirements." },
              { icon: Award, t: "Engineering Expertise", d: "Technical consultation from concept through commissioning." },
              { icon: TrendingUp, t: "Continuous Growth", d: "Constantly expanding our range to stay ahead of the market." },
              { icon: Handshake, t: "Long-Term Partnership", d: "We build lasting relationships, not one-off transactions." },
              { icon: Target, t: "Result-Driven", d: "Focused on measurable performance for your pool." },
              { icon: Heart, t: "Passion for Water", d: "A team obsessed with crystal-clear, healthy water." },
              { icon: Eye, t: "Transparency", d: "Clear pricing, honest advice and reliable timelines." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="p-6 rounded-2xl bg-gradient-soft border hover:border-water transition">
                <Icon className="h-8 w-8 text-water" />
                <div className="mt-4 font-semibold text-ink">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-water text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-glow)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Our Commitment to You</h2>
          <p className="mt-5 text-lg text-white/85 max-w-3xl mx-auto">
            Every product we supply is chosen for durability, efficiency and long-term performance. Every project we serve receives our full technical and after-sales support.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-ocean font-semibold px-8 py-4 shadow-water hover:shadow-glow transition">
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
