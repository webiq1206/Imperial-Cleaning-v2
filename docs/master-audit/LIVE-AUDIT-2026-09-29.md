# Imperial Cleaning: live SEO, AEO, GEO and conversion audit

Audit date: September 29, 2026. Website: https://imperialcleaninginc.com. Repository: webiq1206/Imperial-Cleaning-v2. Source baseline: 2c21fc59031fd5403cc9145d01abbca492c66feb.

This report adds live crawling, authenticated performance data and implementation to the earlier source audit. It does not relabel previously completed work as new. All 95 sitemap pages were fetched and inspected through Google Search Console. Source changes have passed local validation. Production publication and successful quote delivery remain open.

## Priorities and decisions

| Priority | Verified evidence | Action and status |
| --- | --- | --- |
| P0 | An explicitly labeled production quote test returned “Online requests are temporarily unavailable.” No accepted receipt or confirmation appeared. | Added a configuration-readiness check that presents call and email options before collecting details when delivery is unconfigured. Added an email link on submission errors. Actual delivery repair is blocked by hosting access. |
| P0 | Five Google inspections selected an unrelated gambling domain as canonical, from August 28 or September 2 crawls. | Checked current responses, source, redirects and canonicals. Current pages are correct. Preserve URLs; investigate historical hosting/WordPress compromise or routing, review GSC Security Issues and Manual Actions, and request recrawling of the five URLs after a live test. Cause and recovery are not established. |
| P1 | GA4 has no generate_lead key event; no contact/funnel events appeared in either 28-day window. Current analytics source also replaces the external referrer with an empty string. | Added controlled form start/error, quote, email and SMS events; preserved safe search/AI referrer origins after consent. GA4 key-event creation remains blocked by insufficient analytics.edit scope. |
| P1 | Only 28 of 95 submitted URLs are reported indexed. 48 are discovered but not indexed, 13 unknown and one crawled but not indexed. | Correct crawlable SSR content, internal links and sitemap are already live. No blanket rewrites or URL churn. Monitor recrawling and focus proof/content work on primary service and real service-area pages. |
| P2 | Contact H1 did not describe the page’s action. Service-terms contact subheadings skipped a level. | Changed H1 to “Request a free cleaning quote.” Changed the two service-terms contact subheadings from H4 to H3. |
| P2 | Useful local and service-specific content exists, but original project evidence and named expertise are limited. | Request owner-approved project examples, original photographs, reviewer identity and actual scope/outcomes before publishing. No invented jobs, credentials, locations or results. |

Replit’s cloud-browser verification remained after one reload. No hosting secret or deployment was changed. Guidance for that limitation: https://help.openai.com/articles/20001280-using-cloud-browser-in-chatgpt#when-a-website-blocks-the-task.

## Performance baseline

Equivalent complete 28-day windows: August 30 to September 26, 2026 versus August 2 to August 29, 2026. GSC final data, search type web. GA4 reporting timezone is America/Boise. These are observations, not evidence of a treatment effect.

| Metric | Previous | Recent | Interpretation |
| --- | ---: | ---: | --- |
| Google clicks | 18 | 30 | +66.7%, small absolute sample |
| Google impressions | 6,376 | 3,954 | -38.0% |
| Google CTR | 0.282% | 0.759% | +0.476 percentage points |
| Google average position | 20.82 | 25.88 | Worse aggregate rank; changing query mix matters |
| Bing clicks | 2 | 3 | Small sample |
| Bing impressions | 48 | 98 | Small sample |
| GA4 sessions, summed source/device rows | 97 | 144 | Acquisition attribution is incomplete |
| Google organic sessions | 19 | 33 | Does not establish qualified leads |
| ChatGPT/Copilot sessions | 2 | 4 | Recent: ChatGPT 3, Copilot 1; does not establish citations |
| Recorded key events | 0 | 0 | Measurement and delivery gaps prevent a conversion-rate conclusion |
| Page views | 102 | 157 | Event counts, not unique visitors |

GA4 session_start event counts were 98 and 144; this differs from the session metric in the earlier window. Do not mix event counts and session metrics. Recent homepage landing sessions were 88, with 22 engaged sessions; contact landing sessions were six, all engaged. These are landing sessions, not a complete form funnel.

Recent Google device data: desktop 18 clicks/2,989 impressions, CTR 0.602%, position 27.07; mobile 12/955, CTR 1.257%, position 22.17; tablet 0/10. US search traffic contributed all 30 clicks and 3,711 impressions.

GA4 location segmentation shows Singapore 81 sessions with zero engaged sessions, versus 55 sessions and one engaged session previously. This is outside the stated service area and warrants separate reporting; location and engagement alone do not prove bots. Recent Idaho sessions were eight, Utah four and Wyoming three. Use target-region, source and engagement segments for qualification rather than celebrating total sessions.

| Disclosed Google query segment | Previous clicks / impressions | Recent clicks / impressions |
| --- | ---: | ---: |
| Branded, containing “imperial” | 5 / 316 | 7 / 270 |
| Nonbranded | 2 / 4,037 | 3 / 2,417 |
| Average query position 1–3 | 0 / 101 | 4 / 149 |
| Average query position over 3 through 10 | 7 / 2,358 | 1 / 491 |
| Average query position over 10 through 20 | 0 / 678 | 4 / 665 |
| Average query position over 20 | 0 / 1,216 | 1 / 1,382 |

Anonymized queries are omitted from GSC query rows, so these sums do not equal property totals. Position buckets use each query’s average position, not every individual impression’s rank. “Imperial” is a reproducible brand filter, not a perfect identification of business intent.

## Search opportunities and content decisions

Recent home performance was 22 clicks/2,658 impressions; the school janitorial checklist contributed six clicks/72 impressions. Preserve the useful checklist, downloadable worksheets and contextual quote links.

| Page | Recent impressions / clicks | Average position | Decision |
| --- | ---: | ---: | --- |
| /office-cleaning | 166 / 0 | 37.37 | Retain the specific workspace intent. Rank and demand mix limit CTR conclusions. |
| /commercial-cleaning-cost | 161 / 0 | 61.68 | Preserve scope-based pricing explanation. Add real quote examples only with approved evidence. |
| /resources/post-construction-cleaning-cost | 144 / 0 | 47.24 | Preserve educational estimate inputs and link to the construction quote. Do not invent unit prices. |
| /car-dealership-cleaning | 132 / 0 | 47.17 | Preserve facility-specific scope; add actual dealership evidence if approved. |
| /contact | 130 / 0 | 9.07 | Clearer H1 and contact alternatives implemented; repair delivery first. |
| /idaho/commercial-cleaning/nampa/ | 102 / 0 | 21.26 | Historical slash variant already redirects to the canonical URL. Monitor consolidated performance. |
| /construction-cleaning/rough-clean | 67 / 0 | 9.06 | Prioritize historical canonical recovery, not title experimentation. |

The exact query “commercial cleaning idaho falls” fell from 329 impressions/one click to 50 impressions/zero clicks while average position moved from 9.75 to 10.22. The impression decline is larger than the rank change, so do not attribute it entirely to title quality. Some local queries show the home, about and state pages together at almost identical positions and counts, consistent with grouped search appearances or sitelinks. That does not establish harmful cannibalization.

Office cleaning addresses workstations, meeting rooms and break rooms. Office-building cleaning addresses shared lobbies, elevator landings, multi-floor cores and tenant coordination. Their visible scope differs, so neither was merged. The homepage remains the brand/service overview; the construction hub owns post-construction service selection. The owner’s existing preference for a homepage title without geography was preserved.

All 95 live pages have unique titles and descriptions, one H1, and descriptive canonical URLs. No verified title defect justified mass replacement. A retrieved Imperial listing used an older/different title (“Imperial Cleaning: Commercial & Construction Cleaning”) from the current HTML. A single result cannot establish a systematic Google rewrite; monitor localized mobile and desktop SERPs after recrawl. Search engines control displayed titles and snippets.

The appended page map identifies a distinct intent, primary term, supporting phrases, question and next step for every indexable URL. Terms are based on content, observed queries and business relevance. No paid keyword-volume or difficulty database was available, so the map does not claim quantified search volume or financial value.

## Technical SEO, structure and schema

All 95 sitemap URLs returned HTTP 200 with correct self-canonicals. The sitemap was read successfully by Google on September 29 at 14:03 UTC, with 95 submitted URLs, zero reported errors and zero warnings. Its reported indexed field was not used as a coverage total; individual URL inspections supply the actual baseline. HTTP and www variants redirect to HTTPS apex. Trailing slashes normalize. Unknown URLs and invalid location routes return real 404s. /admin returns 404 with noindex protections.

All 113 distinct same-origin linked page/resource targets were checked: 95 public pages, 17 downloadable worksheets and the XML sitemap. No broken target or orphan sitemap page was found. The worksheets return 200 and noindex. Private APIs/admin routes remain excluded. No pagination or translated alternatives require pagination changes or hreflang. Query-bearing quote URLs retain the canonical contact path.

Bing reported 16 redirects and four 404s, including an obsolete WordPress image, legacy et_core_page_resource URLs and /main. They are not current sitemap or navigation targets. No evidence supported redirecting unrelated dead URLs wholesale to the homepage. Recover a relevant historic asset only if its value or incoming links are demonstrated.

All JSON-LD parsed. Existing Organization/ProfessionalService and WebSite nodes occur sitewide with shared entity identity; BreadcrumbList occurs on 93 pages, WebPage on 70, Service on 66, FAQPage on 19, Article on 17 and HowTo on 11. All 74 marked-up FAQ questions and answers matched visible main content. GSC’s sampled indexed pages reported valid Breadcrumbs. This is not a new full Google Rich Results Test certificate and does not promise a rich result. No new schema was needed, and no reviews, aggregate ratings, qualifications or location entities were fabricated.

Critical historical canonical findings:

| URL | Last reported crawl | Current check |
| --- | --- | --- |
| /construction-cleaning/rough-clean | September 2 | 200, cleaning content, self-canonical |
| /resources/what-does-a-day-porter-do | September 2 | 200, cleaning content, self-canonical |
| /utah/commercial-cleaning/layton | September 2 | 200, cleaning content, self-canonical |
| /utah/commercial-cleaning/west-valley-city | September 2 | 200, cleaning content, self-canonical |
| /utah/construction-cleaning/ogden | August 28 | 200, cleaning content, self-canonical |

Google selected https://www.747live.bet/ for all five. Ordinary and Googlebot-user-agent requests with a Google referrer now return the expected pages, and the unrelated domain was absent from reviewed source/current responses. User-agent simulation is not a Google live inspection and cannot rule out IP-conditional behavior. Hosting logs, old WordPress files, DNS history, Search Console Security Issues/Manual Actions and a genuine live inspection are still needed to determine the cause. Google documents server misconfiguration, malicious canonical injection and other possible causes; the observation alone does not prove an active breach. Do not redirect these valuable URLs to the unrelated domain or delete them.

## AEO, GEO, expertise and local relevance

Answers, service phases, scope tables, native disclosure FAQs and downloadable planning tools are already server-rendered. Clear business identity, phone, service email and consistent local information support entity understanding. Global robots rules allow public search crawling while excluding private routes. No special AI blocking rule was found. OpenAI search crawling and training crawling are distinct controls; no crawler permission was changed without a business reason. Existing llms.txt files were retained as optional aids, not a ranking or citation mechanism.

Google’s current AI-search guidance centers on normal indexing, snippet eligibility and useful content; it does not require a special AI schema or new machine-text files. Four identifiable AI referral sessions are measurable traffic, not proof that a particular answer cited Imperial. Google AI feature traffic is included within normal GSC web reporting and cannot be cleanly separated here.

Business identity was matched by website and phone to the public Google Maps listing, not to the similarly named Imperial Cleaners LLC. Public listing: Imperial Cleaning Inc, (208) 520-3202, Janitorial service, 5.0 with 42 reviews at inspection. Hours were Monday–Friday 8–5, Saturday 9–1, Sunday closed, matching the contact page. The site’s address is 2653 Clarence Pl, Idaho Falls, ID 83402. The public service-area listing did not expose a street address; no map centroid was treated as an office and no extra branch was invented. Ratings fluctuate and were not added to self-serving review schema.

Primary competitor pages reviewed: Moonshine Cleaning and AAA Custodial Services in Idaho Falls. They make local service fit, scope, contact and quote expectations prominent. This supports clear local relevance and a dependable quote journey. It does not justify copying claims, adding unsupported prices or producing more city pages. Imperial already has 48 city/service pages; improve real proof and indexing before expanding them.

GBP management access, authoritative business-citation inventories and a backlink index were unavailable. Remaining external work: verify the actual service-area/category configuration, preserve the canonical website and phone, correct demonstrated citation errors, and seek legitimate contractor/property-manager partner links or local membership citations only where a real relationship exists. No outreach was sent and no paid or manipulative link scheme was proposed.

## Conversion, privacy, accessibility and performance

The desktop production journey was exercised: contextual construction service selection, required city validation, step change, entered details and one labeled QA submission using Imperial’s own public contact details. It failed visibly and retained the details. It did not display a success state. Notification delivery could not be verified. The source requires RESEND_API_KEY and CONTACT_FROM_EMAIL; the observed message is consistent with missing configuration or a server error. Without the hosting environment, the exact cause is not confirmed.

The new availability endpoint exposes only a boolean, uses no-store and noindex, and performs no email send. An explicit false presents phone/email contact options. A failed readiness request leaves the form usable. Readiness is configuration presence, not provider health. Successful form completion still requires the existing accepted provider receipt; analytics never converts failures into leads. Production provider credentials, sender verification and destination inbox checks must be completed before closing P0.

New analytics events transmit controlled labels only, never form values, email addresses, phone values, message text, prompts or query strings. Optional tracking remains consent-gated, respects Global Privacy Control and excludes private/unknown paths. Known search and AI referrers retain only an allowlisted HTTPS origin. Other external referrers remain omitted under the existing privacy approach, so acquisition attribution is still incomplete. Phone clicks are intentions, not completed phone calls; SMS/email clicks likewise are micro-conversions. Only accepted requests should count as generate_lead, with qualified leads confirmed against business records.

GA4’s configured key events were schedule_a_call and purchase; generate_lead was absent. The read-capable connection returned ACCESS_TOKEN_SCOPE_INSUFFICIENT for its creation, and the browser account lacked access to the property. No key event was created. Clarity’s tag was observed after consent, but no connected dashboard/replay data was available to quantify rage clicks or abandonment. Live GA and Clarity identifiers matched source configuration.

Images retain descriptive alt attributes and explicit dimensions; the relevant homepage workspace photograph is preserved. Its Next image output provides responsive sizes. The large fallback src is not evidence that every mobile visitor downloads that size. Existing favicons and social images returned valid image responses. No substantiated image defect justified replacing assets or adding generic stock imagery. No video requiring a transcript was found in the reviewed pages.

Desktop navigation and form layout were visually inspected; source and component checks cover required fields, error associations, focus behavior, mobile CTA conditions and responsiveness rules. Service-terms hierarchy was corrected. A fresh mobile browser journey, screen-reader audit and measured contrast/tap-target sweep were not completed and must not be described as passed. PageSpeed Insights requests for both device modes returned shared-quota HTTP 429, so this run has no fresh Lighthouse score or field LCP/INP/CLS result. Earlier source-audit lab scores are not substituted for live Core Web Vitals. No speculative performance refactor was made.

## Implementation and verification

Changes: contact H1; service-terms heading hierarchy; provider-readiness fallback; clickable error email; clearer confirmation wording; controlled form start/error events; quote/email/SMS click measurement; safe acquisition-referrer preservation. Only the contact content modification date changed. Existing public URLs, metadata strategy, photographs, contact destination and provider-acceptance contract remain intact.

Verification completed: production build; 209 audit tests; 114 website checks, including the endpoint’s no-store/noindex and boolean-only response contract; DOM component checks including the unavailable-state fallback and fail-open readiness behavior; diff whitespace check; full live crawl and historical-canonical response checks. DOM component checks are not real mobile-browser tests. The local HTTP smoke-server could not be reached from a separate execution cell, so that check is not counted as passed.

The repository changes can be reviewed independently of deployment. A Replit publication is still required. After publication, verify the new H1 and availability response on the public domain, test a valid quote once, confirm provider acceptance and actual inbox arrival, check mobile completion, and validate events in GA4 DebugView/realtime. Do not announce a repaired production form until those checks succeed.

## Follow-up comparisons

| When | Compare or verify | Completion criterion |
| --- | --- | --- |
| At actual deployment, D0 | Live HTML, readiness response, quote and inbox, consent states, tracking | Source matches live; successful and failed paths behave truthfully; no personal data in events |
| D0 to D7 | GSC live inspection and recrawl of five external-canonical URLs; primary local service pages; sitemap and Bing | Correct Google-selected canonicals and latest crawl timestamps recorded, not assumed |
| D14 and D28 | All 95 inspection states; indexed subset vs prior baseline | Track state transitions and reasons; investigate persistent gaps before creating more pages |
| First full 28 days after D0 | Compare preceding equivalent 28 days, same weekdays and filters | Page/query/device/country/brand/position-band clicks, impressions and CTR, with low-sample caveats |
| D56 | Repeat qualified acquisition and lead review | Region/source landing sessions, engaged sessions, accepted requests, verified qualified leads, call outcomes and identifiable AI referrals |

Annotate deployment and measurement changes so improved instrumentation is not mistaken for increased demand. Record offered scopes, actual service areas and qualified lead outcomes in business records. No historical backfill of missing conversion events is possible. Avoid repeated indexing submissions as a substitute for fixing content or technical issues. No specific ranking, citation, appearance or conversion lift is promised.

## Official guidance and sources

- Google AI features: https://developers.google.com/search/docs/appearance/ai-features
- Google title links: https://developers.google.com/search/docs/appearance/title-link
- Google canonical troubleshooting, updated August 21, 2026: https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting
- Structured-data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Image guidance: https://developers.google.com/search/docs/appearance/google-images
- OpenAI crawler controls: https://developers.openai.com/api/docs/bots
- GA4 key-event creation and required scope: https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1beta/properties.keyEvents/create
- Competitor source pages: https://moonshine-cleaning.com/ and https://www.aaacustodialservices.com/
- First-party evidence: domain-property GSC reports and 95 URL inspections, GA4 property 375332468, Bing verified site reports, rendered live responses, repository source and test outputs, September 29, 2026.

## Complete page intent and conversion map

The following is an editorial map of the existing pages, not instructions to repeat keywords mechanically. Location pages target genuine service-area intent rather than claiming an office. Supporting phrases and questions are research/editorial targets, not verified volume estimates. Current title, description, canonical, status, indexing state and available page metrics are preserved in the accompanying JSON baseline.

| URL | Intent | Primary term | Supporting phrases | Question target | Next step |
| --- | --- | --- | --- | --- | --- |
| `/` | Brand and service overview | Imperial Cleaning Inc | construction cleanup; commercial cleaning | Which cleaning service fits my project? | Choose service or request quote |
| `/about` | Business credibility | about Imperial Cleaning Inc | Idaho Falls cleaning company; service approach | Who is Imperial Cleaning? | Review scope and request quote |
| `/car-dealership-cleaning` | Service-specific commercial investigation | Car Dealership Cleaning | Showroom Floor Care; Glass Wall & Window Cleaning; Customer Lounge & Waiting Areas; Sales Office & Desk Cleaning; Service Write-Up & Customer Zones; Nightly & Weekend Scheduling; S | What should a car dealership cleaning quote include? | Request scope-specific quote |
| `/commercial-cleaning` | Recurring facility service selection | commercial cleaning Idaho and Utah | janitorial services; facility cleaning schedule | Which recurring cleaning services fit my facility? | Choose scope and request quote |
| `/commercial-cleaning-cost` | Service-specific commercial investigation | Commercial Cleaning Cost & Quotes | Scope Variables We Document; Frequency & Failure-Point Review; Floor Care Project Planning; Day Porter Add-On Pricing; Multi-Site Portfolio Discounts; Written, Scope-Based Quotes;  | What should a commercial cleaning cost & quotes quote include? | Request scope-specific quote |
| `/commercial-floor-care` | Service-specific commercial investigation | Commercial Floor Care: Scope & Planning | Auto-Scrub & Daily Hard-Floor Maintenance; Strip, Wax & Finish Restoration; Burnishing & High-Speed Polishing; Entry Matting & Grit Control Plans; Tile & Grout Deep Cleaning; Floor | What should a commercial floor care: scope & planning quote include? | Request scope-specific quote |
| `/construction-cleaning` | Post-construction service selection | post-construction cleaning services | construction cleanup; rough and final cleaning | Which cleaning phase does my construction project need? | Request construction quote |
| `/construction-cleaning/final-clean` | Service-specific commercial investigation | Final Construction Cleaning | Fine Dust Detail Throughout; Floor Finish & Protection Removal; Restroom & Kitchen Fixture Detail; Interior Glass & Partition Cleaning; Cabinet, Millwork & Appliance Fronts; Trash  | What should a final construction cleaning quote include? | Request scope-specific quote |
| `/construction-cleaning/rough-clean` | Service-specific commercial investigation | Rough Construction Cleaning | Bulk Debris & Scrap Removal; Drywall Dust Control Pass; Floor Sweep & Initial Scrape; Window & Label Removal; Restroom & Core Area Reset; Phase Scheduling With GC Calendar; GC Phas | What should a rough construction cleaning quote include? | Request scope-specific quote |
| `/construction-cleaning/touch-up-clean` | Service-specific commercial investigation | Post-Construction Touch-Up Cleaning | Post-Punch Dust Reset; Glass & Mirror Smudge Removal; Floor Spot Clean & Protection Reset; Restroom & Break Area Refresh; Common Area & Corridor Touch-Up; Rapid Mobilization for Cl | What should a post-construction touch-up cleaning quote include? | Request scope-specific quote |
| `/contact` | Contact and quotation | Imperial Cleaning free quote | cleaning quote; phone and email | How do I request a cleaning quote? | Submit quote or call/email |
| `/day-porter-services` | Service-specific commercial investigation | Day Porter Cleaning Services | Mid-Day Restroom Checks; Spill & Incident Response; Lobby & Elevator Landing Upkeep; Conference Room Reset; Trash Overflow & Common Area Monitoring; Tenant Communication Log; Defin | What should a day porter cleaning services quote include? | Request scope-specific quote |
| `/idaho/commercial-cleaning/ammon` | Local recurring commercial cleaning | Commercial Cleaning Ammon, ID | janitorial services Ammon; facility cleaning Ammon | How do I plan recurring cleaning in Ammon, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/blackfoot` | Local recurring commercial cleaning | Commercial Cleaning Blackfoot, ID | janitorial services Blackfoot; facility cleaning Blackfoot | How do I plan recurring cleaning in Blackfoot, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/boise` | Local recurring commercial cleaning | Commercial Cleaning Boise, ID | janitorial services Boise; facility cleaning Boise | How do I plan recurring cleaning in Boise, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/caldwell` | Local recurring commercial cleaning | Commercial Cleaning Caldwell, ID | janitorial services Caldwell; facility cleaning Caldwell | How do I plan recurring cleaning in Caldwell, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/chubbuck` | Local recurring commercial cleaning | Commercial Cleaning Chubbuck, ID | janitorial services Chubbuck; facility cleaning Chubbuck | How do I plan recurring cleaning in Chubbuck, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/driggs` | Local recurring commercial cleaning | Commercial Cleaning Driggs, ID | janitorial services Driggs; facility cleaning Driggs | How do I plan recurring cleaning in Driggs, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/eagle` | Local recurring commercial cleaning | Commercial Cleaning Eagle, ID | janitorial services Eagle; facility cleaning Eagle | How do I plan recurring cleaning in Eagle, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/idaho-falls` | Local recurring commercial cleaning | Commercial Cleaning Idaho Falls, ID | janitorial services Idaho Falls; facility cleaning Idaho Falls | How do I plan recurring cleaning in Idaho Falls, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/meridian` | Local recurring commercial cleaning | Commercial Cleaning Meridian, ID | janitorial services Meridian; facility cleaning Meridian | How do I plan recurring cleaning in Meridian, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/nampa` | Local recurring commercial cleaning | Commercial Cleaning Nampa, ID | janitorial services Nampa; facility cleaning Nampa | How do I plan recurring cleaning in Nampa, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/pocatello` | Local recurring commercial cleaning | Commercial Cleaning Pocatello, ID | janitorial services Pocatello; facility cleaning Pocatello | How do I plan recurring cleaning in Pocatello, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/rexburg` | Local recurring commercial cleaning | Commercial Cleaning Rexburg, ID | janitorial services Rexburg; facility cleaning Rexburg | How do I plan recurring cleaning in Rexburg, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/rigby` | Local recurring commercial cleaning | Commercial Cleaning Rigby, ID | janitorial services Rigby; facility cleaning Rigby | How do I plan recurring cleaning in Rigby, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/shelley` | Local recurring commercial cleaning | Commercial Cleaning Shelley, ID | janitorial services Shelley; facility cleaning Shelley | How do I plan recurring cleaning in Shelley, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/st-anthony` | Local recurring commercial cleaning | Commercial Cleaning St. Anthony, ID | janitorial services St Anthony; facility cleaning St Anthony | How do I plan recurring cleaning in St Anthony, Idaho? | Request quote with service and city |
| `/idaho/commercial-cleaning/twin-falls` | Local recurring commercial cleaning | Commercial Cleaning Twin Falls, ID | janitorial services Twin Falls; facility cleaning Twin Falls | How do I plan recurring cleaning in Twin Falls, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/ammon` | Local construction cleanup | Post-Construction Cleaning Ammon, ID | construction cleanup Ammon; final cleaning Ammon | How do I plan construction cleanup in Ammon, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/blackfoot` | Local construction cleanup | Post-Construction Cleaning Blackfoot, ID | construction cleanup Blackfoot; final cleaning Blackfoot | How do I plan construction cleanup in Blackfoot, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/boise` | Local construction cleanup | Post-Construction Cleaning Boise, ID | construction cleanup Boise; final cleaning Boise | How do I plan construction cleanup in Boise, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/caldwell` | Local construction cleanup | Post-Construction Cleaning Caldwell, ID | construction cleanup Caldwell; final cleaning Caldwell | How do I plan construction cleanup in Caldwell, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/chubbuck` | Local construction cleanup | Post-Construction Cleaning Chubbuck, ID | construction cleanup Chubbuck; final cleaning Chubbuck | How do I plan construction cleanup in Chubbuck, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/driggs` | Local construction cleanup | Post-Construction Cleaning Driggs, ID | construction cleanup Driggs; final cleaning Driggs | How do I plan construction cleanup in Driggs, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/eagle` | Local construction cleanup | Post-Construction Cleaning Eagle, ID | construction cleanup Eagle; final cleaning Eagle | How do I plan construction cleanup in Eagle, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/idaho-falls` | Local construction cleanup | Post-Construction Cleaning Idaho Falls, ID | construction cleanup Idaho Falls; final cleaning Idaho Falls | How do I plan construction cleanup in Idaho Falls, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/meridian` | Local construction cleanup | Post-Construction Cleaning Meridian, ID | construction cleanup Meridian; final cleaning Meridian | How do I plan construction cleanup in Meridian, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/nampa` | Local construction cleanup | Post-Construction Cleaning Nampa, ID | construction cleanup Nampa; final cleaning Nampa | How do I plan construction cleanup in Nampa, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/pocatello` | Local construction cleanup | Post-Construction Cleaning Pocatello, ID | construction cleanup Pocatello; final cleaning Pocatello | How do I plan construction cleanup in Pocatello, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/rexburg` | Local construction cleanup | Post-Construction Cleaning Rexburg, ID | construction cleanup Rexburg; final cleaning Rexburg | How do I plan construction cleanup in Rexburg, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/rigby` | Local construction cleanup | Post-Construction Cleaning Rigby, ID | construction cleanup Rigby; final cleaning Rigby | How do I plan construction cleanup in Rigby, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/shelley` | Local construction cleanup | Post-Construction Cleaning Shelley, ID | construction cleanup Shelley; final cleaning Shelley | How do I plan construction cleanup in Shelley, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/st-anthony` | Local construction cleanup | Post-Construction Cleaning St. Anthony, ID | construction cleanup St Anthony; final cleaning St Anthony | How do I plan construction cleanup in St Anthony, Idaho? | Request quote with service and city |
| `/idaho/construction-cleaning/twin-falls` | Local construction cleanup | Post-Construction Cleaning Twin Falls, ID | construction cleanup Twin Falls; final cleaning Twin Falls | How do I plan construction cleanup in Twin Falls, Idaho? | Request quote with service and city |
| `/industrial-cleaning` | Service-specific commercial investigation | Industrial Facility Cleaning | Production Floor Dust & Debris Control; Break Room & Locker Room Sanitation; Restroom & Shower Facility Cleaning; Office & Control Room Cleaning; Warehouse-Adjacent Aisle Maintenan | What should a industrial facility cleaning quote include? | Request scope-specific quote |
| `/janitorial-services` | Service-specific commercial investigation | Janitorial Services in Idaho & Utah | Restroom Sanitation & Restocking; Trash & Recycling Removal; Hard Floor & Carpet Maintenance; High-Touch Disinfection; Break Room & Kitchenette Cleaning; After-Hours & Weekend Sche | What should a janitorial services in idaho & utah quote include? | Request scope-specific quote |
| `/manufacturing-facility-cleaning` | Service-specific commercial investigation | Manufacturing Facility Cleaning | Break Room & Cafeteria Cleaning; Locker Room & Shower Maintenance; Production-Adjacent Floor Care; QA & Lab-Adjacent Support Areas; Administrative & Front Office Cleaning; Shutdown | What should a manufacturing facility cleaning quote include? | Request scope-specific quote |
| `/medical-office-cleaning` | Service-specific commercial investigation | Medical Office Cleaning | Exam Room Disinfection; Waiting Area & Reception Cleaning; Restroom Sanitation; Floor Care for Clinical Spaces; High-Touch Surface Programs; After-Hours Scheduling; Facility-Approv | What should a medical office cleaning quote include? | Request scope-specific quote |
| `/office-building-cleaning` | Multi-tenant/shared building cleaning | office building cleaning | lobbies; elevator landings; shared restrooms | How is cleaning coordinated across an office building? | Request building quote |
| `/office-cleaning` | Workplace cleaning | office cleaning services | workstations; meeting rooms; after-hours cleaning | What does an office cleaning scope include? | Request workplace quote |
| `/privacy-policy` | Privacy information | Imperial Cleaning privacy policy | analytics consent; contact information | How is information from a quote request handled? | Review privacy choices or contact business |
| `/property-management-cleaning` | Service-specific commercial investigation | Managed-Property Cleaning Scope | Common Area & Lobby Maintenance; Restroom Banks & Fitness Centers; Tenant Turnover & Vacancy Cleans; Garage & Exterior-Adjacent Sweeping; Multi-Site Scheduling & Reporting; Day Por | What should a managed-property cleaning scope quote include? | Request scope-specific quote |
| `/resources` | Planning resource discovery | commercial cleaning guides | cleaning checklists; procurement templates | Which checklist helps plan my cleaning scope? | Open guide or worksheet |
| `/resources/car-dealership-nightly-cleaning-checklist` | Informational planning / buying | Dealership Cleaning Checklist | Showroom and sales floor (nightly); Customer lounge and service waiting (nightly) | How do I use dealership cleaning checklist to plan my scope? | Use worksheet then request relevant quote |
| `/resources/commercial-cleaning-proposal-checklist` | Informational planning / buying | Cleaning Proposal Checklist | Cover page and pricing clarity; Scope and frequency verification | How do I use cleaning proposal checklist to plan my scope? | Use worksheet then request relevant quote |
| `/resources/commercial-cleaning-rfp-template` | Informational planning / buying | Commercial Cleaning RFP Template | What belongs in the RFP cover sheet?; Scope of work section (copy-paste starter list) | How do I use commercial cleaning rfp template to plan my scope? | Use worksheet then request relevant quote |
| `/resources/commercial-cleaning-vs-janitorial` | Informational planning / buying | Commercial Cleaning vs. Janitorial | What janitorial services cover; What commercial cleaning adds | How do I use commercial cleaning vs. janitorial to plan my scope? | Use worksheet then request relevant quote |
| `/resources/commercial-floor-strip-and-wax-cost` | Informational planning / buying | Commercial Floor Strip & Wax Cost | Typical per-square-foot planning bands; What changes the price on a strip and wax job? | How do I use commercial floor strip & wax cost to plan my scope? | Use worksheet then request relevant quote |
| `/resources/construction-cleanup-process-checklist` | Informational planning / buying | Construction Cleanup Checklist | Construction cleanup checklist by area; How contractors keep cleanup on schedule | How do I use construction cleanup checklist to plan my scope? | Use worksheet then request relevant quote |
| `/resources/how-to-compare-commercial-cleaning-companies` | Informational planning / buying | Compare Commercial Cleaning Companies | Are they pricing the same scope?; What should you ask references? | How do I use compare commercial cleaning companies to plan my scope? | Use worksheet then request relevant quote |
| `/resources/janitorial-scope-of-work-template` | Informational planning / buying | Janitorial Scope of Work Template | How should you structure the scope document?; Daily scope items (copy-paste list) | How do I use janitorial scope of work template to plan my scope? | Use worksheet then request relevant quote |
| `/resources/medical-office-cleaning-checklist` | Informational planning / buying | Medical Office Cleaning Checklist | Nightly tasks: waiting and reception; Nightly tasks: exam and procedure rooms | How do I use medical office cleaning checklist to plan my scope? | Use worksheet then request relevant quote |
| `/resources/night-cleaning-vs-day-cleaning` | Informational planning / buying | Night Cleaning vs. Day Cleaning | When does night cleaning work best?; When is day cleaning or day porter service better? | How do I use night cleaning vs. day cleaning to plan my scope? | Use worksheet then request relevant quote |
| `/resources/office-cleaning-frequency-guide` | Informational planning / buying | Office Cleaning Frequency Guide | Small offices (under 5,000 sq ft, under 25 people); Mid-size offices (5,000 to 25,000 sq ft, 25 to 150 people) | How do I use office cleaning frequency guide to plan my scope? | Use worksheet then request relevant quote |
| `/resources/post-construction-cleaning-cost` | Informational planning / buying | Post-Construction Cleaning Cost | What determines the cost of construction cleanup?; Why a price per square foot is not a complete quote | How do I use post-construction cleaning cost to plan my scope? | Use worksheet then request relevant quote |
| `/resources/school-janitorial-checklist` | Informational planning / buying | School Janitorial Checklist | Daily checklist after students leave; Weekly school cleaning tasks | How do I use school janitorial checklist to plan my scope? | Use worksheet then request relevant quote |
| `/resources/switch-commercial-cleaning-companies` | Informational planning / buying | Switching Cleaning Companies | When is it time to switch providers?; How do you plan the transition timeline? | How do I use switching cleaning companies to plan my scope? | Use worksheet then request relevant quote |
| `/resources/warehouse-cleaning-scope-of-work` | Informational planning / buying | Warehouse Cleaning Scope of Work | Office, restroom, and break room (janitorial scope); Warehouse floor and aisle cleaning (copy-paste scope) | How do I use warehouse cleaning scope of work to plan my scope? | Use worksheet then request relevant quote |
| `/resources/what-does-a-day-porter-do` | Informational planning / buying | What Does a Day Porter Do? | Core day porter duties during open hours; Meeting rooms, events, and tenant support | What Does a Day Porter Do? | Use worksheet then request relevant quote |
| `/resources/what-is-post-construction-cleaning` | Informational planning / buying | What Is Post-Construction Cleaning? | What does post-construction cleaning include?; The three phases of post-construction cleanup | What Is Post-Construction Cleaning? | Use worksheet then request relevant quote |
| `/restaurant-cleaning-services` | Service-specific commercial investigation | Restaurant Cleaning Services | Dining Room & Front-of-House; Floor Degreasing & Care; Restroom Sanitation; Window & Entry Glass; High-Touch Disinfection; Overnight & Off-Hours Service; Built Around Service Hours | What should a restaurant cleaning services quote include? | Request scope-specific quote |
| `/reviews` | Customer evidence | Imperial Cleaning reviews | customer feedback; Google reviews | What do customers say about Imperial? | Read original review then request quote |
| `/school-cleaning-services` | Service-specific commercial investigation | School Cleaning & Janitorial Services | Classroom Cleaning & Disinfection; Restroom Sanitation; Cafeteria & Multipurpose Rooms; Gym & Hard Floor Care; Summer & Break Deep Cleans; Daycare & Early Learning; School Access R | What should a school cleaning & janitorial services quote include? | Request scope-specific quote |
| `/service-areas` | Coverage discovery | Imperial Cleaning service areas | Idaho cleaning services; Utah cleaning services | Does Imperial serve my project location? | Find city and confirm scope |
| `/service-areas/idaho` | Idaho coverage | commercial and construction cleaning Idaho | Idaho cities; cleaning service availability | Which Idaho locations can request service? | Choose city and request quote |
| `/service-areas/utah` | Utah coverage | commercial and construction cleaning Utah | Utah cities; construction cleanup availability | Which Utah locations can request service? | Choose city and request quote |
| `/sitemap` | Navigation | Imperial Cleaning sitemap | cleaning services directory; location pages | Where can I find a service or guide? | Navigate to relevant page |
| `/terms-of-service` | Service terms | Imperial Cleaning service terms | scope agreement; scheduling terms | What terms apply to a cleaning request? | Review terms or contact business |
| `/utah/commercial-cleaning/layton` | Local recurring commercial cleaning | Commercial Cleaning Layton, UT | janitorial services Layton; facility cleaning Layton | How do I plan recurring cleaning in Layton, Utah? | Request quote with service and city |
| `/utah/commercial-cleaning/logan` | Local recurring commercial cleaning | Commercial Cleaning Logan, UT | janitorial services Logan; facility cleaning Logan | How do I plan recurring cleaning in Logan, Utah? | Request quote with service and city |
| `/utah/commercial-cleaning/ogden` | Local recurring commercial cleaning | Commercial Cleaning Ogden, UT | janitorial services Ogden; facility cleaning Ogden | How do I plan recurring cleaning in Ogden, Utah? | Request quote with service and city |
| `/utah/commercial-cleaning/orem` | Local recurring commercial cleaning | Commercial Cleaning Orem, UT | janitorial services Orem; facility cleaning Orem | How do I plan recurring cleaning in Orem, Utah? | Request quote with service and city |
| `/utah/commercial-cleaning/provo` | Local recurring commercial cleaning | Commercial Cleaning Provo, UT | janitorial services Provo; facility cleaning Provo | How do I plan recurring cleaning in Provo, Utah? | Request quote with service and city |
| `/utah/commercial-cleaning/salt-lake-city` | Local recurring commercial cleaning | Commercial Cleaning Salt Lake City, UT | janitorial services Salt Lake City; facility cleaning Salt Lake City | How do I plan recurring cleaning in Salt Lake City, Utah? | Request quote with service and city |
| `/utah/commercial-cleaning/sandy` | Local recurring commercial cleaning | Commercial Cleaning Sandy, UT | janitorial services Sandy; facility cleaning Sandy | How do I plan recurring cleaning in Sandy, Utah? | Request quote with service and city |
| `/utah/commercial-cleaning/west-valley-city` | Local recurring commercial cleaning | Commercial Cleaning West Valley City, UT | janitorial services West Valley City; facility cleaning West Valley City | How do I plan recurring cleaning in West Valley City, Utah? | Request quote with service and city |
| `/utah/construction-cleaning/layton` | Local construction cleanup | Post-Construction Cleaning Layton, UT | construction cleanup Layton; final cleaning Layton | How do I plan construction cleanup in Layton, Utah? | Request quote with service and city |
| `/utah/construction-cleaning/logan` | Local construction cleanup | Post-Construction Cleaning Logan, UT | construction cleanup Logan; final cleaning Logan | How do I plan construction cleanup in Logan, Utah? | Request quote with service and city |
| `/utah/construction-cleaning/ogden` | Local construction cleanup | Post-Construction Cleaning Ogden, UT | construction cleanup Ogden; final cleaning Ogden | How do I plan construction cleanup in Ogden, Utah? | Request quote with service and city |
| `/utah/construction-cleaning/orem` | Local construction cleanup | Post-Construction Cleaning Orem, UT | construction cleanup Orem; final cleaning Orem | How do I plan construction cleanup in Orem, Utah? | Request quote with service and city |
| `/utah/construction-cleaning/provo` | Local construction cleanup | Post-Construction Cleaning Provo, UT | construction cleanup Provo; final cleaning Provo | How do I plan construction cleanup in Provo, Utah? | Request quote with service and city |
| `/utah/construction-cleaning/salt-lake-city` | Local construction cleanup | Post-Construction Cleaning Salt Lake City | construction cleanup Salt Lake City; final cleaning Salt Lake City | How do I plan construction cleanup in Salt Lake City, Utah? | Request quote with service and city |
| `/utah/construction-cleaning/sandy` | Local construction cleanup | Post-Construction Cleaning Sandy, UT | construction cleanup Sandy; final cleaning Sandy | How do I plan construction cleanup in Sandy, Utah? | Request quote with service and city |
| `/utah/construction-cleaning/west-valley-city` | Local construction cleanup | Post-Construction Cleaning West Valley City | construction cleanup West Valley City; final cleaning West Valley City | How do I plan construction cleanup in West Valley City, Utah? | Request quote with service and city |
| `/warehouse-cleaning` | Service-specific commercial investigation | Warehouse Cleaning Services | Aisle & Staging Floor Scrubbing; Loading Dock & Pit Cleaning; Office & Break Room Upkeep; Restroom & Employee Area Sanitation; Dust Control for High-Bay Areas; Weekend Deep-Clean W | What should a warehouse cleaning services quote include? | Request scope-specific quote |
