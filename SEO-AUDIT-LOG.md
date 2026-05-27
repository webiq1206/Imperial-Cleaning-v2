# SEO Audit Log

Chronological record of changes made during the audit. Each entry maps to a single commit.

## 2026-05-27

### 1. Sitewide - Standardize Twitter handle
- **Files:** `app/layout.tsx`, `app/page.tsx`
- **Severity:** HIGH
- **Defect:** Layout default was `@imperialclean` and the home page used `@imperialcleaning`. Crawlers and Twitter card validation saw conflicting handles for the same site.
- **Fix:** Standardized to `@imperialcleaninginc` (matches Facebook, Instagram, and LinkedIn handles in `sameAs`). Added an explicit `site` field on the layout twitter block alongside `creator`.
- **Commit:** `SEO: sitewide - standardize Twitter handle to @imperialcleaninginc`

### 2. Sitewide - Fix Organization JSON-LD logo URL
- **Files:** `app/layout.tsx`
- **Severity:** HIGH
- **Defect:** Sitewide `Organization` schema referenced `/header-logo.png`, a 150x14 raster that was previously replaced with an SVG and has poor quality. Schema requires a valid logo URL.
- **Fix:** Pointed `logo` at `/hero-logo.png` (480x439 raster brand mark) so Google can fetch a square logo image.
- **Commit:** `SEO: sitewide - fix Organization JSON-LD logo URL`

### 3. /privacy-policy - Complete social card metadata
- **Files:** `app/privacy-policy/page.tsx`
- **Severity:** HIGH
- **Defect:** OG block was missing `siteName`, `locale`, and `images`; no Twitter card declared at all. Social shares had no thumbnail and no card type.
- **Fix:** Added `siteName`, `locale`, OG `images` (1200x630 default), and a full `summary_large_image` Twitter card with the standardized handle.
- **Commit:** `SEO: privacy-policy - add OG image and Twitter card`

### 4. /terms-of-service - Complete social card metadata
- **Files:** `app/terms-of-service/page.tsx`
- **Severity:** HIGH
- **Defect:** Same as privacy-policy: missing OG `siteName`, `locale`, `images`, and no Twitter card.
- **Fix:** Added `siteName`, `locale`, OG `images`, and a full `summary_large_image` Twitter card with the standardized handle.
- **Commit:** `SEO: terms-of-service - add OG image and Twitter card`

## Audited but not changed

These were inspected and found compliant or below the CRITICAL/HIGH threshold for this pass. See per-page audit files in `audits/`.

- `/` (home)
- `/about`
- `/contact`
- `/commercial-cleaning`
- `/construction-cleaning`
- `/service-areas/idaho`
- `/service-areas/utah`
- 48 dynamic city pages (`audits/_city-template.md`)
