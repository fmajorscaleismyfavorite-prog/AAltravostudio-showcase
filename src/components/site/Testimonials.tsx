import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./Reveal";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import a4 from "@/assets/avatar-4.jpg";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Owner, Bella Cucina",
    avatar: a1,
    quote:
      "We used to lose bookings in our Facebook messages. Now people find our menu, see our hours, and reserve a table before they even call. Our weekends fill up on their own.",
  },
  {
    name: "Daniel Cruz",
    role: "Founder, FadeHouse Barbers",
    avatar: a2,
    quote:
      "The team understood barbering, not just websites. The booking page pays for itself every month, and clients keep telling us the site looks better than the big chains.",
  },
  {
    name: "Dr. Elena Reyes",
    role: "Northgate Dental",
    avatar: a3,
    quote:
      "Patients say the site made them feel comfortable choosing us. Appointment requests come in overnight, and our front desk finally has fewer repetitive phone calls.",
  },
  {
    name: "Marcus Hale",
    role: "Broker, Sierra Realty",
    avatar: a4,
    quote:
      "Fast, professional, and genuinely easy to work with. Listings load instantly on mobile and enquiries land with the right agent automatically. Exactly what we asked for.",
  },
];

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section id="testimonials" className="section-pad bg-mist">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Business owners who stopped losing customers online</>}
          description="Real outcomes from the kind of local businesses we love working with."
        />

        <div className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t) => (
                <motion.figure
                  key={t.name}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  className="relative w-[88%] shrink-0 rounded-3xl border border-border bg-background p-8 shadow-soft sm:w-[48%] lg:w-[calc(33.333%-1rem)]"
                >
                  <Quote className="size-8 text-accent/40" />
                  <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="size-11 rounded-full object-cover"
                    />
                    <span>
                      <span className="block text-sm font-bold text-ink">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => embla?.scrollPrev()}
              className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-ink transition-colors hover:border-brand/50 hover:text-brand"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => embla?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    selected === i ? "w-7 bg-gradient-brand" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => embla?.scrollNext()}
              className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-ink transition-colors hover:border-brand/50 hover:text-brand"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
