import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Building2 } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import RelatedContent from "@/components/shared/related-content";
import type { IndustryPage } from "@/data/industries";

interface IndustryCleaningPageProps {
  industry: IndustryPage;
}

// Server component shared by the four industry pages (medical office,
// restaurant, school, car dealership). These restore legacy WordPress URLs,
// so JSON-LD and content render fully server-side.
export default function IndustryCleaningPage({ industry }: IndustryCleaningPageProps) {
  const url = `https://imperialcleaninginc.com/${industry.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    "name": `${industry.name} Services`,
    "description": industry.metaDescription,
    "serviceType": industry.name,
    "url": url,
    "image": "https://imperialcleaninginc.com/og-image.png",
    "provider": { "@id": "https://imperialcleaninginc.com/#organization" },
    "areaServed": [
      { "@type": "State", "name": "Idaho", "sameAs": "https://en.wikipedia.org/wiki/Idaho" },
      { "@type": "State", "name": "Utah", "sameAs": "https://en.wikipedia.org/wiki/Utah" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${industry.name} Services`,
      "itemListElement": industry.services.slice(0, 6).map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Commercial Cleaning", "item": "https://imperialcleaninginc.com/commercial-cleaning" },
      { "@type": "ListItem", "position": 3, "name": industry.name, "item": url },
    ],
  };

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs
            includeStructuredData={false}
            items={[
              { name: "Commercial Cleaning", href: "/commercial-cleaning" },
              { name: industry.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">
            {industry.h1}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            {industry.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+12085203202"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent transition-colors text-lg"
            >
              <Phone className="w-4 h-4" /> Call (208) 520-3202
            </a>
          </div>
        </div>
      </section>

      {/* Direct answer for AEO / featured snippets */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card-elevated p-8 rounded-lg border-l-2 border-primary/40">
            <p className="text-lg text-muted-foreground leading-relaxed">{industry.directAnswer}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">What Our {industry.name} Includes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.services.map((service) => (
              <div key={service.title} className="glass-card-elevated p-6 rounded-lg hover-lift-gentle">
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg mb-3 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">Why Imperial Cleaning</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industry.whyUs.map((reason) => (
              <div key={reason.title} className="glass-card-elevated p-8 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl mb-3 text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-foreground">{industry.name} FAQ</h2>
          </div>
          <div className="space-y-6">
            {industry.faqs.map((faq) => (
              <div key={faq.question} className="glass-card-elevated p-6 rounded-lg">
                <h3 className="text-lg text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        pageUrl={`/${industry.slug}`}
        heading="Related Cleaning Services"
        description="Explore more commercial cleaning specialties and service areas across Idaho and Utah."
        override={{
          pin: [
            { url: "/commercial-cleaning", anchor: "Commercial Cleaning Services" },
          ],
        }}
      />

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg">
            <h2 className="text-3xl lg:text-4xl mb-6 tracking-tight text-foreground">
              Ready for Professional {industry.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Free quotes within 24 hours. Serving Idaho and Utah from our Idaho Falls headquarters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+12085203202"
                className="inline-flex items-center justify-center px-8 py-4 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent transition-colors"
              >
                Call (208) 520-3202
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
