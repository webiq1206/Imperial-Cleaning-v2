# Audit: `/commercial-cleaning`

Source: `app/commercial-cleaning/page.tsx`, `components/pages/commercial-cleaning-client.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| MEDIUM | Twitter card lacks `images`. | DOCUMENTED |
| LOW | OG `type` is `website`; `service` is more accurate for service hubs (not a standard OG value, so `website` is acceptable). | NO ACTION |

## What is already correct
- Unique title (52 chars), description (152 chars), canonical, OG with image.
- Service, BreadcrumbList, and FAQPage JSON-LD all emitted.
- Internal links to 24 city pages.
- Geo meta tags present.
