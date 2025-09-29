// Testimonials Components Exports

export { default as TestimonialCard } from './testimonial-card';
export { default as TestimonialLightbox } from './testimonial-lightbox';
export { default as TestimonialsSection } from './testimonials-section';
export { default as TestimonialsCarousel } from './testimonials-carousel';
export { default as ServiceTestimonials } from './service-testimonials';
export { default as LocationTestimonials } from './location-testimonials';
export { default as CaseStudyTestimonial } from './case-study-testimonial';

// Re-export types for convenience
export type {
  TestimonialCardProps,
  TestimonialsSectionProps,
  TestimonialsCarouselProps,
  ServiceTestimonialsProps,
  LocationTestimonialsProps,
  CaseStudyTestimonialProps,
  TestimonialData,
  BaseTestimonialProps
} from '../types';