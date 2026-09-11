"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import InternalHeroSection from "@/components/internal-hero-section";
import RelatedContent from "@/components/shared/related-content";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cpu, Landmark, GraduationCap, Zap, Clock, PhoneCall, ClipboardList, Phone, Shield } from "lucide-react";

export default function ServiceAreasUtahClient() {
  const [showContactForm, setShowContactForm] = useState(false);

  // Imperial Cleaning has no physical branch in Utah (HQ is Idaho Falls), so this
  // page describes a Service with Utah cities as areaServed and the canonical
  // Organization as provider - it does NOT declare a Utah LocalBusiness.
  // TODO(real-data): add aggregateRating + Review entities once a verifiable review feed exists.
  const utahServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Utah Commercial & Construction Cleaning Services",
    "description": "Idaho Falls-headquartered professional commercial and construction cleaning services throughout Salt Lake City, Logan, Ogden, Provo and the entire Wasatch Front region.",
    "url": "https://imperialcleaninginc.com/service-areas/utah",
    "serviceType": ["Commercial Cleaning", "Construction Cleaning"],
    "provider": { "@id": "https://imperialcleaninginc.com/#organization" },
    "areaServed": [
      { "@type": "State", "name": "Utah", "sameAs": "https://en.wikipedia.org/wiki/Utah" },
      { "@type": "City", "name": "Salt Lake City", "sameAs": "https://en.wikipedia.org/wiki/Salt_Lake_City" },
      { "@type": "City", "name": "Logan", "sameAs": "https://en.wikipedia.org/wiki/Logan,_Utah" },
      { "@type": "City", "name": "Ogden", "sameAs": "https://en.wikipedia.org/wiki/Ogden,_Utah" },
      { "@type": "City", "name": "Provo", "sameAs": "https://en.wikipedia.org/wiki/Provo,_Utah" },
      { "@type": "City", "name": "West Valley City" },
      { "@type": "City", "name": "Sandy" },
      { "@type": "City", "name": "Orem" },
      { "@type": "City", "name": "Layton" }
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
            includeStructuredData={false}
            items={[
              { name: "Service Areas", href: "/service-areas" },
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
      <nav className="jump-links" aria-label="On this page"><a href="#all-cities">Find your city</a><a href="#primary-cities">Primary service areas</a><a href="#faq">Questions</a></nav>

      {/* Utah Service Areas */}
      <section id="primary-cities" className="py-24 px-4">
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

      {/* Utah City Service Pages */}
      <section id="all-cities" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 text-foreground">All Utah Cleaning Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our <Link href="/commercial-cleaning" className="text-primary hover:underline">Commercial Cleaning Services</Link> and <Link href="/construction-cleaning" className="text-primary hover:underline">Construction Cleaning Services</Link> available throughout Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Logan</h3>
              <ul className="space-y-2">
                <li><Link href="/utah/commercial-cleaning/logan" className="text-primary hover:underline text-sm">Logan commercial cleaning</Link></li>
                <li><Link href="/utah/construction-cleaning/logan" className="text-primary hover:underline text-sm">Logan construction cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Salt Lake City</h3>
              <ul className="space-y-2">
                <li><Link href="/utah/commercial-cleaning/salt-lake-city" className="text-primary hover:underline text-sm">Salt Lake City commercial cleaning</Link></li>
                <li><Link href="/utah/construction-cleaning/salt-lake-city" className="text-primary hover:underline text-sm">Salt Lake City construction cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Ogden</h3>
              <ul className="space-y-2">
                <li><Link href="/utah/commercial-cleaning/ogden" className="text-primary hover:underline text-sm">Ogden commercial cleaning</Link></li>
                <li><Link href="/utah/construction-cleaning/ogden" className="text-primary hover:underline text-sm">Ogden construction cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Provo</h3>
              <ul className="space-y-2">
                <li><Link href="/utah/commercial-cleaning/provo" className="text-primary hover:underline text-sm">Provo commercial cleaning</Link></li>
                <li><Link href="/utah/construction-cleaning/provo" className="text-primary hover:underline text-sm">Provo construction cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">West Valley City</h3>
              <ul className="space-y-2">
                <li><Link href="/utah/commercial-cleaning/west-valley-city" className="text-primary hover:underline text-sm">West Valley City commercial cleaning</Link></li>
                <li><Link href="/utah/construction-cleaning/west-valley-city" className="text-primary hover:underline text-sm">West Valley City construction cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Sandy</h3>
              <ul className="space-y-2">
                <li><Link href="/utah/commercial-cleaning/sandy" className="text-primary hover:underline text-sm">Sandy commercial cleaning</Link></li>
                <li><Link href="/utah/construction-cleaning/sandy" className="text-primary hover:underline text-sm">Sandy construction cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Orem</h3>
              <ul className="space-y-2">
                <li><Link href="/utah/commercial-cleaning/orem" className="text-primary hover:underline text-sm">Orem commercial cleaning</Link></li>
                <li><Link href="/utah/construction-cleaning/orem" className="text-primary hover:underline text-sm">Orem construction cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Layton</h3>
              <ul className="space-y-2">
                <li><Link href="/utah/commercial-cleaning/layton" className="text-primary hover:underline text-sm">Layton commercial cleaning</Link></li>
                <li><Link href="/utah/construction-cleaning/layton" className="text-primary hover:underline text-sm">Layton construction cleaning</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* Market Overview Section */}
      <section id="local-market" className="py-24 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
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
                  <Cpu className="w-5 h-5 text-blue-500" />
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
                  <Landmark className="w-5 h-5 text-green-500" />
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
                  <GraduationCap className="w-5 h-5 text-orange-500" />
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
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="text-lg mb-2 text-foreground">Logan & Ogden</h4>
                <p className="text-sm text-muted-foreground">Same-day response capability</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="text-lg mb-2 text-foreground">Salt Lake City & Provo</h4>
                <p className="text-sm text-muted-foreground">24-48 hour deployment</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <PhoneCall className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="text-lg mb-2 text-foreground">Emergency Services</h4>
                <p className="text-sm text-muted-foreground">24/7 rapid response</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="faq" className="py-24 px-4 bg-card/30">
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
      <section id="quote" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center">
            <h2 className="text-4xl mb-6 text-white">Ready to Experience Professional Wasatch Front Cleaning?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From financial institutions in Salt Lake City to research labs in Logan, from federal facilities in Ogden to tech campuses in Provo, we deliver specialized cleaning solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setShowContactForm(true)}
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              >
                <ClipboardList className="w-5 h-5 mr-2" />
                Request Your Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white/10"
              >
                <a href="tel:+12085203202">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (208) 520-3202
                </a>
              </Button>
            </div>

            <p className="text-sm text-white/80 mt-8">
              <Shield className="w-4 h-4 mr-2 inline" />
              Licensed, insured, and compliant across all Utah Wasatch Front service areas
            </p>
          </div>
        </div>
      </section>

      <RelatedContent
        pageUrl="/service-areas/utah"
        heading="More Utah Cleaning Resources"
        description="Cross-references to related services, Utah cities, and our Idaho coverage."
        limit={5}
      />

      {showContactForm && (
        <ContactFormModal
          isOpen={showContactForm}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </>
  );
}

