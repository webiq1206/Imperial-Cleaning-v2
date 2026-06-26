# Next metadata inheritance pitfalls

In Next.js App Router, nested metadata objects like `openGraph` and `twitter` should be treated as replace-not-merge unless verified otherwise. When a route defines a page-level `openGraph` or `twitter` object, shared defaults such as `images`, `siteName`, `site`, or `creator` may disappear unless they are explicitly included again or spread in from a shared helper.

When scanning or building SEO metadata, always verify page-level overrides on important public routes, especially content pages that rely on root-layout defaults for social preview images or branded account attribution.
