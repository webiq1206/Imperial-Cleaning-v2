/**
 * NAP consistency audit.
 *
 * Local ranking depends on the business name, address, and phone being byte
 * identical everywhere they appear: visible page text, JSON-LD, llms.txt, and
 * the Google Business Profile. Drift is easy to introduce and invisible in
 * review, so this runs in `prebuild` alongside the internal-link audit.
 *
 * The audit found real drift once already: two different HQ coordinate pairs
 * (neither matching the geocoded address) and a `geo.region` of "ID-UT", which
 * is not a valid ISO 3166-2 code. This guards against the same class of bug.
 *
 * Exits non-zero on any hard failure so the build stops.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS,
  BUSINESS_FULL_ADDRESS,
  BUSINESS_GEO,
  GOOGLE_LISTING_URL,
} from "../data/business-info";

const failures: string[] = [];
const warnings: string[] = [];

/** Rooftop geocode of 2653 Clarence Pl, Idaho Falls ID 83402 (Google, 2026-08-28). */
const EXPECTED_GEO = { latitude: 43.5102, longitude: -112.0842 };
/** How far the stored coordinate may sit from the geocode, in degrees (~110m). */
const GEO_TOLERANCE = 0.001;

function read(path: string): string {
  return readFileSync(resolve(process.cwd(), path), "utf8");
}

/** Every source file that could hold a hardcoded NAP value. */
function sourceFiles(): string[] {
  return execSync(
    "git ls-files 'app/**/*.ts' 'app/**/*.tsx' 'components/**/*.tsx' 'lib/**/*.ts' 'data/**/*.ts' 'public/*.txt'"
  )
    .toString()
    .split("\n")
    .filter(Boolean)
    .filter((f) => !f.startsWith("app/admin/") && !f.startsWith("app/api/"));
}

// 1. The stored HQ coordinate must match the geocoded address.
if (
  Math.abs(BUSINESS_GEO.latitude - EXPECTED_GEO.latitude) > GEO_TOLERANCE ||
  Math.abs(BUSINESS_GEO.longitude - EXPECTED_GEO.longitude) > GEO_TOLERANCE
) {
  failures.push(
    `BUSINESS_GEO (${BUSINESS_GEO.latitude}, ${BUSINESS_GEO.longitude}) does not match the ` +
      `geocode of ${BUSINESS_FULL_ADDRESS} (${EXPECTED_GEO.latitude}, ${EXPECTED_GEO.longitude}). ` +
      `Re-geocode the address before changing this.`
  );
}

// 2. No file may hardcode a coordinate that disagrees with business-info.
//    Any decimal degree in the Idaho Falls band that is not the canonical value
//    is drift. City-page coordinates come from service-locations and are keyed
//    to their own city, so that file is exempt.
const HQ_LAT_PATTERN = /\b43\.\d{3,}\b/g;
for (const file of sourceFiles()) {
  if (file === "data/service-locations.ts" || file === "scripts/audit-nap.ts") continue;
  const content = read(file);
  for (const match of content.match(HQ_LAT_PATTERN) ?? []) {
    if (Math.abs(parseFloat(match) - EXPECTED_GEO.latitude) > GEO_TOLERANCE) {
      failures.push(`${file}: latitude ${match} disagrees with BUSINESS_GEO (${EXPECTED_GEO.latitude}).`);
    }
  }
}

// 3. geo.region must be a valid ISO 3166-2 subdivision code.
const GEO_REGION_PATTERN = /"geo\.region":\s*[`"']([^`"']+)[`"']/g;
for (const file of sourceFiles()) {
  const content = read(file);
  let m: RegExpExecArray | null;
  while ((m = GEO_REGION_PATTERN.exec(content)) !== null) {
    const value = m[1];
    if (value.startsWith("US-$") || value.startsWith("${")) continue; // template literal
    if (!/^US-[A-Z]{2}$/.test(value)) {
      failures.push(`${file}: geo.region "${value}" is not a valid ISO 3166-2 code (expected US-XX).`);
    }
  }
}

// 4. Phone numbers must all resolve to the canonical number.
const digits = (s: string) => s.replace(/\D/g, "");
const CANONICAL_DIGITS = digits(BUSINESS_PHONE);
const PHONE_PATTERN = /(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
for (const file of sourceFiles()) {
  // Strip form `placeholder="..."` attributes first. Those legitimately use the
  // reserved 555 fictional prefix as example input and are not NAP claims.
  const content = read(file).replace(/placeholder=["'][^"']*["']/g, "");
  for (const match of content.match(PHONE_PATTERN) ?? []) {
    const d = digits(match).replace(/^1/, "");
    // Ten-digit strings only; shorter matches are dates, IDs, or coordinates.
    if (d.length !== 10) continue;
    if (d !== CANONICAL_DIGITS.replace(/^1/, "")) {
      warnings.push(`${file}: phone "${match}" is not the canonical ${BUSINESS_PHONE}.`);
    }
  }
}

// 5. llms.txt must carry the canonical name, address, phone, and email so the
//    file AI crawlers read agrees with the schema they parse.
const llms = read("public/llms.txt");
for (const [label, value] of [
  ["business name", BUSINESS_NAME],
  ["street address", BUSINESS_ADDRESS.street],
  ["phone", BUSINESS_PHONE],
  ["email", BUSINESS_EMAIL],
  ["Google listing", GOOGLE_LISTING_URL],
] as const) {
  if (!llms.includes(value)) {
    failures.push(`public/llms.txt is missing the canonical ${label} ("${value}").`);
  }
}

// 6. The Google listing URL must appear exactly once as a constant, so the site
//    can never cite two different listings for the same business.
const staleListings = sourceFiles().filter((f) => {
  if (f === "data/business-info.ts") return false;
  const content = read(f);
  const matches = content.match(/https:\/\/share\.google\/[A-Za-z0-9]+/g) ?? [];
  return matches.some((url) => url !== GOOGLE_LISTING_URL);
});
for (const f of staleListings) {
  failures.push(`${f}: references a Google share link other than GOOGLE_LISTING_URL.`);
}

console.log("\n[nap] NAP Consistency Report");
console.log(`  Name:    ${BUSINESS_NAME}`);
console.log(`  Address: ${BUSINESS_FULL_ADDRESS}`);
console.log(`  Phone:   ${BUSINESS_PHONE} (${BUSINESS_PHONE_TEL})`);
console.log(`  Email:   ${BUSINESS_EMAIL}`);
console.log(`  Geo:     ${BUSINESS_GEO.latitude}, ${BUSINESS_GEO.longitude}`);
console.log(`  Listing: ${GOOGLE_LISTING_URL}\n`);

console.log(`  Warnings: ${warnings.length}`);
for (const w of warnings) console.log(`    - ${w}`);

console.log(`\n  Failures: ${failures.length}`);
for (const f of failures) console.log(`    - ${f}`);

if (failures.length > 0) {
  console.error(`\n[nap] FAILED: ${failures.length} NAP inconsistency(ies).`);
  process.exit(1);
}
console.log("\n[nap] OK");
