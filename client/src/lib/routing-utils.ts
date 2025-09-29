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

// Validate service type
export function isValidService(service: string): boolean {
  return ['construction-cleaning', 'commercial-cleaning'].includes(service);
}

// Validate service/location combination
export function isValidServiceLocation(service: string, locationSlug: string): boolean {
  if (!isValidService(service)) {
    return false;
  }
  
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

// Get location data by slug
export function getLocationBySlug(slug: string) {
  const locationName = slugToLocation(slug);
  if (!locationName) return null;
  
  return allServiceLocations.find(loc => loc.name === locationName) || null;
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