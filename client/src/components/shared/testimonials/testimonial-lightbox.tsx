import { Star, X } from "lucide-react";
import { TestimonialData } from "../types";
import { trackContentEngagement } from "@/lib/analytics";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface TestimonialLightboxProps {
  testimonial: TestimonialData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TestimonialLightbox({
  testimonial,
  isOpen,
  onClose,
}: TestimonialLightboxProps) {
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      if (testimonial) {
        trackContentEngagement('testimonial', 'collapse', testimonial.id.toString());
      }
    }
  };

  const handleLightboxOpen = () => {
    if (testimonial) {
      trackContentEngagement('testimonial', 'expand', testimonial.id.toString());
    }
  };

  if (!testimonial) return null;

  const renderRating = () => {
    if (!testimonial.rating) return null;
    
    return (
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating! 
                ? "text-yellow-400 fill-yellow-400" 
                : "text-gray-600"
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-2 font-medium">
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
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
        />
      );
    }

    // Default avatar with initials
    return (
      <div 
        className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-bg-br flex items-center justify-center"
        data-testid={`lightbox-avatar-${testimonial.id}`}
      >
        <span className="text-lg md:text-xl font-bold text-black">
          {testimonial.initials || testimonial.author.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    );
  };

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={handleOpenChange}
      data-testid={`testimonial-lightbox-${testimonial.id}`}
    >
      <DialogContent 
        className="max-w-2xl max-h-[85vh] overflow-y-auto glass-card-elevated sophisticated-glow"
        onOpenAutoFocus={handleLightboxOpen}
      >
        <DialogHeader className="text-left pb-4">
          <DialogTitle className="sr-only">
            Testimonial from {testimonial.author}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Full testimonial details and feedback
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Rating */}
          {renderRating()}

          {/* Quote */}
          <blockquote 
            className="text-lg md:text-xl leading-relaxed text-foreground font-medium"
            data-testid={`lightbox-quote-${testimonial.id}`}
          >
            <span className="text-primary/30 text-3xl leading-none mr-2">"</span>
            {testimonial.content}
            <span className="text-primary/30 text-3xl leading-none ml-2">"</span>
          </blockquote>

          {/* Elegant divider */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-primary/30 to-transparent"></div>

          {/* Author Information */}
          <div className="flex items-start space-x-4 md:space-x-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              {renderAvatar()}
            </div>

            {/* Author Details */}
            <div className="min-w-0 flex-1 space-y-2">
              <div 
                className="text-xl md:text-2xl font-semibold text-foreground leading-tight"
                data-testid={`lightbox-author-${testimonial.id}`}
              >
                {testimonial.author}
              </div>
              <div 
                className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-1"
                data-testid={`lightbox-position-${testimonial.id}`}
              >
                <div className="font-medium">{testimonial.position}</div>
                <div className="text-muted-foreground/90">{testimonial.company}</div>
                {testimonial.location && (
                  <div className="text-muted-foreground/70 text-sm md:text-base flex items-center">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full mr-3"></span>
                    {testimonial.location}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Service Type Badge */}
          {testimonial.serviceType && (
            <div className="pt-4 border-t border-border/20">
              <span 
                className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary/90 rounded-full border border-primary/20"
                data-testid={`lightbox-service-${testimonial.id}`}
              >
                {testimonial.serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
          )}
        </div>

        {/* Enhanced close button for mobile */}
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:hidden">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}