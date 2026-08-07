import { ShieldCheck, Search, Clock, LayoutGrid, TrendingUp, Palette } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";

const benefits = [
  { icon: ShieldCheck, title: "Build Trust", copy: "A polished website tells customers you are established, professional, and safe to buy from." },
  { icon: Search, title: "Be Found on Google", copy: "Show up when people nearby search for exactly what your business offers." },
  { icon: Clock, title: "Accept Inquiries 24/7", copy: "Your site answers questions and captures leads while you sleep or serve customers." },
  { icon: LayoutGrid, title: "Showcase Services", copy: "Present your menu, treatments, packages, or portfolio the way they deserve to be seen." },
  { icon: TrendingUp, title: "Increase Sales", copy: "Clear calls to action turn casual visitors into booked appointments and paying customers." },
  { icon: Palette, title: "Professional Branding", copy: "Consistent colors, typography, and photography make your business memorable." },
];

export function WhyWebsites() {
  return (
    <section id="why-websites" className="section-pad relative overflow-hidden bg-mist">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 size-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why websites matter"
          title={<>Most businesses lose customers before they ever get in touch</>}
          description="If your business only lives on a Facebook page, potential customers can't find your hours, prices, or services quickly — so they scroll on to a competitor who made it easy."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="h-full rounded-3xl border border-border bg-background p-7 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-lift">
                  <b.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
