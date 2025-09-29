import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

// ============================================================================
// CTA Component Types
// ============================================================================

export interface BaseCTAProps {
  title: string;
  description?: string;
  className?: string;
}

export interface PrimaryCTAProps extends BaseCTAProps {
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  guarantees?: string[];
  variant?: "hero" | "section" | "footer";
}

export interface ServiceCTAProps extends BaseCTAProps {
  serviceType: "commercial-cleaning" | "construction-cleaning";
  buttonText?: string;
  onGetQuote?: () => void;
  features?: string[];
  urgentCTA?: boolean;
}

export interface LocationCTAProps extends BaseCTAProps {
  locationName: string;
  state: "Idaho" | "Utah";
  buttonText?: string;
  onGetQuote?: () => void;
  localContext?: string;
  coverageAreas?: string[];
}

export interface ContactFormCTAProps extends BaseCTAProps {
  buttonText?: string;
  onShowContactForm?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
}

// ============================================================================
// Stats Component Types  
// ============================================================================

export interface StatItem {
  label: string;
  value: string;
  icon?: LucideIcon | string;
  description?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "info";
}

export interface BaseStatsProps {
  className?: string;
  layout?: "grid" | "horizontal" | "vertical";
  animationDelay?: number;
}

export interface CompanyStatsProps extends BaseStatsProps {
  stats: StatItem[];
  showTitle?: boolean;
  title?: string;
  variant?: "trust-indicators" | "company-metrics" | "achievements";
}

export interface ProjectMetricsProps extends BaseStatsProps {
  metrics: StatItem[];
  projectId?: string;
  compact?: boolean;
  showLabels?: boolean;
}

export interface TrustIndicatorsProps extends BaseStatsProps {
  projectsCompleted?: number;
  happyClients?: number;
  yearsExperience?: number;
  statesServed?: number;
  customStats?: StatItem[];
  showIcons?: boolean;
}

export interface FeatureStatsProps extends BaseStatsProps {
  features: {
    title: string;
    description: string;
    icon?: LucideIcon | string;
    linkText?: string;
    linkHref?: string;
  }[];
  columns?: 2 | 3 | 4;
}

// ============================================================================
// Testimonial Component Types
// ============================================================================

export interface TestimonialData {
  id: string | number;
  content: string;
  author: string;
  position: string;
  company: string;
  location?: string;
  initials?: string;
  avatar?: string;
  rating?: number;
  serviceType?: "commercial-cleaning" | "construction-cleaning" | "industrial" | "healthcare";
}

export interface BaseTestimonialProps {
  className?: string;
  animationDelay?: number;
}

export interface TestimonialCardProps extends BaseTestimonialProps {
  testimonial: TestimonialData;
  compact?: boolean;
  showLocation?: boolean;
  showRating?: boolean;
  variant?: "default" | "elevated" | "minimal";
}

export interface TestimonialsSectionProps extends BaseTestimonialProps {
  testimonials: TestimonialData[];
  title?: string;
  description?: string;
  autoScroll?: boolean;
  showTrustIndicators?: boolean;
  trustStats?: StatItem[];
  layout?: "carousel" | "grid" | "masonry";
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export interface TestimonialsCarouselProps extends BaseTestimonialProps {
  testimonials: TestimonialData[];
  autoScroll?: boolean;
  scrollSpeed?: "slow" | "medium" | "fast";
  showControls?: boolean;
  infiniteScroll?: boolean;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export interface ServiceTestimonialsProps extends BaseTestimonialProps {
  serviceType: "commercial-cleaning" | "construction-cleaning" | "industrial" | "healthcare";
  testimonials: TestimonialData[];
  title?: string;
  description?: string;
  maxItems?: number;
  layout?: "carousel" | "grid";
}

export interface LocationTestimonialsProps extends BaseTestimonialProps {
  locationName: string;
  state: "Idaho" | "Utah";
  testimonials: TestimonialData[];
  title?: string;
  description?: string;
  maxItems?: number;
  showLocationContext?: boolean;
}

export interface CaseStudyTestimonialProps extends BaseTestimonialProps {
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  compact?: boolean;
  showBorder?: boolean;
}

// ============================================================================
// Common Utility Types
// ============================================================================

export interface ButtonProps {
  text: string;
  action?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export interface IconConfig {
  icon: LucideIcon | string;
  size?: number;
  className?: string;
  color?: string;
}

export interface AnimationConfig {
  delay?: number;
  duration?: number;
  type?: "fade" | "slide" | "scale" | "lift";
  stagger?: boolean;
}

// ============================================================================
// Design System Types
// ============================================================================

export type GlassEffectVariant = 
  | "glass-card"
  | "glass-card-elevated" 
  | "glass-card-premium"
  | "glass-effect";

export type SophisticatedGlowVariant =
  | "sophisticated-glow"
  | "hover-glow-expand"
  | "sophisticated-glow-lg";

export type HoverEffectVariant =
  | "hover-lift-gentle"
  | "hover-lift-moderate"
  | "hover-lift-strong"
  | "hover-shimmer";

export type ParallaxVariant =
  | "parallax-subtle"
  | "parallax-gentle"
  | "parallax-depth";

export interface DesignSystemProps {
  glassEffect?: GlassEffectVariant;
  sophisticatedGlow?: SophisticatedGlowVariant;
  hoverEffect?: HoverEffectVariant;
  parallaxEffect?: ParallaxVariant;
}