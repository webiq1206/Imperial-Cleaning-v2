# Contact history and responsive-header fix batch

Baseline: `f678b855c57e3cbf78eda2d084b19d1a7d004663`, repository `webiq1206/Imperial-Cleaning-v2`, branch `main`. GitHub identity and main were read on October 9. No open PR existed at initial and pre-PR reconciliation. The task list showed no other Imperial implementation owner; the Wednesday QA task remained the evidence owner. This batch is the sole source owner, not a competing release.

Read the complete Library standard, version 2, `libfile_5c0bbcbb22848191a66be61b419ad5fa`, including its release addendum, and QA report `libfile_1f6264c66308819192b7016f13508529`. Read repository `.agents/memory` and both CI workflows. No repository AGENTS.md or skill instructions were found.

## Findings and source changes

- Browser Back/Forward lost the quote draft. `components/quote-form.tsx` now restores the current step and bounded fields from tab-scoped session storage through `lib/quote-draft.ts`. Drafts expire after 30 minutes of inactivity, exclude the honeypot, tolerate blocked/malformed storage, and clear on confirmed acceptance. They never enter analytics. The actual form lives here; `components/pages/contact-client.tsx` only embeds it and needed no change.
- At 768px, the desktop header exceeded the viewport. `components/layout/header.tsx` keeps the existing drawer through widths below 1280px and centers the desktop services panel within the header instead of the narrow Services trigger. `app/website-refinements.css` contains the decorative header glow horizontally without clipping navigation panels.
- Repeated transitions displaced focus beneath/above the sticky header. Heading focus now uses an explicit header offset and instant scrolling; dialog forms scroll their heading within the dialog instead.
- `components/analytics-consent.tsx` suppresses the notice while any quote-form control has focus, including the notes summary and Continue. Existing suppression while typing and the owner's analytics choice remain intact. The historical Notes-overlap finding remains condition-dependent; the new clean-context test proves the current notes and Continue states are unobscured, not that the exact old Windows condition was reproduced.

## Isolated evidence

A dedicated headless Chromium context forwarded page/assets only to `127.0.0.1:4317`. Every API was fulfilled with a synthetic fixture and every other host aborted. No shared Mac browser, live production request, mail, database, or provider submission was used.

Baseline source reproduced 941px scroll width against 768px client width, an empty city after navigating to the privacy policy and Back, and repeated focused-heading tops of -24.84px and 8.16px against a 74px sticky header. The baseline diagnostic printed its measurements but encountered a pending-request teardown error after capture; it is reproduction evidence, not a passing test run.

Final checks:

- TypeScript: pass.
- `npm run test:audit`: 223 passed.
- `npm run test:website`: pass.
- `node scripts/check-search-appearance.mjs`: 330 passed.
- `npm run discovery:check`: 95 canonical routes current.
- `npm run test:ui`: pass, including new unmount/remount draft, expiry, malformed/blocked storage and honeypot checks.
- `npm run build`: pass, 215 static outputs. Internal-link audit: zero broken links and zero orphans, with 23 existing weak-equity warnings. NAP audit: zero warnings/failures.
- `scripts/check-contact-browser.cjs`: construction entry, repeated heading focus at 390x844, Back/Forward/reload recovery, clean-consent notes and Continue at 320x568, mocked failure retention, mocked acceptance clearing, and exact viewport-width layout at 320/390/430/768/1024/1280/1440.

Browser reproduction command: start `npm run dev -- --hostname 127.0.0.1 --port 4317`, then run `PLAYWRIGHT_MODULE=/absolute/path/to/installed/playwright node scripts/check-contact-browser.cjs`. The browser tool dependency is supplied by the isolated QA environment, not added to the application lockfile. The script hardcodes loopback transport and mock API responses to prevent live submissions. Screenshots/results are local evidence in the task workspace.

## Affected inventory and gates

Header and consent affect all 95 public routes in `data/internal-links.json`; source/shared-component checks cover the common implementation, but this is not a manual visual acceptance of every route. Quote changes affect `/contact`, its service/city entry context, and the shared quote dialog. Existing brand assets, business facts, privacy default, schema, URLs and generated discovery content are unchanged.

Still pending: full per-page rendered crawl, real device keyboard, screen reader, WebKit/Firefox, zoom/text-resize and live journey checks. The shared Mac browser remains assigned elsewhere. Draft recovery requires session storage; blocked storage preserves the active form but cannot survive remount.

The `.replit` file establishes autoscale deployment, `npm run build`/`npm start`, and port 5000. It does **not** establish the exact authorized Replit account, project, deployment or domain mapping. No WebIQ account was inferred to be Imperial. Receiving provider/mailbox and test-recipient isolation remain unverified. The October 6 provider receipt is not inbox-delivery evidence and was not repeated.

GitHub's billing-usage read returned 404 with missing `user` scope. No permission expansion was attempted. The draft commit uses `[skip ci]` to avoid unverified spending. Final-revision remote CI remains blocked until the existing free allowance/cap is verified; local checks do not substitute for it.

This PR is not merged or published. The release owner must verify CI allowance, run CI for the exact final revision, reconcile the exact Replit mapping/dirty state, import the approved commit, publish once, verify live identity and affected journeys, and verify an isolated receiving record and inbox receipt. Search notifications follow verified publication and public-file checks. No indexing, conversion improvement, live completion or email delivery is claimed.
