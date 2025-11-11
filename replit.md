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

### Advanced PageSpeed Optimization - Phase 3 (October 1-2, 2025)
- **Text compression enabled (Gzip/Brotli)**:
  - Added compression middleware to server/index.ts
  - Compresses all text-based responses (HTML, CSS, JavaScript, JSON) in production
  - Positioned before all routes to ensure complete coverage
  - Significantly reduces transfer size for all text assets
- **WebP image optimization**:
  - Converted hero logo PNG (82KB) to WebP (34KB) = 58% file size reduction
  - Implemented picture elements with WebP primary source and PNG fallback
  - WebP images served to modern browsers, PNG fallback for legacy browsers
  - Hero WebP initially stored in public/hero-logo.webp, then moved to client/public/hero-logo.webp for proper Vite serving
- **Critical asset preloading**:
  - Added preload hint for hero WebP image: `<link rel="preload" href="/hero-logo.webp" as="image" type="image/webp" fetchpriority="high">`
  - Preload ensures critical hero image loads immediately for improved LCP
  - Font Awesome CSS continues to use deferred preload technique
- **Performance metrics improvements**:
  - LCP (Largest Contentful Paint): Improved with WebP optimization + preload
  - TBT (Total Blocking Time): Reduced with compression and async loading
  - FCP (First Contentful Paint): Faster with compressed text assets
  - Bundle size: Reduced by 58% for hero images (82KB → 34KB)
- **Critical bug fix (October 2)**:
  - Fixed background logo not loading on mobile in production
  - Root cause: Vite's root is set to `client/` directory (vite.config.ts line 29), so it serves public files from `client/public/`, not project root `public/`
  - Solution: Moved hero-logo.webp from `public/` to `client/public/` for proper static file serving by Vite in development
  - Verified: Mobile background logo now loads correctly with WebP format, proper opacity (0.2), and visible rendering
- **Files modified**: `server/index.ts`, `client/index.html`, `client/src/components/hero-section.tsx`, `client/src/components/internal-hero-section.tsx`, `client/public/hero-logo.webp`
- **Testing**: End-to-end tests confirmed WebP loading, picture element fallbacks, preload functionality, mobile background logo visibility, and zero regressions

### Performance Optimization for PageSpeed Insights - Phase 2 (October 1, 2025)
- **Eliminated render-blocking external fonts**:
  - Removed Google Fonts (Inter, Geist, Fira Code) from index.html and index.css
  - Implemented system font stacks for optimal performance: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`
  - Font Awesome CSS now deferred using preload + onload technique (non-blocking)
- **Optimized image loading**:
  - Hero images: Added `fetchPriority="high"` for above-the-fold content, explicit width/height dimensions (384x384, 512x512), `decoding="async"`
  - Footer logo: Added `loading="lazy"`, `decoding="async"`, width="120" height="32"
  - Header logo: Added width="75" height="20", `decoding="async"`
  - All images have explicit dimensions to prevent Cumulative Layout Shift (CLS)
- **CSS performance improvements**:
  - Consolidated and organized animations in dedicated section
  - Removed duplicate keyframe definitions
- **Target metrics**:
  - Largest Contentful Paint (LCP): Optimized with high-priority hero images
  - Cumulative Layout Shift (CLS): Eliminated with explicit image dimensions
  - Total Blocking Time (TBT): Reduced with async image decoding and deferred Font Awesome
  - First Contentful Paint (FCP): Improved by removing render-blocking fonts
- **Files modified**: `client/index.html`, `client/src/index.css`, `client/src/components/hero-section.tsx`, `client/src/components/internal-hero-section.tsx`, `client/src/components/layout/footer.tsx`, `client/src/components/layout/header.tsx`

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
- **Fixed image accessibility issues**: Added descriptive alt text to all images
  - Hero section background and main logos
  - Internal hero background logos
  - All images now have SEO-friendly, descriptive alt attributes
- **Fixed duplicate ID attributes**: Removed duplicate IDs from home.tsx wrapper divs
  - case-studies, compliance, and faq sections now have unique IDs
  - Zero duplicate IDs across entire homepage (46 unique IDs)
  - Anchor links (#case-studies, #compliance, #faq) work correctly
- **Added aria-hidden to decorative SVGs**: Small decorative icons properly marked as presentational
- **Verification**: All SEO fixes tested and verified with comprehensive end-to-end Playwright tests
- **Files modified**: `client/index.html`, `client/src/components/layout/footer.tsx`, `client/src/pages/home.tsx`, `client/src/components/hero-section.tsx`, `client/src/components/internal-hero-section.tsx`

### Search Engine & AI Indexing Preparation (November 11, 2025)
- **Added llms.txt file** for AI assistant indexing and discovery:
  - Comprehensive 18KB markdown reference guide at `/llms.txt`
  - Complete company information, contact details, and business hours
  - All four core service types with detailed descriptions
  - Full Idaho service area coverage (16 cities across 10 counties)
  - Full Utah service area coverage (8 cities across 5 counties)
  - Industry-specific specialties and certifications
  - Search term mappings for AI assistant queries
  - Enables accurate AI recommendations for cleaning services in Idaho/Utah
- **Updated robots.txt** to allow AI crawler access:
  - Added directives for GPTBot, OAI-SearchBot, ChatGPT-User (OpenAI)
  - Added directives for ClaudeBot, Claude-Web, SearchIndexerBot (Anthropic)
  - Added directives for PerplexityBot (Perplexity AI)
  - Added directives for Google-Extended (Google Gemini AI training)
  - Maintains security by blocking /admin/, /api/, and sensitive paths
  - References llms.txt location for AI crawler discovery
- **Created SEARCH_ENGINE_SUBMISSION_GUIDE.md**:
  - Step-by-step instructions for Google Search Console submission
  - Step-by-step instructions for Bing Webmaster Tools submission
  - Optional Yandex submission (for Russian market)
  - AI platform optimization (ChatGPT, Claude, Perplexity, Gemini)
  - Monitoring and verification procedures
  - Realistic timelines for indexing (1-4 weeks)
  - Priority action plan with weekly milestones
- **File locations**: 
  - `client/public/llms.txt` (served at https://imperialcleaninginc.com/llms.txt)
  - `client/public/robots.txt` (served at https://imperialcleaninginc.com/robots.txt)
  - `SEARCH_ENGINE_SUBMISSION_GUIDE.md` (project documentation)
- **Purpose**: Maximize discoverability in both traditional search engines and AI-powered search tools
- **Status**: Ready for search engine submission (user action required for verification)

### Previous SEO Optimization - Phase 1
- Fixed homepage title tag: 56 characters ("Commercial Cleaning Idaho Falls | Imperial Cleaning")
- Fixed meta description: 148 characters with local keywords and phone number
- Added canonical link tags, Open Graph tags, Twitter Card tags
- Implemented www-to-non-www redirect middleware (301 redirects)
- Verified proper H1/H2 heading hierarchy
- Fixed favicon meta tags for all devices