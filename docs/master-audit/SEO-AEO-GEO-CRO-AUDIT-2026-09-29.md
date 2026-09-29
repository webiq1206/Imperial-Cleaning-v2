# SEO, AEO, GEO and CRO audit and implementation, September 29, 2026

Scope: every indexable public page of imperialcleaninginc.com (95 canonical URLs: 13 company and utility pages, 17 service, industry and phase pages, 17 guides, 48 city and service pages). Source, rendered HTML, structured data, internal links, redirects, headers, conversion flow, tracking and performance were inspected on a clean production build of the current `main` branch. Owner direction (construction first, commercial prominent, no city targeting in the homepage primary terms, no unverified claims) was preserved.

## 1. Data access and baseline

| Source | Status on September 29, 2026 | Consequence |
| --- | --- | --- |
| Live site (imperialcleaninginc.com) | Blocked by this environment's network policy (host not allowed). | Live HTML, live headers, live schema and the deployed commit could not be inspected. All verification below is against the local production build of `main`. A live re-crawl with `node scripts/check-live-search.mjs` is still required after deployment. |
| Google Search Console | No connector. No fresh export in Drive or Gmail. The only data is the dated query slice saved in `docs/search-appearance/dated-gsc-opportunities.csv` (retrieved September 21 and 23, 2026). | Indexing coverage, 28-day comparisons, device and country splits, and Google-selected canonicals are not available. |
| Bing Webmaster Tools | No access. | Not audited. |
| Google Analytics 4 | No access to the property. Code review only. | Conversion counts and landing-page behaviour are not available. |
| Ahrefs | Connector present but every call returns "Insufficient plan". | No backlink, keyword or rank data. |
| Replit deployment | The Replit connector reports the app's most recent publish (deployment a146a23c) with status `failed`, and the app was last updated September 26, 2026. | The live site is probably serving an earlier build. A web search snippet captured on September 29 still showed the pre-September 26 homepage title. Nothing in this change set is live until a publish succeeds. |
| Google Business Profile | No access. The site references the owner-supplied share link. | Categories, services, photos and review velocity are owner tasks. |

Baseline rows that exist (from the saved GSC slice):

| Query | Window | Page observed | Impressions | Clicks | CTR | Avg. position |
| --- | --- | --- | --- | --- | --- | --- |
| commercial cleaning idaho falls | 2025-05-21 to 2026-09-19 | homepage | 6,864 | 6 | 0.09% | 7.7 |
| commercial cleaning services idaho falls | same | homepage | 1,995 | 2 | 0.10% | 10.8 |
| construction site clean up services idaho falls | 2026-06-21 to 2026-09-20 | query only | 84 | 0 | 0% | 5.0 |
| post construction cleaners idaho falls | same | query only | 78 | 0 | 0% | 5.3 |
| construction site cleaning services idaho falls | same | query only | 70 | 0 | 0% | 4.6 |
| construction cleaning company | same | query only | 42 | 0 | 0% | 36.2 |
| construction clean up cost | same | query only | 30 | 0 | 0% | 53.7 |
| imperial cleaning inc | 2025-05-21 to 2026-09-19 | homepage | 89 | 11 | 12.4% | 3.1 |

Performance baseline, Lighthouse 12.8.2 against the local production build before this change set (simulated mobile unless stated):

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage (mobile) | 85 | 100 | 100 | 100 | 3.6 s | 0 | 240 ms |
| Homepage (desktop) | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |
| /idaho/construction-cleaning/idaho-falls | 99 | 100 | 100 | 100 | 2.2 s | 0 | 30 ms |
| /janitorial-services | 97 | 100 | 100 | 100 | 2.5 s | 0 | 10 ms |
| /resources/post-construction-cleaning-cost | 96 | 100 | 96 | 100 | 2.7 s | 0 | 10 ms |
| /contact | 98 | 100 | 100 | 100 | 2.4 s | 0 | 20 ms |

The homepage mobile LCP is the hero photograph; 85% of the LCP time is image load through the on-demand image optimizer under simulated slow 4G. Lighthouse scores are lab numbers, not field Core Web Vitals.

## 2. Crawl results before changes (local build, 95 URLs)

- Every URL returned 200, one H1, a self-referencing canonical, `index, follow`, Open Graph and Twitter cards with a distinct 1200 by 630 image, `lang="en-US"`, a skip link and at least one click-to-call link.
- No duplicate titles or descriptions. No parse errors in JSON-LD. No image without an alt attribute.
- Redirects verified: www to apex, trailing slashes, legacy WordPress URLs, legacy city URLs, `/apply`, `/industries`, `/blog/*`. Unknown URLs, invalid city and service combinations and unknown preview filenames return 404. `/admin` is 404 and `/api/contact` rejects GET.
- `robots.txt` allows all agents with the same four exclusions, and links the sitemap. `llms.txt` and `llms-full.txt` are generated from the same registry as the sitemap and carry the canonical NAP.
- Main content, FAQs and facts are in the server HTML on every template except one: the homepage FAQ answers (see finding 1).

## 3. Findings and dispositions

Severity reflects expected impact on qualified traffic, citations or conversions.

| # | Severity | Finding | Evidence | Disposition |
| --- | --- | --- | --- | --- |
| 1 | High | Homepage FAQ answers were not in the server HTML. The accordion unmounted closed panels, so the FAQPage JSON-LD claimed seven answers that a crawler without JavaScript never saw. | No-JS fetch of `/` contained each answer only inside the JSON-LD script. | Fixed. The homepage FAQ now uses the same native details and summary pattern as every other page, so all answers are in the server HTML and closed until opened. |
| 2 | High | Homepage snippet carried no geography and no commercial term although the homepage is the page Google shows for "commercial cleaning idaho falls" (6,864 impressions, 0.09% CTR). | Saved GSC rows; previous title "Construction Cleanup & Cleaning". | Fixed within owner rules: title now "Construction Cleanup & Commercial Cleaning", description names Idaho and Utah and the Idaho Falls team, hero copy names the coverage and headquarters, and the homepage now links to the Idaho Falls commercial page so that query has a clear local destination. City names stay out of the homepage title and keywords as the owner directed. |
| 3 | Medium | Idaho Falls construction queries with page-one positions and zero clicks use "construction site cleanup" wording that did not appear on the city pages. | 84 and 70 impressions at positions 5.0 and 4.6. | Fixed. City construction descriptions and the hero subtitle now say "construction site cleanup and post-construction cleaning" in natural sentences, for all 24 construction city pages. |
| 4 | Medium | Two Utah city titles exceeded 60 characters (65 and 67). | Crawl title lengths. | Fixed by dropping the state abbreviation on those two titles only. |
| 5 | Medium | `/construction-cleaning` and `/commercial-cleaning` had Service schema but no WebPage or BreadcrumbList and no visible breadcrumb, unlike every other money page. | Crawl of JSON-LD types. | Fixed. Added visible breadcrumb, WebPage and BreadcrumbList, and a `serviceType` value. |
| 6 | Medium | `/service-areas`, `/service-areas/idaho` and `/service-areas/utah` had no page-level schema or breadcrumb. | Crawl of JSON-LD types. | Fixed. Added visible breadcrumb, CollectionPage and BreadcrumbList. |
| 7 | Medium | Phone, SMS and email clicks were only measured from the mobile contact bar. Header, hero, sidebar and footer call links fired nothing, although the measurement plan names phone clicks as a key event. | Code review of `components/*` and `lib/analytics.ts`. | Fixed. One consent-gated delegated listener now reports `click_phone` (phone and SMS) and `email_click` sitewide without sending personal data. Mark `click_phone` and `generate_lead` as key events in GA4 (owner task). |
| 7b | Medium | The mobile contact bar (one-tap call plus quote) never appeared. Its visibility check treated the sticky header's quote button as an in-view CTA, and that button is in view at every scroll position on mobile. | Playwright on a 390 px viewport: bar absent after scrolling 1,200 px on a guide page and 1,400 px on a city page; only the header button was in view. | Fixed. Header controls are ignored by the check, so the bar appears after the hero when no in-content CTA is visible. |
| 8 | Low | The decorative "A clear scope. A dependable team." aside in the internal hero was an H2 on about 60 pages, so it was the first H2 in every outline. | Crawl of headings. | Fixed. Rendered as styled text, not a heading. |
| 9 | Low | `/about` title was 32 characters and generic ("About Us"). | Crawl title lengths. | Fixed: "About Imperial Cleaning Inc | Idaho Falls Cleaning Company". |
| 10 | Low | `Referrer-Policy` differed between `next.config.js` and the middleware; no HSTS header at the application layer. | Header inspection. | Fixed. Values aligned; `Strict-Transport-Security: max-age=31536000` added (no subdomains, no preload). |
| 11 | Low | Sitemap `lastmod` for the changed pages. | Publication rules. | Updated to 2026-09-29 for the homepage and the 24 construction city pages whose visible copy changed. |
| 12 | Info | `robots.txt` uses one wildcard group instead of naming AI crawlers. | `app/robots.ts` and its regression test. | Not changed. All agents are allowed, and the single-group design is tested and documented. Naming GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended explicitly is optional and can be added later if a crawler log shows them backing off. |
| 13 | Info | Homepage mobile LCP of 3.6 s in the lab is image load through the on-demand optimizer. | Lighthouse phases. | Not changed. The image is preloaded, `fetchpriority="high"`, WebP and responsive. Field data is needed before trading quality for size. |
| 14 | Info | The `terms-of-service` page skips from H2 to H4 in one legal section. | Crawl of headings. | Not changed. Legal copy is out of scope. |
| 15 | Info | Guides carry the organization as author, not a named person. | Article schema. | Owner decision. A named author with real credentials strengthens E-E-A-T; do not invent one. |
| 16 | Info | Review, rating and certification claims. | Reviews are quoted verbatim with source links; no AggregateRating is emitted; "insured and bonded" appears in owner-approved copy. | Unchanged. Keep it that way until a real review feed or documents are wired. |

Keyword and intent map: each of the 95 pages already owns a distinct intent (service hub, phase, industry, cost, guide, state hub, city and service). Overlap was checked between `/office-cleaning`, `/office-building-cleaning`, `/janitorial-services` and `/property-management-cleaning`; they target different buyers (workspace, multi-tenant building, recurring programme, property manager) and no consolidation is recommended. No new pages were created.

## 4. What changed in source

| File | Change |
| --- | --- |
| `data/search-listings.json`, `data/service-priorities.ts` | Homepage title, description and preview label; about title; two Utah titles; 24 construction city descriptions. |
| `components/hero-section.tsx` | Hero description names Idaho and Utah coverage and the Idaho Falls headquarters. |
| `components/pages/home-client.tsx` | FAQ rendered with native details and summary so answers are server rendered; commercial Idaho Falls link in the coverage section. |
| `components/contextual-contact.tsx` | Sticky header controls no longer suppress the mobile contact bar. |
| `components/pages/service-location-client.tsx` | Construction subtitle wording. |
| `components/pages/service-overview.tsx`, `components/pages/coverage-overview.tsx` | Visible breadcrumbs plus WebPage, CollectionPage and BreadcrumbList JSON-LD. |
| `components/internal-hero-section.tsx`, `app/redesign.css` | Aside tagline is no longer a heading; matching styles; style for the new homepage note. |
| `components/analytics-consent.tsx` | Sitewide, consent-gated phone, SMS and email click measurement. |
| `next.config.js` | Referrer policy aligned; HSTS header. |
| `data/publication-rules.json`, `tests/master-audit/construction-priority.test.mjs` | Publication dates for changed pages and the pinned homepage date in the regression test. |

## 5. Verification (local production build of this change set)

- `next build` on Next.js 14.2.35 completed cleanly (227 static routes including 95 HTML pages and 95 preview images).
- Typecheck passed. `discovery:check`, `links:generate` (manifest unchanged), `audit:links` (0 broken links) and `audit:nap` (0 warnings) passed.
- Regression suites: 207 master-audit tests, 330 search-appearance checks, 113 website-update checks and the isolated UI interaction checks all passed.
- Rendered crawl of all 95 sitemap URLs after the change: every page 200, one H1, self-referencing canonical, `index, follow`, no duplicate titles or descriptions, no JSON-LD parse errors, no image without alt text. The repeated "A clear scope" H2 went from 54 pages to 0. The homepage HTML now contains all seven FAQ answers inside native `details` elements (closed by default). `/construction-cleaning`, `/commercial-cleaning`, `/service-areas` and both state hubs now emit WebPage or CollectionPage plus BreadcrumbList and render a visible breadcrumb. Response headers include `Strict-Transport-Security: max-age=31536000` and `Referrer-Policy: strict-origin-when-cross-origin`.
- Playwright (Chromium, 390 px mobile and 1366 px desktop): the city page CTA opens `/contact` with service and city preselected; step 1 to step 2 works; a submission that the server rejects shows the error, keeps every entered value and offers the phone number; the homepage FAQ opens one answer at a time; the mobile contact bar now appears after scrolling on guide and city pages and never on desktop. The only browser console errors were the environment blocking Google's preferred-source script, which loads normally in production.
- Contact API with the production origin: valid payload returns 503 with the "temporarily unavailable" message when no email provider key is configured (expected locally), invalid payload returns 400 with per-field messages, a foreign origin returns 403.
- Lighthouse 12.8.2 mobile after the change: homepage 97 performance (was 85; LCP 2.5 s, TBT 30 ms, CLS 0), Idaho Falls construction page 97, `/construction-cleaning` 95, all with 100 accessibility, best practices and SEO. The homepage gain comes from removing the accordion JavaScript from the FAQ.

Not verified here: live deployment, Google indexing, selected snippets, favicon display, rankings, AI citations, inbox delivery, GA4 event receipt and conversion lift.

## 6. Owner and external actions (cannot be completed from the repository)

1. Fix the failed Replit publish first. Open the Replit deployment log for deployment a146a23c, resolve the build or start failure, then publish the merged `main`. Then run `node scripts/check-live-search.mjs`. Confirm the live homepage title, the FAQ answers in view-source, the new hub schema and the HSTS header.
2. Google Search Console: verify the property, confirm the sitemap shows "Success", export the last 16 months of queries and pages, and request indexing for the pages changed here. Record the counts of indexed versus "Discovered, currently not indexed" URLs.
3. GA4: mark `generate_lead` and `click_phone` as key events. Confirm the events arrive after the analytics consent is granted.
4. Bing Webmaster Tools: verify the site, submit the sitemap, and confirm IndexNow submissions succeed after deploy.
5. Google Business Profile: confirm the primary category (Commercial cleaning service or Janitorial service), add Construction cleaning as a service, confirm hours match the site (Mon to Fri 8 to 5, Sat 9 to 1), confirm the website field is the apex HTTPS URL, and replace the `share.google` short link in `data/business-info.ts` with the full Google Maps listing URL once it is known.
6. Confirm the Facebook, Instagram and LinkedIn URLs in `app/layout.tsx` resolve to owned profiles; remove any that do not.
7. Ahrefs: the connected plan does not cover Site Explorer or Search Console reporting; either upgrade or supply exports.
8. Reviews and proof: keep adding verbatim Google reviews with dates to `data/reviews.ts`; collect permissioned project photos and one construction case study so city pages can carry real local proof.

## 7. Follow-up measurement

Day 0 is the successful deployment date, not this commit.

| Metric | Source | Compare |
| --- | --- | --- |
| Indexed pages and coverage states for the 95 URLs | GSC Pages report | Day 0 versus day 28 |
| Impressions, clicks, CTR and position for the homepage on "commercial cleaning idaho falls" and "commercial cleaning services idaho falls" | GSC, query and page, same device mix | Prior 28 days versus days 7 to 35 after deploy, then 90 days |
| Clicks on the Idaho Falls construction queries listed above | GSC | Same windows |
| Clicks and position for `/idaho/commercial-cleaning/idaho-falls` | GSC page report | Same windows |
| `generate_lead`, `click_phone`, `email_click` counts by landing page | GA4 | Same windows |
| Qualified quote requests, walkthroughs and won work | CRM or inbox log | Monthly |
| AI referrals | GA4 sessions from chatgpt.com, perplexity.ai, copilot.microsoft.com, claude.ai, gemini.google.com | Monthly |
| Field Core Web Vitals | GSC Core Web Vitals report or CrUX | Monthly |

No ranking, citation, search appearance or conversion rate is promised. The changes are an observational test on a low-volume property; extend the window when samples are small.
