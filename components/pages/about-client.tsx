"use client";

import { StructuredData } from "@/components/structured-data";
import RelatedContent from "@/components/shared/related-content";
import { Star, Shield, Handshake, Lightbulb, type LucideIcon } from "lucide-react";

export default function AboutClient() {
  // The canonical Organization entity is declared once sitewide in app/layout.tsx
  // (@id: .../#organization). Here we only emit an AboutPage that references it,
  // to avoid duplicate/conflicting Organization nodes.
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://imperialcleaninginc.com/about#aboutpage",
    "url": "https://imperialcleaninginc.com/about",
    "name": "About Imperial Cleaning Inc",
    "description": "Professional construction and commercial cleaning company serving Idaho and Utah since 2015. Headquartered in Idaho Falls with comprehensive cleaning solutions for businesses and contractors.",
    "mainEntity": { "@id": "https://imperialcleaninginc.com/#organization" },
    "isPartOf": { "@id": "https://imperialcleaninginc.com/#website" }
    // TODO(real-data): once the owner/leadership consent to attribution, add a
    // "Person" founder node here and reference it from the Organization "founder"
    // field in app/layout.tsx, e.g.:
    //   { "@type": "Person", "@id": ".../#founder", "name": "<Owner Name>",
    //     "jobTitle": "Founder & Owner", "worksFor": { "@id": ".../#organization" } }
    // Real, named leadership materially strengthens E-E-A-T for a local service brand.
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://imperialcleaninginc.com/about" }
    ]
  };

  // TODO(real-data): confirm canonical figures with the business and update sitewide.
  const companyStats = [
    { label: "Years of Excellence", value: "10+", icon: "calendar" },
    { label: "Projects Completed", value: "500+", icon: "building" },
    { label: "States Served", value: "2", icon: "map" },
    { label: "Team Members", value: "25+", icon: "users" }
  ];

  const coreValues: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: "Quality Excellence",
      description: "Every project meets our exacting standards through systematic processes and attention to detail.",
      icon: Star
    },
    {
      title: "Professional Integrity",
      description: "Licensed, bonded, and insured with transparent communication and reliable service.",
      icon: Shield
    },
    {
      title: "Client Partnership",
      description: "We build lasting relationships by understanding unique needs and exceeding expectations.",
      icon: Handshake
    },
    {
      title: "Innovation Focus",
      description: "Continuous improvement through advanced techniques, equipment, and industry best practices.",
      icon: Lightbulb
    }
  ];

  // Rendered visibly below AND emitted as FAQPage schema, so the structured
  // data always matches on-page content.
  const aboutFaqs = [
    {
      question: "Who is Imperial Cleaning Inc?",
      answer: "Imperial Cleaning Inc is a local, family-owned commercial and construction cleaning company founded in 2015 and headquartered in Idaho Falls, Idaho. We provide post-construction cleanup and commercial janitorial services to businesses and contractors across 24 cities in Idaho and Utah."
    },
    {
      question: "Is Imperial Cleaning licensed and insured?",
      answer: "Yes. Imperial Cleaning Inc is fully insured and bonded in both Idaho and Utah, carrying general liability insurance and workers' compensation coverage. Certificates of insurance and additional insured documentation are available on request."
    },
    {
      question: "How long has Imperial Cleaning been in business?",
      answer: "Imperial Cleaning Inc was founded in 2015 in Idaho Falls, giving us over a decade of experience in construction cleanup and commercial cleaning across the Intermountain West."
    },
    {
      question: "What areas does Imperial Cleaning serve?",
      answer: "We serve 16 cities in Idaho, including Idaho Falls, Pocatello, Rexburg, Twin Falls, and Boise, and 8 cities in Utah, including Salt Lake City, Logan, Ogden, and Provo. Same-day service is available in our Eastern Idaho primary markets."
    },
    {
      question: "What makes Imperial Cleaning different from other cleaning companies?",
      answer: "We are a local company headquartered in Idaho Falls, not a national franchise. Clients work directly with our team, get free quotes within 24 hours, and every project is backed by a 100% satisfaction promise with a 24-hour callback guarantee."
    }
  ];

  const aboutFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const milestones = [
    { year: "2015", title: "Company Founded", description: "Imperial Cleaning Inc. established in Idaho Falls with a focus on construction cleanup." },
    { year: "2018", title: "Service Expansion", description: "Expanded to comprehensive commercial cleaning services for office buildings and facilities." },
    { year: "2020", title: "Technology Integration", description: "Implemented advanced project management and quality assurance systems." },
    { year: "2023", title: "Utah Expansion", description: "Extended services into Utah markets, serving Salt Lake City and surrounding areas." },
    { year: "2024", title: "Regional Leadership", description: "Recognized as the premier cleaning company across Idaho and Utah with 25+ team members." }
  ];

  return (
    <>
      <StructuredData data={[aboutPageSchema, breadcrumbSchema, aboutFaqSchema]} />

      {/* Hero Section */}
      <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-8 tracking-tight leading-tight text-foreground">
              About Imperial Cleaning
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              Ten years of excellence in professional cleaning services across Idaho and Utah.
              Built on integrity, powered by innovation.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {companyStats.map((stat, index) => (
              <div key={index} className="glass-card-elevated sophisticated-glow text-center p-6 rounded-lg hover-lift-moderate">
                <div className="text-3xl lg:text-4xl text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2015 in Idaho Falls, Imperial Cleaning Inc. began with a simple mission:
                  to provide the highest quality cleaning services that construction companies and businesses
                  could truly rely on.
                </p>
                <p>
                  What started as a local Idaho Falls operation has grown into the region&apos;s most trusted
                  cleaning company, serving clients across Idaho and Utah. Our success stems from our
                  unwavering commitment to quality, safety, and customer satisfaction.
                </p>
                <p>
                  Today, with over 500 completed projects and a team of 25+ professionals, we continue
                  to set the standard for cleaning excellence in the Intermountain West.
                </p>
              </div>
            </div>
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h3 className="text-2xl mb-6 text-foreground">Why Choose Imperial Cleaning?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <div className="text-foreground">Licensed & Insured</div>
                    <div className="text-sm text-muted-foreground">Full liability coverage and workers&apos; compensation protection</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <div className="text-foreground">Proven Track Record</div>
                    <div className="text-sm text-muted-foreground">10 years serving major contractors and businesses</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <div className="text-foreground">Multi-State Coverage</div>
                    <div className="text-sm text-muted-foreground">Comprehensive service across Idaho and Utah</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <div className="text-foreground">Quality Guarantee</div>
                    <div className="text-sm text-muted-foreground">100% satisfaction backed by our service promise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 about-values-sophisticated-bg noise-overlay grain-texture">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide every project, every interaction, and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center hover-lift-moderate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight text-foreground">
              Our Journey
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ten years of growth, innovation, and service excellence across Idaho and Utah.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-32 flex-shrink-0">
                  <div className="glass-card-elevated sophisticated-glow text-center py-4 px-6 rounded-lg">
                    <div className="text-2xl text-primary">{milestone.year}</div>
                  </div>
                </div>
                <div className="flex-1 glass-card-elevated sophisticated-glow p-8 rounded-lg hover-lift-subtle">
                  <h3 className="text-2xl mb-3 text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Expertise */}
      <section className="py-24 px-6 about-leadership-sophisticated-bg noise-overlay grain-texture">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-8 tracking-tight text-foreground">
                Leadership & Expertise
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our leadership team brings decades of combined experience in commercial cleaning,
                  construction services, and business operations across the Intermountain West.
                </p>
                <p>
                  We understand the unique challenges of Idaho and Utah&apos;s construction and commercial
                  markets, from seasonal weather patterns to local building codes and safety requirements.
                </p>
                <p>
                  This deep regional expertise, combined with our commitment to continuous training
                  and industry best practices, ensures every project receives the professional attention it deserves.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
                <div className="text-3xl text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
              </div>
              <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
                <div className="text-3xl text-primary mb-2">Safety-First</div>
                <div className="text-sm text-muted-foreground">Trained & Insured Crews</div>
              </div>
              <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
                <div className="text-3xl text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Response</div>
              </div>
              <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
                <div className="text-3xl text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Common questions about our company, coverage, and credentials.
            </p>
          </div>
          <div className="space-y-6">
            {aboutFaqs.map((faq) => (
              <div key={faq.question} className="glass-card-elevated p-6 rounded-lg">
                <h3 className="text-lg text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg">
            <h2 className="text-3xl lg:text-4xl mb-6 tracking-tight text-foreground">
              Ready to Experience the Imperial Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join the businesses across Idaho and Utah who trust Imperial Cleaning for their most important projects.
              Let&apos;s discuss how we can exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12085203202"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Call (208) 520-3202
              </a>
              <a
                href="mailto:service@imperialcleaninginc.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        pageUrl="/about"
        heading="Continue Exploring Imperial Cleaning"
        description="Learn more about our services, contact us for a quote, or browse our service areas."
        limit={5}
      />
    </>
  );
}
