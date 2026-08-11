import { motion } from "motion/react";
import { Smartphone, Search, Zap, MessageCircle, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Reveal";

const benefits = [
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Your website is designed to look and work beautifully on phones, tablets, and desktops.",
  },
  {
    icon: Search,
    title: "SEO-Ready Structure",
    description:
      "Built with a clean structure that gives search engines a better understanding of your business.",
  },
  {
    icon: Zap,
    title: "Fast & Modern",
    description:
      "Lightweight, polished pages designed to load quickly and keep visitors from leaving.",
  },
  {
    icon: MessageCircle,
    title: "Built to Generate Inquiries",
    description:
      "Clear calls-to-action make it easy for visitors to contact, book, call, or message your business.",
  },
];

export function Testimonials() {
  return (
    <section id="what-you-can-expect">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What You Can Expect"
          title={
            <>
              More than a website.
              <br />
              <span className="text-gradient">A better way to grow online.</span>
            </>
          }
          description="Every AltravoStudio website is built around your business, your customers, and the actions you want visitors to take."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background p-7 shadow-soft transition-shadow hover:shadow-lift"
              >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand/10 blur-3xl transition-all duration-500 group-hover:bg-brand/20" />

                {/* Icon */}
                <div className="relative flex size-12 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mt-6 text-lg font-bold text-ink">{benefit.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <a
                  href="#services"
                  className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-brand opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  Built for your business
                  <ArrowUpRight className="size-3.5" />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-border bg-mist p-7 sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-lg font-bold text-ink">Ready to build your online presence?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Let's create a website that works for your business.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lift transition-transform hover:scale-105"
          >
            Get Free Consultation
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
