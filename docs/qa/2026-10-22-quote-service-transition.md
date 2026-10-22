# Quote service entry transitions

A visitor who opened a commercial quote and then followed a construction quote link in the same tab saw the commercial service restored from session storage. Fresh tabs selected construction correctly. Draft restoration preceded context initialization, whose condition only filled an empty service. The same condition exists in the pre-PR26 base `5839984b0b4348f0366cb92bc2f9a0fb74f64bb0`: this is an existing draft/context defect, not a content-link regression introduced by PR26.

The fix records the entry service separately from the editable selected service. A different recognized entry service updates the selection and returns to step one for review, retaining names, notes and other draft fields. Reopening the same entry preserves manual changes. Plain/invalid service URLs do not force a selection. Next route/search hooks also handle query-only navigation while the form stays mounted. A local Suspense boundary provides an accessible loading message during static rendering. Existing v1 drafts remain readable, with the new service context applied when entry metadata is absent.

Draft expiry, tab scope, honeypot exclusion, accepted-draft clearing, provider-receipt checks, idempotency and submission safeguards remain intact. No request-handler, delivery-provider, security, public URL, canonical or business-content change.

## Evidence

- New commercial-to-construction remount regression failed against unchanged main and passes with the fix.
- Rendered fixtures cover same-entry manual choice, contact/notes retention, both mounted query-transition directions, plain/invalid parameters and legacy v1 drafts.
- Existing UI suite, 226 audit tests, 114 website checks, 330 search-appearance checks, TypeScript and production build pass. All submission scenarios use existing local fetch stubs; no production submission or email occurs.
- Removed two implementation-string assertions from the audit: rendered behavior tests now cover service precedence while delivery-safeguard assertions remain.
- Native browser confirmation and actual publication remain separate gates. Passing fixtures do not prove live mail delivery.

## Source reconciliation

Base is merged main `24ab3661374bd27d6428a21a612572ee51b2ff99`, tree `fa04f2ae7b0210853716538bdc8c16d832b354ee`. No other open PR was found before this batch. Parent's browser receipt observes Replit HEAD `08ecd89abd4a6a32248e6acaf844c6b1e6488dc0` with that same approved tree and live matching three-page content. The old workspace HEAD is not an ancestor, but its recovery ref remains intact. This fix does not rewrite or restore the intervening publication history. Latest Git publication message names build `bc3b1e84-a38a-4174-a329-60da975865f2`; current exact deployed build/SHA remains unexposed in the UI receipt and must not be inferred from replayed publication messages.
