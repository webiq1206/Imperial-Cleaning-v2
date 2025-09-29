import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Award } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { ServiceCTAProps } from "../types";

export default function ServiceCTA({
  title,
  description,
  serviceType,
  buttonText = "Get Free Quote",
  onGetQuote,
  features = [],
  urgentCTA = false,
  className = ""
}: ServiceCTAProps) {
  
  const handleGetQuote = () => {
    trackEvent('quote_request', 'service_cta', serviceType);
    onGetQuote?.();
  };

  const getServiceFeatures = () => {
    if (features.length > 0) return features;
    
    switch (serviceType) {
      case "commercial-cleaning":
        return [
          "Daily, weekly, monthly schedules",
          "Licensed & insured professionals", 
          "Customized cleaning protocols",
          "24/7 service availability"
        ];
      case "construction-cleaning":
        return [
          "3-phase construction cleanup",
          "Debris removal & disposal",
          "Inspection-ready finishing",
          "Fast project turnaround"
        ];
      default:
        return [
          "Professional cleaning services",
          "Licensed & insured",
          "Flexible scheduling",
          "100% satisfaction guarantee"
        ];
    }
  };

  const getServiceIcon = (index: number) => {
    const icons = [CheckCircle, Clock, Shield, Award];
    return icons[index % icons.length];
  };

  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="glass-card-premium sophisticated-glow p-8 lg:p-12 rounded-lg text-center">
          {/* Urgent indicator */}
          {urgentCTA && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 animate-pulse">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Limited Time - Act Now</span>
            </div>
          )}

          {/* Title */}
          <h2 
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 text-foreground tracking-tight"
            data-testid={`title-service-cta-${serviceType}`}
          >
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p 
              className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
              data-testid={`description-service-cta-${serviceType}`}
            >
              {description}
            </p>
          )}

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {getServiceFeatures().map((feature, index) => {
              const Icon = getServiceIcon(index);
              return (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-left p-3 rounded-lg glass-effect hover-lift-gentle group"
                  data-testid={`feature-${serviceType}-${index}`}
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleGetQuote}
            variant="pill-primary"
            size="pill-lg"
            className="pill-button-resend-primary hover-lift-moderate button-ripple text-lg font-semibold px-8 py-4"
            data-testid={`button-service-cta-${serviceType}`}
          >
            {buttonText}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>$2M Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-4 h-4 text-primary" />
              <span>Licensed & Bonded</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>100% Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}