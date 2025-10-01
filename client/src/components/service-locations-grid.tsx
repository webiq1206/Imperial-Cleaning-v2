import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Building, Star, Clock, Users } from "lucide-react";
import { trackLocationInteraction, trackServiceDemand, trackContentEngagement } from "@/lib/analytics";
import { 
 idahoLocations, 
 utahLocations, 
 extendedIdahoLocations, 
 extendedUtahLocations,
 ServiceLocation 
} from "@shared/service-locations";
import { buildServiceLocationUrl } from "@/lib/routing-utils";

interface ServiceLocationsGridProps {
 serviceType: "construction-cleaning" | "commercial-cleaning";
 title?: string;
 description?: string;
 showExtended?: boolean;
}

export default function ServiceLocationsGrid({ 
 serviceType, 
 title, 
 description,
 showExtended = true 
}: ServiceLocationsGridProps) {
 // Filter locations based on service availability
 const filterLocationsByService = (locations: ServiceLocation[]) => {
  return locations.filter(location => {
   if (serviceType === "construction-cleaning") {
    return location.services.constructionCleanup;
   }
   return location.services.commercialCleaning;
  });
 };

 const primaryIdahoLocations = filterLocationsByService(idahoLocations);
 const primaryUtahLocations = filterLocationsByService(utahLocations);
 const secondaryIdahoLocations = showExtended ? filterLocationsByService(extendedIdahoLocations) : [];
 const secondaryUtahLocations = showExtended ? filterLocationsByService(extendedUtahLocations) : [];

 const getLocationSlug = (locationName: string) => {
  return locationName.toLowerCase()
   .replace(/\s+/g, '-')
   .replace(/[.,]/g, '')
   .replace(/&/g, 'and');
 };

 const getServiceDisplayName = () => {
  return serviceType === "construction-cleaning" ? "Construction Cleanup" : "Commercial Cleaning";
 };

 const getTierIcon = (tier: string) => {
  switch (tier) {
   case "primary": return <Star className="w-4 h-4 text-yellow-400" />;
   case "secondary": return <Building className="w-4 h-4 text-blue-400" />;
   case "extended": return <MapPin className="w-4 h-4 text-green-400" />;
   default: return <MapPin className="w-4 h-4" />;
  }
 };

 const getTierBadge = (tier: string) => {
  switch (tier) {
   case "primary": return { label: "Primary Market", color: "text-yellow-400 border-yellow-400/20 bg-yellow-400/10" };
   case "secondary": return { label: "Secondary Market", color: "text-blue-400 border-blue-400/20 bg-blue-400/10" };
   case "extended": return { label: "Extended Coverage", color: "text-green-400 border-green-400/20 bg-green-400/10" };
   default: return { label: "Service Area", color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/10" };
  }
 };

 const LocationCard = ({ location, index }: { location: ServiceLocation; index: number }) => {
  const tierBadge = getTierBadge(location.marketTier);
  const slug = getLocationSlug(location.name);
  
  return (
   <Link 
    href={buildServiceLocationUrl(location.state, serviceType, location.name)} 
    key={location.name}
    onClick={() => {
     // Enhanced location grid interaction tracking
     trackLocationInteraction(
      'location_card_click',
      location.name,
      location.marketTier,
      serviceType
     );
     
     // Track service demand for this location
     trackServiceDemand(
      serviceType as 'construction-cleaning' | 'commercial-cleaning',
      location.name,
      'location_grid_click'
     );
     
     // Track engagement with location grid
     trackContentEngagement(
      'location_grid_click',
      {
       contentType: 'location_card',
       contentId: location.name,
       serviceType: serviceType
      }
     );
    }}
   >
    <div 
     className={`glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand p-6 rounded-lg group cursor-pointer transition-all duration-300 animate-fade-in-up stagger-delay-${index + 1}`}
     data-testid={`location-card-${slug}`}
    >
     {/* Header with tier badge */}
     <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-2">
       {getTierIcon(location.marketTier)}
       <h3 className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
        {location.name}
       </h3>
      </div>
      <div className={`px-2 py-1 rounded-full text-xs border ${tierBadge.color}`}>
       {tierBadge.label}
      </div>
     </div>

     {/* Location info */}
     <div className="space-y-2 mb-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
       <MapPin className="w-3 h-3" />
       <span>{location.state} • {location.county || 'County'}</span>
      </div>
      {location.population && (
       <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Users className="w-3 h-3" />
        <span>Population: {location.population}</span>
       </div>
      )}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
       <Clock className="w-3 h-3" />
       <span>{location.driveTimeFromHQ}</span>
      </div>
     </div>

     {/* Service radius */}
     <div className="mb-4">
      <div className="text-sm text-foreground mb-1">Service Coverage</div>
      <div className="text-sm text-muted-foreground">{location.serviceRadius}</div>
     </div>

     {/* Specialized services preview */}
     {location.services.specializedServices.length > 0 && (
      <div className="mb-4">
       <div className="text-sm text-foreground mb-2">Specialized Services</div>
       <div className="flex flex-wrap gap-1">
        {location.services.specializedServices.slice(0, 2).map((service, idx) => (
         <span 
          key={idx}
          className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
         >
          {service}
         </span>
        ))}
        {location.services.specializedServices.length > 2 && (
         <span className="px-2 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground border border-border/50">
          +{location.services.specializedServices.length - 2} more
         </span>
        )}
       </div>
      </div>
     )}

     {/* Action button */}
     <div className="flex items-center justify-between pt-3 border-t border-border/20">
      <span className="text-sm text-muted-foreground">
       View {getServiceDisplayName()} Services
      </span>
      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
     </div>
    </div>
   </Link>
  );
 };

 const StateSection = ({ 
  stateName, 
  locations, 
  title: sectionTitle 
 }: { 
  stateName: string; 
  locations: ServiceLocation[]; 
  title: string 
 }) => {
  if (locations.length === 0) return null;

  return (
   <div className="mb-12">
    <h3 className="text-2xl mb-6 text-foreground flex items-center gap-3">
     <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
      <MapPin className="w-4 h-4 text-primary" />
     </div>
     {sectionTitle}
     <span className="text-sm font-normal text-muted-foreground">
      ({locations.length} location{locations.length !== 1 ? 's' : ''})
     </span>
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     {locations.map((location, index) => (
      <LocationCard key={location.name} location={location} index={index} />
     ))}
    </div>
   </div>
  );
 };

 return (
  <section className="py-24 px-4 bg-card/30">
   <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
     <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
      {title || `${getServiceDisplayName()} Service Areas`}
     </h2>
     <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
      {description || `Professional ${serviceType === "construction-cleaning" ? "post-construction cleanup" : "commercial cleaning"} services available in all our service locations across Idaho and Utah. Click any location to view specific service details and local information.`}
     </p>
    </div>

    {/* Quick stats */}
    <div className="grid md:grid-cols-4 gap-6 mb-16">
     <div className="glass-card-elevated p-6 text-center">
      <div className="text-3xl text-primary mb-2">
       {primaryIdahoLocations.length + primaryUtahLocations.length}
      </div>
      <div className="text-sm text-muted-foreground">Primary Markets</div>
     </div>
     <div className="glass-card-elevated p-6 text-center">
      <div className="text-3xl text-primary mb-2">
       {secondaryIdahoLocations.length + secondaryUtahLocations.length}
      </div>
      <div className="text-sm text-muted-foreground">Extended Coverage</div>
     </div>
     <div className="glass-card-elevated p-6 text-center">
      <div className="text-3xl text-primary mb-2">2</div>
      <div className="text-sm text-muted-foreground">States Served</div>
     </div>
     <div className="glass-card-elevated p-6 text-center">
      <div className="text-3xl text-primary mb-2">24/7</div>
      <div className="text-sm text-muted-foreground">Emergency Response</div>
     </div>
    </div>

    {/* Primary Markets */}
    <StateSection 
     stateName="Idaho"
     locations={primaryIdahoLocations}
     title="Idaho Primary Markets"
    />

    <StateSection 
     stateName="Utah"
     locations={primaryUtahLocations}
     title="Utah Primary Markets"
    />

    {/* Extended Coverage */}
    {showExtended && (
     <>
      <div className="glass-divider-top my-16"></div>
      
      <div className="text-center mb-12">
       <h3 className="text-3xl mb-4 text-foreground">Extended Service Coverage</h3>
       <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Additional coverage areas where we provide {getServiceDisplayName().toLowerCase()} services with the same professional standards and quality assurance.
       </p>
      </div>

      <StateSection 
       stateName="Idaho"
       locations={secondaryIdahoLocations}
       title="Extended Idaho Coverage"
      />

      <StateSection 
       stateName="Utah"
       locations={secondaryUtahLocations}
       title="Extended Utah Coverage"
      />
     </>
    )}

    {/* Call to Action */}
    <div className="text-center mt-16">
     <div className="glass-card-elevated sophisticated-glow hover-lift-moderate p-8 rounded-lg max-w-2xl mx-auto">
      <h3 className="text-2xl mb-4 text-foreground">
       Don't See Your Location?
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
       We're always expanding our service areas. Contact us to discuss {getServiceDisplayName().toLowerCase()} services for your location.
      </p>
      <Button 
       variant="pill-primary" 
       size="pill-lg"
       className=""
       data-testid="button-contact-new-location"
      >
       Contact Us About Your Area
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
}