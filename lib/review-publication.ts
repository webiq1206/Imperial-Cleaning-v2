import "server-only";

/**
 * Unpublished review claims. Client components must not import this module:
 * a 'use client' import ships the hidden total into the browser bundle even
 * when the flag is false. Server code enters through lib/review-claims.server.ts.
 * Swap INTERIM_REVIEW_LINE to change the public sentence.
 */

export const SHOW_REVIEW_TOTAL = false;

export function crossPlatformReviewTotal(googleCount: number, otherCounts: readonly number[]): number {
  return googleCount + otherCounts.reduce((sum, count) => sum + count, 0);
}

/** Kept so the unpublished total can be restored without rewriting the sentence. */
export function hiddenReviewTotalText(total: number): string {
  return `${total}+ verified reviews across Google, Porch, and BestProsInTown`;
}

/** Null while the total is hidden, so callers render the interim line instead. */
export function visibleReviewTotalText(total: number): string | null {
  return SHOW_REVIEW_TOTAL ? hiddenReviewTotalText(total) : null;
}

/**
 * Interim public line. The whole phrase links to the Google Maps place.
 * The BestPros count stays on the profile card, not in this line.
 */
export const INTERIM_REVIEW_LINE = {
  label: "Read our reviews on Google",
  href: "https://www.google.com/maps/place/Imperial+Cleaning+Inc/data=!4m7!3m6!1s0x53545b59cac2a7a5:0xdac81c3bdfcf0ea2",
} as const;

export function interimReviewPlainText(
  line: typeof INTERIM_REVIEW_LINE = INTERIM_REVIEW_LINE,
): string {
  return line.label;
}

/** Serializable claim for client components. The hidden sentence is included only while the flag is on. */
export function publicReviewLine(total: number):
  | { mode: "total"; text: string }
  | { mode: "interim"; label: string; href: string } {
  const totalText = visibleReviewTotalText(total);
  if (totalText) return { mode: "total", text: totalText };
  return { mode: "interim", ...INTERIM_REVIEW_LINE };
}

/**
 * AggregateRating is omitted while the cross-platform total is hidden.
 * ratingValue 5.0 is not emitted on its own: schema.org AggregateRating and
 * Google review snippets both need a review count, and the only count we have
 * for this node is the unpublished 102 total.
 */
export function reviewAggregateRatingSchema(reviewCount: number): {
  "@type": "AggregateRating";
  ratingValue: "5.0";
  reviewCount: string;
} | null {
  if (!SHOW_REVIEW_TOTAL) return null;
  return {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(reviewCount),
  };
}

export function applyReviewAggregateRating<T extends object>(
  node: T,
  reviewCount: number,
): T {
  const aggregateRating = reviewAggregateRatingSchema(reviewCount);
  if (!aggregateRating) return node;
  return { ...node, aggregateRating };
}
