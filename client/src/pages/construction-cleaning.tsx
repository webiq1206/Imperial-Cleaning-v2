import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, RouteComponentProps } from "wouter";
import ContactFormModal from "@/components/contact-form-modal";
import ServiceLocationsGrid from "@/components/service-locations-grid";
import { ServiceLocation } from "@shared/service-locations";
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
  Star
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

      {/* Comprehensive Service Overview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Comprehensive Construction Cleanup Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Imperial Cleaning Inc. specializes in professional post-construction cleanup services designed to transform construction sites into pristine, inspection-ready spaces. Our comprehensive approach ensures your project meets the highest standards for occupancy and final inspection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Trash2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Debris Removal</h3>
              <p className="text-muted-foreground">Complete removal of construction materials, packaging, and jobsite debris</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Deep Cleaning</h3>
              <p className="text-muted-foreground">Thorough cleaning of all surfaces, fixtures, and hard-to-reach areas</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Inspection Ready</h3>
              <p className="text-muted-foreground">Final preparation for occupancy permits and client walkthroughs</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Why Choose Our Construction Cleanup?</h3>
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
                <h4 className="text-2xl font-bold text-foreground">Professional Standards</h4>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our 3-Phase Construction Cleanup Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures thorough, efficient cleanup that meets inspection standards and project deadlines.
            </p>
          </div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="glass-card-elevated p-8 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardList className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Phase 1: Rough Cleaning & Assessment</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Initial site assessment and removal of major construction debris, materials, and safety hazards. This phase prepares the site for detailed cleaning work.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Activities Include:</h4>
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
                      <h4 className="font-semibold text-foreground mb-3">Equipment Used:</h4>
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
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Broom className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Phase 2: Detailed Cleaning & Surface Preparation</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive cleaning of all surfaces, fixtures, and systems. Focus on removing construction dust, adhesives, and preparing surfaces for final inspection.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Detailed Tasks:</h4>
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
                      <h4 className="font-semibold text-foreground mb-3">Specialized Cleaning:</h4>
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
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Phase 3: Final Inspection & Quality Assurance</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Final quality checks, touch-ups, and preparation for client walkthrough or occupancy permit inspection. Every detail is verified to meet our high standards.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Final Steps:</h4>
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
                      <h4 className="font-semibold text-foreground mb-3">Quality Standards:</h4>
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

      {/* Industries Served */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our construction cleanup expertise spans across diverse project types and industries throughout Idaho and Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Commercial Buildings</h3>
              <p className="text-sm text-muted-foreground">Office complexes, retail centers, and commercial developments</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Home className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Residential Projects</h3>
              <p className="text-sm text-muted-foreground">Custom homes, apartment complexes, and residential developments</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Factory className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Industrial Facilities</h3>
              <p className="text-sm text-muted-foreground">Manufacturing plants, warehouses, and distribution centers</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Hospital className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Healthcare Facilities</h3>
              <p className="text-sm text-muted-foreground">Hospitals, clinics, and medical office buildings</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Educational Institutions</h3>
              <p className="text-sm text-muted-foreground">Schools, universities, and training facilities</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Government Buildings</h3>
              <p className="text-sm text-muted-foreground">Municipal buildings, courthouses, and public facilities</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Mixed-Use Developments</h3>
              <p className="text-sm text-muted-foreground">Combined residential, commercial, and retail projects</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Hospitality & Recreation</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Construction Cleanup Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real projects, real results. See how our construction cleanup expertise has helped contractors and developers across Idaho and Utah.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Case Study 1 */}
            <div className="glass-card-elevated p-8 rounded-lg hover-lift-gentle group">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-full text-xs font-medium border text-orange-400 border-orange-400/20 bg-orange-400/10">
                  CONSTRUCTION
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  Idaho Falls, ID
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                Downtown Office Complex
              </h3>
              <p className="text-lg text-primary mb-4 font-medium">
                75,000 sq ft Post-Construction Cleanup Excellence
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A premier 15-story downtown Idaho Falls office complex required comprehensive post-construction cleaning after extensive renovations. Our team completed the project 2 days ahead of schedule with zero tolerance for delays.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">75,000</div>
                  <div className="text-xs text-muted-foreground">Square Feet</div>
                </div>
                <div className="text-center p-3 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">4 Days</div>
                  <div className="text-xs text-muted-foreground">Completion Time</div>
                </div>
                <div className="text-center p-3 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">15%</div>
                  <div className="text-xs text-muted-foreground">Under Budget</div>
                </div>
                <div className="text-center p-3 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">5/5</div>
                  <div className="text-xs text-muted-foreground">Client Rating</div>
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
                <p className="text-sm text-muted-foreground italic">
                  "Imperial Cleaning exceeded every expectation. Their systematic approach and attention to detail ensured our building was inspection-ready ahead of schedule."
                </p>
                <p className="text-sm font-medium text-foreground mt-2">
                  - Michael Chen, Project Manager, Snake River Development Group
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="glass-card-elevated p-8 rounded-lg hover-lift-gentle group">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-full text-xs font-medium border text-orange-400 border-orange-400/20 bg-orange-400/10">
                  MULTI-STATE
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  Salt Lake City & Provo, UT
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                Multi-Site Construction Projects
              </h3>
              <p className="text-lg text-primary mb-4 font-medium">
                Large-Scale Construction Cleanup Across Multiple Locations
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A major construction company required reliable post-construction cleanup services across multiple Utah locations simultaneously. We established dedicated Utah operations with consistent service delivery.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">8</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-3 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">400K</div>
                  <div className="text-xs text-muted-foreground">Total Sq Ft</div>
                </div>
                <div className="text-center p-3 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">On-Time</div>
                </div>
                <div className="text-center p-3 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">2</div>
                  <div className="text-xs text-muted-foreground">States</div>
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
                <p className="text-sm text-muted-foreground italic">
                  "Imperial Cleaning's ability to scale across state lines while maintaining their exceptional quality standards is impressive. They've become our go-to partner."
                </p>
                <p className="text-sm font-medium text-foreground mt-2">
                  - Amanda Thompson, Regional Construction Manager, Mountain West Builders
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => setShowContactForm(true)}
              variant="pill-primary" 
              size="pill-lg"
              className="font-semibold"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Construction Cleanup FAQ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about our post-construction cleanup services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card-elevated p-8 rounded-lg">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="construction-process" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline" data-testid="faq-construction-process">
                    <h3 className="text-lg font-medium text-foreground leading-tight">
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
                    <h3 className="text-lg font-medium text-foreground leading-tight">
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
                    <h3 className="text-lg font-medium text-foreground leading-tight">
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
                    <h3 className="text-lg font-medium text-foreground leading-tight">
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
                    <h3 className="text-lg font-medium text-foreground leading-tight">
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
                    <h3 className="text-lg font-medium text-foreground leading-tight">
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

      {/* Related Services Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Complete Cleaning Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Imperial Cleaning provides comprehensive services across Idaho and Utah
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Commercial Cleaning</h3>
              <p className="text-muted-foreground mb-4">Daily, weekly, and monthly cleaning schedules for offices and businesses</p>
              <Link href="/commercial-cleaning">
                <Button variant="outline" size="sm" className="w-full" data-testid="link-commercial-cleaning">
                  Learn About Commercial Services
                </Button>
              </Link>
            </div>
            
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Idaho Service Areas</h3>
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
              <h3 className="text-xl font-bold mb-3 text-foreground">Utah Service Areas</h3>
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

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-premium p-12 rounded-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <HardHat className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready for Professional Construction Cleanup?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Get your construction project inspection-ready with our comprehensive 3-phase cleanup process. Serving contractors and developers across Idaho and Utah with guaranteed satisfaction.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-effect p-4 rounded-lg">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">Fast Response</div>
                <div className="text-sm text-muted-foreground">24-48 hour project start</div>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">Guaranteed Quality</div>
                <div className="text-sm text-muted-foreground">100% satisfaction promise</div>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">Proven Results</div>
                <div className="text-sm text-muted-foreground">Inspection-ready cleanup</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={() => setShowContactForm(true)}
                variant="pill-primary" 
                size="pill-lg"
                className="text-lg font-semibold px-12 py-4 hover-lift-gentle button-ripple"
                data-testid="button-get-construction-quote-main"
              >
                Get Your Free Construction Cleanup Quote
              </Button>
              <p className="text-sm text-muted-foreground">
                Licensed, bonded, and insured • Available across Idaho & Utah • Emergency cleanup services available
              </p>
            </div>
          </div>
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
