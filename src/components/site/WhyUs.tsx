import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const traditional = [
  "Weeks of waiting with little communication",
  "Designed for desktop, awkward on phones",
  "Invisible on Google searches",
  "Dated templates every competitor also uses",
  "Slow pages that lose impatient visitors",
  "Neglected security and updates",
  "Any change means paying a developer",
  "Looks nice, but rarely brings inquiries",
];

const modern = [
  "Fast delivery — most sites live in 7 to 14 days",
  "Mobile-first, because that's where your customers are",
  "SEO-ready structure so nearby people find you",
  "Modern design tailored to your brand, not a template",
  "High performance with near-instant page loads",
  "Secure hosting, SSL, backups, and monitoring included",
  "Easy to update yourself, with training included",
  "Conversion-focused: every page drives an inquiry",
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="section-pad relative overflow-hidden bg-gradient-ink text-ink-foreground"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 size-[26rem] rounded-full bg-accent/20 blur-3xl animate-blob" />
        <div className="absolute -right-16 bottom-0 size-[24rem] rounded-full bg-primary/40 blur-3xl animate-blob [animation-delay:-8s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Why AltravoStudio
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Two ways to build a website. Only one grows your business.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              We're not just making something that looks good — we're building the hardest working
              member of your team.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white/85">Traditional Approach</h3>
              <ul className="mt-6 space-y-4">
                {traditional.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <X className="size-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="relative h-full overflow-hidden rounded-3xl border border-accent/30 bg-white/10 p-8 shadow-glow backdrop-blur-xl"
            >
              <span
                aria-hidden
                className="absolute -right-16 -top-16 size-52 rounded-full bg-accent/30 blur-3xl"
              />
              <div className="relative flex items-center gap-3">
                <h3 className="text-xl font-bold text-white">Modern Digital Approach</h3>
                <span className="rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-foreground">
                  Our way
                </span>
              </div>
              <ul className="relative mt-6 space-y-4">
                {modern.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground">
                      <Check className="size-3" />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
