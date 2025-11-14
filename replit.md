# Imperial Cleaning Inc. Website

## Overview
Imperial Cleaning Inc. is a full-stack web application for commercial cleaning services across Idaho and Utah. Its main purpose is to maximize organic search visibility, generate leads, and provide a robust platform for business growth. The site targets commercial contractors and businesses, offering construction and commercial cleaning services, multi-step contact forms, service area pages, and comprehensive analytics to convert organic traffic into qualified leads. The project aims for #1 rankings across traditional search engines and AI platforms for all services in all 24 locations.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript and Vite.
- **Routing**: Wouter for client-side routing.
- **Styling**: Tailwind CSS with shadcn/ui (Radix UI primitives).
- **State Management**: TanStack Query for server state; React hooks for local state.
- **Form Handling**: React Hook Form with Zod validation.
- **UI/UX Decisions**: Fixed background logo, parallax effects, unified icon colors per city theme, light font-weight (300) typography. Mega menu combines services and locations with a tabbed interface. Intelligent search lightbox modal with autocomplete; `/state/service/city/` URL structure; location-specific content generation; structured data and city-specific meta tags; multi-step contact forms. System font stacks used for optimal performance.

### Backend
- **Runtime**: Node.js with Express.js.
- **Language**: TypeScript with ES modules.
- **API Design**: RESTful API with structured error handling.
- **Middleware**: Express middleware for JSON parsing, CORS, logging, and Gzip/Brotli compression.

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL.
- **Database**: PostgreSQL (configured, in-memory currently).
- **Schema Management**: Drizzle Kit for migrations.
- **Connection**: Neon Database serverless PostgreSQL adapter ready.

### SEO and Analytics
- **SEO Optimization**: Comprehensive meta tags (unique for all 58 pages: 10 static + 48 location-specific), structured data (LocalBusiness, Service, BreadcrumbList JSON-LD), semantic HTML, canonical links, Open Graph, Twitter Cards, www-to-non-www redirects, heading hierarchy, unique image alt tags. Enhanced `llms.txt` (48KB, 588 lines) for AI assistant indexing with market-specific success stories, industry expertise, procurement info, testimonials, and service details. Optimized `robots.txt` for priority AI crawlers (15 user-agents). Dynamic sitemap (`sitemap.ts`) with priority rankings based on market importance. Comprehensive `noscript` content for non-JavaScript crawlers.
- **Analytics**: Google Analytics 4 with custom event tracking.
- **Performance**: Optimized images (WebP, preload, explicit dimensions, async decoding), minified assets, lazy loading, critical asset preloading, Gzip/Brotli compression, eliminated render-blocking external fonts, system font stacks.
- **Accessibility**: Descriptive alt text for all images, `aria-hidden` for decorative SVGs.

### Contact and Lead Management
- **Lead Capture**: Contact submissions stored with analytics tracking.
- **Communication Channels**: Click-to-call, SMS, email integration.
- **Form Validation**: Client and server-side validation.

## External Dependencies

### Frontend
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query.
- **UI Framework**: Radix UI, Tailwind CSS, class-variance-authority.
- **Routing**: Wouter.
- **Validation**: Zod.
- **Icons**: FontAwesome, Lucide React.

### Backend
- **Express Framework**: Express.js.
- **Database**: Drizzle ORM (PostgreSQL dialect), Neon serverless adapter.
- **Validation**: Zod.

### Build and Development Tools
- **Build Tool**: Vite.
- **TypeScript**: Full TypeScript configuration.
- **Replit Integration**: Cartographer, dev banner plugins.
- **PostCSS**: Autoprefixer.

### External Services
- **Analytics**: Google Analytics 4.
- **Email Service**: Resend API.
- **Database Hosting**: Neon Database.
- **Search Console**: Google Search Console.

## Recent Changes

### Unique Meta Tags & Image Alt Tags for All Pages (November 14, 2025)
- **Objective**: Ensure every page (58 total: 10 static + 48 location-specific pages across 24 cities) has unique, SEO-optimized meta titles, descriptions, and featured image alt tags
- **Updated llms.txt** with comprehensive SEO & AI Optimization Strategy section (48KB, 588 lines):
  - Added documentation of unique meta tags approach for all 58 pages
  - Included URL structure examples for maximum SEO (/{state}/{service}/{city}/)
  - Documented AI platform optimization with 15 priority crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, etc.)
  - Highlighted location-specific content with unique titles (~50-55 chars) and descriptions (~140-155 chars)
- **Meta Tag Implementation**:
  - Title format: "{Service} {City}, {State} | Imperial Cleaning"
  - Description format: "Professional {service} in {City}, {State}. Licensed & insured. Serving {County}. {DriveTime}. Call (208) 520-3202 for free quotes."
  - Enhanced `generateLocationTitle` and `generateLocationDescription` in `client/src/lib/location-content-utils.ts`
- **Image Alt Tags** added to all pages:
  - Home: "Imperial Cleaning Inc - Idaho Falls Commercial & Construction Cleaning Services Serving Idaho and Utah"
  - Location pages: "{Service} Services in {City}, {State} | Imperial Cleaning Inc"
  - Hub pages: "{Service} Services Across Idaho & Utah | Imperial Cleaning Inc"
  - Service area pages: "{State} Cleaning Services - Professional Commercial & Construction Cleaning Across [regions]"
- **Verification**:
  - End-to-end Playwright tests confirmed all pages have unique meta titles, descriptions, and image alt tags
  - Sitemap.xml verified with 58 total URLs (10 static + 48 location pages) with proper priority rankings
  - robots.txt verified with 15 priority AI crawlers and security restrictions
- **Files Modified**:
  - `client/public/llms.txt` (added SEO optimization section, now 48KB, 588 lines)
  - `client/src/lib/location-content-utils.ts` (optimized meta tag generators)
  - `client/src/pages/home.tsx`, `construction-cleaning.tsx`, `commercial-cleaning.tsx`, `service-areas-idaho.tsx`, `service-areas-utah.tsx` (unique imageAlt props)
- **Files Verified (No Changes Needed)**:
  - `client/public/robots.txt` (already optimized)
  - `server/sitemap.ts` (already generating all URLs correctly)
- **Status**: Production-ready for #1 rankings across all 24 locations