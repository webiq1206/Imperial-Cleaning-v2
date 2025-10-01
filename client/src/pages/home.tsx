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
import logoImage from "@assets/imperial-cleaning-logo.jpg";

export default function Home() {
 // FAQ data for schema markup
 const faqData = [
  {
   question: "What areas in Idaho Falls and Eastern Idaho do you serve?",
   answer: "Imperial Cleaning Inc. provides comprehensive commercial and construction cleaning services throughout Eastern Idaho, including Idaho Falls, Pocatello, Blackfoot, Twin Falls, and Rexburg. We also serve the greater Bonneville County and Bannock County areas, as well as extending coverage to the Treasure Valley including Boise, Meridian, and Nampa. Our Idaho Falls headquarters ensures immediate response times for Eastern Idaho projects, with same-day service available for urgent cleanup needs."
  },
  {
   question: "What does your post-construction cleanup process include?",
   answer: "Our Eastern Idaho construction cleanup services follow a comprehensive 3-phase process: Phase 1 includes rough cleaning with debris removal, dust elimination, and surface preparation. Phase 2 covers detailed cleaning of windows, fixtures, floors, and all surfaces. Phase 3 is our final inspection-ready cleaning with touch-ups, floor protection, and complete project walkthrough. This systematic approach ensures your construction project in Idaho Falls, Pocatello, or anywhere in Idaho meets inspection standards and is ready for occupancy."
  },
  {
   question: "How flexible are your commercial cleaning schedules in Idaho?",
   answer: "We offer extremely flexible commercial cleaning schedules throughout Idaho to accommodate your business needs. Our Idaho Falls and Pocatello commercial cleaning services include daily, weekly, bi-weekly, and monthly options. We work around your business hours - before opening, after closing, or during off-peak times. For 24/7 facilities, we provide overnight and weekend services. Urgent cleanup services are available across Eastern Idaho with same-day response when needed."
  },
  {
   question: "Are you fully insured and bonded for commercial projects?",
   answer: "Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all commercial and construction cleaning projects in Idaho and Utah. We carry substantial liability coverage and are fully bonded, providing complete protection for your property and peace of mind. Our insurance certificates are readily available and we can add your business as an additional insured for larger projects."
  },
  {
   question: "How do you determine pricing for Nampa and Treasure Valley cleaning services?",
   answer: "Our pricing for Idaho Falls construction services and Eastern Idaho commercial cleaning is based on several factors: square footage, frequency of service, type of facility, specific cleaning requirements, and accessibility. We provide detailed, transparent quotes with no hidden fees. Most commercial cleaning estimates in the Idaho Falls area can be provided within 24 hours. For construction cleanup projects, we offer both per-square-foot pricing and flat-rate options depending on project scope."
  }
 ];

 // Structured data schemas
 const localBusinessSchema = createLocalBusinessSchema({
  "name": "Imperial Cleaning Inc",
  "description": "Leading commercial and construction cleaning company headquartered in Idaho Falls, serving Eastern Idaho, southeastern Idaho, and extending to the Treasure Valley region. Professional post-construction cleanup and commercial janitorial services for Idaho and Utah businesses.",
  "areaServed": [
   {
    "@type": "City",
    "name": "Idaho Falls",
    "sameAs": "https://en.wikipedia.org/wiki/Idaho_Falls,_Idaho"
   },
   {
    "@type": "City", 
    "name": "Pocatello",
    "sameAs": "https://en.wikipedia.org/wiki/Pocatello,_Idaho"
   },
   {
    "@type": "City",
    "name": "Blackfoot", 
    "sameAs": "https://en.wikipedia.org/wiki/Blackfoot,_Idaho"
   },
   {
    "@type": "City",
    "name": "Twin Falls",
    "sameAs": "https://en.wikipedia.org/wiki/Twin_Falls,_Idaho"
   },
   {
    "@type": "City",
    "name": "Rexburg",
    "sameAs": "https://en.wikipedia.org/wiki/Rexburg,_Idaho"
   },
   {
    "@type": "AdministrativeArea",
    "name": "Bonneville County",
    "sameAs": "https://en.wikipedia.org/wiki/Bonneville_County,_Idaho"
   },
   {
    "@type": "AdministrativeArea",
    "name": "Bannock County", 
    "sameAs": "https://en.wikipedia.org/wiki/Bannock_County,_Idaho"
   },
   {
    "@type": "Place",
    "name": "Eastern Idaho",
    "sameAs": "https://en.wikipedia.org/wiki/Eastern_Idaho"
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
   "name": "Eastern Idaho Cleaning Services",
   "itemListElement": [
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Idaho Falls Commercial Cleaning",
      "description": "Professional commercial cleaning services for Idaho Falls businesses, office buildings, and commercial facilities including Snake River Landing"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service", 
      "name": "Pocatello Construction Cleanup",
      "description": "Post-construction cleanup services for contractors and builders in Pocatello and surrounding southeastern Idaho areas"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Twin Falls Industrial Cleaning",
      "description": "Industrial and warehouse cleaning services for Twin Falls manufacturing and agricultural facilities"
     }
    }
   ]
  }
 });

 const constructionServiceSchema = createServiceSchema({
  name: "Eastern Idaho Construction Cleaning",
  description: "Professional post-construction cleanup services throughout Idaho Falls, Pocatello, Twin Falls, Blackfoot, and the entire Eastern Idaho region. Comprehensive debris removal, detailed cleaning, and inspection-ready finishing for contractors and builders.",
  serviceType: "Construction Cleaning",
  areaServed: [
   {
    "@type": "City",
    "name": "Idaho Falls, Idaho"
   },
   {
    "@type": "City",
    "name": "Pocatello, Idaho"
   },
   {
    "@type": "City", 
    "name": "Twin Falls, Idaho"
   },
   {
    "@type": "Place",
    "name": "Eastern Idaho"
   }
  ]
 });

 const commercialServiceSchema = createServiceSchema({
  name: "Idaho Falls Commercial Cleaning Services",
  description: "Professional commercial cleaning and janitorial services for Idaho Falls area businesses. Daily, weekly, and monthly cleaning schedules for offices, medical facilities, retail stores, and commercial buildings throughout Bonneville County and southeastern Idaho.",
  serviceType: "Commercial Cleaning",
  areaServed: [
   {
    "@type": "AdministrativeArea",
    "name": "Bonneville County, Idaho"
   },
   {
    "@type": "AdministrativeArea",
    "name": "Bannock County, Idaho"
   },
   {
    "@type": "Place",
    "name": "Eastern Idaho"
   }
  ]
 });

 const faqSchema = createFAQSchema(faqData);
 const aggregateRatingSchema = createAggregateRatingSchema();
 const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://imperialcleaninginc.com/" },
  { name: "Idaho Falls Commercial Cleaning", url: "https://imperialcleaninginc.com/" }
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
    title="Commercial Cleaning Idaho Falls | Imperial Cleaning"
    description="Premier commercial & construction cleaning in Idaho Falls, Pocatello, Twin Falls & Eastern Idaho. Licensed, insured. Call (208) 520-3202."
    keywords="Idaho Falls commercial cleaning, Eastern Idaho construction cleanup, Pocatello office cleaning, Twin Falls janitorial services, southeastern Idaho cleaning company, Bonneville County cleaning, Bannock County commercial cleaners, Blackfoot cleaning services, post construction cleanup"
    canonicalUrl="https://imperialcleaninginc.com/"
    author="Imperial Cleaning Inc"
    geography={{
     region: "ID-UT",
     placename: "Idaho Falls, Idaho",
     position: "43.4933;-112.0339"
    }}
    openGraph={{
     title: "Idaho Falls Commercial Cleaning | Imperial Cleaning Inc.",
     description: "Leading commercial and construction cleaning company serving Idaho Falls and Eastern Idaho. Professional cleaning solutions for businesses and contractors.",
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Professional Commercial & Construction Cleaning Services Idaho Utah",
     type: "website",
     url: "https://imperialcleaninginc.com/",
     siteName: "Imperial Cleaning Inc",
     locale: "en_US"
    }}
    twitter={{
     card: "summary_large_image",
     title: "Idaho Falls Commercial Cleaning | Imperial Cleaning Inc.",
     description: "Professional commercial & construction cleaning throughout Idaho Falls, Pocatello & Eastern Idaho. Licensed & insured since 2015.",
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Professional Commercial & Construction Cleaning Services Idaho Utah",
     site: "@imperialcleaning",
     creator: "@imperialcleaning"
    }}
    structuredData={structuredData}
   />
   
   <HeroSection />
   <ServicesSection />
   <FeaturesSection />
   <div id="testimonials">
    <TestimonialsSection />
   </div>
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
