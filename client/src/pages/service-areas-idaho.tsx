import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import ContactFormModal from "@/components/contact-form-modal";
import InternalHeroSection from "@/components/internal-hero-section";
import SEOHead, { 
 createLocalBusinessSchema, 
 createServiceSchema,
 createAggregateRatingSchema,
 createBreadcrumbSchema
} from "@/components/seo-head";

export default function ServiceAreasIdaho() {
 const [showContactForm, setShowContactForm] = useState(false);
 
 // Structured data for Idaho service areas page
 const idahoServiceSchema = createServiceSchema({
  name: "Idaho Falls & Eastern Idaho Cleaning Services",
  description: "Headquartered in Idaho Falls, providing comprehensive commercial and construction cleaning services throughout southeastern Idaho, Magic Valley, and extending coverage to the Treasure Valley region. Professional cleaning solutions for Bonneville County, Bannock County, and all Eastern Idaho businesses and contractors.",
  serviceType: "Commercial and Construction Cleaning",
  areaServed: [
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

 const localBusinessSchema = createLocalBusinessSchema({
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
  ],
  "description": "Idaho Falls-headquartered premier cleaning services throughout Eastern Idaho including Pocatello, Blackfoot, Twin Falls, and Rexburg. Professional commercial and construction cleaning for Bonneville County, Bannock County, and southeastern Idaho businesses.",
  "hasOfferCatalog": {
   "@type": "OfferCatalog",
   "name": "Eastern Idaho Cleaning Services",
   "itemListElement": [
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Idaho Falls Commercial Cleaning",
      "description": "Professional office and commercial cleaning services for downtown Idaho Falls business district and Snake River Landing"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service", 
      "name": "Pocatello Construction Cleanup",
      "description": "Post-construction cleanup services for Pocatello's development projects and ISU campus facilities"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Twin Falls Industrial Cleaning",
      "description": "Industrial facility cleaning for Twin Falls' food processing and manufacturing centers"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Blackfoot Specialized Services",
      "description": "Specialized cleaning for Blackfoot's agricultural and food processing facilities"
     }
    }
   ]
  }
 });

 const aggregateRatingSchema = createAggregateRatingSchema();
 const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://imperialcleaninginc.com/" },
  { name: "Service Areas", url: "https://imperialcleaninginc.com/#service-areas" },
  { name: "Idaho Service Areas", url: "https://imperialcleaninginc.com/service-areas/idaho" }
 ]);

 const structuredData = [
  idahoServiceSchema,
  localBusinessSchema,
  aggregateRatingSchema,
  breadcrumbSchema
 ];

 const primaryMarketCities = [
  {
   name: "Idaho Falls",
   population: "65,000+",
   county: "Bonneville County",
   description: "Our headquarters city and the heart of Eastern Idaho's commercial activity. Home to Idaho National Laboratory, Eastern Idaho Regional Medical Center, and a thriving downtown business district. Both construction cleanup and commercial cleaning services available with immediate response and full service capabilities.",
   neighborhoods: ["Downtown Idaho Falls", "West Side", "Ammon", "Lincoln Road Corridor"],
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Government Facility Cleaning", "Healthcare Facility Services", "Laboratory Cleaning", "Corporate Office Maintenance"],
   businessDistricts: ["Downtown Idaho Falls", "Snake River Landing", "Westside Business District"]
  },
  {
   name: "Pocatello",
   population: "56,000+",
   county: "Bannock County",
   description: "Major southeastern Idaho city and home to Idaho State University. Both construction cleanup and commercial cleaning services available for Pocatello's diverse economic base including education, healthcare, manufacturing, and government facilities.",
   neighborhoods: ["Old Town", "Highland", "Chubbuck", "University District"],
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "University Facility Cleaning", "Healthcare Facility Services", "Manufacturing Support"],
   businessDistricts: ["Downtown Pocatello", "University District", "Industrial Park"]
  },
  {
   name: "Blackfoot",
   population: "12,000+",
   county: "Bingham County",
   description: "Regional center for agriculture and food processing in southeastern Idaho. Both construction cleanup and commercial cleaning services available for Blackfoot's growing commercial and industrial sectors.",
   neighborhoods: ["Historic Downtown", "Industrial District", "Residential Areas"],
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Food Processing Facility Cleaning", "Agricultural Facility Services"],
   businessDistricts: ["Downtown Blackfoot", "Industrial Corridor"]
  },
  {
   name: "Rexburg",
   population: "32,000+",
   county: "Madison County",
   description: "Home to Brigham Young University-Idaho and a vibrant college town atmosphere. Both construction cleanup and commercial cleaning services available for Rexburg's educational institutions, student housing, and local businesses.",
   neighborhoods: ["Downtown Rexburg", "University District", "North Rexburg"],
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "University Facility Cleaning", "Educational Institution Services", "Student Housing Support"],
   businessDistricts: ["Downtown Rexburg", "University District"]
  }
 ];

 const secondaryMarkets = [
  {
   name: "Twin Falls",
   description: "Magic Valley's largest city and regional commercial center. Both construction cleanup and commercial cleaning services available for Twin Falls' diverse agricultural, healthcare, and business sectors.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Agricultural Facility Services", "Healthcare Facilities"]
  },
  {
   name: "Ammon",
   description: "Growing community adjacent to Idaho Falls with expanding residential and commercial development. Both construction cleanup and commercial cleaning services available.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Retail Facilities", "Professional Offices"]
  },
  {
   name: "Chubbuck",
   description: "Bannock County community with residential and retail growth. Both construction cleanup and commercial cleaning services available.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Retail Facilities", "Small Business Support"]
  },
  {
   name: "Shelley",
   description: "Agricultural community in Bingham County with growing business sector. Both construction cleanup and commercial cleaning services available.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Agricultural Facilities", "Small Business Support"]
  }
 ];

 const extendedCoverage = [
  {
   name: "Boise",
   description: "Idaho's capital and largest city in the Treasure Valley. Both construction cleanup and commercial cleaning services available for Boise's downtown business district, government facilities, healthcare centers, and corporate offices.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Government Facility Cleaning", "Healthcare Facility Services", "Corporate Office Maintenance"]
  },
  {
   name: "Meridian",
   description: "Fast-growing Treasure Valley city with extensive residential and commercial development. Both construction cleanup and commercial cleaning services available for Meridian's construction projects and commercial facilities.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Retail Facility Cleaning", "Commercial Development Support"]
  },
  {
   name: "Nampa",
   description: "Canyon County's largest city and major industrial center. Both construction cleanup and commercial cleaning services available for Nampa's manufacturing facilities and commercial developments.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Industrial Facility Cleaning", "Manufacturing Support"]
  },
  {
   name: "Caldwell",
   description: "Historic Canyon County seat with growing industrial and agricultural sectors. Both construction cleanup and commercial cleaning services available for food processing facilities and commercial businesses.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Food Processing Facility Cleaning", "Educational Institution Cleaning"]
  },
  {
   name: "Eagle",
   description: "Prestigious Treasure Valley community known for luxury developments and corporate offices. Both construction cleanup and commercial cleaning services available for high-end commercial buildings and medical facilities.",
   services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Executive Office Cleaning", "Medical Facility Services"]
  }
 ];

 return (
  <>
   <SEOHead
    title="Idaho Falls & Eastern Idaho Cleaning Services | Imperial Cleaning Inc"
    description="Professional construction & commercial cleaning throughout Idaho Falls, Pocatello, Twin Falls & Eastern Idaho. Serving Bonneville County, Bannock County & southeastern Idaho businesses. Get your free quote today!"
    canonicalUrl="https://imperialcleaninginc.com/service-areas/idaho"
    openGraph={{
     title: "Idaho Falls & Eastern Idaho Cleaning Services | Imperial Cleaning Inc",
     description: "Professional construction and commercial cleaning services throughout Idaho Falls, Pocatello, Twin Falls, and the entire Eastern Idaho region.",
     image: "/og-image.png",
     type: "website"
    }}
    twitter={{
     card: "summary_large_image",
     title: "Eastern Idaho Cleaning Services | Imperial Cleaning Inc",
     description: "Expert cleaning services across Idaho Falls, Pocatello, Twin Falls & Eastern Idaho. Professional construction & commercial cleaning solutions from our headquarters.",
     image: "/og-image.png"
    }}
    structuredData={structuredData}
   />
   
   {/* Breadcrumbs */}
   <div className="bg-card/30 border-b border-border/20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
     <Breadcrumbs 
      items={[
       { name: "Service Areas", href: "/#service-areas" },
       { name: "Idaho Locations" }
      ]}
     />
    </div>
   </div>
   
   <InternalHeroSection
    title="Idaho Cleaning Services"
    subtitle="Professional construction and commercial cleaning throughout Eastern Idaho, Treasure Valley, and southeastern Idaho. Serving Idaho Falls, Pocatello, Boise, Twin Falls, and surrounding communities."
    pillText="Idaho's Trusted Cleaning Partner • Licensed & Insured"
    primaryCTA={{
     text: "Request a Quote",
     onClick: () => setShowContactForm(true)
    }}
   />

   {/* Market Overview Section */}
   <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl mb-6 text-foreground">Eastern Idaho Market Overview</h2>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
       Imperial Cleaning Inc. is headquartered in Idaho Falls, positioned at the heart of Eastern Idaho's diverse industrial landscape. We serve the region's leading sectors with specialized cleaning expertise.
      </p>
     </div>

     <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="resend-card">
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
         <i className="fas fa-atom text-blue-500 text-xl"></i>
        </div>
        <h3 className="text-xl text-foreground">Nuclear & Research</h3>
       </div>
       <p className="text-muted-foreground text-sm mb-4">
        Idaho National Laboratory (INL) represents one of the nation's premier nuclear research facilities. Our team maintains DOE-level security clearances and radiation safety protocols.
       </p>
       <div className="flex items-start">
        <i className="fas fa-check-circle text-primary mr-2 mt-1"></i>
        <span className="text-sm">Cleanroom & contamination control expertise</span>
       </div>
      </div>

      <div className="resend-card">
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
         <i className="fas fa-heartbeat text-green-500 text-xl"></i>
        </div>
        <h3 className="text-xl text-foreground">Healthcare & Medical</h3>
       </div>
       <p className="text-muted-foreground text-sm mb-4">
        Eastern Idaho Regional Medical Center, Portneuf Medical Center, and numerous healthcare facilities require stringent infection control and sanitization standards.
       </p>
       <div className="flex items-start">
        <i className="fas fa-check-circle text-primary mr-2 mt-1"></i>
        <span className="text-sm">Hospital-grade disinfection & HEPA filtration</span>
       </div>
      </div>

      <div className="resend-card">
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
         <i className="fas fa-industry text-orange-500 text-xl"></i>
        </div>
        <h3 className="text-xl text-foreground">Food Processing & Agriculture</h3>
       </div>
       <p className="text-muted-foreground text-sm mb-4">
        Magic Valley food processing (Chobani, Clif Bar) and Eastern Idaho's agricultural sector demand USDA/FDA compliance and food-grade sanitization protocols.
       </p>
       <div className="flex items-start">
        <i className="fas fa-check-circle text-primary mr-2 mt-1"></i>
        <span className="text-sm">HACCP-compliant cleaning & 24/7 availability</span>
       </div>
      </div>
     </div>

     <div className="bg-card border border-border rounded-xl p-8">
      <h3 className="text-2xl mb-6 text-foreground text-center">Response Time Commitments</h3>
      <div className="grid md:grid-cols-3 gap-6">
       <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
         <i className="fas fa-bolt text-green-500 text-2xl"></i>
        </div>
        <h4 className=" text-lg mb-2 text-foreground">Idaho Falls & Pocatello</h4>
        <p className="text-sm text-muted-foreground">Immediate to same-day response</p>
        <p className="text-xs text-muted-foreground mt-2">Full crew availability • On-site equipment</p>
       </div>
       <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
         <i className="fas fa-clock text-blue-500 text-2xl"></i>
        </div>
        <h4 className=" text-lg mb-2 text-foreground">Boise & Twin Falls</h4>
        <p className="text-sm text-muted-foreground">24-48 hour deployment</p>
        <p className="text-xs text-muted-foreground mt-2">Coordinated scheduling • Full service capability</p>
       </div>
       <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
         <i className="fas fa-phone-volume text-purple-500 text-2xl"></i>
        </div>
        <h4 className=" text-lg mb-2 text-foreground">Emergency Services</h4>
        <p className="text-sm text-muted-foreground">24/7 rapid response</p>
        <p className="text-xs text-muted-foreground mt-2">All markets • Emergency protocols</p>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* City Playbooks */}
   <section className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl mb-6 text-foreground">City-Specific Cleaning Solutions</h2>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
       Each market we serve has unique industrial demands and compliance requirements. Our city playbooks detail our specialized capabilities and proven track record in your area.
      </p>
     </div>

     {/* Idaho Falls Playbook */}
     <div className="mb-20">
      <div className="border-l-4 border-primary pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Idaho Falls Commercial Cleaning</h2>
       <p className="text-lg text-primary ">Headquarters • Full-Service Capability • Immediate Response</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-primary mr-3"></i>
         Key Industries
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-atom text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Idaho National Laboratory (INL)</span>
           <p className="text-sm text-muted-foreground">Nuclear research & DOE facilities</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-hospital text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Eastern Idaho Regional Medical Center</span>
           <p className="text-sm text-muted-foreground">Level II trauma center & medical complex</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-landmark text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Government & Municipal Facilities</span>
           <p className="text-sm text-muted-foreground">County offices & public buildings</p>
          </div>
         </li>
        </ul>
       </div>

       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-exclamation-triangle text-primary mr-3"></i>
         Industry Challenges
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-radiation text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Radiation Safety Compliance</span>
           <p className="text-sm text-muted-foreground">Contamination control & decontamination protocols</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-shield-virus text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Healthcare Infection Control</span>
           <p className="text-sm text-muted-foreground">Hospital-grade disinfection standards</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-microscope text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Cleanroom Protocols</span>
           <p className="text-sm text-muted-foreground">ISO-certified clean environment maintenance</p>
          </div>
         </li>
        </ul>
       </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-tools text-primary mr-3"></i>
         Our Solutions
        </h3>
        <ul className="space-y-2">
         <li className="flex items-center">
          <i className="fas fa-check-circle text-primary mr-3"></i>
          <span>HEPA filtration systems for particle control</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-primary mr-3"></i>
          <span>Certified cleanroom cleaning procedures</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-primary mr-3"></i>
          <span>Medical facility infection prevention expertise</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-primary mr-3"></i>
          <span>Security-cleared personnel for sensitive facilities</span>
         </li>
        </ul>
       </div>

       <div className="resend-card bg-primary/5">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-certificate text-primary mr-3"></i>
         Compliance & Proof
        </h3>
        <ul className="space-y-2 mb-4">
         <li className="flex items-center">
          <i className="fas fa-file-contract text-primary mr-3"></i>
          <span className="">DOE facility requirements</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-hospital-alt text-primary mr-3"></i>
          <span className="">Hospital cleaning standards</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-shield-alt text-primary mr-3"></i>
          <span className="">Infection control protocols</span>
         </li>
        </ul>
        <div className="pt-4 border-t border-border">
         <p className="text-sm text-muted-foreground italic">
          "Proven track record cleaning sensitive research facilities and medical environments requiring the highest standards of cleanliness and safety compliance."
         </p>
        </div>
       </div>
      </div>
     </div>

     {/* Pocatello Playbook */}
     <div className="mb-20">
      <div className="border-l-4 border-blue-500 pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Pocatello Commercial Cleaning</h2>
       <p className="text-lg text-blue-600 ">Same-Day Response • Educational Facility Expertise</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-blue-500 mr-3"></i>
         Key Industries
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-university text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Idaho State University</span>
           <p className="text-sm text-muted-foreground">Educational facilities & campus buildings</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-hospital text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Portneuf Medical Center</span>
           <p className="text-sm text-muted-foreground">Regional healthcare provider</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-cogs text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Manufacturing & Industrial</span>
           <p className="text-sm text-muted-foreground">Production facilities & warehouses</p>
          </div>
         </li>
        </ul>
       </div>

       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-exclamation-triangle text-blue-500 mr-3"></i>
         Industry Challenges
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-calendar-alt text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">University Facility Schedules</span>
           <p className="text-sm text-muted-foreground">After-hours & break period cleaning coordination</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-layer-group text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Multi-Use Building Complexity</span>
           <p className="text-sm text-muted-foreground">Labs, classrooms, offices & common areas</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-user-graduate text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Student Housing Turnover</span>
           <p className="text-sm text-muted-foreground">Semester transitions & rapid deep cleaning</p>
          </div>
         </li>
        </ul>
       </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-tools text-blue-500 mr-3"></i>
         Our Solutions
        </h3>
        <ul className="space-y-2">
         <li className="flex items-center">
          <i className="fas fa-check-circle text-blue-500 mr-3"></i>
          <span>Flexible scheduling around academic calendars</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-blue-500 mr-3"></i>
          <span>Educational facility cleaning expertise</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-blue-500 mr-3"></i>
          <span>Rapid turnover cleaning for housing</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-blue-500 mr-3"></i>
          <span>Multi-environment cleaning protocols</span>
         </li>
        </ul>
       </div>

       <div className="resend-card bg-blue-500/5">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-certificate text-blue-500 mr-3"></i>
         Compliance & Proof
        </h3>
        <ul className="space-y-2 mb-4">
         <li className="flex items-center">
          <i className="fas fa-school text-blue-500 mr-3"></i>
          <span className="">Educational facility standards</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-hospital-alt text-blue-500 mr-3"></i>
          <span className="">Healthcare cleaning requirements</span>
         </li>
        </ul>
        <div className="pt-4 border-t border-border">
         <p className="text-sm text-muted-foreground italic">
          "Experienced in university dormitory turnovers and medical facility cleaning, ensuring students return to pristine living spaces and patients receive care in sanitized environments."
         </p>
        </div>
       </div>
      </div>
     </div>

     {/* Twin Falls Playbook */}
     <div className="mb-20">
      <div className="border-l-4 border-green-600 pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Twin Falls Commercial Cleaning</h2>
       <p className="text-lg text-green-700 ">Magic Valley • Food Processing Specialists • 24/7 Service</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-green-600 mr-3"></i>
         Key Industries
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-cookie-bite text-green-600 mr-3 mt-1"></i>
          <div>
           <span className="">Food Processing Giants</span>
           <p className="text-sm text-muted-foreground">Chobani yogurt, Clif Bar & major manufacturers</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-tractor text-green-600 mr-3 mt-1"></i>
          <div>
           <span className="">Agriculture & Dairy</span>
           <p className="text-sm text-muted-foreground">Processing plants & distribution centers</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-warehouse text-green-600 mr-3 mt-1"></i>
          <div>
           <span className="">Industrial & Logistics</span>
           <p className="text-sm text-muted-foreground">Warehouses & distribution facilities</p>
          </div>
         </li>
        </ul>
       </div>

       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-exclamation-triangle text-green-600 mr-3"></i>
         Industry Challenges
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-file-alt text-green-600 mr-3 mt-1"></i>
          <div>
           <span className="">USDA Compliance Requirements</span>
           <p className="text-sm text-muted-foreground">Strict sanitation & documentation standards</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-shield-virus text-green-600 mr-3 mt-1"></i>
          <div>
           <span className="">Food Safety Standards</span>
           <p className="text-sm text-muted-foreground">FDA regulations & allergen control</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-clock text-green-600 mr-3 mt-1"></i>
          <div>
           <span className="">24/7 Production Operations</span>
           <p className="text-sm text-muted-foreground">Night shift & continuous operation cleaning</p>
          </div>
         </li>
        </ul>
       </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-tools text-green-600 mr-3"></i>
         Our Solutions
        </h3>
        <ul className="space-y-2">
         <li className="flex items-center">
          <i className="fas fa-check-circle text-green-600 mr-3"></i>
          <span>Food-grade sanitization equipment & chemicals</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-green-600 mr-3"></i>
          <span>HACCP-compliant cleaning procedures</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-green-600 mr-3"></i>
          <span>Night shift & weekend crew availability</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-green-600 mr-3"></i>
          <span>Allergen cross-contamination prevention</span>
         </li>
        </ul>
       </div>

       <div className="resend-card bg-green-600/5">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-certificate text-green-600 mr-3"></i>
         Compliance & Proof
        </h3>
        <ul className="space-y-2 mb-4">
         <li className="flex items-center">
          <i className="fas fa-stamp text-green-600 mr-3"></i>
          <span className="">USDA food facility standards</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-square text-green-600 mr-3"></i>
          <span className="">FDA compliance requirements</span>
         </li>
        </ul>
        <div className="pt-4 border-t border-border">
         <p className="text-sm text-muted-foreground italic">
          "Trusted by Magic Valley's leading food processors to maintain sanitary conditions that meet rigorous USDA and FDA standards, enabling uninterrupted production operations."
         </p>
        </div>
       </div>
      </div>
     </div>

     {/* Blackfoot Playbook */}
     <div className="mb-20">
      <div className="border-l-4 border-yellow-500 pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Blackfoot Commercial Cleaning</h2>
       <p className="text-lg text-yellow-600 ">Potato Capital • Agricultural Facilities</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-yellow-500 mr-3"></i>
         Key Industries & Challenges
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-seedling text-yellow-500 mr-3 mt-1"></i>
          <div>
           <span className="">Food Processing & Potato Industry</span>
           <p className="text-sm text-muted-foreground">Agricultural facility cleaning & seasonal demands</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-industry text-yellow-500 mr-3 mt-1"></i>
          <div>
           <span className="">Agricultural Operations</span>
           <p className="text-sm text-muted-foreground">Harvest season deep cleaning & maintenance</p>
          </div>
         </li>
        </ul>
       </div>

       <div className="resend-card bg-yellow-500/5">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-tools text-yellow-500 mr-3"></i>
         Solutions & Compliance
        </h3>
        <ul className="space-y-2 mb-4">
         <li className="flex items-center">
          <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
          <span>Agricultural facility expertise</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
          <span>Food processing protocols</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-certificate text-yellow-500 mr-3"></i>
          <span className="">USDA standards & food safety</span>
         </li>
        </ul>
       </div>
      </div>
     </div>

     {/* Rexburg Playbook */}
     <div className="mb-20">
      <div className="border-l-4 border-purple-500 pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Rexburg Commercial Cleaning</h2>
       <p className="text-lg text-purple-600 ">University Town • Student Housing Specialists</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-purple-500 mr-3"></i>
         Key Industries & Challenges
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-university text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">BYU-Idaho & Educational Facilities</span>
           <p className="text-sm text-muted-foreground">Campus buildings & academic spaces</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-home text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">High-Volume Student Housing</span>
           <p className="text-sm text-muted-foreground">Seasonal occupancy changes & semester transitions</p>
          </div>
         </li>
        </ul>
       </div>

       <div className="resend-card bg-purple-500/5">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-tools text-purple-500 mr-3"></i>
         Solutions & Compliance
        </h3>
        <ul className="space-y-2 mb-4">
         <li className="flex items-center">
          <i className="fas fa-check-circle text-purple-500 mr-3"></i>
          <span>Housing turnover expertise</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-purple-500 mr-3"></i>
          <span>Educational facility cleaning</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-certificate text-purple-500 mr-3"></i>
          <span className="">Educational facility standards</span>
         </li>
        </ul>
       </div>
      </div>
     </div>

     {/* Boise/Treasure Valley Playbook */}
     <div className="mb-12">
      <div className="border-l-4 border-indigo-500 pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Boise & Treasure Valley Cleaning</h2>
       <p className="text-lg text-indigo-600 ">State Capital • Tech Corridor • 24-48hr Deployment</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-indigo-500 mr-3"></i>
         Key Industries
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-landmark text-indigo-500 mr-3 mt-1"></i>
          <div>
           <span className="">State Government Facilities</span>
           <p className="text-sm text-muted-foreground">Capitol complex & state office buildings</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-microchip text-indigo-500 mr-3 mt-1"></i>
          <div>
           <span className="">Micron Technology</span>
           <p className="text-sm text-muted-foreground">Semiconductor manufacturing facilities</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-hospital text-indigo-500 mr-3 mt-1"></i>
          <div>
           <span className="">St. Luke's Health System</span>
           <p className="text-sm text-muted-foreground">Major medical center & network</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-briefcase text-indigo-500 mr-3 mt-1"></i>
          <div>
           <span className="">Corporate Offices</span>
           <p className="text-sm text-muted-foreground">Professional services & business headquarters</p>
          </div>
         </li>
        </ul>
       </div>

       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-exclamation-triangle text-indigo-500 mr-3"></i>
         Industry Challenges
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-user-secret text-indigo-500 mr-3 mt-1"></i>
          <div>
           <span className="">Government Security Clearances</span>
           <p className="text-sm text-muted-foreground">Background checks & secure facility access</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-microscope text-indigo-500 mr-3 mt-1"></i>
          <div>
           <span className="">Semiconductor Cleanroom Standards</span>
           <p className="text-sm text-muted-foreground">ISO-certified particle-free environments</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-star text-indigo-500 mr-3 mt-1"></i>
          <div>
           <span className="">Corporate Expectations</span>
           <p className="text-sm text-muted-foreground">Premium service standards & presentation</p>
          </div>
         </li>
        </ul>
       </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-tools text-indigo-500 mr-3"></i>
         Our Solutions
        </h3>
        <ul className="space-y-2">
         <li className="flex items-center">
          <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
          <span>Security-cleared personnel available</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
          <span>Cleanroom expertise & certification</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
          <span>Corporate-grade service standards</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
          <span>Coordinated 24-48hr deployment</span>
         </li>
        </ul>
       </div>

       <div className="resend-card bg-indigo-500/5">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-certificate text-indigo-500 mr-3"></i>
         Compliance & Proof
        </h3>
        <ul className="space-y-2 mb-4">
         <li className="flex items-center">
          <i className="fas fa-building text-indigo-500 mr-3"></i>
          <span className="">State facility requirements</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-industry text-indigo-500 mr-3"></i>
          <span className="">ISO cleanroom standards</span>
         </li>
        </ul>
        <div className="pt-4 border-t border-border">
         <p className="text-sm text-muted-foreground italic">
          "Experienced serving government facilities requiring security clearances and tech facilities demanding cleanroom precision. Our Treasure Valley team delivers Idaho Falls-quality service to the state capital region."
         </p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Service Readiness Comparison Table */}
   <section className="py-24 px-4 bg-card/30">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl mb-4 text-foreground">Service Readiness by Market</h2>
      <p className="text-xl text-muted-foreground">
       Compare our capabilities and response times across all Idaho service areas
      </p>
     </div>

     <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
       <thead>
        <tr className="bg-primary/10">
         <th className="px-6 py-4 text-left text-foreground">Market</th>
         <th className="px-6 py-4 text-left text-foreground">Response Time</th>
         <th className="px-6 py-4 text-left text-foreground">On-site Crew</th>
         <th className="px-6 py-4 text-left text-foreground">Primary Specializations</th>
         <th className="px-6 py-4 text-left text-foreground">Service Level</th>
        </tr>
       </thead>
       <tbody>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Idaho Falls</div>
          <div className="text-sm text-muted-foreground">Headquarters</div>
         </td>
         <td className="px-6 py-4">
          <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm ">
           <i className="fas fa-bolt mr-2"></i>
           Immediate
          </div>
         </td>
         <td className="px-6 py-4">
          <div className="text-sm">Full-time crews</div>
          <div className="text-xs text-muted-foreground">Equipment on-site</div>
         </td>
         <td className="px-6 py-4 text-sm">
          <div>Nuclear/DOE facilities</div>
          <div>Medical centers</div>
          <div>Government buildings</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Pocatello</div>
          <div className="text-sm text-muted-foreground">Primary Market</div>
         </td>
         <td className="px-6 py-4">
          <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm ">
           <i className="fas fa-clock mr-2"></i>
           Same-Day
          </div>
         </td>
         <td className="px-6 py-4">
          <div className="text-sm">Dedicated crews</div>
          <div className="text-xs text-muted-foreground">Local equipment</div>
         </td>
         <td className="px-6 py-4 text-sm">
          <div>University facilities</div>
          <div>Student housing</div>
          <div>Medical facilities</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Twin Falls</div>
          <div className="text-sm text-muted-foreground">Magic Valley</div>
         </td>
         <td className="px-6 py-4">
          <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm ">
           <i className="fas fa-calendar-alt mr-2"></i>
           24-48 Hours
          </div>
         </td>
         <td className="px-6 py-4">
          <div className="text-sm">Deployed crews</div>
          <div className="text-xs text-muted-foreground">Mobile equipment</div>
         </td>
         <td className="px-6 py-4 text-sm">
          <div>Food processing</div>
          <div>Agriculture facilities</div>
          <div>Industrial plants</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Blackfoot</div>
          <div className="text-sm text-muted-foreground">Regional</div>
         </td>
         <td className="px-6 py-4">
          <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm ">
           <i className="fas fa-clock mr-2"></i>
           Same-Day
          </div>
         </td>
         <td className="px-6 py-4">
          <div className="text-sm">Regional crews</div>
          <div className="text-xs text-muted-foreground">Shared resources</div>
         </td>
         <td className="px-6 py-4 text-sm">
          <div>Agricultural facilities</div>
          <div>Food processing</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Rexburg</div>
          <div className="text-sm text-muted-foreground">Regional</div>
         </td>
         <td className="px-6 py-4">
          <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm ">
           <i className="fas fa-clock mr-2"></i>
           Same-Day
          </div>
         </td>
         <td className="px-6 py-4">
          <div className="text-sm">Regional crews</div>
          <div className="text-xs text-muted-foreground">Shared resources</div>
         </td>
         <td className="px-6 py-4 text-sm">
          <div>Student housing</div>
          <div>Educational facilities</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Boise/Treasure Valley</div>
          <div className="text-sm text-muted-foreground">Extended Coverage</div>
         </td>
         <td className="px-6 py-4">
          <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm ">
           <i className="fas fa-calendar-alt mr-2"></i>
           24-48 Hours
          </div>
         </td>
         <td className="px-6 py-4">
          <div className="text-sm">Deployed crews</div>
          <div className="text-xs text-muted-foreground">Full capability</div>
         </td>
         <td className="px-6 py-4 text-sm">
          <div>Government facilities</div>
          <div>Tech/cleanroom</div>
          <div>Corporate offices</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
       </tbody>
      </table>
     </div>

     <div className="mt-8 text-center">
      <p className="text-sm text-muted-foreground">
       <i className="fas fa-info-circle mr-2"></i>
       All markets include 24/7 emergency response capability with accelerated deployment
      </p>
     </div>
    </div>
   </section>

   {/* Operational Assurances Section */}
   <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl mb-4 text-foreground">Operational Excellence Across Idaho</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
       Every service area benefits from our comprehensive safety, compliance, and quality assurance protocols
      </p>
     </div>

     <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="resend-card text-center">
       <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
        <i className="fas fa-certificate text-green-500 text-2xl"></i>
       </div>
       <h3 className="text-xl mb-3 text-foreground">Licensed & Insured</h3>
       <p className="text-sm text-muted-foreground mb-4">
        Fully licensed and insured for operations across all Idaho locations. Comprehensive liability coverage protects your facility and our team.
       </p>
       <ul className="text-sm text-left space-y-2">
        <li className="flex items-center">
         <i className="fas fa-check text-green-500 mr-2"></i>
         <span>General liability insurance</span>
        </li>
        <li className="flex items-center">
         <i className="fas fa-check text-green-500 mr-2"></i>
         <span>Workers' compensation</span>
        </li>
        <li className="flex items-center">
         <i className="fas fa-check text-green-500 mr-2"></i>
         <span>Idaho state licensing</span>
        </li>
       </ul>
      </div>

      <div className="resend-card text-center">
       <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
        <i className="fas fa-hard-hat text-blue-500 text-2xl"></i>
       </div>
       <h3 className="text-xl mb-3 text-foreground">OSHA Compliance</h3>
       <p className="text-sm text-muted-foreground mb-4">
        Rigorous safety protocols and OSHA compliance training for all personnel. Regular safety audits and continuous improvement programs.
       </p>
       <ul className="text-sm text-left space-y-2">
        <li className="flex items-center">
         <i className="fas fa-check text-blue-500 mr-2"></i>
         <span>OSHA-certified training</span>
        </li>
        <li className="flex items-center">
         <i className="fas fa-check text-blue-500 mr-2"></i>
         <span>Safety equipment protocols</span>
        </li>
        <li className="flex items-center">
         <i className="fas fa-check text-blue-500 mr-2"></i>
         <span>Incident prevention programs</span>
        </li>
       </ul>
      </div>

      <div className="resend-card text-center">
       <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
        <i className="fas fa-phone-volume text-purple-500 text-2xl"></i>
       </div>
       <h3 className="text-xl mb-3 text-foreground">24/7 Emergency Response</h3>
       <p className="text-sm text-muted-foreground mb-4">
        Round-the-clock availability for emergency cleaning services. Rapid response teams ready to deploy across all Idaho markets.
       </p>
       <ul className="text-sm text-left space-y-2">
        <li className="flex items-center">
         <i className="fas fa-check text-purple-500 mr-2"></i>
         <span>24/7 dispatch center</span>
        </li>
        <li className="flex items-center">
         <i className="fas fa-check text-purple-500 mr-2"></i>
         <span>Emergency equipment ready</span>
        </li>
        <li className="flex items-center">
         <i className="fas fa-check text-purple-500 mr-2"></i>
         <span>Rapid deployment protocols</span>
        </li>
       </ul>
      </div>
     </div>

     <div className="grid md:grid-cols-2 gap-8">
      <div className="resend-card">
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
         <i className="fas fa-leaf text-green-500 text-xl"></i>
        </div>
        <h3 className="text-xl text-foreground">Environmental Compliance</h3>
       </div>
       <p className="text-sm text-muted-foreground mb-4">
        Idaho DEQ-compliant operations and eco-friendly cleaning products. Proper waste disposal and environmental stewardship across all service areas.
       </p>
       <ul className="space-y-2">
        <li className="flex items-center text-sm">
         <i className="fas fa-check-circle text-green-500 mr-2"></i>
         <span>Idaho DEQ compliance</span>
        </li>
        <li className="flex items-center text-sm">
         <i className="fas fa-check-circle text-green-500 mr-2"></i>
         <span>Green cleaning products available</span>
        </li>
        <li className="flex items-center text-sm">
         <i className="fas fa-check-circle text-green-500 mr-2"></i>
         <span>Proper waste management protocols</span>
        </li>
       </ul>
      </div>

      <div className="resend-card">
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
         <i className="fas fa-clipboard-check text-orange-500 text-xl"></i>
        </div>
        <h3 className="text-xl text-foreground">Quality Assurance</h3>
       </div>
       <p className="text-sm text-muted-foreground mb-4">
        Multi-point quality control inspections and customer satisfaction monitoring. Consistent service standards maintained across all Idaho locations.
       </p>
       <ul className="space-y-2">
        <li className="flex items-center text-sm">
         <i className="fas fa-check-circle text-orange-500 mr-2"></i>
         <span>Post-service quality inspections</span>
        </li>
        <li className="flex items-center text-sm">
         <i className="fas fa-check-circle text-orange-500 mr-2"></i>
         <span>Customer feedback systems</span>
        </li>
        <li className="flex items-center text-sm">
         <i className="fas fa-check-circle text-orange-500 mr-2"></i>
         <span>Performance metrics tracking</span>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </section>

   {/* Strategic CTAs Section */}
   <section className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
     <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center">
      <h2 className="text-4xl mb-6 text-white">Ready to Experience Industry-Leading Cleaning Services?</h2>
      <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
       From nuclear facilities in Idaho Falls to food processing plants in Twin Falls, from university housing in Rexburg to state government buildings in Boise—we deliver specialized cleaning solutions that meet your industry's exact requirements.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
       <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="text-3xl text-white mb-2">Immediate</div>
        <div className="text-white/90">Response in Idaho Falls & Pocatello</div>
       </div>
       <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="text-3xl text-white mb-2">24-48hr</div>
        <div className="text-white/90">Deployment to Boise & Twin Falls</div>
       </div>
       <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="text-3xl text-white mb-2">24/7</div>
        <div className="text-white/90">Emergency response—all markets</div>
       </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
       <Button 
        variant="secondary"
        size="pill-lg"
        onClick={() => setShowContactForm(true)}
        data-testid="button-get-quote-cta"
        className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
       >
        <i className="fas fa-clipboard-list mr-2"></i>
        Request Your Free Quote
       </Button>
       <Button 
        variant="outline"
        size="pill-lg"
        asChild
        data-testid="button-call-cta"
        className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white/10"
       >
        <a href="tel:+12085241124">
         <i className="fas fa-phone mr-2"></i>
         Call (208) 524-1124
        </a>
       </Button>
      </div>

      <p className="text-sm text-white/80 mt-8">
       <i className="fas fa-shield-alt mr-2"></i>
       Licensed, insured, and compliant across all Idaho service areas
      </p>
     </div>

     {/* Market-Specific Quick Actions */}
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
       <h3 className="text-lg mb-3 text-foreground">
        <i className="fas fa-atom text-primary mr-2"></i>
        Nuclear/DOE Facilities
       </h3>
       <p className="text-sm text-muted-foreground mb-4">
        Need cleanroom-certified cleaning for sensitive research or production environments? Our Idaho Falls team specializes in DOE-compliant facility maintenance.
       </p>
       <Button 
        variant="outline"
        size="default"
        onClick={() => setShowContactForm(true)}
        data-testid="button-quote-nuclear"
        className="w-full"
       >
        Get Nuclear Facility Quote
       </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
       <h3 className="text-lg mb-3 text-foreground">
        <i className="fas fa-industry text-green-500 mr-2"></i>
        Food Processing Plants
       </h3>
       <p className="text-sm text-muted-foreground mb-4">
        USDA/FDA-compliant cleaning for Magic Valley food processors. HACCP protocols, food-grade sanitization, and 24/7 scheduling available.
       </p>
       <Button 
        variant="outline"
        size="default"
        onClick={() => setShowContactForm(true)}
        data-testid="button-quote-food"
        className="w-full"
       >
        Get Food Facility Quote
       </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
       <h3 className="text-lg mb-3 text-foreground">
        <i className="fas fa-university text-blue-500 mr-2"></i>
        Educational Facilities
       </h3>
       <p className="text-sm text-muted-foreground mb-4">
        University buildings, student housing turnovers, and campus facilities. Flexible scheduling around academic calendars in Pocatello and Rexburg.
       </p>
       <Button 
        variant="outline"
        size="default"
        onClick={() => setShowContactForm(true)}
        data-testid="button-quote-education"
        className="w-full"
       >
        Get Education Facility Quote
       </Button>
      </div>
     </div>
    </div>
   </section>

   {showContactForm && (
    <ContactFormModal 
     isOpen={showContactForm} 
     onClose={() => setShowContactForm(false)} 
    />
   )}
  </>
 );
}
