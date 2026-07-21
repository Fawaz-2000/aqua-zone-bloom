import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-11 w-11 rounded-xl bg-gradient-water grid place-items-center shadow-glow">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2s6 7.5 6 12a6 6 0 1 1-12 0c0-4.5 6-12 6-12z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">Aqua Zone</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Pool Materials</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Everything your swimming pool needs — from A to Z. Dubai's trusted supplier of premium pool materials, equipment and water treatment solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="h-10 w-10 rounded-full bg-white/5 hover:bg-water grid place-items-center transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-water mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {[["/", "Home"], ["/about", "About Us"], ["/products", "Products"], ["/gallery", "Gallery"], ["/contact", "Contact"]].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-water transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-water mb-5">Product Categories</h4>
            <ul className="space-y-3 text-sm text-white/80">
              {["Filtration Systems", "Pool Pumps", "Water Treatment", "Lighting", "Heat Pumps", "Automation"].map((c) => (
                <li key={c}><Link to="/products" className="hover:text-water transition">{c}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-water mb-5">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-water" /><span>Dubai, United Arab Emirates</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-water" /><a href="tel:+97140000000" className="hover:text-water">+971 4 000 0000</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-water" /><a href="mailto:info@aquazone.ae" className="hover:text-water">info@aquazone.ae</a></li>
              <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 mt-0.5 text-water" /><span>Mon – Sat: 8:00 AM – 8:00 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Aqua Zone Trading FZE LLC. All rights reserved.</div>
          <div>Everything Your Swimming Pool Needs — From A to Z.</div>
        </div>
      </div>
    </footer>
  );
}
