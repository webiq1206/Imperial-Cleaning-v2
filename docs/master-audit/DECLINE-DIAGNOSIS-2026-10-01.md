# Organic and AI visibility: diagnosis, fixes and measurement plan

Date: October 1, 2026. Property: sc-domain:imperialcleaninginc.com (Search Console API, final data through September 28). GA4 property 375332468, hostname imperialcleaninginc.com only. Live site fetched from an external sandbox on October 1. Machine-readable baseline: [decline-baseline-2026-10-01.json](./decline-baseline-2026-10-01.json).

## 1. What the data actually shows

### Clicks are flat, not falling

| Month | Clicks | Impressions | Avg position |
| --- | ---: | ---: | ---: |
| 2025-07 | 27 | 12,973 | 47.1 |
| 2025-08 | 18 | 13,739 | 57.8 |
| 2025-09 | 0 | 228 | 18.8 |
| 2025-10 | 35 | 5,305 | 17.8 |
| 2026-01 | 31 | 3,927 | 15.8 |
| 2026-04 | 25 | 5,089 | 18.1 |
| 2026-05 | 27 | 7,560 | 19.4 |
| 2026-06 | 16 | 5,692 | 24.7 |
| 2026-07 | 19 | 5,328 | 28.1 |
| 2026-08 | 19 | 6,815 | 20.8 |
| 2026-09 | 29 | 3,817 | 26.2 |

Google clicks have stayed between 16 and 35 a month for sixteen months. July to September 2026 produced 67 clicks against 68 in April to June and 45 in July to September 2025. GA4 agrees: Google organic sessions rose from 8 to 13 a month in mid 2025 to 20 to 42 a month in 2026.

### The impression decline is mostly the loss of worthless impressions

**Confirmed: summer 2025 impressions were inflated by a hacked WordPress site.** Page rows for July to September 2025 include `/no-deposit-bonus-alle-casino-bonussen-zonder-storting-in-nederland-2025/` (3,016 impressions), `/greatest-playing-websites-2025/`, `/home-ultimate-online-casino-and-jili-slots-betting-platform/` and other casino URLs, plus national-intent pages such as `/daycare-cleaning-services/` (3,712 impressions at position 70) and `/car-dealership-cleaning/` (3,245 at position 81). Spam queries alone carried 2,900 impressions that quarter. The site then recorded zero impressions from August 27 to September 29, 2025, consistent with the WordPress to Next.js migration and reindexing. None of that volume was recoverable or wanted.

**Confirmed: the spring 2026 impression spike came from one query and did not convert.** "commercial cleaning idaho falls" went from roughly 80 to 130 impressions a week in March and April to 786, 1,253 and 540 in the three weeks from April 27, then 390 and 445 in mid June, then back to 15 a week in September. Over April to June it recorded 4,117 impressions and one click on the homepage. Because the homepage result shows sitelinks, `/about`, `/contact`, `/service-areas/idaho` and `/service-areas/utah` each recorded another 1,728 impressions for the same query at the same position. Volume of that size for a single local query in a metro of about 150,000 people, with a flat position and no clicks, is not human demand. The most likely source is automated rank checking during that period. Which tool ran it is not established.

**Confirmed: 2,000 of the 16,000 impressions in the last quarter were for Post Falls and Coeur d'Alene**, cities 600 miles from the service area, where the homepage ranks between 30 and 70. These produce no clicks and are not a loss worth chasing.

### The one real decline: core Idaho Falls rankings slipped

| Query | 2025 Q3 | 2026 Q2 | 2026 Q3 |
| --- | ---: | ---: | ---: |
| janitorial services idaho falls | position 4.9 (531 impr.) | 8.6 (285) | 13.8 (199) |
| commercial cleaning idaho falls | 6.3 (338) | 7.7 (4,117) | 8.1 (867), 9.7 to 12.5 in September weeks |
| office cleaning idaho falls | 6.1 (286) | 9.3 (105, "...id" variant) | not in the top 25 queries |

The homepage is the only page Google ranks for these queries, and its title has never named Idaho Falls. Organic competitors on the first page on October 1 were Jani-Serv, Oxi Fresh, SERVPRO, ServiceMaster and Paul Davis. Backlink authority could not be measured (the Ahrefs plan on this account rejects Site Explorer calls).

### Indexing was poor on September 29 and is recovering

On September 29, 28 of 95 sitemap URLs were indexed, 48 were "Discovered - currently not indexed", 13 were unknown to Google and 5 had Google selecting `https://www.747live.bet/` as canonical. On October 1, all five of those URLs were re-inspected: each is now "Submitted and indexed" with its own canonical, crawled that morning after indexing requests recorded in [docs/growth-playbook/execution-2026-10-01.md](../growth-playbook/execution-2026-10-01.md). `/idaho/construction-cleaning/idaho-falls` and `/idaho/commercial-cleaning/idaho-falls` are also indexed now. `/contact`, `/about` and `/service-areas/idaho` are still not indexed. The sitemap was last read on September 29 with 95 URLs and no errors. Google also still holds trailing-slash variants that returned 200 as late as August 17; they now redirect (308), which is correct.

The city pages themselves share roughly 95 percent of their body text and were reachable only from hub, sitemap and sibling pages (about 9 internal sources each, none sitewide). That is the usual profile for "Discovered - currently not indexed" on a low-authority domain.

### AI referrals are rising, not falling

GA4 sessions from chatgpt.com, copilot.com and similar assistants: 0 to 1 a month through mid 2025, then 2 in March 2026, 3 in July, 3 in August and 5 in September. Small, but the direction is up. Crawlers are not blocked, llms.txt exists and the entity data is consistent, so no corrective change was needed.

### Tracking accuracy: two confirmed measurement failures

1. **GA4 collapsed on September 24.** Daily sessions ran 1 to 27 through September 23, then 0 on September 24 to 28, 2 on September 29 and 1 on September 30. The September 24 deploy shipped opt-in analytics consent (`components/analytics-consent.tsx`, `lib/analytics-runtime.ts`). Google Analytics now loads only after a visitor clicks "Allow analytics", so roughly 90 percent of sessions are no longer recorded and no conversion rate can be computed. A code change to a default-on, opt-out model (with Global Privacy Control honored) was prepared in this session but was blocked by the environment's permission policy as a privacy weakening, so it is left as a decision for the owner. See section 4.
2. **Bot traffic in GA4.** 137 of the quarter's homepage sessions came from Singapore with zero engagement, almost certainly a hosted preview or monitor. Segment by United States or by Idaho and Utah before reading any session total.

### Conversion: the quote form has never delivered a lead in this repository's history

`/api/contact/availability` returned `{"available":false}` on October 1. The route requires `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`; neither is set in production. Before September 21 the route only logged submissions to the console and returned success without sending anything (see commit 70a4ce1). GA4 shows no `generate_lead` or `click_phone` events in September. Every organic visitor who tried the form since at least June has received either a false success or the "temporarily unavailable" panel.

## 2. Causes, separated

| Status | Finding |
| --- | --- |
| Confirmed | Year-over-year impression loss is the removal of hacked and national-intent pages, not lost local visibility. |
| Confirmed | Quarter-over-quarter impression loss is the end of a bot-driven spike on one query plus sitelink multiplication. |
| Confirmed | Rankings for the three core Idaho Falls queries have slipped since 2025; the homepage is the ranking page and does not name the city. |
| Confirmed | 48 city pages were unindexed on September 29 and are thin and weakly linked; indexing began recovering after the September 29 sitemap refresh. |
| Confirmed | GA4 lost about 90 percent of sessions on September 24 because analytics became opt-in. |
| Confirmed | The quote form cannot deliver because no email provider is configured; it never delivered before either. |
| Confirmed | AI referrals are rising slightly. |
| Hypothesis | The April to June impression spike came from a rank tracker or grid scan; the operator is unknown. |
| Hypothesis | Google Business Profile or map pack changes explain part of the local slip; GBP data was not accessible in this session. |
| Confirmed elsewhere | Search Console Manual Actions and Security Issues both showed "No issues detected" on October 1 (growth-playbook execution record). |
| Not verifiable here | Backlink profile (Ahrefs plan), Core Web Vitals (PageSpeed quota exhausted). |

## 3. Changes made in this branch

| Change | Files | Evidence and expected effect |
| --- | --- | --- |
| Homepage title now "Construction & Commercial Cleaning, Idaho Falls \| Imperial Cleaning" | `data/service-priorities.ts`, `data/search-listings.json`, `data/publication-rules.json`, `tests/master-audit/construction-priority.test.mjs` | The homepage is the only page ranking for the Idaho Falls commercial and janitorial queries that slipped. Google's title-link guidance asks for descriptive titles that match the page's primary subject; local ranking-factor surveys consistently place the service and city in the title among the strongest on-page signals. This overrides the earlier preference for a geography-free homepage title. Reverting is a one-line change in two files. |
| Footer block linking all 24 city construction pages from every page | `components/layout/footer.tsx`, `app/construction-priority.css` | Google documents "Discovered - currently not indexed" as a crawl-priority outcome and internal links as its main on-site signal. Each city page gains 95 inbound links instead of about 9. Links are real text, visible, and one click from everywhere. |
| Quote delivery accepts SendGrid as a fallback provider | `lib/contact-delivery.ts`, `app/api/contact/route.ts`, `app/api/contact/availability/route.ts`, `scripts/check-website-updates.ts`, `tests/master-audit/contact-controls.test.mjs` | The Replit workspace lists the SendGrid integration. If `SENDGRID_API_KEY` plus `CONTACT_FROM_EMAIL` (or `SENDGRID_FROM_EMAIL`) exist in production, the form starts delivering on the next deploy without further code. Resend remains preferred when configured. Ten new tests cover resolution, payload, acceptance codes and receipt validation. |
| Baseline and this diagnosis | `docs/master-audit/` | Fixed reference for the follow-up comparisons below. |

Validation completed on this branch: TypeScript check, discovery and link generators (no manifest drift), link and NAP audits, 220 regression tests, 114 website checks, UI component checks, 330 search-appearance checks and a full production build. The built homepage HTML carries the new title and the footer city links on every page.

Not changed on purpose: no city page was deleted or noindexed, no content was fabricated, no schema was added, no redirects were touched, and the construction-first positioning and H1 are intact.

## 4. Owner actions that this branch cannot do

1. **Configure email delivery (highest value).** In Replit Secrets set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (a verified sender), or `SENDGRID_API_KEY` and `CONTACT_FROM_EMAIL`. Then submit one labeled test quote and confirm it arrives at service@imperialcleaninginc.com. Until this is done, organic improvement cannot produce leads from the form.
2. **Decide the analytics default.** The site serves Idaho and Utah, where opt-in consent for first-party analytics is not required. Keeping opt-in means GA4 will keep recording about 10 percent of sessions and conversion rates will stay unmeasurable. If you approve default-on with opt-out and GPC respect, the change touches `lib/analytics-runtime.ts`, `components/analytics-consent.tsx` and the privacy policy wording, and takes under an hour including tests.
3. **Deploy this branch** through the normal Replit publish. Day 0 for measurement is the publish date.
4. **Google Business Profile.** Confirm the primary category, service area and that the website link is the apex domain. GBP drives the map pack that sits above the homepage result on every core query.

## 5. Measurement plan and decision rules

Compare equal windows, same weekdays, United States only, with the "commercial cleaning idaho falls" query and Post Falls and Coeur d'Alene queries reported separately so bot or irrelevant volume cannot mask the result.

| When | Check | Decision |
| --- | --- | --- |
| Day 0 to 7 | Live title, footer links and availability endpoint on the public domain; URL inspection of the two Idaho Falls pages and `/contact` | If the deployed HTML does not match the branch, fix the deploy before anything else. |
| Day 14 | Indexed count of the 48 city pages versus 23 on September 29; first-page positions for the four core queries | If fewer than 30 city pages are indexed, the next step is consolidating the lowest-value cities into the state hubs rather than more links. |
| Day 28 | Clicks and positions for the core Idaho Falls queries versus the preceding 28 days; GA4 sessions per day; accepted quote requests | If core positions have not improved by at least one place on average, test moving the Idaho Falls commercial intent onto `/idaho/commercial-cleaning/idaho-falls` with a stronger page and a homepage link in the hero, instead of further title changes. |
| Day 56 | Qualified leads by source, AI assistant sessions, review count | If accepted requests are still zero with the form live, the quote journey itself is the next audit target. |

A scheduled check-in on the 1st and 15th of each month (separate from the weekday growth automation recorded in docs/growth-playbook/AUTONOMOUS-GROWTH.md) re-pulls these numbers, compares them to the baseline file, and either records "no change" or opens the next piece of work. The first check-in that finds a deployment mismatch or a still-unavailable form reports it immediately.
