import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { about, images } from "@/content/site";

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
      <PageHero {...about.hero} />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-water font-semibold mb-3">{about.intro.eyebrow}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight">
              {about.intro.titleLead} <span className="text-gradient-water">{about.intro.titleHighlight}</span>
            </h2>
            {about.intro.paragraphs.map((p, i) => (
              <p key={i} className={`${i === 0 ? "mt-6" : "mt-4"} text-muted-foreground text-lg leading-relaxed`}>{p}</p>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-water opacity-20 blur-3xl rounded-full" />
            <img src={images.aboutImg} alt={about.intro.imageAlt} width={1400} height={1000} loading="lazy" className="relative rounded-3xl shadow-water w-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {about.pillars.map(({ icon: Icon, title, body }) => (
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
            <div className="text-xs uppercase tracking-[0.3em] text-water font-semibold mb-3">{about.philosophy.eyebrow}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink">{about.philosophy.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.philosophy.items.map(({ icon: Icon, t, d }) => (
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
          <h2 className="text-3xl md:text-5xl font-bold">{about.commitment.title}</h2>
          <p className="mt-5 text-lg text-white/85 max-w-3xl mx-auto">{about.commitment.body}</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-ocean font-semibold px-8 py-4 shadow-water hover:shadow-glow transition">
            {about.commitment.ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
