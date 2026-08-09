import { motion } from "motion/react";
import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";
import { SectionHeading } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, your customers, your goals, and what you want your website to accomplish.",
    icon: Search,
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We decide what pages, content, features, and calls-to-action your website needs.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a modern, mobile-first design tailored to your business and brand.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    description:
      "We turn the approved design into a fast, responsive, and SEO-ready website.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Review & Launch",
    description:
      "You review the website, we make the final adjustments, then prepare everything for launch.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Handover & Support",
    description:
      "We make sure everything is working properly and guide you through your new website after launch.",
    icon: Headphones,
  },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title={<>From first conversation to a website ready for your customers</>}
          description="No confusing technical jargon. We keep the process simple, clear, and transparent from start to launch."
        />

        <div className="relative mt-14">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-border lg:left-1/2 lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 === 1;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: isRight ? 30 : -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    },
                  }}
                  className="group relative rounded-3xl border border-border bg-mist p-7 shadow-soft transition-shadow hover:shadow-lift sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    {/* Step number / icon */}
                    <div className="relative flex shrink-0 flex-col items-center">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-soft transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" />
                      </div>

                      <span className="mt-2 text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                        Step {step.number}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-border bg-mist p-7 text-center shadow-soft sm:flex-row sm:text-left sm:p-8"
        >
          <div>
            <p className="text-lg font-bold text-ink">
              Ready to get started?
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Tell us about your business and we'll help you figure out the next step.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lift transition-transform hover:scale-105"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}