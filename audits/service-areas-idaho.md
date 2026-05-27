# Audit: `/service-areas/idaho`

Source: `app/service-areas/idaho/page.tsx`, `components/pages/service-areas-idaho-client.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| MEDIUM | Twitter card lacks `images`. | DOCUMENTED |

## What is already correct
- Unique title (45 chars), description (139 chars), canonical, OG with image.
- Service, BreadcrumbList, and FAQPage JSON-LD emitted.
- Internal links to all Idaho city pages.
- `geo.region` correctly set to `US-ID`.
