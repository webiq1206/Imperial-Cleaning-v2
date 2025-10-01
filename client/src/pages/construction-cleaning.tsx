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
 HardHat, 
 Trash2, 
 CheckCircle, 
 ClipboardList, 
 Sparkles, 
 Shield, 
 Users, 
 Factory, 
 Home, 
 Hospital, 
 GraduationCap,
 Award,
 Clock,
 TrendingUp,
 Star,
 MapPin,
 Briefcase,
 AlertCircle,
 PhoneCall
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

interface ConstructionCleaningProps extends RouteComponentProps {
 locationData?: ServiceLocation | null;
}

export default function ConstructionCleaning({ locationData }: ConstructionCleaningProps) {
 const [showContactForm, setShowContactForm] = useState(false);
 const [location] = useLocation();
 
 // Track page view on component mount
 useEffect(() => {
  // Track enhanced page view with service/location context
  trackServicePageView(
   'construction-cleaning', 
   locationData?.name,
   locationData?.marketTier
  );
  
  // Track user journey stage
  trackUserJourney(
   'discovery',
   locationData ? 'service_location_page' : 'service_hub_page',
   {
    serviceType: 'construction-cleaning',
    location: locationData?.name
   }
  );
  
  // Track service demand
  trackServiceDemand(
   'construction-cleaning',
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
    serviceType: 'construction-cleaning' as const,
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
 const locationHero = locationData ? generateLocationHero('construction-cleaning', locationData) : null;
 const marketOverview = locationData ? generateMarketOverview('construction-cleaning', locationData) : null;
 const serviceCoverage = locationData ? generateServiceCoverage('construction-cleaning', locationData) : null;
 const businessIntegration = locationData ? generateBusinessIntegration('construction-cleaning', locationData) : null;
 const locationFAQ = locationData ? generateLocationFAQ('construction-cleaning', locationData) : null;
 const localChallenges = locationData ? generateLocalChallenges('construction-cleaning', locationData) : null;
 const localSolutions = locationData ? generateLocalSolutions('construction-cleaning', locationData) : null;
 const localCaseStudies = locationData ? generateLocalCaseStudies('construction-cleaning', locationData) : null;
 const localCompliance = locationData ? generateLocalCompliance('construction-cleaning', locationData) : null;
 const localTestimonials = locationData ? generateLocalTestimonials('construction-cleaning', locationData) : null;
 
 // New enhanced location-specific content
 const serviceIntroduction = locationData ? generateServiceIntroduction('construction-cleaning', locationData) : null;
 const whyChoose = locationData ? generateWhyChoose('construction-cleaning', locationData) : null;
 const enhancedFeatures = locationData ? generateEnhancedServiceFeatures('construction-cleaning', locationData) : null;
 const coverageDetails = locationData ? generateServiceCoverageDetails('construction-cleaning', locationData) : null;
 const cityProcess = locationData ? generateCitySpecificProcess('construction-cleaning', locationData) : null;
 const industryApps = locationData ? generateIndustryApplications('construction-cleaning', locationData) : null;
 
 // SEO content
 const pageTitle = isLocationSpecific ? generateLocationTitle('construction-cleaning', locationData!) : "Idaho & Utah Construction Cleaning | Imperial Cleaning Inc.";
 const pageDescription = isLocationSpecific ? generateLocationDescription('construction-cleaning', locationData!) : "Professional post-construction cleanup across Idaho & Utah. Expert debris removal & inspection-ready cleaning for contractors. Call today!";
 const canonicalUrl = isLocationSpecific ? generateCanonicalUrl('construction-cleaning', locationSlug!) : "https://imperialcleaninginc.com/construction-cleaning";

 // Structured data - conditional based on location specificity
 const constructionServiceSchema = isLocationSpecific ? 
  generateLocationStructuredData('construction-cleaning', locationData!, canonicalUrl) :
  createServiceSchema({
   name: "Idaho & Utah Construction Cleaning Services",
   description: "Professional post-construction cleanup services across Idaho and Utah. Comprehensive debris removal, detailed cleaning, and inspection-ready finishing for contractors and builders throughout the region.",
   serviceType: "Construction Cleaning",
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
   "Post Construction Cleanup",
   "Construction Site Cleaning", 
   "Debris Removal",
   "Final Inspection Cleaning",
   "Construction Cleaning"
  ],
  "description": "Professional post-construction cleanup services for contractors across Idaho and Utah. Specialized in debris removal, detailed cleaning, and inspection-ready finishing throughout the region.",
  "hasOfferCatalog": {
   "@type": "OfferCatalog",
   "name": "Idaho & Utah Construction Cleaning Services",
   "itemListElement": [
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Post-Construction Cleanup",
      "description": "Comprehensive post-construction cleanup for contractors across Idaho and Utah"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service", 
      "name": "Final Inspection Cleaning",
      "description": "Inspection-ready cleaning for construction projects across Idaho and Utah"
     }
    },
    {
     "@type": "Offer",
     "itemOffered": {
      "@type": "Service",
      "name": "Construction Debris Removal",
      "description": "Professional debris removal and site cleanup for construction projects"
     }
    }
   ]
  }
 }) : null;

 const aggregateRatingSchema = createAggregateRatingSchema();
 const breadcrumbSchema = isLocationSpecific ? 
  createBreadcrumbSchema(generateLocationBreadcrumbs('construction-cleaning', locationData!, locationSlug!)) :
  createBreadcrumbSchema([
   { name: "Home", url: "https://imperialcleaninginc.com/" },
   { name: "Services", url: "https://imperialcleaninginc.com/#services" },
   { name: "Construction Cleaning", url: "https://imperialcleaninginc.com/construction-cleaning" }
  ]);

 const structuredData = [
 ...(isLocationSpecific && Array.isArray(constructionServiceSchema) ? constructionServiceSchema : [constructionServiceSchema]),
 ...(localBusinessSchema ? [localBusinessSchema] : []),
 aggregateRatingSchema
].filter(Boolean);

 return (
  <>
   <SEOHead
    title={pageTitle}
    description={pageDescription}
    keywords={isLocationSpecific ? 
     `construction cleanup ${locationData!.name}, post construction cleaning ${locationData!.state}, debris removal ${locationData!.name}, final inspection cleaning, construction site cleaning ${locationData!.name} ${locationData!.state}` :
     "construction cleanup Idaho Utah, post construction cleaning, debris removal, final inspection cleaning, construction site cleaning Idaho Falls, building cleanup services"
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
     imageAlt: "Imperial Cleaning Inc - Professional Post-Construction Cleanup Services Idaho Utah",
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
     imageAlt: "Imperial Cleaning Inc - Professional Post-Construction Cleanup Services Idaho Utah",
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
       { name: "Construction Cleaning", href: "/construction-cleaning" },
       { name: `${locationData!.name}, ${locationData!.state}` }
      ] : [
       { name: "Services", href: "/#services" },
       { name: "Construction Cleaning" }
      ]}
     />
    </div>
   </div>
   
   {/* Hero Section */}
   <InternalHeroSection
    title={isLocationSpecific ? locationHero!.title : "Professional Construction Cleanup Services"}
    subtitle={isLocationSpecific ? locationHero!.subtitle : "Expert post-construction cleanup across Idaho and Utah. From debris removal to final detailing, delivering inspection-ready results."}
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
         Get a Free Construction Cleanup Quote in {locationData!.name}
        </Button>
       </div>
       
       {/* Related Links */}
       {serviceIntroduction.internalLinks && (
        <div className="mt-12">
         <RelatedLinks
          currentService="construction-cleaning"
          location={locationData!}
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
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Comprehensive Construction Cleanup Services</h2>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
       Imperial Cleaning Inc. specializes in professional post-construction cleanup services designed to transform construction sites into pristine, inspection-ready spaces. Our comprehensive approach ensures your project meets the highest standards for occupancy and final inspection.
      </p>
     </div>

     <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <Trash2 className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Debris Removal</h3>
       <p className="text-muted-foreground">Complete removal of construction materials, packaging, and jobsite debris</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Deep Cleaning</h3>
       <p className="text-muted-foreground">Thorough cleaning of all surfaces, fixtures, and hard-to-reach areas</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
        <CheckCircle className="w-8 h-8 text-primary" />
       </div>
       <h3 className="text-xl mb-3 text-foreground">Inspection Ready</h3>
       <p className="text-muted-foreground">Final preparation for occupancy permits and client walkthroughs</p>
      </div>
     </div>

     <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
       <h3 className="text-3xl mb-6 text-foreground">Why Choose Our Construction Cleanup?</h3>
       <ul className="space-y-4 text-muted-foreground">
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Experienced teams trained in construction site safety protocols</span>
        </li>
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Industrial-grade equipment for efficient debris removal and cleaning</span>
        </li>
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Coordination with project timelines and contractor schedules</span>
        </li>
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Comprehensive insurance coverage and bonding for protection</span>
        </li>
        <li className="flex items-start gap-3">
         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
         <span>Quality assurance inspections before project completion</span>
        </li>
       </ul>
      </div>
      <div className="glass-card-elevated p-8">
       <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
         <HardHat className="w-10 h-10 text-primary" />
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
         <span>Trained professionals</span>
        </li>
        <li className="flex items-center gap-2">
         <CheckCircle className="w-4 h-4 text-primary" />
         <span>Quality guarantees</span>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </section>

   {/* Detailed Process/Methodology */}
   <section className="py-24 px-4 bg-card/50">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Our 3-Phase Construction Cleanup Process</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Our systematic approach ensures thorough, efficient cleanup that meets inspection standards and project deadlines.
      </p>
     </div>

     <div className="space-y-12">
      {/* Phase 1 */}
      <div className="glass-card-elevated p-8 rounded-lg">
       <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
         <span className="text-2xl text-primary">1</span>
        </div>
        <div className="flex-1">
         <div className="flex items-center gap-3 mb-4">
          <ClipboardList className="w-6 h-6 text-primary" />
          <h3 className="text-2xl text-foreground">Phase 1: Rough Cleaning & Assessment</h3>
         </div>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          Initial site assessment and removal of major construction debris, materials, and safety hazards. This phase prepares the site for detailed cleaning work.
         </p>
         <div className="grid md:grid-cols-2 gap-6">
          <div>
           <h4 className=" text-foreground mb-3">Activities Include:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Construction debris removal</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Material and packaging disposal</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Safety hazard identification</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Site accessibility preparation</span>
            </li>
           </ul>
          </div>
          <div>
           <h4 className=" text-foreground mb-3">Equipment Used:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Industrial dumpsters and containers</li>
            <li>• Heavy-duty vacuum systems</li>
            <li>• Safety equipment and protective gear</li>
            <li>• Debris removal tools and machinery</li>
           </ul>
          </div>
         </div>
        </div>
       </div>
      </div>

      {/* Phase 2 */}
      <div className="glass-card-elevated p-8 rounded-lg">
       <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
         <span className="text-2xl text-primary">2</span>
        </div>
        <div className="flex-1">
         <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-primary" />
          <h3 className="text-2xl text-foreground">Phase 2: Detailed Cleaning & Surface Preparation</h3>
         </div>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          Comprehensive cleaning of all surfaces, fixtures, and systems. Focus on removing construction dust, adhesives, and preparing surfaces for final inspection.
         </p>
         <div className="grid md:grid-cols-2 gap-6">
          <div>
           <h4 className=" text-foreground mb-3">Detailed Tasks:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Window cleaning (interior & exterior)</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Floor cleaning and protection</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Fixture and surface sanitization</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Dust removal from all surfaces</span>
            </li>
           </ul>
          </div>
          <div>
           <h4 className=" text-foreground mb-3">Specialized Cleaning:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• HVAC system cleaning and filter replacement</li>
            <li>• Light fixture and electrical cleaning</li>
            <li>• Adhesive and residue removal</li>
            <li>• Paint overspray cleanup</li>
           </ul>
          </div>
         </div>
        </div>
       </div>
      </div>

      {/* Phase 3 */}
      <div className="glass-card-elevated p-8 rounded-lg">
       <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
         <span className="text-2xl text-primary">3</span>
        </div>
        <div className="flex-1">
         <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="w-6 h-6 text-primary" />
          <h3 className="text-2xl text-foreground">Phase 3: Final Inspection & Quality Assurance</h3>
         </div>
         <p className="text-muted-foreground mb-6 leading-relaxed">
          Final quality checks, touch-ups, and preparation for client walkthrough or occupancy permit inspection. Every detail is verified to meet our high standards.
         </p>
         <div className="grid md:grid-cols-2 gap-6">
          <div>
           <h4 className=" text-foreground mb-3">Final Steps:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Comprehensive quality inspection</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Detail touch-ups and corrections</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Floor protection installation</span>
            </li>
            <li className="flex items-center gap-2">
             <CheckCircle className="w-4 h-4 text-primary" />
             <span>Final walkthrough with client</span>
            </li>
           </ul>
          </div>
          <div>
           <h4 className=" text-foreground mb-3">Quality Standards:</h4>
           <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• White-glove cleanliness standards</li>
            <li>• Inspection-ready presentation</li>
            <li>• Photo documentation of completed work</li>
            <li>• 100% satisfaction guarantee</li>
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
        Start Your {locationData!.name} Construction Cleanup Project
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
   <section className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Industries We Serve</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Our construction cleanup expertise spans across diverse project types and industries throughout Idaho and Utah.
      </p>
     </div>

     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Building2 className="w-8 h-8 text-blue-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Commercial Buildings</h3>
       <p className="text-sm text-muted-foreground">Office complexes, retail centers, and commercial developments</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Home className="w-8 h-8 text-green-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Residential Projects</h3>
       <p className="text-sm text-muted-foreground">Custom homes, apartment complexes, and residential developments</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Factory className="w-8 h-8 text-purple-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Industrial Facilities</h3>
       <p className="text-sm text-muted-foreground">Manufacturing plants, warehouses, and distribution centers</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Hospital className="w-8 h-8 text-red-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Healthcare Facilities</h3>
       <p className="text-sm text-muted-foreground">Hospitals, clinics, and medical office buildings</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <GraduationCap className="w-8 h-8 text-yellow-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Educational Institutions</h3>
       <p className="text-sm text-muted-foreground">Schools, universities, and training facilities</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Shield className="w-8 h-8 text-cyan-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Government Buildings</h3>
       <p className="text-sm text-muted-foreground">Municipal buildings, courthouses, and public facilities</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Building2 className="w-8 h-8 text-orange-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Mixed-Use Developments</h3>
       <p className="text-sm text-muted-foreground">Combined residential, commercial, and retail projects</p>
      </div>
      <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
       <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Users className="w-8 h-8 text-pink-500" />
       </div>
       <h3 className="text-lg mb-3 text-foreground">Hospitality & Recreation</h3>
       <p className="text-sm text-muted-foreground">Hotels, restaurants, and entertainment venues</p>
      </div>
     </div>
    </div>
   </section>

   {/* Service Areas Grid */}
   <ServiceLocationsGrid 
    serviceType="construction-cleaning"
    title="Construction Cleanup Service Areas"
    description="Professional post-construction cleanup services available in all our service locations across Idaho and Utah. Click any location to view specific service details, local project examples, and contact information for that area."
   />

   {/* Construction-Specific Case Studies */}
   <section className="py-24 px-4 bg-card/50">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Construction Cleanup Success Stories</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Real projects, real results. See how our construction cleanup expertise has helped contractors and developers across Idaho and Utah.
      </p>
     </div>

     <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {/* Case Study 1 */}
      <div className="glass-card-elevated p-8 rounded-lg hover-lift-gentle group">
       <div className="flex items-center gap-3 mb-4">
        <div className="px-3 py-1 rounded-full text-xs border text-orange-400 border-orange-400/20 bg-orange-400/10">
         CONSTRUCTION
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
         <MapPin className="w-3 h-3" />
         Idaho Falls, ID
        </div>
       </div>
       <h3 className="text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        Downtown Office Complex
       </h3>
       <p className="text-lg text-primary mb-4 ">
        75,000 sq ft Post-Construction Cleanup Excellence
       </p>
       <p className="text-muted-foreground mb-6 leading-relaxed">
        A premier 15-story downtown Idaho Falls office complex required comprehensive post-construction cleaning after extensive renovations. Our team completed the project 2 days ahead of schedule with zero tolerance for delays.
       </p>
       <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">75,000</div>
         <div className="text-xs text-muted-foreground">Square Feet</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">4 Days</div>
         <div className="text-xs text-muted-foreground">Completion Time</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">15%</div>
         <div className="text-xs text-muted-foreground">Under Budget</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">5/5</div>
         <div className="text-xs text-muted-foreground">Client Rating</div>
        </div>
       </div>
       <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
        <p className="text-sm text-muted-foreground italic">
         "Imperial Cleaning exceeded every expectation. Their systematic approach and attention to detail ensured our building was inspection-ready ahead of schedule."
        </p>
        <p className="text-sm text-foreground mt-2">
         - Michael C., Project Manager, Snake River Development Group
        </p>
       </div>
      </div>

      {/* Case Study 2 */}
      <div className="glass-card-elevated p-8 rounded-lg hover-lift-gentle group">
       <div className="flex items-center gap-3 mb-4">
        <div className="px-3 py-1 rounded-full text-xs border text-orange-400 border-orange-400/20 bg-orange-400/10">
         MULTI-STATE
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
         <MapPin className="w-3 h-3" />
         Salt Lake City & Provo, UT
        </div>
       </div>
       <h3 className="text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        Multi-Site Construction Projects
       </h3>
       <p className="text-lg text-primary mb-4 ">
        Large-Scale Construction Cleanup Across Multiple Locations
       </p>
       <p className="text-muted-foreground mb-6 leading-relaxed">
        A major construction company required reliable post-construction cleanup services across multiple Utah locations simultaneously. We established dedicated Utah operations with consistent service delivery.
       </p>
       <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">8</div>
         <div className="text-xs text-muted-foreground">Projects Completed</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">400K</div>
         <div className="text-xs text-muted-foreground">Total Sq Ft</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">100%</div>
         <div className="text-xs text-muted-foreground">On-Time</div>
        </div>
        <div className="text-center p-3 glass-effect rounded-lg">
         <div className="text-2xl text-primary mb-1">2</div>
         <div className="text-xs text-muted-foreground">States</div>
        </div>
       </div>
       <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
        <p className="text-sm text-muted-foreground italic">
         "Imperial Cleaning's ability to scale across state lines while maintaining their exceptional quality standards is impressive. They've become our go-to partner."
        </p>
        <p className="text-sm text-foreground mt-2">
         - Amanda T., Regional Construction Manager, Mountain West Builders
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
       data-testid="button-get-construction-quote"
      >
       Get Your Construction Cleanup Quote
      </Button>
     </div>
    </div>
   </section>

   {/* Construction-Specific FAQ */}
   <section className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Construction Cleanup FAQ</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Get answers to the most common questions about our post-construction cleanup services.
      </p>
     </div>

     <div className="max-w-4xl mx-auto">
      <div className="glass-card-elevated p-8 rounded-lg">
       <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="construction-process" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-construction-process">
          <h3 className="text-lg text-foreground leading-tight">
           What does your post-construction cleanup process include?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           Our construction cleanup follows a comprehensive 3-phase process: Phase 1 includes rough cleaning with debris removal, dust elimination, and surface preparation. Phase 2 covers detailed cleaning of windows, fixtures, floors, and all surfaces. Phase 3 is our final inspection-ready cleaning with touch-ups, floor protection, and complete project walkthrough. This systematic approach ensures your construction project meets inspection standards and is ready for occupancy.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="timeline-coordination" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-timeline-coordination">
          <h3 className="text-lg text-foreground leading-tight">
           How do you coordinate with construction timelines and contractors?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           We work closely with general contractors, project managers, and construction teams to ensure seamless timeline coordination. Our team integrates with your project schedule, providing cleaning services at critical milestones: rough clean after drywall, detailed clean after painting and flooring, and final clean before inspection. We maintain constant communication and can adjust our schedule to meet accelerated deadlines or address weather-related delays.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="specialized-equipment" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-specialized-equipment">
          <h3 className="text-lg text-foreground leading-tight">
           What specialized equipment do you use for construction cleanup?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           We utilize professional-grade equipment specifically designed for construction cleanup including HEPA filtration systems for dust removal, industrial vacuum systems for debris, high-reach window cleaning equipment, and specialized post-construction cleaning solutions. All equipment is regularly maintained and operated by trained professionals who understand construction site safety requirements.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="safety-compliance" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-safety-compliance">
          <h3 className="text-lg text-foreground leading-tight">
           Are you fully insured and compliant with construction site safety requirements?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all construction cleanup projects. We are OSHA compliant and our team is trained in construction site safety protocols. Our insurance certificates are readily available and we can add your project as an additional insured for larger contracts.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="construction-pricing" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-construction-pricing">
          <h3 className="text-lg text-foreground leading-tight">
           How do you determine pricing for construction cleanup projects?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           Our construction cleanup pricing is based on square footage, project complexity, cleanup phase requirements, timeline constraints, and site accessibility. We provide detailed, transparent quotes with no hidden fees. Most estimates can be provided within 24 hours of site assessment. We offer both per-square-foot pricing and flat-rate options depending on project scope and can work with your construction budget and timeline.
          </p>
         </AccordionContent>
        </AccordionItem>

        <AccordionItem value="quality-guarantee" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
         <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-quality-guarantee">
          <h3 className="text-lg text-foreground leading-tight">
           What quality assurance measures and guarantees do you provide?
          </h3>
         </AccordionTrigger>
         <AccordionContent className="px-6 pb-6">
          <div className="glass-divider-top mb-4"></div>
          <p className="text-muted-foreground leading-relaxed">
           We guarantee 100% satisfaction on all construction cleanup projects. Every project includes a comprehensive quality checklist and final walkthrough with the client or general contractor. We conduct thorough quality inspections at each phase and provide detailed completion reports. If any aspect of our work doesn't meet your standards, we return within 24 hours to address the issue at no additional cost.
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
           <Factory className="w-5 h-5 text-primary" />
           <span className="text-muted-foreground">Construction Activity: <span className="text-foreground capitalize">{marketOverview!.constructionActivity}</span></span>
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
           <span className="text-muted-foreground">Experience with {locationData.demographics.constructionActivity} construction activity levels</span>
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
        <h2 className="text-4xl mb-6 text-foreground">Construction Cleanup Coverage in {locationData.name}</h2>
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
         <p className="text-muted-foreground">{serviceCoverage!.specializedServices.length > 0 ? serviceCoverage!.specializedServices.slice(0, 2).join(', ') : "Full-service construction cleanup"}</p>
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
          Understanding the unique construction cleaning challenges specific to {locationData.name} helps us deliver superior results.
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
          Our tailored approach addresses the specific needs of construction cleanup in {locationData.name}.
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
          Real projects, real results from our construction cleanup work in {locationData.name}.
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
          Hear from businesses and contractors we've served in {locationData.name}.
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
         currentService="construction-cleaning"
         location={locationData}
         data-testid="related-links-before-faq"
        />
       </div>
      </section>
     )}

     {/* Location-Specific FAQ */}
     <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
       <div className="text-center mb-12">
        <h2 className="text-4xl mb-6 text-foreground">Construction Cleanup FAQ for {locationData.name}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
         Frequently asked questions specific to our construction cleanup services in {locationData.name}, {locationData.state}.
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
   <section className="py-16 px-4 bg-card/30">
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
       <h3 className="text-xl mb-3 text-foreground">Commercial Cleaning</h3>
       <p className="text-muted-foreground mb-4">Daily, weekly, and monthly cleaning schedules for offices and businesses</p>
       <Link href="/commercial-cleaning">
        <Button variant="pill-ghost" size="pill-sm" className="w-full" data-testid="link-commercial-cleaning">
         Learn About Commercial Services
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
        <Button variant="pill-ghost" size="pill-sm" className="w-full" data-testid="link-idaho-areas">
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
        <Button variant="pill-ghost" size="pill-sm" className="w-full" data-testid="link-utah-areas">
         View Utah Locations
        </Button>
       </Link>
      </div>
     </div>
    </div>
   </section>

   {/* Enhanced CTA Section - Using Shared ServiceCTA Component */}
   <ServiceCTA
    serviceType="construction-cleaning"
    title="Ready for Professional Construction Cleanup?"
    description="Get your construction project inspection-ready with our comprehensive 3-phase cleanup process. Serving contractors and developers across Idaho and Utah with guaranteed satisfaction."
    buttonText="Get Your Free Construction Cleanup Quote"
    onGetQuote={() => setShowContactForm(true)}
    features={[
     "24-48 hour project start",
     "100% satisfaction promise", 
     "Inspection-ready cleanup",
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
