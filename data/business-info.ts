/**
 * Canonical business facts sourced from the Google Business Profile listing.
 * All on-site NAP, hours, and schema must read from this module so the website
 * never drifts from what Google shows.
 *
 * Hours verified 2026-06-10 against the GBP listing (also mirrored on
 * BestProsInTown, which aggregates Google data).
 */

export const BUSINESS_NAME = "Imperial Cleaning Inc";

export const BUSINESS_PHONE = "(208) 520-3202";
export const BUSINESS_PHONE_TEL = "+1-208-520-3202";

export const BUSINESS_EMAIL = "service@imperialcleaninginc.com";

export const BUSINESS_ADDRESS = {
  street: "2653 Clarence Pl",
  city: "Idaho Falls",
  state: "ID",
  postalCode: "83402",
  country: "US",
} as const;

/** Short display: "Idaho Falls, ID 83402" */
export const BUSINESS_CITY_LINE = `${BUSINESS_ADDRESS.city}, ${BUSINESS_ADDRESS.state} ${BUSINESS_ADDRESS.postalCode}`;

/** Full display: "2653 Clarence Pl, Idaho Falls, ID 83402" */
export const BUSINESS_FULL_ADDRESS = `${BUSINESS_ADDRESS.street}, ${BUSINESS_CITY_LINE}`;

/** Google Business Profile hours (Mountain Time) */
export const BUSINESS_HOURS = {
  weekday: { opens: "08:00", closes: "17:00", label: "8:00 AM - 5:00 PM" },
  saturday: { opens: "09:00", closes: "13:00", label: "9:00 AM - 1:00 PM" },
  sunday: { closed: true as const, label: "Closed" },
} as const;

/** Compact CTA line used in contact cards and city sidebars */
export const BUSINESS_HOURS_SHORT = "Mon-Fri 8AM-5PM, Sat 9AM-1PM";

/** Sentence form for FAQs and llms.txt */
export const BUSINESS_HOURS_SENTENCE =
  "Monday through Friday 8:00 AM - 5:00 PM and Saturday 9:00 AM - 1:00 PM Mountain Time. Closed Sunday. Emergency cleaning is available outside business hours - call the main number.";

/** Schema.org OpeningHoursSpecification array for the canonical Organization */
export const BUSINESS_OPENING_HOURS_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: BUSINESS_HOURS.weekday.opens,
    closes: BUSINESS_HOURS.weekday.closes,
  },
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: "Saturday" as const,
    opens: BUSINESS_HOURS.saturday.opens,
    closes: BUSINESS_HOURS.saturday.closes,
  },
];

/** Legacy openingHours string format used in some generators */
export const BUSINESS_OPENING_HOURS_STRING = "Mo-Fr 08:00-17:00, Sa 09:00-13:00";

/** HQ coordinates (2653 Clarence Pl, Idaho Falls) */
export const BUSINESS_GEO = {
  latitude: 43.5102,
  longitude: -112.0842,
} as const;

/**
 * Google Business Profile share link, supplied by the owner 2026-08-28.
 * This replaces an earlier share link that pointed elsewhere. It is the single
 * source for every Google listing reference on the site (schema sameAs, hasMap,
 * the reviews hub, and llms.txt) so the site can never cite two different
 * listings for the same business.
 */
export const GOOGLE_LISTING_URL = "https://share.google/MfZvSeSp2XJUxm3GH";

/**
 * Independent directory citations that carry the same NAP. Used in schema
 * sameAs so search and answer engines have corroborating sources for the
 * entity rather than only first-party claims.
 */
export const DIRECTORY_CITATIONS = [
  "https://www.yelp.com/biz/imperial-cleaning-idaho-falls-3",
  "https://www.yellowpages.com/idaho-falls-id/mip/imperial-cleaning-inc-554345832",
  "https://pro.porch.com/idaho-falls-id/home-cleaners/imperial-cleaning-inc/pp",
  "https://www.bestprosintown.com/id/idaho-falls/imperial-cleaning-inc-/",
] as const;
