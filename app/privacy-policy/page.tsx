import { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import RelatedContent from "@/components/shared/related-content";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Imperial Cleaning Inc" },
  description: "Learn how Imperial Cleaning Inc protects your privacy and personal information. Our privacy policy explains data collection, use, and protection for customers in Idaho and Utah.",
  keywords: "privacy policy, Imperial Cleaning privacy, data protection, customer information, Idaho cleaning company privacy, Utah cleaning services privacy",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Privacy Policy | Imperial Cleaning Inc",
    description: "Learn how Imperial Cleaning Inc protects your privacy and personal information in Idaho and Utah.",
    url: "https://imperialcleaninginc.com/privacy-policy",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Imperial Cleaning Inc - Privacy Policy"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Imperial Cleaning Inc",
    description: "Learn how Imperial Cleaning Inc protects your privacy and personal information in Idaho and Utah.",
    images: ["https://imperialcleaninginc.com/og-image.png"],
    site: "@imperialcleaninginc",
    creator: "@imperialcleaninginc",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "@id": "https://imperialcleaninginc.com/privacy-policy#privacy",
    "name": "Imperial Cleaning Inc Privacy Policy",
    "publisher": {
      "@type": "Organization",
      "name": "Imperial Cleaning Inc",
      "url": "https://imperialcleaninginc.com"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2025-09-29",
    "description": "Privacy policy for Imperial Cleaning Inc explaining how we collect, use, and protect customer information."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://imperialcleaninginc.com/privacy-policy" }
    ]
  };

  return (
    <>
      <StructuredData data={[organizationSchema, breadcrumbSchema]} />

      {/* Hero Section */}
      <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal">
            Your privacy and data protection are important to us. Learn how we collect, use, and safeguard your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: September 29, 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">

            {/* Introduction */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Introduction</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Imperial Cleaning Inc (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website, use our services, or interact with us in any way.
                </p>
                <p>
                  We operate throughout Idaho and Utah, providing professional construction cleanup and commercial cleaning
                  services. This policy applies to all our business operations and digital platforms.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg mb-3 text-foreground">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Name, email address, and phone number</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Company name and job title</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Project location and service requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Billing and payment information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We use your information for the following business purposes:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Providing cleaning services and project quotes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Communicating about services, schedules, and billing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Improving our services and customer experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Complying with legal and regulatory requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Data Security</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h2 className="text-2xl mb-6 text-foreground">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-foreground mb-2">Email</h4>
                    <a
                      href="mailto:service@imperialcleaninginc.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Email Us
                    </a>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2">Phone</h4>
                    <a
                      href="tel:+12085203202"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      (208) 520-3202
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h3 className="text-2xl mb-4 text-foreground">
                Questions About Our Privacy Practices?
              </h3>
              <p className="text-muted-foreground mb-6">
                We&apos;re committed to transparency and protecting your privacy. Contact us anytime with your questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:service@imperialcleaninginc.com">
                  <Button size="lg">
                    Contact Us
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    General Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedContent
        pageUrl="/privacy-policy"
        heading="Continue Exploring Imperial Cleaning"
        limit={5}
      />
    </>
  );
}
