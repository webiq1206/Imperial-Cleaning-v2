import { Switch, Route } from "wouter";
import { queryClient, apiRequest } from "./lib/queryClient";
import { QueryClientProvider, useMutation } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { isValidServiceLocation, getLocationBySlug } from "./lib/routing-utils";
import SEOHead from "@/components/seo-head";
import logoImage from "@assets/imperial-cleaning-logo.jpg";

// Layout
import PageLayout from "@/components/layout/page-layout";

// Pages
import Home from "@/pages/home";
import ConstructionCleaning from "@/pages/construction-cleaning";
import CommercialCleaning from "@/pages/commercial-cleaning";
import ServiceAreasIdaho from "@/pages/service-areas-idaho";
import ServiceAreasUtah from "@/pages/service-areas-utah";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsOfServicePage from "@/pages/terms-of-service";
import SitemapPage from "@/pages/sitemap";
import NotFound from "@/pages/not-found";

// Service/Location Page Component
interface ServiceLocationPageProps {
 params: {
  service: string;
  location: string;
 };
}

function ServiceLocationPage({ params }: ServiceLocationPageProps) {
 const { service, location } = params;
 
 // Validate the service/location combination
 if (!isValidServiceLocation(service, location)) {
  return <NotFound />;
 }
 
 const locationData = getLocationBySlug(location);
 
 // Render the appropriate service page with location context
 if (service === 'construction-cleaning') {
  return <ConstructionCleaning params={{}} locationData={locationData} />;
 } else if (service === 'commercial-cleaning') {
  return <CommercialCleaning params={{}} locationData={locationData} />;
 }
 
 return <NotFound />;
}

// About Page Component with comprehensive SEO
function AboutPage() {
 // About page structured data
 const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://imperialcleaninginc.com/#organization",
  "name": "Imperial Cleaning Inc",
  "alternateName": "Imperial Cleaning",
  "url": "https://imperialcleaninginc.com",
  "logo": "https://imperialcleaninginc.com/hero-logo.png",
  "description": "Professional construction and commercial cleaning company serving Idaho and Utah since 2015. Headquartered in Idaho Falls with comprehensive cleaning solutions for businesses and contractors.",
  "foundingDate": "2015",
  "areaServed": [
   {
    "@type": "State",
    "name": "Idaho",
    "sameAs": "https://en.wikipedia.org/wiki/Idaho"
   },
   {
    "@type": "State",
    "name": "Utah",
    "sameAs": "https://en.wikipedia.org/wiki/Utah"
   }
  ],
  "serviceType": [
   "Construction Cleaning",
   "Commercial Cleaning",
   "Post Construction Cleanup",
   "Janitorial Services"
  ],
  "telephone": "+1-208-520-3202",
  "email": "service@imperialcleaninginc.com",
  "hasCredential": [
   {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "License",
    "name": "Licensed Cleaning Contractor"
   },
   {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Insurance",
    "name": "Bonded and Insured"
   }
  ],
  "numberOfEmployees": {
   "@type": "QuantitativeValue",
   "value": "25"
  }
 };

 const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
   {
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://imperialcleaninginc.com/"
   },
   {
    "@type": "ListItem",
    "position": 2,
    "name": "About",
    "item": "https://imperialcleaninginc.com/about"
   }
  ]
 };

 const companyStats = [
  { label: "Years of Excellence", value: "10+", icon: "calendar" },
  { label: "Projects Completed", value: "2,500+", icon: "building" },
  { label: "States Served", value: "2", icon: "map" },
  { label: "Team Members", value: "25+", icon: "users" }
 ];

 const coreValues = [
  {
   title: "Quality Excellence",
   description: "Every project meets our exacting standards through systematic processes and attention to detail.",
   icon: "star"
  },
  {
   title: "Professional Integrity", 
   description: "Licensed, bonded, and insured with transparent communication and reliable service.",
   icon: "shield"
  },
  {
   title: "Client Partnership",
   description: "We build lasting relationships by understanding unique needs and exceeding expectations.",
   icon: "handshake"
  },
  {
   title: "Innovation Focus",
   description: "Continuous improvement through advanced techniques, equipment, and industry best practices.",
   icon: "lightbulb"
  }
 ];

 const milestones = [
  { year: "2015", title: "Company Founded", description: "Imperial Cleaning Inc. established in Idaho Falls with a focus on construction cleanup." },
  { year: "2018", title: "Service Expansion", description: "Expanded to comprehensive commercial cleaning services for office buildings and facilities." },
  { year: "2020", title: "Technology Integration", description: "Implemented advanced project management and quality assurance systems." },
  { year: "2023", title: "Utah Expansion", description: "Extended services into Utah markets, serving Salt Lake City and surrounding areas." },
  { year: "2024", title: "Regional Leadership", description: "Recognized as the premier cleaning company across Idaho and Utah with 25+ team members." }
 ];

 return (
  <>
   <SEOHead
    title="About Imperial Cleaning Inc | Professional Cleaning Services in Idaho & Utah"
    description="Learn about Imperial Cleaning Inc, Idaho's trusted cleaning company since 2015. Licensed, bonded & insured with expert construction cleanup and commercial cleaning services across ID & UT."
    keywords="about Imperial Cleaning, Idaho cleaning company, Utah cleaning services, professional cleaners, construction cleanup experts, commercial cleaning specialists, Idaho Falls headquarters"
    canonicalUrl="https://imperialcleaninginc.com/about"
    author="Imperial Cleaning Inc"
    geography={{
     region: "ID-UT",
     placename: "Idaho Falls, Idaho",
     position: "43.4666;-112.0336"
    }}
    openGraph={{
     title: "About Imperial Cleaning Inc | Idaho & Utah's Premier Cleaning Company",
     description: "Discover Imperial Cleaning Inc's story - Idaho's most trusted cleaning company since 2015. Expert construction cleanup and commercial cleaning across Idaho and Utah.",
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Idaho Professional Cleaning Company Since 2015",
     type: "website",
     url: "https://imperialcleaninginc.com/about"
    }}
    twitter={{
     card: "summary_large_image",
     title: "About Imperial Cleaning Inc | Idaho & Utah Cleaning Experts",
     description: "Learn about Imperial Cleaning Inc - Idaho's premier cleaning company since 2015. Licensed, bonded & insured cleaning services across Idaho and Utah.",
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Idaho Professional Cleaning Company Since 2015"
    }}
    structuredData={[organizationSchema, breadcrumbSchema]}
   />
   
   {/* Hero Section */}
   <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-8 tracking-tight leading-tight text-foreground">
       About Imperial Cleaning
      </h1>
      <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
       Ten years of excellence in professional cleaning services across Idaho and Utah. 
       Built on integrity, powered by innovation.
      </p>
     </div>
     
     {/* Company Stats */}
     <div className="grid md:grid-cols-4 gap-8 mb-20">
      {companyStats.map((stat, index) => (
       <div key={index} className="glass-card-elevated sophisticated-glow text-center p-6 rounded-lg hover-lift-moderate">
        <div className="text-3xl lg:text-4xl text-primary mb-2">{stat.value}</div>
        <div className="text-sm text-muted-foreground ">{stat.label}</div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Our Story */}
   <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
     <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
       <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight text-foreground">
        Our Story
       </h2>
       <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
         Founded in 2015 in Idaho Falls, Imperial Cleaning Inc. began with a simple mission: 
         to provide the highest quality cleaning services that construction companies and businesses 
         could truly rely on.
        </p>
        <p>
         What started as a local Idaho Falls operation has grown into the region's most trusted 
         cleaning company, serving clients across Idaho and Utah. Our success stems from our 
         unwavering commitment to quality, safety, and customer satisfaction.
        </p>
        <p>
         Today, with over 2,500 completed projects and a team of 25+ professionals, we continue 
         to set the standard for cleaning excellence in the Intermountain West.
        </p>
       </div>
      </div>
      <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
       <h3 className="text-2xl mb-6 text-foreground">Why Choose Imperial Cleaning?</h3>
       <div className="space-y-4">
        <div className="flex items-start gap-3">
         <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
         <div>
          <div className=" text-foreground">Licensed & Insured</div>
          <div className="text-sm text-muted-foreground">Full liability coverage and workers' compensation protection</div>
         </div>
        </div>
        <div className="flex items-start gap-3">
         <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
         <div>
          <div className=" text-foreground">Proven Track Record</div>
          <div className="text-sm text-muted-foreground">10 years serving major contractors and businesses</div>
         </div>
        </div>
        <div className="flex items-start gap-3">
         <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
         <div>
          <div className=" text-foreground">Multi-State Coverage</div>
          <div className="text-sm text-muted-foreground">Comprehensive service across Idaho and Utah</div>
         </div>
        </div>
        <div className="flex items-start gap-3">
         <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
         <div>
          <div className=" text-foreground">Quality Guarantee</div>
          <div className="text-sm text-muted-foreground">100% satisfaction backed by our service promise</div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Core Values */}
   <section className="py-24 px-6 about-values-sophisticated-bg noise-overlay grain-texture">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight text-foreground">
       Our Core Values
      </h2>
      <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       The principles that guide every project, every interaction, and every decision we make.
      </p>
     </div>
     
     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {coreValues.map((value, index) => (
       <div key={index} className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center hover-lift-moderate">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
         <div className="w-6 h-6 text-primary">
          <i className={`fas fa-${value.icon}`}></i>
         </div>
        </div>
        <h3 className="text-xl mb-3 text-foreground">{value.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Company Timeline */}
   <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight text-foreground">
       Our Journey
      </h2>
      <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Ten years of growth, innovation, and service excellence across Idaho and Utah.
      </p>
     </div>
     
     <div className="space-y-12">
      {milestones.map((milestone, index) => (
       <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-32 flex-shrink-0">
         <div className="glass-card-elevated sophisticated-glow text-center py-4 px-6 rounded-lg">
          <div className="text-2xl text-primary">{milestone.year}</div>
         </div>
        </div>
        <div className="flex-1 glass-card-elevated sophisticated-glow p-8 rounded-lg hover-lift-subtle">
         <h3 className="text-2xl mb-3 text-foreground">{milestone.title}</h3>
         <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Leadership & Expertise */}
   <section className="py-24 px-6 about-leadership-sophisticated-bg noise-overlay grain-texture">
    <div className="max-w-7xl mx-auto">
     <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
       <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight text-foreground">
        Leadership & Expertise
       </h2>
       <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
         Our leadership team brings decades of combined experience in commercial cleaning, 
         construction services, and business operations across the Intermountain West.
        </p>
        <p>
         We understand the unique challenges of Idaho and Utah's construction and commercial 
         markets, from seasonal weather patterns to local building codes and safety requirements.
        </p>
        <p>
         This deep regional expertise, combined with our commitment to continuous training 
         and industry best practices, ensures every project receives the professional attention it deserves.
        </p>
       </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
       <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
        <div className="text-3xl text-primary mb-2">100%</div>
        <div className="text-sm text-muted-foreground ">Client Satisfaction Rate</div>
       </div>
       <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
        <div className="text-3xl text-primary mb-2">Zero</div>
        <div className="text-sm text-muted-foreground ">Safety Incidents</div>
       </div>
       <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
        <div className="text-3xl text-primary mb-2">24/7</div>
        <div className="text-sm text-muted-foreground ">Emergency Response</div>
       </div>
       <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
        <div className="text-3xl text-primary mb-2">10+</div>
        <div className="text-sm text-muted-foreground ">Years Experience</div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
     <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg">
      <h2 className="text-3xl lg:text-4xl mb-6 tracking-tight text-foreground">
       Ready to Experience the Imperial Difference?
      </h2>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
       Join over 2,500 satisfied clients who trust Imperial Cleaning for their most important projects. 
       Let's discuss how we can exceed your expectations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
       <a 
        href="tel:+12085203202" 
        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
       >
        Call (208) 520-3202
       </a>
       <a 
        href="mailto:service@imperialcleaninginc.com" 
        className="inline-flex items-center justify-center px-8 py-4 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
       >
        Email Us
       </a>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

// Contact Page Component with comprehensive SEO and multi-step form
function ContactPage() {
 const [currentStep, setCurrentStep] = useState(1);
 const [isSubmitted, setIsSubmitted] = useState(false);
 
 // Contact page structured data
 const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://imperialcleaninginc.com/#localbusiness",
  "name": "Imperial Cleaning Inc",
  "alternateName": "Imperial Cleaning",
  "description": "Professional construction and commercial cleaning services in Idaho Falls and throughout Idaho and Utah. Contact us for free cleaning quotes and reliable service.",
  "url": "https://imperialcleaninginc.com",
  "telephone": "+1-208-520-3202",
  "email": "service@imperialcleaninginc.com",
  "logo": "https://imperialcleaninginc.com/hero-logo.png",
  "geo": {
   "@type": "GeoCoordinates",
   "latitude": "43.4666",
   "longitude": "-112.0336"
  },
  "openingHoursSpecification": [
   {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:00",
    "closes": "18:00"
   },
   {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "08:00",
    "closes": "16:00"
   }
  ],
  "contactPoint": {
   "@type": "ContactPoint",
   "telephone": "+1-208-520-3202",
   "email": "service@imperialcleaninginc.com",
   "contactType": "customer service",
   "areaServed": ["ID", "UT"],
   "availableLanguage": "English"
  },
  "areaServed": [
   {
    "@type": "State",
    "name": "Idaho",
    "sameAs": "https://en.wikipedia.org/wiki/Idaho"
   },
   {
    "@type": "State",
    "name": "Utah",
    "sameAs": "https://en.wikipedia.org/wiki/Utah"
   }
  ],
  "priceRange": "$$"
 };

 const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
   {
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://imperialcleaninginc.com/"
   },
   {
    "@type": "ListItem",
    "position": 2,
    "name": "Contact",
    "item": "https://imperialcleaninginc.com/contact"
   }
  ]
 };

 const contactMethods = [
  {
   title: "Call Us",
   description: "Speak directly with our team",
   action: "tel:+12085203202",
   label: "(208) 520-3202",
   icon: "phone",
   available: "Mon-Fri 7AM-6PM, Sat 8AM-4PM"
  },
  {
   title: "Email Us",
   description: "Send us your project details",
   action: "mailto:service@imperialcleaninginc.com",
   label: "service@imperialcleaninginc.com",
   icon: "envelope",
   available: "24/7 - We respond within 4 hours"
  },
  {
   title: "Visit Us",
   description: "Meet us at our headquarters",
   action: "https://www.google.com/maps/place/Idaho+Falls,+ID",
   label: "Idaho Falls, ID",
   icon: "map-marker-alt",
   available: "By appointment"
  }
 ];

 return (
  <>
   <SEOHead
    title="Contact Imperial Cleaning Inc | Get Your Free Cleaning Quote Today"
    description="Contact Imperial Cleaning Inc for professional cleaning services in Idaho & Utah. Call (208) 520-3202 for free quotes on construction cleanup & commercial cleaning. Idaho Falls headquarters."
    keywords="contact Imperial Cleaning, cleaning quote Idaho, Utah cleaning services, (208) 520-3202, service@imperialcleaninginc.com, Idaho Falls cleaning company, free cleaning estimate"
    canonicalUrl="https://imperialcleaninginc.com/contact"
    author="Imperial Cleaning Inc"
    geography={{
     region: "ID-UT",
     placename: "Idaho Falls, Idaho",
     position: "43.4666;-112.0336"
    }}
    openGraph={{
     title: "Contact Imperial Cleaning Inc | Professional Cleaning Services Idaho & Utah",
     description: "Contact Idaho's premier cleaning company for professional construction cleanup and commercial cleaning services. Free quotes available across Idaho and Utah.",
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Contact Professional Cleaning Services Idaho Utah",
     type: "website",
     url: "https://imperialcleaninginc.com/contact"
    }}
    twitter={{
     card: "summary_large_image",
     title: "Contact Imperial Cleaning Inc | Free Cleaning Quotes",
     description: "Get professional cleaning services in Idaho & Utah. Call (208) 520-3202 for free construction cleanup and commercial cleaning quotes.",
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Contact Professional Cleaning Services Idaho Utah"
    }}
    structuredData={[localBusinessSchema, breadcrumbSchema]}
   />
   
   {/* Hero Section */}
   <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-8 tracking-tight leading-tight text-foreground">
       Get Your Free Quote
      </h1>
      <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
       Connect with Idaho and Utah's most trusted cleaning professionals. 
       Fast responses, transparent pricing, exceptional results.
      </p>
     </div>
     
     {/* Contact Methods */}
     <div className="grid md:grid-cols-3 gap-8 mb-20">
      {contactMethods.map((method, index) => (
       <a
        key={index}
        href={method.action}
        target={method.action.startsWith('http') ? '_blank' : undefined}
        rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="glass-card-elevated sophisticated-glow p-8 rounded-lg text-center hover-lift-moderate group transition-all duration-300"
        data-testid={`contact-method-${method.icon}`}
       >
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
         <i className={`fas fa-${method.icon} text-2xl text-primary`}></i>
        </div>
        <h3 className="text-2xl mb-3 text-foreground">{method.title}</h3>
        <p className="text-muted-foreground mb-4">{method.description}</p>
        <div className="text-primary text-lg mb-2">{method.label}</div>
        <div className="text-sm text-muted-foreground">{method.available}</div>
       </a>
      ))}
     </div>
    </div>
   </section>

   {/* Interactive Contact Form */}
   <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
     <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Form Section */}
      <div>
       <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight text-foreground">
         Tell Us About Your Project
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
         Complete our quick survey to receive a personalized quote tailored to your specific cleaning needs. 
         Takes less than 2 minutes.
        </p>
       </div>
       
       {!isSubmitted ? (
        <ContactFormSurvey 
         currentStep={currentStep}
         setCurrentStep={setCurrentStep}
         onSubmitComplete={() => setIsSubmitted(true)}
        />
       ) : (
        <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg text-center">
         <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check-circle text-3xl text-green-500"></i>
         </div>
         <h3 className="text-2xl mb-4 text-foreground">Quote Request Received!</h3>
         <p className="text-muted-foreground mb-6">
          Thank you for choosing Imperial Cleaning. We'll review your project details and contact you 
          within 24 hours with a detailed quote.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
           href="tel:+12085203202" 
           className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
           <i className="fas fa-phone mr-2"></i>
           Call Now for Faster Service
          </a>
          <button 
           onClick={() => {setIsSubmitted(false); setCurrentStep(1);}}
           className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
          >
           Submit Another Request
          </button>
         </div>
        </div>
       )}
      </div>

      {/* Info Section */}
      <div className="lg:pl-8">
       <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg mb-8">
        <h3 className="text-2xl mb-6 text-foreground">Why Choose Imperial Cleaning?</h3>
        <div className="space-y-4">
         <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
          <div>
           <div className=" text-foreground">Fast Response</div>
           <div className="text-sm text-muted-foreground">All quotes delivered within 24 hours</div>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
          <div>
           <div className=" text-foreground">Transparent Pricing</div>
           <div className="text-sm text-muted-foreground">No hidden fees or surprise charges</div>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
          <div>
           <div className=" text-foreground">Licensed & Insured</div>
           <div className="text-sm text-muted-foreground">Full liability and workers' compensation coverage</div>
          </div>
         </div>
         <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
          <div>
           <div className=" text-foreground">Satisfaction Guarantee</div>
           <div className="text-sm text-muted-foreground">100% satisfaction or we'll make it right</div>
          </div>
         </div>
        </div>
       </div>

       <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
        <h3 className="text-xl mb-4 text-foreground">Service Areas</h3>
        <div className="space-y-3">
         <div>
          <div className=" text-foreground">Idaho</div>
          <div className="text-sm text-muted-foreground">Idaho Falls, Pocatello, Boise, Twin Falls, Rexburg, and surrounding areas</div>
         </div>
         <div>
          <div className=" text-foreground">Utah</div>
          <div className="text-sm text-muted-foreground">Salt Lake City, Logan, Ogden, Provo, and surrounding areas</div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

// Contact Form Survey Component (inline for simplicity)
function ContactFormSurvey({ currentStep, setCurrentStep, onSubmitComplete }) {
 const { toast } = useToast();
 const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  message: ""
 });

 const steps = [
  { id: 1, field: "name", label: "What's your name?", placeholder: "Your full name", required: true },
  { id: 2, field: "company", label: "Company name?", placeholder: "Your company (optional)", required: false },
  { id: 3, field: "email", label: "Email address?", placeholder: "your@email.com", required: true },
  { id: 4, field: "phone", label: "Phone number?", placeholder: "(208) 555-0123", required: true },
  { id: 5, field: "service", label: "What service do you need?", required: true },
  { id: 6, field: "location", label: "Project location?", placeholder: "City, State", required: true },
  { id: 7, field: "message", label: "Project details?", placeholder: "Tell us about your project...", required: false }
 ];

 const submitMutation = useMutation({
  mutationFn: async (data) => {
   return apiRequest("POST", "/api/contact", data);
  },
  onSuccess: () => {
   toast({
    title: "Quote Request Sent!",
    description: "We'll contact you within 24 hours with your quote.",
   });
   onSubmitComplete();
  },
  onError: (error) => {
   console.error("Form submission error:", error);
   toast({
    title: "Error",
    description: "Failed to send quote request. Please try again.",
    variant: "destructive",
   });
  },
 });

 const handleFieldChange = (field, value) => {
  setFormData(prev => ({ ...prev, [field]: value }));
 };

 const nextStep = () => {
  const step = steps[currentStep - 1];
  const fieldValue = formData[step.field];
  
  if (step.required && (!fieldValue || fieldValue.trim() === "")) {
   toast({
    title: "Required Field",
    description: `Please fill in ${step.label.toLowerCase()}`,
    variant: "destructive",
   });
   return;
  }
  
  if (currentStep < steps.length) {
   setCurrentStep(currentStep + 1);
  }
 };

 const prevStep = () => {
  if (currentStep > 1) {
   setCurrentStep(currentStep - 1);
  }
 };

 const handleSubmit = () => {
  submitMutation.mutate(formData);
 };

 const progress = (currentStep / steps.length) * 100;
 const currentStepData = steps[currentStep - 1];

 return (
  <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
   {/* Progress Bar */}
   <div className="mb-8">
    <div className="h-2 bg-muted rounded-full mb-4 overflow-hidden">
     <div 
      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300" 
      style={{ width: `${progress}%` }}
     />
    </div>
    <p className="text-sm text-muted-foreground ">
     Step <span className="text-foreground ">{currentStep}</span> of {steps.length}
    </p>
   </div>

   {/* Current Step */}
   <div className="mb-8">
    <h3 className="text-2xl mb-6 text-foreground">
     {currentStepData.label}
    </h3>
    
    {currentStepData.field === "service" ? (
     <div className="space-y-3">
      {["construction", "commercial", "both"].map((option) => (
       <button
        key={option}
        onClick={() => handleFieldChange("service", option)}
        className={`w-full p-4 text-left border rounded-lg transition-all duration-200 ${
         formData.service === option 
          ? "border-primary bg-primary/5 text-foreground" 
          : "border-border bg-card text-card-foreground hover:border-primary/50"
        }`}
        data-testid={`option-${option}`}
       >
        <div className="">
         {option === "construction" && "Construction Cleaning"}
         {option === "commercial" && "Commercial Cleaning"}
         {option === "both" && "Both Services"}
        </div>
        <div className="text-sm text-muted-foreground mt-1">
         {option === "construction" && "Post-construction cleanup and debris removal"}
         {option === "commercial" && "Office buildings, facilities, and ongoing maintenance"}
         {option === "both" && "Complete cleaning solutions for all your needs"}
        </div>
       </button>
      ))}
     </div>
    ) : currentStepData.field === "message" ? (
     <textarea
      placeholder={currentStepData.placeholder}
      value={formData[currentStepData.field]}
      onChange={(e) => handleFieldChange(currentStepData.field, e.target.value)}
      rows={4}
      className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
      data-testid={`input-${currentStepData.field}`}
     />
    ) : (
     <input
      type={currentStepData.field === "email" ? "email" : currentStepData.field === "phone" ? "tel" : "text"}
      placeholder={currentStepData.placeholder}
      value={formData[currentStepData.field]}
      onChange={(e) => handleFieldChange(currentStepData.field, e.target.value)}
      className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 text-lg"
      data-testid={`input-${currentStepData.field}`}
     />
    )}
   </div>

   {/* Navigation */}
   <div className="flex justify-between items-center">
    <button
     onClick={prevStep}
     disabled={currentStep === 1}
     className={`px-6 py-3 rounded-lg transition-all duration-200 ${
      currentStep === 1 
       ? "invisible" 
       : "border border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
     }`}
     data-testid="button-prev-step"
    >
     <i className="fas fa-arrow-left mr-2"></i>
     Back
    </button>

    {currentStep < steps.length ? (
     <button
      onClick={nextStep}
      className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
      data-testid="button-next-step"
     >
      Next
      <i className="fas fa-arrow-right ml-2"></i>
     </button>
    ) : (
     <button
      onClick={handleSubmit}
      disabled={submitMutation.isPending}
      className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50"
      data-testid="button-submit-form"
     >
      {submitMutation.isPending ? "Submitting..." : "Get My Quote"}
     </button>
    )}
   </div>
  </div>
 );
}

function Router() {
 useAnalytics();
 
 return (
  <PageLayout>
   <Switch>
    {/* Homepage */}
    <Route path="/" component={Home} />
    
    {/* Service pages */}
    <Route path="/construction-cleaning" component={ConstructionCleaning} />
    <Route path="/commercial-cleaning" component={CommercialCleaning} />
    
    {/* Service + Location pages */}
    <Route path="/construction-cleaning/:location">
     {(params) => <ServiceLocationPage params={{ service: 'construction-cleaning', location: params.location }} />}
    </Route>
    <Route path="/commercial-cleaning/:location">
     {(params) => <ServiceLocationPage params={{ service: 'commercial-cleaning', location: params.location }} />}
    </Route>
    
    {/* Service areas */}
    <Route path="/service-areas/idaho" component={ServiceAreasIdaho} />
    <Route path="/service-areas/utah" component={ServiceAreasUtah} />
    
    {/* About and Contact pages */}
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    
    {/* Legal and Information pages */}
    <Route path="/privacy-policy" component={PrivacyPolicyPage} />
    <Route path="/terms-of-service" component={TermsOfServicePage} />
    <Route path="/sitemap" component={SitemapPage} />
    
    {/* 404 fallback */}
    <Route component={NotFound} />
   </Switch>
  </PageLayout>
 );
}

function App() {
 useEffect(() => {
  if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
   console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
  } else {
   initGA();
  }
 }, []);

 return (
  <QueryClientProvider client={queryClient}>
   <TooltipProvider>
    <Toaster />
    <Router />
   </TooltipProvider>
  </QueryClientProvider>
 );
}

export default App;