import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Most local business websites fall between a simple one-page site and a full multi-page build, and pricing depends on the number of pages, whether you need booking or e-commerce, and how much content we create for you. We give you a fixed quote after a free consultation — no hourly surprises.",
  },
  {
    q: "How long does it take?",
    a: "A focused landing page is usually live within a week. A complete business website typically takes 7 to 14 days from the moment we have your content, photos, and approval on the design.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. Our care plans cover updates, security patches, backups, uptime monitoring, and small content changes each month, so your site stays fast and secure long after launch.",
  },
  {
    q: "Can I update it myself?",
    a: "Absolutely. We build with simple editing in mind and include a short training walkthrough plus written guides, so you can change hours, prices, photos, and text without calling a developer.",
  },
  {
    q: "Do you offer SEO?",
    a: "Every site ships SEO-ready: clean structure, fast loading, proper headings, and local schema markup. We also offer ongoing local SEO and Google Business Profile optimisation to help you rank for nearby searches.",
  },
  {
    q: "What if I already have a website?",
    a: "We'll review it honestly and tell you whether a redesign, a rebuild, or a few targeted improvements will get you the best return. Sometimes the fastest win is fixing speed and calls to action.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-background">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions business owners ask us first</>}
          description="Straight answers, no sales pressure. If your question isn't here, just ask."
        />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-mist px-6 shadow-soft transition-colors data-[state=open]:border-brand/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
