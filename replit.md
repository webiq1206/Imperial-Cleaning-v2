# Imperial Cleaning Inc. Website

## Overview

Imperial Cleaning Inc. is a professional cleaning services website targeting commercial contractors and businesses across Idaho and Utah. The application is built as a modern full-stack web application optimized for SEO and lead generation, featuring construction cleaning and commercial cleaning services. The site includes multi-step contact forms, service area pages, and comprehensive analytics tracking to convert organic search traffic into qualified leads.

## User Preferences

Preferred communication style: Simple, everyday language.

## Company History

- **Founded**: 2015 in Idaho Falls, Idaho
- **Utah Expansion**: 2023
- **Years of Service**: 10 years (2015-2025)

## Recent Changes (September 30, 2025)

### Featured Image Implementation
- Implemented Imperial Cleaning Inc. logo as featured image across all 10 website pages for enhanced social media sharing
- Added SEO-optimized, page-specific alt tags to improve brand visibility and context
- Logo displays when pages are shared on Facebook, Twitter, LinkedIn, and other social platforms
- Each page has unique alt text combining brand name with page-specific context and relevant keywords
- Implementation includes both Open Graph and Twitter Card image properties
- Pages updated: Home, Construction Cleaning, Commercial Cleaning, Idaho Service Areas, Utah Service Areas, About, Contact, Privacy Policy, Terms of Service, Sitemap

### Accurate Company History Implementation
- Corrected founding date from false "2010" to accurate "2015" across entire codebase
- Updated Utah expansion date from false "2013" to accurate "2023" 
- Removed all fake addresses ("123 Business Blvd") from About page, Contact page, Terms of Service, Privacy Policy, and structured data schemas
- Updated all "years of experience" references from 15+ to accurate 10 years
- Fixed all SEO metadata (titles, descriptions, Open Graph, Twitter cards) with correct dates
- Updated company milestones timeline with accurate chronology
- Changes applied to: App.tsx (About/Contact pages), home.tsx, seo-head.tsx, footer.tsx, terms-of-service.tsx, privacy-policy.tsx

### Service Level Enhancement
- Updated all service area comparison tables to display 5-star service level across all Idaho and Utah markets
- Applied to Idaho Falls, Pocatello, Twin Falls, Blackfoot, Rexburg, Boise, Logan, Ogden, Salt Lake City, and Provo

### Icon Color Consistency
- Unified icon colors within each city playbook section to match city's designated theme color
- Each city's icons (Key Industries, Industry Challenges, Our Solutions, Compliance) now use consistent color throughout section
- Idaho cities: primary (cyan), blue, green, yellow, purple, indigo
- Utah cities: primary (cyan), blue, green, purple

### Typography Standardization
- Removed all font-bold, font-semibold, and font-medium classes from entire codebase (55+ files)
- All text now uses consistent font-weight: 300 (light) for elegant, uniform appearance
- Applied across all pages, components, and UI elements

### Hero Section Redesign
- Created reusable InternalHeroSection component matching homepage design with fixed background logo, parallax effects, and sophisticated styling
- Updated all internal pages (Construction Cleaning, Commercial Cleaning, Idaho/Utah Service Areas) to use consistent hero design
- Maintained mobile optimization with -mt-12 spacing and proper background logo display (visible on mobile, hidden on desktop)

### Content Cleanup
- Removed all instances of "In ALL Locations", "ALL Service Areas", and similar unprofessional phrasing from headings and descriptions
- Replaced with regionally scoped, professional language while preserving SEO value and geographic keywords (Idaho, Utah)
- Updates applied to Construction Cleaning, Commercial Cleaning, and Case Studies sections

### Service Area Pages Transformation
- Redesigned Idaho and Utah service area pages from generic city lists to industry-specific playbook format
- Added market overview sections with regional strengths and response time commitments
- Created detailed city playbooks featuring: dominant industries (INL, Chobani, Qualtrics, Hill AFB), operational challenges, tailored solutions, compliance requirements, and proof points
- Implemented service readiness comparison tables showing response times, crew availability, and specializations
- Added operational assurance sections covering licensing, OSHA compliance, 24/7 emergency response, and quality processes
- Maintained all SEO elements (H2 headings with city names, structured data, geographic keywords) while providing actionable content for decision-making

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **UI Components**: Radix UI primitives with custom theming through CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling and request logging
- **Middleware**: Express middleware for JSON parsing, CORS handling, and request/response logging
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Database**: PostgreSQL (configured but not yet connected - currently using in-memory storage)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL adapter ready for deployment

### Authentication and Authorization
- **Current State**: No authentication system implemented (contact forms are public)
- **Session Management**: Basic session handling configured but not actively used
- **Security**: Input validation through Zod schemas and sanitized form submissions

### SEO and Analytics Integration
- **SEO Optimization**: Comprehensive meta tags, structured data (JSON-LD), and semantic HTML
- **Analytics**: Google Analytics 4 integration with custom event tracking
- **Performance**: Optimized images, minified assets, and lazy loading
- **Schema Markup**: LocalBusiness, Service, and FAQ structured data for better search visibility

### Contact and Lead Management
- **Multi-step Forms**: Progressive contact forms with validation and progress tracking
- **Lead Capture**: Contact submissions stored with detailed analytics tracking
- **Communication Channels**: Click-to-call, SMS, and email integration
- **Form Validation**: Client and server-side validation with comprehensive error handling

## External Dependencies

### Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query
- **UI Framework**: Radix UI components, Tailwind CSS, class-variance-authority
- **Routing**: Wouter for lightweight client-side routing
- **Validation**: Zod for runtime type checking and form validation
- **Icons**: FontAwesome and Lucide React icons

### Backend Dependencies
- **Express Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect and Neon serverless adapter
- **Validation**: Zod for API request validation
- **Development**: tsx for TypeScript execution and hot reloading

### Build and Development Tools
- **Build Tool**: Vite with React plugin and TypeScript support
- **TypeScript**: Full TypeScript configuration with strict mode
- **Replit Integration**: Cartographer and dev banner plugins for Replit development environment
- **PostCSS**: Autoprefixer and Tailwind CSS processing

### External Services
- **Analytics**: Google Analytics 4 for user behavior tracking and conversion measurement
- **Email Service**: Resend API configured for transactional emails
- **Database Hosting**: Neon Database for serverless PostgreSQL hosting
- **Session Storage**: PostgreSQL session store for scalable session management

### SEO and Performance
- **Search Console**: Google Search Console integration for search performance monitoring
- **Schema Markup**: JSON-LD structured data for enhanced search results
- **Performance Optimization**: Image compression, asset minification, and mobile-first responsive design