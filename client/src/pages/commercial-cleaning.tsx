import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, RouteComponentProps } from "wouter";
import ContactFormModal from "@/components/contact-form-modal";
import { ServiceLocation } from "@shared/service-locations";
import SEOHead, { 
  createLocalBusinessSchema, 
  createServiceSchema,
  createAggregateRatingSchema,
  createBreadcrumbSchema
} from "@/components/seo-head";

interface CommercialCleaningProps extends RouteComponentProps {
  locationData?: ServiceLocation | null;
}

export default function CommercialCleaning({ locationData }: CommercialCleaningProps) {
  const [showContactForm, setShowContactForm] = useState(false);

  // Structured data for commercial cleaning page
  const commercialServiceSchema = createServiceSchema({
    name: "Idaho & Utah Commercial Cleaning Services",
    description: "Professional commercial cleaning and janitorial services for businesses across all service areas in Idaho and Utah. Daily, weekly, and monthly cleaning schedules for offices, medical facilities, retail stores, and commercial buildings throughout all locations we serve.",
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
        "addressLocality": "Boise",
        "addressRegion": "ID",
        "addressCountry": "US"
      }
    }
  });

  const localBusinessSchema = createLocalBusinessSchema({
    "serviceType": [
      "Commercial Cleaning",
      "Office Cleaning", 
      "Janitorial Services",
      "Medical Facility Cleaning",
      "Retail Cleaning",
      "Corporate Cleaning"
    ],
    "description": "Professional commercial cleaning services for businesses across all service areas in Idaho and Utah including offices, medical centers, corporate facilities, and retail locations throughout all locations we serve.",
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
            "description": "Industrial and warehouse cleaning services for manufacturing and distribution facilities in all service areas"
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
  });

  const aggregateRatingSchema = createAggregateRatingSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://imperialcleaninginc.com/" },
    { name: "Services", url: "https://imperialcleaninginc.com/#services" },
    { name: "Commercial Cleaning", url: "https://imperialcleaninginc.com/commercial-cleaning" }
  ]);

  const structuredData = [
    commercialServiceSchema,
    localBusinessSchema,
    aggregateRatingSchema,
    breadcrumbSchema
  ];

  return (
    <>
      <SEOHead
        title="Idaho & Utah Commercial Cleaning Services | Imperial Cleaning Inc."
        description="Premier office & commercial cleaning across all service areas in Idaho & Utah. Serving businesses, medical centers & offices in every location we operate. Call today!"
        canonicalUrl="https://imperialcleaninginc.com/commercial-cleaning"
        openGraph={{
          title: "Idaho & Utah Commercial Cleaning Services | Imperial Cleaning Inc.",
          description: "Professional commercial cleaning services for businesses across all service areas in Idaho and Utah including offices, medical facilities, and corporate buildings.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          type: "website"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Idaho & Utah Commercial Cleaning Services | Imperial Cleaning Inc.",
          description: "Trusted commercial cleaning for businesses across Idaho & Utah. Serving offices, medical centers & businesses in all our service areas.",
          image: "https://imperialcleaninginc.com/hero-logo.png"
        }}
        structuredData={structuredData}
      />
      
      {/* Breadcrumbs */}
      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs 
            items={[
              { name: "Services", href: "/#services" },
              { name: "Commercial Cleaning" }
            ]}
          />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-2"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Commercial Cleaning Available in ALL Service Areas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional commercial cleaning available in ALL Imperial Cleaning service areas across Idaho and Utah. Reliable, professional maintenance delivered with consistent quality in every location we serve.
          </p>
          <Button 
            variant="pill-primary"
            size="pill-lg"
            onClick={() => setShowContactForm(true)}
            data-testid="button-request-quote"
            className="text-lg font-semibold px-8 py-4"
          >
            Request a Quote
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Available in All Service Areas</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Commercial cleaning services are available in every city and region where Imperial Cleaning operates across Idaho and Utah. Whether your business is in our Idaho markets or Utah service areas, we provide the same professional, scheduled cleaning services with consistent quality everywhere.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><i className="fas fa-check text-primary mr-3"></i>Daily and weekly commercial cleaning schedules</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Office and workspace sanitization services</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Restroom and break room maintenance</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Professional carpet and floor care</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Window cleaning and facility maintenance</li>
              </ul>
            </div>
            <div className="resend-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Service Options</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-calendar-day"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Daily Cleaning</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive daily maintenance for busy offices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-calendar-week"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Weekly Service</h4>
                    <p className="text-sm text-muted-foreground">Regular weekly cleaning for smaller facilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-cog"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Custom Schedules</h4>
                    <p className="text-sm text-muted-foreground">Tailored cleaning plans to fit your business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Available in ALL Our Service Areas</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Commercial cleaning services available in every location Imperial Cleaning serves across Idaho and Utah
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="resend-card-subtle p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Idaho Commercial Cleaning</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                <p>• Idaho Falls commercial cleaning</p>
                <p>• Pocatello office cleaning</p>
                <p>• Rexburg business cleaning</p>
                <p>• Blackfoot commercial services</p>
                <p>• Ammon office maintenance</p>
                <p>• Chubbuck commercial cleaning</p>
                <p>• Shelley business services</p>
                <p>• Rigby commercial cleaning</p>
              </div>
            </div>
            <div className="resend-card-subtle p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Utah Commercial Cleaning</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                <p>• Logan commercial cleaning</p>
                <p>• Ogden office cleaning</p>
                <p>• Salt Lake City commercial services</p>
                <p>• Provo business cleaning</p>
                <p>• West Valley commercial cleaning</p>
                <p>• Sandy office services</p>
                <p>• Orem commercial cleaning</p>
                <p>• Layton business cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Internal Links */}
      <section className="py-16 px-4 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Explore Our Complete Cleaning Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Imperial Cleaning provides comprehensive services across Idaho and Utah
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Related Services */}
            <div className="resend-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="icon-gradient text-4xl mb-4">
                <i className="fas fa-hard-hat"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Construction Cleanup</h3>
              <p className="text-muted-foreground mb-4">Post-construction cleanup and debris removal for contractors</p>
              <Link 
                href="/construction-cleaning" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                data-testid="link-construction-cleaning"
              >
                Learn About Construction Services
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
            
            {/* Idaho Service Areas */}
            <div className="resend-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="icon-gradient text-4xl mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Idaho Locations</h3>
              <p className="text-muted-foreground mb-4">Serving Boise, Idaho Falls, Pocatello, and the entire Treasure Valley</p>
              <Link 
                href="/service-areas/idaho" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                data-testid="link-idaho-areas"
              >
                View Idaho Service Areas
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
            
            {/* Utah Service Areas */}
            <div className="resend-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="icon-gradient text-4xl mb-4">
                <i className="fas fa-mountain"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Utah Locations</h3>
              <p className="text-muted-foreground mb-4">Covering Salt Lake City, Logan, Ogden, Provo, and the Wasatch Front</p>
              <Link 
                href="/service-areas/utah" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                data-testid="link-utah-areas"
              >
                View Utah Service Areas
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Schedule Your Commercial Cleaning</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get reliable, professional commercial cleaning services for your business in Idaho or Utah
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => setShowContactForm(true)}
            data-testid="button-schedule-service"
          >
            Schedule Your Service
          </button>
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
