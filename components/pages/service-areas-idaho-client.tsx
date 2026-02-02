"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import InternalHeroSection from "@/components/internal-hero-section";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { StructuredData } from "@/components/structured-data";

export default function ServiceAreasIdahoClient() {
  const [showContactForm, setShowContactForm] = useState(false);

  const idahoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Idaho Falls & Eastern Idaho Cleaning Services",
    "description": "Headquartered in Idaho Falls, providing comprehensive commercial and construction cleaning services throughout southeastern Idaho, Magic Valley, and extending coverage to the Treasure Valley region.",
    "serviceType": "Commercial and Construction Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Imperial Cleaning Inc",
      "url": "https://imperialcleaninginc.com",
      "telephone": "+1-208-520-3202"
    },
    "areaServed": [
      { "@type": "City", "name": "Idaho Falls", "sameAs": "https://en.wikipedia.org/wiki/Idaho_Falls,_Idaho" },
      { "@type": "City", "name": "Pocatello", "sameAs": "https://en.wikipedia.org/wiki/Pocatello,_Idaho" },
      { "@type": "City", "name": "Blackfoot", "sameAs": "https://en.wikipedia.org/wiki/Blackfoot,_Idaho" },
      { "@type": "City", "name": "Twin Falls", "sameAs": "https://en.wikipedia.org/wiki/Twin_Falls,_Idaho" },
      { "@type": "City", "name": "Rexburg", "sameAs": "https://en.wikipedia.org/wiki/Rexburg,_Idaho" },
      { "@type": "AdministrativeArea", "name": "Bonneville County" },
      { "@type": "AdministrativeArea", "name": "Bannock County" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://imperialcleaninginc.com/#service-areas" },
      { "@type": "ListItem", "position": 3, "name": "Idaho Service Areas", "item": "https://imperialcleaninginc.com/service-areas/idaho" }
    ]
  };

  const primaryMarketCities = [
    { name: "Idaho Falls", population: "65,000+", county: "Bonneville County", description: "Our headquarters city and the heart of Eastern Idaho's commercial activity." },
    { name: "Pocatello", population: "56,000+", county: "Bannock County", description: "Major southeastern Idaho city and home to Idaho State University." },
    { name: "Blackfoot", population: "12,000+", county: "Bingham County", description: "Regional center for agriculture and food processing in southeastern Idaho." },
    { name: "Rexburg", population: "32,000+", county: "Madison County", description: "Home to Brigham Young University-Idaho and a vibrant college town atmosphere." }
  ];

  const secondaryMarkets = [
    { name: "Twin Falls", description: "Magic Valley's largest city and regional commercial center." },
    { name: "Ammon", description: "Growing community adjacent to Idaho Falls with expanding commercial development." },
    { name: "Chubbuck", description: "Bannock County community with residential and retail growth." }
  ];

  const extendedCoverage = [
    { name: "Boise", description: "Idaho's capital and largest city in the Treasure Valley." },
    { name: "Meridian", description: "Fast-growing Treasure Valley city with extensive development." },
    { name: "Nampa", description: "Canyon County's largest city and major industrial center." }
  ];

  return (
    <>
      <StructuredData data={[idahoServiceSchema, breadcrumbSchema]} />

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

      <InternalHeroSection
        title="Idaho Cleaning Services"
        subtitle="Professional construction and commercial cleaning throughout Eastern Idaho, Treasure Valley, and southeastern Idaho. Serving Idaho Falls, Pocatello, Boise, Twin Falls, and surrounding communities."
        pillText="Idaho's Trusted Cleaning Partner • Licensed & Insured"
        imageAlt="Idaho Cleaning Services - Professional Commercial & Construction Cleaning Across Eastern Idaho and Treasure Valley | Imperial Cleaning Inc"
        primaryCTA={{
          text: "Request a Quote",
          onClick: () => setShowContactForm(true)
        }}
      />

      {/* Market Overview Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">Eastern Idaho Market Overview</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Imperial Cleaning Inc. is headquartered in Idaho Falls, positioned at the heart of Eastern Idaho&apos;s diverse industrial landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="resend-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-atom text-blue-500 text-xl"></i>
                </div>
                <h3 className="text-xl text-foreground">Nuclear & Research</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Idaho National Laboratory (INL) represents one of the nation&apos;s premier nuclear research facilities.
              </p>
            </div>

            <div className="resend-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-heartbeat text-green-500 text-xl"></i>
                </div>
                <h3 className="text-xl text-foreground">Healthcare & Medical</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Eastern Idaho Regional Medical Center, Portneuf Medical Center, and numerous healthcare facilities.
              </p>
            </div>

            <div className="resend-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-industry text-orange-500 text-xl"></i>
                </div>
                <h3 className="text-xl text-foreground">Food Processing & Agriculture</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Magic Valley food processing (Chobani, Clif Bar) and Eastern Idaho&apos;s agricultural sector.
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
                <h4 className="text-lg mb-2 text-foreground">Idaho Falls & Pocatello</h4>
                <p className="text-sm text-muted-foreground">Immediate to same-day response</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <i className="fas fa-clock text-blue-500 text-2xl"></i>
                </div>
                <h4 className="text-lg mb-2 text-foreground">Boise & Twin Falls</h4>
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

      {/* Primary Markets */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">Primary Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immediate response and full-service cleaning solutions in our primary Idaho markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {primaryMarketCities.map((city, index) => (
              <div key={index} className="resend-card p-6 hover-lift-gentle">
                <h3 className="text-2xl mb-2 text-foreground">{city.name}</h3>
                <div className="text-sm text-muted-foreground mb-4">
                  {city.county} • Population: {city.population}
                </div>
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

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center">
            <h2 className="text-4xl mb-6 text-white">Ready to Experience Industry-Leading Cleaning Services?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From nuclear facilities in Idaho Falls to food processing plants in Twin Falls—we deliver specialized cleaning solutions that meet your industry&apos;s exact requirements.
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
              Licensed, insured, and compliant across all Idaho service areas
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
