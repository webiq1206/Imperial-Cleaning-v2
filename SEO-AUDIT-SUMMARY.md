# SEO Audit Summary

Audit run: 2026-05-27. Scope: 57 public pages (9 static plus 48 dynamic city pages).

## Overall posture
The site enters this audit in good shape. Sitewide head defaults, per-page metadata, sitemap, robots, AI-crawler allowlist, internal linking, and per-page JSON-LD were already implemented in prior tasks. The audit found 4 HIGH-severity defects and a handful of MEDIUM/LOW issues. All HIGH defects were fixed in this pass.

## HIGH defects fixed (4)

1. **Twitter handle inconsistency.** `app/layout.tsx` used `@imperialclean` while `app/page.tsx` used `@imperialcleaning`. Standardized to `@imperialcleaninginc` to match the Facebook, Instagram, and LinkedIn handles referenced in `Organization.sameAs`.
2. **Organization logo URL pointed at a blurry asset.** The sitewide `Organization` JSON-LD referenced `/header-logo.png` (a 150x14 raster replaced by SVG). Updated to `/hero-logo.png` (480x439 square mark) so search engines can fetch a usable logo.
3. **`/privacy-policy` social cards.** Added missing OG `siteName`, `locale`, `images`, and a complete Twitter `summary_large_image` card.
4. **`/terms-of-service` social cards.** Same fix as privacy-policy.

## MEDIUM defects documented (not changed)

- **Home `aggregateRating` is hardcoded.** `4.9 stars / 127 reviews` is baked into the LocalBusiness schema. If this does not reflect a verifiable, public review feed it can trigger a Google manual action. Recommend either wiring to a real review source or removing the block. Owner input required.
- **Geo coordinate drift on home.** Meta `geo.position` uses `43.4933;-112.0339`; LocalBusiness schema uses `43.4666;-112.0336`. Both fall inside Idaho Falls; pick one and standardize.
- **OG image dimension mismatch.** `public/og-image.png` is actually 3984x3405 but declared `1200x630` in metadata. Facebook and LinkedIn will resize, but performance and crispness suffer. Recommend regenerating a true 1200x630 PNG.
- **Twitter card per-page `images` missing on `/about`, `/contact`, both service hubs, both state hubs, and all 48 city pages.** Layout default fills in, so the card always shows the sitewide image. Acceptable but could be enhanced with page-specific imagery in a future asset pass.
- **City pages share one OG image.** All 48 city pages reuse `/og-image.png`. Page-specific OG images would improve social CTR but require asset generation, out of scope here.

## LOW defects documented

- Duplicate `Organization` JSON-LD on `/` (layout plus page).
- `@type: PrivacyPolicy` is not a canonical schema.org type; `WebPage` would be more correct.
- Long titles on cities with long display names (`Northern Utah / Cache Valley`, `Eastern Idaho Extended`) exceed 65 chars.
- Long descriptions on privacy/terms (167 and 188 chars respectively) will be truncated by Google.
- `components/seo-head.tsx` is legacy/unused dead code.

## Out of scope (per task constraints)
- Admin CRM (`/admin/*`), API routes, database schema, SendGrid/GA integrations, design system changes, copy rewrites.

## Recommended follow-ups
1. Verify or remove the hardcoded `aggregateRating` on home.
2. Regenerate `public/og-image.png` at exactly 1200x630.
3. Delete unused `components/seo-head.tsx`.
4. Generate per-city OG images for the highest-traffic cities (Idaho Falls, Pocatello, Boise, Salt Lake City, Provo, Logan).
5. Reconcile geo coordinates between meta tags and JSON-LD across the site.

## Files produced by this audit
- `SEO-AUDIT-CONTEXT.md` - extracted business and tech context
- `SEO-AUDIT-INVENTORY.md` - full page inventory (57 URLs)
- `SEO-AUDIT-LOG.md` - chronological change log
- `SEO-AUDIT-SUMMARY.md` - this file
- `audits/home.md`, `audits/about.md`, `audits/contact.md`, `audits/commercial-cleaning.md`, `audits/construction-cleaning.md`, `audits/service-areas-idaho.md`, `audits/service-areas-utah.md`, `audits/privacy-policy.md`, `audits/terms-of-service.md`
- `audits/_city-template.md` - covers all 48 dynamic city pages (single generator)
