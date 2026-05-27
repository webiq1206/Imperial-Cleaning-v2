# Audit: `/privacy-policy`

Source: `app/privacy-policy/page.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| HIGH | OG block has no `images` (social shares get no thumbnail). | FIXED |
| HIGH | No Twitter card declared (defaults to `summary` with no image). | FIXED |
| HIGH | OG block missing `siteName` and `locale`. | FIXED |
| LOW | `@type: PrivacyPolicy` is not a recognized schema.org type. Should be `WebPage` (PrivacyPolicy is not in the canonical vocabulary). | DOCUMENTED |

## What is already correct
- Unique title (66 chars - slightly long, acceptable), description (167 chars - 7 over recommended max, will truncate in SERP).
- Canonical present.
- BreadcrumbList JSON-LD present.
