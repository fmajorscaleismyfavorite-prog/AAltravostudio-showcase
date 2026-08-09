import { createFileRoute } from "@tanstack/react-router";
import { PageLoader } from "@/components/site/PageLoader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { WhyWebsites } from "@/components/site/WhyWebsites";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ, faqs } from "@/components/site/FAQ";
import { CallToAction } from "@/components/site/CallToAction";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "AltravoStudio — Websites That Grow Local Businesses";
const description =
  "AltravoStudio designs fast, modern, high-converting websites for restaurants, clinics, salons, gyms and local service businesses. Free consultation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "AltravoStudio",
          description,
          areaServed: "Worldwide",
          email: "altravostudio.com",
          telephone: "992 058 6534",
          address: { "@type": "PostalAddress", addressLocality: "Metro Manila", addressCountry: "PH" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "100" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhyWebsites />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Stats />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
