# SEO Audit Log

Chronological record of changes made during the audit. Each entry maps to a single commit.

## 2026-05-27 - First pass (HIGH-severity sitewide)

### 1. Sitewide - Standardize Twitter handle
- **Files:** `app/layout.tsx`, `app/page.tsx`
- **Severity:** HIGH
- **Defect:** Layout default was `@imperialclean` and the home page used `@imperialcleaning`. Crawlers and Twitter card validation saw conflicting handles for the same site.
- **Fix:** Standardized to `@imperialcleaninginc` (matches Facebook, Instagram, and LinkedIn handles in `sameAs`). Added an explicit `site` field on the layout twitter block alongside `creator`.

### 2. Sitewide - Fix Organization JSON-LD logo URL
- **Files:** `app/layout.tsx`
- **Severity:** HIGH
- **Defect:** Sitewide `Organization` schema referenced `/header-logo.png`, a 150x14 raster that was previously replaced with an SVG.
- **Fix:** Pointed `logo` at `/hero-logo.png`.

### 3. /privacy-policy - Complete social card metadata
- **Files:** `app/privacy-policy/page.tsx`
- **Severity:** HIGH
- **Defect:** OG block was missing `siteName`, `locale`, and `images`; no Twitter card declared at all.
- **Fix:** Added `siteName`, `locale`, OG `images`, and a full `summary_large_image` Twitter card.

### 4. /terms-of-service - Complete social card metadata
- **Files:** `app/terms-of-service/page.tsx`
- **Severity:** HIGH
- **Defect:** Same as privacy-policy: missing OG `siteName`, `locale`, `images`, and no Twitter card.
- **Fix:** Added `siteName`, `locale`, OG `images`, and a full `summary_large_image` Twitter card.

## 2026-05-27 - Second pass (remaining MEDIUM and LOW defects)

### 5. Home - Remove hardcoded aggregateRating
- **Files:** `app/page.tsx`
- **Severity:** MEDIUM
- **Defect:** `localBusinessSchema.aggregateRating` was hardcoded to `4.9 stars / 127 reviews`. Without a verifiable public review feed this risks a Google manual action and rich-result penalties.
- **Fix:** Removed the `aggregateRating` block. Can be reintroduced when wired to a real review source.

### 6. Home - Standardize geo coordinates
- **Files:** `app/page.tsx`
- **Severity:** LOW
- **Defect:** Meta `geo.position` (`43.4933;-112.0339`) disagreed with LocalBusiness schema `geo` (`43.4666;-112.0336`).
- **Fix:** Standardized meta tag to match the schema (`43.4666;-112.0336`).

### 7. Home - Remove duplicate Organization JSON-LD
- **Files:** `app/page.tsx`
- **Severity:** LOW
- **Defect:** Home page emitted its own `Organization` block in addition to the sitewide one in `app/layout.tsx`, with a divergent logo URL.
- **Fix:** Removed the page-level Organization schema. The sitewide one in layout remains the single source of truth.

### 8. City pages - Fix long titles
- **Files:** `app/[state]/[service]/[city]/page.tsx`
- **Severity:** LOW
- **Defect:** Title pattern produced over-65-char titles for long region names (`Northern Utah / Cache Valley Commercial Cleaning | Imperial Cleaning UT`, `Eastern Idaho Extended Construction Cleaning | Imperial Cleaning ID`). Google truncates anything past ~60 chars in SERP.
- **Fix:** Added a length-based fallback that shortens the service token (`Construction Cleanup` / `Commercial Cleaning`) and the brand suffix until the title fits.

### 9. Sitewide - Regenerate og-image at correct dimensions
- **Files:** `public/og-image.png`
- **Severity:** MEDIUM
- **Defect:** Image was 3984x3405 (1.17:1) but declared as 1200x630 (1.91:1) in every metadata block. Caused poor cropping on Facebook and LinkedIn and wasted bandwidth.
- **Fix:** Generated a true 1200x630 dark-themed brand banner and replaced the file at its existing path. No metadata changes required because dimensions are now accurate.

### 10. Cleanup - Remove dead code
- **Files:** `components/seo-head.tsx` (deleted)
- **Severity:** LOW
- **Defect:** Legacy SEO head component with its own hardcoded business data, not imported anywhere. Risk of someone reintroducing stale info.
- **Fix:** Deleted.

### 11. Docs - Verify inventory count against runtime
- **Files:** `SEO-AUDIT-INVENTORY.md`, `SEO-AUDIT-CONTEXT.md`
- **Severity:** LOW
- **Defect:** First-pass inventory enumerated 6 regional entries that exist in `data/service-locations.ts` source but are NOT exported in `allServiceLocations` at runtime, so they never render. Sitemap was claimed to be 57 URLs (correct) but the inventory listed phantom regional URLs.
- **Fix:** Verified actual count by executing `allServiceLocations.length` (24) via tsx. Rewrote the inventory as state-grouped city lists, removed the phantom regional URLs, and reconciled all docs to 24 locations / 48 dynamic pages / 57 total URLs.

## Out of scope (intentionally NOT changed)

- Per-city OG images (would require 30+ image generation jobs and design pass).
- Twitter card per-page `images` arrays on `/about`, `/contact`, the two service hubs, and the two state hubs (layout default fills in; not a defect).
- `@type: PrivacyPolicy` is not a canonical schema.org type but Google tolerates unknown types.
- Footer hydration warning (pre-existing; unrelated to SEO scope, tracked separately).
