import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { trackEvent, trackCTAClick, trackUserJourney, trackServiceDemand, trackLocationInteraction } from "@/lib/analytics";
import { LocationCTAProps } from "../types";

export default function LocationCTA({
 title,
 description,
 locationName,
 state,
 buttonText,
 onGetQuote,
 localContext,
 coverageAreas = [],
 className = ""
}: LocationCTAProps) {
 
 const handleGetQuote = () => {
  // Determine service type from current page URL
  const currentPath = window.location.pathname;
  const serviceType = currentPath.includes('construction-cleaning') ? 'construction-cleaning' : 
            currentPath.includes('commercial-cleaning') ? 'commercial-cleaning' : undefined;
  
  // Enhanced conversion tracking with full location context
  trackCTAClick('quote_request', {
   page: currentPath,
   section: `location_cta_${locationName.toLowerCase().replace(/\s+/g, '-')}`,
   serviceType: serviceType,
   location: locationName,
   marketTier: undefined // Would need to be passed as prop for full context
  });
  
  // Track location-specific interaction
  trackLocationInteraction(
   'location_cta',
   locationName,
   'primary', // Default tier - should be passed as prop
   serviceType
  );
  
  // Track service demand for this specific location
  if (serviceType) {
   trackServiceDemand(serviceType, locationName, 'cta_click');
  }
  
  // Track user journey progression to conversion
  trackUserJourney('conversion', 'location_cta_quote_request', {
   serviceType: serviceType,
   location: locationName
  });
  
  // Legacy tracking
  trackEvent('quote_request', 'location_cta', `${locationName}_${state}`);
  onGetQuote?.();
 };

 const getDefaultButtonText = () => {
  return buttonText || `Request Quote for ${locationName}`;
 };

 const getLocalFeatures = () => {
  const baseFeatures = [
   `Serving ${locationName} and surrounding areas`,
   `Licensed for ${state} commercial cleaning`,
   "Same-day response available",
   "Local, trusted professionals"
  ];
  
  if (coverageAreas.length > 0) {
   baseFeatures[0] = `Serving ${coverageAreas.join(", ")}`;
  }
  
  return baseFeatures;
 };

 return (
  <section className={`py-16 px-6 ${className}`}>
   <div className="max-w-5xl mx-auto">
    <div className="glass-card-premium sophisticated-glow p-8 lg:p-12 rounded-lg">
     {/* Location header */}
     <div className="flex items-center justify-center gap-3 mb-6">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
       <MapPin className="w-4 h-4 text-primary" />
       <span className="text-sm text-primary">{locationName}, {state}</span>
      </div>
     </div>

     {/* Title */}
     <h2 
      className="text-3xl lg:text-4xl xl:text-5xl mb-6 text-foreground text-center tracking-tight"
      data-testid={`title-location-cta-${locationName.toLowerCase().replace(/\s+/g, '-')}`}
     >
      {title}
     </h2>

     {/* Description */}
     {description && (
      <p 
       className="text-lg lg:text-xl text-muted-foreground mb-8 text-center leading-relaxed max-w-4xl mx-auto"
       data-testid={`description-location-cta-${locationName.toLowerCase().replace(/\s+/g, '-')}`}
      >
       {description}
      </p>
     )}

     {/* Local context */}
     {localContext && (
      <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mb-8">
       <p className="text-foreground text-center text-base leading-relaxed">
        <strong>Local Advantage:</strong> {localContext}
       </p>
      </div>
     )}

     {/* Local features grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {getLocalFeatures().map((feature, index) => (
       <div 
        key={index}
        className="flex flex-col items-center text-center p-4 rounded-lg glass-effect hover-lift-gentle group"
        data-testid={`feature-${locationName.toLowerCase().replace(/\s+/g, '-')}-${index}`}
       >
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
         {index === 0 && <MapPin className="w-4 h-4 text-primary" />}
         {index === 1 && <Star className="w-4 h-4 text-primary" />}
         {index === 2 && <Clock className="w-4 h-4 text-primary" />}
         {index === 3 && <Phone className="w-4 h-4 text-primary" />}
        </div>
        <span className="text-sm text-foreground leading-snug">{feature}</span>
       </div>
      ))}
     </div>

     {/* Coverage areas */}
     {coverageAreas.length > 0 && (
      <div className="mb-8">
       <h3 className="text-lg text-foreground mb-4 text-center">
        Coverage Areas in {state}
       </h3>
       <div className="flex flex-wrap justify-center gap-2">
        {coverageAreas.map((area, index) => (
         <span 
          key={index}
          className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border/50"
          data-testid={`coverage-area-${index}`}
         >
          {area}
         </span>
        ))}
       </div>
      </div>
     )}

     {/* CTA Button */}
     <div className="text-center">
      <Button 
       onClick={handleGetQuote}
       variant="pill-primary"
       size="pill-lg"
       className="pill-button-resend-primary hover-lift-moderate button-ripple text-lg px-8 py-4"
       data-testid={`button-location-cta-${locationName.toLowerCase().replace(/\s+/g, '-')}`}
      >
       {getDefaultButtonText()}
       <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
       </svg>
      </Button>

      {/* Contact info */}
      <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border/50">
       <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Phone className="w-4 h-4 text-primary" />
        <span>(208) 520-3202</span>
       </div>
       <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="w-4 h-4 text-primary" />
        <span>Available 24/7</span>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
