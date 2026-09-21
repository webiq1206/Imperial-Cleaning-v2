# Imperial master audit: September 21, 2026

Status: first implementation batch on a draft review branch. The full master assignment is incomplete. Do not merge or deploy before explicit owner approval. Preserve the September 11 review-only redesign and unrelated changes.

## Repository state

Repository: webiq1206/Imperial-Cleaning-v2.
Branch: review/imperial-master-audit-2026-09-21.
Draft PR: 16.
Base redesign commit: c7feeb2dced08a630c34dd94309fd4ea846c7c21.
Application fix commit: e8d71a90b8f39d5c8327038956f9094e9a2f5f4f.
Main and production were not changed by this work.

## Implemented in this review batch

The contact endpoint enforces actual request bytes, deadlines, browser-origin checks, retry-safe Resend requests, safe provider errors and a receipt before reporting acceptance. The quote form retains unchanged retry keys, prevents concurrent submissions, times out safely, preserves values, focuses recoverable errors, masks the form for replay and separates analytics failure from accepted submission. Provider acceptance is not inbox delivery. Non-browser requests without Origin are not authenticated by the origin check; distributed abuse controls remain open.

Analytics helpers no longer turn inquiries into purchases or attach invented dollar amounts. Custom event attributes exclude free-text contact/location/error data. Public paths are restricted to the current 95-route allowlist and query strings are removed. This is not a complete analytics deployment: root loader, consent, first-page event ownership, enhanced measurement, attribution and receiving-system verification remain open.

Robots uses one wildcard group so more-specific bot groups cannot bypass shared exclusions. Public search and AI access remain broad. Robots is not authentication or an indexing guarantee. Preview noindex response headers and private-route authorization still require verification.

The existing CI workflow now calls the isolated regression suite after type checking, uses Node 22 to match the locally tested major version, and retains the link/NAP/build gates. A configured CI step is not a successful CI run.

## Verification actually completed

After dependencies are installed, run `node scripts/check-master-audit.mjs` from the repository root. Fifty isolated tests passed locally under Node 22.16.0, covering request controls, mocked provider behavior, analytics payloads, the 95-route allowlist and robots output. No real email or customer record was created. TS/TSX syntax transpilation was checked separately; it is not full type checking.

All 95 known public HTML routes were fetched through the live on-page audit: HTTP 200, a self-referencing canonical, one H1 and no observed noindex. This is basic technical eligibility, not Google index inclusion. Three historical casino URLs from Search Console return 404, which is correct. Tested old office/construction URLs reach relevant service pages, with two-hop slash normalization; the consultation URL reaches Contact.

The September 11 static preview supplied 95 archived pages and 4,031 internal-link observations. It is not the current React runtime. All 665 attempted viewport checks were blocked before navigation with ERR_BLOCKED_BY_ADMINISTRATOR. Zero browser, visual, keyboard, screen-reader or real-device checks are claimed as passed.

GitHub Actions runs 35605279868 and 35605279814 stopped before executable steps and logs. No full build, actual inbox delivery, CRM acceptance, GA4 DebugView receipt or Core Web Vitals pass is claimed.

## Scope and unfinished work

The local conversation handoff retains all 115 source IDs, including G01-G28 and I01-I06. Its 1,171 extracted sentence candidates require manual atomic adjudication; they are not completed requirements. Its 55 task records distinguish findings, tested code, preparation, unfinished research and actual access dependencies.

Remaining work includes a supported framework security upgrade; root GA/consent integration; real form delivery and durable lead reconciliation; admin/API authorization; current browser/accessibility and performance checks; complete Search Console exports and URL Inspection; individual page briefs/rewrites; claims and permission checks; service-scope conflicts; sitemap/llms publishing lifecycle; semantic schema; actual GBP fields/categories and NAP corrections; and the unfinished growth research and publication tasks.

Prepared local assets include 20 selected real GSC query rows with provisional priorities, a 25-prompt unrun AI panel, two page-opening drafts, two LinkedIn posts, three short-video scripts, one longer-video outline, a neutral review/recovery process, five GBP service drafts with counts, a 20-item HTML/Markdown handover checklist, two unlaunched conversion hypotheses and a calendar-ready operating plan. These drafts are not website publications, recordings, profile edits, sent messages or scheduled jobs. Creator/list/media/podcast target research is unfinished, not excused solely by missing outreach permission.

## Exact next action and rollback

Restore an executable full-source environment; run dependency installation, typecheck, existing link/NAP checks, new tests and build. Finish root analytics ownership/consent and exercise the actual quote chain with an approved recipient. Verify real inbox delivery separately from provider acceptance, then test responsive/accessibility states before requesting publication approval.

Revert the relevant audit commits on the review branch to roll back while preserving the base redesign. No production rollback is needed because the audit batch was not deployed.

## Primary references checked

- https://resend.com/docs/api-reference/emails/send-email : request contract and provider receipt.
- https://resend.com/changelog/idempotency-keys : stable retry keys and 24-hour provider retention.
- https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events : lead and purchase event meanings.
- https://developers.google.com/search/updates : FAQ rich results ended May 7, 2026; llms files are not required for Google Search.
- https://support.google.com/business/answer/9124203 : product editor eligibility is distinct from services.
- https://support.google.com/business/answer/9455399 : supported service fields.
- https://nextjs.org/blog : current security-release guidance, not a claim that the old deployment has been patched.

The original master prompt remains the complete assignment. This checkpoint does not replace its scope or certify completion.
