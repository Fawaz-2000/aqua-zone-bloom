import { Wave } from "./Wave";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-gradient-water text-white">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] mb-6">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-lg md:text-xl text-white/85 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
      <Wave color="white" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
