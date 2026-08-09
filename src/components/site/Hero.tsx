import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Play, TrendingUp, MessageSquare, CalendarCheck, Star } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const floaters = [
  { icon: MessageSquare, label: "New Inquiry", value: "Maria booked a call", cls: "-left-4 top-10 sm:-left-10", delay: 0 },
  { icon: TrendingUp, label: "Website Visitors", value: "+248% this month", cls: "-right-2 top-32 sm:-right-8", delay: 0.6 },
  { icon: CalendarCheck, label: "Bookings", value: "37 new this week", cls: "-left-2 bottom-24 sm:-left-12", delay: 1.2 },
  { icon: Star, label: "Customer Reviews", value: "4.9 average rating", cls: "-right-2 bottom-8 sm:-right-6", delay: 1.8 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden bg-mist pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-24 size-[38rem] rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="absolute -right-24 top-10 size-[32rem] rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-[-12rem] left-1/3 size-[30rem] rounded-full bg-primary/15 blur-3xl animate-blob [animation-delay:-11s]" />
      </div>

      <motion.div style={{ opacity: fade }} className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand shadow-soft"
          >
            <span className="size-2 rounded-full bg-accent" />
            Websites for local businesses
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
          >
            Professional Websites That Help{" "}
            <span className="text-gradient">Local Businesses Grow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            We build websites that help businesses get more customers, increase inquiries, and
            become easier to find online — designed to work for you 24 hours a day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-lift transition-transform duration-300 hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-ink shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <Play className="size-4 text-brand" />
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" />7–14 Day Typical Launch</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" />Mobile-first &amp; SEO-ready</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand" />Free consultation</span>
          </motion.div>
        </div>

        <motion.div style={{ y }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-lift"
          >
            <img
              src={heroMockup}
              alt="Preview of a modern business website designed by AltravoStudio on laptop and mobile"
              width={1200}
              height={1008}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {floaters.map((f) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 + f.delay * 0.2 },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: f.delay },
              }}
              className={`absolute hidden w-52 rounded-2xl p-3.5 shadow-glow glass sm:block ${f.cls}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
                  <f.icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-ink">{f.label}</p>
                  <p className="truncate text-xs text-muted-foreground">{f.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
