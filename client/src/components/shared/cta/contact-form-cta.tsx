import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, ArrowRight } from "lucide-react";
import { trackEvent, trackCTAClick, trackUserJourney } from "@/lib/analytics";
import { ContactFormCTAProps } from "../types";

export default function ContactFormCTA({
 title,
 description,
 buttonText = "Get Free Quote",
 onShowContactForm,
 size = "md",
 variant = "primary",
 className = ""
}: ContactFormCTAProps) {
 
 const handleShowContactForm = () => {
  // Enhanced conversion tracking with context
  trackCTAClick('contact_form', {
   page: window.location.pathname,
   section: `contact_form_cta_${variant}_${size}`,
   serviceType: undefined, // Will be passed via props in the future
   location: undefined, // Will be passed via props in the future
  });
  
  // Track user journey progression
  trackUserJourney('consideration', 'contact_form_cta_click', {
   serviceType: undefined,
   location: undefined
  });
  
  // Legacy tracking
  trackEvent('contact_form_trigger', 'cta', variant);
  onShowContactForm?.();
 };

 const getSizeClasses = () => {
  switch (size) {
   case "sm":
    return {
     container: "py-8 px-4",
     title: "text-lg lg:text-xl mb-3",
     description: "text-sm text-muted-foreground mb-4",
     button: "sm"
    };
   case "lg":
    return {
     container: "py-16 px-6",
     title: "text-2xl lg:text-3xl xl:text-4xl mb-6",
     description: "text-lg lg:text-xl text-muted-foreground mb-8",
     button: "pill-lg"
    };
   default:
    return {
     container: "py-12 px-6",
     title: "text-xl lg:text-2xl xl:text-3xl mb-4",
     description: "text-base lg:text-lg text-muted-foreground mb-6",
     button: "pill-md"
    };
  }
 };

 const getVariantClasses = () => {
  switch (variant) {
   case "secondary":
    return "pill-button-resend-secondary hover-lift-gentle hover-shimmer";
   case "outline":
    return "border border-border/50 glass-effect hover:bg-white/10 hover-lift-gentle";
   default:
    return "pill-button-resend-primary hover-lift-moderate button-ripple";
  }
 };

 const getButtonVariant = () => {
  switch (variant) {
   case "secondary":
    return "pill-secondary";
   case "outline":
    return "outline";
   default:
    return "pill-primary";
  }
 };

 const sizeClasses = getSizeClasses();

 return (
  <section className={`${sizeClasses.container} ${className}`}>
   <div className="max-w-3xl mx-auto text-center">
    {size !== "sm" && (
     <div className="glass-card-elevated sophisticated-glow p-6 lg:p-8 rounded-lg">
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
       <MessageSquare className="w-6 h-6 text-primary" />
      </div>

      {/* Title */}
      <h3 
       className={`${sizeClasses.title} text-foreground tracking-tight`}
       data-testid={`title-contact-form-cta-${size}`}
      >
       {title}
      </h3>

      {/* Description */}
      {description && (
       <p 
        className={`${sizeClasses.description} leading-relaxed max-w-2xl mx-auto`}
        data-testid={`description-contact-form-cta-${size}`}
       >
        {description}
       </p>
      )}

      {/* CTA Button */}
      <Button 
       onClick={handleShowContactForm}
       variant={getButtonVariant()}
       size={sizeClasses.button}
       className={`${getVariantClasses()} `}
       data-testid={`button-contact-form-cta-${size}-${variant}`}
      >
       {buttonText}
       <ArrowRight className="ml-2 w-4 h-4" />
      </Button>

      {/* Alternative contact methods */}
      {size === "lg" && (
       <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border/50">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
         <Phone className="w-4 h-4 text-primary" />
         <span>Call: (208) 520-3202</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
         <Mail className="w-4 h-4 text-primary" />
         <span>Email Response</span>
        </div>
       </div>
      )}
     </div>
    )}

    {/* Small size version - just the button */}
    {size === "sm" && (
     <Button 
      onClick={handleShowContactForm}
      variant={getButtonVariant()}
      size={sizeClasses.button}
      className={`${getVariantClasses()} `}
      data-testid={`button-contact-form-cta-${size}-${variant}`}
     >
      {buttonText}
      <ArrowRight className="ml-2 w-4 h-4" />
     </Button>
    )}
   </div>
  </section>
 );
}