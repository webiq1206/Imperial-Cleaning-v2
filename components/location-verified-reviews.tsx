import Link from "next/link";
import { Star } from "lucide-react";
import {
  GOOGLE_LISTING_URL,
  GOOGLE_REVIEW_COUNT,
  reviewsForCity,
  reviewsForService,
} from "@/data/reviews";

interface LocationVerifiedReviewsProps {
  city: string;
  state: string;
  service: "construction-cleaning" | "commercial-cleaning";
}

export default function LocationVerifiedReviews({
  city,
  state,
  service,
}: LocationVerifiedReviewsProps) {
  const cityReviews = reviewsForCity(city, service, 3);
  const namesThisCity = cityReviews.length > 0;
  const reviews = namesThisCity ? cityReviews : reviewsForService(service, 3);
  const serviceLabel = service === "construction-cleaning" ? "construction cleaning" : "commercial cleaning";

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-foreground">
            {namesThisCity ? `Customer feedback from ${city} and the region` : 'Customer feedback about our work'}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {namesThisCity ? `Published feedback relevant to ${city} and the surrounding region.` : `Regional ${serviceLabel} feedback from Imperial customers, not a claim of projects in ${city}.`}{" "}
            <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="text-link">Read the current Google reviews</a>.

          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reviews.map((review) => (
              <blockquote
                key={`${review.author}-${review.date}`}
                className="glass-card-elevated p-6 rounded-lg"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {review.text}
                </p>
                <footer className="text-sm text-foreground">
                  {review.author}
                  <span className="text-muted-foreground"> · {review.source}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="glass-card-elevated p-8 rounded-lg max-w-3xl mx-auto mb-10 text-center">
            <p className="text-muted-foreground leading-relaxed">
              Crews serve {city} {serviceLabel} from Idaho Falls. Read the
              independently verifiable reviews, then request a local quote.
            </p>
          </div>
        )}

        <div className="text-center">
          <Link href="/reviews" className="text-primary hover:underline">
            Explore customer reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
