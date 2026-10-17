/** Prop shape for the public review line. No unpublished counts or sentences live here. */
export type PublicReviewLine =
  | { mode: "total"; text: string }
  | { mode: "interim"; label: string; href: string };
