import { ServiceLocation, allServiceLocations } from "@shared/service-locations";
import { buildServiceLocationUrl } from "./routing-utils";

export interface LinkInfo {
  url: string;
  text: string;
}

export interface ComplementaryServiceLink extends LinkInfo {
  service: string;
}

export interface NearbyCityLink extends LinkInfo {
  location: ServiceLocation;
}

/**
 * Get complementary service URL for same city
 * If user is viewing construction cleaning, suggest commercial cleaning and vice versa
 */
export function getComplementaryServiceLink(
  currentService: string,
  location: ServiceLocation
): ComplementaryServiceLink | null {
  const complementaryService = currentService === 'construction-cleaning' 
    ? 'commercial-cleaning' 
    : 'construction-cleaning';
  
  const serviceName = complementaryService === 'construction-cleaning'
    ? 'Construction Cleaning'
    : 'Commercial Cleaning';
  
  const hasService = complementaryService === 'construction-cleaning'
    ? location.services.constructionCleanup
    : location.services.commercialCleaning;
  
  if (!hasService) {
    return null;
  }
  
  return {
    url: buildServiceLocationUrl(location.state, complementaryService, location.name),
    text: `${serviceName} in ${location.name}`,
    service: complementaryService
  };
}

/**
 * Get 3-6 nearby cities for same service
 * Prioritizes by:
 * 1. Same state
 * 2. Market tier (primary > secondary > extended)
 * 3. Proximity (based on drive time)
 * 4. Excludes the current location
 */
export function getNearbyCities(
  service: string,
  currentLocation: ServiceLocation,
  limit: number = 5
): NearbyCityLink[] {
  const serviceKey = service === 'construction-cleaning' 
    ? 'constructionCleanup' 
    : 'commercialCleaning';
  
  const filteredLocations = allServiceLocations.filter(loc => {
    if (loc.name === currentLocation.name && loc.state === currentLocation.state) {
      return false;
    }
    
    return loc.services[serviceKey as keyof typeof loc.services];
  });
  
  const sortedLocations = filteredLocations.sort((a, b) => {
    const sameStateA = a.state === currentLocation.state ? 0 : 1;
    const sameStateB = b.state === currentLocation.state ? 0 : 1;
    const stateDiff = sameStateA - sameStateB;
    if (stateDiff !== 0) return stateDiff;
    
    const tierOrder = { primary: 0, secondary: 1, extended: 2 };
    const tierDiff = tierOrder[a.marketTier] - tierOrder[b.marketTier];
    if (tierDiff !== 0) return tierDiff;
    
    const driveTimeA = parseDriveTime(a.driveTimeFromHQ);
    const driveTimeB = parseDriveTime(b.driveTimeFromHQ);
    const currentDriveTime = parseDriveTime(currentLocation.driveTimeFromHQ);
    
    const proximityA = Math.abs(driveTimeA - currentDriveTime);
    const proximityB = Math.abs(driveTimeB - currentDriveTime);
    
    return proximityA - proximityB;
  });
  
  return sortedLocations.slice(0, limit).map(loc => ({
    url: buildServiceLocationUrl(loc.state, service, loc.name),
    text: `${loc.name}, ${loc.state}`,
    location: loc
  }));
}

/**
 * Parse drive time string to minutes for comparison
 */
function parseDriveTime(driveTime: string): number {
  if (driveTime.includes("Headquarters") || driveTime === "0 minutes") {
    return 0;
  }
  
  const hoursMatch = driveTime.match(/(\d+(?:\.\d+)?)\s*hour/);
  const minutesMatch = driveTime.match(/(\d+)\s*minute/);
  
  let totalMinutes = 0;
  
  if (hoursMatch) {
    totalMinutes += parseFloat(hoursMatch[1]) * 60;
  }
  
  if (minutesMatch) {
    totalMinutes += parseInt(minutesMatch[1]);
  }
  
  return totalMinutes || 0;
}

/**
 * Get service area overview page link for a state
 */
export function getServiceAreaLink(state: string): LinkInfo {
  const stateSlug = state.toLowerCase();
  
  return {
    url: `/service-areas/${stateSlug}`,
    text: `All ${state} Service Areas`
  };
}

/**
 * Get top cities for a state (primary/secondary markets)
 * Used for suggesting other locations in the same state
 */
export function getTopCitiesForState(
  state: string,
  service: string,
  limit: number = 6
): NearbyCityLink[] {
  const serviceKey = service === 'construction-cleaning' 
    ? 'constructionCleanup' 
    : 'commercialCleaning';
  
  const stateLocations = allServiceLocations.filter(loc => {
    if (loc.state !== state) return false;
    return loc.services[serviceKey as keyof typeof loc.services];
  });
  
  const sortedLocations = stateLocations.sort((a, b) => {
    const tierOrder = { primary: 0, secondary: 1, extended: 2 };
    const tierDiff = tierOrder[a.marketTier] - tierOrder[b.marketTier];
    
    if (tierDiff !== 0) return tierDiff;
    
    if (a.population && b.population) {
      const popA = parseInt(a.population.replace(/[^0-9]/g, ''));
      const popB = parseInt(b.population.replace(/[^0-9]/g, ''));
      return popB - popA;
    }
    
    return a.name.localeCompare(b.name);
  });
  
  return sortedLocations.slice(0, limit).map(loc => ({
    url: buildServiceLocationUrl(loc.state, service, loc.name),
    text: loc.name,
    location: loc
  }));
}

/**
 * Get locations serving similar industries in same state
 * Useful for cross-linking within industry-specific sections
 */
export function getSimilarIndustryLocations(
  service: string,
  currentLocation: ServiceLocation,
  industry: string,
  limit: number = 3
): NearbyCityLink[] {
  const serviceKey = service === 'construction-cleaning' 
    ? 'constructionCleanup' 
    : 'commercialCleaning';
  
  const industryLocations = allServiceLocations.filter(loc => {
    if (loc.name === currentLocation.name && loc.state === currentLocation.state) {
      return false;
    }
    
    if (!loc.services[serviceKey as keyof typeof loc.services]) {
      return false;
    }
    
    if (loc.state !== currentLocation.state) {
      return false;
    }
    
    return loc.demographics.economicBase.includes(industry);
  });
  
  const sortedLocations = industryLocations.sort((a, b) => {
    const tierOrder = { primary: 0, secondary: 1, extended: 2 };
    return tierOrder[a.marketTier] - tierOrder[b.marketTier];
  });
  
  return sortedLocations.slice(0, limit).map(loc => ({
    url: buildServiceLocationUrl(loc.state, service, loc.name),
    text: loc.name,
    location: loc
  }));
}

/**
 * Get service hub page URL
 */
export function getServiceHubUrl(service: string): LinkInfo {
  const serviceName = service === 'construction-cleaning'
    ? 'Construction Cleaning Services'
    : 'Commercial Cleaning Services';
    
  return {
    url: `/${service}`,
    text: serviceName
  };
}
