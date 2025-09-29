import { TestimonialsCarouselProps } from "../types";
import TestimonialCard from "./testimonial-card";

export default function TestimonialsCarousel({
  testimonials,
  autoScroll = true,
  scrollSpeed = "medium",
  showControls = false,
  infiniteScroll = true,
  itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
  animationDelay = 0,
  className = ""
}: TestimonialsCarouselProps) {
  
  // Duplicate testimonials for seamless infinite loop if enabled
  const displayTestimonials = infiniteScroll ? [...testimonials, ...testimonials] : testimonials;

  const getScrollSpeedClass = () => {
    switch (scrollSpeed) {
      case "slow":
        return "animate-scroll-slow";
      case "fast":
        return "animate-scroll-fast";
      default:
        return "animate-scroll-infinite";
    }
  };

  const getItemWidthClasses = () => {
    return `flex-[0_0_${100/itemsPerView.mobile}%] md:flex-[0_0_${100/itemsPerView.tablet}%] lg:flex-[0_0_${100/itemsPerView.desktop}%]`;
  };

  return (
    <div 
      className={`overflow-hidden relative testimonials-container ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      data-testid="testimonials-carousel"
    >
      {/* Main carousel track */}
      <div 
        className={`testimonials-track flex ${autoScroll ? getScrollSpeedClass() : ''}`}
        style={{
          // Pause animation on hover if auto-scroll is enabled
          animationPlayState: autoScroll ? 'running' : 'paused'
        }}
        onMouseEnter={(e) => {
          if (autoScroll) {
            e.currentTarget.style.animationPlayState = 'paused';
          }
        }}
        onMouseLeave={(e) => {
          if (autoScroll) {
            e.currentTarget.style.animationPlayState = 'running';
          }
        }}
      >
        {displayTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className={`${getItemWidthClasses()} pl-6`}
            data-testid={`testimonial-slide-${testimonial.id}-${index}`}
          >
            <TestimonialCard
              testimonial={testimonial}
              showLocation={true}
              variant="elevated"
              className="h-full"
              data-testid={`testimonial-card-carousel-${testimonial.id}-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Optional Controls */}
      {showControls && (
        <>
          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            onClick={() => {
              // Handle previous scroll
              console.log('Previous testimonial');
            }}
            data-testid="carousel-prev-button"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            onClick={() => {
              // Handle next scroll
              console.log('Next testimonial');
            }}
            data-testid="carousel-next-button"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-5"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-5"></div>
    </div>
  );
}