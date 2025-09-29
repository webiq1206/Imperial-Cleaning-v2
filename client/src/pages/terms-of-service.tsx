import SEOHead from "@/components/seo-head";

export default function TermsOfServicePage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "TermsOfService",
    "@id": "https://imperialcleaninginc.com/terms-of-service#terms",
    "name": "Imperial Cleaning Inc Terms of Service",
    "publisher": {
      "@type": "Organization",
      "name": "Imperial Cleaning Inc",
      "url": "https://imperialcleaninginc.com"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2025-09-29",
    "description": "Terms of service for Imperial Cleaning Inc covering service agreements, warranties, and legal terms for Idaho and Utah cleaning services."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://imperialcleaninginc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": "https://imperialcleaninginc.com/terms-of-service"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Terms of Service | Imperial Cleaning Inc - Professional Cleaning Contracts"
        description="Review the terms of service for Imperial Cleaning Inc's professional cleaning services in Idaho and Utah. Service agreements, warranties, and legal terms for commercial and construction cleaning."
        keywords="terms of service, Imperial Cleaning terms, cleaning contracts, service agreements, Idaho cleaning terms, Utah cleaning services, professional cleaning contracts"
        canonicalUrl="https://imperialcleaninginc.com/terms-of-service"
        author="Imperial Cleaning Inc"
        openGraph={{
          title: "Terms of Service | Imperial Cleaning Inc",
          description: "Review the terms of service for Imperial Cleaning Inc's professional cleaning services in Idaho and Utah.",
          image: "https://imperialcleaninginc.com/hero-logo.png",
          imageAlt: "Imperial Cleaning Inc Terms of Service",
          type: "website",
          url: "https://imperialcleaninginc.com/terms-of-service"
        }}
        structuredData={[termsSchema, breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground">
            Terms of Service
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal">
            Professional cleaning service agreements and terms governing our relationship with clients across Idaho and Utah.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: September 29, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Agreement Overview */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Service Agreement Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between Imperial Cleaning Inc 
                  ("Company," "we," "our," or "us") and you ("Client," "you," or "your") regarding the use of our 
                  professional cleaning services.
                </p>
                <p>
                  By engaging our services, requesting a quote, or entering into a service contract, you acknowledge that 
                  you have read, understood, and agree to be bound by these Terms. These Terms apply to all cleaning 
                  services provided throughout Idaho and Utah.
                </p>
              </div>
            </div>

            {/* Services Provided */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Services Provided</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-foreground">Construction Cleaning Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Post-construction cleanup and debris removal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Final construction cleaning and detailing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Rough and finish cleaning phases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Specialty surface cleaning and restoration</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-foreground">Commercial Cleaning Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Regular office and facility maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Deep cleaning and sanitization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Industrial facility cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Emergency cleaning response</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Terms & Scheduling */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Service Terms & Scheduling</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-foreground">Quotes and Estimates</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>All quotes are valid for 30 days from issuance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Pricing based on site conditions at time of estimate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Additional charges may apply for scope changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Final pricing confirmed before service begins</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-foreground">Scheduling and Access</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Services scheduled by mutual agreement between parties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Client responsible for providing safe and legal access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>24-hour notice required for schedule changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Emergency services available with additional charges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Payment Schedule</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Net 30 terms for established commercial clients</li>
                      <li>• Payment due upon completion for one-time services</li>
                      <li>• Monthly billing for recurring services</li>
                      <li>• Progress payments for large projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Accepted Methods</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Check, ACH, and wire transfers</li>
                      <li>• Major credit cards (with processing fee)</li>
                      <li>• Online payment portal</li>
                      <li>• Direct billing arrangements</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  Late payments subject to 1.5% monthly service charge. Services may be suspended for accounts 
                  past due. Client responsible for all collection costs including reasonable attorney fees.
                </p>
              </div>
            </div>

            {/* Warranties and Guarantees */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Service Warranties and Guarantees</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-foreground">Our Commitment</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We guarantee professional, thorough cleaning services performed by trained, insured technicians. 
                    If you're not satisfied with our work, we'll return to address any issues at no additional charge.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>100% satisfaction guarantee on all services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Licensed, bonded, and fully insured operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Comprehensive liability and workers' compensation coverage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Quality assurance inspections on all projects</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-foreground">Limitation of Liability</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Our liability is limited to the cost of re-performing unsatisfactory work. We are not liable for 
                    consequential, indirect, or incidental damages. Claims must be reported within 48 hours of service completion.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety and Compliance */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Safety and Compliance</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Imperial Cleaning Inc is committed to maintaining the highest safety standards and regulatory compliance 
                  in all operations across Idaho and Utah.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Safety Standards</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• OSHA compliance and safety training</li>
                      <li>• Proper chemical handling and disposal</li>
                      <li>• Personal protective equipment protocols</li>
                      <li>• Hazard identification and mitigation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Regulatory Compliance</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• EPA environmental regulations</li>
                      <li>• State licensing requirements</li>
                      <li>• Local permit compliance</li>
                      <li>• Industry best practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Client Responsibilities</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>To ensure safe and effective service delivery, clients agree to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Provide safe and legal access to all work areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Disclose all known hazards and safety concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Ensure utilities and access are available as needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Remove or secure valuable or fragile items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Provide accurate project scope and specifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Maintain communication regarding schedule changes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Termination and Cancellation */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Termination and Cancellation</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Cancellation Policy</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 24-hour notice required for cancellations</li>
                      <li>• Short-notice cancellations may incur charges</li>
                      <li>• Recurring services require 30-day notice</li>
                      <li>• Emergency weather cancellations exempt</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Service Termination</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Either party may terminate with proper notice</li>
                      <li>• Payment due for all completed work</li>
                      <li>• Return of client property and access materials</li>
                      <li>• Final invoice within 30 days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Terms */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Legal Terms and Governing Law</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms are governed by the laws of the State of Idaho. Any disputes arising from these Terms or 
                  our services shall be resolved through binding arbitration in Idaho Falls, Idaho, except for small 
                  claims court matters.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Dispute Resolution</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Good faith negotiation first</li>
                      <li>• Mediation through approved service</li>
                      <li>• Binding arbitration if needed</li>
                      <li>• Idaho Falls jurisdiction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Agreement Terms</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Entire agreement between parties</li>
                      <li>• Supersedes all prior agreements</li>
                      <li>• Modifications require written consent</li>
                      <li>• Severability if any term invalid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Terms */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Questions About These Terms</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have questions about these Terms of Service or need clarification on any service agreements, 
                  please contact us before engaging our services.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Business Office</h4>
                    <div className="text-sm space-y-1">
                      <div>Imperial Cleaning Inc</div>
                      <div>123 Business Blvd</div>
                      <div>Idaho Falls, ID 83402</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Contact Information</h4>
                    <div className="text-sm space-y-1">
                      <div>Phone: <a href="tel:+12085203202" className="text-primary hover:text-primary/80">(208) 520-3202</a></div>
                      <div>Email: <a href="mailto:contracts@imperialcleaninginc.com" className="text-primary hover:text-primary/80">contracts@imperialcleaninginc.com</a></div>
                      <div>Service Areas: Idaho & Utah</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                By proceeding with our services, you acknowledge acceptance of these terms. 
                Let's discuss your cleaning project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  data-testid="button-get-quote"
                >
                  Get Free Quote
                </a>
                <a 
                  href="tel:+12085203202" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card text-card-foreground font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  data-testid="button-call-now"
                >
                  Call (208) 520-3202
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}