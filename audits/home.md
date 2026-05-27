# Audit: `/` (Home)

Source: `app/page.tsx`, `components/pages/home-client.tsx`, `app/layout.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| HIGH | Twitter `site` and `creator` use `@imperialcleaning` but `app/layout.tsx` defaults to `@imperialclean`. Crawlers see conflicting handles. | FIXED |
| MEDIUM | `localBusinessSchema.aggregateRating` was hardcoded (4.9 / 127 reviews). Risk of Google manual action without a verifiable review source. | FIXED (block removed) |
| LOW | `geo.position` meta was `43.4933;-112.0339` but schema `geo` was `43.4666;-112.0336`. | FIXED (meta now matches schema) |
| LOW | Duplicate Organization JSON-LD: one in `app/layout.tsx` and one in `app/page.tsx`. | FIXED (page-level removed) |

## What is already correct
- Unique title (60 chars), description (155 chars), canonical, OG, JSON-LD (LocalBusiness, Organization, FAQ, Breadcrumb).
- `RelatedContent` mounted with limit 5.
- Hero image alt text is descriptive.
- Geo meta tags present.
