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

export default function ServiceAreasUtah() {
 const [showContactForm, setShowContactForm] = useState(false);
 
 const utahServiceSchema = createServiceSchema({
  name: "Wasatch Front Cleaning Services - Utah",
  description: "Idaho Falls-headquartered professional commercial and construction cleaning services throughout Salt Lake City, Logan, Ogden, Provo and the entire Wasatch Front region. Comprehensive cleaning solutions for Utah businesses and contractors across Salt Lake, Weber, Davis, and Utah counties.",
  serviceType: "Commercial and Construction Cleaning",
  areaServed: [
   {
    "@type": "City",
    "name": "Salt Lake City",
    "sameAs": "https://en.wikipedia.org/wiki/Salt_Lake_City"
   },
   {
    "@type": "City",
    "name": "Logan",
    "sameAs": "https://en.wikipedia.org/wiki/Logan,_Utah"
   },
   {
    "@type": "City", 
    "name": "Ogden",
    "sameAs": "https://en.wikipedia.org/wiki/Ogden,_Utah"
   },
   {
    "@type": "City",
    "name": "Provo",
    "sameAs": "https://en.wikipedia.org/wiki/Provo,_Utah"
   },
   {
    "@type": "AdministrativeArea",
    "name": "Salt Lake County",
    "sameAs": "https://en.wikipedia.org/wiki/Salt_Lake_County,_Utah"
   },
   {
    "@type": "AdministrativeArea",
    "name": "Weber County",
    "sameAs": "https://en.wikipedia.org/wiki/Weber_County,_Utah"
   },
   {
    "@type": "Place",
    "name": "Wasatch Front",
    "sameAs": "https://en.wikipedia.org/wiki/Wasatch_Front"
   }
  ]
 });

 const localBusinessSchema = createLocalBusinessSchema({
  "areaServed": [
   {
    "@type": "City",
    "name": "Salt Lake City",
    "sameAs": "https://en.wikipedia.org/wiki/Salt_Lake_City"
   },
   {
    "@type": "City", 
    "name": "Logan",
    "sameAs": "https://en.wikipedia.org/wiki/Logan,_Utah"
   },
   {
    "@type": "City",
    "name": "Ogden", 
    "sameAs": "https://en.wikipedia.org/wiki/Ogden,_Utah"
   },
   {
    "@type": "City",
    "name": "Provo",
    "sameAs": "https://en.wikipedia.org/wiki/Provo,_Utah"
   },
   {
    "@type": "AdministrativeArea",
    "name": "Salt Lake County",
    "sameAs": "https://en.wikipedia.org/wiki/Salt_Lake_County,_Utah"
   },
   {
    "@type": "AdministrativeArea",
    "name": "Weber County", 
    "sameAs": "https://en.wikipedia.org/wiki/Weber_County,_Utah"
   },
   {
    "@type": "Place",
    "name": "Wasatch Front",
    "sameAs": "https://en.wikipedia.org/wiki/Wasatch_Front"
   }
  ],
  "description": "Idaho Falls-based professional cleaning services throughout the Wasatch Front region including Salt Lake City, Logan, Ogden, and Provo. Expert commercial and construction cleaning for Utah businesses and contractors.",
  "hasOfferCatalog": {
   "@type": "OfferCatalog",
   "name": "Wasatch Front Cleaning Services",
   "itemListElement": [
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Salt Lake City Commercial Cleaning",
      "description": "Professional office and commercial cleaning services for Salt Lake City business district"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service", 
      "name": "Logan Construction Services",
      "description": "Post-construction cleanup services for Logan area development projects"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Ogden Industrial Cleaning",
      "description": "Industrial facility cleaning for Ogden's manufacturing and logistics centers"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Provo Tech Center Cleaning",
      "description": "Commercial cleaning for Provo's technology companies and educational facilities"
     }
    }
   ]
  }
 });

 const aggregateRatingSchema = createAggregateRatingSchema();
 const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://imperialcleaninginc.com/" },
  { name: "Service Areas", url: "https://imperialcleaninginc.com/#service-areas" },
  { name: "Utah Service Areas", url: "https://imperialcleaninginc.com/service-areas/utah" }
 ]);

 const structuredData = [
  utahServiceSchema,
  localBusinessSchema,
  aggregateRatingSchema,
  breadcrumbSchema
 ];

 return (
  <>
   <SEOHead
    title="Wasatch Front Cleaning Services | Imperial Cleaning Utah"
    description="Professional commercial & construction cleaning in Salt Lake City, Logan, Ogden, Provo & Wasatch Front. Expert Utah cleaning services. Call today!"
    canonicalUrl="https://imperialcleaninginc.com/service-areas/utah"
    openGraph={{
     title: "Wasatch Front Cleaning Services | Imperial Cleaning Utah",
     description: "Professional commercial and construction cleaning services throughout Salt Lake City, Logan, Ogden, Provo and the entire Wasatch Front region in Utah.",
     image: "/og-image.png",
     type: "website"
    }}
    twitter={{
     card: "summary_large_image",
     title: "Wasatch Front Cleaning Services | Imperial Cleaning Utah",
     description: "Expert cleaning services across Salt Lake City, Logan, Ogden, Provo & Wasatch Front. Professional construction & commercial cleaning in Utah.",
     image: "/og-image.png"
    }}
    structuredData={structuredData}
   />
   
   <div className="bg-card/30 border-b border-border/20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
     <Breadcrumbs 
      items={[
       { name: "Service Areas", href: "/#service-areas" },
       { name: "Utah Locations" }
      ]}
     />
    </div>
   </div>
   
   <InternalHeroSection
    title="Utah Cleaning Services"
    subtitle="Professional construction and commercial cleaning services across the Wasatch Front and northern Utah. Serving Logan, Ogden, Salt Lake City, Provo, and surrounding areas."
    pillText="Utah's Professional Cleaning Solution • Licensed & Insured"
    primaryCTA={{
     text: "Request a Quote",
     onClick: () => setShowContactForm(true)
    }}
   />

   {/* Market Overview Section */}
   <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl mb-6 text-foreground">Wasatch Front Market Overview</h2>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
       Imperial Cleaning Inc. extends its Idaho Falls-based expertise to serve Utah's dynamic Wasatch Front corridor. We bring specialized cleaning solutions to the region's diverse economic sectors.
      </p>
     </div>

     <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="resend-card">
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
         <i className="fas fa-microchip text-blue-500 text-xl"></i>
        </div>
        <h3 className="text-xl text-foreground">Tech & Innovation</h3>
       </div>
       <p className="text-muted-foreground text-sm mb-4">
        Silicon Slopes tech corridor (Qualtrics, Adobe, Pluralsight) and University of Utah research facilities demand cleanroom standards and rapid-growth scalability.
       </p>
       <div className="flex items-start">
        <i className="fas fa-check-circle text-primary mr-2 mt-1"></i>
        <span className="text-sm">Tech campus cleaning & scalable programs</span>
       </div>
      </div>

      <div className="resend-card">
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
         <i className="fas fa-landmark text-green-500 text-xl"></i>
        </div>
        <h3 className="text-xl text-foreground">Finance & Government</h3>
       </div>
       <p className="text-muted-foreground text-sm mb-4">
        Utah State Capitol, financial district (Goldman Sachs, Zions Bank), IRS Center, and Hill Air Force Base proximity require security clearances and compliance expertise.
       </p>
       <div className="flex items-start">
        <i className="fas fa-check-circle text-primary mr-2 mt-1"></i>
        <span className="text-sm">Security-cleared personnel & government protocols</span>
       </div>
      </div>

      <div className="resend-card">
       <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
         <i className="fas fa-graduation-cap text-orange-500 text-xl"></i>
        </div>
        <h3 className="text-xl text-foreground">Education & Healthcare</h3>
       </div>
       <p className="text-muted-foreground text-sm mb-4">
        Major universities (Utah State, BYU, University of Utah, Weber State) and Intermountain Healthcare system require specialized facility management and infection control.
       </p>
       <div className="flex items-start">
        <i className="fas fa-check-circle text-primary mr-2 mt-1"></i>
        <span className="text-sm">Educational & medical facility expertise</span>
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
        <h4 className=" text-lg mb-2 text-foreground">Logan & Ogden</h4>
        <p className="text-sm text-muted-foreground">Same-day response capability</p>
        <p className="text-xs text-muted-foreground mt-2">Closer to Idaho Falls headquarters • Rapid deployment</p>
       </div>
       <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
         <i className="fas fa-clock text-blue-500 text-2xl"></i>
        </div>
        <h4 className=" text-lg mb-2 text-foreground">Salt Lake City & Provo</h4>
        <p className="text-sm text-muted-foreground">24-48 hour deployment</p>
        <p className="text-xs text-muted-foreground mt-2">Coordinated scheduling • Full service capability</p>
       </div>
       <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
         <i className="fas fa-phone-volume text-purple-500 text-2xl"></i>
        </div>
        <h4 className=" text-lg mb-2 text-foreground">Emergency Services</h4>
        <p className="text-sm text-muted-foreground">24/7 rapid response</p>
        <p className="text-xs text-muted-foreground mt-2">All Wasatch Front markets • Priority protocols</p>
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
       Each Wasatch Front market has unique requirements. Our city playbooks detail our specialized capabilities and proven track record in your area.
      </p>
     </div>

     {/* Salt Lake City Playbook */}
     <div className="mb-20">
      <div className="border-l-4 border-primary pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Salt Lake City Commercial Cleaning</h2>
       <p className="text-lg text-primary ">State Capital • Financial District • 24-48hr Deployment</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-primary mr-3"></i>
         Key Industries
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-chart-line text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Financial Services District</span>
           <p className="text-sm text-muted-foreground">Goldman Sachs, Zions Bank & major financial institutions</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-landmark text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Utah State Capitol Complex</span>
           <p className="text-sm text-muted-foreground">Government offices & state facilities</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-university text-primary mr-3 mt-1"></i>
          <div>
           <span className="">University of Utah</span>
           <p className="text-sm text-muted-foreground">Research campus & medical facilities</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-hospital text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Intermountain Healthcare</span>
           <p className="text-sm text-muted-foreground">Major medical center network</p>
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
          <i className="fas fa-shield-alt text-primary mr-3 mt-1"></i>
          <div>
           <span className="">High-Security Financial Buildings</span>
           <p className="text-sm text-muted-foreground">Banking security protocols & background checks</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-id-badge text-primary mr-3 mt-1"></i>
          <div>
           <span className="">State Facility Clearances</span>
           <p className="text-sm text-muted-foreground">Government building access requirements</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-microscope text-primary mr-3 mt-1"></i>
          <div>
           <span className="">University Research Labs</span>
           <p className="text-sm text-muted-foreground">Controlled environment protocols</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-shield-virus text-primary mr-3 mt-1"></i>
          <div>
           <span className="">Medical Center Standards</span>
           <p className="text-sm text-muted-foreground">Hospital-grade infection control</p>
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
          <span>Security-cleared personnel for financial institutions</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-primary mr-3"></i>
          <span>Government facility cleaning protocols</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-primary mr-3"></i>
          <span>Medical-grade disinfection systems</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-primary mr-3"></i>
          <span>Financial district cleaning standards</span>
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
          <span className="">State facility requirements</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-building text-primary mr-3"></i>
          <span className="">Banking security compliance</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-hospital-alt text-primary mr-3"></i>
          <span className="">Healthcare facility standards</span>
         </li>
        </ul>
        <div className="pt-4 border-t border-border">
         <p className="text-sm text-muted-foreground italic">
          "Trusted by Salt Lake City's financial district and government facilities requiring the highest security clearances and cleaning standards. Our team maintains strict compliance with banking, government, and healthcare protocols."
         </p>
        </div>
       </div>
      </div>
     </div>

     {/* Logan Playbook */}
     <div className="mb-20">
      <div className="border-l-4 border-blue-500 pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Logan Commercial Cleaning</h2>
       <p className="text-lg text-blue-600 ">Same-Day Response • University & Research Specialists</p>
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
           <span className="">Utah State University</span>
           <p className="text-sm text-muted-foreground">Educational campus & research facilities</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-seedling text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Agricultural Research (USU Extension)</span>
           <p className="text-sm text-muted-foreground">Research labs & testing facilities</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-plane text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Aerospace Industry</span>
           <p className="text-sm text-muted-foreground">Northrop Grumman & defense contractors</p>
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
          <i className="fas fa-microscope text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Research Lab Protocols</span>
           <p className="text-sm text-muted-foreground">Controlled environment cleaning requirements</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-calendar-alt text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">University Facility Scheduling</span>
           <p className="text-sm text-muted-foreground">Academic calendar coordination</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-tractor text-blue-500 mr-3 mt-1"></i>
          <div>
           <span className="">Agricultural Research Facilities</span>
           <p className="text-sm text-muted-foreground">Specialized sanitation requirements</p>
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
          <span>Cleanroom-capable cleaning procedures</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-blue-500 mr-3"></i>
          <span>Educational facility cleaning expertise</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-blue-500 mr-3"></i>
          <span>Research-grade cleaning protocols</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-blue-500 mr-3"></i>
          <span>Flexible scheduling around academic needs</span>
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
          <span className="">University facility standards</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-flask text-blue-500 mr-3"></i>
          <span className="">Research facility protocols</span>
         </li>
        </ul>
        <div className="pt-4 border-t border-border">
         <p className="text-sm text-muted-foreground italic">
          "Experienced serving Utah State University research facilities and agricultural laboratories. Our team understands the unique requirements of educational and research environments, ensuring compliance with strict contamination control standards."
         </p>
        </div>
       </div>
      </div>
     </div>

     {/* Ogden Playbook */}
     <div className="mb-20">
      <div className="border-l-4 border-green-500 pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Ogden Commercial Cleaning</h2>
       <p className="text-lg text-green-600 ">Same-Day Response • Federal Facility Experience</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-green-500 mr-3"></i>
         Key Industries
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-fighter-jet text-green-500 mr-3 mt-1"></i>
          <div>
           <span className="">Hill Air Force Base (Adjacent)</span>
           <p className="text-sm text-muted-foreground">Federal facility & defense contractors</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-university text-green-500 mr-3 mt-1"></i>
          <div>
           <span className="">Weber State University</span>
           <p className="text-sm text-muted-foreground">Educational campus facilities</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-hiking text-green-500 mr-3 mt-1"></i>
          <div>
           <span className="">Outdoor Industry</span>
           <p className="text-sm text-muted-foreground">Amer Sports & outdoor equipment manufacturers</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-file-invoice-dollar text-green-500 mr-3 mt-1"></i>
          <div>
           <span className="">IRS Service Center</span>
           <p className="text-sm text-muted-foreground">Federal government facility</p>
          </div>
         </li>
        </ul>
       </div>

       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-exclamation-triangle text-green-500 mr-3"></i>
         Industry Challenges
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-shield-alt text-green-500 mr-3 mt-1"></i>
          <div>
           <span className="">Government Security Requirements</span>
           <p className="text-sm text-muted-foreground">Federal background checks & clearances</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-id-card text-green-500 mr-3 mt-1"></i>
          <div>
           <span className="">Federal Facility Standards</span>
           <p className="text-sm text-muted-foreground">Government building protocols</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-building text-green-500 mr-3 mt-1"></i>
          <div>
           <span className="">Multi-Building Campus Management</span>
           <p className="text-sm text-muted-foreground">Complex facility coordination</p>
          </div>
         </li>
        </ul>
       </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-tools text-green-500 mr-3"></i>
         Our Solutions
        </h3>
        <ul className="space-y-2">
         <li className="flex items-center">
          <i className="fas fa-check-circle text-green-500 mr-3"></i>
          <span>Federal facility cleaning experience</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-green-500 mr-3"></i>
          <span>Government security protocol compliance</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-green-500 mr-3"></i>
          <span>Multi-building campus management expertise</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-green-500 mr-3"></i>
          <span>Educational facility coordination</span>
         </li>
        </ul>
       </div>

       <div className="resend-card bg-green-500/5">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-certificate text-green-500 mr-3"></i>
         Compliance & Proof
        </h3>
        <ul className="space-y-2 mb-4">
         <li className="flex items-center">
          <i className="fas fa-flag-usa text-green-500 mr-3"></i>
          <span className="">Federal facility standards</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-shield-alt text-green-500 mr-3"></i>
          <span className="">Government facility requirements</span>
         </li>
        </ul>
        <div className="pt-4 border-t border-border">
         <p className="text-sm text-muted-foreground italic">
          "Experienced serving government facilities and federal contractors in the Ogden area. Our security-cleared personnel understand the unique requirements of facilities supporting Hill Air Force Base and IRS operations."
         </p>
        </div>
       </div>
      </div>
     </div>

     {/* Provo/Utah Valley Playbook */}
     <div className="mb-12">
      <div className="border-l-4 border-purple-500 pl-6 mb-8">
       <h2 className="text-3xl mb-2 text-foreground">Provo & Utah Valley Cleaning</h2>
       <p className="text-lg text-purple-600 ">Silicon Slopes • Tech Campus Specialists • 24-48hr Deployment</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-building text-purple-500 mr-3"></i>
         Key Industries
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-laptop-code text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">Silicon Slopes Tech Companies</span>
           <p className="text-sm text-muted-foreground">Qualtrics, Adobe, Pluralsight & startups</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-university text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">Brigham Young University</span>
           <p className="text-sm text-muted-foreground">Campus facilities & research buildings</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-chart-line text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">Financial Services</span>
           <p className="text-sm text-muted-foreground">Fintech & corporate finance offices</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-rocket text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">Tech Startups</span>
           <p className="text-sm text-muted-foreground">Rapid-growth companies & coworking spaces</p>
          </div>
         </li>
        </ul>
       </div>

       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-exclamation-triangle text-purple-500 mr-3"></i>
         Industry Challenges
        </h3>
        <ul className="space-y-3">
         <li className="flex items-start">
          <i className="fas fa-chart-bar text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">Tech Startup Rapid Growth</span>
           <p className="text-sm text-muted-foreground">Scalable cleaning programs needed</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-graduation-cap text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">University Campus Facilities</span>
           <p className="text-sm text-muted-foreground">Large-scale facility management</p>
          </div>
         </li>
         <li className="flex items-start">
          <i className="fas fa-building text-purple-500 mr-3 mt-1"></i>
          <div>
           <span className="">Corporate Campus Environments</span>
           <p className="text-sm text-muted-foreground">Multi-building tech complexes</p>
          </div>
         </li>
        </ul>
       </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
       <div className="resend-card">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-tools text-purple-500 mr-3"></i>
         Our Solutions
        </h3>
        <ul className="space-y-2">
         <li className="flex items-center">
          <i className="fas fa-check-circle text-purple-500 mr-3"></i>
          <span>Scalable cleaning programs for growth</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-purple-500 mr-3"></i>
          <span>Tech campus cleaning expertise</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-purple-500 mr-3"></i>
          <span>Startup-friendly flexible contracts</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-check-circle text-purple-500 mr-3"></i>
          <span>Corporate facility management</span>
         </li>
        </ul>
       </div>

       <div className="resend-card bg-purple-500/5">
        <h3 className="text-xl mb-4 text-foreground flex items-center">
         <i className="fas fa-certificate text-purple-500 mr-3"></i>
         Compliance & Proof
        </h3>
        <ul className="space-y-2 mb-4">
         <li className="flex items-center">
          <i className="fas fa-school text-purple-500 mr-3"></i>
          <span className="">Educational facility standards</span>
         </li>
         <li className="flex items-center">
          <i className="fas fa-building text-purple-500 mr-3"></i>
          <span className="">Corporate facility requirements</span>
         </li>
        </ul>
        <div className="pt-4 border-t border-border">
         <p className="text-sm text-muted-foreground italic">
          "Trusted by Silicon Slopes tech companies and BYU campus facilities. We understand the fast-paced nature of tech environments and provide flexible, scalable cleaning solutions that grow with your business."
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
       Compare our capabilities and response times across all Utah Wasatch Front service areas
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
          <div className=" text-foreground">Logan</div>
          <div className="text-sm text-muted-foreground">Cache County</div>
         </td>
         <td className="px-6 py-4">
          <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm ">
           <i className="fas fa-clock mr-2"></i>
           Same-Day
          </div>
         </td>
         <td className="px-6 py-4">
          <div className="text-sm">Deployed crews</div>
          <div className="text-xs text-muted-foreground">Close to Idaho Falls HQ</div>
         </td>
         <td className="px-6 py-4 text-sm">
          <div>University facilities</div>
          <div>Research laboratories</div>
          <div>Agricultural facilities</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Ogden</div>
          <div className="text-sm text-muted-foreground">Weber County</div>
         </td>
         <td className="px-6 py-4">
          <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-sm ">
           <i className="fas fa-clock mr-2"></i>
           Same-Day
          </div>
         </td>
         <td className="px-6 py-4">
          <div className="text-sm">Deployed crews</div>
          <div className="text-xs text-muted-foreground">Close to Idaho Falls HQ</div>
         </td>
         <td className="px-6 py-4 text-sm">
          <div>Government facilities</div>
          <div>Federal contractors</div>
          <div>Educational campus</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Salt Lake City</div>
          <div className="text-sm text-muted-foreground">Salt Lake County</div>
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
          <div>Financial institutions</div>
          <div>State government</div>
          <div>Medical centers</div>
         </td>
         <td className="px-6 py-4">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
         </td>
        </tr>
        <tr className="border-t border-border hover:bg-primary/5 transition-colors">
         <td className="px-6 py-4">
          <div className=" text-foreground">Provo/Utah Valley</div>
          <div className="text-sm text-muted-foreground">Utah County</div>
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
          <div>Tech companies</div>
          <div>Startup campuses</div>
          <div>University facilities</div>
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
       All Wasatch Front markets include 24/7 emergency response capability with accelerated deployment
      </p>
     </div>
    </div>
   </section>

   {/* Operational Assurances Section */}
   <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl mb-4 text-foreground">Operational Excellence Across Utah</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
       Every Wasatch Front service area benefits from our comprehensive safety, compliance, and quality assurance protocols
      </p>
     </div>

     <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="resend-card text-center">
       <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
        <i className="fas fa-certificate text-green-500 text-2xl"></i>
       </div>
       <h3 className="text-xl mb-3 text-foreground">Licensed & Insured</h3>
       <p className="text-sm text-muted-foreground mb-4">
        Fully licensed and insured for operations across all Utah locations. Comprehensive liability coverage protects your facility and our team.
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
         <span>Utah state licensing</span>
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
        Round-the-clock availability for emergency cleaning services. Rapid response teams ready to deploy across all Utah markets.
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
        Utah DEQ-compliant operations and eco-friendly cleaning products. Proper waste disposal and environmental stewardship across all service areas.
       </p>
       <ul className="space-y-2">
        <li className="flex items-center text-sm">
         <i className="fas fa-check-circle text-green-500 mr-2"></i>
         <span>Utah DEQ compliance</span>
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
        Multi-point quality control inspections and customer satisfaction monitoring. Consistent service standards maintained across all Utah locations.
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
      <h2 className="text-4xl mb-6 text-white">Ready to Experience Professional Wasatch Front Cleaning?</h2>
      <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
       From financial institutions in Salt Lake City to research labs in Logan, from federal facilities in Ogden to tech campuses in Provo—we deliver specialized cleaning solutions that meet your industry's exact requirements.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
       <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="text-3xl text-white mb-2">Same-Day</div>
        <div className="text-white/90">Response in Logan & Ogden</div>
       </div>
       <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="text-3xl text-white mb-2">24-48hr</div>
        <div className="text-white/90">Deployment to SLC & Provo</div>
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
       Licensed, insured, and compliant across all Utah Wasatch Front service areas
      </p>
     </div>

     {/* Market-Specific Quick Actions */}
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
       <h3 className="text-lg mb-3 text-foreground">
        <i className="fas fa-laptop-code text-primary mr-2"></i>
        Tech Facilities
       </h3>
       <p className="text-sm text-muted-foreground mb-4">
        Silicon Slopes tech campus cleaning with scalable programs for rapid-growth companies. Flexible contracts and tech-environment expertise from Lehi to Provo.
       </p>
       <Button 
        variant="outline"
        size="default"
        onClick={() => setShowContactForm(true)}
        data-testid="button-quote-tech"
        className="w-full"
       >
        Get Tech Facility Quote
       </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
       <h3 className="text-lg mb-3 text-foreground">
        <i className="fas fa-landmark text-green-500 mr-2"></i>
        Financial/Government Buildings
       </h3>
       <p className="text-sm text-muted-foreground mb-4">
        Security-cleared cleaning for Salt Lake City's financial district, State Capitol, IRS Center, and federal facilities. Banking and government protocol expertise.
       </p>
       <Button 
        variant="outline"
        size="default"
        onClick={() => setShowContactForm(true)}
        data-testid="button-quote-government"
        className="w-full"
       >
        Get Government Facility Quote
       </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
       <h3 className="text-lg mb-3 text-foreground">
        <i className="fas fa-university text-blue-500 mr-2"></i>
        Educational Institutions
       </h3>
       <p className="text-sm text-muted-foreground mb-4">
        University campus cleaning for USU, BYU, U of U, and Weber State. Flexible scheduling around academic calendars and research lab protocols.
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
