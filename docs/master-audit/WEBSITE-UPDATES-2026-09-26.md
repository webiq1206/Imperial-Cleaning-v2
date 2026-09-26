# Website audit implementation, September 26, 2026

Scope: imperialcleaninginc.com, all 95 public canonical pages, including 48 city/service pages and 17 resource guides. Construction cleanup remains primary, recurring commercial cleaning stays visible. Existing Imperial colors, typography, logo assets, navigation categories and social URLs are retained.

## Implemented in source

| Component | Change | Benefit |
| --- | --- | --- |
| All 48 local service pages | Replaced the long legacy generator with concise scope, exclusions, planning, quote checklist, process, FAQ and related-service sections. All 24 cities have separate construction and commercial planning entries. | Less repetition, fewer unsupported claims and clearer visitor decisions. |
| Local keywords and metadata | Construction pages target post-construction cleaning, construction cleanup and construction cleaning in their city. Commercial pages target commercial cleaning, office cleaning and janitorial services in their city. Updated all 48 titles and descriptions. | Clearer service/location ownership without creating synonym doorway pages. |
| Local links | Nearby cities selected by geographic proximity within the state. Complementary service in the same city linked explicitly. Boise points to Meridian, Eagle, Nampa and Caldwell. | More useful local navigation. |
| Service hubs | Rebuilt construction and commercial overviews around scope, phases, process, pricing factors, insurance documentation, resources and every applicable city. | Shorter, clearer service selection. |
| Coverage pages | Rebuilt Idaho, Utah and all-service-area indexes. Removed market tiers, population filler and assumed deployment windows. | Accurate distinction between headquarters and service coverage. |
| Claims and pricing | Removed ISO, clearance, zero-deficiency and named-employer claims from the rendered city architecture. Removed fixed quote deadlines, unsupported staff-screening claims and unsubstantiated regional price ranges from active service content. Centralized scope-based pricing and scheduling policy. | More consistent, defensible messaging. |
| Quote forms | Infer service and known city from the page or allowlisted contact query. Preserve visitor edits, both steps, errors, retry, idempotency and receipt checks. Track form opening and step changes without free text. | Less repeated input and more useful consent-respecting funnel diagnostics. |
| Header/mobile/article/industry CTAs | Preserve contextual service and city when linking to contact. Rename walkthrough CTAs to requests, not bookings. | More accurate expectations and less lost context. |
| Mobile privacy panel | Shorter copy and spacing; equal usable allow/decline controls; existing default-off analytics and collision suppression preserved. | Less obstruction without weakening consent. |
| Accessibility | Underlined inline links; removed nested headings in the shared FAQ and nested interactive controls in terms. New tables have labels and row/column headers. | Easier keyboard and visual navigation. |
| All 17 guides | Added practical comparison, planning or task matrices plus editable Markdown worksheet downloads without a lead gate. Replaced repeated title-card images in article bodies with a direct route to the useful tool. Retained social preview images. | Better fulfillment of template/checklist intent and less image transfer. |
| RFP guide | Fixed example weights total 100%. Interactive scorecard rejects invalid totals and incomplete/out-of-range ratings. | Prevents misleading proposal comparisons. |
| Resource hub and reviews | Added topic/service filters; kept review quotations unchanged and linked their existing sources. | Faster discovery without fabricated testimonials. |
| Local review presentation | Replaced awkward fabrication disclaimers with concise labels distinguishing regional feedback from city-specific evidence. | Credible proof without implying unverified local projects. |
| Guide consistency | Cost article and hub share the same reviewed content and read-time source. Modification dates reflect this content/tool update. | Fewer contradictory snippets and labels. |
| Existing SEO foundation | Retained canonical URLs, one H1, organization identity, service area schema, sitemap, robots access and distinct social previews. | Preserves working technical SEO. |
| Maintenance | Updated Next.js and matching lint configuration from 14.2.15 to 14.2.35, a same-major patch identified by the official security advisory. Added CI checks for new components and city/tool data. | Fixes the identified December 2025 issue without a major-framework migration. Not a claim that all dependency vulnerabilities are resolved. |

## Verification

- Existing regression suite: 207 tests passing.
- Search metadata, schema safety and image-preview suite: 330 checks passing.
- New city/context/download suite: 113 checks passing.
- Isolated DOM interaction tests: quote preselection, next/back, required-location validation, RFP weighting, resource/review filters, handover persistence and reset pass. No production network requests.
- Production build, 95-page rendered crawl and deployment status are recorded in the completion update below.
- The available remote browser could not access the local preview. DOM simulations and CSS inspection are not substitutes for full desktop/mobile visual QA.

## Not represented as complete

| Item | What is still needed |
| --- | --- |
| Real project photography and case studies | Approved source photos, factual project details and client permission. No stock or generated image is presented as Imperial project proof. |
| Unique local proof on every city page | Actual completed jobs, local references or documented coverage details. The new local planning copy does not establish project history. |
| Specialist medical, school and industrial claims | Operations review of capability, training, products and scope boundaries. Medical worksheets explicitly require a qualified facility reviewer. |
| Pricing examples, guarantees and response commitments | Approved policy and real anonymized quote data. No invented rates, callback guarantee or dispatch promises were substituted. |
| Native Word/Excel downloadable tools | This delivery supplies editable Markdown text worksheets and on-page tables, not DOCX or XLSX files. |
| Phone-optional form experiment | Existing required contact fields retained. Any field-requirement change should be tested against lead quality and response needs. |
| Real-user performance and conversion results | Post-publication field data and a measurement window. No new Lighthouse score or measured conversion lift is claimed. |
| Search Console, GBP and external citations | Authorized account access and verified business details. No business profiles, external messages or paid advertising were changed. |
| All organic and AI results | Not a controllable deliverable. No ranking or universal AI citation guarantee. Track actual impressions, qualified leads and dated AI samples. |
| End-to-end lead delivery | A labeled authorized production test, provider receipt and inbox/CRM confirmation. Automated tests do not prove inbox delivery. |
| Legal policy revisions | Terms control markup fixed only. No substantive legal terms or privacy obligations were invented. |
| Major dependency modernization | Separate compatibility review, especially before moving from Next.js 14 to a newer major. |

## Publication and follow-up

Do not run database migrations for this website update. No schema or database changes are required. Preserve existing secrets and deployment settings. Synchronize the verified GitHub commit into the existing Imperial Replit app, review its diff and run the checks before republishing. Confirm the deployed commit, all canonical URLs, download routes, quote context and actual delivery after release. Never report a GitHub commit alone as a live website update.

For each of the 48 local URLs, compare a rolling 90-day GSC baseline for the matching city/service queries and device. Record impressions, clicks, CTR, position, qualified inquiries and booked work. Use search demand and actual results to refine priorities. City pages must remain useful to customers, not just repeat keywords. Keep all updates consistent with the existing social identity; do not add new profile links without verification.

Official patch reference: https://nextjs.org/blog/security-update-2025-12-11

## Completion verification

The clean Next.js 14.2.35 production build passed on September 26, 2026, including compilation, type checking and static generation. The final rerun passed all 207 regression tests, 330 search-appearance checks, 113 website-update checks and isolated DOM interaction tests. The local production server returned and passed checks for all 95 public HTML pages: HTTP status, one main H1, exact canonical, metadata presence, parseable JSON-LD, internal targets and interactive-control nesting. Linked non-HTML resources and worksheet endpoints also returned successfully. `git diff --check` passed.

These results verify the source build and local rendered output, not deployment, visual appearance at real device sizes, inbox delivery, search rankings or conversion lift. The GitHub main update must still be pulled into the existing Replit application and republished. No paid Replit Agent task or deployment was initiated.
