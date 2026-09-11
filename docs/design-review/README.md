# Imperial Cleaning website redesign review

Prepared September 11, 2026. Based on main commit `b3a23007b83c7df04c96e96a03b5bded72af7b90`.

This is a proposed redesign for owner review. No merge, deployment, publishing, or live-site change is authorized.

## Scope

All 95 registered public pages retain their routes, canonical URLs, metadata, and substantive service and local content.

| Page family | Pages | Main treatment |
| --- | ---: | --- |
| Homepage | 1 | Clear service proposition, two service paths, reviews, process, coverage and FAQs |
| Commercial and construction hubs | 2 | Shared hero, section navigation, service structure and quote actions |
| Area directory and state hubs | 3 | Cities and services before long market overviews |
| City and service pages | 48 | Consistent responsive hero, section links and existing local content |
| Industry and specialty services | 17 | Shared hierarchy, simpler cards and collapsible FAQs |
| Resource hub and guides | 18 | Reading layout and guide contents navigation |
| About and reviews | 2 | Restrained brand story and existing customer review content |
| Contact | 1 | Two-step quote form, contact options and next steps |
| Legal pages and HTML sitemap | 3 | Shared typography, navigation and footer |

Administrative project tools and their business workflows were not redesigned.

## Main changes

- Existing lion artwork, black and white palette, cyan, and purple remain recognizable.
- A quieter visual system replaces competing gradients, textures, animations, and repeated card effects.
- Navigation groups services, industries, areas, and company information. Search covers all public pages.
- Quote and phone actions are consistent. Service, city, guide, and industry templates share clear next steps.
- Forms ask about the space first, then contact details. They preserve data when going back, validate fields, and distinguish errors from actual success.
- Existing customer review text and licensing/insurance statements appear beside decision points. Unsubstantiated project and staff totals were removed from the proposed About page.
- Readable body text, visible focus states, reduced-motion support, touch-friendly controls, and responsive grids improve usability. Mobile navigation and dialogs support keyboard focus and dismissal.
- Original metadata, structured data, service-area content, and page relationships remain in the application.

## Review copy and local development

The standalone HTML review reproduces production HTML and CSS for all 95 public pages. Menus, search, FAQs, and quote steps use lightweight local simulations. A current browser with gzip DecompressionStream support is required. The copy sends no form requests and loads no analytics.

The full React/Next implementation is in this branch:

1. Install locked dependencies with `npm ci`.
2. Set `NEXT_PUBLIC_DESIGN_PREVIEW=1` in an ignored `.env.local`.
3. Run `npm run dev` for local review or `npm run build` for a production preview build.
4. After building, regenerate the file with `python scripts/export-review.py /absolute/path/Imperial-Website-Redesign-Preview.html`.

Development output uses `.next-dev`, separate from production `.next`, so a build does not corrupt an active local preview.

## Verification

- Production build passed, generating 122 outputs including all 95 public pages. Type checking passed.
- Internal link audit: zero broken links and zero orphan public pages. The existing audit reports 23 pages with fewer than five incoming links, a nonblocking SEO opportunity.
- Business name, address, phone, and email audit: zero warnings or failures.
- Built HTML inspection: one H1 per public page and no duplicate IDs. Internal page and section links resolve. The XML sitemap exists as a generated route.
- Actual application checked in desktop, tablet, and phone layouts. Desktop and mobile menus, search, quote modal, required-field errors, phone validation, back navigation, and the no-send preview result were exercised.
- Enlarged-text inspection found overflow; reflow fixes were applied. The browser connection stalled before the final enlarged-text and standalone-package visual recheck, so those checks remain outstanding.
- Contact endpoint checks passed for malformed JSON, missing fields, invalid phone, absent mail configuration, and preview blocking. No email was sent.
- Standalone content and JavaScript syntax checks passed: 95 embedded pages, five assets, and 542 FAQ answers.

## Contact delivery before a future launch

The original endpoint logged requests and returned success without delivering email. The proposed endpoint sends through Resend only when configured, validates on the server, and reports success only after provider acceptance. Missing configuration returns an error with phone/email alternatives.

Before any approved launch:

1. Configure `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL` on the server.
2. Remove the preview flag for the launch build.
3. Test real delivery and failure handling with the owner. Delivery goes to the existing `service@imperialcleaninginc.com` address.
4. Complete the outstanding visual recheck and normal prelaunch dependency review. Existing Next 14.2.15 has not been upgraded in this design proposal.

No credentials are committed. Preview forms and analytics are disabled with the preview flag. No public site, production data, or main-branch setting was changed.

## Image provenance

`public/images/commercial-interior.jpg` is illustrative stock photography, not an Imperial project, client facility, or staff image.

- Source: [Point3D Commercial Imaging, Unsplash](https://unsplash.com/photos/wRBotCP7UxU)
- Original: [Unsplash image](https://images.unsplash.com/photo-1656646424763-145e4956a416)
- License: [Unsplash License](https://unsplash.com/license)
- Treatment: resized to a maximum width of 1600 pixels and JPEG compressed.

The existing Imperial lion logo asset is unchanged.
