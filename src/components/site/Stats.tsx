import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";

const stats = [
  { value: 100, suffix: "+", label: "Projects Designed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 5, suffix: "x", label: "Potential Business Growth" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl font-extrabold text-gradient sm:text-6xl">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Results at a glance" className="bg-background py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="rounded-3xl border border-border bg-mist p-8 text-center shadow-soft transition-shadow hover:shadow-lift">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
