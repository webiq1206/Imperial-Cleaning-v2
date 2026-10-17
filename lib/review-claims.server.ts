import "server-only";
import { GOOGLE_REVIEW_COUNT, RATING_SOURCES } from "@/data/reviews";
import type { PublicReviewLine } from "@/lib/review-line";
import {
  applyReviewAggregateRating,
  crossPlatformReviewTotal,
  publicReviewLine,
} from "@/lib/review-publication";

/** Google + Porch + BestProsInTown. Computed here so the sum never enters a client bundle. */
export function getCrossPlatformReviewTotal(): number {
  return crossPlatformReviewTotal(
    GOOGLE_REVIEW_COUNT,
    RATING_SOURCES.map((source) => source.reviewCount),
  );
}

export function getPublicReviewLine(): PublicReviewLine {
  return publicReviewLine(getCrossPlatformReviewTotal());
}

export function applyOrganizationReviewSchema<T extends object>(node: T): T {
  return applyReviewAggregateRating(node, getCrossPlatformReviewTotal());
}
