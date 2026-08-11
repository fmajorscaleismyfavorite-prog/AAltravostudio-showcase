import { motion } from "motion/react";
import {
  Globe,
  Rocket,
  UtensilsCrossed,
  Scissors,
  Stethoscope,
  Images,
  CalendarClock,
  RefreshCw,
  Wrench,
  Search,
  MapPin,
  Gauge,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: Globe,
    title: "Business Website",
    copy: "A complete online home with services, proof, and contact paths that convert.",
  },
  {
    icon: Rocket,
    title: "Landing Page",
    copy: "One focused page built to turn ad clicks and promos into real inquiries.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Website",
    copy: "Menus, photos, reservations, and directions that fill more tables.",
  },
  {
    icon: Scissors,
    title: "Barbershop Website",
    copy: "Style galleries, pricing, and online booking your regulars will actually use.",
  },
  {
    icon: Stethoscope,
    title: "Clinic Website",
    copy: "Reassuring, accessible design with appointment requests and clear services.",
  },
  {
    icon: Images,
    title: "Portfolio Website",
    copy: "Let your finished work do the selling with a gallery that loads instantly.",
  },
  {
    icon: CalendarClock,
    title: "Booking Website",
    copy: "Take appointments, deposits, and enquiries without the back-and-forth.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    copy: "Modernise an outdated site and recover the customers it's been losing.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    copy: "Updates, backups, and monitoring so your site stays fast and secure.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    copy: "Local keywords, structure, and content so nearby customers find you first.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    copy: "Set up and optimised so you appear on Maps with photos and reviews.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    copy: "Sub-second loading — because every extra second costs you customers.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title={<>Everything your business needs to win online</>}
          description="Pick exactly what you need today, and grow into the rest as your business scales. Every project is built mobile-first, fast, and easy for you to manage."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-background p-7 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 -top-24 h-40 bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                />
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-mist text-brand transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                  <s.icon className="size-5" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold text-ink">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
