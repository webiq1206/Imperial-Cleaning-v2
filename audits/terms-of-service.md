# Audit: `/terms-of-service`

Source: `app/terms-of-service/page.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| HIGH | OG block has no `images` (social shares get no thumbnail). | FIXED |
| HIGH | No Twitter card declared. | FIXED |
| HIGH | OG block missing `siteName` and `locale`. | FIXED |

## What is already correct
- Unique title (70 chars - slightly long, acceptable), description (188 chars - over recommended, will truncate).
- Canonical present.
- WebPage and BreadcrumbList JSON-LD present.
