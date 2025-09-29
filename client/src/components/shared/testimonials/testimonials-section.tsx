import { TestimonialsSectionProps } from "../types";
import TestimonialsCarousel from "./testimonials-carousel";
import TestimonialCard from "./testimonial-card";
import TrustIndicators from "../stats/trust-indicators";

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
    desktop: 3
  },
  animationDelay = 0,
  className = ""
}: TestimonialsSectionProps) {
  
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant="elevated"
                animationDelay={index * 100}
                data-testid={`testimonial-grid-${testimonial.id}`}
              />
            ))}
          </div>
        );
      case "masonry":
        return (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="break-inside-avoid">
                <TestimonialCard
                  testimonial={testimonial}
                  variant="default"
                  animationDelay={index * 100}
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
            data-testid="testimonials-main-carousel"
          />
        );
    }
  };

  return (
    <section 
      className={`py-24 px-6 testimonials-sophisticated-bg noise-overlay vignette-top vignette-bottom ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground"
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
            className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            data-testid="testimonials-section-description"
          >
            {description}
          </p>
        </div>

        {/* Testimonials Display */}
        {renderTestimonials()}

        {/* Trust Indicators */}
        {showTrustIndicators && (
          <div className="text-center mt-16 lg:mt-20">
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
    </section>
  );
}