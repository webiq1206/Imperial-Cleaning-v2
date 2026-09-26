import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, Calendar } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import RelatedContent from "@/components/shared/related-content";
import { guides } from "@/data/guides";
import ResourceBrowser from "@/components/resource-browser";

export const metadata: Metadata = {
  title: { absolute: "Cleaning Resources & Guides | Imperial Cleaning Inc" },
  description:
    "Practical guides on post-construction cleaning, commercial cleaning, and cleanup costs from Imperial Cleaning Inc, serving Idaho and Utah.",
  keywords:
    "post-construction cleaning guide, construction cleanup checklist, commercial cleaning vs janitorial, cleaning cost guide, Idaho Utah cleaning resources",
  authors: [{ name: "Imperial Cleaning Inc" }],
  alternates: { canonical: "https://imperialcleaninginc.com/resources" },
  openGraph: {
    title: "Cleaning Resources & Guides | Imperial Cleaning Inc",
    description:
      "Practical guides on post-construction and commercial cleaning from Imperial Cleaning Inc.",
    url: "https://imperialcleaninginc.com/resources",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://imperialcleaninginc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imperial Cleaning Inc resources and guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Resources & Guides | Imperial Cleaning Inc",
    description: "Practical guides on post-construction and commercial cleaning.",
    site: "@imperialcleaninginc",
    creator: "@imperialcleaninginc",
    images: ["https://imperialcleaninginc.com/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://imperialcleaninginc.com/resources" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://imperialcleaninginc.com/resources#collection",
  "url": "https://imperialcleaninginc.com/resources",
  "name": "Imperial Cleaning Resource Center",
  "description": "Educational guides on construction and commercial cleaning.",
  "isPartOf": { "@id": "https://imperialcleaninginc.com/#website" },
  "publisher": { "@id": "https://imperialcleaninginc.com/#organization" },
  "hasPart": guides.map((g) => ({
    "@type": "Article",
    "headline": g.title,
    "url": `https://imperialcleaninginc.com/resources/${g.slug}`,
  })),
};

export default function ResourcesHubPage() {
  return (
    <>
      <StructuredData data={[collectionSchema, breadcrumbSchema]} />

      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs includeStructuredData={false} items={[{ name: "Resources" }]} />
        </div>
      </div>

      <section className="py-20 px-6 hero-sophisticated-bg noise-overlay grain-texture">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary uppercase tracking-wider">Resource Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-foreground">
            Cleaning Guides & Resources
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Clear, practical answers about post-construction cleanup, commercial cleaning, and what
            drives the cost - from the Imperial Cleaning team serving Idaho and Utah.
          </p>
          {/* Google Preferred Sources. The resource index is the one page whose
              whole purpose is "we publish guides", so the ask fits above the fold
              here in a way it would not on a service page. */}
          <p className="mt-6">Free, editable planning worksheets. No email required.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="site-width"><ResourceBrowser guides={guides.map(({slug,title,description,category,readTime})=>({slug,title,description,category,readTime}))}/></div>
      </section>

      <RelatedContent
        pageUrl="/resources"
        heading="Explore Our Services"
        description="Ready to move from research to a quote?"
        limit={5}
      />
    </>
  );
}
