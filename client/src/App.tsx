import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { isValidServiceLocation, getLocationBySlug } from "./lib/routing-utils";
import SEOHead from "@/components/seo-head";

// Layout
import PageLayout from "@/components/layout/page-layout";

// Pages
import Home from "@/pages/home";
import ConstructionCleaning from "@/pages/construction-cleaning";
import CommercialCleaning from "@/pages/commercial-cleaning";
import ServiceAreasIdaho from "@/pages/service-areas-idaho";
import ServiceAreasUtah from "@/pages/service-areas-utah";
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
    "description": "Professional construction and commercial cleaning company serving Idaho and Utah since 2010. Headquartered in Idaho Falls with comprehensive cleaning solutions for businesses and contractors.",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Blvd",
      "addressLocality": "Idaho Falls",
      "addressRegion": "ID",
      "postalCode": "83402",
      "addressCountry": "US"
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

  return (
    <>
      <SEOHead
        title="About Imperial Cleaning Inc | Professional Cleaning Services in Idaho & Utah"
        description="Learn about Imperial Cleaning Inc, Idaho's trusted cleaning company since 2010. Licensed, bonded & insured with expert construction cleanup and commercial cleaning services across ID & UT."
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
          description: "Discover Imperial Cleaning Inc's story - Idaho's most trusted cleaning company since 2010. Expert construction cleanup and commercial cleaning across Idaho and Utah.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          imageAlt: "Imperial Cleaning Inc - Professional Cleaning Services",
          type: "website",
          url: "https://imperialcleaninginc.com/about"
        }}
        twitter={{
          card: "summary_large_image",
          title: "About Imperial Cleaning Inc | Idaho & Utah Cleaning Experts",
          description: "Learn about Imperial Cleaning Inc - Idaho's premier cleaning company since 2010. Licensed, bonded & insured cleaning services across Idaho and Utah.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          imageAlt: "Imperial Cleaning Inc Logo"
        }}
        structuredData={[organizationSchema, breadcrumbSchema]}
      />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-foreground">About Imperial Cleaning Inc.</h1>
          <div className="prose prose-lg text-muted-foreground">
            <p className="text-xl mb-6">
              Imperial Cleaning Inc. has been providing professional cleaning services across Idaho and Utah since 2010. 
              We specialize in construction cleanup and commercial cleaning services for businesses, contractors, and 
              property managers throughout our service areas.
            </p>
            <p className="mb-6">
              Headquartered in Idaho Falls, Idaho, we serve clients across both states with comprehensive cleaning 
              solutions that meet the highest industry standards. Our team is fully licensed, bonded, and insured, 
              ensuring complete protection for your property and peace of mind for our clients.
            </p>
            <p>
              From post-construction debris removal to ongoing commercial maintenance, we deliver consistent, 
              reliable service that helps our clients maintain clean, safe, and professional environments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Contact Page Component with comprehensive SEO
function ContactPage() {
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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Blvd",
      "addressLocality": "Idaho Falls",
      "addressRegion": "ID",
      "postalCode": "83402",
      "addressCountry": "US"
    },
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
          image: "https://imperialcleaninginc.com/hero-logo.png",
          imageAlt: "Imperial Cleaning Inc - Contact Us for Professional Cleaning",
          type: "website",
          url: "https://imperialcleaninginc.com/contact"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Contact Imperial Cleaning Inc | Free Cleaning Quotes",
          description: "Get professional cleaning services in Idaho & Utah. Call (208) 520-3202 for free construction cleanup and commercial cleaning quotes.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          imageAlt: "Imperial Cleaning Inc Contact Information"
        }}
        structuredData={[localBusinessSchema, breadcrumbSchema]}
      />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-foreground">Contact Imperial Cleaning Inc.</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Get In Touch</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <strong className="text-foreground">Phone:</strong><br />
                  <a href="tel:+12085203202" className="text-primary hover:text-primary/80">(208) 520-3202</a>
                </div>
                <div>
                  <strong className="text-foreground">Email:</strong><br />
                  <a href="mailto:service@imperialcleaninginc.com" className="text-primary hover:text-primary/80">
                    service@imperialcleaninginc.com
                  </a>
                </div>
                <div>
                  <strong className="text-foreground">Headquarters:</strong><br />
                  Idaho Falls, ID
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Business Hours</h2>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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