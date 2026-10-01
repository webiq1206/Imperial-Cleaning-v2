import { Star, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { verifiedReviews, RATING_SOURCES, GOOGLE_REVIEW_COUNT, GOOGLE_LISTING_URL, type VerifiedReview } from "@/data/reviews";

// Real-review section. Replaces the former placeholder testimonials and
// illustrative case studies (removed 2026-06-10 per owner decision: only
// verifiable reviews may appear on the site). Renders verbatim reviews from
// data/reviews.ts when present; otherwise links to the live third-party
// profiles where ratings can be verified.
//
// The homepage shows the most recent reviews in two continuously scrolling
// rows rather than a full grid: 38 stacked cards made the page enormous and
// buried everything below them. /reviews remains the complete record - all
// entries, full text, and the Review JSON-LD - and is linked from here.
//
// Deliberately not a client component. The marquee is pure CSS, so this costs
// no JavaScript and every quote is still in the server-rendered HTML.

// How many of the newest reviews to surface here. Two rows of nine fills the
// track at desktop widths without making the loop tediously long.
const MARQUEE_COUNT = 18;

// Below this, a marquee looks broken - too few cards to fill the viewport, so
// the loop seam is visible and the row reads as a mistake. Fall back to the
// grid, which degrades gracefully at any count including one.
const MIN_FOR_MARQUEE = 6;

function ReviewCard({ review }: { review: VerifiedReview }) {
  return (
    <figure className="glass-card-elevated p-6 rounded-lg flex flex-col flex-none w-[300px] sm:w-[340px]">
      <div className="flex items-center gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      {/* Clamped for even card heights. The full text stays in the DOM - this
          hides overflow visually, it does not truncate the content. */}
      <blockquote className="text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-6">
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
  );
}

function MarqueeRow({
  reviews,
  reverse = false,
  durationSeconds,
}: {
  reviews: VerifiedReview[];
  reverse?: boolean;
  durationSeconds: number;
}) {
  const group = (
    <div className="marquee__group">
      {reviews.map((review) => (
        <ReviewCard key={`${review.author}-${review.date}`} review={review} />
      ))}
    </div>
  );

  return (
    <div className="marquee" style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}>
      <div className={`marquee__track${reverse ? " marquee__track--reverse" : ""}`}>
        {group}
        {/* Second copy exists only to make the loop seamless. Hidden from
            assistive tech so each review is announced once, not twice. */}
        <div aria-hidden="true">{group}</div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  // Google is not in RATING_SOURCES (see the note in data/reviews.ts), so it has
  // to be added explicitly - otherwise this line names Google in the copy below
  // while counting none of its reviews.
  const totalReviews =
    GOOGLE_REVIEW_COUNT + RATING_SOURCES.reduce((sum, s) => sum + s.reviewCount, 0);

  // verifiedReviews is ordered newest first, so this takes the most recent.
  const featured = verifiedReviews.slice(0, MARQUEE_COUNT);
  const useMarquee = featured.length >= MIN_FOR_MARQUEE;
  const half = Math.ceil(featured.length / 2);
  const topRow = featured.slice(0, half);
  const bottomRow = featured.slice(half);

  return (
    <section className="py-24 px-6" id="all-reviews">
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
      </div>

      {/* Review cards. Full-bleed so the rows scroll edge to edge rather than
          stopping at the content gutter. */}
      {featured.length > 0 && (
        <div className="mb-14">
          {useMarquee ? (
            <div className="flex flex-col gap-6">
              <MarqueeRow reviews={topRow} durationSeconds={90} />
              {bottomRow.length > 0 && (
                <MarqueeRow reviews={bottomRow} durationSeconds={110} reverse />
              )}
            </div>
          ) : (
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {featured.map((review) => (
                <ReviewCard key={`${review.author}-${review.date}`} review={review} />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
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
          {/* The marquee shows only the newest few, so the complete list needs a
              way in from here. */}
          {verifiedReviews.length > featured.length && (
            <p className="mt-6">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-1.5 text-primary hover:underline text-sm"
                data-testid="link-all-reviews"
              >
                Read all {verifiedReviews.length} customer reviews
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
