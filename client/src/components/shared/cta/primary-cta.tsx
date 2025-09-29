import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { PrimaryCTAProps } from "../types";

export default function PrimaryCTA({
  title,
  description,
  primaryButtonText = "Get Free Quote",
  primaryButtonAction,
  secondaryButtonText = "View Service Areas", 
  secondaryButtonHref = "/service-areas/idaho",
  guarantees = [],
  variant = "section",
  className = ""
}: PrimaryCTAProps) {
  
  const handlePrimaryAction = () => {
    trackEvent('quote_request', 'primary_cta', variant);
    primaryButtonAction?.();
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "hero":
        return "text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.9] tracking-tight mb-8";
      case "footer":
        return "text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 tracking-tight";
      default:
        return "text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 tracking-tight leading-tight";
    }
  };

  const getDescriptionClasses = () => {
    switch (variant) {
      case "hero":
        return "text-xl text-secondary-color mb-10 max-w-xl leading-[1.6] font-normal tracking-tight";
      case "footer":
        return "text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed";
      default:
        return "text-lg lg:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed";
    }
  };

  const getButtonSize = () => {
    switch (variant) {
      case "hero":
        return "pill-lg";
      default:
        return "pill-lg";
    }
  };

  return (
    <div className={`${variant === "hero" ? "" : "text-center"} ${className}`}>
      {/* Guarantees/Announcement Pill */}
      {guarantees.length > 0 && (
        <div className={`${variant === "hero" ? "mb-8" : "mb-6"} animate-fade-in-left stagger-delay-1`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800/60 glass-effect hover:border-gray-700/80 hover:bg-gray-950/60 transition-all duration-300 group sophisticated-glow hover-lift-gentle hover-shimmer">
            <span className="text-sm text-secondary-color font-medium tracking-tight">
              {guarantees.join(" • ")}
            </span>
            <svg className="ml-2 w-3.5 h-3.5 text-subtle-color group-hover:text-secondary-color transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}

      {/* Title */}
      <h2 
        className={`${getVariantClasses()} text-foreground animate-fade-in-up stagger-delay-2`}
        data-testid={`title-primary-cta-${variant}`}
      >
        {variant === "hero" ? (
          <>
            <span className="inline-block hover-lift-gentle">Professional</span><br />
            <span className="inline-block hover-lift-gentle stagger-delay-2">cleaning</span> <span className="inline-block hover-lift-gentle stagger-delay-2">for</span>
            <span className="inline-block hover-lift-gentle stagger-delay-3 gradient-text-cyan-purple">businesses</span>
          </>
        ) : (
          title
        )}
      </h2>

      {/* Description */}
      {description && (
        <p 
          className={`${getDescriptionClasses()} animate-fade-in-up stagger-delay-3`}
          data-testid={`description-primary-cta-${variant}`}
        >
          {description}
        </p>
      )}

      {/* CTA Buttons */}
      <div className={`flex ${variant === "hero" ? "items-center" : "justify-center"} gap-4 animate-fade-in-up stagger-delay-4`}>
        <Button 
          onClick={handlePrimaryAction}
          variant="pill-primary"
          size={getButtonSize()}
          className="pill-button-resend-primary hover-lift-moderate button-ripple"
          data-testid={`button-primary-cta-${variant}-primary`}
        >
          {primaryButtonText}
        </Button>
        
        {secondaryButtonText && secondaryButtonHref && (
          <Link href={secondaryButtonHref}>
            <Button 
              variant="pill-secondary"
              size={getButtonSize()}
              className="pill-button-resend-secondary hover-lift-gentle hover-shimmer"
              data-testid={`button-primary-cta-${variant}-secondary`}
            >
              {secondaryButtonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}