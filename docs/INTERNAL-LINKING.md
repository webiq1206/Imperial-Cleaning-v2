# Internal Linking System

This site uses an automated internal linking system that runs at build time to compute "Related" link recommendations for every page. The goal is to:

1. Target at least 5 incoming internal links for every non-legal page (enforced by the audit, which reports pages below that threshold).
2. Push extra link equity toward money pages (`/contact`, `/construction-cleaning`, `/commercial-cleaning`).
3. Use real, descriptive anchor text taken from each target page's H1.

## Pipeline

```
data/service-locations.ts ──▶ lib/page-registry.ts
                                      │
                                      ▼
                          scripts/internal-links.ts (prebuild)
                                      │
                                      ▼
                            data/internal-links.json
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
 RelatedContent component      Smart footer            scripts/audit-internal-links.ts
        │                             │                             │
        ▼                             ▼                             ▼
 rendered on pages         renders top cities            fails build on broken links
```

## Commands

| Command                  | What it does                                                    |
| ------------------------ | --------------------------------------------------------------- |
| `npm run links:generate` | Rebuilds `data/internal-links.json` from the page registry.     |
| `npm run audit:links`    | Reports orphans, weak-equity pages, and fails on broken links.  |
| `npm run build`          | Runs the generator and audit automatically via `prebuild`.      |

## Page registry

`lib/page-registry.ts` enumerates every linkable page on the site with a single shape (`PageEntry`):

- `url` ,  canonical path.
- `type` ,  `home | service-hub | state-hub | city-service | about | contact | legal`.
- `title`, `h1`, `anchor` ,  used when other pages link to this page. `anchor` is what shows up as link text.
- `state`, `service`, `city`, `county` ,  relational tags used for scoring.
- `industries` ,  economic-base tags pulled from `demographics.economicBase`.
- `marketTier` ,  `primary | secondary | extended` for city pages.
- `authorityBoost` ,  numeric weight added to similarity when this page is the target.
- `isMoneyPage` ,  flagged pages get an extra `+0.3` boost.

City entries are generated automatically from `data/service-locations.ts`. Static entries (home, service hubs, state hubs, about, contact, legal) are declared in `staticEntries()`.

## Scoring algorithm

`scripts/internal-links.ts` walks every source/target pair and computes:

| Signal                                                   | Weight |
| -------------------------------------------------------- | -----: |
| Same state                                               |  +0.50 |
| Same service                                             |  +0.60 |
| Same county                                              |  +0.40 |
| Same city, sibling service (city-service pages only)     |  +1.00 |
| Shared industries (per shared tag)                       |  +0.15 |
| Jaccard token overlap on H1 (after stopword removal)     | × 0.30 |
| City to its service hub                                  |  +0.70 |
| City to its state hub                                    |  +0.70 |
| Service hub to one of its cities                         |  +0.50 |
| State hub to one of its cities                           |  +0.50 |
| Either side is a legal page                              |  −0.50 |
| Target `authorityBoost`                                  |   +raw |
| Target `isMoneyPage`                                     |  +0.30 |

### Authority boosts

| Page                       | authorityBoost | isMoneyPage |
| -------------------------- | -------------: | :---------: |
| `/contact`                 |          +1.20 |     yes     |
| `/construction-cleaning`   |          +1.00 |     yes     |
| `/commercial-cleaning`     |          +1.00 |     yes     |
| `/service-areas/{state}`   |          +0.60 |             |
| `/` (home)                 |          +0.50 |             |
| Primary-tier city pages    |          +0.40 |             |
| Secondary-tier city pages  |          +0.20 |             |
| Extended-tier city pages   |          +0.05 |             |
| `/about`                   |          +0.20 |             |
| Legal pages                |              0 |             |

Top candidates per source: 5 (legal) or 8 (everything else). Ties break alphabetically by URL so output is deterministic.

## RelatedContent component

`components/shared/related-content.tsx` is a server component. Pass the current page URL:

```tsx
<RelatedContent pageUrl="/idaho/commercial-cleaning/idaho-falls" />
```

It reads `data/internal-links.json` directly (no runtime fetch) and renders the top results using each target's `anchor` text. Two variants:

- `variant="section"` (default) ,  full section with heading and cards.
- `variant="inline"` ,  flat row of links for embedding in body copy.

### Per-page overrides

```tsx
<RelatedContent
  pageUrl="/about"
  override={{
    pin: [{ url: "/contact", anchor: "Request a free cleaning quote" }],
    rename: { "/commercial-cleaning": "Browse our commercial cleaning services" },
    exclude: ["/privacy-policy"],
  }}
/>
```

- `pin` ,  links forced to appear first.
- `rename` ,  replace the auto-anchor for a specific URL on this one page.
- `exclude` ,  drop specific URLs from the result set.

## Anchor text rules

Anchors come from the registry's `anchor` field, which mirrors each page's H1. Never use generic anchors like "click here", "this article", "learn more", or bare URLs. When you need different wording for a particular page, use the `rename` override above, not a one-off `<Link>`.

## Adding a new page

1. Add a new entry to `staticEntries()` in `lib/page-registry.ts` (or update `data/service-locations.ts` for a new city).
2. Run `npm run links:generate`.
3. Mount `<RelatedContent pageUrl="..." />` on the new page.
4. Run `npm run audit:links` to confirm the new page has at least 5 incoming links and no broken links exist.

## Smart footer

`components/layout/footer.tsx` calls `getTopCitiesForState("Idaho" | "Utah", 4)` from `lib/page-registry.ts` to render its city lists. Update `data/service-locations.ts` (tier, population) and the footer adjusts automatically the next time it renders.
