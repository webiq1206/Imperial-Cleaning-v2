import { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import HomeClient from "@/components/pages/home-client";
import FeaturesSection from "@/components/features-section";
import PartnersSection from "@/components/partners-section";
import ServiceAreasSection from "@/components/service-areas-section";
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
    canonical: "https://imperialcleaninginc.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "ID-UT",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.4666;-112.0336",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://imperialcleaninginc.com/#localbusiness",
  "name": "Imperial Cleaning Inc",
  "alternateName": "Imperial Cleaning",
  "description": "Leading commercial and construction cleaning company headquartered in Idaho Falls, serving Eastern Idaho, southeastern Idaho, and extending to the Treasure Valley region. Professional post-construction cleanup and commercial janitorial services for Idaho and Utah businesses.",
  "url": "https://imperialcleaninginc.com",
  "telephone": "+1-208-520-3202",
  "email": "service@imperialcleaninginc.com",
  "logo": "https://imperialcleaninginc.com/hero-logo.png",
  "image": "https://imperialcleaninginc.com/hero-logo.png",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Idaho Falls",
    "addressRegion": "ID",
    "postalCode": "83404",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.4666",
    "longitude": "-112.0336"
  },
  "areaServed": [
    { "@type": "City", "name": "Idaho Falls", "sameAs": "https://en.wikipedia.org/wiki/Idaho_Falls,_Idaho" },
    { "@type": "City", "name": "Pocatello", "sameAs": "https://en.wikipedia.org/wiki/Pocatello,_Idaho" },
    { "@type": "City", "name": "Blackfoot", "sameAs": "https://en.wikipedia.org/wiki/Blackfoot,_Idaho" },
    { "@type": "City", "name": "Twin Falls", "sameAs": "https://en.wikipedia.org/wiki/Twin_Falls,_Idaho" },
    { "@type": "City", "name": "Rexburg", "sameAs": "https://en.wikipedia.org/wiki/Rexburg,_Idaho" },
    { "@type": "State", "name": "Idaho", "sameAs": "https://en.wikipedia.org/wiki/Idaho" },
    { "@type": "State", "name": "Utah", "sameAs": "https://en.wikipedia.org/wiki/Utah" }
  ],
  "serviceType": ["Construction Cleaning", "Commercial Cleaning", "Post Construction Cleanup", "Janitorial Services", "Office Cleaning", "Industrial Cleaning"],
  "openingHours": ["Mo-Fr 07:00-18:00"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-208-520-3202",
    "contactType": "customer service",
    "areaServed": ["ID", "UT"],
    "availableLanguage": "English"
  }
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
      <StructuredData data={[localBusinessSchema, faqSchema, breadcrumbSchema]} />
      <HeroSection imageAlt="Imperial Cleaning Inc - Idaho Falls Commercial & Construction Cleaning Services Serving Idaho and Utah" />
      <HomeClient
        featuresSection={<FeaturesSection />}
        partnersSection={<PartnersSection />}
        serviceAreasSection={<ServiceAreasSection />}
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
