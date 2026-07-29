/**
 * ============================================================
 *  AQUA ZONE — SITE CONTENT
 *  Edit everything on this page: text, contact details, products,
 *  testimonials, gallery captions, stats, brands, links.
 *  No other file needs to change.
 * ============================================================
 */

import {
  ArrowRight, ShieldCheck, Award, Truck, Headphones, Droplets, Filter, Zap,
  Waves, Sparkles, Sun, Settings, Wrench, FlaskConical, Thermometer, Cpu,
  Building2, Home as HomeIcon, Hotel, HardHat, Factory, Landmark,
  Target, Eye, Heart, Shield, Users, TrendingUp, Handshake,
} from "lucide-react";

import heroPool from "@/assets/hero-pool.jpg";
import equipmentImg from "@/assets/equipment.jpg";
import aboutImg from "@/assets/about.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal5 from "@/assets/gallery-5.jpg";
import gal6 from "@/assets/gallery-6.jpg";

export const images = { heroPool, equipmentImg, aboutImg, gal1, gal2, gal3, gal4, gal5, gal6 };

/* ---------------- COMPANY / CONTACT ---------------- */
export const company = {
  brandName: "Aqua Zone",
  brandSub: "Pool Materials",
  legalName: "Aqua Zone Trading FZE LLC",
  tagline: "Everything Your Swimming Pool Needs — From A to Z.",
  address: "Dubai, United Arab Emirates",
  phoneDisplay: "+971 4 000 0000",
  phoneHref: "tel:+97140000000",
  email: "info@aquazone.ae",
  whatsappUrl: "https://wa.me/971500000000",
  hours: "Mon – Sat: 8:00 AM – 8:00 PM",
  hoursLong: "Monday – Saturday · 8:00 AM – 8:00 PM",
  hoursShort: "Mon–Sat, 8 AM – 8 PM",
  footerBlurb:
    "Everything your swimming pool needs — from A to Z. Dubai's trusted supplier of premium pool materials, equipment and water treatment solutions.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115401.35843878795!2d55.16407255!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000",
  social: { facebook: "#", instagram: "#", linkedin: "#" },
};

/* ---------------- NAVIGATION ---------------- */
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerCategories = [
  "Filtration Systems", "Pool Pumps", "Water Treatment", "Lighting", "Heat Pumps", "Automation",
];

export const ctaLabels = {
  quote: "Get a Quote",
  requestQuote: "Request a Quote",
  exploreProducts: "Explore Products",
  contact: "Contact Us",
};

/* ---------------- HOME ---------------- */
export const home = {
  hero: {
    badge: "Dubai's Trusted Pool Materials Supplier",
    titleLine1: "Your Trusted Partner for",
    titleHighlight: "Premium Pool Materials",
    subtitle:
      "Providing complete swimming pool solutions — from filtration to drainage — across the United Arab Emirates.",
    imageAlt: "Luxury swimming pool at a Dubai villa at sunset",
    badges: [
      { icon: ShieldCheck, label: "Certified Brands" },
      { icon: Truck, label: "UAE-Wide Delivery" },
      { icon: Headphones, label: "Expert Support" },
      { icon: Award, label: "Premium Quality" },
    ],
  },
  about: {
    eyebrow: "About Aqua Zone",
    titleLead: "Complete Pool Solutions from",
    titleHighlight: "A to Z",
    body:
      "Aqua Zone Trading FZE LLC is Dubai's premier destination for complete swimming pool materials, equipment and water treatment solutions. From residential villas to five-star resorts, we deliver premium products, expert guidance and end-to-end support.",
    badgeNumber: "15+",
    badgeText: "Years supplying premium pool materials across the UAE.",
    points: [
      ["Premium Brands", "Only certified international manufacturers."],
      ["Expert Guidance", "Technical consultants for every project."],
      ["End-to-End Supply", "Every component under one roof."],
      ["UAE-Wide Delivery", "Fast dispatch across the Emirates."],
    ] as [string, string][],
    linkLabel: "Discover our story",
  },
  stats: [
    { end: 1200, label: "Projects Supplied", suffix: "+" },
    { end: 15, label: "Years of Expertise", suffix: "+" },
    { end: 50, label: "Premium Brands", suffix: "+" },
    { end: 98, label: "Client Satisfaction", suffix: "%" },
  ],
  categoriesSection: {
    eyebrow: "Our Product Categories",
    title: "Everything for Your Swimming Pool",
    subtitle:
      "A complete range of premium pool equipment, materials and accessories — sourced from the world's leading manufacturers.",
  },
  productCategories: [
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
  ],
  whyChoose: {
    eyebrow: "Why Choose Aqua Zone",
    title: "Engineering Excellence, End-to-End",
    items: [
      { icon: Award, t: "Premium Quality", d: "Only certified, internationally recognised brands." },
      { icon: ShieldCheck, t: "Trusted Supplier", d: "A partner to leading contractors and resorts." },
      { icon: Truck, t: "Fast Delivery", d: "Ready stock and quick dispatch UAE-wide." },
      { icon: Headphones, t: "Expert Support", d: "Technical consultation from concept to installation." },
    ],
  },
  brandsSection: {
    eyebrow: "Brands We Supply",
    title: "World-Class Manufacturing Partners",
  },
  brands: ["Aqua", "Elecro Engineering", "DAB", "SACI", "ASTRAL", "Reviglass Mosaic", "Vespa"],
  industriesSection: {
    eyebrow: "Industries We Serve",
    title: "Trusted Across Every Sector",
  },
  industries: [
    { icon: HomeIcon, label: "Residential" },
    { icon: Hotel, label: "Hotels & Resorts" },
    { icon: Building2, label: "Villas" },
    { icon: HardHat, label: "Contractors" },
    { icon: Wrench, label: "Pool Builders" },
    { icon: Factory, label: "Facility Management" },
    { icon: Building2, label: "Commercial" },
    { icon: Landmark, label: "Government" },
  ],
  gallerySection: {
    eyebrow: "Gallery",
    title: "Projects & Installations",
    linkLabel: "View full gallery",
  },
  testimonialsSection: {
    eyebrow: "Testimonials",
    title: "Why Customers Trust Aqua Zone",
  },
  testimonials: [
    { name: "Ahmed Al Mansoori", role: "Villa Owner, Palm Jumeirah", quote: "Aqua Zone delivered every component for our infinity pool with impeccable quality. Truly a one-stop partner." },
    { name: "Sarah Thompson", role: "Project Manager, Emaar Contracting", quote: "Reliable stock, competitive pricing and expert guidance. They've become our go-to supplier for pool projects." },
    { name: "Rajesh Kumar", role: "Chief Engineer, Al Bahar Resort", quote: "Their equipment expertise and after-sales support are unmatched in the UAE market." },
  ],
  finalCta: {
    titleLead: "Ready to Build a",
    titleHighlight: "Perfect Pool",
    subtitle: "Speak with our specialists today. From concept to commissioning, we supply everything you need.",
  },
};

/* ---------------- ABOUT PAGE ---------------- */
export const about = {
  hero: {
    eyebrow: "About Us",
    title: "Trusted Partner for Premium Pool Materials",
    subtitle: "Aqua Zone Trading FZE LLC is Dubai's one-stop destination for complete swimming pool solutions.",
  },
  intro: {
    eyebrow: "Company Introduction",
    titleLead: "Engineering Excellence for",
    titleHighlight: "Every Pool",
    paragraphs: [
      "Founded in Dubai and rooted in engineering excellence, Aqua Zone supplies premium swimming pool materials and equipment to residential, commercial and government clients across the United Arab Emirates.",
      "From filtration systems and heat pumps to lighting, chemicals and finishing accessories — every product we deliver is sourced from world-class manufacturers and backed by expert technical support.",
    ],
    imageAlt: "Aqua Zone technicians installing pool equipment",
  },
  pillars: [
    { icon: Target, title: "Our Mission", body: "To supply the UAE market with premium pool materials while delivering unmatched service, technical guidance and reliability at every stage." },
    { icon: Eye, title: "Our Vision", body: "To be the most trusted one-stop destination for complete swimming pool solutions — from filtration to drainage — across the region." },
    { icon: Heart, title: "Our Values", body: "Integrity, engineering excellence, customer partnership and a relentless commitment to premium quality." },
  ],
  philosophy: {
    eyebrow: "Business Philosophy",
    title: "Built on Trust, Quality & Partnership",
    items: [
      { icon: Shield, t: "Uncompromising Quality", d: "Only internationally certified products from proven brands." },
      { icon: Users, t: "Customer First", d: "Every recommendation tailored to your project requirements." },
      { icon: Award, t: "Engineering Expertise", d: "Technical consultation from concept through commissioning." },
      { icon: TrendingUp, t: "Continuous Growth", d: "Constantly expanding our range to stay ahead of the market." },
      { icon: Handshake, t: "Long-Term Partnership", d: "We build lasting relationships, not one-off transactions." },
      { icon: Target, t: "Result-Driven", d: "Focused on measurable performance for your pool." },
      { icon: Heart, t: "Passion for Water", d: "A team obsessed with crystal-clear, healthy water." },
      { icon: Eye, t: "Transparency", d: "Clear pricing, honest advice and reliable timelines." },
    ],
  },
  commitment: {
    title: "Our Commitment to You",
    body: "Every product we supply is chosen for durability, efficiency and long-term performance. Every project we serve receives our full technical and after-sales support.",
    ctaLabel: "Start a Project",
  },
};

/* ---------------- PRODUCTS PAGE ---------------- */
export const products = {
  hero: {
    eyebrow: "Products",
    title: "Complete Range of Premium Pool Equipment",
    subtitle: "From filtration to drainage — every component your swimming pool needs, sourced from world-class manufacturers.",
  },
  enquiryLabel: "Enquiry",
  categories: [
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
  ],
  customCta: {
    title: "Need a Custom Package?",
    body: "Our specialists will design a complete equipment package tailored to your project.",
  },
};

/* ---------------- GALLERY PAGE ---------------- */
export const gallery = {
  hero: {
    eyebrow: "Gallery",
    title: "Projects & Installations",
    subtitle: "A selection of pools and equipment installations from across the United Arab Emirates.",
  },
  images: [
    { src: heroPool, alt: "Luxury infinity pool" },
    { src: gal1, alt: "Villa pool aerial view" },
    { src: gal2, alt: "Underwater lighting" },
    { src: gal3, alt: "Rooftop infinity pool" },
    { src: equipmentImg, alt: "Equipment installation" },
    { src: gal4, alt: "Crystal clear water" },
    { src: gal5, alt: "Modern residential pool" },
    { src: gal6, alt: "Premium mosaic tiles" },
  ],
};

/* ---------------- CONTACT PAGE ---------------- */
export const contact = {
  hero: {
    eyebrow: "Contact Us",
    title: "Let's Build Your Perfect Pool",
    subtitle: "Our specialists are ready to help — from a single fitting to a complete equipment package.",
  },
  form: {
    title: "Request a Quote",
    subtitle: "Fill in the form and our team will respond within one business day.",
    interestOptions: [
      "Filtration Systems", "Pumps", "Heat Pumps", "Lighting",
      "Water Treatment", "Chemicals", "Automation", "Complete Package", "Other",
    ],
    messagePlaceholder: "Tell us about your project, pool size, timeline...",
    submitLabel: "Send Message",
    sentLabel: "Message Sent",
  },
  whatsappLabel: "Chat on WhatsApp",
};

/* ---------------- ICONS (used by pages) ---------------- */
export { ArrowRight };
