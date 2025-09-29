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

export default function ServiceAreasIdaho() {
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Structured data for Idaho service areas page
  const idahoServiceSchema = createServiceSchema({
    name: "Treasure Valley Cleaning Services - Idaho",
    description: "Headquartered in Idaho Falls, providing comprehensive commercial and construction cleaning services throughout Boise, Meridian, Nampa, Eagle, Caldwell and the entire Treasure Valley region. Professional cleaning solutions for Ada County, Canyon County, and all of Southwest Idaho businesses and contractors.",
    serviceType: "Commercial and Construction Cleaning",
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
        "@type": "City",
        "name": "Caldwell",
        "sameAs": "https://en.wikipedia.org/wiki/Caldwell,_Idaho"
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
    ]
  });

  const localBusinessSchema = createLocalBusinessSchema({
    "areaServed": [
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
        "@type": "City",
        "name": "Caldwell",
        "sameAs": "https://en.wikipedia.org/wiki/Caldwell,_Idaho"
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
    "description": "Idaho Falls-based premier cleaning services throughout the Treasure Valley region including Boise, Meridian, Nampa, Eagle, and Caldwell. Professional commercial and construction cleaning for Ada County and Canyon County businesses.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Treasure Valley Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Boise Commercial Cleaning",
            "description": "Professional office and commercial cleaning services for downtown Boise business district"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Meridian Construction Cleanup",
            "description": "Post-construction cleanup services for Meridian's growing development projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nampa Industrial Cleaning",
            "description": "Industrial facility cleaning for Nampa's manufacturing and distribution centers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Eagle Premium Services",
            "description": "Premium commercial cleaning for Eagle's corporate offices and luxury developments"
          }
        }
      ]
    }
  });

  const aggregateRatingSchema = createAggregateRatingSchema();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://imperialcleaninginc.com/" },
    { name: "Service Areas", url: "https://imperialcleaninginc.com/#service-areas" },
    { name: "Idaho Service Areas", url: "https://imperialcleaninginc.com/service-areas/idaho" }
  ]);

  const structuredData = [
    idahoServiceSchema,
    localBusinessSchema,
    aggregateRatingSchema,
    breadcrumbSchema
  ];

  const treasureValleyCities = [
    {
      name: "Boise",
      population: "235,000+",
      county: "Ada County",
      description: "Idaho's capital and largest city, serving as the economic hub of the Treasure Valley. Both construction cleanup and commercial cleaning services available for Boise's thriving downtown business district, government facilities, healthcare centers, and major employers like Micron Technology, St. Luke's Health System, and Idaho Power.",
      neighborhoods: ["Downtown Boise", "West Boise", "North End", "Bench", "Southeast Boise"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Government Facility Cleaning", "Healthcare Facility Services", "Corporate Office Maintenance"],
      businessDistricts: ["Downtown Financial District", "Vista Village", "Boise Town Square", "WestPark Center"]
    },
    {
      name: "Meridian",
      population: "125,000+",
      county: "Ada County",
      description: "Idaho's fastest-growing city and the heart of residential development in the Treasure Valley. Both construction cleanup and commercial cleaning services available for Meridian's booming construction projects, commercial developments along Eagle Road, and The Village at Meridian shopping district.",
      neighborhoods: ["Meridian Ranch", "Bridgetower", "Ustick Station", "Tuscany"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Retail Facility Cleaning", "Commercial Development Support"],
      businessDistricts: ["The Village at Meridian", "Eagle Road Corridor", "Meridian Crossroads"]
    },
    {
      name: "Nampa",
      population: "105,000+",
      county: "Canyon County",
      description: "Canyon County's largest city and major industrial center. Both construction cleanup and commercial cleaning services available for Nampa's manufacturing facilities, warehouse districts, and the growing Karcher Corridor commercial development.",
      neighborhoods: ["Historic Downtown Nampa", "Karcher Mall Area", "Greenhurst", "South Nampa"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Industrial Facility Cleaning", "Manufacturing Support"],
      businessDistricts: ["Karcher Corridor", "Downtown Nampa", "Industrial Park"]
    },
    {
      name: "Eagle",
      population: "32,000+",
      county: "Ada County",
      description: "Prestigious Treasure Valley community known for luxury developments and corporate offices. Both construction cleanup and commercial cleaning services available for Eagle's high-end commercial buildings, medical facilities, and exclusive residential construction projects.",
      neighborhoods: ["Eagle Hills", "Banbury", "Seven Oaks", "Baneberry"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Executive Office Cleaning", "Medical Facility Services"],
      businessDistricts: ["Eagle Road Corporate District", "Downtown Eagle", "Medical Plaza"]
    },
    {
      name: "Caldwell",
      population: "65,000+",
      county: "Canyon County",
      description: "Historic Canyon County seat with growing industrial and agricultural sectors. Both construction cleanup and commercial cleaning services available for Caldwell's food processing facilities, agricultural businesses, and the expanding College of Idaho campus area.",
      neighborhoods: ["Historic Downtown", "Indian Creek", "College Area", "Northside"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Food Processing Facility Cleaning", "Educational Institution Cleaning"],
      businessDistricts: ["Downtown Caldwell", "Cleveland Boulevard", "College of Idaho District"]
    }
  ];

  const secondaryMarkets = [
    {
      name: "Kuna",
      description: "Rapidly growing community in Ada County with new residential and commercial developments. Both construction cleanup and commercial cleaning services available.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Municipal Facilities"]
    },
    {
      name: "Star",
      description: "Charming Treasure Valley community experiencing significant growth and development. Both construction cleanup and commercial cleaning services available.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Community Facilities"]
    },
    {
      name: "Garden City",
      description: "Dense urban community adjacent to Boise with industrial and entertainment districts. Both construction cleanup and commercial cleaning services available.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Entertainment Venue Services"]
    },
    {
      name: "Mountain Home",
      description: "Military community and regional service center in Elmore County. Both construction cleanup and commercial cleaning services available.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Government Facilities"]
    }
  ];

  const extendedCoverage = [
    {
      name: "Idaho Falls",
      description: "Our hometown headquarters! Both construction cleanup and commercial cleaning services available for Idaho Falls clients in southeastern Idaho. Locally owned and operated from this great city.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Office Maintenance", "Post-Construction Cleanup"]
    },
    {
      name: "Pocatello",
      description: "Both construction cleanup and commercial cleaning services available in Pocatello and throughout Bannock County.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "University Facilities", "Industrial Cleaning"]
    },
    {
      name: "Twin Falls",
      description: "Both construction cleanup and commercial cleaning services available for the Magic Valley's largest city and regional commercial center.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Agricultural Facility Services", "Healthcare Facilities"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Boise & Treasure Valley Cleaning Services | Imperial Cleaning Idaho"
        description="Professional construction & commercial cleaning throughout Boise, Meridian, Nampa, Eagle & Caldwell. Serving Ada County & Canyon County. Get your free quote today!"
        canonicalUrl="https://imperialcleaninginc.com/service-areas/idaho"
        openGraph={{
          title: "Boise & Treasure Valley Cleaning Services | Imperial Cleaning Idaho",
          description: "Professional construction and commercial cleaning services throughout Boise, Meridian, Nampa, Eagle, and the entire Treasure Valley region in Idaho.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          type: "website"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Treasure Valley Cleaning Services | Imperial Cleaning Idaho",
          description: "Expert cleaning services across Boise, Meridian, Nampa & the entire Treasure Valley. Professional construction & commercial cleaning solutions.",
          image: "https://imperialcleaninginc.com/hero-logo.png"
        }}
        structuredData={structuredData}
      />
      
      {/* Breadcrumbs */}
      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs 
            items={[
              { name: "Service Areas", href: "/#service-areas" },
              { name: "Idaho Locations" }
            ]}
          />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-2"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Boise & Treasure Valley Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Proudly headquartered in Idaho Falls, providing both construction cleanup AND commercial cleaning services in ALL Imperial Cleaning service areas throughout Idaho. Every city we serve receives the same comprehensive range of professional cleaning services.
          </p>
          <Button 
            variant="pill-primary"
            size="pill-lg"
            onClick={() => setShowContactForm(true)}
            data-testid="button-request-quote"
            className="text-lg font-semibold px-8 py-4"
          >
            Request Quote for Treasure Valley
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Professional Cleaning Services Throughout Idaho</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Imperial Cleaning Inc. provides comprehensive cleaning solutions across all Idaho service areas. From our headquarters in Idaho Falls, we deliver the same high-quality services to every community we serve.
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
                Professional construction debris removal and detailed cleaning services for new construction projects, renovations, and remodeling across Idaho. Our systematic 3-phase approach ensures your project is inspection-ready.
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
                  <span className="text-sm">Floor deep cleaning and protection</span>
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
                Regular janitorial services and facility maintenance for offices, retail spaces, and commercial buildings. Flexible scheduling with daily, weekly, and monthly service options tailored to your business needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span className="text-sm">Daily office cleaning and maintenance</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span className="text-sm">Restroom cleaning and restocking</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span className="text-sm">Floor care and carpet maintenance</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span className="text-sm">Sanitization and trash removal</span>
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
                Specialized cleaning for manufacturing facilities, warehouses, and production environments. We understand the unique requirements of industrial settings and maintain safety compliance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  <span className="text-sm">Manufacturing facility cleaning</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  <span className="text-sm">Warehouse and distribution centers</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  <span className="text-sm">Food processing facility sanitization</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  <span className="text-sm">Equipment cleaning and maintenance</span>
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
                Advanced cleaning technology and professional expertise for complex cleaning challenges. State-of-the-art equipment ensures superior results for all project types.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  <span className="text-sm">HEPA filtration and dust control systems</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  <span className="text-sm">High-pressure washing and steam cleaning</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  <span className="text-sm">Professional floor care technology</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  <span className="text-sm">High-access cleaning for buildings</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="pill-primary"
              size="pill-lg"
              onClick={() => setShowContactForm(true)}
              data-testid="button-get-quote-services"
              className="text-lg font-semibold px-8 py-4"
            >
              Get Quote for These Services
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Treasure Valley - Our Primary Market</h2>
            <p className="text-xl text-muted-foreground">
              Both construction cleanup and commercial cleaning services available in all cities and regions we serve across Idaho
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {treasureValleyCities.map((city, index) => (
              <div key={index} id={city.name.toLowerCase()} className="resend-card transition-transform duration-300 ease-out hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{city.name}</h3>
                  <span className="text-sm text-primary font-medium">{city.county}</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-2">
                    Population: {city.population}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{city.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Neighborhoods Served:</h4>
                  <div className="flex flex-wrap gap-1">
                    {city.neighborhoods.map((neighborhood, nIndex) => (
                      <span key={nIndex} className="text-xs bg-card border border-border px-2 py-1 rounded">
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Business Districts:</h4>
                  <div className="space-y-1">
                    {city.businessDistricts.map((district, dIndex) => (
                      <div key={dIndex} className="flex items-center text-xs">
                        <i className="fas fa-building text-primary mr-2"></i>
                        <span>{district}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Specialized Services:</h4>
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

      {/* Secondary Markets */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Secondary Treasure Valley Markets</h2>
            <p className="text-xl text-muted-foreground">
              Expanding our coverage throughout Southwest Idaho and the greater Treasure Valley region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {secondaryMarkets.map((city, index) => {
              const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={index} id={citySlug} className="resend-card text-center">
                  <h3 className="font-bold text-lg text-foreground mb-3">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{city.description}</p>
                  <div className="space-y-1">
                    {city.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="text-xs text-muted-foreground">
                        • {service}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Extended Idaho Coverage</h3>
            <p className="text-lg text-muted-foreground">
              Professional cleaning services across all major Idaho markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {extendedCoverage.map((city, index) => {
              const cityId = city.name.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={index} id={cityId} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200">
                <h4 className="text-xl font-bold mb-3 text-foreground">{city.name}</h4>
                <p className="text-muted-foreground mb-4 text-sm">{city.description}</p>
                <div className="space-y-2">
                  {city.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm">
                      <i className="fas fa-check text-primary mr-3"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              );
            })}
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold mb-6 text-foreground">Additional Idaho Communities</h4>
            <div className="grid md:grid-cols-6 gap-4">
              {[
                "Ammon", "Chubbuck", "Shelley", "Rigby", "Rexburg", "Blackfoot",
                "American Falls", "Preston", "Soda Springs", "Montpelier", "St. Anthony", "Driggs"
              ].map((city, index) => {
                const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={index} className="bg-card p-3 rounded-lg border border-border text-center hover:border-primary/50 transition-colors duration-200">
                    <Link 
                      href={`/service-areas/idaho/${citySlug}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200"
                      data-testid={`link-${citySlug}-idaho`}
                    >
                      {city}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Idaho */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Idaho Trusts Imperial Cleaning</h2>
            <p className="text-xl text-muted-foreground">
              Local expertise, statewide coverage, and professional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Local Idaho Knowledge</h3>
              <p className="text-muted-foreground">We understand Idaho's unique climate and construction challenges</p>
            </div>
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-truck"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Treasure Valley Expertise</h3>
              <p className="text-muted-foreground">Comprehensive coverage throughout Boise, Meridian, Nampa, Eagle, Caldwell and all of Southwest Idaho</p>
            </div>
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Idaho Partnerships</h3>
              <p className="text-muted-foreground">Trusted by Idaho contractors and businesses for over a decade</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Serve Your Treasure Valley Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for professional cleaning services throughout Boise, Meridian, Nampa, Eagle, Caldwell and the entire Treasure Valley region
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => setShowContactForm(true)}
            data-testid="button-contact-idaho"
          >
            Get Treasure Valley Quote
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
