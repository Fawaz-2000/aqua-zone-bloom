import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Aqua Zone – Request a Quote for Pool Materials in Dubai" },
      { name: "description", content: "Get in touch with Aqua Zone Trading FZE LLC. Request a quote, ask about products, or speak with our pool specialists in Dubai." },
      { property: "og:title", content: "Contact Aqua Zone" },
      { property: "og:description", content: "Request a quote or speak with our pool specialists in Dubai." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Your Perfect Pool"
        subtitle="Our specialists are ready to help — from a single fitting to a complete equipment package."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, t: "Office Address", d: "Dubai, United Arab Emirates" },
              { icon: Phone, t: "Phone / WhatsApp", d: "+971 4 000 0000", href: "tel:+97140000000" },
              { icon: Mail, t: "Email", d: "info@aquazone.ae", href: "mailto:info@aquazone.ae" },
              { icon: Clock, t: "Working Hours", d: "Monday – Saturday · 8:00 AM – 8:00 PM" },
            ].map(({ icon: Icon, t, d, href }) => (
              <a
                key={t}
                href={href || "#"}
                className="flex gap-4 p-6 rounded-2xl bg-gradient-soft border hover:shadow-card hover:border-water transition"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-water grid place-items-center shadow-glow">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-water font-semibold">{t}</div>
                  <div className="mt-1 font-medium text-ink">{d}</div>
                </div>
              </a>
            ))}

            <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl bg-[#25D366] text-white shadow-water text-center font-semibold hover:opacity-95 transition">
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="p-8 md:p-10 rounded-3xl border shadow-water bg-white">
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Request a Quote</h2>
              <p className="mt-2 text-muted-foreground text-sm">Fill in the form and our team will respond within one business day.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                {[
                  { name: "name", label: "Full Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel", required: true },
                  { name: "company", label: "Company (optional)", type: "text", required: false },
                ].map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-xs font-semibold text-ink uppercase tracking-widest">{f.label}</span>
                    <input
                      type={f.type} name={f.name} required={f.required}
                      className="mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-water transition"
                    />
                  </label>
                ))}
              </div>

              <label className="block mt-5">
                <span className="text-xs font-semibold text-ink uppercase tracking-widest">Interest</span>
                <select name="interest" className="mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-water">
                  {["Filtration Systems", "Pumps", "Heat Pumps", "Lighting", "Water Treatment", "Chemicals", "Automation", "Complete Package", "Other"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>

              <label className="block mt-5">
                <span className="text-xs font-semibold text-ink uppercase tracking-widest">Project Details</span>
                <textarea
                  name="message" required rows={5}
                  className="mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-water transition resize-none"
                  placeholder="Tell us about your project, pool size, timeline..."
                />
              </label>

              <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-water text-white font-semibold px-8 py-4 shadow-water hover:opacity-95 transition">
                {sent ? (<><CheckCircle2 className="h-4 w-4" /> Message Sent</>) : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="h-[450px] w-full">
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
