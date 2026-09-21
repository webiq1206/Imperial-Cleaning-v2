# Direct implementation and Git handoff

## Scope and authorization

The owner requested code updates followed by a Git commit and push, without prompting Replit Agent. This batch continues the existing redesign and audit branch. It does not certify completion of the full master assignment. No Replit Agent was invoked, no real email was sent, no customer database was queried, and no production publication was performed.

## Implemented

- Added fail-closed server authentication to all 14 existing admin API route files, including 26 method handlers, and the admin layout. A root-level native browser sign-in route establishes the credential scope used by both the admin interface and its APIs. Middleware is not the authentication boundary.
- Added bounded list pagination and safe database-error responses. Discovery acceptance uses a transaction and locks selected pending rows to prevent duplicate acceptance. The pricing calculator validates input and missing-rate conditions while preserving the existing markup calculation; it does not silently change approved pricing.
- Replaced the broken root analytics loader with an explicit opt-in controller. It owns the global tracker, initial and client-side page events, consent persistence, rejection and revocation. Custom page addresses exclude query strings and unrecognized routes. Private, preview and nonproduction routes are excluded. Replay is stopped when consent or route eligibility is lost.
- Added equally accessible analytics choices, a footer privacy control, browser privacy-signal handling, and factual privacy-policy details matching the implementation. This is not a legal compliance certification or receiving-account verification.
- Added a mobile call/quote bar that suppresses itself around visible quote actions, forms, dialogs, privacy controls and on-screen keyboards. Existing branding and the earlier redesign remain in place.
- Centralized public publication rules. The sitemap and generated AI guides share the registered public route inventory. Draft, removed, noindex and canonical-alias fixtures are excluded as appropriate. Dates are supplied only for documented meaningful edits. No existing public URL was deleted or consolidated.
- Removed unsupported review totals, availability guarantees and inspection promises from the generated AI guides. Removed unsupported employee-count and certification claims from the root structured data. Individual page claims still require the remaining editorial review.
- Added an ungated 20-item handover checklist to the existing construction-cleanup process guide. It has accessible native checkboxes, tab-local progress, a text download and print view. It is not a safety checklist, inspection approval, quote or contract.
- Added generation/coherence scripts and retained the existing CI typecheck, link, NAP and build gates.

## Configuration before use

Admin access requires server-only ADMIN_USERNAME and ADMIN_PASSWORD. The password must contain at least 24 characters and should be a unique password-manager-generated value. No default or hard-coded credential is provided. Missing configuration returns 503 rather than allowing access. Open /admin-login to sign in. Browser requests authenticate through standard HTTP Basic authentication over HTTPS; this is a single administrative credential, not a multi-user identity or MFA system. State-changing API clients must include the canonical Origin header as well as their authorization. Never put these credentials in NEXT_PUBLIC variables or Git.

The quote endpoint still requires RESEND_API_KEY and CONTACT_FROM_EMAIL in the server environment. Provider acceptance, inbox delivery and lead qualification are distinct. Existing quote retry keys have the provider's retention limits and do not replace durable lead storage.

Optional analytics use NEXT_PUBLIC_GA_MEASUREMENT_ID and the existing Clarity project, with an optional NEXT_PUBLIC_CLARITY_ID override. NEXT_PUBLIC_DESIGN_PREVIEW=1 disables submission/analytics and adds crawl exclusions. GA4 enhanced-measurement settings, key-event registration, actual event receipts, and Clarity account settings still need inspection.

## Verification and limitations

The isolated suite passed 168 tests under Node 22.16.0. Tests include authentication, denial before database access across the protected route handlers, protected API boundaries and calculator inputs, consent and tag queues, custom analytics payloads, publication lifecycle functions and the handover output. External providers and the database were mocked. A passing mock test is not evidence of live account receipt, transaction behavior against the deployed database, browser conformance or a full application build.

A separate syntax pass covers every local TS/TSX file in this batch. Full dependency installation, TypeScript project checking and Next build are still blocked by the unavailable executable full-source environment. GitHub Actions jobs failed before running executable steps. The direct Replit browser attempt did not start because the browser connector's wallet is depleted. No Replit workspace pull is confirmed.

The repository still pins Next 14.2.15. A supported framework security upgrade with its lockfile and full regression testing remains a release blocker. This batch does not fix every framework advisory, introduce MFA or certify a penetration test. Admin schema validation, proposal numbering concurrency, account roles, durable lead storage and distributed abuse controls also remain open.

The full master assignment still includes unfinished per-page keyword/content work, claims and permission checks, current responsive/accessibility testing, performance testing, actual Search Console index reconciliation, account/profile/citation edits, and growth research/production/distribution. Prepared assets and implemented helpers must not be represented as completed external work.

## Git and Replit handoff

Commit this complete batch on the existing branch, verify the remote SHA, and fast-forward main only if no unrelated divergence or repository protection prevents it. Do not force-push or reset Replit's uncommitted work. A GitHub push does not prove that the Replit workspace has pulled it. In Replit's Git panel, pull the verified main commit, retain local changes, run the project checks, configure the server credentials, and verify the running preview before any separate publication.

Useful checks: npm run discovery:check; npm run test:audit; npm run audit:links; npm run audit:nap; npm run build. Run the existing project type check as well. A publish must be followed by actual public-route, form-delivery, analytics and responsive checks.

Rollback is a Git revert of this batch while preserving the earlier redesign. No production rollback is needed for code that has not been deployed. Do not roll back newly added admin protection on a public deployment without an alternative access control.
