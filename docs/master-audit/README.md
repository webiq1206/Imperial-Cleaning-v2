# Imperial master audit: September 21, 2026

Status: partial implementation on a draft review branch. Do not merge or deploy. The owner's September 11 review-only boundary remains in effect.

## Implemented in this review batch

The contact endpoint now enforces actual request bytes, deadlines, browser-origin checks, retry-safe Resend requests, safe provider error handling, and a provider receipt before reporting acceptance. The quote form keeps unchanged retry keys, prevents concurrent submissions, times out safely, preserves entered values, focuses recoverable errors, masks the form for replay, and separates analytics failure from business success. Provider acceptance is not inbox delivery.

Analytics helpers no longer turn inquiries into purchases or attach invented dollar amounts. Free-text contact/location/error fields are excluded from custom analytics events. Page paths are restricted to the current 95 public routes, with query strings removed. This is not a complete analytics deployment: the root loader, consent handling, first-page event ownership, enhanced measurement, attribution and receiving-system verification remain open.

Robots now uses one wildcard group so specific bots cannot bypass the shared exclusions. Public search and AI access remain broadly allowed. Robots is not authentication or an indexing guarantee. Preview noindex response headers and private-route authorization still require verification.

## Verification actually completed

Run `node scripts/check-master-audit.mjs` from the repository root after dependencies are installed. The 50 isolated tests passed locally under Node 22.16.0. They test request controls, mocked email-provider behavior, analytics payloads, the 95-route allowlist and robots output. No real email or customer record was created. TS/TSX syntax transpilation was checked separately; it is not a full type check.

The live on-page audit covered all 95 known public routes. Each returned 200, a self-referencing canonical, one H1, and no observed noindex. This establishes basic technical eligibility, not Google index inclusion. Three historical casino URLs from Search Console now return 404, which is correct. The consultation redirect reaches Contact; old office and construction URLs reach relevant service pages, with two-hop slash normalization on the tested forms.

The September 11 saved preview supplied a 95-page archived HTML baseline and 4,031 internal-link observations. It is not the current React runtime. All 665 attempted browser viewport combinations were blocked by the environment with ERR_BLOCKED_BY_ADMINISTRATOR. Zero browser checks are claimed as passed.

GitHub Actions runs 35605279868 and 35605279814 stopped before executable steps or downloadable logs. No full build, real browser journey, screen-reader check, Core Web Vitals pass, inbox delivery, CRM acceptance or GA4 DebugView receipt is claimed.

## Open release blockers and unfinished work

1. Restore an executable full-repository test environment, run install/typecheck/build and the existing routing/NAP checks, then perform actual responsive and accessibility QA.
2. Review the old Next.js dependency against current official security advisories and upgrade through a tested lockfile. No vulnerability fix is claimed by this batch.
3. Finish the root GA loader, consent and page-view ownership before marking analytics working. The current loader uses a local function while helpers expect window.gtag; GA4 account access is missing. Bing account data is not configured.
4. Verify sending credentials, sender domain and a designated test recipient, then inspect provider delivery and actual inbox receipt. Add durable lead storage, delivery reconciliation and distributed abuse controls as appropriate.
5. Finish source-level authorization checks for admin and API routes without reading real customer records. Verify staging authentication and noindex headers.
6. Verify certification, bonding, review counts, response promises, pricing, specialized capabilities and local-project claims. The site alone does not independently substantiate its own claims. Finish individual page briefs, scoped copy edits and factual approvals.
7. Resolve legacy service-scope conflicts involving specialized/floor-care and property-management pages. Do not bulk-delete or redirect without a justified map.
8. Complete sitemap/llms lifecycle automation, semantic schema review, all URL Inspection reconciliation, full historical-query exports, backlinks, GBP and citation edits.
9. Complete the remaining growth assets and research in G01 through G28. Drafts, processes, missing target research, unrecorded videos and unapproved outreach remain incomplete, not published.

## Evidence and rollback

Base redesign commit: c7feeb2dced08a630c34dd94309fd4ea846c7c21. Draft PR: 54. Main remains unchanged. Revert this batch on the review branch to roll back; no production rollback is necessary because this batch was not deployed. Keep the earlier redesign intact.

## Primary technical references checked

- https://resend.com/changelog/idempotency-keys : provider idempotency support; provider keys have a limited retention window.
- https://developers.google.com/analytics/devguides/collection/ga4/events : custom and recommended events require receiving-system verification.
- https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events : generate_lead and purchase have different meanings.
- https://developers.google.com/search/updates : FAQ rich results stopped appearing May 7, 2026; useful FAQ content is still useful.
- https://nextjs.org/blog : current security release guidance must be reviewed before upgrading the old application version.

The attached master prompt is the complete scope. This checkpoint is not a replacement for its 22 sections or 28 playbooks and must not be represented as a finished master audit.
