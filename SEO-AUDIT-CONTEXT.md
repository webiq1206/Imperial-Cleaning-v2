# SEO Audit Context

Auto-extracted from the codebase on 2026-05-27.

## Business identity
- **Brand:** Imperial Cleaning Inc
- **Domain:** https://imperialcleaninginc.com
- **Subtype:** LocalBusiness (commercial and construction cleaning)
- **Founded:** 2015
- **Headquarters:** 2653 Clarence Pl, Idaho Falls, ID 83402 (Google listing canonical; owner-confirmed 2026-06-10)
- **Hours (Google canonical):** Mon-Fri 8AM-5PM, Sat 9AM-1PM, Sun closed
- **Phone:** +1-208-520-3202
- **Email:** service@imperialcleaninginc.com
- **Geo:** 43.4666, -112.0336
- **Service areas:** Idaho and Utah (24 distinct locations, 48 service+city pages)

## Tech stack
- Next.js 14 App Router with TypeScript and React 18
- Per-page `export const metadata` for head tags
- JSON-LD via `<StructuredData>` component or inline `<script type="application/ld+json">` (in `app/layout.tsx`)
- `next/image` pipeline
- Tailwind plus shadcn/ui, dark theme

## Sitewide infrastructure already in place
- `app/layout.tsx`: title template, default OG, Twitter card, robots, icons, manifest, viewport, Organization JSON-LD
- `app/sitemap.ts`: 9 static URLs plus 48 dynamic location pages
- `app/robots.ts`: allowlists GPTBot, ChatGPT-User, Claude-Web, Anthropic-AI, Google-Extended
- `public/robots.txt`: extended allowlist (OAI-SearchBot, ClaudeBot, PerplexityBot, FacebookBot)
- `public/llms.txt` and `public/llms-full.txt`
- 301 redirects in `next.config.js` for legacy WordPress URLs
- `trailingSlash: false`
- Google Analytics 4 deferred to first user interaction
- Internal linking generator (`scripts/internal-links.ts`) with `RelatedContent` slot on every public page

## Brand voice and copy constraints
- Voice: professional, direct, plain language
- No em dashes (user preference)
- Preserve all existing copy and design unless a defect requires a metadata or schema change

## What this audit will NOT touch
- `app/admin/**` (Construction Pipeline CRM)
- `app/api/**` (server routes)
- `lib/db/**` and Drizzle schema
- SendGrid, Google Analytics, Neon integrations
- Visual design or copy outside of metadata, JSON-LD, alt text, and head tags

## Quality gates
- Every public page must have: unique `<title>` (50 to 60 chars), `<meta name="description">` (140 to 160 chars), self-referencing canonical, full OG and Twitter card with image, `BreadcrumbList` JSON-LD, page-type-appropriate schema.
- One commit per page or per defect type. Commit message format: `SEO: <page> - <defect>`.
