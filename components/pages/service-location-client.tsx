"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import InternalHeroSection from "@/components/internal-hero-section";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { type ServiceLocation } from "@/data/service-locations";
import { 
  generateLocationDescription,
  generateLocationHero,
  generateEnhancedServiceFeatures,
  generateLocationFAQ
} from "@/lib/location-content-utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  HardHat,
  CheckCircle,
  MapPin,
  Phone,
  Calendar,
  Shield,
  Award
} from "lucide-react";

interface ServiceLocationClientProps {
  location: ServiceLocation;
  serviceType: "construction-cleaning" | "commercial-cleaning";
  serviceName: string;
}

export default function ServiceLocationClient({
  location,
  serviceType,
  serviceName
}: ServiceLocationClientProps) {
  const [showContactForm, setShowContactForm] = useState(false);

  const heroContent = generateLocationHero(serviceType, location);
  const metaDescription = generateLocationDescription(serviceType, location);
  const serviceFeatures = generateEnhancedServiceFeatures(serviceType, location);
  const faqs = generateLocationFAQ(serviceType, location);
  const stateSlug = location.state.toLowerCase();
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${location.name} ${serviceName} Services`,
    "description": metaDescription,
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Imperial Cleaning Inc",
      "url": "https://imperialcleaninginc.com",
      "telephone": "+1-208-520-3202"
    },
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "containedInPlace": {
        "@type": "State",
        "name": location.state
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": `${location.state} Service Areas`, "item": `https://imperialcleaninginc.com/service-areas/${stateSlug}` },
      { "@type": "ListItem", "position": 3, "name": serviceName, "item": `https://imperialcleaninginc.com/${serviceType}` },
      { "@type": "ListItem", "position": 4, "name": `${location.name} ${serviceName}`, "item": `https://imperialcleaninginc.com/${stateSlug}/${serviceType}/${location.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}` }
    ]
  };

  const isConstruction = serviceType === "construction-cleaning";

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />

      {/* Breadcrumbs */}
      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { name: `${location.state} Service Areas`, href: `/service-areas/${stateSlug}` },
              { name: serviceName, href: `/${serviceType}` },
              { name: location.name }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <InternalHeroSection
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        pillText={`${location.name}, ${location.state} • Licensed & Insured`}
        imageAlt={`${serviceName} in ${location.name}, ${location.state} | Imperial Cleaning Inc`}
        primaryCTA={{
          text: "Get Free Quote",
          onClick: () => setShowContactForm(true)
        }}
      />

      {/* Service Overview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-foreground">
                Professional {serviceName} in {location.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {metaDescription}
              </p>
              <ul className="space-y-4">
                {serviceFeatures.features.slice(0, 5).map((feature: { title: string; description: string; icon: string }, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card-elevated p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  {isConstruction ? (
                    <HardHat className="w-10 h-10 text-primary" />
                  ) : (
                    <Building2 className="w-10 h-10 text-primary" />
                  )}
                </div>
                <h3 className="text-2xl text-foreground">{location.name} Service Details</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{location.name}, {location.state}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+12085203202" className="text-primary hover:underline">(208) 520-3202</a>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Mon-Fri 7AM-6PM, Sat 8AM-4PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
              <Button
                onClick={() => setShowContactForm(true)}
                className="w-full mt-6"
                size="lg"
              >
                Request Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">
              {serviceName} Services in {location.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive {isConstruction ? "construction cleanup" : "commercial cleaning"} solutions tailored for {location.name} businesses and contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.features.map((feature: { title: string; description: string; icon: string }, index: number) => (
              <div key={index} className="glass-card-elevated p-6 rounded-lg hover-lift-gentle">
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">
              Serving {location.name} and {location.state}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As a trusted cleaning partner in {location.name}, we understand the unique needs of local businesses and contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card-elevated p-8 rounded-lg">
              <h3 className="text-2xl mb-4 text-foreground">Why Choose Us in {location.name}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span>Local presence with fast response times</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span>Understanding of {location.state} building codes and regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span>Established relationships with local contractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span>Competitive pricing for the {location.name} market</span>
                </li>
              </ul>
            </div>
            <div className="glass-card-elevated p-8 rounded-lg">
              <h3 className="text-2xl mb-4 text-foreground">Our Commitment</h3>
              <p className="text-muted-foreground mb-4">
                Imperial Cleaning Inc. is committed to providing {location.name} businesses with the highest quality {serviceName.toLowerCase()} services. Our team of trained professionals uses industry-leading equipment and techniques to deliver exceptional results.
              </p>
              <p className="text-muted-foreground">
                We&apos;re fully licensed and insured, giving you peace of mind for every project. Contact us today to discuss your {serviceName.toLowerCase()} needs in {location.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">
              {location.name} {serviceName} FAQ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our {serviceName.toLowerCase()} services in {location.name}.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="glass-card-elevated rounded-lg border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <h3 className="text-lg text-foreground leading-tight">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg">
            <h2 className="text-3xl lg:text-4xl mb-6 tracking-tight text-foreground">
              Ready for Professional {serviceName} in {location.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get a free quote for your {serviceName.toLowerCase()} project. We serve {location.name} and all of {location.state} with guaranteed satisfaction.
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
