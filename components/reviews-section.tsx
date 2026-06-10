import { Star, ExternalLink } from "lucide-react";
import { verifiedReviews, RATING_SOURCES, GOOGLE_LISTING_URL } from "@/data/reviews";

// Real-review section. Replaces the former placeholder testimonials and
// illustrative case studies (removed 2026-06-10 per owner decision: only
// verifiable reviews may appear on the site). Renders verbatim reviews from
// data/reviews.ts when present; otherwise links to the live third-party
// profiles where ratings can be verified.
export default function ReviewsSection() {
  return (
    <section className="py-24 px-6" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight text-foreground">
            Rated 5.0 by the businesses we serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our reviews live on public platforms where every rating is verifiable.
            Read what contractors, facility managers, and office teams across Idaho
            and Utah say about working with Imperial Cleaning.
          </p>
        </div>

        {verifiedReviews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {verifiedReviews.map((review) => (
              <figure
                key={`${review.author}-${review.date}`}
                className="glass-card-elevated p-6 rounded-lg flex flex-col"
              >
                <div className="flex items-center gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="text-sm">
                  <span className="text-foreground">{review.author}</span>
                  <span className="text-muted-foreground"> via </span>
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {review.source}
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {RATING_SOURCES.map((source) => (
            <a
              key={source.platform}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-elevated p-6 rounded-lg text-center group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                {source.rating !== null && (
                  <>
                    <span className="text-3xl text-foreground">{source.rating.toFixed(1)}</span>
                    <Star className="w-6 h-6 text-primary fill-current" />
                  </>
                )}
                {source.rating === null && (
                  <span className="text-3xl text-foreground">{source.reviewCount}</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">
                {source.reviewCount} reviews on {source.platform}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm mt-3 group-hover:underline">
                View profile <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_LISTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            Read our Google reviews <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
