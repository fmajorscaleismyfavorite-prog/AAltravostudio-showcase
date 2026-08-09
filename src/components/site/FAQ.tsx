import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Pricing depends on the type of website, number of pages, features, and level of customization. We provide a clear quote before starting, so you know exactly what you're paying for.",
  },
  {
    q: "How long does it take?",
    a: "Most standard websites can be launched within 7–14 days, depending on the project scope and how quickly we receive the content and information we need.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. We can help with website updates, content changes, technical maintenance, and ongoing improvements depending on the support plan you choose.",
  },
  {
    q: "Can I update it myself?",
    a: "Yes. We build websites with ease of management in mind and can guide you through the basics after launch.",
  },
  {
    q: "Do you offer SEO?",
    a: "Yes. Our websites are built with an SEO-ready structure, including mobile optimization, proper page structure, metadata, and local-business considerations. More advanced SEO campaigns can be discussed separately.",
  },
  {
    q: "What if I already have a website?",
    a: "That's completely fine. We can review your existing website and recommend whether it would be better to improve, redesign, or rebuild it based on your goals.",
  },
  {
    q: "Do you work with businesses in Dasmariñas and nearby areas?",
    a: "Yes. AltravoStudio works with local businesses in Dasmariñas, Cavite and nearby areas, as well as clients who prefer working remotely.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions business owners ask us first</>}
          description="Straight answers, no sales pressure. If your question isn't here, just ask."
        />

        <Reveal>
          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-mist px-6 shadow-soft transition-colors data-[state=open]:border-brand/40"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline sm:text-lg">
                   {f.q}
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Ask Us CTA */}
            <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-border bg-mist p-6 text-center shadow-soft sm:flex-row sm:text-left">
              <div>
                <p className="text-lg font-bold text-ink">
                  Still have a question?
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Tagalog or English — just ask us. We're happy to help.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lift transition-transform hover:scale-105"
              >
                Ask Us a Question
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}