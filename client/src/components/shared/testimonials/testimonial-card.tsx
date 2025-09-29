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
    const baseClasses = "group rounded-xl transition-all duration-300";
    const variantClasses = getVariantClasses();
    const paddingClasses = compact ? "p-5" : "p-8 lg:p-10";
    
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
          'testimonial',
          'click'
        );
      }}
      data-testid={`testimonial-card-${testimonial.id}`}
    >
      {/* Rating */}
      {renderRating()}

      {/* Quote */}
      <blockquote 
        className={`text-foreground ${compact ? 'text-sm' : 'text-lg'} leading-relaxed ${compact ? 'mb-6' : 'mb-10'} flex-grow font-medium`}
        data-testid={`quote-${testimonial.id}`}
      >
        <span className="text-primary/30 text-2xl leading-none mr-1">"</span>{testimonial.content}<span className="text-primary/30 text-2xl leading-none ml-1">"</span>
      </blockquote>

      {/* Elegant inset divider between quote and author */}
      {!compact && <div className="w-12 h-[1px] bg-gradient-to-r from-primary/30 to-transparent mb-8"></div>}

      {/* Author Information */}
      <div className="flex items-start mt-auto space-x-4">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          {renderAvatar()}
        </div>

        {/* Author Details */}
        <div className="min-w-0 flex-1 space-y-1">
          <div 
            className={`font-semibold text-foreground ${compact ? 'text-sm' : 'text-base'} leading-snug`}
            data-testid={`author-name-${testimonial.id}`}
          >
            {testimonial.author}
          </div>
          <div 
            className={`text-muted-foreground ${compact ? 'text-xs' : 'text-sm'} leading-relaxed`}
            data-testid={`author-position-${testimonial.id}`}
          >
            <div className="font-medium">{testimonial.position}</div>
            <div className="text-muted-foreground/80">{testimonial.company}</div>
            {showLocation && testimonial.location && (
              <div className="text-muted-foreground/60 text-xs mt-1 flex items-center">
                <span className="w-1 h-1 bg-muted-foreground/40 rounded-full mr-2"></span>
                {testimonial.location}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Service Type Badge */}
      {testimonial.serviceType && (
        <div className="mt-6 pt-5 border-t border-border/20">
          <span className="inline-block px-3 py-1.5 text-xs font-medium bg-primary/8 text-primary/80 rounded-full border border-primary/20">
            {testimonial.serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
      )}
    </div>
  );
}