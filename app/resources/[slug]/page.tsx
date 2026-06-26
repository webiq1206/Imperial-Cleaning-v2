import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2, Calendar } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import RelatedContent from "@/components/shared/related-content";
import { guides, getGuideBySlug } from "@/data/guides";

interface GuidePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    return { title: "Resource Not Found | Imperial Cleaning Inc" };
  }
  const url = `https://imperialcleaninginc.com/resources/${guide.slug}`;
  return {
    // Absolute: guide metaTitles already carry the brand suffix.
    title: { absolute: guide.metaTitle },
    description: guide.description,
    authors: [{ name: "Imperial Cleaning Inc" }],
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.description,
      url,
      siteName: "Imperial Cleaning Inc",
      locale: "en_US",
      type: "article",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      images: [
        {
          url: "https://imperialcleaninginc.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `${guide.metaTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.description,
      site: "@imperialcleaninginc",
      creator: "@imperialcleaninginc",
      images: ["https://imperialcleaninginc.com/og-image.png"],
    },
  };
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    notFound();
  }

  const url = `https://imperialcleaninginc.com/resources/${guide.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    "headline": guide.title,
    "description": guide.description,
    "url": url,
    "datePublished": guide.datePublished,
    "dateModified": guide.dateModified,
    "author": { "@id": "https://imperialcleaninginc.com/#organization" },
    "publisher": { "@id": "https://imperialcleaninginc.com/#organization" },
    "isPartOf": { "@id": "https://imperialcleaninginc.com/#website" },
    "mainEntityOfPage": url,
    "articleSection": guide.category,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faqs.map((faq) => ({
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
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://imperialcleaninginc.com/resources" },
      { "@type": "ListItem", "position": 3, "name": guide.title, "item": url },
    ],
  };

  const howToSchema = guide.steps
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": guide.title,
        "description": guide.intro,
        "step": guide.steps.map((step, i) => ({
          "@type": "HowToStep",
          "position": i + 1,
          "name": step.name,
          "text": step.text,
        })),
      }
    : null;

  const schemas = [articleSchema, faqSchema, breadcrumbSchema, ...(howToSchema ? [howToSchema] : [])];

  return (
    <>
      <StructuredData data={schemas} />

      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs
            includeStructuredData={false}
            items={[{ name: "Resources", href: "/resources" }, { name: guide.title }]}
          />
        </div>
      </div>

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">{guide.category}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {guide.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-6">{guide.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-6">
              <span>By <strong className="text-foreground/80">Imperial Cleaning Inc</strong></span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Published <time dateTime={guide.datePublished}>{new Date(guide.datePublished).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time>
              </span>
              {guide.dateModified !== guide.datePublished && (
                <span className="inline-flex items-center gap-1">
                  · Updated <time dateTime={guide.dateModified}>{new Date(guide.dateModified).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time>
                </span>
              )}
            </div>
            {/* Lead answer up top for AEO / featured-snippet eligibility */}
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              {guide.intro}
            </p>
          </header>

          <div className="space-y-10">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl text-foreground mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.body.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </section>
            ))}

            {guide.steps && (
              <section>
                <h2 className="text-2xl text-foreground mb-6">Step-by-step process</h2>
                <ol className="space-y-5">
                  {guide.steps.map((step, i) => (
                    <li key={step.name} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-lg text-foreground mb-1">{step.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* FAQ - question headings for AEO */}
            <section>
              <h2 className="text-2xl text-foreground mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {guide.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 glass-card-elevated p-8 rounded-lg text-center">
            <h2 className="text-2xl text-foreground mb-3">Need this done right?</h2>
            <p className="text-muted-foreground mb-6">
              Imperial Cleaning Inc handles construction and commercial cleaning across Idaho and Utah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Get a Free Quote
              </Link>
              <a href="tel:+12085203202" className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent transition-colors">
                Call (208) 520-3202
              </a>
            </div>
          </div>

          {/* Related guides */}
          {guide.related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl text-foreground mb-4">Related</h2>
              <ul className="space-y-3">
                {guide.related.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center text-primary hover:underline">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> {link.label}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      {/* Algorithmic cross-links from the internal linking manifest */}
      <RelatedContent
        pageUrl={url.replace("https://imperialcleaninginc.com", "")}
        heading="Keep Reading"
        description="More guides and services related to this topic."
        limit={5}
      />
    </>
  );
}
