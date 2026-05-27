# Audit: `/contact`

Source: `app/contact/page.tsx`, `components/pages/contact-client.tsx`.

## Findings

| Severity | Defect | Status |
|---|---|---|
| MEDIUM | Twitter card lacks `images`. | DOCUMENTED |
| LOW | `ContactPage` JSON-LD is present but does not link to the `LocalBusiness` `@id` (`#localbusiness`) defined on home. Adding `mainEntityOfPage` would help entity resolution. | DOCUMENTED |

## What is already correct
- Unique title (52 chars), description (148 chars), canonical, OG with image.
- ContactPage, LocalBusiness, and BreadcrumbList JSON-LD all emitted.
- Phone and email in plain text and as `tel:` and `mailto:` links.
- Geo meta tags present.
