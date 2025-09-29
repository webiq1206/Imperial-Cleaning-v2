import { MapPin } from "lucide-react";
import { LocationTestimonialsProps } from "../types";
import TestimonialCard from "./testimonial-card";
import TestimonialsCarousel from "./testimonials-carousel";

export default function LocationTestimonials({
  locationName,
  state,
  testimonials,
  title,
  description,
  maxItems = 6,
  showLocationContext = true,
  animationDelay = 0,
  className = ""
}: LocationTestimonialsProps) {
  
  // Filter testimonials by location if provided
  const filteredTestimonials = testimonials.filter(testimonial => 
    !testimonial.location || testimonial.location.includes(locationName) || testimonial.location.includes(state)
  );

  // Limit testimonials if maxItems is specified
  const displayTestimonials = maxItems > 0 
    ? filteredTestimonials.slice(0, maxItems)
    : filteredTestimonials;

  const getLocationTitle = () => {
    if (title) return title;
    return `${locationName} Client Success Stories`;
  };

  const getLocationDescription = () => {
    if (description) return description;
    return `Discover how Imperial Cleaning has served businesses and construction projects in ${locationName}, ${state} with exceptional results and client satisfaction.`;
  };

  const getLocationContext = () => {
    const contexts = {
      "Idaho Falls": "As our headquarters location, Idaho Falls receives our most comprehensive service coverage with rapid response times and dedicated local teams.",
      "Salt Lake City": "Our Utah operations center provides full commercial and construction cleaning services throughout the Salt Lake Valley metropolitan area.",
      "Boise": "Serving the Treasure Valley with specialized teams for both commercial maintenance and post-construction cleanup projects.",
      "Pocatello": "Dedicated service coverage for southeastern Idaho's commercial and industrial cleaning needs.",
      "Logan": "Cache Valley's trusted commercial cleaning partner with expertise in both routine maintenance and specialized facility cleaning.",
      "Provo": "Utah Valley commercial cleaning services with focus on technology companies, educational facilities, and growing businesses."
    };

    return contexts[locationName as keyof typeof contexts] || 
           `Professional cleaning services tailored to the specific needs of ${locationName} businesses and construction projects.`;
  };

  const renderTestimonials = () => {
    if (displayTestimonials.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No testimonials available for {locationName}, {state} yet. Be our first!
          </p>
        </div>
      );
    }

    // Use carousel for better display of location testimonials
    return (
      <TestimonialsCarousel
        testimonials={displayTestimonials}
        autoScroll={true}
        itemsPerView={{
          mobile: 1,
          tablet: 2,
          desktop: displayTestimonials.length >= 3 ? 3 : displayTestimonials.length
        }}
        infiniteScroll={displayTestimonials.length > 3}
        data-testid={`location-testimonials-carousel-${locationName.toLowerCase().replace(/\s+/g, '-')}`}
      />
    );
  };

  return (
    <section 
      className={`py-16 px-6 ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      data-testid={`location-testimonials-${locationName.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Location Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
            <MapPin className="w-4 h-4 mr-2" />
            {locationName}, {state}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 tracking-tight leading-tight text-foreground"
            data-testid={`location-testimonials-title-${locationName.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {getLocationTitle()}
          </h3>
          <p 
            className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6"
            data-testid={`location-testimonials-description-${locationName.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {getLocationDescription()}
          </p>

          {/* Location Context */}
          {showLocationContext && (
            <div className="max-w-3xl mx-auto">
              <div className="glass-effect p-4 rounded-lg border border-primary/10">
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>Local Advantage:</strong> {getLocationContext()}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Display */}
        {renderTestimonials()}

        {/* Location Stats */}
        {displayTestimonials.length > 0 && (
          <div className="text-center mt-12 pt-8 border-t border-border/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text-cyan-purple mb-2">
                  {displayTestimonials.length}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Local Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text-cyan-purple mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Local Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text-cyan-purple mb-2">
                  &lt;30
                </div>
                <div className="text-sm text-muted-foreground">
                  Min Response
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text-cyan-purple mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Available
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}