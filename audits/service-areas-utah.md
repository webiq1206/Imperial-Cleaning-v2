# Audit: `/service-areas/utah`

Source: `app/service-areas/utah/page.tsx`, `components/pages/service-areas-utah-client.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| MEDIUM | Twitter card lacks `images`. | DOCUMENTED |

## What is already correct
- Unique title (51 chars), description (151 chars), canonical, OG with image.
- Service, BreadcrumbList, and FAQPage JSON-LD emitted.
- Internal links to all Utah city pages.
- `geo.region` correctly set to `US-UT`.
