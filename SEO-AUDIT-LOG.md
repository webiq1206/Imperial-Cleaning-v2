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

## 2026-06-05 - Third pass (full SEO/GEO/AEO/UX/CRO implementation)

Code-first implementation of the World-class SEO/GEO/AEO/UX/Conversion/Performance audit.
Full narrative, page dispositions, and before/after live in `seo-audit/implementation-report.md`.
Build validated (`next build` green, 91 routes); internal-link audit clean (64 pages, 0 orphans, 0 broken).

### 12. Sitewide - Correctness & NAP consistency (Phase 1)
- **Files:** `components/service-pillars-section.tsx`, `components/pages/about-client.tsx`, `components/case-studies-section.tsx`, `components/shared/testimonials/testimonials-section.tsx`, `components/shared/stats/company-stats.tsx`, `data/service-locations.ts`, `public/llms.txt`, `public/llms-full.txt`, `app/layout.tsx`, `components/layout/footer.tsx`
- **Severity:** HIGH
- **Defects/Fixes:** Wrong CTA phone number `(208) 555-0123` -> `(208) 520-3202`. Conflicting project counts (`2,500+` vs `500+`) standardized to `500+` with `TODO(real-data)`. Conflicting founding year (`2010+` vs `2015`) standardized to `2015`. Facebook URL casing standardized to lowercase. Idaho Falls postal code `83401` -> `83404`.

### 13. Sitewide - Structured data overhaul (Phase 2)
- **Files:** `app/layout.tsx`, `components/pages/about-client.tsx`, `components/pages/service-location-client.tsx`, `components/pages/service-areas-idaho-client.tsx`, `components/pages/service-areas-utah-client.tsx`, `components/pages/commercial-cleaning-client.tsx`, `components/pages/construction-cleaning-client.tsx`, `lib/location-content-utils.ts`, `components/ui/breadcrumbs.tsx`, `app/page.tsx`
- **Severity:** HIGH
- **Defects/Fixes:** Introduced a canonical `@graph` (single `Organization` + `WebSite` with stable `@id`) in layout; all pages now reference via `@id` instead of redeclaring. Removed every unverifiable `aggregateRating` (4.9/127). Replaced per-city `LocalBusiness` (Idaho Falls HQ address on every city URL = misleading + doorway risk) with `Service` + `areaServed`. About page emits `AboutPage` referencing the canonical Org. Eliminated duplicate client-side `BreadcrumbList` injection (`includeStructuredData={false}`) where SSR already emits it. Home/commercial/construction FAQ JSON-LD reconciled to match visible accordions; home FAQ extracted to a single source of truth (`data/home-faqs.ts`).

### 14. City pages - Doorway-risk mitigation & enrichment (Phase 3)
- **Files:** `app/[state]/[service]/[city]/page.tsx`, `components/pages/service-location-client.tsx`, `lib/location-content-utils.ts`, `data/service-locations.ts`
- **Severity:** HIGH
- **Defects/Fixes:** `generateStaticParams` and the page now gate on `isValidServiceLocation` so only genuinely-offered service/city combos render (no empty/duplicate URLs). Activated dormant content generators (city-specific process, industry applications, coverage details, local context) to add genuine per-city differentiation. Added `localLandmarks`/`regulatoryNote`/`climateNote`/`localProjects` fields and populated landmarks for primary cities.

### 15. Technical/infra - Sitemaps & robots (Phase 4)
- **Files:** `app/sitemap.ts`, `app/robots.ts`, `public/robots.txt` (deleted), `app/service-areas/page.tsx` (new), `app/sitemap/page.tsx` (new), `components/layout/footer.tsx`
- **Severity:** MEDIUM
- **Defects/Fixes:** XML sitemap now uses stable `lastModified` + market-tier priorities (0.8/0.7/0.6) and only valid combos. Consolidated robots into `app/robots.ts` and deleted the static `public/robots.txt` (the static file silently overrode the dynamic route). Built a real `/service-areas` hub (the footer/section linked to a non-existent page) and a human-readable `/sitemap`.

### 16. E-E-A-T & conversion (Phase 5)
- **Files:** `components/hero-cta-buttons.tsx`, `components/testimonials-section.tsx`, `components/pages/about-client.tsx`
- **Severity:** MEDIUM
- **Defects/Fixes:** Added hero click-to-call (`tel:`) CTA. Removed dead `/api/placeholder/60/60` testimonial avatars (endpoint doesn't exist; initials render instead) and documented that testimonials are representative and emit no Review/AggregateRating schema. Softened unverifiable absolute claims (`100% Client Satisfaction Rate` -> `Satisfaction Guarantee`; `Zero Safety Incidents` -> `Safety-First / Trained & Insured Crews`). Added a founder `Person` schema scaffold (TODO) to strengthen future E-E-A-T.

### 17. Content/AEO - Resource hub & guides (Phase 6)
- **Files:** `data/guides.ts` (new), `app/resources/page.tsx` (new), `app/resources/[slug]/page.tsx` (new), `public/llms.txt`
- **Severity:** MEDIUM
- **Defects/Fixes:** Added a `/resources` hub plus 4 cornerstone guides (what is post-construction cleaning, cleanup process/checklist, cost factors, commercial vs janitorial) with `Article` + `FAQPage` (+ `HowTo` where steps exist), lead-answer-first layout, and question-style headings for AEO. Reconciled `llms.txt` stale facts (schema description now reflects Service-not-LocalBusiness, sitemap priorities, last-updated date) and linked the new hubs.

### 18. Performance & internal linking (Phases 7-8)
- **Files:** `components/hero-section.tsx`, `lib/page-registry.ts`, `data/internal-links.json` (regenerated)
- **Severity:** LOW
- **Defects/Fixes:** Deprioritized decorative hero logos (`fetchPriority="low"`) so the H1 LCP paints first. Registered the new pages in `page-registry.ts` and regenerated/audited the internal-link manifest (64 pages, clean).

## Out of scope (intentionally NOT changed)

- Per-city OG images (would require 30+ image generation jobs and design pass).
- Twitter card per-page `images` arrays on `/about`, `/contact`, the two service hubs, and the two state hubs (layout default fills in; not a defect).
- `@type: PrivacyPolicy` is not a canonical schema.org type but Google tolerates unknown types.
- Footer hydration warning (pre-existing; unrelated to SEO scope, tracked separately).
