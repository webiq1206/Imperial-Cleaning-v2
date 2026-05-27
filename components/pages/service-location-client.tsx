"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import InternalHeroSection from "@/components/internal-hero-section";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { type ServiceLocation } from "@/data/service-locations";
import { buildServiceLocationUrl } from "@/lib/routing-utils";
import RelatedContent from "@/components/shared/related-content";
import { 
  generateLocationDescription,
  generateLocationHero,
  generateEnhancedServiceFeatures,
  generateLocationFAQ,
  generateMarketOverview,
  generateLocalChallenges,
  generateLocalSolutions,
  generateServiceIntroduction,
  generateWhyChoose
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
  Award,
  TrendingUp,
  AlertTriangle,
  Wrench,
  Star
} from "lucide-react";

// Nearby city relationships are derived automatically by the internal
// linking system at build time. See lib/page-registry.ts and
// scripts/internal-links.ts.

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
  const marketOverview = generateMarketOverview(serviceType, location);
  const localChallenges = generateLocalChallenges(serviceType, location);
  const localSolutions = generateLocalSolutions(serviceType, location);
  const serviceIntro = generateServiceIntroduction(serviceType, location);
  const whyChoose = generateWhyChoose(serviceType, location);
  const stateSlug = location.state.toLowerCase();
  const pageUrl = buildServiceLocationUrl(location.state, serviceType, location.name);
  
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
      "telephone": "+1-208-520-3202",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Idaho Falls",
        "addressRegion": "ID",
        "addressCountry": "US"
      },
      ...(location.coordinates && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng
        }
      })
    },
    "areaServed": {
      "@type": "City",
      "name": location.name,
      ...(location.coordinates && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng
        }
      }),
      "containedInPlace": {
        "@type": "State",
        "name": location.state
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": serviceFeatures.features.slice(0, 5).map((feature: { title: string; description: string }, index: number) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature.title,
          "description": feature.description
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 127,
      "bestRating": 5,
      "worstRating": 1
    }
  };
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Imperial Cleaning Inc",
    "description": `Professional ${serviceName.toLowerCase()} services in ${location.name}, ${location.state}. Licensed, insured, and locally trusted.`,
    "url": `https://imperialcleaninginc.com/${stateSlug}/${serviceType}/${location.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
    "telephone": "+1-208-520-3202",
    "priceRange": "$$",
    "image": "https://imperialcleaninginc.com/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Idaho Falls",
      "addressRegion": "ID",
      "postalCode": "83401",
      "addressCountry": "US"
    },
    ...(location.coordinates && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.coordinates.lat,
        "longitude": location.coordinates.lng
      }
    }),
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "containedInPlace": {
        "@type": "State",
        "name": location.state
      }
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/imperialcleaninginc",
      "https://www.linkedin.com/company/imperial-cleaning-inc"
    ]
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
      <StructuredData data={[serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema]} />

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

      {/* Service Introduction */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl mb-6 text-foreground">
                {serviceIntro.title}
              </h2>
              {serviceIntro.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
              {serviceIntro.internalLinks && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {serviceIntro.internalLinks.complementary && (
                    <Link href={serviceIntro.internalLinks.complementary.url} className="text-primary hover:underline text-sm">
                      {serviceIntro.internalLinks.complementary.text}
                    </Link>
                  )}
                  <Link href={serviceIntro.internalLinks.stateArea.url} className="text-primary hover:underline text-sm">
                    {serviceIntro.internalLinks.stateArea.text}
                  </Link>
                </div>
              )}
            </div>
            <div className="glass-card-elevated p-8 rounded-lg lg:sticky lg:top-24">
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
                data-testid="button-service-quote"
              >
                Request Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider">{marketOverview.marketTier} Market</span>
            </div>
            <h2 className="text-4xl mb-6 text-foreground">
              {marketOverview.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {marketOverview.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {marketOverview.economicBase.slice(0, 3).map((industry, index) => (
              <div key={index} className="glass-card-elevated p-6 rounded-lg text-center">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg text-foreground mb-2">{industry}</h3>
                <p className="text-sm text-muted-foreground">Key industry sector in {location.name}</p>
              </div>
            ))}
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

      {/* Local Challenges */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-orange-500 uppercase tracking-wider">Local Expertise</span>
            </div>
            <h2 className="text-4xl mb-6 text-foreground">
              {localChallenges.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding {location.name}&apos;s unique cleaning challenges allows us to deliver targeted, effective solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {localChallenges.challenges.map((challenge, index) => (
              <div key={index} className="glass-card-elevated p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Solutions */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider">Proven Solutions</span>
            </div>
            <h2 className="text-4xl mb-6 text-foreground">
              {localSolutions.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored approaches developed specifically for {location.name}&apos;s business environment and climate conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localSolutions.solutions.map((solution, index) => (
              <div key={index} className="glass-card-elevated p-6 rounded-lg hover-lift-gentle">
                <div className="w-10 h-10 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg mb-3 text-foreground">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-yellow-500 uppercase tracking-wider">Why Imperial Cleaning</span>
            </div>
            <h2 className="text-4xl mb-6 text-foreground">
              {whyChoose.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {whyChoose.intro}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.reasons.map((reason, index) => (
              <div key={index} className="glass-card-elevated p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg mb-3 text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
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

      <RelatedContent
        pageUrl={pageUrl}
        heading={`Explore More Cleaning Services Near ${location.name}`}
        description={`Related ${serviceName.toLowerCase()} pages, nearby cities, and ${location.state} service areas.`}
        limit={6}
      />

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
