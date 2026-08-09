import { motion } from "motion/react";
import { Rocket, Smartphone, Search, Gift } from "lucide-react";

const stats = [
  {
    value: "7–14",
    suffix: "Days",
    label: "Typical Launch",
    icon: Rocket,
  },
  {
    value: "Mobile-",
    suffix: "First",
    label: "Every Website",
    icon: Smartphone,
  },
  {
    value: "SEO-",
    suffix: "Ready",
    label: "Built for Discovery",
    icon: Search,
  },
  {
    value: "Free",
    suffix: "",
    label: "Consultation",
    icon: Gift,
  },
];

export function Stats() {
  return (
    <section
      aria-label="AltravoStudio highlights"
      className="bg-background py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group h-full"
            >
              <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-mist p-8 text-center shadow-soft transition-all duration-300 hover:border-brand/40 hover:shadow-lift">
                
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/10 blur-3xl transition-all duration-500 group-hover:bg-brand/20" />

                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12 + 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  className="relative mb-6 flex size-16 items-center justify-center rounded-2xl border border-brand/20 bg-background shadow-soft"
                >
                  <Icon className="size-7 text-brand" strokeWidth={2} />
                </motion.div>

                {/* Main Value */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.25,
                  }}
                  className="relative"
                >
                  <div className="font-display text-4xl font-extrabold leading-none text-gradient sm:text-5xl">
                    {stat.value}
                  </div>

                  {stat.suffix && (
                    <div className="mt-1 font-display text-4xl font-extrabold leading-none text-gradient sm:text-5xl">
                      {stat.suffix}
                    </div>
                  )}
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 40, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.4,
                  }}
                  className="my-5 h-0.5 bg-brand"
                />

                {/* Label */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.5,
                  }}
                  className="relative text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {stat.label}
                </motion.p>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-brand transition-all duration-500 group-hover:w-2/3" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}