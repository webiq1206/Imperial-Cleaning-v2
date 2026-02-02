"use client";

import { StructuredData } from "@/components/structured-data";

export default function AboutClient() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://imperialcleaninginc.com/#organization",
    "name": "Imperial Cleaning Inc",
    "alternateName": "Imperial Cleaning",
    "url": "https://imperialcleaninginc.com",
    "logo": "https://imperialcleaninginc.com/hero-logo.png",
    "description": "Professional construction and commercial cleaning company serving Idaho and Utah since 2015. Headquartered in Idaho Falls with comprehensive cleaning solutions for businesses and contractors.",
    "foundingDate": "2015",
    "areaServed": [
      { "@type": "State", "name": "Idaho", "sameAs": "https://en.wikipedia.org/wiki/Idaho" },
      { "@type": "State", "name": "Utah", "sameAs": "https://en.wikipedia.org/wiki/Utah" }
    ],
    "serviceType": ["Construction Cleaning", "Commercial Cleaning", "Post Construction Cleanup", "Janitorial Services"],
    "telephone": "+1-208-520-3202",
    "email": "service@imperialcleaninginc.com",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "25" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://imperialcleaninginc.com/about" }
    ]
  };

  const companyStats = [
    { label: "Years of Excellence", value: "10+", icon: "calendar" },
    { label: "Projects Completed", value: "2,500+", icon: "building" },
    { label: "States Served", value: "2", icon: "map" },
    { label: "Team Members", value: "25+", icon: "users" }
  ];

  const coreValues = [
    {
      title: "Quality Excellence",
      description: "Every project meets our exacting standards through systematic processes and attention to detail.",
      icon: "star"
    },
    {
      title: "Professional Integrity",
      description: "Licensed, bonded, and insured with transparent communication and reliable service.",
      icon: "shield"
    },
    {
      title: "Client Partnership",
      description: "We build lasting relationships by understanding unique needs and exceeding expectations.",
      icon: "handshake"
    },
    {
      title: "Innovation Focus",
      description: "Continuous improvement through advanced techniques, equipment, and industry best practices.",
      icon: "lightbulb"
    }
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", description: "Imperial Cleaning Inc. established in Idaho Falls with a focus on construction cleanup." },
    { year: "2018", title: "Service Expansion", description: "Expanded to comprehensive commercial cleaning services for office buildings and facilities." },
    { year: "2020", title: "Technology Integration", description: "Implemented advanced project management and quality assurance systems." },
    { year: "2023", title: "Utah Expansion", description: "Extended services into Utah markets, serving Salt Lake City and surrounding areas." },
    { year: "2024", title: "Regional Leadership", description: "Recognized as the premier cleaning company across Idaho and Utah with 25+ team members." }
  ];

  return (
    <>
      <StructuredData data={[organizationSchema, breadcrumbSchema]} />

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
                  Today, with over 2,500 completed projects and a team of 25+ professionals, we continue
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
                  <div className="w-6 h-6 text-primary">
                    <i className={`fas fa-${value.icon}`}></i>
                  </div>
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
                <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
              </div>
              <div className="glass-card-elevated sophisticated-glow p-6 rounded-lg text-center">
                <div className="text-3xl text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Safety Incidents</div>
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

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg">
            <h2 className="text-3xl lg:text-4xl mb-6 tracking-tight text-foreground">
              Ready to Experience the Imperial Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join over 2,500 satisfied clients who trust Imperial Cleaning for their most important projects.
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
    </>
  );
}
