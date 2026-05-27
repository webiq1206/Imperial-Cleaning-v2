# Audit: `/about`

Source: `app/about/page.tsx`, `components/pages/about-client.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| MEDIUM | Twitter card lacks an `images` array. Falls back to default OG image but no card-specific image is declared. | DOCUMENTED (layout default fills in) |
| LOW | `organizationSchema.logo` uses `/hero-logo.png` (480x439 1-bit grayscale). Google prefers a clean color logo. | DOCUMENTED |
| LOW | No `AboutPage` schema type alongside Organization. | DOCUMENTED (optional) |

## What is already correct
- Unique title (52 chars), description (158 chars), canonical, OG with image, BreadcrumbList JSON-LD, Organization JSON-LD.
- `RelatedContent` mounted.
- H1 is unique and descriptive.
- Geo meta tags present.
