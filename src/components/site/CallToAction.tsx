import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section className="section-pad bg-mist">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-ink px-6 py-20 text-center sm:px-14">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/4 top-0 size-[26rem] -translate-x-1/2 rounded-full bg-primary/50 blur-3xl animate-blob" />
              <div className="absolute right-0 bottom-0 size-[22rem] rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:-9s]" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl md:leading-[1.08]">
                Let's Grow Your Business Online
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
                Book a free, no-obligation consultation. We'll look at your current online presence
                and show you exactly what a professional website could do for your business.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-bold text-ink shadow-glow"
              >
                Book a Free Consultation
                <ArrowRight className="size-4" />
              </motion.a>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/50">
                Free consultation · Fixed quote · No pressure
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
