import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-11 w-11 rounded-xl bg-gradient-water shadow-glow grid place-items-center overflow-hidden">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 2s6 7.5 6 12a6 6 0 1 1-12 0c0-4.5 6-12 6-12z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute inset-0 shimmer" />
            </div>
            <div className="leading-tight">
              <div className={`font-bold text-lg tracking-tight ${scrolled ? "text-ocean" : "text-white"}`}>
                Aqua Zone
              </div>
              <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
                Pool Materials
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-ocean text-white"
                      : scrolled
                        ? "text-ink hover:text-ocean hover:bg-secondary"
                        : "text-white hover:bg-white/15"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+97140000000"
              className={`flex items-center gap-2 text-sm font-medium ${scrolled ? "text-ocean" : "text-white"}`}
            >
              <Phone className="h-4 w-4" /> +971 4 000 0000
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-gradient-water text-white text-sm font-semibold px-5 py-2.5 shadow-water hover:opacity-95 transition"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-ink" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t shadow-card animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-ink hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 text-center rounded-full bg-gradient-water text-white font-semibold px-5 py-3"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
