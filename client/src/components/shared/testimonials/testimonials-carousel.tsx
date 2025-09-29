import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialsCarouselProps } from "../types";
import TestimonialCard from "./testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  
  // Configure autoplay speed (faster than before)
  const getAutoplayDelay = () => {
    switch (scrollSpeed) {
      case "slow":
        return 4000; // 4 seconds
      case "fast":
        return 2000; // 2 seconds  
      default:
        return 3000; // 3 seconds (faster than the previous slow speed)
    }
  };

  // Configure embla carousel options
  const autoplayPlugin = Autoplay({ 
    delay: getAutoplayDelay(),
    stopOnInteraction: false, // Continue autoplay after user interaction
    stopOnMouseEnter: true,   // Pause on hover
    stopOnFocusIn: false
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: infiniteScroll,
      align: "start",
      containScroll: "trimSnaps",
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { 
          slidesToScroll: itemsPerView.tablet === 1 ? 1 : 1 
        },
        '(min-width: 1024px)': { 
          slidesToScroll: itemsPerView.desktop === 1 ? 1 : 1 
        }
      }
    },
    autoScroll ? [autoplayPlugin] : []
  );

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle autoplay reset on user interaction
  useEffect(() => {
    if (!emblaApi || !autoScroll) return;

    const handleSelect = () => {
      if (autoplayPlugin) {
        autoplayPlugin.reset();
      }
    };

    emblaApi.on('select', handleSelect);
    return () => {
      emblaApi.off('select', handleSelect);
    };
  }, [emblaApi, autoplayPlugin, autoScroll]);

  const getItemWidthClasses = () => {
    return `flex-[0_0_${100/itemsPerView.mobile}%] md:flex-[0_0_${100/itemsPerView.tablet}%] lg:flex-[0_0_${100/itemsPerView.desktop}%]`;
  };

  return (
    <div 
      className={`overflow-hidden relative testimonials-container ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      data-testid="testimonials-carousel"
    >
      {/* Embla carousel viewport */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className={`embla__slide ${getItemWidthClasses()} pl-8`}
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
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
            onClick={scrollPrev}
            data-testid="carousel-prev-button"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
            onClick={scrollNext}
            data-testid="carousel-next-button"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </>
      )}

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-5"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-5"></div>
    </div>
  );
}