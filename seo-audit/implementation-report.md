# Imperial Cleaning Inc - SEO / GEO / AEO / UX / Conversion / Performance Implementation Report

**Date:** 2026-06-05
**Scope:** Code-first implementation of the World-class SEO/GEO/AEO/UX/Conversion/Performance & Content Quality audit and the Local Service Business Knowledge Graph brief.
**Stack:** Next.js 14 (App Router), TypeScript, Tailwind.
**Validation:** `next build` green (91 routes). Internal-link audit clean: 64 registry pages, 64 manifest entries, 0 orphans, 0 weak-equity, 0 broken links.

This is the single consolidated deliverable (in place of 25 separate reports). The chronological changelog lives in [`SEO-AUDIT-LOG.md`](../SEO-AUDIT-LOG.md) entries 12-18.

---

## 1. Executive summary

The site was already structurally strong (clean URL architecture, dynamic sitemap, deferred analytics, AVIF/WebP imaging, internal-link manifest). The audit surfaced three classes of risk that this pass resolved in code:

1. **Trust / correctness defects** - a wrong phone number in a CTA, conflicting project counts and founding years, and NAP drift (Facebook casing, postal code). These directly undermine conversion and local trust signals.
2. **Structured-data risk** - unverifiable `aggregateRating` on multiple pages (manual-action risk), a per-city `LocalBusiness` stamping the Idaho Falls HQ address onto every city URL (misleading + doorway signal), duplicate `Organization` and `BreadcrumbList` nodes, and FAQ JSON-LD that didn't match visible content.
3. **Thin programmatic pages + missing pages** - 48 city pages leaned on templated copy, and the footer linked to a `/service-areas` hub that did not exist. There was no topical/AEO content layer.

All three are addressed. No fabricated data was introduced: placeholders were either softened, removed, or marked `TODO(real-data)`, and nothing unverifiable is exposed to search engines as structured data.

---

## 2. Decisions & guardrails

- **Schema-safe placeholders.** Existing placeholder marketing copy (testimonials, stats) was kept for layout but is never emitted as `Review`/`AggregateRating` JSON-LD. Unverifiable ratings were deleted, not hidden.
- **One canonical entity.** A sitewide `@graph` declares `Organization` and `WebSite` once (stable `@id`s). Every other page references them by `@id`.
- **City pages stay indexable.** Rather than `noindex`-ing programmatic pages, doorway risk is mitigated by (a) replacing per-city `LocalBusiness` with `Service` + `areaServed`, (b) gating generation on real service availability, and (c) injecting genuinely differentiated local content.
- **No destructive guesses.** Where a fact needs the business to confirm (project count, founder name, license numbers), the value is standardized to the most-supported figure and annotated with `TODO(real-data)`.

---

## 3. What changed, by phase

### Phase 1 - Correctness & NAP
- Fixed CTA phone `(208) 555-0123` -> `(208) 520-3202` ([`components/service-pillars-section.tsx`](../components/service-pillars-section.tsx)).
- Standardized project count to `500+` and founding year to `2015` across about page, stats, testimonials, case studies, and the llms files.
- Lowercased Facebook URL and corrected Idaho Falls postal code to `83404` in [`app/layout.tsx`](../app/layout.tsx) and [`components/layout/footer.tsx`](../components/layout/footer.tsx).
- Softened Boise/Treasure-Valley-centric copy to reflect the Idaho Falls HQ and full Idaho+Utah footprint.

### Phase 2 - Structured data
- Canonical `Organization` + `WebSite` graph in [`app/layout.tsx`](../app/layout.tsx) (no `SearchAction` - on-site search is a client modal with no results route).
- Removed all `aggregateRating` blocks; converted per-city / Utah `LocalBusiness` to `Service`; About now emits `AboutPage`.
- Disabled duplicate client-side `BreadcrumbList` where SSR already emits it ([`components/ui/breadcrumbs.tsx`](../components/ui/breadcrumbs.tsx) `includeStructuredData={false}`).
- Reconciled FAQ JSON-LD with visible accordions; extracted home FAQ to [`data/home-faqs.ts`](../data/home-faqs.ts) as the single source for both render and schema.

### Phase 3 - City-page enrichment
- [`app/[state]/[service]/[city]/page.tsx`](../app/[state]/[service]/[city]/page.tsx) gates `generateStaticParams` + render on `isValidServiceLocation`.
- Activated dormant generators (city-specific process, industry applications, coverage details, local context) in [`components/pages/service-location-client.tsx`](../components/pages/service-location-client.tsx).
- Extended [`data/service-locations.ts`](../data/service-locations.ts) with `localLandmarks`/`regulatoryNote`/`climateNote`/`localProjects` and populated landmarks for primary markets.

### Phase 4 - Technical / infra
- [`app/sitemap.ts`](../app/sitemap.ts): stable `lastModified`, market-tier priorities (0.8/0.7/0.6), valid combos only, plus new static + guide URLs.
- Consolidated robots into [`app/robots.ts`](../app/robots.ts) and **deleted** `public/robots.txt` (the static file was silently overriding the dynamic route).
- New [`app/service-areas/page.tsx`](../app/service-areas/page.tsx) hub (the footer/section linked to a 404) and new human-readable [`app/sitemap/page.tsx`](../app/sitemap/page.tsx).

### Phase 5 - E-E-A-T & conversion
- Hero click-to-call CTA ([`components/hero-cta-buttons.tsx`](../components/hero-cta-buttons.tsx)); mid-page phone CTA already present via service pillars.
- Removed dead `/api/placeholder` testimonial avatars; documented representative-testimonial status.
- Softened unverifiable absolutes (`100% satisfaction rate`, `zero safety incidents`); added founder `Person` schema scaffold (TODO).

### Phase 6 - Content / AEO
- [`data/guides.ts`](../data/guides.ts) + [`app/resources/page.tsx`](../app/resources/page.tsx) + [`app/resources/[slug]/page.tsx`](../app/resources/[slug]/page.tsx): 4 cornerstone guides with `Article` + `FAQPage` (+ `HowTo`), lead-answer-first layout, question headings.
- Reconciled stale facts in [`public/llms.txt`](../public/llms.txt).

### Phases 7-8 - Performance & linking
- `fetchPriority="low"` on decorative hero logos so the H1 LCP paints first.
- Registered new pages in [`lib/page-registry.ts`](../lib/page-registry.ts); regenerated + audited the internal-link manifest.

---

## 4. Page disposition

| Area | Pages | Disposition |
|---|---|---|
| Home | `/` | Enhanced (FAQ SoT, schema graph, hero click-to-call) |
| Service hubs | `/construction-cleaning`, `/commercial-cleaning` | Enhanced (Service schema via `@id`, FAQ reconciled) |
| State hubs | `/service-areas/idaho`, `/service-areas/utah` | Enhanced (Service not LocalBusiness, no aggregateRating) |
| Service-areas hub | `/service-areas` | **New** (was a broken link) |
| HTML sitemap | `/sitemap` | **New** |
| Resource hub + guides | `/resources`, `/resources/[slug]` x4 | **New** (topical/AEO layer) |
| City pages | 48 dynamic | Kept indexable + enriched + doorway-risk mitigated |
| About | `/about` | Enhanced (AboutPage schema, softened claims, Person scaffold) |
| Contact / legal | `/contact`, `/privacy-policy`, `/terms-of-service` | Unchanged (prior passes) |

---

## 5. Remaining `TODO(real-data)` for the business

These were intentionally left as annotated placeholders because they require owner-verified facts:

- **Verified reviews** -> reintroduce `Review`/`AggregateRating` JSON-LD once a real review feed exists.
- **Project count / team size** -> confirm canonical figures (currently `500+` / `25+`).
- **Founder / leadership names** -> populate the `Person` scaffold in [`components/pages/about-client.tsx`](../components/pages/about-client.tsx) and the Organization `founder` field.
- **License / certification numbers** -> add concrete credentials where currently described qualitatively.
- **Per-city OG images** and a real `/search?q=` route (would unlock `WebSite` `SearchAction`).

---

## 6. Verification

```
next build            # green, 91 routes (48 city + 4 guides + hubs + statics)
npm run audit:links   # 64 pages, 0 orphans, 0 weak-equity, 0 broken
```
