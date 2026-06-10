import { GOOGLE_LISTING_URL } from "./business-info";

// Verified customer reviews.
//
// RULES (owner decision 2026-06-10):
// - Only real reviews copied verbatim from the Google Business listing (or
//   another public review platform) may be added here. No composed or
//   "representative" quotes.
// - Each entry must include the platform source URL so every quote is
//   verifiable. Reviews are NOT emitted as Review/AggregateRating JSON-LD
//   until this file holds real entries; once it does, schema can be wired
//   to this data safely.
//
// To add a review: open the Google listing (link below), copy the reviewer's
// first name, star rating, date, and the exact review text into a new entry.

export interface VerifiedReview {
  /** Reviewer first name (and last initial if shown publicly) */
  author: string;
  /** 1-5 stars as shown on the platform */
  rating: number;
  /** ISO date of the review, e.g. "2026-03-14" */
  date: string;
  /** Exact review text, copied verbatim */
  text: string;
  /** Platform the review lives on */
  source: "Google" | "Porch" | "Yelp" | "Facebook";
  /** Public URL where the review can be verified */
  sourceUrl: string;
}

export { GOOGLE_LISTING_URL };

/**
 * Independently verifiable third-party rating snapshots.
 * Verified 2026-06-10 against the public profile pages.
 */
export const RATING_SOURCES = [
  {
    platform: "Porch",
    rating: 5.0,
    reviewCount: 26,
    url: "https://pro.porch.com/idaho-falls-id/home-cleaners/imperial-cleaning-inc/pp",
  },
  {
    platform: "BestProsInTown",
    rating: null as number | null,
    reviewCount: 34,
    url: "https://www.bestprosintown.com/id/idaho-falls/imperial-cleaning-inc-/",
  },
] as const;

/**
 * Paste real Google reviews here (verbatim). Empty until populated by the
 * owner; the reviews section renders rating sources + listing links in the
 * meantime, never fabricated quotes.
 */
export const verifiedReviews: VerifiedReview[] = [];
