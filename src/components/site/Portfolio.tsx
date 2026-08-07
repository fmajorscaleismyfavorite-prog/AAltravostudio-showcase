import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Reveal";
import restaurant from "@/assets/work-restaurant.jpg";
import barbershop from "@/assets/work-barbershop.jpg";
import clinic from "@/assets/work-clinic.jpg";
import realestate from "@/assets/work-realestate.jpg";
import gym from "@/assets/work-gym.jpg";
import resort from "@/assets/work-resort.jpg";

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
    title: "Bella Cucina",
    category: "Restaurant",
    image: restaurant,
    description: "A warm, photo-led site with a digital menu and one-tap reservations.",
    detail:
      "Bella Cucina was taking every booking through direct messages. We built a menu-first website with live opening hours, a reservation form that lands straight in the owner's inbox, and directions built into every page.",
    results: ["Reservations handled online instead of DMs", "Menu updates in under a minute", "Ranked for “Italian restaurant near me”"],
  },
  {
    title: "FadeHouse Barbers",
    category: "Barbershop",
    image: barbershop,
    description: "Bold, dark styling with a booking flow built for repeat clients.",
    detail:
      "A confident brand-led design with a barber-by-barber gallery, transparent pricing, and a booking button that follows the visitor down the page on mobile.",
    results: ["Bookings available 24/7", "Clear pricing reduced phone questions", "Instagram gallery synced into the site"],
  },
  {
    title: "Northgate Dental",
    category: "Dental Clinic",
    image: clinic,
    description: "Calm, accessible design that makes booking care feel simple.",
    detail:
      "Healthcare needs reassurance. We used soft colours, plain-language service pages, staff credentials, and an appointment request form with insurance details built in.",
    results: ["Appointment requests up week over week", "AA-level accessible contrast", "Service pages built for local search"],
  },
  {
    title: "Sierra Realty",
    category: "Real Estate",
    image: realestate,
    description: "A premium listing experience with filters and agent enquiry forms.",
    detail:
      "Buyers browse on their phones. We built a fast listing grid with saved filters, high-resolution galleries, and enquiry forms routed to the right agent automatically.",
    results: ["Listings load in under a second", "Enquiries routed per agent", "Shareable listing links for social"],
  },
  {
    title: "Ironwood Gym",
    category: "Fitness",
    image: gym,
    description: "High-energy design with class schedules and trial sign-ups.",
    detail:
      "The goal was free-trial sign-ups. We paired a bold hero with a live class timetable, membership comparison, and a short form that takes fifteen seconds to complete.",
    results: ["Free-trial form on every screen", "Timetable editable by staff", "Membership tiers made easy to compare"],
  },
  {
    title: "Azure Bay Resort",
    category: "Hotel & Resort",
    image: resort,
    description: "An elegant escape with a booking widget and room storytelling.",
    detail:
      "Resorts sell a feeling. Full-bleed photography, room-by-room storytelling, and a date-picker enquiry widget give guests everything they need to commit.",
    results: ["Direct enquiries instead of OTA-only", "Room pages built for sharing", "Multi-language ready structure"],
  },
];

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden bg-mist">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Designs built for real businesses like yours</>}
          description="A look at the kind of websites we design — every layout is crafted around how that industry actually wins customers."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="group h-full overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`${p.title} ${p.category.toLowerCase()} website design`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold text-ink glass">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
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

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto rounded-3xl p-0 sm:max-w-3xl">
          {active ? (
            <>
              <img
                src={active.image}
                alt={`${active.title} website design preview`}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-7">
                <DialogHeader className="text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    {active.category}
                  </span>
                  <DialogTitle className="text-2xl font-extrabold text-ink">{active.title}</DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    {active.detail}
                  </DialogDescription>
                </DialogHeader>
                <ul className="mt-6 grid gap-3">
                  {active.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground">
                        <Check className="size-3" />
                      </span>
                      {r}
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
