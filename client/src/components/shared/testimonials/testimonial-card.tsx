import { Star } from "lucide-react";
import { TestimonialCardProps } from "../types";
import { trackContentEngagement } from "@/lib/analytics";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

interface ExtendedTestimonialCardProps extends TestimonialCardProps {
  onLightboxOpen?: (testimonial: any) => void;
}

export default function TestimonialCard({
  testimonial,
  compact = false,
  showLocation = true,
  showRating = false,
  variant = "default",
  animationDelay = 0,
  className = "",
  onLightboxOpen
}: ExtendedTestimonialCardProps) {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Content truncation for mobile
  const MOBILE_CONTENT_LIMIT = 120;
  const DESKTOP_CONTENT_LIMIT = 200;
  
  const getTruncatedContent = () => {
    const limit = (compact || isMobile) ? MOBILE_CONTENT_LIMIT : DESKTOP_CONTENT_LIMIT;
    
    if (testimonial.content.length <= limit) {
      return testimonial.content;
    }
    
    if (isExpanded) {
      return testimonial.content;
    }
    
    return `${testimonial.content.substring(0, limit)}...`;
  };
  
  const handleCardClick = () => {
    // Track testimonial engagement
    trackContentEngagement('testimonial', 'click', testimonial.id.toString());
    
    // If content is truncated and lightbox is available, open lightbox
    if (onLightboxOpen && (!isExpanded || testimonial.content.length > ((compact || isMobile) ? MOBILE_CONTENT_LIMIT : DESKTOP_CONTENT_LIMIT))) {
      onLightboxOpen(testimonial);
    } else if (!onLightboxOpen && testimonial.content.length > ((compact || isMobile) ? MOBILE_CONTENT_LIMIT : DESKTOP_CONTENT_LIMIT)) {
      // If no lightbox, toggle expanded state for truncated content
      setIsExpanded(!isExpanded);
    }
  };
  
  const getVariantClasses = () => {
    switch (variant) {
      case "elevated":
        return "glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand";
      case "minimal":
        return "border border-border/30 hover:border-border/60 bg-background/50";
      default:
        return "glass-card sophisticated-glow hover-lift-gentle";
    }
  };

  const getCardClasses = () => {
    const baseClasses = "group rounded-xl transition-all duration-300 cursor-pointer";
    const variantClasses = getVariantClasses();
    // Mobile-first padding approach
    const paddingClasses = compact || isMobile ? "p-4 md:p-6" : "p-6 md:p-8 lg:p-10";
    
    return `${baseClasses} ${variantClasses} ${paddingClasses}`;
  };

  const renderRating = () => {
    if (!showRating || !testimonial.rating) return null;
    
    return (
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating! 
                ? "text-yellow-400 fill-yellow-400" 
                : "text-gray-600"
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-2">
          {testimonial.rating}/5
        </span>
      </div>
    );
  };

  const renderAvatar = () => {
    // Mobile-first avatar sizing
    const avatarSizeClasses = compact || isMobile ? "w-10 h-10 md:w-12 md:h-12" : "w-12 h-12 md:w-14 md:h-14";
    
    if (testimonial.avatar) {
      return (
        <img 
          src={testimonial.avatar}
          alt={`${testimonial.author} avatar`}
          className={`${avatarSizeClasses} rounded-full object-cover hover-lift-gentle group-hover:scale-110 transition-all duration-500`}
        />
      );
    }

    // Default avatar with initials
    return (
      <div 
        className={`${avatarSizeClasses} rounded-full gradient-bg-br flex items-center justify-center overflow-hidden hover-lift-gentle group-hover:scale-110 transition-all duration-500`}
        data-testid={`avatar-${testimonial.id}`}
      >
        <span className={`${compact || isMobile ? 'text-xs md:text-sm' : 'text-sm'} font-semibold text-black`}>
          {testimonial.initials || testimonial.author.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`${getCardClasses()} ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      onClick={handleCardClick}
      data-testid={`testimonial-card-${testimonial.id}`}
    >
      {/* Rating */}
      {renderRating()}

      {/* Quote */}
      <blockquote 
        className={`text-foreground leading-relaxed flex-grow font-medium ${
          compact || isMobile 
            ? 'text-sm md:text-base mb-4 md:mb-6' 
            : 'text-base md:text-lg mb-6 md:mb-10'
        }`}
        data-testid={`quote-${testimonial.id}`}
      >
        <span className={`text-primary/30 leading-none mr-1 ${
          compact || isMobile ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
        }`}>"</span>
        {getTruncatedContent()}
        <span className={`text-primary/30 leading-none ml-1 ${
          compact || isMobile ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
        }`}>"</span>
      </blockquote>

      {/* Elegant inset divider between quote and author */}
      {!(compact || isMobile) && <div className="w-12 h-[1px] bg-gradient-to-r from-primary/30 to-transparent mb-6 md:mb-8"></div>}

      {/* Author Information */}
      <div className={`flex items-start mt-auto ${compact || isMobile ? 'space-x-3' : 'space-x-4'}`}>
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          {renderAvatar()}
        </div>

        {/* Author Details */}
        <div className="min-w-0 flex-1 space-y-1">
          <div 
            className={`font-semibold text-foreground leading-snug ${
              compact || isMobile ? 'text-sm md:text-base' : 'text-base md:text-lg'
            }`}
            data-testid={`author-name-${testimonial.id}`}
          >
            {testimonial.author}
          </div>
          <div 
            className={`text-muted-foreground leading-relaxed ${
              compact || isMobile ? 'text-xs md:text-sm' : 'text-sm'
            }`}
            data-testid={`author-position-${testimonial.id}`}
          >
            <div className="font-medium">{testimonial.position}</div>
            <div className="text-muted-foreground/80">{testimonial.company}</div>
            {showLocation && testimonial.location && (
              <div className={`text-muted-foreground/60 mt-1 flex items-center ${
                compact || isMobile ? 'text-xs' : 'text-xs'
              }`}>
                <span className="w-1 h-1 bg-muted-foreground/40 rounded-full mr-2"></span>
                {testimonial.location}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Service Type Badge */}
      {testimonial.serviceType && !(compact || isMobile) && (
        <div className="mt-4 md:mt-6 pt-3 md:pt-5 border-t border-border/20">
          <span className="inline-block px-3 py-1.5 text-xs font-medium bg-primary/8 text-primary/80 rounded-full border border-primary/20">
            {testimonial.serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
      )}
    </div>
  );
}