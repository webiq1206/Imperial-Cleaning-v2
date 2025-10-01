import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, RouteComponentProps, useLocation } from "wouter";
import ContactFormModal from "@/components/contact-form-modal";
import ServiceLocationsGrid from "@/components/service-locations-grid";
import { ServiceCTA } from "@/components/shared";
import InternalHeroSection from "@/components/internal-hero-section";
import RelatedLinks from "@/components/related-links";
import { ServiceLocation } from "@shared/service-locations";
import logoImage from "@assets/imperial-cleaning-logo.jpg";
import { 
 Building2, 
 Calendar, 
 Users, 
 CheckCircle, 
 ClipboardList, 
 Sparkles, 
 Shield, 
 Factory, 
 Home, 
 Hospital, 
 GraduationCap,
 Award,
 Clock,
 TrendingUp,
 Star,
 Briefcase,
 ShoppingCart,
 MapPin,
 PhoneCall,
 AlertCircle
} from "lucide-react";
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead, { 
 createLocalBusinessSchema, 
 createServiceSchema,
 createAggregateRatingSchema,
 createBreadcrumbSchema
} from "@/components/seo-head";
import { 
 generateLocationTitle,
 generateLocationDescription,
 generateLocationHero,
 generateMarketOverview,
 generateServiceCoverage,
 generateBusinessIntegration,
 generateLocationFAQ,
 generateLocationStructuredData,
 generateCanonicalUrl,
 generateLocationBreadcrumbs,
 generateLocalChallenges,
 generateLocalSolutions,
 generateLocalCaseStudies,
 generateLocalCompliance,
 generateLocalTestimonials,
 generateServiceIntroduction,
 generateWhyChoose,
 generateEnhancedServiceFeatures,
 generateServiceCoverageDetails,
 generateCitySpecificProcess,
 generateIndustryApplications
} from "@/lib/location-content-utils";
import { locationToSlug } from "@/lib/routing-utils";
import { 
 trackServicePageView, 
 trackUserJourney, 
 trackServiceDemand,
 trackScrollDepth 
} from "@/lib/analytics";

interface CommercialCleaningProps extends RouteComponentProps {
 locationData?: ServiceLocation | null;
}

export default function CommercialCleaning({ locationData }: CommercialCleaningProps) {
 const [showContactForm, setShowContactForm] = useState(false);
 const [location] = useLocation();
 
 // Track page view on component mount
 useEffect(() => {
  // Track enhanced page view with service/location context
  trackServicePageView(
   'commercial-cleaning', 
   locationData?.name,
   locationData?.marketTier
  );
  
  // Track user journey stage
  trackUserJourney(
   'discovery',
   locationData ? 'service_location_page' : 'service_hub_page',
   {
    serviceType: 'commercial-cleaning',
    location: locationData?.name
   }
  );
  
  // Track service demand
  trackServiceDemand(
   'commercial-cleaning',
   locationData?.name || 'all_areas',
   'page_view'
  );
 }, [locationData]);
 
 // Track scroll depth
 useEffect(() => {
  const scrollTracked = { 25: false, 50: false, 75: false, 90: false, 100: false };
  
  const handleScroll = () => {
   const scrollPercent = Math.round(
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
   );
   
   const pageType = locationData ? 'service-location' : 'service-hub';
   const serviceContext = {
    serviceType: 'commercial-cleaning' as const,
    location: locationData?.name
   };
   
   if (scrollPercent >= 25 && !scrollTracked[25]) {
    scrollTracked[25] = true;
    trackScrollDepth(25, pageType, serviceContext);
   }
   if (scrollPercent >= 50 && !scrollTracked[50]) {
    scrollTracked[50] = true;
    trackScrollDepth(50, pageType, serviceContext);
   }
   if (scrollPercent >= 75 && !scrollTracked[75]) {
    scrollTracked[75] = true;
    trackScrollDepth(75, pageType, serviceContext);
   }
   if (scrollPercent >= 90 && !scrollTracked[90]) {
    scrollTracked[90] = true;
    trackScrollDepth(90, pageType, serviceContext);
   }
   if (scrollPercent >= 100 && !scrollTracked[100]) {
    scrollTracked[100] = true;
    trackScrollDepth(100, pageType, serviceContext);
   }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, [locationData]);
 
 // Generate location-specific content if locationData is provided
 const isLocationSpecific = !!locationData;
 const locationSlug = locationData ? locationToSlug(locationData.name) : null;
 
 // Location-specific content
 const locationHero = locationData ? generateLocationHero('commercial-cleaning', locationData) : null;
 const marketOverview = locationData ? generateMarketOverview('commercial-cleaning', locationData) : null;
 const serviceCoverage = locationData ? generateServiceCoverage('commercial-cleaning', locationData) : null;
 const businessIntegration = locationData ? generateBusinessIntegration('commercial-cleaning', locationData) : null;
 const locationFAQ = locationData ? generateLocationFAQ('commercial-cleaning', locationData) : null;
 const localChallenges = locationData ? generateLocalChallenges('commercial-cleaning', locationData) : null;
 const localSolutions = locationData ? generateLocalSolutions('commercial-cleaning', locationData) : null;
 const localCaseStudies = locationData ? generateLocalCaseStudies('commercial-cleaning', locationData) : null;
 const localCompliance = locationData ? generateLocalCompliance('commercial-cleaning', locationData) : null;
 const localTestimonials = locationData ? generateLocalTestimonials('commercial-cleaning', locationData) : null;
 
 // New enhanced location-specific content
 const serviceIntroduction = locationData ? generateServiceIntroduction('commercial-cleaning', locationData) : null;
 const whyChoose = locationData ? generateWhyChoose('commercial-cleaning', locationData) : null;
 const enhancedFeatures = locationData ? generateEnhancedServiceFeatures('commercial-cleaning', locationData) : null;
 const coverageDetails = locationData ? generateServiceCoverageDetails('commercial-cleaning', locationData) : null;
 const cityProcess = locationData ? generateCitySpecificProcess('commercial-cleaning', locationData) : null;
 const industryApps = locationData ? generateIndustryApplications('commercial-cleaning', locationData) : null;
 
 // SEO content
 const pageTitle = isLocationSpecific ? generateLocationTitle('commercial-cleaning', locationData!) : "Idaho & Utah Commercial Cleaning | Imperial Cleaning Inc.";
 const pageDescription = isLocationSpecific ? generateLocationDescription('commercial-cleaning', locationData!) : "Professional commercial cleaning services across Idaho & Utah. Daily, weekly & monthly schedules for offices & businesses. Call today!";
 const canonicalUrl = isLocationSpecific ? generateCanonicalUrl('commercial-cleaning', locationSlug!) : "https://imperialcleaninginc.com/commercial-cleaning";

 // Structured data - conditional based on location specificity
 const commercialServiceSchema = isLocationSpecific ? 
  generateLocationStructuredData('commercial-cleaning', locationData!, canonicalUrl) :
  createServiceSchema({
   name: "Idaho & Utah Commercial Cleaning Services",
   description: "Professional commercial cleaning and janitorial services for businesses across Idaho and Utah. Daily, weekly, and monthly cleaning schedules for offices, medical facilities, retail stores, and commercial buildings throughout the region.",
   serviceType: "Commercial Cleaning",
   areaServed: [
    {
     "@type": "State",
     "name": "Idaho",
     "sameAs": "https://en.wikipedia.org/wiki/Idaho"
    },
    {
     "@type": "State",
     "name": "Utah",
     "sameAs": "https://en.wikipedia.org/wiki/Utah"
    },
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
     "name": "Rexburg",
     "sameAs": "https://en.wikipedia.org/wiki/Rexburg,_Idaho"
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
     "name": "Salt Lake City",
     "sameAs": "https://en.wikipedia.org/wiki/Salt_Lake_City"
    },
    {
     "@type": "City",
     "name": "Provo",
     "sameAs": "https://en.wikipedia.org/wiki/Provo,_Utah"
    }
   ],
   provider: {
    "@type": "LocalBusiness",
    "name": "Imperial Cleaning Inc",
    "url": "https://imperialcleaninginc.com",
    "telephone": "+1-208-520-3202",
    "address": {
     "@type": "PostalAddress",
     "addressLocality": "Idaho Falls",
     "addressRegion": "ID",
     "addressCountry": "US"
    }
   }
  });

 // Skip additional local business schema for location-specific pages since it's included in the location structured data
 const localBusinessSchema = !isLocationSpecific ? createLocalBusinessSchema({
  "serviceType": [
   "Commercial Cleaning",
   "Office Cleaning", 
   "Janitorial Services",
   "Medical Facility Cleaning",
   "Retail Cleaning",
   "Corporate Cleaning"
  ],
  "description": "Professional commercial cleaning services for businesses across Idaho and Utah including offices, medical centers, corporate facilities, and retail locations throughout the region.",
  "hasOfferCatalog": {
   "@type": "OfferCatalog",
   "name": "Idaho & Utah Commercial Cleaning Services",
   "itemListElement": [
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Office Cleaning Services",
      "description": "Professional office cleaning services for corporate buildings and business districts across Idaho and Utah"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service", 
      "name": "Medical Facility Cleaning",
      "description": "Specialized medical facility cleaning services for healthcare centers across all Idaho and Utah service areas"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Industrial Cleaning Services",
      "description": "Industrial and warehouse cleaning services for manufacturing and distribution facilities"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Corporate Cleaning Services",
      "description": "Premium commercial cleaning services for corporate offices and executive facilities across Idaho and Utah"
     }
    }
   ]
  }
 }) : null;

 const aggregateRatingSchema = createAggregateRatingSchema();
 const breadcrumbSchema = isLocationSpecific ? 
  createBreadcrumbSchema(generateLocationBreadcrumbs('commercial-cleaning', locationData!, locationSlug!)) :
  createBreadcrumbSchema([
   { name: "Home", url: "https://imperialcleaninginc.com/" },
   { name: "Services", url: "https://imperialcleaninginc.com/#services" },
   { name: "Commercial Cleaning", url: "https://imperialcleaninginc.com/commercial-cleaning" }
  ]);

 const structuredData = [
 ...(isLocationSpecific && Array.isArray(commercialServiceSchema) ? commercialServiceSchema : [commercialServiceSchema]),
 ...(localBusinessSchema ? [localBusinessSchema] : []),
 aggregateRatingSchema
].filter(Boolean);

 return (
  <>
   <SEOHead
    title={pageTitle}
    description={pageDescription}
    keywords={isLocationSpecific ? 
     `commercial cleaning ${locationData!.name}, office cleaning ${locationData!.state}, janitorial services ${locationData!.name}, business cleaning ${locationData!.name} ${locationData!.state}, facility maintenance` :
     "commercial cleaning Idaho Utah, office cleaning, janitorial services, business cleaning Idaho Falls, medical facility cleaning, retail cleaning services"
    }
    canonicalUrl={canonicalUrl}
    author="Imperial Cleaning Inc"
    geography={isLocationSpecific ? {
     region: `${locationData!.state === 'Idaho' ? 'ID' : 'UT'}`,
     placename: `${locationData!.name}, ${locationData!.state}`,
     position: locationData!.coordinates ? `${locationData!.coordinates.lat};${locationData!.coordinates.lng}` : undefined
    } : {
     region: "ID-UT",
     placename: "Idaho Falls, Idaho",
     position: "43.4666;-112.0336"
    }}
    openGraph={{
     title: pageTitle,
     description: pageDescription,
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Commercial Janitorial Cleaning Services Idaho Utah",
     type: "website",
     url: canonicalUrl,
     siteName: "Imperial Cleaning Inc",
     locale: "en_US"
    }}
    twitter={{
     card: "summary_large_image",
     title: pageTitle,
     description: pageDescription,
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Commercial Janitorial Cleaning Services Idaho Utah",
     site: "@imperialcleaning",
     creator: "@imperialcleaning"
    }}
    structuredData={structuredData}
   />
   
   {/* Breadcrumbs */}
   <div className="bg-card/30 border-b border-border/20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
     <Breadcrumbs 
      items={isLocationSpecific ? [
       { name: "Services", href: "/#services" },
       { name: "Commercial Cleaning", href: "/commercial-cleaning" },
       { name: `${locationData!.name}, ${locationData!.state}` }
      ] : [
       { name: "Services", href: "/#services" },
       { name: "Commercial Cleaning" }
      ]}
     />
    </div>
   </div>
   
   {/* Hero Section */}
   <InternalHeroSection
    title={isLocationSpecific ? locationHero!.title : "Professional Commercial Cleaning Services"}
    subtitle={isLocationSpecific ? locationHero!.subtitle : "Expert janitorial and commercial cleaning throughout Idaho and Utah. Flexible scheduling and reliable service for businesses."}
    pillText="Licensed & Insured • Professional Service"
    primaryCTA={{
     text: "Request a Quote",
     onClick: () => setShowContactForm(true)
    }}
   />

   {/* Service-Specific Introduction (Location Pages Only) */}
   {isLocationSpecific && serviceIntroduction && (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
     <div className="max-w-7xl mx-auto">
      <div className="max-w-5xl mx-auto">
       <h2 className="text-4xl md:text-5xl mb-8 text-foreground" data-testid="heading-service-intro">
        {serviceIntroduction.title}
       </h2>
       <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        {serviceIntroduction.paragraphs.map((paragraph, index) => (
         <p key={index}>{paragraph}</p>
        ))}
       </div>
       <div className="mt-10 text-center">
        <Button 
         onClick={() => setShowContactForm(true)}
         variant="pill-primary" 
         size="pill-lg"
         data-testid={`button-quote-${locationData!.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
         Get a Free Commercial Cleaning Quote in {locationData!.name}
        </Button>
       </div>
       
       {/* Related Links */}
       {serviceIntroduction.internalLinks && (
        <div className="mt-12">
         <RelatedLinks
          currentService="commercial-cleaning"
          location={locationData!}
          serviceArea={locationData!.state}
          data-testid="related-links-intro"
         />
        </div>
       )}
      </div>
     </div>
    </section>
   )}

   {/* Why Choose Section (Location Pages Only) */}
   {isLocationSpecific && whyChoose && (
    <section className="py-24 px-4">
     <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
       <h2 className="text-4xl md:text-5xl mb-6 text-foreground" data-testid="heading-why-choose">
        {whyChoose.title}
       </h2>
       <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {whyChoose.intro}
       </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
       {whyChoose.reasons.map((reason, index) => (
        <div key={index} className="glass-card-elevated p-8 hover-lift-gentle">
         <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
           <CheckCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
           <h3 className="text-xl mb-3 text-foreground">{reason.title}</h3>
           <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
          </div>
         </div>
        </div>
       ))}
      </div>
      
      <div className="mt-12 text-center">
       <Button 
        onClick={() => setShowContactForm(true)}
        variant="outline"
        size="lg"
        data-testid={`button-contact-${locationData!.name.toLowerCase().replace(/\s+/g, '-')}`}
       >
        <PhoneCall className="w-4 h-4 mr-2" />
        Call Our {locationData!.name} Team Today
       </Button>
      </div>
     </div>
    </section>
   )}

   {/* Enhanced Service Features (Location Pages Only) */}
   {isLocationSpecific && enhancedFeatures && (
    <section className="py-24 px-4 bg-card/30">
     <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
       <h2 className="text-4xl md:text-5xl mb-6 text-foreground" data-testid="heading-enhanced-features">
        {enhancedFeatures.title}
       </h2>
       <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {enhancedFeatures.intro}
       </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
       {enhancedFeatures.features.map((feature, index) => (
        <div key={index} className="glass-card-elevated p-8 hover-lift-gentle">
         <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
           <Building2 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl text-foreground">{feature.title}</h3>
         </div>
         <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
       ))}
      </div>
      
      <div className="glass-card-elevated p-8 text-center">
       <AlertCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
       <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        {enhancedFeatures.localContext}
       </p>
      </div>
     </div>
    </section>
   )}

   {/* Comprehensive Service Overview */}
   <section className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Professional Commercial Cleaning Services</h2>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
       Imperial Cleaning Inc. delivers exceptional commercial cleaning and janitorial services designed to maintain professional, healthy, and productive business environments. Our comprehensive programs ensure your workplace always makes the best impression.
      </p>
     </div>

     <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <Calendar className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Flexible Scheduling</h3>
       <p className="text-muted-foreground">Daily, weekly, or custom cleaning schedules that work around your business hours</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Complete Maintenance</h3>
       <p className="text-muted-foreground">Comprehensive office cleaning, sanitization, and facility maintenance</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <CheckCircle className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Quality Assurance</h3>
       <p className="text-muted-foreground">Consistent standards and regular quality inspections for reliable service</p>
      </div>
     </div>

     <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
       <h3 className="text-3xl mb-6 text-foreground">Why Choose Our Commercial Cleaning?</h3>
       <ul className="space-y-4 text-muted-foreground">
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Trained professionals with commercial cleaning expertise</span>
        </li>
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Eco-friendly cleaning products and advanced equipment</span>
        </li>
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Flexible scheduling to minimize business disruption</span>
        </li>
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Comprehensive insurance coverage and bonding</span>
        </li>
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Regular quality audits and service reports</span>
        </li>
       </ul>
      </div>
      <div className="glass-card-elevated p-8">
       <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
         <Building2 className="w-10 h-10 text-primary" />
        </div>
        <h4 className="text-2xl text-foreground">Professional Standards</h4>
       </div>
       <ul className="space-y-3 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
         <Shield className="w-4 h-4 text-primary" />
         <span>OSHA safety compliance</span>
        </li>
        <li className="flex items-center gap-2">
         <Award className="w-4 h-4 text-primary" />
         <span>Licensed and bonded</span>
        </li>
        <li className="flex items-center gap-2">
         <Users className="w-4 h-4 text-primary" />
         <span>Background-checked staff</span>
        </li>
        <li className="flex items-center gap-2">
         <CheckCircle className="w-4 h-4 text-primary" />
         <span>Satisfaction guarantees</span>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </section>

   {/* Service Offerings */}
   <section className="py-24 px-4 bg-card/30">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Complete Commercial Cleaning Solutions</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       From daily office maintenance to specialized facility cleaning, we provide comprehensive solutions for businesses of all sizes.
      </p>
     </div>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="glass-card-elevated p-6 hover-lift-gentle">
       <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
        <Briefcase className="w-6 h-6 text-blue-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Office Cleaning</h3>
       <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• Workstation and desk cleaning</li>
        <li>• Conference room maintenance</li>
        <li>• Reception area care</li>
        <li>• Floor care and vacuuming</li>
       </ul>
      </div>
      <div className="glass-card-elevated p-6 hover-lift-gentle">
       <div className="w-12 h-12 mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-green-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Restroom Sanitization</h3>
       <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• Deep cleaning and disinfection</li>
        <li>• Supply restocking</li>
        <li>• Fixture maintenance</li>
        <li>• Odor control systems</li>
       </ul>
      </div>
      <div className="glass-card-elevated p-6 hover-lift-gentle">
       <div className="w-12 h-12 mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
        <ShoppingCart className="w-6 h-6 text-purple-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Break Room & Kitchen</h3>
       <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• Appliance cleaning</li>
        <li>• Counter sanitization</li>
        <li>• Sink and faucet care</li>
        <li>• Microwave and refrigerator cleaning</li>
       </ul>
      </div>
      <div className="glass-card-elevated p-6 hover-lift-gentle">
       <div className="w-12 h-12 mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center">
        <Building2 className="w-6 h-6 text-yellow-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Lobby & Common Areas</h3>
       <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• Reception area cleaning</li>
        <li>• Waiting room maintenance</li>
        <li>• Hallway and corridor care</li>
        <li>• Elevator cleaning</li>
       </ul>
      </div>
      <div className="glass-card-elevated p-6 hover-lift-gentle">
       <div className="w-12 h-12 mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
        <CheckCircle className="w-6 h-6 text-red-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Floor Care</h3>
       <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• Carpet cleaning and maintenance</li>
        <li>• Hard floor mopping and polishing</li>
        <li>• Tile and grout cleaning</li>
        <li>• Floor protection programs</li>
       </ul>
      </div>
      <div className="glass-card-elevated p-6 hover-lift-gentle">
       <div className="w-12 h-12 mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
        <Building2 className="w-6 h-6 text-cyan-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Window & Glass Care</h3>
       <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• Interior window cleaning</li>
        <li>• Glass door maintenance</li>
        <li>• Mirror and fixture cleaning</li>
        <li>• Display case care</li>
       </ul>
      </div>
     </div>
    </div>
   </section>

   {/* Detailed Process/Methodology */}
   <section className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Our Commercial Cleaning Process</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Our systematic approach ensures consistent, thorough cleaning that maintains professional standards for your business environment.
      </p>
     </div>

     <div className="space-y-12">
      {/* Step 1 */}
      <div className="glass-card-elevated p-8 rounded-lg">
       <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
         <span className="text-2xl text-primary">1</span>
        </div>
        <div className="flex-1">
         <div className="flex items-center gap-3 mb-4">
          <ClipboardList className="w-6 h-6 text-primary" />
          <h3 className="text-2xl text-foreground">Initial Assessment & Custom Plan Development</h3>
         </div>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          We begin with a comprehensive evaluation of your facility to understand your specific needs, traffic patterns, and cleaning requirements.
         </p>
         <div className="grid md:grid-cols-2 gap-6">
          <div>
           <h4 className=" text-foreground mb-3">Assessment Includes:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Facility walkthrough and measurements</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Traffic pattern analysis</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Special requirements identification</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Schedule coordination</span>
            </li>
           </ul>
          </div>
          <div>
           <h4 className=" text-foreground mb-3">Custom Plan Creation:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Detailed task checklist development</li>
            <li>• Frequency recommendations</li>
            <li>• Quality control procedures</li>
            <li>• Communication protocols</li>
           </ul>
          </div>
         </div>
        </div>
       </div>
      </div>

      {/* Step 2 */}
      <div className="glass-card-elevated p-8 rounded-lg">
       <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
         <span className="text-2xl text-primary">2</span>
        </div>
        <div className="flex-1">
         <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-primary" />
          <h3 className="text-2xl text-foreground">Team Assignment & Training</h3>
         </div>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          We assign dedicated cleaning professionals to your account and provide specialized training for your facility's specific requirements.
         </p>
         <div className="grid md:grid-cols-2 gap-6">
          <div>
           <h4 className=" text-foreground mb-3">Team Selection:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Background-checked professionals</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Experience-matched assignments</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Consistent team members</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Supervisor designation</span>
            </li>
           </ul>
          </div>
          <div>
           <h4 className=" text-foreground mb-3">Specialized Training:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Facility-specific procedures</li>
            <li>• Safety and security protocols</li>
            <li>• Equipment and product training</li>
            <li>• Customer service standards</li>
           </ul>
          </div>
         </div>
        </div>
       </div>
      </div>

      {/* Step 3 */}
      <div className="glass-card-elevated p-8 rounded-lg">
       <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
         <span className="text-2xl text-primary">3</span>
        </div>
        <div className="flex-1">
         <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-6 h-6 text-primary" />
          <h3 className="text-2xl text-foreground">Scheduled Service Delivery</h3>
         </div>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          Regular, reliable cleaning service delivered according to your custom schedule with minimal disruption to your business operations.
         </p>
         <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-effect p-4 rounded-lg text-center">
           <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
           <h5 className=" text-foreground mb-1">Daily Service</h5>
           <p className="text-xs text-muted-foreground">High-traffic facilities</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
           <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
           <h5 className=" text-foreground mb-1">Weekly Service</h5>
           <p className="text-xs text-muted-foreground">Medium-size offices</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
           <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
           <h5 className=" text-foreground mb-1">Custom Schedule</h5>
           <p className="text-xs text-muted-foreground">Tailored frequency</p>
          </div>
         </div>
        </div>
       </div>
      </div>

      {/* Step 4 */}
      <div className="glass-card-elevated p-8 rounded-lg">
       <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
         <span className="text-2xl text-primary">4</span>
        </div>
        <div className="flex-1">
         <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="w-6 h-6 text-primary" />
          <h3 className="text-2xl text-foreground">Quality Assurance & Reporting</h3>
         </div>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          Ongoing quality control measures ensure consistent service delivery with regular audits, feedback collection, and continuous improvement.
         </p>
         <div className="grid md:grid-cols-2 gap-6">
          <div>
           <h4 className=" text-foreground mb-3">Quality Control:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Regular supervisor inspections</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Customer feedback collection</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Task completion verification</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Corrective action protocols</span>
            </li>
           </ul>
          </div>
          <div>
           <h4 className=" text-foreground mb-3">Service Reporting:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Monthly service summaries</li>
            <li>• Quality audit results</li>
            <li>• Supply usage tracking</li>
            <li>• Issue resolution reports</li>
           </ul>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Service Coverage Details (Location Pages Only) */}
   {isLocationSpecific && coverageDetails && (
    <section className="py-24 px-4 bg-card/30">
     <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
       <h2 className="text-4xl md:text-5xl mb-6 text-foreground" data-testid="heading-coverage-details">
        {coverageDetails.title}
       </h2>
       <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {coverageDetails.intro}
       </p>
      </div>
      
      {coverageDetails.coverage.districts && (
       <div className="mb-12">
        <h3 className="text-3xl mb-8 text-foreground text-center">
         {coverageDetails.coverage.districts.title}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {coverageDetails.coverage.districts.areas.map((area, index) => (
          <div key={index} className="glass-card-elevated p-6 hover-lift-gentle">
           <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-5 h-5 text-primary" />
            <h4 className="text-lg text-foreground">{area.name}</h4>
           </div>
           <p className="text-sm text-muted-foreground">{area.description}</p>
          </div>
         ))}
        </div>
       </div>
      )}
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
       <div className="glass-card-elevated p-8 text-center">
        <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-xl mb-3 text-foreground">Response Time</h3>
        <p className="text-muted-foreground mb-2">{coverageDetails.coverage.responseTime.standard}</p>
        <p className="text-sm text-muted-foreground">{coverageDetails.coverage.responseTime.description}</p>
       </div>
       
       <div className="glass-card-elevated p-8 text-center">
        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-xl mb-3 text-foreground">Emergency Service</h3>
        <p className="text-muted-foreground mb-2">{coverageDetails.coverage.responseTime.emergency}</p>
        <p className="text-sm text-muted-foreground">24/7 availability</p>
       </div>
       
       <div className="glass-card-elevated p-8 text-center">
        <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-xl mb-3 text-foreground">Facility Types</h3>
        <ul className="text-sm text-muted-foreground text-left space-y-2">
         {coverageDetails.coverage.facilityTypes.types.slice(0, 4).map((type, index) => (
          <li key={index} className="flex items-center gap-2">
           <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
           <span>{type}</span>
          </li>
         ))}
        </ul>
       </div>
      </div>
      
      <div className="glass-card-elevated p-8">
       <h3 className="text-2xl mb-4 text-foreground flex items-center gap-3">
        <PhoneCall className="w-6 h-6 text-primary" />
        {coverageDetails.coverage.emergencyService.title}
       </h3>
       <p className="text-muted-foreground leading-relaxed mb-6">
        {coverageDetails.coverage.emergencyService.description}
       </p>
       <Button 
        onClick={() => setShowContactForm(true)}
        variant="pill-primary" 
        size="pill-lg"
        data-testid={`button-emergency-${locationData!.name.toLowerCase().replace(/\s+/g, '-')}`}
       >
        Request Emergency Service in {locationData!.name}
       </Button>
      </div>
     </div>
    </section>
   )}

   {/* City-Specific Process (Location Pages Only) */}
   {isLocationSpecific && cityProcess && (
    <section className="py-24 px-4">
     <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
       <h2 className="text-4xl md:text-5xl mb-6 text-foreground" data-testid="heading-city-process">
        {cityProcess.title}
       </h2>
       <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {cityProcess.intro}
       </p>
      </div>
      
      <div className="space-y-8">
       {cityProcess.steps.map((step, index) => (
        <div key={index} className="glass-card-elevated p-8 hover-lift-gentle">
         <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
           <span className="text-2xl text-primary font-bold">{step.number}</span>
          </div>
          <div className="flex-1">
           <h3 className="text-2xl mb-3 text-foreground">{step.title}</h3>
           <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
           <div className="glass-effect p-4 rounded-lg border-l-4 border-primary">
            <p className="text-sm text-muted-foreground italic">
             <strong className="text-foreground">Local Insight:</strong> {step.localContext}
            </p>
           </div>
          </div>
         </div>
        </div>
       ))}
      </div>
      
      <div className="mt-12 text-center">
       <Button 
        onClick={() => setShowContactForm(true)}
        variant="pill-primary" 
        size="pill-lg"
        data-testid={`button-process-${locationData!.name.toLowerCase().replace(/\s+/g, '-')}`}
       >
        Start Your {locationData!.name} Commercial Cleaning Service
       </Button>
      </div>
     </div>
    </section>
   )}

   {/* Industry-Specific Applications (Location Pages Only) */}
   {isLocationSpecific && industryApps && (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
     <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
       <h2 className="text-4xl md:text-5xl mb-6 text-foreground" data-testid="heading-industry-apps">
        {industryApps.title}
       </h2>
       <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {industryApps.intro}
       </p>
      </div>
      
      <div className="space-y-12">
       {industryApps.industries.map((industry, index) => (
        <div key={index} className="glass-card-elevated p-8">
         <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
           <Briefcase className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-3xl text-foreground">{industry.title}</h3>
         </div>
         
         <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {industry.description}
         </p>
         
         <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
           <h4 className="text-lg text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Key Requirements for {locationData!.name}
           </h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            {industry.requirements.map((req, reqIndex) => (
             <li key={reqIndex} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{req}</span>
             </li>
            ))}
           </ul>
          </div>
          
          <div className="glass-effect p-6 rounded-lg border-l-4 border-primary">
           <h4 className="text-lg text-foreground mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Our {locationData!.name} Experience
           </h4>
           <p className="text-sm text-muted-foreground leading-relaxed">
            {industry.experience}
           </p>
          </div>
         </div>
        </div>
       ))}
      </div>
      
      <div className="mt-12 text-center">
       <Button 
        onClick={() => setShowContactForm(true)}
        variant="outline"
        size="lg"
        data-testid={`button-industry-${locationData!.name.toLowerCase().replace(/\s+/g, '-')}`}
       >
        Discuss Your {locationData!.name} Industry Requirements
       </Button>
      </div>
     </div>
    </section>
   )}

   {/* Industries Served */}
   <section className="py-24 px-4 bg-card/50">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Industries We Serve</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Our commercial cleaning expertise serves diverse industries across Idaho and Utah with specialized knowledge and tailored solutions.
      </p>
     </div>

     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Briefcase className="w-8 h-8 text-blue-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Corporate Offices</h3>
       <p className="text-sm text-muted-foreground">Professional office buildings, executive suites, and corporate headquarters</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Hospital className="w-8 h-8 text-red-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Healthcare Facilities</h3>
       <p className="text-sm text-muted-foreground">Medical offices, clinics, dental practices, and healthcare centers</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <ShoppingCart className="w-8 h-8 text-green-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Retail & Shopping</h3>
       <p className="text-sm text-muted-foreground">Retail stores, shopping centers, and commercial retail spaces</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <GraduationCap className="w-8 h-8 text-yellow-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Educational Institutions</h3>
       <p className="text-sm text-muted-foreground">Schools, universities, training centers, and educational facilities</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Factory className="w-8 h-8 text-purple-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Manufacturing & Industrial</h3>
       <p className="text-sm text-muted-foreground">Manufacturing plants, warehouses, and industrial facilities</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Shield className="w-8 h-8 text-cyan-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Government Buildings</h3>
       <p className="text-sm text-muted-foreground">Municipal buildings, courthouses, and government facilities</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Building2 className="w-8 h-8 text-orange-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Financial Services</h3>
       <p className="text-sm text-muted-foreground">Banks, credit unions, insurance offices, and financial institutions</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Users className="w-8 h-8 text-pink-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Professional Services</h3>
       <p className="text-sm text-muted-foreground">Law firms, accounting offices, consulting firms, and professional practices</p>
      </div>
     </div>
    </div>
   </section>

   {/* Service Areas Grid */}
   <ServiceLocationsGrid 
    serviceType="commercial-cleaning"
    title="Commercial Cleaning Service Areas"
    description="Professional commercial cleaning and janitorial services available in all our service locations across Idaho and Utah. Click any location to view local commercial cleaning options, pricing, and contact information."
   />

   {/* Commercial-Specific Case Studies */}
   <section className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Commercial Cleaning Success Stories</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Real clients, real results. See how our commercial cleaning services have helped businesses maintain professional environments across Idaho and Utah.
      </p>
     </div>

     <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {/* Case Study 1 */}
      <div className="glass-card-elevated p-8 rounded-lg hover-lift-gentle group">
       <div className="flex items-center gap-3 mb-4">
        <div className="px-3 py-1 rounded-full text-xs border text-blue-400 border-blue-400/20 bg-blue-400/10">
         COMMERCIAL
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
         <MapPin className="w-3 h-3" />
         Twin Falls, ID
        </div>
       </div>
       <h3 className="text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        Corporate Headquarters
       </h3>
       <p className="text-lg text-primary mb-4 ">
        Luxury Office Maintenance Program Excellence
       </p>
       <p className="text-muted-foreground mb-6 leading-relaxed">
        A prestigious Twin Falls corporate headquarters demanded the highest standards of cleanliness for executive offices, conference facilities, and client reception areas. Our custom luxury office maintenance program maintains impeccable standards.
       </p>
       <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">18</div>
         <div className="text-xs text-muted-foreground">Months Service</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">45,000</div>
         <div className="text-xs text-muted-foreground">Sq Ft Maintained</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">100%</div>
         <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">2026</div>
         <div className="text-xs text-muted-foreground">Contract Extended</div>
        </div>
       </div>
       <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
        <p className="text-sm text-muted-foreground italic">
         "Imperial Cleaning has become an extension of our team. Their attention to detail and professionalism reflects the standards we expect in our corporate environment."
        </p>
        <p className="text-sm text-foreground mt-2">
         - James Patterson, COO, Twin Falls Financial Partners
        </p>
       </div>
      </div>

      {/* Case Study 2 */}
      <div className="glass-card-elevated p-8 rounded-lg hover-lift-gentle group">
       <div className="flex items-center gap-3 mb-4">
        <div className="px-3 py-1 rounded-full text-xs border text-green-400 border-green-400/20 bg-green-400/10">
         HEALTHCARE
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
         <MapPin className="w-3 h-3" />
         Logan, UT
        </div>
       </div>
       <h3 className="text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        Healthcare Facility
       </h3>
       <p className="text-lg text-primary mb-4 ">
        Specialized Medical Cleaning & Compliance Standards
       </p>
       <p className="text-muted-foreground mb-6 leading-relaxed">
        A critical healthcare facility in Logan, Utah required specialized cleaning services meeting strict medical standards, infection control protocols, and regulatory compliance. Our team maintains certifications in medical environments.
       </p>
       <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">100%</div>
         <div className="text-xs text-muted-foreground">Compliance Since 2022</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">Certified</div>
         <div className="text-xs text-muted-foreground">Medical Standards</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">Zero</div>
         <div className="text-xs text-muted-foreground">Violations</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">2+</div>
         <div className="text-xs text-muted-foreground">Years Ongoing</div>
        </div>
       </div>
       <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
        <p className="text-sm text-muted-foreground italic">
         "Imperial Cleaning understands the critical nature of medical facility cleaning. Their specialized protocols and attention to compliance have been essential to our operational success."
        </p>
        <p className="text-sm text-foreground mt-2">
         - Dr. Maria Gonzalez, CMO, Cache Valley Medical Center
        </p>
       </div>
      </div>
     </div>

     <div className="text-center">
      <Button 
       onClick={() => setShowContactForm(true)}
       variant="pill-primary" 
       size="pill-lg"
       className=""
       data-testid="button-get-commercial-quote"
      >
       Get Your Commercial Cleaning Quote
      </Button>
     </div>
    </div>
   </section>

   {/* Commercial-Specific FAQ */}
   <section className="py-24 px-4 bg-card/30">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Commercial Cleaning FAQ</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Get answers to the most common questions about our commercial cleaning and janitorial services.
      </p>
     </div>

     <div className="max-w-4xl mx-auto">
      <div className="glass-card-elevated p-8 rounded-lg">
       <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="commercial-scheduling" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-commercial-scheduling">
          <h3 className="text-lg text-foreground leading-tight">
           How flexible are your commercial cleaning schedules?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           We offer extremely flexible commercial cleaning schedules to accommodate your business needs. Our services include daily, weekly, bi-weekly, and monthly options. We work around your business hours - before opening, after closing, or during off-peak times. For 24/7 facilities, we provide overnight and weekend services. Urgent cleanup services are available with same-day response when needed.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="staff-training" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-staff-training">
          <h3 className="text-lg text-foreground leading-tight">
           How do you ensure your cleaning staff is properly trained and vetted?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           All Imperial Cleaning Inc. employees undergo comprehensive background checks, drug screening, and professional training before serving clients. Our training program covers proper cleaning techniques, safety protocols, customer service standards, and equipment operation. Staff receive ongoing education and certification updates. For commercial accounts requiring additional security clearance, we can accommodate higher-level background verification.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="commercial-pricing" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-commercial-pricing">
          <h3 className="text-lg text-foreground leading-tight">
           How do you determine pricing for commercial cleaning services?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           Our commercial cleaning pricing is based on several factors: square footage, frequency of service, type of facility, specific cleaning requirements, and accessibility. We provide detailed, transparent quotes with no hidden fees. Most commercial cleaning estimates can be provided within 24 hours. For ongoing contracts, we offer both hourly rates and flat-rate monthly packages depending on your preference and facility needs.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="quality-assurance" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-quality-assurance">
          <h3 className="text-lg text-foreground leading-tight">
           What quality assurance measures do you have in place?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           We guarantee 100% satisfaction on all commercial cleaning services. Every account includes regular supervisor inspections and quality audits. We provide detailed service reports and maintain constant communication with facility managers. Our quality assurance process includes task completion checklists, customer feedback collection, and immediate corrective action protocols. If any aspect of our work doesn't meet your standards, we address issues within 24 hours at no additional cost.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="environmental-practices" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-environmental-practices">
          <h3 className="text-lg text-foreground leading-tight">
           What environmental and safety practices do you follow?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           Imperial Cleaning Inc. prioritizes environmental responsibility and safety in all operations. We use EPA-approved, eco-friendly cleaning products whenever possible and follow all required safety guidelines. Our team is trained in proper chemical handling, bloodborne pathogen procedures, and workplace safety protocols. We maintain all required safety certifications and provide regular training updates. For commercial clients, we offer green cleaning programs that meet LEED and other environmental building standards.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="insurance-bonding" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-insurance-bonding">
          <h3 className="text-lg text-foreground leading-tight">
           Are you fully insured and bonded for commercial projects?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all commercial cleaning projects. We carry substantial liability coverage and are fully bonded, providing complete protection for your property and peace of mind. Our insurance certificates are readily available and we can add your business as an additional insured for larger commercial contracts.
          </p>
         </AccordionContent>
        </AccordionItem>
       </Accordion>
      </div>
     </div>
    </div>
   </section>

   {/* Location-Specific Content Sections */}
   {isLocationSpecific && locationData && (
    <>
     {/* Local Market Overview */}
     <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
      <div className="max-w-7xl mx-auto">
       <div className="text-center mb-12">
        <h2 className="text-4xl mb-6 text-foreground">{marketOverview!.title}</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
         {marketOverview!.description}
        </p>
       </div>
       
       <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="glass-card-elevated p-8 rounded-lg">
         <h3 className="text-2xl mb-6 text-foreground">Local Market Characteristics</h3>
         <div className="space-y-4">
          <div className="flex items-center gap-3">
           <Building2 className="w-5 h-5 text-primary" />
           <span className="text-muted-foreground">Market Tier: <span className="text-foreground capitalize">{marketOverview!.marketTier}</span></span>
          </div>
          <div className="flex items-center gap-3">
           <ShoppingCart className="w-5 h-5 text-primary" />
           <span className="text-muted-foreground">Commercial Density: <span className="text-foreground capitalize">{marketOverview!.commercialDensity}</span></span>
          </div>
          <div className="flex items-center gap-3">
           <Users className="w-5 h-5 text-primary" />
           <span className="text-muted-foreground">Economic Base: <span className="text-foreground ">{marketOverview!.economicBase.slice(0, 3).join(', ')}</span></span>
          </div>
         </div>
        </div>
        
        <div className="glass-card-elevated p-8 rounded-lg">
         <h3 className="text-2xl mb-6 text-foreground">Why Choose Us in {locationData.name}</h3>
         <ul className="space-y-4">
          <li className="flex items-center gap-3">
           <CheckCircle className="w-5 h-5 text-primary" />
           <span className="text-muted-foreground">Understanding of local {locationData.demographics.economicBase.join(', ').toLowerCase()} markets</span>
          </li>
          <li className="flex items-center gap-3">
           <CheckCircle className="w-5 h-5 text-primary" />
           <span className="text-muted-foreground">Reliable {locationData.driveTimeFromHQ === "0 minutes (Headquarters)" ? "immediate local" : `${locationData.driveTimeFromHQ}`} response times</span>
          </li>
          <li className="flex items-center gap-3">
           <CheckCircle className="w-5 h-5 text-primary" />
           <span className="text-muted-foreground">Experience with {locationData.demographics.commercialDensity} commercial density environments</span>
          </li>
          {locationData.services.specializedServices.length > 0 && (
           <li className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Specialized in {locationData.services.specializedServices.slice(0, 2).join(' and ').toLowerCase()}</span>
           </li>
          )}
         </ul>
        </div>
       </div>
      </div>
     </section>

     {/* Service Coverage Details */}
     <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
       <div className="text-center mb-12">
        <h2 className="text-4xl mb-6 text-foreground">Commercial Cleaning Coverage in {locationData.name}</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
         {serviceCoverage!.description}
        </p>
       </div>
       
       <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
         <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Clock className="w-8 h-8 text-primary" />
         </div>
         <h3 className="text-xl mb-3 text-foreground">Response Time</h3>
         <p className="text-muted-foreground">{serviceCoverage!.driveTime === "0 minutes (Headquarters)" ? "Immediate response from local headquarters" : `${serviceCoverage!.driveTime} response from Idaho Falls`}</p>
        </div>
        
        <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
         <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Building2 className="w-8 h-8 text-primary" />
         </div>
         <h3 className="text-xl mb-3 text-foreground">Service Radius</h3>
         <p className="text-muted-foreground">Complete coverage throughout {serviceCoverage!.serviceRadius}</p>
        </div>
        
        <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
         <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Star className="w-8 h-8 text-primary" />
         </div>
         <h3 className="text-xl mb-3 text-foreground">Specialized Services</h3>
         <p className="text-muted-foreground">{serviceCoverage!.specializedServices.length > 0 ? serviceCoverage!.specializedServices.slice(0, 2).join(', ') : "Full-service commercial cleaning"}</p>
        </div>
       </div>
       
       {serviceCoverage!.localAreas.length > 0 && (
        <div className="mt-12 text-center">
         <h3 className="text-2xl mb-6 text-foreground">Areas We Serve in {locationData.name}</h3>
         <div className="flex flex-wrap justify-center gap-3">
          {serviceCoverage!.localAreas.map((area, index) => (
           <span key={index} className="glass-effect px-4 py-2 rounded-full text-sm text-muted-foreground">
            {area}
           </span>
          ))}
         </div>
        </div>
       )}
      </div>
     </section>

     {/* Local Business Integration */}
     <section className="py-16 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
       <div className="text-center mb-12">
        <h2 className="text-4xl mb-6 text-foreground">Supporting {locationData.name}'s Business Community</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
         {businessIntegration!.content}
        </p>
       </div>
       
       <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-card-elevated p-8 rounded-lg">
         <h3 className="text-2xl mb-6 text-foreground">Local Economic Sectors</h3>
         <div className="grid grid-cols-2 gap-4">
          {businessIntegration!.economicSectors.map((sector, index) => (
           <div key={index} className="flex items-center gap-3">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground text-sm">{sector}</span>
           </div>
          ))}
         </div>
        </div>
        
        {businessIntegration!.businessDistricts.length > 0 && (
         <div className="glass-card-elevated p-8 rounded-lg">
          <h3 className="text-2xl mb-6 text-foreground">Key Business Areas</h3>
          <div className="space-y-3">
           {businessIntegration!.businessDistricts.map((district, index) => (
            <div key={index} className="flex items-center gap-3">
             <Building2 className="w-4 h-4 text-primary" />
             <span className="text-muted-foreground">{district}</span>
            </div>
           ))}
          </div>
         </div>
        )}
       </div>
      </div>
     </section>

     {/* Local Challenges Section */}
     {localChallenges && (
      <section className="py-16 px-4">
       <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
         <h2 className="text-4xl mb-6 text-foreground" data-testid="heading-challenges">{localChallenges.title}</h2>
         <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Understanding the unique commercial cleaning challenges specific to {locationData.name} helps us deliver superior results.
         </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
         {localChallenges.challenges.map((challenge, index) => (
          <div key={index} className="glass-card-elevated p-8 rounded-lg hover-lift-gentle" data-testid={`card-challenge-${index}`}>
           <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
             <AlertCircle className="w-6 h-6 text-amber-500" />
            </div>
            <div className="flex-1">
             <h3 className="text-xl mb-3 text-foreground" data-testid={`text-challenge-title-${index}`}>{challenge.title}</h3>
             <p className="text-muted-foreground leading-relaxed" data-testid={`text-challenge-description-${index}`}>{challenge.description}</p>
            </div>
           </div>
          </div>
         ))}
        </div>
       </div>
      </section>
     )}

     {/* Our Solutions Section */}
     {localSolutions && (
      <section className="py-16 px-4 bg-card/30">
       <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
         <h2 className="text-4xl mb-6 text-foreground" data-testid="heading-solutions">{localSolutions.title}</h2>
         <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our tailored approach addresses the specific needs of commercial cleaning in {locationData.name}.
         </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {localSolutions.solutions.map((solution, index) => (
          <div key={index} className="glass-card-elevated p-6 rounded-lg hover-lift-gentle" data-testid={`card-solution-${index}`}>
           <div className="w-12 h-12 mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-500" />
           </div>
           <h3 className="text-lg mb-3 text-foreground" data-testid={`text-solution-title-${index}`}>{solution.title}</h3>
           <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-solution-description-${index}`}>{solution.description}</p>
          </div>
         ))}
        </div>
       </div>
      </section>
     )}

     {/* Local Case Studies Section */}
     {localCaseStudies && localCaseStudies.caseStudies.length > 0 && (
      <section className="py-16 px-4">
       <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
         <h2 className="text-4xl mb-6 text-foreground" data-testid="heading-case-studies">{localCaseStudies.title}</h2>
         <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Real projects, real results from our commercial cleaning work in {locationData.name}.
         </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
         {localCaseStudies.caseStudies.map((caseStudy, index) => (
          <div key={index} className="glass-card-elevated p-8 rounded-lg" data-testid={`card-case-study-${index}`}>
           <div className="flex items-start gap-3 mb-4">
            <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
             <h3 className="text-xl mb-2 text-foreground" data-testid={`text-case-study-title-${index}`}>{caseStudy.title}</h3>
             <p className="text-sm text-muted-foreground mb-1">
              <span className="text-foreground">Client:</span> {caseStudy.client}
             </p>
             <p className="text-sm text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {caseStudy.location}
             </p>
            </div>
           </div>
           
           <div className="space-y-4">
            <div>
             <h4 className="text-sm uppercase tracking-wide text-primary mb-2">Challenge</h4>
             <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.challenge}</p>
            </div>
            
            <div>
             <h4 className="text-sm uppercase tracking-wide text-primary mb-2">Solution</h4>
             <p className="text-muted-foreground text-sm leading-relaxed">{caseStudy.solution}</p>
            </div>
            
            <div>
             <h4 className="text-sm uppercase tracking-wide text-primary mb-2">Results</h4>
             <ul className="space-y-2">
              {caseStudy.results.map((result, resultIndex) => (
               <li key={resultIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{result}</span>
               </li>
              ))}
             </ul>
            </div>
           </div>
          </div>
         ))}
        </div>
       </div>
      </section>
     )}

     {/* Compliance & Certifications Section */}
     {localCompliance && (
      <section className="py-16 px-4 bg-card/30">
       <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
         <h2 className="text-4xl mb-6 text-foreground" data-testid="heading-compliance">{localCompliance.title}</h2>
         <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          {localCompliance.description}
         </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
         {localCompliance.complianceCategories.map((category, index) => (
          <div key={index} className="glass-card-elevated p-8 rounded-lg" data-testid={`card-compliance-${index}`}>
           <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
             <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl text-foreground pt-2" data-testid={`text-compliance-category-${index}`}>{category.category}</h3>
           </div>
           <ul className="space-y-3">
            {category.requirements.map((requirement, reqIndex) => (
             <li key={reqIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{requirement}</span>
             </li>
            ))}
           </ul>
          </div>
         ))}
        </div>
       </div>
      </section>
     )}

     {/* Local Testimonials Section */}
     {localTestimonials && localTestimonials.testimonials.length > 0 && (
      <section className="py-16 px-4">
       <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
         <h2 className="text-4xl mb-6 text-foreground" data-testid="heading-testimonials">{localTestimonials.title}</h2>
         <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Hear from businesses we've served in {locationData.name}.
         </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
         {localTestimonials.testimonials.map((testimonial, index) => (
          <div key={index} className="glass-card-elevated p-8 rounded-lg" data-testid={`card-testimonial-${index}`}>
           <div className="mb-6">
            <Star className="w-8 h-8 text-amber-500 mb-4" />
            <p className="text-lg text-foreground italic leading-relaxed mb-4">
             "{testimonial.quote}"
            </p>
           </div>
           <div className="border-t border-border/20 pt-4">
            <p className="text-sm text-foreground font-medium">{testimonial.businessType}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
             <MapPin className="w-4 h-4" />
             {testimonial.location}
            </p>
            <p className="text-xs text-muted-foreground mt-2 italic">{testimonial.context}</p>
           </div>
          </div>
         ))}
        </div>
       </div>
      </section>
     )}

     {/* Related Links Before FAQ */}
     {coverageDetails && coverageDetails.internalLinks && (
      <section className="py-16 px-4 bg-card/30">
       <div className="max-w-7xl mx-auto">
        <RelatedLinks
         currentService="commercial-cleaning"
         location={locationData}
         serviceArea={locationData.state}
         data-testid="related-links-before-faq"
        />
       </div>
      </section>
     )}

     {/* Location-Specific FAQ */}
     <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
       <div className="text-center mb-12">
        <h2 className="text-4xl mb-6 text-foreground">Commercial Cleaning FAQ for {locationData.name}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
         Frequently asked questions specific to our commercial cleaning services in {locationData.name}, {locationData.state}.
        </p>
       </div>
       
       <div className="max-w-4xl mx-auto">
        <div className="glass-card-elevated p-8 rounded-lg">
         <Accordion type="single" collapsible className="space-y-4">
          {locationFAQ!.map((faq, index) => (
           <AccordionItem 
            key={index} 
            value={`location-faq-${index}`} 
            className="glass-card-elevated rounded-lg border-0 overflow-hidden"
           >
            <AccordionTrigger 
             className="px-6 py-6 text-left hover:no-underline" 
             data-testid={`faq-location-${index}`}
            >
             <h3 className="text-lg text-foreground leading-tight">
              {faq.question}
             </h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
             <div className="glass-divider-top mb-4"></div>
             <p className="text-muted-foreground leading-relaxed">
              {faq.answer}
             </p>
            </AccordionContent>
           </AccordionItem>
          ))}
         </Accordion>
        </div>
       </div>
      </div>
     </section>
    </>
   )}

   {/* Related Services Section */}
   <section className="py-16 px-4 bg-card/20">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-12">
      <h2 className="text-3xl mb-4 text-foreground">Complete Cleaning Solutions</h2>
      <p className="text-lg text-muted-foreground">
       Imperial Cleaning provides comprehensive services across Idaho and Utah
      </p>
     </div>
     
     <div className="grid md:grid-cols-3 gap-8">
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Building2 className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Construction Cleanup</h3>
       <p className="text-muted-foreground mb-4">Post-construction cleanup and debris removal for contractors</p>
       <Link href="/construction-cleaning">
        <Button variant="outline" size="sm" className="w-full" data-testid="link-construction-cleaning">
         Learn About Construction Services
        </Button>
       </Link>
      </div>
      
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <MapPin className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Idaho Service Areas</h3>
       <p className="text-muted-foreground mb-4">Serving Idaho Falls, Pocatello, Boise, and the entire Treasure Valley</p>
       <Link href="/service-areas/idaho">
        <Button variant="outline" size="sm" className="w-full" data-testid="link-idaho-areas">
         View Idaho Locations
        </Button>
       </Link>
      </div>
      
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Building2 className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Utah Service Areas</h3>
       <p className="text-muted-foreground mb-4">Covering Salt Lake City, Logan, Ogden, Provo, and the Wasatch Front</p>
       <Link href="/service-areas/utah">
        <Button variant="outline" size="sm" className="w-full" data-testid="link-utah-areas">
         View Utah Locations
        </Button>
       </Link>
      </div>
     </div>
    </div>
   </section>

   {/* Enhanced CTA Section - Using Shared ServiceCTA Component */}
   <ServiceCTA
    serviceType="commercial-cleaning"
    title="Ready for Professional Commercial Cleaning?"
    description="Maintain a professional, healthy work environment with our comprehensive commercial cleaning services. Serving businesses across Idaho and Utah with flexible schedules and guaranteed satisfaction."
    buttonText="Get Your Free Commercial Cleaning Quote"
    onGetQuote={() => setShowContactForm(true)}
    features={[
     "Daily, weekly, or custom schedules",
     "24-hour quote turnaround", 
     "100% satisfaction promise",
     "Licensed, bonded, and insured"
    ]}
    className="bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
   />

   {showContactForm && (
    <ContactFormModal 
     isOpen={showContactForm} 
     onClose={() => setShowContactForm(false)} 
    />
   )}
  </>
 );
}
