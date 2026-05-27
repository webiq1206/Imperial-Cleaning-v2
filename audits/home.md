# Audit: `/` (Home)

Source: `app/page.tsx`, `components/pages/home-client.tsx`, `app/layout.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| HIGH | Twitter `site` and `creator` use `@imperialcleaning` but `app/layout.tsx` defaults to `@imperialclean`. Crawlers see conflicting handles. | FIXED |
| MEDIUM | `localBusinessSchema.aggregateRating` is hardcoded (4.9 / 127 reviews). Should reflect real, verifiable review counts or be removed to avoid Google manual action. | DOCUMENTED, not changed (requires owner input) |
| MEDIUM | `geo.position` meta is `43.4933;-112.0339` but schema `geo` uses `43.4666;-112.0336`. Different lat for the same business. | DOCUMENTED (low impact, both inside city limits) |
| LOW | Duplicate Organization JSON-LD: one in `app/layout.tsx` and one in `app/page.tsx` (with different logo URLs). Google tolerates this but it is noise. | DOCUMENTED |

## What is already correct
- Unique title (60 chars), description (155 chars), canonical, OG, JSON-LD (LocalBusiness, Organization, FAQ, Breadcrumb).
- `RelatedContent` mounted with limit 5.
- Hero image alt text is descriptive.
- Geo meta tags present.
