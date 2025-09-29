import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import ContactFormModal from "@/components/contact-form-modal";
import SEOHead, { 
  createLocalBusinessSchema, 
  createServiceSchema,
  createAggregateRatingSchema,
  createBreadcrumbSchema
} from "@/components/seo-head";

export default function ServiceAreasUtah() {
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Structured data for Utah service areas page
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

  const cities = [
    {
      name: "Salt Lake City",
      description: "Both construction cleanup and commercial cleaning services available for Salt Lake City's growing construction and commercial markets. Premier cleaning solutions in Utah's capital.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Facility Maintenance", "Project Management"]
    },
    {
      name: "Logan",
      description: "Both construction cleanup and commercial cleaning services available in Logan. Serving contractors and businesses throughout Cache County.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "University Facilities", "Industrial Cleaning"]
    },
    {
      name: "Ogden",
      description: "Both construction cleanup and commercial cleaning services available for Ogden businesses and construction projects. Trusted by contractors and commercial clients in Weber County.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Government Facilities", "Healthcare Cleaning"]
    },
    {
      name: "Provo",
      description: "Both construction cleanup and commercial cleaning services available for Provo area construction sites and commercial facilities in Utah County.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Tech Facility Cleaning", "Educational Facilities"]
    }
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
      
      {/* Breadcrumbs */}
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
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-2"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Utah Cleaning Services - Wasatch Front & Beyond
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Locally owned and operated from our Idaho Falls headquarters, providing both construction cleanup AND commercial cleaning services in ALL Imperial Cleaning service areas throughout Utah. Every city we serve receives the same comprehensive range of professional cleaning services.
          </p>
          <Button 
            variant="pill-primary"
            size="pill-lg"
            onClick={() => setShowContactForm(true)}
            data-testid="button-request-quote"
            className="text-lg font-semibold px-8 py-4"
          >
            Request Quote for Utah
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Professional Cleaning Services Throughout Utah</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Imperial Cleaning Inc. brings Idaho-based expertise to Utah's growing markets. From our headquarters in Idaho Falls, we deliver comprehensive cleaning solutions across the Wasatch Front and throughout Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="resend-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-hard-hat text-blue-500 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Post-Construction Cleanup</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Professional construction debris removal and detailed cleaning services for Utah's booming construction market. Our systematic approach handles projects from residential developments to commercial high-rises across the Wasatch Front.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check text-blue-500 mr-3"></i>
                  <span className="text-sm">Complete debris removal and disposal</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-blue-500 mr-3"></i>
                  <span className="text-sm">Heavy dust elimination with HEPA filtration</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-blue-500 mr-3"></i>
                  <span className="text-sm">Window cleaning and fixture detail work</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-blue-500 mr-3"></i>
                  <span className="text-sm">Final inspection preparation</span>
                </div>
              </div>
            </div>

            <div className="resend-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-building text-green-500 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Commercial Office Cleaning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Regular janitorial services for Utah's corporate offices, retail spaces, and commercial buildings. Serving Salt Lake City's financial district, tech companies in Lehi, and businesses throughout the Wasatch Front.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span className="text-sm">Daily office cleaning and maintenance</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span className="text-sm">Corporate facility management</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span className="text-sm">Retail and storefront cleaning</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span className="text-sm">Medical and professional offices</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="resend-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-industry text-purple-500 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Industrial Facility Cleaning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Specialized cleaning for Utah's manufacturing and industrial facilities. From food processing plants to tech manufacturing, we understand Utah's diverse industrial landscape and safety requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  <span className="text-sm">Manufacturing facility cleaning</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  <span className="text-sm">Tech and semiconductor facilities</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  <span className="text-sm">Food processing sanitization</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  <span className="text-sm">Warehouse and distribution centers</span>
                </div>
              </div>
            </div>

            <div className="resend-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-cogs text-orange-500 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Specialized Equipment & Techniques</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Advanced cleaning technology designed for Utah's unique high-altitude environment and diverse facility types. Professional equipment ensures superior results regardless of project complexity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  <span className="text-sm">High-altitude cleaning protocols</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  <span className="text-sm">HEPA filtration systems</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  <span className="text-sm">Professional floor care technology</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  <span className="text-sm">High-rise window cleaning equipment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="pill-primary"
              size="pill-lg"
              onClick={() => setShowContactForm(true)}
              data-testid="button-get-quote-utah-services"
              className="text-lg font-semibold px-8 py-4"
            >
              Get Quote for Utah Services
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Utah Cities We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Both construction cleanup and commercial cleaning services available in all Utah cities and regions we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cities.map((city, index) => (
              <div key={index} className="resend-card transition-transform duration-300 ease-out hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{city.name} Cleaning Services</h3>
                <p className="text-muted-foreground mb-6">{city.description}</p>
                <div className="space-y-2">
                  {city.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm">
                      <i className="fas fa-check text-primary mr-3"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Coverage Areas */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Additional Utah Service Areas</h2>
            <p className="text-xl text-muted-foreground">
              Both construction cleanup and commercial cleaning services available in these Utah communities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "West Valley City", "Sandy", "Orem", "Layton",
              "Murray", "Taylorsville", "West Jordan", "Draper",
              "Lehi", "Clearfield", "Bountiful", "Park City"
            ].map((city, index) => {
              const citySlug = city.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                  <h3 className="font-semibold text-foreground" data-testid={`area-${citySlug}-utah`}>
                    {city}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">Both Services Available</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Utah */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Utah Trusts Imperial Cleaning</h2>
            <p className="text-xl text-muted-foreground">
              Mountain West expertise, Wasatch Front coverage, and professional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-mountain"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Mountain West Expertise</h3>
              <p className="text-muted-foreground">We understand Utah's unique climate and high-altitude construction needs</p>
            </div>
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-city"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Wasatch Front Coverage</h3>
              <p className="text-muted-foreground">Complete coverage from Ogden to Provo and all points between</p>
            </div>
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Utah Excellence</h3>
              <p className="text-muted-foreground">Recognized by Utah contractors and businesses for superior service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Serve Your Utah Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for professional cleaning services anywhere in Utah
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => setShowContactForm(true)}
            data-testid="button-contact-utah"
          >
            Get Utah Service Quote
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
