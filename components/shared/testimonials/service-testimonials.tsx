import { ServiceTestimonialsProps } from "../types";
import TestimonialCard from "./testimonial-card";
import TestimonialsCarousel from "./testimonials-carousel";

export default function ServiceTestimonials({
 serviceType,
 testimonials,
 title,
 description,
 maxItems = 6,
 layout = "carousel",
 animationDelay = 0,
 className = ""
}: ServiceTestimonialsProps) {
 
 // Filter testimonials by service type if provided
 const filteredTestimonials = testimonials.filter(testimonial => 
  !testimonial.serviceType || testimonial.serviceType === serviceType
 );

 // Limit testimonials if maxItems is specified
 const displayTestimonials = maxItems > 0 
  ? filteredTestimonials.slice(0, maxItems)
  : filteredTestimonials;

 const getServiceTitle = () => {
  if (title) return title;
  
  switch (serviceType) {
   case "commercial-cleaning":
    return "Commercial Cleaning Client Success Stories";
   case "construction-cleaning":
    return "Construction Cleanup Project Testimonials";
   case "industrial":
    return "Industrial Cleaning Excellence Reviews";
   case "healthcare":
    return "Healthcare Facility Cleaning Testimonials";
   default:
    return "Client Success Stories";
  }
 };

 const getServiceDescription = () => {
  if (description) return description;
  
  switch (serviceType) {
   case "commercial-cleaning":
    return "Discover how Imperial Cleaning's commercial cleaning services have transformed business environments across Idaho and Utah.";
   case "construction-cleaning":
    return "Read about our construction cleanup expertise from contractors and builders who trust Imperial Cleaning for their projects.";
   case "industrial":
    return "See how our industrial cleaning solutions have improved safety and efficiency for manufacturing facilities.";
   case "healthcare":
    return "Learn how our specialized healthcare cleaning protocols have enhanced medical facility standards.";
   default:
    return "Hear from satisfied clients about their experience with Imperial Cleaning services.";
  }
 };

 const getServiceBadgeColor = () => {
  switch (serviceType) {
   case "commercial-cleaning":
    return "bg-blue-500/10 text-blue-400 border-blue-400/20";
   case "construction-cleaning":
    return "bg-orange-500/10 text-orange-400 border-orange-400/20";
   case "industrial":
    return "bg-purple-500/10 text-purple-400 border-purple-400/20";
   case "healthcare":
    return "bg-green-500/10 text-green-400 border-green-400/20";
   default:
    return "bg-primary/10 text-primary border-primary/20";
  }
 };

 const renderTestimonials = () => {
  if (displayTestimonials.length === 0) {
   return (
    <div className="text-center py-12">
     <p className="text-muted-foreground">
      No testimonials available for {serviceType.replace('-', ' ')}.
     </p>
    </div>
   );
  }

  switch (layout) {
   case "grid":
    return (
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {displayTestimonials.map((testimonial, index) => (
       <TestimonialCard
        key={testimonial.id}
        testimonial={testimonial}
        variant="elevated"
        showLocation={true}
        animationDelay={index * 100}
        data-testid={`service-testimonial-${serviceType}-${testimonial.id}`}
       />
      ))}
     </div>
    );
   default:
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
      data-testid={`service-testimonials-carousel-${serviceType}`}
     />
    );
  }
 };

 return (
  <section 
   className={`py-16 px-6 ${className}`}
   {...(animationDelay > 0 ? { style: { animationDelay: `${animationDelay}ms` } } : {})}
   data-testid={`service-testimonials-${serviceType}`}
  >
   <div className="max-w-7xl mx-auto">
    {/* Service Badge */}
    <div className="flex justify-center mb-6">
     <div className={`inline-flex items-center px-4 py-2 rounded-full border text-sm ${getServiceBadgeColor()}`}>
      {serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Service
     </div>
    </div>

    {/* Section Header */}
    <div className="text-center mb-12 lg:mb-16">
     <h3 
      className="text-3xl lg:text-4xl xl:text-5xl mb-6 tracking-tight leading-tight text-foreground"
      data-testid={`service-testimonials-title-${serviceType}`}
     >
      {getServiceTitle()}
     </h3>
     <p 
      className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
      data-testid={`service-testimonials-description-${serviceType}`}
     >
      {getServiceDescription()}
     </p>
    </div>

    {/* Testimonials Display */}
    {renderTestimonials()}

    {/* Stats specific to service */}
    {displayTestimonials.length > 0 && (
     <div className="text-center mt-12 pt-8 border-t border-border/30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
       <div className="text-center">
        <div className="text-xl lg:text-2xl gradient-text-cyan-purple mb-2">
         {displayTestimonials.length}+
        </div>
        <div className="text-sm text-muted-foreground">
         Satisfied Clients
        </div>
       </div>
       <div className="text-center">
        <div className="text-xl lg:text-2xl gradient-text-cyan-purple mb-2">
         100%
        </div>
        <div className="text-sm text-muted-foreground">
         Satisfaction Rate
        </div>
       </div>
       <div className="text-center">
        <div className="text-xl lg:text-2xl gradient-text-cyan-purple mb-2">
         5★
        </div>
        <div className="text-sm text-muted-foreground">
         Average Rating
        </div>
       </div>
       <div className="text-center">
        <div className="text-xl lg:text-2xl gradient-text-cyan-purple mb-2">
         24/7
        </div>
        <div className="text-sm text-muted-foreground">
         Service Available
        </div>
       </div>
      </div>
     </div>
    )}
   </div>
  </section>
 );
}
