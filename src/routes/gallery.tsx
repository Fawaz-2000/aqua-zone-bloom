import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { gallery } from "@/content/site";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery – Pool Projects & Installations | Aqua Zone" },
      { name: "description", content: "Explore Aqua Zone's gallery of luxury swimming pool projects, equipment installations and completed works across the UAE." },
      { property: "og:title", content: "Aqua Zone Gallery" },
      { property: "og:description", content: "Luxury pool projects and installations across the UAE." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const images = gallery.images;

  return (
    <SiteLayout>
      <PageHero {...gallery.hero} />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-2xl shadow-card break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto group-hover:scale-105 transition duration-700"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <img src={images[active].src} alt={images[active].alt} className="max-h-[85vh] max-w-full rounded-2xl shadow-water" />
        </div>
      )}
    </SiteLayout>
  );
}
