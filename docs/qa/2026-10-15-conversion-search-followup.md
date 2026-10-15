# Imperial conversion and search follow-up

Continues PR #24 on its existing branch. On October 15, GitHub main remained f678b855c57e3cbf78eda2d084b19d1a7d004663, PR #24 remained draft at 9d9ddf1278bab1ff720fe198ebf430dbeebc52d3 with no checks, and no other open PR existed. Local checkout was clean before this work. Portfolio standard re-read: Library version 2, all 372 lines returned, unchanged from the previously read complete standard.

## Conversion correction

October 14 QA reported that an initial privacy notice covered pointer Back at 1180x757, while keyboard Back preserved the city. The first PR revision only suppressed the notice while the form had focus; it did not structurally prevent overlap after blur.

On `/contact`, the notice now occupies document flow between the header and main content. It remains present during form interaction, so changing focus does not move the form. Fixed notices and their existing suppression remain on other routes. The existing optional-analytics default and choice persistence are unchanged. No customer drafts or stored consent records were cleared by implementation.

The dedicated isolated pointer test positions Back 36px above the viewport bottom, moves focus outside the form without scrolling, hit-tests its center, clicks with the mouse, and checks city preservation. Both 1180x757 and 320x568 pass; keyboard Back also passes. Zero submissions in this test. The earlier baseline attempt did not complete because its second clean-notice wait timed out; do not represent that attempt as a confirmed reproduction. The incoming October 14 QA remains the production failure evidence.

The existing browser regression still verifies Back/Forward/reload, form-step focus, seven viewport widths from 320 through 1440, tablet and desktop navigation, and local mocked failure/acceptance. No external browser traffic was allowed; pages came from loopback, APIs were mocked, and external hosts were blocked. No shared Chrome, live submission, mail, database change, Replit AI, or publication.

## Search evidence and bounded experiment

Research owner supplied final GSC totals for September 14–October 11 versus August 17–September 13: 27 vs 22 clicks, 2,973 vs 6,529 impressions, CTR 0.91% vs 0.34%, position 20.72 vs 21.84. These are the research owner's verified data, not a new local GSC export.

Correction retained: the homepage, not the city pages, receives the strongest Idaho Falls construction query visibility. Homepage: 1,962 impressions and 23 clicks. “Post construction cleaners idaho falls”: 20 homepage impressions, position 4.5, zero clicks; related phrases position 5.67–6.45. Commercial hub: 231 impressions, position 18.24. Construction hub: 84 impressions, position 23.73. Hubs are improving; avoid attributing historical changes to this unreleased work.

Preserve all existing titles, homepage construction relevance and balanced commercial offer. Three description-only tests clarify actual services and the next step:

| URL | New description | Reason |
| --- | --- | --- |
| / | Construction cleanup in Idaho Falls and our Idaho and Utah service areas. Rough, final and touch-up cleaning, plus recurring commercial cleaning. Free quotes. | Align the homepage snippet with observed local construction demand without removing either service. |
| /construction-cleaning | Rough, final and touch-up construction cleanup for new builds and renovations in Idaho and Utah. Confirm your scope and schedule, then request a free quote. | Make scope and the available quote action explicit. |
| /commercial-cleaning | Office and janitorial cleaning in Idaho and Utah. Plan recurring tasks, cleaning frequency and building access, then request a free commercial cleaning quote. | Specify the recurring offer and useful next step. |

Prior copy is retained in Git history. Homepage description is synchronized in `data/service-priorities.ts` and `data/search-listings.json`; route metadata and visible-service schema consume the registry. No unsupported deadline, OSHA, background-check or guarantee claim was added. Existing service policies support phases, quote scope and scheduling confirmation. This batch does not independently certify all historical claims sitewide.

There are 24 existing covered cities (16 Idaho, eight Utah), with construction/commercial route pairs; coverage is not a branch office or a promise of current crew availability. No new city pages or Post Falls, Coeur d'Alene, or Parrish coverage were added. Existing city metadata already matches its service/location intent and was preserved pending stronger page-level evidence.

Official guidance: https://developers.google.com/search/docs/appearance/snippet . Descriptions should accurately summarize individual pages; Google may use other text. These are measured snippet experiments, not guaranteed rankings or displayed snippets. Compare matched page/query/device/country CTR, clicks, impressions and qualified leads across a complete 28-day period after verified release, with earlier 7-day indexing checks and 60-day review if volume remains low. Do not declare a winner from 20 impressions or aggregate CTR alone.

## Nampa current public verification

October 15, approximately 13:56–13:58 UTC: construction slash URL returns 308 Location to `/idaho/construction-cleaning/nampa`; no-slash returns 200, `index, follow`, and a self-referencing canonical. Commercial slash URL also returns 308 to its no-slash URL. No normalization change justified. Researcher's “Discovered currently not indexed” canonical and August 17 slash crawl remain indexing follow-up evidence, not evidence that the current redirect is broken. Sitemap reports 95 submitted URLs without errors/warnings; an API indexed-zero field is not treated as deindexing proof.

## Verification and release gates

See adjacent pointer/browser result JSON. Existing UI and 223 audit tests pass. Search-appearance checks initially caught an unsynchronized duplicate homepage description; that source was corrected, and all 330 checks pass. Website checks pass. Production build passes, including its link, NAP, and 95-route discovery generation checks.

This continuation is prepared locally on the existing PR branch. Do not push a new revision until the private repository's current free Actions allowance/cap is verified: PR synchronization triggers the enabled workflow. No workflow changes, new skip directive, billing changes, security changes, scope expansion, or alternate-identity retries were used. Earlier skip-marked PR #24 is not a CI pass.

Known exact Replit identity remains project 3e71f349-0926-4275-b491-5d22b4cc8d05, https://replit.com/@webiqco/Imperial-Cleaning-Inc, previously mapped by the connector to https://imperialcleaninginc.com and deployment a146a23c-11e7-4b9a-832a-6ab0682aaf9b. This does not verify current workspace commit or dirty state. Release owner must reconcile current project source, preserve unrelated changes, push/run final CI within verified allowance, import the approved revision, publish once, and verify live revision and affected journeys before search notifications.

Receiving provider/mailbox, approved test-recipient isolation and actual inbox delivery remain unverified. The October 6 provider receipt does not prove inbox delivery. Real device keyboard, screen reader, other browsers, full 95-route visual acceptance and post-release search outcomes remain pending.
