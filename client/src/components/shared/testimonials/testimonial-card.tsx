import { Star } from "lucide-react";
import { TestimonialCardProps } from "../types";
import { trackContentEngagement } from "@/lib/analytics";

export default function TestimonialCard({
  testimonial,
  compact = false,
  showLocation = true,
  showRating = false,
  variant = "default",
  animationDelay = 0,
  className = ""
}: TestimonialCardProps) {
  
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
    const baseClasses = "group rounded-lg transition-all duration-300";
    const variantClasses = getVariantClasses();
    const paddingClasses = compact ? "p-4" : "p-6 lg:p-8";
    
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
    if (testimonial.avatar) {
      return (
        <img 
          src={testimonial.avatar}
          alt={`${testimonial.author} avatar`}
          className="w-12 h-12 rounded-full object-cover hover-lift-gentle group-hover:scale-110 transition-all duration-500"
        />
      );
    }

    // Default avatar with initials
    return (
      <div 
        className="w-12 h-12 rounded-full gradient-bg-br flex items-center justify-center overflow-hidden hover-lift-gentle group-hover:scale-110 transition-all duration-500"
        data-testid={`avatar-${testimonial.id}`}
      >
        <span className="text-sm font-semibold text-black">
          {testimonial.initials || testimonial.author.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`${getCardClasses()} ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      onClick={() => {
        // Track testimonial engagement
        trackContentEngagement(
          'testimonial_click',
          {
            contentType: 'testimonial',
            contentId: testimonial.id,
            serviceType: testimonial.serviceType || undefined,
            location: testimonial.location || undefined
          }
        );
      }}
      data-testid={`testimonial-card-${testimonial.id}`}
    >
      {/* Rating */}
      {renderRating()}

      {/* Quote */}
      <blockquote 
        className={`text-foreground ${compact ? 'text-sm' : 'text-base lg:text-lg'} leading-relaxed ${compact ? 'mb-4' : 'mb-8'} flex-grow`}
        data-testid={`quote-${testimonial.id}`}
      >
        "{testimonial.content}"
      </blockquote>

      {/* Elegant inset divider between quote and author */}
      {!compact && <div className="glass-divider-top mb-6"></div>}

      {/* Author Information */}
      <div className="flex items-center mt-auto">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mr-4">
          {renderAvatar()}
        </div>

        {/* Author Details */}
        <div className="min-w-0 flex-1">
          <div 
            className={`font-semibold text-foreground ${compact ? 'text-sm' : 'text-base'} mb-1`}
            data-testid={`author-name-${testimonial.id}`}
          >
            {testimonial.author}
          </div>
          <div 
            className={`text-muted-foreground ${compact ? 'text-xs' : 'text-sm'}`}
            data-testid={`author-position-${testimonial.id}`}
          >
            {testimonial.position} at {testimonial.company}
            {showLocation && testimonial.location && (
              <>
                <br />
                <span className="text-muted-foreground/80">
                  {testimonial.location}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Service Type Badge */}
      {testimonial.serviceType && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {testimonial.serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
      )}
    </div>
  );
}