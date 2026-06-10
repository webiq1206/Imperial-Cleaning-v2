"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import ServiceLocationsGrid from "@/components/service-locations-grid";
import RelatedContent from "@/components/shared/related-content";
import InternalHeroSection from "@/components/internal-hero-section";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  MapPin
} from "lucide-react";

export default function ConstructionCleaningClient() {
  const [showContactForm, setShowContactForm] = useState(false);

  const constructionServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Idaho & Utah Construction Cleaning Services",
    "description": "Professional post-construction cleanup services across Idaho and Utah. Comprehensive debris removal, detailed cleaning, and inspection-ready finishing for contractors and builders throughout the region.",
    "serviceType": "Construction Cleaning",
    "url": "https://imperialcleaninginc.com/construction-cleaning",
    "provider": { "@id": "https://imperialcleaninginc.com/#organization" },
    "areaServed": [
      { "@type": "State", "name": "Idaho", "sameAs": "https://en.wikipedia.org/wiki/Idaho" },
      { "@type": "State", "name": "Utah", "sameAs": "https://en.wikipedia.org/wiki/Utah" }
    ]
    // TODO(real-data): add aggregateRating + Review entities once a verifiable review feed exists.
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://imperialcleaninginc.com/#services" },
      { "@type": "ListItem", "position": 3, "name": "Construction Cleaning", "item": "https://imperialcleaninginc.com/construction-cleaning" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does your post-construction cleanup process include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our construction cleanup follows a comprehensive 3-phase process: Phase 1 includes rough cleaning with debris removal, dust elimination, and surface preparation. Phase 2 covers detailed cleaning of windows, fixtures, floors, and all surfaces. Phase 3 is our final inspection-ready cleaning with touch-ups, floor protection, and complete project walkthrough."
        }
      },
      {
        "@type": "Question",
        "name": "Are you fully insured and compliant with construction site safety requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all construction cleanup projects. We are OSHA compliant and our team is trained in construction site safety protocols."
        }
      },
      {
        "@type": "Question",
        "name": "How do you determine pricing for construction cleanup projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most commercial post-construction cleaning runs $0.15 to $0.60 per square foot: single-phase final cleans of standard offices typically fall at $0.15-$0.30, while multi-phase programs, medical builds, and heavy-debris projects run $0.30-$0.60 or more. Pricing reflects square footage, project complexity, cleanup phases, timeline, and site access. We provide detailed, transparent quotes with no hidden fees - both per-square-foot and flat-rate options are available."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for construction cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide construction cleanup services throughout Idaho and Utah, including Idaho Falls, Pocatello, Boise, Twin Falls, Salt Lake City, Logan, Ogden, Provo, and 24+ cities across both states. Our headquarters in Idaho Falls allows us to respond quickly to projects in the region."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you start a construction cleanup project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For projects in our primary service areas (Idaho Falls, Pocatello), we can often begin same-day or next-day. For extended areas like Boise, Salt Lake City, and Twin Falls, we typically deploy within 24-48 hours. Emergency services are available 24/7."
        }
      }
    ]
  };

  return (
    <>
      <StructuredData data={[constructionServiceSchema, breadcrumbSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs
            includeStructuredData={false}
            items={[
              { name: "Services", href: "/#services" },
              { name: "Construction Cleaning" }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <InternalHeroSection
        title="Professional Construction Cleanup Services"
        subtitle="Expert post-construction cleanup across Idaho and Utah. From debris removal to final detailing, delivering inspection-ready results."
        pillText="Licensed & Insured • Professional Service"
        imageAlt="Construction Cleanup Services Across Idaho & Utah | Imperial Cleaning Inc"
        primaryCTA={{
          text: "Request a Quote",
          onClick: () => setShowContactForm(true)
        }}
      />

      {/* Comprehensive Service Overview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Comprehensive Construction Cleanup Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Imperial Cleaning Inc. specializes in professional post-construction cleanup services designed to transform construction sites into pristine, inspection-ready spaces.
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

      {/* 3-Phase Process */}
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
                    Initial site assessment and removal of major construction debris, materials, and safety hazards.
                  </p>
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
                    Final quality checks, touch-ups, and preparation for client walkthrough or occupancy permit inspection.
                  </p>
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
          </div>
        </div>
      </section>

      <RelatedContent
        pageUrl="/construction-cleaning"
        heading="Explore Our Construction Cleanup Coverage"
        description="Related services and the cities we serve across Idaho and Utah."
        limit={5}
      />

      {/* Service Areas Grid */}
      <ServiceLocationsGrid
        serviceType="construction-cleaning"
        title="Construction Cleanup Service Areas"
        description="Professional post-construction cleanup services available in all our service locations across Idaho and Utah."
      />

      {/* FAQ Section */}
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
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      What does your post-construction cleanup process include?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Our construction cleanup follows a comprehensive 3-phase process: Phase 1 includes rough cleaning with debris removal, dust elimination, and surface preparation. Phase 2 covers detailed cleaning of windows, fixtures, floors, and all surfaces. Phase 3 is our final inspection-ready cleaning with touch-ups, floor protection, and complete project walkthrough.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="safety-compliance" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      Are you fully insured and compliant with construction site safety requirements?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers&apos; compensation, and bonding for all construction cleanup projects. We are OSHA compliant and our team is trained in construction site safety protocols.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="construction-pricing" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      How do you determine pricing for construction cleanup projects?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Most commercial post-construction cleaning runs $0.15 to $0.60 per square foot: single-phase final cleans of standard offices typically fall at $0.15&ndash;$0.30, while multi-phase programs, medical builds, and heavy-debris projects run $0.30&ndash;$0.60 or more. Pricing reflects square footage, project complexity, cleanup phases, timeline, and site access. We provide detailed, transparent quotes with no hidden fees &mdash; both per-square-foot and flat-rate options are available.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="construction-areas" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      What areas do you serve for construction cleaning?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We provide construction cleanup services throughout Idaho and Utah, including Idaho Falls, Pocatello, Boise, Twin Falls, Salt Lake City, Logan, Ogden, Provo, and 24+ cities across both states. Our headquarters in Idaho Falls allows us to respond quickly to projects in the region.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="construction-start" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      How quickly can you start a construction cleanup project?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      For projects in our primary service areas (Idaho Falls, Pocatello), we can often begin same-day or next-day. For extended areas like Boise, Salt Lake City, and Twin Falls, we typically deploy within 24-48 hours. Emergency services are available 24/7.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg">
            <h2 className="text-3xl lg:text-4xl mb-6 tracking-tight text-foreground">
              Ready for Professional Construction Cleanup?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get your construction project inspection-ready with our comprehensive 3-phase cleanup process. Serving contractors and developers across Idaho and Utah with guaranteed satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-4"
                size="lg"
              >
                Get Your Free Quote
              </Button>
              <a href="tel:+12085203202">
                <Button variant="outline" size="lg" className="px-8 py-4">
                  Call (208) 520-3202
                </Button>
              </a>
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
