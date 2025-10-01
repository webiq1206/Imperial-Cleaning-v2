import { allServiceLocations } from "@shared/service-locations";

// Convert location name to URL-friendly slug
export function locationToSlug(locationName: string): string {
 return locationName
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^a-z0-9-]/g, '')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '');
}

// Convert URL slug back to location name
export function slugToLocation(slug: string): string | null {
 const location = allServiceLocations.find(loc => 
  locationToSlug(loc.name) === slug
 );
 return location ? location.name : null;
}

// Convert state name to URL-friendly slug
export function stateToSlug(state: string): string {
 return state.toLowerCase();
}

// Convert URL slug back to state name
export function slugToState(slug: string): string | null {
 const validStates: { [key: string]: string } = {
  'idaho': 'Idaho',
  'utah': 'Utah'
 };
 
 return validStates[slug.toLowerCase()] || null;
}

// Validate service type
export function isValidService(service: string): boolean {
 return ['construction-cleaning', 'commercial-cleaning'].includes(service);
}

// Validate service/location combination (legacy - without state)
export function isValidServiceLocation(service: string, locationSlug: string, state?: string): boolean {
 if (!isValidService(service)) {
  return false;
 }
 
 // If state is provided, use the new validation
 if (state !== undefined) {
  const stateName = slugToState(state);
  if (!stateName) {
   return false;
  }
  
  const locationName = slugToLocation(locationSlug);
  if (!locationName) {
   return false;
  }
  
  const location = allServiceLocations.find(loc => 
   loc.name === locationName && loc.state === stateName
  );
  
  if (!location) {
   return false;
  }
  
  // Check if the location supports the requested service
  if (service === 'construction-cleaning') {
   return location.services.constructionCleanup;
  } else if (service === 'commercial-cleaning') {
   return location.services.commercialCleaning;
  }
  
  return false;
 }
 
 // Legacy validation without state parameter
 const locationName = slugToLocation(locationSlug);
 if (!locationName) {
  return false;
 }
 
 const location = allServiceLocations.find(loc => loc.name === locationName);
 if (!location) {
  return false;
 }
 
 // Check if the location supports the requested service
 if (service === 'construction-cleaning') {
  return location.services.constructionCleanup;
 } else if (service === 'commercial-cleaning') {
  return location.services.commercialCleaning;
 }
 
 return false;
}

// Get location data by slug (legacy)
export function getLocationBySlug(slug: string) {
 const locationName = slugToLocation(slug);
 if (!locationName) return null;
 
 return allServiceLocations.find(loc => loc.name === locationName) || null;
}

// Get location data by state and slug
export function getLocationByStateAndSlug(state: string, citySlug: string) {
 const stateName = slugToState(state);
 if (!stateName) return null;
 
 const locationName = slugToLocation(citySlug);
 if (!locationName) return null;
 
 return allServiceLocations.find(loc => 
  loc.name === locationName && loc.state === stateName
 ) || null;
}

// Build service location URL with state/service/city structure
export function buildServiceLocationUrl(state: string, service: string, city: string): string {
 const stateSlug = stateToSlug(state);
 const citySlug = locationToSlug(city);
 return `/${stateSlug}/${service}/${citySlug}`;
}

// Get all valid location slugs for a service
export function getValidLocationSlugs(service: string): string[] {
 if (!isValidService(service)) {
  return [];
 }
 
 return allServiceLocations
  .filter(loc => {
   if (service === 'construction-cleaning') {
    return loc.services.constructionCleanup;
   } else if (service === 'commercial-cleaning') {
    return loc.services.commercialCleaning;
   }
   return false;
  })
  .map(loc => locationToSlug(loc.name));
}
