import { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import HomeClient from "@/components/pages/home-client";
import FeaturesSection from "@/components/features-section";
import PartnersSection from "@/components/partners-section";
import ServiceAreasSection from "@/components/service-areas-section";
import ReviewsSection from "@/components/reviews-section";
import { StructuredData } from "@/components/structured-data";
import RelatedContent from "@/components/shared/related-content";
import { homeFaqs } from "@/data/home-faqs";


export const metadata: Metadata = {
  title: {
    absolute: "Commercial & Construction Cleaning | Imperial Cleaning",
  },
  description: "Professional commercial & construction cleaning across Idaho and Utah. Licensed, insured, and trusted since 2015. Serving 24+ locations.",
  keywords: "Idaho Falls commercial cleaning, Eastern Idaho construction cleanup, Pocatello office cleaning, Twin Falls janitorial services, Utah commercial cleaning, Salt Lake City cleaning, Wasatch Front cleaning, southeastern Idaho cleaning company, Bonneville County cleaning, Bannock County commercial cleaners, post construction cleanup",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Commercial & Construction Cleaning | Imperial Cleaning",
    description: "Professional commercial & construction cleaning across Idaho and Utah. Licensed, insured, and trusted since 2015. Serving 24+ locations.",
    url: "https://imperialcleaninginc.com/",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Imperial Cleaning Inc - Professional Commercial & Construction Cleaning Idaho & Utah"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial & Construction Cleaning | Imperial Cleaning",
    description: "Professional commercial & construction cleaning across Idaho and Utah. Licensed, insured, and trusted since 2015. Serving 24+ locations.",
    site: "@imperialcleaninginc",
    creator: "@imperialcleaninginc",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "US-ID",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.5102;-112.0842",
  },
};

// The canonical Organization/LocalBusiness entity (full NAP, geo, hours,
// areaServed) is declared once in app/layout.tsx with @id #organization.
// The home WebPage node references it instead of re-declaring a divergent copy.
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://imperialcleaninginc.com/#webpage",
  "url": "https://imperialcleaninginc.com",
  "name": "Commercial & Construction Cleaning | Imperial Cleaning",
  "isPartOf": { "@id": "https://imperialcleaninginc.com/#website" },
  "about": { "@id": "https://imperialcleaninginc.com/#organization" },
  "inLanguage": "en-US"
};

// Built from the same homeFaqs array rendered by FAQSection, so the structured
// data always matches the visible FAQ (no schema/content mismatch).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" }
  ]
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={[webPageSchema, faqSchema, breadcrumbSchema]} />
      <HeroSection imageAlt="Imperial Cleaning Inc - Idaho Falls Commercial & Construction Cleaning Services Serving Idaho and Utah" />
      <HomeClient
        featuresSection={<FeaturesSection />}
        partnersSection={<PartnersSection />}
        serviceAreasSection={<ServiceAreasSection />}
        reviewsSection={<ReviewsSection />}
      />
      <RelatedContent
        pageUrl="/"
        heading="Explore Imperial Cleaning"
        description="Jump straight to our services, service areas, or get a free quote."
        limit={5}
      />
    </>
  );
}
