import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Reveal";

import fadecraftPremium from "@/assets/portfolio/fadecraft-premium.jpg";
import freshbite from "@/assets/portfolio/freshbite.jpg";
import fadecraftClassic from "@/assets/portfolio/fadecraft-classic.jpg";
import glowBeauty from "@/assets/portfolio/glow-beauty.jpg";
import brickBloom from "@/assets/portfolio/brick-bloom.jpg";
import brightSmiles from "@/assets/portfolio/bright-smiles.jpg";

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  detail: string;
  results: string[];
};

const projects: Project[] = [
  {
    title: "FadeCraft Premium",
    category: "Barbershop",
    image: fadecraftPremium,
    description:
      "A premium barbershop website built around bookings, strong branding, and a high-end customer experience.",
    detail:
      "FadeCraft Premium combines a bold visual identity with a clear booking-focused experience. The design highlights the barbershop's services, atmosphere, credibility, and calls to action while keeping the experience easy to navigate.",
    results: [
      "Premium brand-focused visual design",
      "Booking-focused customer journey",
      "Clear services and pricing presentation",
    ],
  },

  {
    title: "FreshBite",
    category: "Restaurant",
    image: freshbite,
    description:
      "A warm, modern restaurant website designed to showcase food and make reservations feel effortless.",
    detail:
      "FreshBite uses a warm editorial-style layout that puts the food and restaurant experience first. Strong photography, simple navigation, and clear reservation actions help visitors quickly understand what the restaurant offers.",
    results: [
      "Food-first visual presentation",
      "Clear menu and reservation calls to action",
      "Warm branding designed for local customers",
    ],
  },

  {
    title: "FadeCraft Classic",
    category: "Barbershop",
    image: fadecraftClassic,
    description:
      "A dark, cinematic barbershop website with a confident identity and appointment-focused layout.",
    detail:
      "FadeCraft Classic uses a darker visual direction to create a premium and masculine atmosphere. The homepage immediately communicates the brand, services, location, and booking action.",
    results: [
      "Strong visual brand identity",
      "Clear appointment call to action",
      "Designed for a premium barbershop experience",
    ],
  },

  {
    title: "Glow Beauty",
    category: "Beauty Salon",
    image: glowBeauty,
    description:
      "A clean and elegant beauty website showcasing salon services, treatments, and appointment options.",
    detail:
      "Glow Beauty focuses on a softer, more elegant visual experience. Service cards make the different treatments easy to explore while the appointment button remains highly visible throughout the experience.",
    results: [
      "Elegant service-focused design",
      "Easy-to-browse treatment sections",
      "Prominent appointment actions",
    ],
  },

  {
    title: "Brick & Bloom",
    category: "Café",
    image: brickBloom,
    description:
      "A cozy café website built around atmosphere, storytelling, menu discovery, and table reservations.",
    detail:
      "Brick & Bloom uses rich photography and warm typography to communicate the personality of the café. The design makes the experience feel inviting while keeping the menu and reservation actions easy to find.",
    results: [
      "Atmosphere-driven visual design",
      "Menu-focused customer journey",
      "Clear table reservation action",
    ],
  },

  {
    title: "Bright Smiles",
    category: "Dental Clinic",
    image: brightSmiles,
    description:
      "A modern dental clinic website designed to create trust while making appointments simple.",
    detail:
      "Bright Smiles uses a clean and reassuring visual style to make the clinic feel professional and approachable. Important information such as services, experience, patient trust signals, and appointment actions are presented clearly.",
    results: [
      "Trust-focused healthcare design",
      "Clear appointment call to action",
      "Clean and approachable visual experience",
    ],
  },
];

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Websites designed to make businesses stand out.</>}
          description="A selection of website concepts and demo projects designed by AltravoStudio."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 20,
                }}
                className="group h-full overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-shadow hover:shadow-lift"
              >
                {/* LAPTOP MOCKUP */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 px-5 pt-7">
                  {/* Laptop screen */}
                  <div className="relative mx-auto max-w-[92%] overflow-hidden rounded-t-xl border-[6px] border-slate-800 bg-slate-900 shadow-2xl">
                    {/* Camera */}
                    <div className="absolute left-1/2 top-0 z-10 h-1.5 w-10 -translate-x-1/2 rounded-b-full bg-slate-900" />

                    <div className="aspect-[16/10] overflow-hidden bg-white">
                      <img
  src={p.image}
  alt={`${p.title} ${p.category} website design`}
  loading="lazy"
  suppressHydrationWarning
  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
/>
                    </div>
                  </div>

                  {/* Laptop base */}
                  <div className="relative mx-auto h-5 w-[98%] rounded-b-2xl bg-gradient-to-b from-slate-400 to-slate-500 shadow-lg">
                    <div className="absolute left-1/2 top-1 h-1.5 w-24 -translate-x-1/2 rounded-full bg-slate-300/80" />
                  </div>

                  {/* Desk shadow */}
                  <div className="mx-auto h-5 w-4/5 rounded-full bg-slate-400/30 blur-md" />

                  {/* Category */}
                  <span className="absolute left-8 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur">
                    {p.category}
                  </span>
                </div>

                {/* PROJECT INFO */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink transition-all hover:border-brand/50 hover:text-brand"
                  >
                    View Project
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* PROJECT MODAL */}
      <Dialog
        open={!!active}
        onOpenChange={(open) => !open && setActive(null)}
      >
        <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto rounded-3xl p-0 sm:max-w-4xl">
          {active ? (
            <>
              {/* Large Preview */}
              <img
  src={active.image}
  alt={`${active.title} website preview`}
  loading="lazy"
  suppressHydrationWarning
  className="h-auto w-full object-cover object-top"
/>

              {/* Project Details */}
              <div className="p-7">
                <DialogHeader className="text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    {active.category}
                  </span>

                  <DialogTitle className="text-2xl font-extrabold text-ink">
                    {active.title}
                  </DialogTitle>

                  <DialogDescription className="text-base leading-relaxed">
                    {active.detail}
                  </DialogDescription>
                </DialogHeader>

                <ul className="mt-6 grid gap-3">
                  {active.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-3 text-sm text-ink"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground">
                        <Check className="size-3" />
                      </span>

                      {result}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lift"
                >
                  Start a project like this
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}