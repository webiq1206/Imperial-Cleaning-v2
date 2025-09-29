import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialsCarouselProps } from "../types";
import TestimonialCard from "./testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ExtendedTestimonialsCarouselProps extends TestimonialsCarouselProps {
  onLightboxOpen?: (testimonial: any) => void;
}

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
  className = "",
  onLightboxOpen
}: ExtendedTestimonialsCarouselProps) {
  const isMobile = useIsMobile();
  
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
      dragFree: isMobile, // Enable drag-free scrolling on mobile for continuous feel
      slidesToScroll: 1, // Always scroll one slide at a time for smooth experience
      skipSnaps: false,
      inViewThreshold: 0.7, // Better threshold for mobile
      startIndex: 0,
      duration: 25, // Faster animation duration
      breakpoints: {
        '(min-width: 768px)': { 
          dragFree: false, // Disable drag-free on larger screens for better control
          slidesToScroll: 1,
          duration: 20,
          align: "start"
        },
        '(min-width: 1024px)': { 
          dragFree: false,
          slidesToScroll: itemsPerView.desktop > 2 ? 1 : 1, // Keep consistent scrolling
          duration: 15,
          align: "start"
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
    // Mobile-first responsive item sizing with better spacing
    const mobileWidth = isMobile ? 85 : 100/itemsPerView.mobile; // Slightly smaller on mobile for peek effect
    return `flex-[0_0_${mobileWidth}%] md:flex-[0_0_${100/itemsPerView.tablet}%] lg:flex-[0_0_${100/itemsPerView.desktop}%]`;
  };
  
  const getItemSpacing = () => {
    return isMobile ? "pl-4 md:pl-6 lg:pl-8" : "pl-6 md:pl-8";
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
              className={`embla__slide ${getItemWidthClasses()} ${getItemSpacing()}`}
              data-testid={`testimonial-slide-${testimonial.id}-${index}`}
            >
              <TestimonialCard
                testimonial={testimonial}
                showLocation={true}
                variant="elevated"
                compact={isMobile}
                className="h-full"
                onLightboxOpen={onLightboxOpen}
                data-testid={`testimonial-card-carousel-${testimonial.id}-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Hide on mobile for better touch experience */}
      {showControls && !isMobile && (
        <>
          {/* Previous Button */}
          <button
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 flex items-center justify-center disabled:opacity-50 hover:scale-110"
            onClick={scrollPrev}
            data-testid="carousel-prev-button"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 flex items-center justify-center disabled:opacity-50 hover:scale-110"
            onClick={scrollNext}
            data-testid="carousel-next-button"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>
        </>
      )}

      {/* Gradient fade edges - Responsive sizing */}
      <div className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r from-background to-transparent pointer-events-none z-5 ${
        isMobile ? 'w-8' : 'w-12'
      }`}></div>
      <div className={`absolute right-0 top-0 bottom-0 bg-gradient-to-l from-background to-transparent pointer-events-none z-5 ${
        isMobile ? 'w-8' : 'w-12'
      }`}></div>
    </div>
  );
}