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

export default function ConstructionCleaning() {
  const [showContactForm, setShowContactForm] = useState(false);

  // Structured data for construction cleaning page
  const constructionServiceSchema = createServiceSchema({
    name: "Treasure Valley Construction Cleaning Services",
    description: "Professional post-construction cleanup services throughout Boise, Meridian, Nampa, Eagle, and the entire Treasure Valley region. Comprehensive debris removal, detailed cleaning, and inspection-ready finishing for contractors and builders in Idaho and Utah.",
    serviceType: "Construction Cleaning",
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
      "Post Construction Cleanup",
      "Construction Site Cleaning", 
      "Debris Removal",
      "Final Inspection Cleaning",
      "Construction Cleaning"
    ],
    "description": "Professional post-construction cleanup services for contractors throughout Boise, Meridian, Nampa, Eagle, and the entire Treasure Valley region. Specialized in debris removal, detailed cleaning, and inspection-ready finishing.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleanup",
            "description": "Comprehensive post-construction cleanup for contractors in Boise and Treasure Valley"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Final Inspection Cleaning",
            "description": "Final inspection ready cleaning for construction projects in Meridian and surrounding areas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Debris Removal",
            "description": "Professional debris removal and site cleanup for Nampa construction projects"
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
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Treasure Valley Construction Cleaning | Imperial Cleaning Inc."
        description="Professional post-construction cleanup in Boise, Meridian, Nampa & Eagle. Expert debris removal & inspection-ready cleaning for Idaho contractors. Call today!"
        canonicalUrl="https://imperialcleaninginc.com/construction-cleaning"
        openGraph={{
          title: "Treasure Valley Construction Cleaning | Imperial Cleaning Inc.",
          description: "Professional post-construction cleanup services throughout Boise, Meridian, Nampa, and the entire Treasure Valley region. Trusted by contractors for inspection-ready cleaning.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          type: "website"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Treasure Valley Construction Cleaning | Imperial Cleaning Inc.",
          description: "Expert post-construction cleanup in Boise & Treasure Valley. Professional debris removal and final inspection cleaning for Idaho contractors.",
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
            Professional Construction Cleaning Across Idaho & Utah
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Post-construction cleanup services for contractors. From debris removal to final detailing, we prepare your projects for handover.
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
              <h2 className="text-4xl font-bold mb-6 text-foreground">Construction Cleaning Idaho & Utah</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our construction cleaning services in Idaho and Utah help contractors meet project deadlines and safety requirements. We specialize in post-construction cleanup that prepares your site for final inspection and handover.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><i className="fas fa-check text-primary mr-3"></i>Post-construction debris removal across Idaho and Utah</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Window and surface cleaning for construction sites</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Floor care and protection services</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Final inspection ready cleanup</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Safety-compliant construction site cleaning</li>
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
          <h2 className="text-4xl font-bold mb-8 text-foreground">Construction Cleaning Service Areas</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Serving construction sites throughout Idaho and Utah
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
