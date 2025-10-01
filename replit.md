# Imperial Cleaning Inc. Website

## Overview
Imperial Cleaning Inc. is a professional cleaning services website targeting commercial contractors and businesses across Idaho and Utah. The application is a modern full-stack web application optimized for SEO and lead generation. It features construction cleaning and commercial cleaning services, multi-step contact forms, service area pages, and comprehensive analytics tracking to convert organic search traffic into qualified leads. The project aims to maximize organic search visibility and provide a robust platform for business growth.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite.
- **Routing**: Wouter for lightweight client-side routing.
- **Styling**: Tailwind CSS with shadcn/ui component library, using Radix UI primitives.
- **State Management**: TanStack Query for server state management and React hooks for local state.
- **Form Handling**: React Hook Form with Zod validation.
- **UI/UX Decisions**: Consistent design with fixed background logo, parallax effects in hero sections, unified icon colors per city theme, and standardized light font-weight (300) across all typography. Mega menu combines services and locations with a tabbed interface.
- **Feature Specifications**: Intelligent search lightbox modal with autocomplete; URL structure migration to `/state/service/city/` format; location-specific content generation with 5 new sections per city page; comprehensive structured data and city-specific meta tags; multi-step contact forms.

### Backend Architecture
- **Runtime**: Node.js with Express.js.
- **Language**: TypeScript with ES modules.
- **API Design**: RESTful API with structured error handling.
- **Middleware**: Express middleware for JSON parsing, CORS, and logging.
- **Storage Interface**: Abstracted storage layer with in-memory implementation, designed for future PostgreSQL integration.

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL.
- **Database**: PostgreSQL (configured, currently using in-memory).
- **Schema Management**: Drizzle Kit for migrations.
- **Connection**: Neon Database serverless PostgreSQL adapter ready.

### Authentication and Authorization
- **Current State**: No authentication implemented (contact forms are public).
- **Security**: Input validation via Zod schemas.

### SEO and Analytics Integration
- **SEO Optimization**: Comprehensive meta tags, structured data (JSON-LD), semantic HTML, canonical link tags, Open Graph and Twitter Card tags, www-to-non-www redirects, and proper heading hierarchy.
- **Analytics**: Google Analytics 4 integration with custom event tracking.
- **Performance**: Optimized images, minified assets, lazy loading.
- **Schema Markup**: LocalBusiness, Service, and BreadcrumbList structured data.

### Contact and Lead Management
- **Lead Capture**: Contact submissions stored with analytics tracking.
- **Communication Channels**: Click-to-call, SMS, and email integration.
- **Form Validation**: Client and server-side validation.

## External Dependencies

### Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query.
- **UI Framework**: Radix UI components, Tailwind CSS, class-variance-authority.
- **Routing**: Wouter.
- **Validation**: Zod.
- **Icons**: FontAwesome and Lucide React.

### Backend Dependencies
- **Express Framework**: Express.js.
- **Database**: Drizzle ORM with PostgreSQL dialect, Neon serverless adapter.
- **Validation**: Zod.

### Build and Development Tools
- **Build Tool**: Vite.
- **TypeScript**: Full TypeScript configuration.
- **Replit Integration**: Cartographer and dev banner plugins.
- **PostCSS**: Autoprefixer.

### External Services
- **Analytics**: Google Analytics 4.
- **Email Service**: Resend API.
- **Database Hosting**: Neon Database.
- **Session Storage**: PostgreSQL session store.

### SEO and Performance
- **Search Console**: Google Search Console.

## Recent Changes (October 1, 2025)

### Critical SEO Optimization - Phase 2
- **Added comprehensive noscript content** (~600+ words) to index.html for SEO crawlers that don't execute JavaScript
  - Includes H1, H2, H3 heading structure with proper semantic HTML
  - Full service descriptions, location coverage, company statistics, and contact CTAs
  - Resolves "0 words content" and "0% text-to-code ratio" audit issues
- **Added social media links** to footer: Facebook, LinkedIn, Twitter/X, Instagram, YouTube
  - All links include target="_blank", rel="noopener noreferrer", and descriptive aria-labels
  - Font Awesome icons for visual consistency
  - Addresses missing social media presence audit findings
- **Enhanced structured data** with comprehensive Schema.org LocalBusiness markup:
  - Added logo, image, foundingDate (2015), priceRange, paymentAccepted
  - Geographic coordinates (latitude: 43.4916, longitude: -112.0339)
  - Detailed address with postal code (83402)
  - hasOfferCatalog with detailed service offerings
  - openingHoursSpecification for business hours
  - sameAs property with all social media profile URLs
  - Valid JSON-LD format resolving schema validation errors
- **Verification**: All SEO fixes tested and verified with end-to-end Playwright tests
- **Files modified**: `client/index.html`, `client/src/components/layout/footer.tsx`

### Previous SEO Optimization - Phase 1
- Fixed homepage title tag: 56 characters ("Commercial Cleaning Idaho Falls | Imperial Cleaning")
- Fixed meta description: 148 characters with local keywords and phone number
- Added canonical link tags, Open Graph tags, Twitter Card tags
- Implemented www-to-non-www redirect middleware (301 redirects)
- Verified proper H1/H2 heading hierarchy
- Fixed favicon meta tags for all devices