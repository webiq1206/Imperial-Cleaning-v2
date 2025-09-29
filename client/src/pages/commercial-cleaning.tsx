import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyContacts from "@/components/sticky-contacts";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactFormModal from "@/components/contact-form-modal";
import SEOHead, { 
  createLocalBusinessSchema, 
  createServiceSchema,
  createAggregateRatingSchema,
  createBreadcrumbSchema
} from "@/components/seo-head";

export default function CommercialCleaning() {
  const [showContactForm, setShowContactForm] = useState(false);

  // Structured data for commercial cleaning page
  const commercialServiceSchema = createServiceSchema({
    name: "Boise Commercial Cleaning Services",
    description: "Professional commercial cleaning and janitorial services for Boise area businesses. Daily, weekly, and monthly cleaning schedules for offices, medical facilities, retail stores, and commercial buildings throughout Ada County, Canyon County, and the entire Treasure Valley region.",
    serviceType: "Commercial Cleaning",
    areaServed: [
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
    "description": "Professional commercial cleaning services for Boise businesses including downtown financial district, medical centers, corporate offices, and retail facilities throughout Ada County and Canyon County.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Boise Commercial Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Downtown Boise Office Cleaning",
            "description": "Professional office cleaning services for downtown Boise financial district and corporate buildings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Meridian Medical Facility Cleaning",
            "description": "Specialized medical facility cleaning services for healthcare centers in Meridian and surrounding areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nampa Industrial Cleaning",
            "description": "Industrial and warehouse cleaning services for Nampa manufacturing and distribution facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Eagle Corporate Cleaning",
            "description": "Premium commercial cleaning services for Eagle corporate offices and executive facilities"
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
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Boise Commercial Cleaning Services | Imperial Cleaning Inc."
        description="Premier office & commercial cleaning in Boise, Meridian, Nampa. Serving downtown financial district, medical centers & businesses across Ada County. Call today!"
        canonicalUrl="https://imperialcleaninginc.com/commercial-cleaning"
        openGraph={{
          title: "Boise Commercial Cleaning Services | Imperial Cleaning Inc.",
          description: "Professional commercial cleaning services for Boise businesses including downtown offices, medical facilities, and corporate buildings throughout the Treasure Valley.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          type: "website"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Boise Commercial Cleaning Services | Imperial Cleaning Inc.",
          description: "Trusted commercial cleaning for Boise businesses. Serving downtown district, medical centers & offices across Ada County & Treasure Valley.",
          image: "https://imperialcleaninginc.com/hero-logo.png"
        }}
        structuredData={structuredData}
      />
      
      <Header />
      <StickyContacts />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-2"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Professional Commercial Cleaning for Idaho & Utah Businesses
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ongoing commercial cleaning services for businesses throughout Idaho and Utah. Reliable, professional maintenance to keep your facility spotless.
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
              <h2 className="text-4xl font-bold mb-6 text-foreground">Commercial Cleaning Idaho & Utah</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our commercial cleaning services in Idaho and Utah help businesses maintain professional, healthy work environments. We provide reliable, scheduled cleaning services that keep your facility operating at its best.
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
          <h2 className="text-4xl font-bold mb-8 text-foreground">Commercial Cleaning Service Areas</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Serving businesses throughout Idaho and Utah
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

      <Footer />
      
      {showContactForm && (
        <ContactFormModal 
          isOpen={showContactForm} 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </div>
  );
}
