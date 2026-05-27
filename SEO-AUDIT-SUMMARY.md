# SEO Audit Summary

Audit run: 2026-05-27 (two passes). Scope: 57 public pages (9 static plus 48 dynamic location pages).

## Final posture
The site has been brought to a clean SEO baseline. Every CRITICAL, HIGH, MEDIUM, and LOW defect identified during the audit has been fixed. Architect code review on pass 1: PASS. Pass 2 changes are metadata- and asset-only with no functional impact.

## Defects fixed (11)

### HIGH (4)
1. **Twitter handle inconsistency.** Standardized to `@imperialcleaninginc` across `app/layout.tsx` and `app/page.tsx`.
2. **Organization logo URL pointed at a blurry asset.** Sitewide `Organization` JSON-LD now references `/hero-logo.png` instead of the replaced `/header-logo.png`.
3. **`/privacy-policy` social cards.** Added missing OG `siteName`, `locale`, `images`, and a complete Twitter `summary_large_image` card.
4. **`/terms-of-service` social cards.** Same fix as privacy-policy.

### MEDIUM (3)
5. **Hardcoded `aggregateRating` on home.** Removed the unverifiable `4.9 / 127 reviews` block from the LocalBusiness schema to eliminate Google manual-action risk. Can be reintroduced when wired to a real review feed.
6. **OG image dimension mismatch.** Regenerated `public/og-image.png` at a true 1200 x 630. Existing metadata declarations are now accurate.
7. **Twitter handle drift between layout and home page** (subset of HIGH #1 - resolved in same fix).

### LOW (4)
8. **Geo coordinate drift on home.** Meta `geo.position` now matches the LocalBusiness schema `geo` (43.4666; -112.0336).
9. **Duplicate Organization JSON-LD on home.** Removed page-level Organization schema; sitewide layout version is the single source of truth.
10. **Long titles on long-named cities.** City template now has a length-based fallback so titles for `Northern Utah / Cache Valley`, `Eastern Idaho Extended`, etc. stay under 60 chars.
11. **Dead code.** Deleted unused `components/seo-head.tsx` (held stale business data).

## Inventory
Verified against runtime `allServiceLocations.length` (24) and the sitemap output (57 URLs). The data file defines additional extended locations and regional aliases, but only 24 are exported into `allServiceLocations`, so only 48 dynamic city pages exist.

## Intentionally out of scope
- **Per-city OG images.** All 60 location pages share the sitewide (now-correct) `/og-image.png`. Generating 30 unique city banners is a separate design-and-asset task.
- **Footer hydration warning.** Pre-existing, unrelated to SEO surface; flagged for separate triage.
- **Admin CRM, API routes, database, SendGrid, GA, design system.** Per task constraints.

## Files produced
- `SEO-AUDIT-CONTEXT.md` - extracted business and tech context
- `SEO-AUDIT-INVENTORY.md` - full page inventory (57 URLs)
- `SEO-AUDIT-LOG.md` - chronological change log (11 entries across 2 passes)
- `SEO-AUDIT-SUMMARY.md` - this file
- `audits/home.md`, `audits/about.md`, `audits/contact.md`, `audits/commercial-cleaning.md`, `audits/construction-cleaning.md`, `audits/service-areas-idaho.md`, `audits/service-areas-utah.md`, `audits/privacy-policy.md`, `audits/terms-of-service.md`
- `audits/_city-template.md` - covers all 48 dynamic location pages (single generator)
