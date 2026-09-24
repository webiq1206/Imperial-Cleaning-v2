# Service visibility correction: September 24, 2026

## Owner clarification

Construction cleanup is primary. Commercial cleaning must remain prominent, not hidden or reduced to a late-page afterthought. Preserve both services and their independent buying paths. This corrects the interpretation in the September 23 implementation; it does not reverse the construction-first search focus.

## Implemented changes

- Kept the construction-focused H1, title, keywords, primary hero quote action, phase content, and construction-first navigation.
- Added a visible Commercial cleaning button beside the construction quote action in the hero. The introduction names recurring commercial cleaning, and the hero service links expose both service hubs. Calling remains available beneath the buttons.
- Replaced the first section with two full service cards. Construction is first and modestly wider on desktop. Commercial appears alongside it with the same heading size, readable copy, task list, and its own service and quote links. Both stack in that order on mobile, before the construction phase detail and reviews.
- Moved commercial cleaning out of the late, smaller Also available block. The existing commercial-cleaning fragment now targets the early service card, avoiding duplicate IDs.
- Kept office-cleaning and janitorial-service links in the commercial card. Its quote link passes service=commercial; construction retains service=construction. No form, delivery, privacy, analytics, or authorization behavior was changed.
- Changed footer copy to address projects and workplaces rather than only construction. Both existing service-navigation groups remain accessible.
- Updated the shared homepage description while retaining construction first. Updated only the homepage publication date to September 24, 2026. The public inventory remains 95 URLs.
- Added the latest owner clarification to the earlier checkpoint so future changes do not repeat the overcorrection.

No new service claims, testimonials, pricing, dependencies, framework changes, or URL removals were introduced.

## Verification actually performed

Base commit: 2478d8a28724219ee7d542b14acef5e92967c10e.

The unchanged construction-priority test suite passed its 24 checks before editing. Four assertions encoded the older visibility/copy/date decisions, so those were updated for the new owner clarification. Two checks were added for independent service/quote paths and mobile card treatment. All 26 focused checks passed after the changes.

This focused suite includes semantic checking of five data/helper modules with the project's strict ES2017 options and syntax transpilation of eight relevant TSX files. It also checks all 95 discovery paths, the existing NAP data in both generated reference files, quote-context handling, construction-specific related links, and matching visible/structured FAQ sources. It is not a complete application type check or full site regression run.

Environment: Node 22.16.0; available TypeScript 5.8.3. The repository's pinned dependencies and compiler configuration were not changed. External package access was unavailable, so a complete Next.js build was not run.

An offline static fixture rendered the actual edited hero and first service section using archived base CSS and the edited service-priority CSS. Next Link/Image, icons, and the header were represented by layout adapters; it did not run the application's React/Next runtime. Chromium checked widths 320, 375, 390, 430, 768, 1024, 1280, and 1440 for horizontal overflow, visible commercial actions, service-card visibility, nonoverlapping touch controls, and duplicate IDs. Phone and desktop fixture screenshots were visually reviewed. This is limited layout evidence, not live-browser or production verification.

## Release boundary

Only the visibility correction and its tests/checkpoint are included in this batch. The earlier security, framework, complete content, and external marketing tasks remain separate. No Replit Agent was prompted, no production deployment was performed, and no real customer message was sent.

Pull the resulting main commit into Replit, run the full build, and verify the live homepage, both service destinations, both quote selections, and responsive navigation before treating the release as production-verified. A normal revert of this batch preserves the earlier NAP, compiler, and construction-priority work.
