"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import InternalHeroSection from "@/components/internal-hero-section";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServiceAreasUtahClient() {
  const [showContactForm, setShowContactForm] = useState(false);

  const utahServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wasatch Front Cleaning Services - Utah",
    "description": "Idaho Falls-headquartered professional commercial and construction cleaning services throughout Salt Lake City, Logan, Ogden, Provo and the entire Wasatch Front region.",
    "serviceType": "Commercial and Construction Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Imperial Cleaning Inc",
      "url": "https://imperialcleaninginc.com",
      "telephone": "+1-208-520-3202"
    },
    "areaServed": [
      { "@type": "City", "name": "Salt Lake City", "sameAs": "https://en.wikipedia.org/wiki/Salt_Lake_City" },
      { "@type": "City", "name": "Logan", "sameAs": "https://en.wikipedia.org/wiki/Logan,_Utah" },
      { "@type": "City", "name": "Ogden", "sameAs": "https://en.wikipedia.org/wiki/Ogden,_Utah" },
      { "@type": "City", "name": "Provo", "sameAs": "https://en.wikipedia.org/wiki/Provo,_Utah" },
      { "@type": "AdministrativeArea", "name": "Salt Lake County" },
      { "@type": "AdministrativeArea", "name": "Weber County" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://imperialcleaninginc.com/#service-areas" },
      { "@type": "ListItem", "position": 3, "name": "Utah Service Areas", "item": "https://imperialcleaninginc.com/service-areas/utah" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What cities in Utah do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Salt Lake City, Logan, Ogden, Provo, West Valley City, Sandy, Orem, and Layton. Our services cover the entire Wasatch Front corridor from Logan in the north to Provo in the south, including all of Salt Lake County and Utah County."
        }
      },
      {
        "@type": "Question",
        "name": "What services do you offer in Utah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive construction cleanup and commercial cleaning services throughout Utah. This includes post-construction debris removal, final inspection cleaning, daily janitorial services, office cleaning, floor care, and specialized facility maintenance for healthcare, tech, and government buildings."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to Utah cleaning requests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Logan and Ogden receive same-day response capability due to their proximity to our Idaho Falls headquarters. Salt Lake City and Provo projects typically see 24-48 hour deployment. Emergency services are available 24/7 across all Utah Wasatch Front service areas."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed to work in Utah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Imperial Cleaning Inc. is fully licensed, insured, and bonded for all cleaning projects in Utah. We maintain comprehensive insurance coverage and comply with all Utah state regulations for commercial cleaning services."
        }
      }
    ]
  };

  const utahCities = [
    { name: "Salt Lake City", county: "Salt Lake County", description: "Utah's capital with financial district, state government, and major medical centers." },
    { name: "Logan", county: "Cache County", description: "Home to Utah State University and research facilities. Closest Utah market to our Idaho headquarters." },
    { name: "Ogden", county: "Weber County", description: "Federal facilities including IRS Center, Hill Air Force Base proximity, and Weber State University." },
    { name: "Provo", county: "Utah County", description: "Silicon Slopes tech hub with BYU campus and major tech companies like Qualtrics and Adobe." }
  ];

  return (
    <>
      <StructuredData data={[utahServiceSchema, breadcrumbSchema, faqSchema]} />

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

      <InternalHeroSection
        title="Utah Cleaning Services"
        subtitle="Professional construction and commercial cleaning services across the Wasatch Front and northern Utah. Serving Logan, Ogden, Salt Lake City, Provo, and surrounding areas."
        pillText="Utah's Professional Cleaning Solution • Licensed & Insured"
        imageAlt="Utah Cleaning Services - Professional Commercial & Construction Cleaning Across Wasatch Front Salt Lake City Logan Ogden Provo | Imperial Cleaning Inc"
        primaryCTA={{
          text: "Request a Quote",
          onClick: () => setShowContactForm(true)
        }}
      />

      {/* Market Overview Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">Wasatch Front Market Overview</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Imperial Cleaning Inc. extends its Idaho Falls-based expertise to serve Utah&apos;s dynamic Wasatch Front corridor with specialized cleaning solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="resend-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-microchip text-blue-500 text-xl"></i>
                </div>
                <h3 className="text-xl text-foreground">Tech & Innovation</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Silicon Slopes tech corridor (Qualtrics, Adobe, Pluralsight) and University of Utah research facilities.
              </p>
            </div>

            <div className="resend-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-landmark text-green-500 text-xl"></i>
                </div>
                <h3 className="text-xl text-foreground">Finance & Government</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Utah State Capitol, financial district (Goldman Sachs, Zions Bank), IRS Center, and Hill Air Force Base proximity.
              </p>
            </div>

            <div className="resend-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-orange-500 text-xl"></i>
                </div>
                <h3 className="text-xl text-foreground">Education & Healthcare</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Major universities (Utah State, BYU, University of Utah, Weber State) and Intermountain Healthcare system.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl mb-6 text-foreground text-center">Response Time Commitments</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <i className="fas fa-bolt text-green-500 text-2xl"></i>
                </div>
                <h4 className="text-lg mb-2 text-foreground">Logan & Ogden</h4>
                <p className="text-sm text-muted-foreground">Same-day response capability</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <i className="fas fa-clock text-blue-500 text-2xl"></i>
                </div>
                <h4 className="text-lg mb-2 text-foreground">Salt Lake City & Provo</h4>
                <p className="text-sm text-muted-foreground">24-48 hour deployment</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <i className="fas fa-phone-volume text-purple-500 text-2xl"></i>
                </div>
                <h4 className="text-lg mb-2 text-foreground">Emergency Services</h4>
                <p className="text-sm text-muted-foreground">24/7 rapid response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utah Service Areas */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">Utah Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional cleaning services available throughout the Wasatch Front.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {utahCities.map((city, index) => (
              <div key={index} className="resend-card p-6 hover-lift-gentle">
                <h3 className="text-2xl mb-2 text-foreground">{city.name}</h3>
                <div className="text-sm text-muted-foreground mb-4">{city.county}</div>
                <p className="text-muted-foreground mb-4">{city.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-500/20 text-green-700 dark:text-green-300 px-2 py-1 rounded">Construction Cleanup</span>
                  <span className="text-xs bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Commercial Cleaning</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">Utah Cleaning Services FAQ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our cleaning services throughout Utah.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="cities" className="resend-card rounded-lg border-0 overflow-hidden">
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                  <h3 className="text-lg text-foreground leading-tight">
                    What cities in Utah do you serve?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    We serve Salt Lake City, Logan, Ogden, Provo, West Valley City, Sandy, Orem, and Layton. Our services cover the entire Wasatch Front corridor from Logan in the north to Provo in the south, including all of Salt Lake County and Utah County.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services" className="resend-card rounded-lg border-0 overflow-hidden">
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                  <h3 className="text-lg text-foreground leading-tight">
                    What services do you offer in Utah?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    We provide comprehensive construction cleanup and commercial cleaning services throughout Utah. This includes post-construction debris removal, final inspection cleaning, daily janitorial services, office cleaning, floor care, and specialized facility maintenance for healthcare, tech, and government buildings.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="response" className="resend-card rounded-lg border-0 overflow-hidden">
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                  <h3 className="text-lg text-foreground leading-tight">
                    How quickly can you respond to Utah cleaning requests?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Logan and Ogden receive same-day response capability due to their proximity to our Idaho Falls headquarters. Salt Lake City and Provo projects typically see 24-48 hour deployment. Emergency services are available 24/7 across all Utah Wasatch Front service areas.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="licensed" className="resend-card rounded-lg border-0 overflow-hidden">
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                  <h3 className="text-lg text-foreground leading-tight">
                    Are you licensed to work in Utah?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, Imperial Cleaning Inc. is fully licensed, insured, and bonded for all cleaning projects in Utah. We maintain comprehensive insurance coverage and comply with all Utah state regulations for commercial cleaning services.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center">
            <h2 className="text-4xl mb-6 text-white">Ready to Experience Professional Wasatch Front Cleaning?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From financial institutions in Salt Lake City to research labs in Logan, from federal facilities in Ogden to tech campuses in Provo—we deliver specialized cleaning solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setShowContactForm(true)}
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              >
                <i className="fas fa-clipboard-list mr-2"></i>
                Request Your Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white/10"
              >
                <a href="tel:+12085203202">
                  <i className="fas fa-phone mr-2"></i>
                  Call (208) 520-3202
                </a>
              </Button>
            </div>

            <p className="text-sm text-white/80 mt-8">
              <i className="fas fa-shield-alt mr-2"></i>
              Licensed, insured, and compliant across all Utah Wasatch Front service areas
            </p>
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
