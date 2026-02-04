"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import ServiceLocationsGrid from "@/components/service-locations-grid";
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
    "provider": {
      "@type": "LocalBusiness",
      "name": "Imperial Cleaning Inc",
      "url": "https://imperialcleaninginc.com",
      "telephone": "+1-208-520-3202"
    },
    "areaServed": [
      { "@type": "State", "name": "Idaho", "sameAs": "https://en.wikipedia.org/wiki/Idaho" },
      { "@type": "State", "name": "Utah", "sameAs": "https://en.wikipedia.org/wiki/Utah" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://imperialcleaninginc.com/#services" },
      { "@type": "ListItem", "position": 3, "name": "Commercial Cleaning", "item": "https://imperialcleaninginc.com/commercial-cleaning" }
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
            items={[
              { name: "Services", href: "/#services" },
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
          text: "Request a Quote",
          onClick: () => setShowContactForm(true)
        }}
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
            <div className="glass-card-elevated p-6 hover-lift-gentle">
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
            </div>
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
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Corporate Offices</h3>
              <p className="text-sm text-muted-foreground">Professional office buildings, executive suites, and corporate headquarters</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Hospital className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Healthcare Facilities</h3>
              <p className="text-sm text-muted-foreground">Medical offices, clinics, dental practices, and healthcare centers</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Retail & Shopping</h3>
              <p className="text-sm text-muted-foreground">Retail stores, shopping centers, and commercial retail spaces</p>
            </div>
            <div className="glass-card-elevated p-6 text-center hover-lift-gentle group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg mb-3 text-foreground">Educational Institutions</h3>
              <p className="text-sm text-muted-foreground">Schools, universities, training centers, and educational facilities</p>
            </div>
          </div>
        </div>
      </section>

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
