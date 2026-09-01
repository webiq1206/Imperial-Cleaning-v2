"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import InternalHeroSection from "@/components/internal-hero-section";
import AnswerBlock from "@/components/shared/answer-block";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { type ServiceLocation } from "@/data/service-locations";
import { BUSINESS_HOURS_SHORT } from "@/data/business-info";
import { buildServiceLocationUrl } from "@/lib/routing-utils";
import RelatedContent from "@/components/shared/related-content";
import RelatedLinks from "@/components/related-links";
import LocationVerifiedReviews from "@/components/location-verified-reviews";
import { 
  generateLocationHero,
  generateEnhancedServiceFeatures,
  generateLocationFAQ,
  generateMarketOverview,
  generateLocalChallenges,
  generateLocalSolutions,
  generateServiceIntroduction,
  generateWhyChoose,
  generateCitySpecificProcess,
  generateIndustryApplications,
  generateServiceCoverageDetails,
  generateLocationAnswer
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
  Star,
  Clock,
  ClipboardList,
  Factory,
  Landmark
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
  const locationAnswer = generateLocationAnswer(serviceType, location);
  const serviceFeatures = generateEnhancedServiceFeatures(serviceType, location);
  const faqs = generateLocationFAQ(serviceType, location);
  const marketOverview = generateMarketOverview(serviceType, location);
  const localChallenges = generateLocalChallenges(serviceType, location);
  const localSolutions = generateLocalSolutions(serviceType, location);
  const serviceIntro = generateServiceIntroduction(serviceType, location);
  const whyChoose = generateWhyChoose(serviceType, location);
  const cityProcess = generateCitySpecificProcess(serviceType, location);
  const industryApplications = generateIndustryApplications(serviceType, location);
  const coverageDetails = generateServiceCoverageDetails(serviceType, location);
  const stateSlug = location.state.toLowerCase();
  const pageUrl = buildServiceLocationUrl(location.state, serviceType, location.name);

  // JSON-LD (Service, BreadcrumbList, FAQPage) is rendered server-side by
  // app/[state]/[service]/[city]/page.tsx so it is guaranteed in initial HTML.

  const isConstruction = serviceType === "construction-cleaning";

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs
            includeStructuredData={false}
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

      <AnswerBlock
        className="pt-14"
        question={locationAnswer.question}
        answer={locationAnswer.answer}
        facts={locationAnswer.facts}
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
                {location.zipCodes && location.zipCodes.length > 0 && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      ZIP codes served: {location.zipCodes.join(", ")}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+12085203202" className="text-primary hover:underline">(208) 520-3202</a>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{BUSINESS_HOURS_SHORT}</span>
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

          {serviceFeatures.localContext && (
            <div className="glass-card-elevated p-6 rounded-lg mt-8 max-w-4xl mx-auto border-l-2 border-primary/40">
              <p className="text-sm text-muted-foreground leading-relaxed">{serviceFeatures.localContext}</p>
            </div>
          )}
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

      {/* Our Process in {city} */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <ClipboardList className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider">How We Work</span>
            </div>
            <h2 className="text-4xl mb-6 text-foreground">{cityProcess.title}</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">{cityProcess.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cityProcess.steps.map((step) => (
              <div key={step.number} className="glass-card-elevated p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                    {step.localContext && (
                      <p className="text-sm text-primary/90 leading-relaxed italic">{step.localContext}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications in {city} */}
      {industryApplications.industries.length > 0 && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Factory className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary uppercase tracking-wider">Industry Expertise</span>
              </div>
              <h2 className="text-4xl mb-6 text-foreground">{industryApplications.title}</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">{industryApplications.intro}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {industryApplications.industries.map((industry, index) => (
                industry && (
                  <div key={index} className="glass-card-elevated p-8 rounded-lg">
                    <h3 className="text-xl mb-3 text-foreground">{industry.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
                    {industry.requirements.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {industry.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {industry.experience && (
                      <p className="text-sm text-muted-foreground/90 leading-relaxed italic border-t border-border/30 pt-4">{industry.experience}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coverage in {city} */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider">Local Coverage</span>
            </div>
            <h2 className="text-4xl mb-6 text-foreground">{coverageDetails.title}</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">{coverageDetails.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coverageDetails.coverage.districts && (
              <div className="glass-card-elevated p-6 rounded-lg">
                <h3 className="text-lg mb-4 text-foreground">{coverageDetails.coverage.districts.title}</h3>
                <ul className="space-y-3">
                  {coverageDetails.coverage.districts.areas.map((area, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-foreground">{area.name}</span> &mdash; {area.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="glass-card-elevated p-6 rounded-lg">
              <h3 className="text-lg mb-4 text-foreground">{coverageDetails.coverage.facilityTypes.title}</h3>
              <ul className="space-y-2">
                {coverageDetails.coverage.facilityTypes.types.map((type, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card-elevated p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-lg text-foreground">{coverageDetails.coverage.responseTime.title}</h3>
              </div>
              <p className="text-sm text-foreground mb-2">{coverageDetails.coverage.responseTime.standard}</p>
              <p className="text-sm text-foreground mb-3">{coverageDetails.coverage.responseTime.emergency}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{coverageDetails.coverage.responseTime.description}</p>
            </div>

            <div className="glass-card-elevated p-6 rounded-lg">
              <h3 className="text-lg mb-4 text-foreground">{coverageDetails.coverage.emergencyService.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{coverageDetails.coverage.emergencyService.description}</p>
            </div>
          </div>

          {location.localLandmarks && location.localLandmarks.length > 0 && (
            <div className="glass-card-elevated p-6 rounded-lg mt-8 max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-3">
                <Landmark className="w-5 h-5 text-primary" />
                <h3 className="text-lg text-foreground">Serving Businesses Across {location.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We provide {serviceName.toLowerCase()} for facilities throughout {location.name}, including those near {location.localLandmarks.slice(0, -1).join(", ")}{location.localLandmarks.length > 1 ? `, and ${location.localLandmarks[location.localLandmarks.length - 1]}` : location.localLandmarks[0]}.
              </p>
            </div>
          )}
        </div>
      </section>

      <LocationVerifiedReviews
        city={location.name}
        state={location.state}
        service={serviceType}
      />

      {/* FAQ Section */}
      <section className="py-24 px-4">
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

      {/* Nearby cities + complementary service (geo-proximity links) */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <RelatedLinks currentService={serviceType} location={location} />
        </div>
      </section>

      <RelatedContent
        pageUrl={pageUrl}
        heading={`Explore More Cleaning Services Near ${location.name}`}
        description={`Related ${serviceName.toLowerCase()} pages, nearby cities, and ${location.state} service areas.`}
        limit={5}
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
