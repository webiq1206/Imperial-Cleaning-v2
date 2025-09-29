import { TestimonialsSectionProps, TestimonialData } from "../types";
import TestimonialsCarousel from "./testimonials-carousel";
import TestimonialCard from "./testimonial-card";
import TrustIndicators from "../stats/trust-indicators";
import TestimonialLightbox from "./testimonial-lightbox";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { trackContentEngagement } from "@/lib/analytics";

export default function TestimonialsSection({
  testimonials,
  title = "Beyond expectations",
  description = "Imperial Cleaning is driving remarkable client experiences that enable success stories, empower businesses, and fuel growth across Idaho and Utah.",
  autoScroll = true,
  showTrustIndicators = true,
  trustStats = [],
  layout = "carousel",
  itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 2
  },
  animationDelay = 0,
  className = ""
}: TestimonialsSectionProps) {
  const isMobile = useIsMobile();
  const [lightboxTestimonial, setLightboxTestimonial] = useState<TestimonialData | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const handleLightboxOpen = (testimonial: TestimonialData) => {
    setLightboxTestimonial(testimonial);
    setIsLightboxOpen(true);
  };
  
  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
    // Small delay to let animation complete before clearing testimonial
    setTimeout(() => setLightboxTestimonial(null), 200);
  };
  
  const getDefaultTrustStats = () => [
    { label: "Projects Completed", value: "200+", icon: "building" },
    { label: "Happy Clients", value: "50+", icon: "users" },
    { label: "Years Experience", value: "5+", icon: "award" },
    { label: "States Served", value: "2", icon: "map-pin" }
  ];

  const statsToDisplay = trustStats.length > 0 ? trustStats : getDefaultTrustStats();

  const renderTestimonials = () => {
    switch (layout) {
      case "grid":
        return (
          <div className={`grid gap-6 md:gap-8 lg:gap-12 ${
            isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant="elevated"
                compact={isMobile}
                animationDelay={index * 100}
                onLightboxOpen={handleLightboxOpen}
                data-testid={`testimonial-grid-${testimonial.id}`}
              />
            ))}
          </div>
        );
      case "masonry":
        return (
          <div className={`gap-6 md:gap-8 lg:gap-12 space-y-6 md:space-y-8 ${
            isMobile ? 'columns-1' : 'md:columns-2 lg:columns-3'
          }`}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="break-inside-avoid mb-6 md:mb-8">
                <TestimonialCard
                  testimonial={testimonial}
                  variant="default"
                  compact={isMobile}
                  animationDelay={index * 100}
                  onLightboxOpen={handleLightboxOpen}
                  data-testid={`testimonial-masonry-${testimonial.id}`}
                />
              </div>
            ))}
          </div>
        );
      default:
        return (
          <TestimonialsCarousel
            testimonials={testimonials}
            autoScroll={autoScroll}
            itemsPerView={itemsPerView}
            infiniteScroll={true}
            onLightboxOpen={handleLightboxOpen}
            data-testid="testimonials-main-carousel"
          />
        );
    }
  };

  return (
    <section 
      className={`py-12 md:py-16 lg:py-24 px-4 md:px-6 testimonials-sophisticated-bg noise-overlay vignette-top vignette-bottom ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <h2 
            className={`font-semibold mb-6 md:mb-8 tracking-tight leading-tight text-foreground ${
              isMobile 
                ? 'text-3xl md:text-4xl' 
                : 'text-4xl md:text-5xl lg:text-6xl'
            }`}
            data-testid="testimonials-section-title"
          >
            {title.includes('expectations') ? (
              <>
                Beyond <span className="gradient-text-cyan-purple">expectations</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p 
            className={`text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
              isMobile ? 'text-base md:text-lg' : 'text-lg lg:text-xl'
            }`}
            data-testid="testimonials-section-description"
          >
            {description}
          </p>
        </div>

        {/* Testimonials Display */}
        {renderTestimonials()}

        {/* Trust Indicators */}
        {showTrustIndicators && (
          <div className="text-center mt-12 md:mt-16 lg:mt-20">
            <TrustIndicators
              customStats={statsToDisplay}
              layout="grid"
              animationDelay={200}
              className="max-w-3xl mx-auto"
              data-testid="testimonials-trust-indicators"
            />
          </div>
        )}
      </div>
      
      {/* Testimonial Lightbox */}
      <TestimonialLightbox
        testimonial={lightboxTestimonial}
        isOpen={isLightboxOpen}
        onClose={handleLightboxClose}
      />
    </section>
  );
}