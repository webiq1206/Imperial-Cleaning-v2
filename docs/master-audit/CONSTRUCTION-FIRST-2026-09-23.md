# Imperial: construction-first service priority

## Standing owner direction

Reaffirmed by Jared on September 23, 2026: construction cleaning, construction cleanup, and post-construction cleanup are Imperial's primary services. Commercial cleaning and janitorial work are secondary. Construction must dominate the homepage, navigation, conversion paths, related content, and future search/growth priorities.

The homepage's primary keyword cluster stays general rather than targeting a particular city. Use the existing service-and-city pages for location-specific demand across approved Idaho and Utah coverage. Target commercial contractors, builders, and commercial projects. Do not introduce recurring residential cleaning, property management, or standalone specialist floor-care offers. Preserve established commercial URLs and useful secondary demand.

This supersedes the earlier commercial-first homepage framing. It does not authorize fabricated capabilities, project history, reviews, prices, certifications, staffing promises, or guaranteed inspection outcomes.

## Implemented in this batch

The homepage title, description, social metadata, WebPage description, H1, hero promise, first service section, planning resources, project-oriented process, coverage links, and featured reviews now lead with construction cleanup. Three linked cards cover rough, final, and touch-up cleaning. Ongoing commercial cleaning occupies a smaller section later on the page rather than half the primary services section.

The first desktop/mobile navigation group is construction cleanup, with direct links to its hub, all three phases, cost guidance, and the handover checklist. Commercial cleaning has its own second group. The footer preserves contact/identity/privacy controls while leading with the same construction positioning. Longer navigation labels use the existing mobile drawer at small desktop widths rather than compressing the controls.

The quote form lists construction first. Construction-specific homepage CTAs pass a whitelisted service value to the existing form; commercial-specific CTAs pass commercial. An existing visitor choice is not overwritten. The submission, validation, idempotency, receipt, error recovery, and consent behavior were not replaced. The mobile CTA visibility selector now also recognizes query-bearing quote links, avoiding a new duplicate-CTA blind spot.

Construction-specific related-link priorities apply to the hub, three phase pages, three construction resources, and all 24 existing construction city pages. Caller-pinned links, exclusions, deduplication, and display limits are preserved. The corresponding commercial pages retain their own recommendations rather than receiving a sitewide construction override.

Both AI reference files lead with construction and list the construction hub/phases first. Their canonical address and original Google Business Profile link remain intact. The public inventory remains 95 paths. The homepage receives a meaningful modification date; other pages are not falsely marked as rewritten.

Existing owner-supplied reviews from Ryan S., V Josephson, and Miles F. are referenced by name and construction-service classification. Their text is not edited, no new review is invented, and no aggregate rating is introduced. This pass does not claim a fresh independent verification of the entire review inventory. The existing interior image is retained and is not labeled as an Imperial project photograph.

## Keyword-to-page direction

| Intent | Representative terms | Existing destination | Page role |
| --- | --- | --- | --- |
| Find a construction cleanup company | construction cleanup, construction cleaning company, post construction cleanup | / | Construction-first company introduction, project fit, proof, and quote path |
| Understand and hire the service | construction cleaning services, post-construction cleaning services, commercial construction cleanup | /construction-cleaning | Full service scope, phases, readiness, and quote path |
| Early phase | rough construction cleaning, rough cleanup | /construction-cleaning/rough-clean | Distinct early-phase scope and exclusions |
| Handover detail | final construction cleaning, final clean after construction | /construction-cleaning/final-clean | Final-clean readiness and detail scope |
| Revisit | construction touch-up cleaning, post-construction touch-ups | /construction-cleaning/touch-up-clean | Targeted late-stage/revisit scope |
| Price decision | construction cleanup cost, post construction cleaning prices | /resources/post-construction-cleaning-cost | Quote inputs and price comparison, not invented local rates |
| Handover planning | construction cleanup checklist, post-construction cleaning checklist | /resources/construction-cleanup-process-checklist | Existing interactive tool and planning guidance |
| Definition and fit | what does post construction cleaning include, phases of post construction cleaning | /resources/what-is-post-construction-cleaning | Explain scope before selecting a service |
| Local contractor intent | construction cleaning [city], construction cleanup [city], post construction cleanup [city] | Existing /idaho/construction-cleaning/[city] and /utah/construction-cleaning/[city] | Local coverage and project fit, without fake branch offices |
| Secondary business cleaning | commercial cleaning, janitorial services, office cleaning | Existing commercial hub and matching detail/city pages | Preserve secondary business intent; do not retarget every page to construction |

These terms are high-intent by business fit. No CPC, keyword difficulty, market-wide volume, ranking position, or revenue value is invented. Synonyms are grouped by the buyer's task, not split into new near-duplicate URLs.

## Research checked for this change

Search Console query: property sc-domain:imperialcleaninginc.com; June 21 through September 20, 2026; Web search; query dimension; case-insensitive construction/builder/final/rough/touch-up filter. The API returned 65 query rows, all with zero recorded clicks in that filtered window. This is observed property data, not overall market demand or an exhaustive all-history export. Examples include construction cleaning company (42 impressions), construction cleaning services (41), construction clean up cost (30), construction cleanup cost (26), and final construction cleaning (3). Location-modified construction queries were also present. Average positions are aggregate observations, not fixed rankings.

Primary competitor pages reviewed for buying-task coverage: https://www.clearpathcleaning.com/ ; https://realcleanutah.com/post-construction-cleaning ; https://commercialcleaningofidaho.com/post-construction-cleaning . Useful common decisions: cleaning phase, project type, access, scope, timing, and quote inputs. No competitor copy, residential offerings, unverified prices, or fast-response promises were imported. These were general web results, not a localized Google rank census; the tool did not expose a fixed device or search-location setting.

Technical references checked September 23, 2026:

- https://developers.google.com/search/docs/appearance/title-link : align a concise descriptive title with the main visible promise; avoid repeated keyword variants.
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable : crawlable descriptive links and useful context, not an arbitrary universal link count.
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide : search systems can understand related wording; changes do not guarantee rankings.

## Interpreting the supplied internal-link report

The screenshot reports 95 registry pages, no orphans, no broken links, and 23 pages below a five-link review threshold. The existing script counts the generated recommendation manifest, not every rendered navigation, footer, body, or override link. Its threshold is a project diagnostic, not Google's minimum requirement and not a build failure.

This batch adds real construction-focused links through the homepage, navigation/footer, and rendered related-content selection. It does not delete those warnings or falsely label all 23 resolved. The stored legacy recommendation generator and its counts are unchanged. A full rendered graph, including per-page pins and the new priority selection, remains part of the broader audit. Do not add irrelevant links just to make that number zero.

## Verification and release state

Base: 72cc3957661254bed0cdd4444a82b46074b3b367. The prior NAP and ES2017 compiler fixes are preserved.

Local partial-source harness: Node 22.16.0 and available TypeScript 5.8.3. The repository's pinned TypeScript version remains unchanged. All 205 isolated checks passed: 181 existing checks plus 24 construction-priority checks. Five pure modules passed semantic checking using the actual project's ES2017/strict/compiler options. Eight changed TSX components passed syntax transpilation. These checks are not a full React/Next build, a dependency audit, browser visual QA, or a production conversion test.

No new dependencies, route deletions, secret changes, email sends, Replit Agent prompts, profile edits, or ranking/indexing claims are part of this batch. Full Next build, mobile/browser inspection, Replit pull/publication, and production verification remain to be confirmed. The wider 95-page content/claims review, framework upgrade, external profile work, and remaining growth playbooks are not made complete by this priority correction.

Next release verification: pull the resulting main commit; run the full build; check the homepage and navigation at phone/tablet/desktop sizes; test construction and commercial quote preselection; confirm sticky CTA suppression; inspect final HTML/metadata and live generated files. Record the deployment separately from the Git commit. Roll back this batch with a normal revert, retaining the prior build fixes and unrelated work.
