import { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import HomeClient from "@/components/pages/home-client";
import FeaturesSection from "@/components/features-section";
import PartnersSection from "@/components/partners-section";
import ServiceAreasSection from "@/components/service-areas-section";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Imperial Cleaning | Commercial & Construction Cleaning",
  },
  description: "Professional commercial & construction cleaning across Idaho and Utah. Licensed, insured, and trusted since 2015. Serving 24+ locations.",
  keywords: "Idaho Falls commercial cleaning, Eastern Idaho construction cleanup, Pocatello office cleaning, Twin Falls janitorial services, Utah commercial cleaning, Salt Lake City cleaning, Wasatch Front cleaning, southeastern Idaho cleaning company, Bonneville County cleaning, Bannock County commercial cleaners, post construction cleanup",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Imperial Cleaning | Commercial & Construction Cleaning",
    description: "Professional commercial & construction cleaning across Idaho and Utah. Licensed, insured, and trusted since 2015. Serving 24+ locations.",
    url: "https://imperialcleaninginc.com/",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperial Cleaning | Commercial & Construction Cleaning",
    description: "Professional commercial & construction cleaning across Idaho and Utah. Licensed, insured, and trusted since 2015. Serving 24+ locations.",
    site: "@imperialcleaning",
    creator: "@imperialcleaning",
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
    "geo.position": "43.4933;-112.0339",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-208-520-3202",
    "contactType": "customer service",
    "areaServed": ["ID", "UT"],
    "availableLanguage": "English"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://imperialcleaninginc.com/#organization",
  "name": "Imperial Cleaning Inc",
  "alternateName": "Imperial Cleaning",
  "url": "https://imperialcleaninginc.com",
  "logo": "https://imperialcleaninginc.com/hero-logo.png",
  "description": "Idaho Falls headquartered commercial and construction cleaning company serving Idaho and Utah with professional cleaning solutions for contractors and businesses.",
  "foundingDate": "2015",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": "25" },
  "serviceArea": [
    { "@type": "State", "name": "Idaho" },
    { "@type": "State", "name": "Utah" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas in Idaho Falls and Eastern Idaho do you serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "Imperial Cleaning Inc. provides comprehensive commercial and construction cleaning services throughout Eastern Idaho, including Idaho Falls, Pocatello, Blackfoot, Twin Falls, and Rexburg. We also serve the greater Bonneville County and Bannock County areas, as well as extending coverage to the Treasure Valley including Boise, Meridian, and Nampa. Our Idaho Falls headquarters ensures immediate response times for Eastern Idaho projects, with same-day service available for urgent cleanup needs." }
    },
    {
      "@type": "Question",
      "name": "What does your post-construction cleanup process include?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our Eastern Idaho construction cleanup services follow a comprehensive 3-phase process: Phase 1 includes rough cleaning with debris removal, dust elimination, and surface preparation. Phase 2 covers detailed cleaning of windows, fixtures, floors, and all surfaces. Phase 3 is our final inspection-ready cleaning with touch-ups, floor protection, and complete project walkthrough. This systematic approach ensures your construction project in Idaho Falls, Pocatello, or anywhere in Idaho meets inspection standards and is ready for occupancy." }
    },
    {
      "@type": "Question",
      "name": "How flexible are your commercial cleaning schedules in Idaho?",
      "acceptedAnswer": { "@type": "Answer", "text": "We offer extremely flexible commercial cleaning schedules throughout Idaho to accommodate your business needs. Our Idaho Falls and Pocatello commercial cleaning services include daily, weekly, bi-weekly, and monthly options. We work around your business hours - before opening, after closing, or during off-peak times. For 24/7 facilities, we provide overnight and weekend services. Urgent cleanup services are available across Eastern Idaho with same-day response when needed." }
    },
    {
      "@type": "Question",
      "name": "Are you fully insured and bonded for commercial projects?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all commercial and construction cleaning projects in Idaho and Utah. We carry substantial liability coverage and are fully bonded, providing complete protection for your property and peace of mind. Our insurance certificates are readily available and we can add your business as an additional insured for larger projects." }
    },
    {
      "@type": "Question",
      "name": "How do you determine pricing for Nampa and Treasure Valley cleaning services?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our pricing for Idaho Falls construction services and Eastern Idaho commercial cleaning is based on several factors: square footage, frequency of service, type of facility, specific cleaning requirements, and accessibility. We provide detailed, transparent quotes with no hidden fees. Most commercial cleaning estimates in the Idaho Falls area can be provided within 24 hours. For construction cleanup projects, we offer both per-square-foot pricing and flat-rate options depending on project scope." }
    }
  ]
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
      <StructuredData data={[localBusinessSchema, organizationSchema, faqSchema, breadcrumbSchema]} />
      <HeroSection imageAlt="Imperial Cleaning Inc - Idaho Falls Commercial & Construction Cleaning Services Serving Idaho and Utah" />
      <HomeClient
        featuresSection={<FeaturesSection />}
        partnersSection={<PartnersSection />}
        serviceAreasSection={<ServiceAreasSection />}
      />
    </>
  );
}
