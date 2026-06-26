import { Star, ExternalLink } from "lucide-react";
import { verifiedReviews, RATING_SOURCES, GOOGLE_LISTING_URL } from "@/data/reviews";

// Real-review section. Replaces the former placeholder testimonials and
// illustrative case studies (removed 2026-06-10 per owner decision: only
// verifiable reviews may appear on the site). Renders verbatim reviews from
// data/reviews.ts when present; otherwise links to the live third-party
// profiles where ratings can be verified.
export default function ReviewsSection() {
  const totalReviews = RATING_SOURCES.reduce((sum, s) => sum + s.reviewCount, 0);

  return (
    <section className="py-24 px-6" id="reviews">
      <div className="max-w-7xl mx-auto">
        {/* Aggregate hero stats */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-7 h-7 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-5xl lg:text-6xl font-light text-foreground tracking-tight">5.0</span>
          </div>
          <p className="text-lg text-muted-foreground mb-3">
            {totalReviews}+ verified reviews across Google, Porch, and BestProsInTown
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight text-foreground">
            Trusted by contractors and facility managers across Idaho and Utah
          </h2>
        </div>

        {/* Individual review cards (shown when owner populates data/reviews.ts) */}
        {verifiedReviews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {verifiedReviews.map((review) => (
              <figure
                key={`${review.author}-${review.date}`}
                className="glass-card-elevated p-6 rounded-lg flex flex-col"
              >
                <div className="flex items-center gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
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

        {/* Platform rating cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {RATING_SOURCES.map((source) => (
            <a
              key={source.platform}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-elevated p-6 rounded-lg text-center group hover:border-primary/40 transition-colors"
              data-testid={`review-source-${source.platform.toLowerCase()}`}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                {source.rating !== null ? (
                  <>
                    <span className="text-4xl text-foreground tracking-tight">{source.rating.toFixed(1)}</span>
                    <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                  </>
                ) : (
                  <span className="text-4xl text-foreground tracking-tight">{source.reviewCount}</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-1">
                {source.reviewCount} reviews on
              </p>
              <p className="text-foreground text-sm font-medium">{source.platform}</p>
              <span className="inline-flex items-center gap-1 text-primary text-xs mt-3 group-hover:underline">
                View profile <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <a
            href={GOOGLE_LISTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-base font-medium"
            data-testid="link-google-reviews"
          >
            Read our Google reviews <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            Opens our Google Business Profile — every rating is independently verifiable
          </p>
        </div>
      </div>
    </section>
  );
}
