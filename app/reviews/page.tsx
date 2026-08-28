import { Metadata } from "next";
import Link from "next/link";
import { Star, ShieldCheck, ExternalLink, Quote } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import RelatedContent from "@/components/shared/related-content";
import { verifiedReviews, RATING_SOURCES, GOOGLE_LISTING_URL } from "@/data/reviews";
import { BUSINESS_PHONE, BUSINESS_FULL_ADDRESS } from "@/data/business-info";

const PAGE_URL = "https://imperialcleaninginc.com/reviews";

export const metadata: Metadata = {
  title: { absolute: "Imperial Cleaning Reviews | Idaho & Utah Cleaning" },
  description:
    "Read verified reviews for Imperial Cleaning Inc and see where to check them yourself. Independent ratings from Google, Porch, Yelp, and BestProsInTown.",
  keywords:
    "Imperial Cleaning Inc reviews, Imperial Cleaning testimonials, is Imperial Cleaning legitimate, Idaho Falls commercial cleaning reviews, construction cleanup reviews Idaho",
  authors: [{ name: "Imperial Cleaning Inc" }],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Imperial Cleaning Reviews | Idaho & Utah Cleaning",
    description:
      "Verified customer reviews for Imperial Cleaning Inc, with links to every independent platform where you can check them yourself.",
    url: PAGE_URL,
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://imperialcleaninginc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Customer reviews for Imperial Cleaning Inc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperial Cleaning Reviews | Idaho & Utah Cleaning",
    description:
      "Verified customer reviews for Imperial Cleaning Inc, with links to every independent platform.",
    site: "@imperialcleaninginc",
    creator: "@imperialcleaninginc",
    images: ["https://imperialcleaninginc.com/og-image.png"],
  },
  other: {
    "geo.region": "US-ID",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.5102;-112.0842",
  },
};

// The direct answer a due-diligence searcher ("is Imperial Cleaning
// legitimate", "Imperial Cleaning reviews") needs before scrolling. Answer
// engines quote this block, so it stays self-contained and factual.
const DIRECT_ANSWER =
  `Imperial Cleaning Inc is a commercial and post-construction cleaning company founded in 2015 and headquartered at ${BUSINESS_FULL_ADDRESS}. ` +
  `It is licensed, insured, and bonded, serves 24 cities across Idaho and Utah, and maintains public profiles on Google, Porch, Yelp, and BestProsInTown where its ratings can be verified independently.`;

const faqs = [
  {
    question: "Is Imperial Cleaning Inc a legitimate company?",
    answer: `Yes. Imperial Cleaning Inc has operated since 2015 from ${BUSINESS_FULL_ADDRESS}, and carries general liability insurance, workers' compensation, and bonding. Certificates of insurance naming an additional insured are available on request. Its business profiles on Google, Porch, Yelp, and BestProsInTown are public and can be checked independently.`,
  },
  {
    question: "Where can I read independent reviews of Imperial Cleaning?",
    answer:
      "Reviews are published on third-party platforms Imperial Cleaning does not control: the Google Business listing, Porch, Yelp, and BestProsInTown. Every rating shown on this page links directly to the source profile so you can confirm it yourself.",
  },
  {
    question: "Are the reviews on this page independent?",
    answer:
      "No. This page is published by Imperial Cleaning Inc, so treat it as the company's own summary of its customer feedback rather than an independent review site. Every quote is reproduced verbatim from a public third-party profile and links back to that profile, which is where the independent record lives.",
  },
  {
    question: "How do I leave a review for Imperial Cleaning?",
    answer: `Reviews can be left on the Google Business listing or any of the other public profiles linked on this page. Imperial Cleaning does not screen customers before asking for a review and does not offer incentives for positive ratings. If something went wrong on a job, call ${BUSINESS_PHONE} first so it can be put right.`,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://imperialcleaninginc.com/" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: PAGE_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// Review JSON-LD is emitted only from real, sourced entries in data/reviews.ts.
// While that list is empty the page still renders (linking out to the platforms
// that hold the real record) but publishes no Review or AggregateRating markup -
// fabricated or "representative" ratings are a manual-action risk and would
// misrepresent the business to answer engines.
const reviewSchemas = verifiedReviews.map((review) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": "https://imperialcleaninginc.com/#organization" },
  author: { "@type": "Person", name: review.author },
  datePublished: review.date,
  reviewBody: review.text,
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating,
    bestRating: 5,
    worstRating: 1,
  },
  publisher: { "@type": "Organization", name: review.source },
  url: review.sourceUrl,
}));

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#collection`,
  url: PAGE_URL,
  name: "Imperial Cleaning Inc Customer Reviews",
  description: DIRECT_ANSWER,
  isPartOf: { "@id": "https://imperialcleaninginc.com/#website" },
  about: { "@id": "https://imperialcleaninginc.com/#organization" },
  publisher: { "@id": "https://imperialcleaninginc.com/#organization" },
};

export default function ReviewsPage() {
  return (
    <>
      <StructuredData data={[collectionSchema, breadcrumbSchema, faqSchema, ...reviewSchemas]} />

      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs includeStructuredData={false} items={[{ name: "Reviews" }]} />
        </div>
      </div>

      <section className="py-20 px-6 hero-sophisticated-bg noise-overlay grain-texture">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary uppercase tracking-wider">Customer Proof</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-foreground">
            Imperial Cleaning Reviews
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{DIRECT_ANSWER}</p>
        </div>
      </section>

      {/* Ownership disclosure. A reviews page on the company's own domain has an
          obvious conflict of interest; stating it plainly is what separates this
          from a fake "independent" reputation site. */}
      <section className="px-6 -mt-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-elevated rounded-lg p-6 flex gap-4 items-start">
            <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground">This page is published by Imperial Cleaning Inc.</span>{" "}
              It is not an independent review site. Every rating and quote below is reproduced from a
              public third-party profile and links back to that profile, so you can verify the record
              at its source. Nothing here is written, edited, or filtered by us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-foreground mb-3">Where our ratings are published</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            These are the platforms that hold Imperial Cleaning&apos;s public rating history. Each
            link opens the live profile.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={GOOGLE_LISTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-elevated p-6 rounded-lg hover-lift-gentle group"
              data-testid="rating-source-google"
            >
              <div className="text-foreground mb-2 flex items-center gap-2">
                Google Business Profile
                <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              </div>
              <p className="text-sm text-muted-foreground">
                The primary listing, including reviews, hours, and service area.
              </p>
            </a>

            {RATING_SOURCES.map((source) => (
              <a
                key={source.platform}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-elevated p-6 rounded-lg hover-lift-gentle group"
                data-testid={`rating-source-${source.platform.toLowerCase()}`}
              >
                <div className="text-foreground mb-2 flex items-center gap-2">
                  {source.platform}
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {source.rating !== null
                    ? `${source.rating.toFixed(1)} out of 5 across ${source.reviewCount} reviews.`
                    : `${source.reviewCount} reviews on file.`}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {verifiedReviews.length > 0 && (
        <section className="py-16 px-6 border-t border-border/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-foreground mb-8">What customers wrote</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {verifiedReviews.map((review, i) => (
                <figure
                  key={`${review.author}-${review.date}-${i}`}
                  className="glass-card-elevated p-7 rounded-lg flex flex-col"
                  data-testid={`review-${i}`}
                >
                  <Quote className="w-5 h-5 text-primary mb-4" aria-hidden="true" />
                  <blockquote className="text-muted-foreground leading-relaxed flex-grow">
                    {review.text}
                  </blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-border/20 text-sm">
                    <span className="text-foreground">{review.author}</span>
                    <span className="text-muted-foreground">
                      {" "}
                      &middot; {review.rating} of 5 &middot;{" "}
                      <time dateTime={review.date}>
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          timeZone: "UTC",
                        })}
                      </time>
                    </span>
                    <a
                      href={review.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      Verify on {review.source}
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-6 border-t border-border/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-foreground mb-8">
            Questions people ask before hiring us
          </h2>
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg text-foreground mb-2">{faq.question}</dt>
                <dd className="text-muted-foreground leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 p-6 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-foreground mb-2">Checking us out before you call?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Ask for a certificate of insurance, references from a build like yours, and a written
              scope before you sign anything. We will send all three.
            </p>
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
              Request a free quote &rarr;
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent
        pageUrl="/reviews"
        heading="See the work behind the reviews"
        description="The services these customers hired us for."
        limit={5}
      />
    </>
  );
}
