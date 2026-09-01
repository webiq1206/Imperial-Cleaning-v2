"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import ServiceLocationsGrid from "@/components/service-locations-grid";
import RelatedContent from "@/components/shared/related-content";
import InternalHeroSection from "@/components/internal-hero-section";
import AnswerBlock from "@/components/shared/answer-block";
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
  Calendar,
  Users,
  CheckCircle,
  ClipboardList,
  Sparkles,
  Shield,
  Factory,
  Hospital,
  GraduationCap,
  Award,
  Briefcase,
  ShoppingCart,
  MapPin
} from "lucide-react";

export default function CommercialCleaningClient() {
  const [showContactForm, setShowContactForm] = useState(false);

  const commercialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Idaho & Utah Commercial Cleaning Services",
    "description": "Professional commercial cleaning and janitorial services for businesses across Idaho and Utah. Daily, weekly, and monthly cleaning schedules for offices, medical facilities, retail stores, and commercial buildings throughout the region.",
    "serviceType": "Commercial Cleaning",
    "url": "https://imperialcleaninginc.com/commercial-cleaning",
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
      { "@type": "ListItem", "position": 2, "name": "Commercial Cleaning", "item": "https://imperialcleaninginc.com/commercial-cleaning" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How flexible are your commercial cleaning schedules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer extremely flexible commercial cleaning schedules to accommodate your business needs. Our services include daily, weekly, bi-weekly, and monthly options. We work around your business hours - before opening, after closing, or during off-peak times."
        }
      },
      {
        "@type": "Question",
        "name": "What quality assurance measures do you have in place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We guarantee 100% satisfaction on all commercial cleaning services. Every account includes regular supervisor inspections and quality audits. We provide detailed service reports and maintain constant communication with facility managers."
        }
      },
      {
        "@type": "Question",
        "name": "Are you fully insured and bonded for commercial projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all commercial cleaning projects. We are fully bonded, providing complete protection for your property."
        }
      },
      {
        "@type": "Question",
        "name": "What types of businesses do you clean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide commercial cleaning for offices, medical facilities, retail stores, educational institutions, government buildings, manufacturing facilities, and more. Our trained staff understands the unique requirements of each industry."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use eco-friendly cleaning products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we prioritize environmentally friendly cleaning solutions that are effective yet safe for your employees and the environment. We can accommodate special requests for green cleaning products and can provide LEED-compliant cleaning services."
        }
      }
    ]
  };

  return (
    <>
      <StructuredData data={[commercialServiceSchema, breadcrumbSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs
            includeStructuredData={false}
            items={[
              { name: "Commercial Cleaning" }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <InternalHeroSection
        title="Professional Commercial Cleaning Services"
        subtitle="Expert janitorial and commercial cleaning throughout Idaho and Utah. Flexible scheduling and reliable service for businesses."
        pillText="Licensed & Insured • Professional Service"
        imageAlt="Commercial Cleaning Services Across Idaho & Utah | Imperial Cleaning Inc"
        primaryCTA={{
          text: "Schedule Walkthrough",
          onClick: () => setShowContactForm(true)
        }}
      />

      <AnswerBlock
        className="pt-14"
        question="What does Imperial Cleaning's commercial cleaning cover?"
        answer="Imperial Cleaning Inc provides recurring janitorial and commercial cleaning for offices, medical practices, schools, restaurants, dealerships, and industrial facilities across Idaho and Utah. Services run on a fixed scope and schedule, typically nightly or weekly, with supervisor inspections. The company has operated from Idaho Falls since 2015 and is licensed, insured, and bonded."
        facts={[
          { label: "Common schedules", value: "Nightly, weekly, or after-hours" },
          { label: "Facility types", value: "Office, medical, school, retail, industrial" },
          { label: "Coverage", value: "24 cities across Idaho and Utah" },
          { label: "Quote turnaround", value: "Written quote within 24 hours" },
        ]}
      />

      {/* Comprehensive Service Overview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Professional Commercial Cleaning Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Imperial Cleaning Inc. delivers exceptional commercial cleaning and janitorial services designed to maintain professional, healthy, and productive business environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-3 text-foreground">Flexible Scheduling</h3>
              <p className="text-muted-foreground">Daily, weekly, or custom cleaning schedules that work around your business hours</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-3 text-foreground">Complete Maintenance</h3>
              <p className="text-muted-foreground">Comprehensive office cleaning, sanitization, and facility maintenance</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-3 text-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground">Consistent standards and regular quality inspections for reliable service</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-6 text-foreground">Why Choose Our Commercial Cleaning?</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Trained professionals with commercial cleaning expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Eco-friendly cleaning products and advanced equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Flexible scheduling to minimize business disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Comprehensive insurance coverage and bonding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Regular quality audits and service reports</span>
                </li>
              </ul>
            </div>
            <div className="glass-card-elevated p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-10 h-10 text-primary" />
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
                  <span>Background-checked staff</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Satisfaction guarantees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Complete Commercial Cleaning Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From daily office maintenance to specialized facility cleaning, we provide comprehensive solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/office-cleaning" className="glass-card-elevated p-6 hover-lift-gentle block">
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Office Cleaning</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Workstation and desk cleaning</li>
                <li>• Conference room maintenance</li>
                <li>• Reception area care</li>
                <li>• Floor care and vacuuming</li>
              </ul>
            </Link>
            <Link href="/janitorial-services" className="glass-card-elevated p-6 hover-lift-gentle block">
              <div className="w-12 h-12 mb-4 rounded-full bg-teal-500/10 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Janitorial Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Recurring nightly or weekly routes</li>
                <li>• Restroom sanitation and restocking</li>
                <li>• Trash, floors, and high-touch surfaces</li>
                <li>• Supervisor inspections</li>
              </ul>
            </Link>
            <Link href="/commercial-floor-care" className="glass-card-elevated p-6 hover-lift-gentle block">
              <div className="w-12 h-12 mb-4 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Commercial Floor Care</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Strip and wax programs</li>
                <li>• Auto-scrub and burnish</li>
                <li>• Tile, VCT, and hard floors</li>
                <li>• Periodic restoration</li>
              </ul>
            </Link>
            <Link href="/day-porter-services" className="glass-card-elevated p-6 hover-lift-gentle block">
              <div className="w-12 h-12 mb-4 rounded-full bg-indigo-500/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Day Porter Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Daytime restroom checks</li>
                <li>• Lobby and entry presentation</li>
                <li>• Spill and trash response</li>
                <li>• Occupied-building support</li>
              </ul>
            </Link>
            <Link href="/industrial-cleaning" className="glass-card-elevated p-6 hover-lift-gentle block">
              <div className="w-12 h-12 mb-4 rounded-full bg-slate-500/10 flex items-center justify-center">
                <Factory className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Industrial Cleaning</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Plant and production support areas</li>
                <li>• Floor soil and dust control</li>
                <li>• Shift-friendly scheduling</li>
                <li>• Restroom and locker coverage</li>
              </ul>
            </Link>
            <Link href="/warehouse-cleaning" className="glass-card-elevated p-6 hover-lift-gentle block">
              <div className="w-12 h-12 mb-4 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Warehouse Cleaning</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Aisle and dock floor care</li>
                <li>• Dust control for inventory</li>
                <li>• Restroom and office zones</li>
                <li>• Distribution facility programs</li>
              </ul>
            </Link>
            <div className="glass-card-elevated p-6 hover-lift-gentle">
              <div className="w-12 h-12 mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Restroom Sanitization</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Deep cleaning and disinfection</li>
                <li>• Supply restocking</li>
                <li>• Fixture maintenance</li>
                <li>• Odor control systems</li>
              </ul>
            </div>
            <div className="glass-card-elevated p-6 hover-lift-gentle">
              <div className="w-12 h-12 mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Break Room & Kitchen</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Appliance cleaning</li>
                <li>• Counter sanitization</li>
                <li>• Sink and faucet care</li>
                <li>• Microwave and refrigerator cleaning</li>
              </ul>
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
              Our commercial cleaning expertise serves diverse industries across Idaho and Utah with specialized knowledge and tailored solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/office-building-cleaning" className="glass-card-elevated p-6 text-center hover-lift-gentle group block">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground group-hover:text-primary transition-colors">Office Building Cleaning</h3>
              <p className="text-sm text-muted-foreground">Professional office buildings, executive suites, and corporate headquarters</p>
            </Link>
            <Link href="/medical-office-cleaning" className="glass-card-elevated p-6 text-center hover-lift-gentle group block">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Hospital className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground group-hover:text-primary transition-colors">Medical Office Cleaning</h3>
              <p className="text-sm text-muted-foreground">Medical offices, clinics, dental practices, and healthcare centers</p>
            </Link>
            <Link href="/restaurant-cleaning-services" className="glass-card-elevated p-6 text-center hover-lift-gentle group block">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground group-hover:text-primary transition-colors">Restaurant Cleaning</h3>
              <p className="text-sm text-muted-foreground">Restaurants, dining rooms, and food-service facilities</p>
            </Link>
            <Link href="/school-cleaning-services" className="glass-card-elevated p-6 text-center hover-lift-gentle group block">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground group-hover:text-primary transition-colors">School Cleaning</h3>
              <p className="text-sm text-muted-foreground">Schools, daycare centers, training centers, and educational facilities</p>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/car-dealership-cleaning" className="text-primary hover:underline">
              Car dealership cleaning
            </Link>
            <Link href="/property-management-cleaning" className="text-primary hover:underline">
              Property management cleaning
            </Link>
            <Link href="/manufacturing-facility-cleaning" className="text-primary hover:underline">
              Manufacturing facility cleaning
            </Link>
            <Link href="/commercial-cleaning-cost" className="text-primary hover:underline">
              Commercial cleaning cost guide
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent
        pageUrl="/commercial-cleaning"
        heading="Explore Our Commercial Cleaning Coverage"
        description="Related services and the cities we serve across Idaho and Utah."
        limit={8}
        override={{
          pin: [
            { url: "/janitorial-services", anchor: "Janitorial Services" },
            { url: "/office-cleaning", anchor: "Office Cleaning Services" },
            { url: "/commercial-cleaning-cost", anchor: "Commercial cleaning cost guide" },
            { url: "/day-porter-services", anchor: "Day Porter Services" },
            { url: "/office-building-cleaning", anchor: "Office Building Cleaning" },
          ],
        }}
      />

      {/* Service Areas Grid */}
      <ServiceLocationsGrid
        serviceType="commercial-cleaning"
        title="Commercial Cleaning Service Areas"
        description="Professional commercial cleaning and janitorial services available in all our service locations across Idaho and Utah."
      />

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Commercial Cleaning FAQ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about our commercial cleaning and janitorial services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card-elevated p-8 rounded-lg">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="commercial-scheduling" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      How flexible are your commercial cleaning schedules?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We offer extremely flexible commercial cleaning schedules to accommodate your business needs. Our services include daily, weekly, bi-weekly, and monthly options. We work around your business hours - before opening, after closing, or during off-peak times.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="quality-assurance" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      What quality assurance measures do you have in place?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We guarantee 100% satisfaction on all commercial cleaning services. Every account includes regular supervisor inspections and quality audits. We provide detailed service reports and maintain constant communication with facility managers.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="insurance-bonding" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      Are you fully insured and bonded for commercial projects?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers&apos; compensation, and bonding for all commercial cleaning projects. We are fully bonded, providing complete protection for your property.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="business-types" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      What types of businesses do you clean?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We provide commercial cleaning for offices, medical facilities, retail stores, educational institutions, government buildings, manufacturing facilities, and more. Our trained staff understands the unique requirements of each industry.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="eco-friendly" className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">
                      Do you use eco-friendly cleaning products?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, we prioritize environmentally friendly cleaning solutions that are effective yet safe for your employees and the environment. We can accommodate special requests for green cleaning products and can provide LEED-compliant cleaning services.
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
              Ready for Professional Commercial Cleaning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Maintain a professional, healthy work environment with our comprehensive commercial cleaning services. Serving businesses across Idaho and Utah with flexible schedules and guaranteed satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-4"
                size="lg"
              >
                Schedule Walkthrough
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
