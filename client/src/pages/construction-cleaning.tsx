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

interface ConstructionCleaningProps extends RouteComponentProps {
  locationData?: ServiceLocation | null;
}

export default function ConstructionCleaning({ locationData }: ConstructionCleaningProps) {
  const [showContactForm, setShowContactForm] = useState(false);

  // Structured data for construction cleaning page
  const constructionServiceSchema = createServiceSchema({
    name: "Idaho & Utah Construction Cleaning Services",
    description: "Professional post-construction cleanup services throughout all service areas across Idaho and Utah. Comprehensive debris removal, detailed cleaning, and inspection-ready finishing for contractors and builders in all locations we serve.",
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
        "addressLocality": "Boise",
        "addressRegion": "ID",
        "addressCountry": "US"
      }
    }
  });

  const localBusinessSchema = createLocalBusinessSchema({
    "serviceType": [
      "Post Construction Cleanup",
      "Construction Site Cleaning", 
      "Debris Removal",
      "Final Inspection Cleaning",
      "Construction Cleaning"
    ],
    "description": "Professional post-construction cleanup services for contractors throughout all service areas across Idaho and Utah. Specialized in debris removal, detailed cleaning, and inspection-ready finishing in every location we serve.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Idaho & Utah Construction Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleanup",
            "description": "Comprehensive post-construction cleanup for contractors across all Idaho and Utah service areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Final Inspection Cleaning",
            "description": "Final inspection ready cleaning for construction projects throughout Idaho and Utah"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Debris Removal",
            "description": "Professional debris removal and site cleanup for construction projects in all service areas"
          }
        }
      ]
    }
  });

  const aggregateRatingSchema = createAggregateRatingSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://imperialcleaninginc.com/" },
    { name: "Services", url: "https://imperialcleaninginc.com/#services" },
    { name: "Construction Cleaning", url: "https://imperialcleaninginc.com/construction-cleaning" }
  ]);

  const structuredData = [
    constructionServiceSchema,
    localBusinessSchema,
    aggregateRatingSchema,
    breadcrumbSchema
  ];

  return (
    <>
      <SEOHead
        title="Idaho & Utah Construction Cleaning | Imperial Cleaning Inc."
        description="Professional post-construction cleanup in all service areas across Idaho & Utah. Expert debris removal & inspection-ready cleaning for contractors. Call today!"
        canonicalUrl="https://imperialcleaninginc.com/construction-cleaning"
        openGraph={{
          title: "Idaho & Utah Construction Cleaning | Imperial Cleaning Inc.",
          description: "Professional post-construction cleanup services throughout all service areas across Idaho and Utah. Trusted by contractors for inspection-ready cleaning.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          type: "website"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Idaho & Utah Construction Cleaning | Imperial Cleaning Inc.",
          description: "Expert post-construction cleanup across Idaho & Utah. Professional debris removal and final inspection cleaning for contractors.",
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
              { name: "Construction Cleaning" }
            ]}
          />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-2"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Construction Cleanup Available in ALL Service Areas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional construction cleanup available in ALL Imperial Cleaning service areas across Idaho and Utah. From debris removal to final detailing, we serve every location we operate in.
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
                Construction cleanup services are available in every city and region where Imperial Cleaning operates across Idaho and Utah. Whether you're building in our Idaho markets or Utah service areas, we provide the same professional cleanup services with consistent quality everywhere.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><i className="fas fa-check text-primary mr-3"></i>Post-construction debris removal in all service areas</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Window and surface cleaning available everywhere we serve</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Floor care and protection services in all locations</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Final inspection ready cleanup across our entire territory</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Safety-compliant construction site cleaning in every market</li>
              </ul>
            </div>
            <div className="resend-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Site Assessment</h4>
                    <p className="text-sm text-muted-foreground">We evaluate your construction site's cleaning needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-broom"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Deep Cleaning</h4>
                    <p className="text-sm text-muted-foreground">Thorough removal of construction debris and dust</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Final Inspection</h4>
                    <p className="text-sm text-muted-foreground">Quality check to ensure inspection readiness</p>
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
            Construction cleanup services available in every location Imperial Cleaning serves across Idaho and Utah
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="resend-card-subtle p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Idaho Construction Cleaning</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                <p>• Idaho Falls construction cleanup</p>
                <p>• Pocatello construction cleaning</p>
                <p>• Rexburg post-construction services</p>
                <p>• Blackfoot construction site cleaning</p>
                <p>• Ammon construction cleaning</p>
                <p>• Chubbuck construction cleanup</p>
                <p>• Shelley construction services</p>
                <p>• Rigby construction cleaning</p>
              </div>
            </div>
            <div className="resend-card-subtle p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Utah Construction Cleaning</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                <p>• Logan construction cleanup</p>
                <p>• Ogden construction cleaning</p>
                <p>• Salt Lake City construction services</p>
                <p>• Provo post-construction cleanup</p>
                <p>• West Valley construction cleaning</p>
                <p>• Sandy construction site services</p>
                <p>• Orem construction cleanup</p>
                <p>• Layton construction cleaning</p>
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
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Commercial Cleaning</h3>
              <p className="text-muted-foreground mb-4">Daily, weekly, and monthly cleaning schedules for offices and businesses</p>
              <Link 
                href="/commercial-cleaning" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                data-testid="link-commercial-cleaning"
              >
                Learn About Commercial Services
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
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for professional construction cleaning services across Idaho and Utah
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => setShowContactForm(true)}
            data-testid="button-get-quote"
          >
            Get Your Quote Today
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
