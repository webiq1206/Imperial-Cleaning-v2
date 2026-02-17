# Imperial Cleaning Inc - Next.js Website

## Overview

This is a professional business website for Imperial Cleaning Inc, a commercial and construction cleaning company serving Idaho and Utah. The site is built with Next.js 14 using the App Router pattern, featuring location-based service pages, SEO optimization, and lead generation through contact forms. The business is headquartered in Idaho Falls, Idaho and provides cleaning services across 24+ cities in both states.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 14 with App Router**: Server-side rendering and static generation for SEO performance
- **React 18**: Component-based UI with client/server component separation
- **TypeScript**: Full type safety across the codebase

### Styling & UI
- **Tailwind CSS**: Utility-first styling with custom design system variables
- **shadcn/ui**: Radix-based component library with new-york style variant
- **CSS Variables**: Dark theme with cyan-to-purple gradient accent colors
- **Lucide React**: Icon library replacing Font Awesome (inline SVGs, no CDN dependency)

### Data Management
- **TanStack Query**: Server state management with caching
- **Drizzle ORM with Neon**: PostgreSQL database for form submissions and data persistence
- **Zod**: Schema validation for forms and API data

### Routing Pattern
Location-specific pages follow the URL structure: `/{state}/{service}/{city}/`
- States: `idaho`, `utah`
- Services: `construction-cleaning`, `commercial-cleaning`
- Cities: URL-slugified location names from centralized data

### Key Architectural Decisions

1. **Centralized Location Data**: All 24+ service locations defined in `data/service-locations.ts` with market tiers, demographics, and service availability. This single source of truth drives sitemap generation, navigation, and page content.

2. **Client/Server Component Split**: Page metadata exports live in server components (`app/*/page.tsx`) while interactive UI lives in client components (`components/pages/*-client.tsx`).

3. **SEO-First Design**: Each page has unique meta tags, structured data (JSON-LD), and canonical URLs. Dynamic sitemap and robots.txt generated via Next.js metadata API.

4. **AI Indexing Support**: `llms.txt` files in public directory provide comprehensive reference content for AI assistants and search engines.

### Component Organization
- `app/`: Next.js App Router pages and layouts
- `components/`: Reusable UI components
- `components/pages/`: Page-specific client components
- `components/layout/`: Header, footer, navigation
- `components/ui/`: shadcn/ui primitives
- `components/shared/`: Cross-cutting shared components
- `lib/`: Utilities for routing, analytics, content generation
- `data/`: Centralized data definitions
- `hooks/`: Custom React hooks

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless Postgres via `@neondatabase/serverless`
- **Drizzle ORM**: Database schema and queries with `drizzle-kit` for migrations

### UI Components
- **Radix UI**: Accessible component primitives (accordion, dialog, tabs, etc.)
- **Embla Carousel**: Touch-friendly carousels with autoplay

### Form Handling
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Zod integration for validation

### Analytics
- **Google Analytics 4**: Page views and event tracking via gtag (deferred to first user interaction - scroll/click/touch)
- Custom analytics utilities in `lib/analytics.ts`

### External Services
- **Google Fonts**: Inter font family

### Performance Optimizations
- **Mobile CSS**: Heavy effects (blur, parallax, grain, noise overlays, complex gradients) disabled on mobile via @media (max-width: 768px)
- **Font Awesome removed**: Replaced entirely with lucide-react inline SVGs to eliminate 154KB font + 19KB CSS CDN load
- **Unused packages removed**: framer-motion, cmdk, recharts, input-otp, vaul
- **Decorative DOM hidden on mobile**: Parallax layers, background treatments, orbital elements hidden with `hidden md:block`
- **GA deferred to interaction**: Google Analytics only loads on first user scroll/click/touch via inline script (no Next.js Script overhead)
- **Server component slots**: FeaturesSection, PartnersSection, ServiceAreasSection rendered as server components passed as ReactNode slots to HomeClient, eliminating their client JS
- **Direct imports**: FeaturesSection imports from `shared/stats/feature-stats` directly instead of barrel export to avoid pulling in client-side testimonial modules
- **Package optimization**: `optimizePackageImports` for lucide-react and Radix UI packages in next.config.js
- **JSON-LD inlined**: Structured data uses plain `<script>` tags instead of Next.js Script component
- **Providers removed**: Empty Providers wrapper eliminated from root layout
- **Console stripping**: `removeConsole` in production compiler options
- **Static asset caching**: `Cache-Control: immutable` headers for `/_next/static/` assets

### Build Tools
- **PostCSS + Autoprefixer**: CSS processing
- **TypeScript**: Strict mode enabled with path aliases