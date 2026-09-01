import Link from "next/link";
import { Quote, Star } from "lucide-react";
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
            Verified reviews relevant to {city}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {namesThisCity
              ? `Quotes below are copied from Imperial Cleaning's public Google listing and only appear here because the review names ${city}, a ${city} venue, or southeast Idaho.`
              : `No public Google review currently names ${city} in the text. The quotes below are ${serviceLabel} reviews from the same listing. They do not name ${city}.`}
            {" "}
            We do not invent local projects or photos.
            {" "}
            <a
              href={GOOGLE_LISTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              5.0 from {GOOGLE_REVIEW_COUNT} Google reviews
            </a>
            , written from the Idaho Falls headquarters that serves {city}, {state}.
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reviews.map((review) => (
              <blockquote
                key={`${review.author}-${review.date}`}
                className="glass-card-elevated p-6 rounded-lg"
              >
                <Quote className="w-5 h-5 text-primary mb-3" />
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
            See every verified review
          </Link>
        </div>
      </div>
    </section>
  );
}
