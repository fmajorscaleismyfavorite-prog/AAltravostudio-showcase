import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  { n: "01", title: "Discovery", copy: "We learn your business, your customers, and what a successful website looks like for you." },
  { n: "02", title: "Planning", copy: "We map pages, content, and the exact path a visitor takes from arriving to contacting you." },
  { n: "03", title: "Design", copy: "You see a polished, mobile-first design before a single line of code is written." },
  { n: "04", title: "Development", copy: "We build it fast, secure, accessible, and ready for Google from day one." },
  { n: "05", title: "Launch", copy: "We handle hosting, domain, analytics, and testing so launch day is stress-free." },
  { n: "06", title: "Support", copy: "We stay on to update, monitor, and improve your site as your business grows." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section id="process" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our process"
          title={<>A clear path from first call to a site that sells</>}
          description="No jargon and no guesswork. You always know what's happening, what's next, and when you'll see it."
        />

        <div ref={ref} className="relative mt-16 pl-12 sm:pl-0">
          <div aria-hidden className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2">
            <motion.div style={{ scaleY, originY: 0 }} className="h-full w-full bg-gradient-brand" />
          </div>

          <ol className="space-y-10">
            {steps.map((s, i) => (
              <li key={s.n} className="relative sm:grid sm:grid-cols-2 sm:gap-12">
                <span
                  aria-hidden
                  className="absolute -left-8 top-6 size-3.5 rounded-full bg-gradient-brand ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2"
                />
                <Reveal
                  delay={0.05}
                  className={
                    i % 2 === 0
                      ? "sm:col-start-1 sm:text-right"
                      : "sm:col-start-2"
                  }
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="rounded-3xl border border-border bg-background p-7 shadow-soft transition-shadow hover:shadow-lift"
                  >
                    <span className="font-display text-4xl font-extrabold text-gradient">{s.n}</span>
                    <h3 className="mt-2 text-xl font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  </motion.div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
