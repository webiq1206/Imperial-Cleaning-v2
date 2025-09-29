import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import FeaturesSection from "@/components/features-section";
import ComplianceCertificationsSection from "@/components/compliance-certifications-section";
import PartnersSection from "@/components/partners-section";
import ProcessTerminalSection from "@/components/process-terminal-section";
import ServiceAreasSection from "@/components/service-areas-section";
import ServicePillarsSection from "@/components/service-pillars-section";
import CaseStudiesSection from "@/components/case-studies-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import SEOHead, { 
  createLocalBusinessSchema, 
  createOrganizationSchema, 
  createServiceSchema,
  createFAQSchema,
  createAggregateRatingSchema,
  createBreadcrumbSchema
} from "@/components/seo-head";

export default function Home() {
  // FAQ data for schema markup
  const faqData = [
    {
      question: "What areas in Boise and the Treasure Valley do you serve?",
      answer: "Imperial Cleaning Inc. provides comprehensive commercial and construction cleaning services throughout the entire Treasure Valley region, including Boise, Meridian, Nampa, Caldwell, Eagle, Star, and Kuna. We also serve outlying areas like Mountain Home, Emmett, and Middleton. Our Boise commercial cleaning team can typically reach any location within 30 minutes, ensuring prompt response times for both scheduled maintenance and urgent cleanup needs."
    },
    {
      question: "What does your post-construction cleanup process include?",
      answer: "Our Treasure Valley construction cleanup services follow a comprehensive 3-phase process: Phase 1 includes rough cleaning with debris removal, dust elimination, and surface preparation. Phase 2 covers detailed cleaning of windows, fixtures, floors, and all surfaces. Phase 3 is our final inspection-ready cleaning with touch-ups, floor protection, and complete project walkthrough. This systematic approach ensures your construction project in Boise, Meridian, or anywhere in Idaho meets inspection standards and is ready for occupancy."
    },
    {
      question: "How flexible are your commercial cleaning schedules in Idaho?",
      answer: "We offer extremely flexible commercial cleaning schedules throughout Idaho to accommodate your business needs. Our Meridian office cleaning and Boise commercial cleaning services include daily, weekly, bi-weekly, and monthly options. We work around your business hours - before opening, after closing, or during off-peak times. For 24/7 facilities, we provide overnight and weekend services. Urgent cleanup services are available across the Treasure Valley with same-day response when needed."
    },
    {
      question: "Are you fully insured and bonded for commercial projects?",
      answer: "Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all commercial and construction cleaning projects in Idaho and Utah. We carry $2 million in liability coverage and are fully bonded, providing complete protection for your property and peace of mind. Our insurance certificates are readily available and we can add your business as an additional insured for larger projects."
    },
    {
      question: "How do you determine pricing for Nampa and Treasure Valley cleaning services?",
      answer: "Our pricing for Nampa post-construction services and Treasure Valley commercial cleaning is based on several factors: square footage, frequency of service, type of facility, specific cleaning requirements, and accessibility. We provide detailed, transparent quotes with no hidden fees. Most commercial cleaning estimates in the Boise area can be provided within 24 hours. For construction cleanup projects, we offer both per-square-foot pricing and flat-rate options depending on project scope."
    }
  ];

  // Structured data schemas
  const localBusinessSchema = createLocalBusinessSchema({
    "name": "Imperial Cleaning Inc",
    "description": "Leading commercial and construction cleaning company serving Boise, Meridian, Nampa, Eagle, and the entire Treasure Valley region. Professional post-construction cleanup and commercial janitorial services for Idaho and Utah businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Blvd",
      "addressLocality": "Boise",
      "addressRegion": "ID",
      "postalCode": "83702",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Boise",
        "sameAs": "https://en.wikipedia.org/wiki/Boise,_Idaho"
      },
      {
        "@type": "City", 
        "name": "Meridian",
        "sameAs": "https://en.wikipedia.org/wiki/Meridian,_Idaho"
      },
      {
        "@type": "City",
        "name": "Nampa", 
        "sameAs": "https://en.wikipedia.org/wiki/Nampa,_Idaho"
      },
      {
        "@type": "City",
        "name": "Eagle",
        "sameAs": "https://en.wikipedia.org/wiki/Eagle,_Idaho"
      },
      {
        "@type": "City",
        "name": "Caldwell",
        "sameAs": "https://en.wikipedia.org/wiki/Caldwell,_Idaho"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ada County",
        "sameAs": "https://en.wikipedia.org/wiki/Ada_County,_Idaho"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Canyon County", 
        "sameAs": "https://en.wikipedia.org/wiki/Canyon_County,_Idaho"
      },
      {
        "@type": "Place",
        "name": "Treasure Valley",
        "sameAs": "https://en.wikipedia.org/wiki/Treasure_Valley"
      }
    ]
  });

  const organizationSchema = createOrganizationSchema({
    "sameAs": [
      "https://www.facebook.com/imperialcleaninginc",
      "https://www.linkedin.com/company/imperial-cleaning-inc",
      "https://www.google.com/business/imperial-cleaning-inc"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Treasure Valley Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Boise Commercial Cleaning",
            "description": "Professional commercial cleaning services for Boise businesses, office buildings, and commercial facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Meridian Construction Cleanup",
            "description": "Post-construction cleanup services for contractors and builders in Meridian and surrounding areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nampa Industrial Cleaning",
            "description": "Industrial and warehouse cleaning services for Nampa manufacturing and distribution facilities"
          }
        }
      ]
    }
  });

  const constructionServiceSchema = createServiceSchema({
    name: "Treasure Valley Construction Cleaning",
    description: "Professional post-construction cleanup services throughout Boise, Meridian, Nampa, Eagle, and the entire Treasure Valley region. Comprehensive debris removal, detailed cleaning, and inspection-ready finishing for contractors and builders.",
    serviceType: "Construction Cleaning",
    areaServed: [
      {
        "@type": "City",
        "name": "Boise, Idaho"
      },
      {
        "@type": "City",
        "name": "Meridian, Idaho"
      },
      {
        "@type": "City", 
        "name": "Nampa, Idaho"
      },
      {
        "@type": "Place",
        "name": "Treasure Valley, Idaho"
      }
    ]
  });

  const commercialServiceSchema = createServiceSchema({
    name: "Boise Commercial Cleaning Services",
    description: "Professional commercial cleaning and janitorial services for Boise area businesses. Daily, weekly, and monthly cleaning schedules for offices, medical facilities, retail stores, and commercial buildings throughout Ada County and Canyon County.",
    serviceType: "Commercial Cleaning",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        "name": "Ada County, Idaho"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Canyon County, Idaho"
      },
      {
        "@type": "Place",
        "name": "Treasure Valley, Idaho"
      }
    ]
  });

  const faqSchema = createFAQSchema(faqData);
  const aggregateRatingSchema = createAggregateRatingSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://imperialcleaninginc.com/" },
    { name: "Boise Commercial Cleaning", url: "https://imperialcleaninginc.com/" }
  ]);

  const structuredData = [
    localBusinessSchema,
    organizationSchema,
    constructionServiceSchema,
    commercialServiceSchema,
    faqSchema,
    aggregateRatingSchema,
    breadcrumbSchema
  ];

  return (
    <>
      <SEOHead
        title="Boise Commercial Cleaning Services | Imperial Cleaning Inc."
        description="Premier commercial & construction cleaning in Boise, Meridian, Nampa & Treasure Valley. Trusted by 500+ businesses across Ada County & Canyon County. Call today!"
        keywords="Boise commercial cleaning, construction cleanup Idaho, Meridian office cleaning, Nampa janitorial services, Treasure Valley cleaning company, Ada County cleaning, Canyon County commercial cleaners, Idaho Falls cleaning services, post construction cleanup"
        canonicalUrl="https://imperialcleaninginc.com/"
        author="Imperial Cleaning Inc"
        geography={{
          region: "ID-UT",
          placename: "Boise, Idaho",
          position: "43.6150;-116.2023"
        }}
        openGraph={{
          title: "Boise Commercial Cleaning Services | Imperial Cleaning Inc.",
          description: "Leading commercial and construction cleaning company serving Boise and the entire Treasure Valley region. Professional cleaning solutions for businesses and contractors.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          imageAlt: "Imperial Cleaning Inc - Professional Cleaning Services in Boise and Treasure Valley",
          type: "website",
          url: "https://imperialcleaninginc.com/",
          siteName: "Imperial Cleaning Inc",
          locale: "en_US"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Boise Commercial Cleaning Services | Imperial Cleaning Inc.",
          description: "Professional commercial & construction cleaning throughout Boise, Meridian, Nampa & the Treasure Valley. Trusted by Idaho businesses since 2010.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          imageAlt: "Imperial Cleaning Inc Logo - Professional Cleaning Services",
          site: "@imperialcleaning",
          creator: "@imperialcleaning"
        }}
        structuredData={structuredData}
      />
      
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ProcessTerminalSection />
      <CaseStudiesSection />
      <ComplianceCertificationsSection />
      <PartnersSection />
      <ServiceAreasSection />
      <ServicePillarsSection />
      <FAQSection />
    </>
  );
}
