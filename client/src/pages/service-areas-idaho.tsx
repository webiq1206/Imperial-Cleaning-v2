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
    name: "Idaho Falls & Eastern Idaho Cleaning Services",
    description: "Headquartered in Idaho Falls, providing comprehensive commercial and construction cleaning services throughout southeastern Idaho, Magic Valley, and extending coverage to the Treasure Valley region. Professional cleaning solutions for Bonneville County, Bannock County, and all Eastern Idaho businesses and contractors.",
    serviceType: "Commercial and Construction Cleaning",
    areaServed: [
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
        "name": "Blackfoot",
        "sameAs": "https://en.wikipedia.org/wiki/Blackfoot,_Idaho"
      },
      {
        "@type": "City",
        "name": "Twin Falls",
        "sameAs": "https://en.wikipedia.org/wiki/Twin_Falls,_Idaho"
      },
      {
        "@type": "City",
        "name": "Rexburg",
        "sameAs": "https://en.wikipedia.org/wiki/Rexburg,_Idaho"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bonneville County",
        "sameAs": "https://en.wikipedia.org/wiki/Bonneville_County,_Idaho"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bannock County",
        "sameAs": "https://en.wikipedia.org/wiki/Bannock_County,_Idaho"
      },
      {
        "@type": "Place",
        "name": "Eastern Idaho",
        "sameAs": "https://en.wikipedia.org/wiki/Eastern_Idaho"
      }
    ]
  });

  const localBusinessSchema = createLocalBusinessSchema({
    "areaServed": [
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
        "name": "Blackfoot", 
        "sameAs": "https://en.wikipedia.org/wiki/Blackfoot,_Idaho"
      },
      {
        "@type": "City",
        "name": "Twin Falls",
        "sameAs": "https://en.wikipedia.org/wiki/Twin_Falls,_Idaho"
      },
      {
        "@type": "City",
        "name": "Rexburg",
        "sameAs": "https://en.wikipedia.org/wiki/Rexburg,_Idaho"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bonneville County",
        "sameAs": "https://en.wikipedia.org/wiki/Bonneville_County,_Idaho"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bannock County", 
        "sameAs": "https://en.wikipedia.org/wiki/Bannock_County,_Idaho"
      },
      {
        "@type": "Place",
        "name": "Eastern Idaho",
        "sameAs": "https://en.wikipedia.org/wiki/Eastern_Idaho"
      }
    ],
    "description": "Idaho Falls-headquartered premier cleaning services throughout Eastern Idaho including Pocatello, Blackfoot, Twin Falls, and Rexburg. Professional commercial and construction cleaning for Bonneville County, Bannock County, and southeastern Idaho businesses.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Eastern Idaho Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Idaho Falls Commercial Cleaning",
            "description": "Professional office and commercial cleaning services for downtown Idaho Falls business district and Snake River Landing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Pocatello Construction Cleanup",
            "description": "Post-construction cleanup services for Pocatello's development projects and ISU campus facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Twin Falls Industrial Cleaning",
            "description": "Industrial facility cleaning for Twin Falls' food processing and manufacturing centers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blackfoot Specialized Services",
            "description": "Specialized cleaning for Blackfoot's agricultural and food processing facilities"
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

  const primaryMarketCities = [
    {
      name: "Idaho Falls",
      population: "65,000+",
      county: "Bonneville County",
      description: "Our headquarters city and the heart of Eastern Idaho's commercial activity. Home to Idaho National Laboratory, Eastern Idaho Regional Medical Center, and a thriving downtown business district. Both construction cleanup and commercial cleaning services available with immediate response and full service capabilities.",
      neighborhoods: ["Downtown Idaho Falls", "West Side", "Ammon", "Lincoln Road Corridor"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Government Facility Cleaning", "Healthcare Facility Services", "Laboratory Cleaning", "Corporate Office Maintenance"],
      businessDistricts: ["Downtown Idaho Falls", "Snake River Landing", "Westside Business District"]
    },
    {
      name: "Pocatello",
      population: "56,000+",
      county: "Bannock County",
      description: "Major southeastern Idaho city and home to Idaho State University. Both construction cleanup and commercial cleaning services available for Pocatello's diverse economic base including education, healthcare, manufacturing, and government facilities.",
      neighborhoods: ["Old Town", "Highland", "Chubbuck", "University District"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "University Facility Cleaning", "Healthcare Facility Services", "Manufacturing Support"],
      businessDistricts: ["Downtown Pocatello", "University District", "Industrial Park"]
    },
    {
      name: "Blackfoot",
      population: "12,000+",
      county: "Bingham County",
      description: "Regional center for agriculture and food processing in southeastern Idaho. Both construction cleanup and commercial cleaning services available for Blackfoot's growing commercial and industrial sectors.",
      neighborhoods: ["Historic Downtown", "Industrial District", "Residential Areas"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Food Processing Facility Cleaning", "Agricultural Facility Services"],
      businessDistricts: ["Downtown Blackfoot", "Industrial Corridor"]
    },
    {
      name: "Rexburg",
      population: "32,000+",
      county: "Madison County",
      description: "Home to Brigham Young University-Idaho and a vibrant college town atmosphere. Both construction cleanup and commercial cleaning services available for Rexburg's educational institutions, student housing, and local businesses.",
      neighborhoods: ["Downtown Rexburg", "University District", "North Rexburg"],
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "University Facility Cleaning", "Educational Institution Services", "Student Housing Support"],
      businessDistricts: ["Downtown Rexburg", "University District"]
    }
  ];

  const secondaryMarkets = [
    {
      name: "Twin Falls",
      description: "Magic Valley's largest city and regional commercial center. Both construction cleanup and commercial cleaning services available for Twin Falls' diverse agricultural, healthcare, and business sectors.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Agricultural Facility Services", "Healthcare Facilities"]
    },
    {
      name: "Ammon",
      description: "Growing community adjacent to Idaho Falls with expanding residential and commercial development. Both construction cleanup and commercial cleaning services available.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Retail Facilities", "Professional Offices"]
    },
    {
      name: "Chubbuck",
      description: "Bannock County community with residential and retail growth. Both construction cleanup and commercial cleaning services available.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Retail Facilities", "Small Business Support"]
    },
    {
      name: "Shelley",
      description: "Agricultural community in Bingham County with growing business sector. Both construction cleanup and commercial cleaning services available.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Agricultural Facilities", "Small Business Support"]
    }
  ];

  const extendedCoverage = [
    {
      name: "Boise",
      description: "Idaho's capital and largest city in the Treasure Valley. Both construction cleanup and commercial cleaning services available for Boise's downtown business district, government facilities, healthcare centers, and corporate offices.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Government Facility Cleaning", "Healthcare Facility Services", "Corporate Office Maintenance"]
    },
    {
      name: "Meridian",
      description: "Fast-growing Treasure Valley city with extensive residential and commercial development. Both construction cleanup and commercial cleaning services available for Meridian's construction projects and commercial facilities.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Retail Facility Cleaning", "Commercial Development Support"]
    },
    {
      name: "Nampa",
      description: "Canyon County's largest city and major industrial center. Both construction cleanup and commercial cleaning services available for Nampa's manufacturing facilities and commercial developments.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Industrial Facility Cleaning", "Manufacturing Support"]
    },
    {
      name: "Caldwell",
      description: "Historic Canyon County seat with growing industrial and agricultural sectors. Both construction cleanup and commercial cleaning services available for food processing facilities and commercial businesses.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Food Processing Facility Cleaning", "Educational Institution Cleaning"]
    },
    {
      name: "Eagle",
      description: "Prestigious Treasure Valley community known for luxury developments and corporate offices. Both construction cleanup and commercial cleaning services available for high-end commercial buildings and medical facilities.",
      services: ["Construction Cleanup Available", "Commercial Cleaning Available", "Executive Office Cleaning", "Medical Facility Services"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Idaho Falls & Eastern Idaho Cleaning Services | Imperial Cleaning Inc"
        description="Professional construction & commercial cleaning throughout Idaho Falls, Pocatello, Twin Falls & Eastern Idaho. Serving Bonneville County, Bannock County & southeastern Idaho businesses. Get your free quote today!"
        canonicalUrl="https://imperialcleaninginc.com/service-areas/idaho"
        openGraph={{
          title: "Idaho Falls & Eastern Idaho Cleaning Services | Imperial Cleaning Inc",
          description: "Professional construction and commercial cleaning services throughout Idaho Falls, Pocatello, Twin Falls, and the entire Eastern Idaho region.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          type: "website"
        }}
        twitter={{
          card: "summary_large_image",
          title: "Eastern Idaho Cleaning Services | Imperial Cleaning Inc",
          description: "Expert cleaning services across Idaho Falls, Pocatello, Twin Falls & Eastern Idaho. Professional construction & commercial cleaning solutions from our headquarters.",
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
            Idaho Falls & Eastern Idaho Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Headquartered in Idaho Falls, we provide both construction cleanup AND commercial cleaning services throughout Eastern Idaho and beyond. Every city we serve receives the same comprehensive range of professional cleaning services with the personal touch of a locally-owned business.
          </p>
          <Button 
            variant="pill-primary"
            size="pill-lg"
            onClick={() => setShowContactForm(true)}
            data-testid="button-request-quote"
            className="text-lg font-semibold px-8 py-4"
          >
            Request Quote for Eastern Idaho
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
              Imperial Cleaning Inc. provides comprehensive cleaning solutions across all Idaho service areas. From our Idaho Falls headquarters, we deliver the same high-quality services to every community we serve, with special expertise in Eastern Idaho markets.
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
            <h2 className="text-4xl font-bold mb-4 text-foreground">Eastern Idaho - Our Primary Market</h2>
            <p className="text-xl text-muted-foreground">
              Headquartered in Idaho Falls, serving southeastern Idaho with immediate response times and comprehensive cleaning solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {primaryMarketCities.map((city, index) => (
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
            <h2 className="text-4xl font-bold mb-4 text-foreground">Regional Idaho Markets</h2>
            <p className="text-xl text-muted-foreground">
              Expanding our coverage throughout regional Idaho communities and growing business centers
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
            <h3 className="text-3xl font-bold mb-4 text-foreground">Treasure Valley Coverage</h3>
            <p className="text-lg text-muted-foreground">
              Professional cleaning services extending to Boise area and southwestern Idaho markets
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
                "American Falls", "Preston", "Soda Springs", "Montpelier", "St. Anthony", "Driggs",
                "Kuna", "Star", "Garden City", "Mountain Home", "Emmett", "Middleton"
              ].map((city, index) => {
                const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={index} className="bg-card p-3 rounded-lg border border-border text-center">
                    <span className="text-sm font-semibold text-foreground" data-testid={`area-${citySlug}-idaho`}>
                      {city}
                    </span>
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
              <h3 className="text-xl font-bold mb-2 text-foreground">Eastern Idaho Expertise</h3>
              <p className="text-muted-foreground">Deep local knowledge throughout Idaho Falls, Pocatello, Blackfoot, and all of southeastern Idaho</p>
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
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Serve Your Eastern Idaho Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for professional cleaning services throughout Idaho Falls, Pocatello, Twin Falls, and all of Eastern Idaho
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => setShowContactForm(true)}
            data-testid="button-contact-idaho"
          >
            Get Eastern Idaho Quote
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
