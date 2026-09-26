import { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import RelatedContent from "@/components/shared/related-content";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Imperial Cleaning Inc" },
  description: "Terms of service for Imperial Cleaning Inc professional cleaning services in Idaho and Utah. Read our service agreement, policies, and terms for construction and commercial cleaning.",
  keywords: "terms of service, Imperial Cleaning terms, service agreement, Idaho cleaning terms, Utah cleaning policies, cleaning service contract",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Terms of Service | Imperial Cleaning Inc",
    description: "Terms of service for Imperial Cleaning Inc professional cleaning services in Idaho and Utah.",
    url: "https://imperialcleaninginc.com/terms-of-service",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Imperial Cleaning Inc - Terms of Service"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Imperial Cleaning Inc",
    description: "Terms of service for Imperial Cleaning Inc professional cleaning services in Idaho and Utah.",
    images: ["https://imperialcleaninginc.com/og-image.png"],
    site: "@imperialcleaninginc",
    creator: "@imperialcleaninginc",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://imperialcleaninginc.com/terms-of-service#terms",
    "name": "Imperial Cleaning Inc Terms of Service",
    "publisher": {
      "@type": "Organization",
      "name": "Imperial Cleaning Inc",
      "url": "https://imperialcleaninginc.com"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2025-09-29"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://imperialcleaninginc.com/terms-of-service" }
    ]
  };

  return (
    <>
      <StructuredData data={[termsSchema, breadcrumbSchema]} />

      {/* Hero Section */}
      <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">
            Terms of Service
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal">
            Please read these terms carefully before using our professional cleaning services.
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

            {/* Acceptance */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Acceptance of Terms</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By engaging Imperial Cleaning Inc for cleaning services, you agree to these Terms of Service.
                  These terms constitute a legally binding agreement between you and Imperial Cleaning Inc.
                </p>
                <p>
                  Our services are available to businesses and property owners in Idaho and Utah who are 18 years
                  or older and have legal authority to enter into contracts.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Services Provided</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Imperial Cleaning Inc provides professional cleaning services including:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Post-construction cleanup and debris removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Commercial janitorial services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Office cleaning and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Specialized facility cleaning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Insurance */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Insurance & Liability</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Imperial Cleaning Inc maintains comprehensive insurance coverage including general liability
                  insurance and workers&apos; compensation. We are fully bonded for your protection.
                </p>
                <p>
                  Certificates of insurance are available upon request and we can add your business as an
                  additional insured for larger contracts.
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Payment is due upon completion of services unless otherwise agreed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>We accept cash, check, credit card, and ACH transfer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Net 30 terms available for established commercial accounts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>For questions about these terms, please contact:</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="text-foreground mb-2">Email</h4>
                    <a href="mailto:service@imperialcleaninginc.com" className="text-primary hover:text-primary/80">
                      Email Us
                    </a>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2">Phone</h4>
                    <a href="tel:+12085203202" className="text-primary hover:text-primary/80">
                      (208) 520-3202
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h3 className="text-2xl mb-4 text-foreground">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today for a free quote on professional cleaning services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg"><Link href="/contact">Get a Free Quote</Link></Button>
                <Button asChild variant="outline" size="lg"><a href="tel:+12085203202">Call (208) 520-3202</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedContent
        pageUrl="/terms-of-service"
        heading="Continue Exploring Imperial Cleaning"
        limit={5}
      />
    </>
  );
}
