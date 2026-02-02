import Link from "next/link";
import { ServiceLocation } from "@/data/service-locations";
import {
  getComplementaryServiceLink,
  getNearbyCities,
  getServiceAreaLink,
} from "@/lib/linking-utils";
import { MapPin, ArrowRight, Building2, Hammer } from "lucide-react";
import { trackNavigationInteraction } from "@/lib/analytics";

interface RelatedLinksProps {
  currentService: string;
  location: ServiceLocation;
  variant?: 'default' | 'compact';
}

export default function RelatedLinks({ currentService, location, variant = 'default' }: RelatedLinksProps) {
  const complementaryLink = getComplementaryServiceLink(currentService, location);
  const nearbyCities = getNearbyCities(currentService, location, variant === 'compact' ? 3 : 5);
  const stateAreaLink = getServiceAreaLink(location.state);
  
  const serviceName = currentService === 'construction-cleaning' 
    ? 'Construction Cleaning' 
    : 'Commercial Cleaning';
  
  const ServiceIcon = currentService === 'construction-cleaning' ? Hammer : Building2;

  const handleLinkClick = (linkType: string, destination: string) => {
    trackNavigationInteraction(
      'internal_link_click',
      'related_links',
      `${linkType}_${destination.toLowerCase().replace(/\s+/g, '_')}`
    );
  };

  if (variant === 'compact') {
    return (
      <div className="my-8 p-6 bg-secondary/30 rounded-xl border border-border/30" data-testid="related-links-compact">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Related:</span>
          
          {complementaryLink && (
            <>
              <Link
                href={complementaryLink.url}
                className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline"
                onClick={() => handleLinkClick('complementary_service', complementaryLink.text)}
                data-testid={`link-complementary-${complementaryLink.service}`}
              >
                {complementaryLink.text}
              </Link>
              <span className="text-border">•</span>
            </>
          )}
          
          {nearbyCities.slice(0, 2).map((city, index) => (
            <span key={city.location.name}>
              <Link
                href={city.url}
                className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline"
                onClick={() => handleLinkClick('nearby_city', city.text)}
                data-testid={`link-nearby-${city.location.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {city.location.name}
              </Link>
              {index < 1 && <span className="text-border mx-2">•</span>}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="my-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl border border-border/30 overflow-hidden"
      data-testid="related-links-section"
    >
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <ServiceIcon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Explore More {serviceName} Services
            </h3>
            <p className="text-sm text-muted-foreground">
              Find cleaning services in nearby areas and related services
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Complementary Service */}
          {complementaryLink && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                Alternative Service
              </h4>
              <Link
                href={complementaryLink.url}
                className="group flex items-center justify-between p-4 bg-card/50 hover:bg-card/80 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                onClick={() => handleLinkClick('complementary_service', complementaryLink.text)}
                data-testid={`link-complementary-${complementaryLink.service}`}
              >
                <div className="flex items-center gap-3">
                  {complementaryLink.service === 'construction-cleaning' ? (
                    <Hammer className="w-5 h-5 text-blue-500" />
                  ) : (
                    <Building2 className="w-5 h-5 text-green-500" />
                  )}
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {complementaryLink.text}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {complementaryLink.service === 'construction-cleaning' 
                        ? 'Post-construction cleanup' 
                        : 'Ongoing maintenance services'}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          )}

          {/* Nearby Cities */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Nearby Service Areas
            </h4>
            <div className="space-y-2">
              {nearbyCities.map((city) => (
                <Link
                  key={city.location.name}
                  href={city.url}
                  className="group flex items-center justify-between p-3 bg-card/50 hover:bg-card/80 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
                  onClick={() => handleLinkClick('nearby_city', city.text)}
                  data-testid={`link-nearby-${city.location.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {city.text}
                    </span>
                    {city.location.marketTier === 'primary' && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        Primary
                      </span>
                    )}
                  </div>
                  <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* State Service Area Link */}
        <div className="mt-6 pt-6 border-t border-border/30">
          <Link
            href={stateAreaLink.url}
            className="group inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
            onClick={() => handleLinkClick('state_overview', stateAreaLink.text)}
            data-testid={`link-state-overview-${location.state.toLowerCase()}`}
          >
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{stateAreaLink.text}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
