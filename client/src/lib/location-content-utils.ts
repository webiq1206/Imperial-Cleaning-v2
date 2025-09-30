import { ServiceLocation } from "@shared/service-locations";

/**
 * Generate location-specific SEO and content for service pages
 */

// Generate location-specific page title
export function generateLocationTitle(service: string, location: ServiceLocation): string {
 const serviceName = service === 'construction-cleaning' ? 'Construction Cleaning' : 'Commercial Cleaning';
 return `${serviceName} in ${location.name}, ${location.state} | Imperial Cleaning Inc.`;
}

// Generate location-specific meta description
export function generateLocationDescription(service: string, location: ServiceLocation): string {
 const serviceType = service === 'construction-cleaning' ? 'post-construction cleanup' : 'commercial cleaning';
 const driveTime = location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 
  "Based locally" : 
  `${location.driveTimeFromHQ} from our Idaho Falls headquarters`;
 
 return `Professional ${serviceType} services in ${location.name}, ${location.state}. ${driveTime}, serving ${location.serviceRadius}. Trusted by ${location.demographics.economicBase.join(', ').toLowerCase()} businesses.`;
}

// Generate location-specific hero content
export function generateLocationHero(service: string, location: ServiceLocation) {
 const isConstruction = service === 'construction-cleaning';
 const serviceName = isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning';
 const serviceDescription = isConstruction ? 
  'post-construction cleanup and debris removal' : 
  'comprehensive commercial cleaning and janitorial services';

 return {
  title: `Professional ${serviceName} in ${location.name}, ${location.state}`,
  subtitle: `Expert ${serviceDescription} serving ${location.name} and surrounding ${location.state} areas. ${
   location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 
   "Based locally in Idaho Falls with immediate response capabilities." :
   `Reliable service delivery within ${location.driveTimeFromHQ} from our Idaho Falls headquarters.`
  }`,
  serviceRadius: location.serviceRadius
 };
}

// Generate local market overview content
export function generateMarketOverview(service: string, location: ServiceLocation) {
 const isConstruction = service === 'construction-cleaning';
 const businessTypes = location.demographics.economicBase;
 const constructionLevel = location.demographics.constructionActivity;
 const commercialDensity = location.demographics.commercialDensity;
 
 let marketDescription = `${location.name} serves as a ${location.marketTier} market in our service network, with a diverse economic base including ${businessTypes.slice(0, 3).join(', ')}.`;
 
 if (location.demographics.majorEmployers && location.demographics.majorEmployers.length > 0) {
  marketDescription += ` Major employers in the area include ${location.demographics.majorEmployers.slice(0, 2).join(' and ')}.`;
 }

 if (isConstruction) {
  const activityDescription = constructionLevel === 'high' ? 'robust construction and development activity' :
               constructionLevel === 'medium' ? 'steady construction projects' :
               'selective construction and renovation projects';
  marketDescription += ` The area features ${activityDescription}, creating consistent demand for professional post-construction cleanup services.`;
 } else {
  const densityDescription = commercialDensity === 'high' ? 'high commercial density with numerous business facilities' :
               commercialDensity === 'medium' ? 'established commercial presence' :
               'growing business community';
  marketDescription += ` With ${densityDescription}, there's strong demand for reliable commercial cleaning services.`;
 }

 return {
  title: `${location.name} Market Overview`,
  description: marketDescription,
  economicBase: businessTypes,
  marketTier: location.marketTier,
  constructionActivity: constructionLevel,
  commercialDensity: commercialDensity
 };
}

// Generate service coverage details
export function generateServiceCoverage(service: string, location: ServiceLocation) {
 const isConstruction = service === 'construction-cleaning';
 const specializedServices = location.services.specializedServices;
 
 let coverageDescription = `Imperial Cleaning provides comprehensive ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} services throughout ${location.name} and the surrounding ${location.serviceRadius}.`;
 
 if (location.driveTimeFromHQ === "0 minutes (Headquarters)") {
  coverageDescription += " As our headquarters location, we offer immediate response and full-service capabilities.";
 } else {
  coverageDescription += ` Our service delivery from Idaho Falls ensures reliable ${location.driveTimeFromHQ} response times.`;
 }

 if (specializedServices.length > 0) {
  coverageDescription += ` We specialize in ${specializedServices.slice(0, 3).join(', ').toLowerCase()} in this market.`;
 }

 const serviceAreas = location.businessDistricts || location.neighborhoods || [];
 
 return {
  description: coverageDescription,
  driveTime: location.driveTimeFromHQ,
  serviceRadius: location.serviceRadius,
  specializedServices,
  localAreas: serviceAreas
 };
}

// Generate local business integration content
export function generateBusinessIntegration(service: string, location: ServiceLocation) {
 const businessDistricts = location.businessDistricts || [];
 const isConstruction = service === 'construction-cleaning';
 
 let integrationContent = `Imperial Cleaning integrates seamlessly with ${location.name}'s business community, supporting ${location.demographics.economicBase.join(', ').toLowerCase()} sectors.`;
 
 if (businessDistricts.length > 0) {
  integrationContent += ` We serve key business areas including ${businessDistricts.join(', ')}.`;
 }

 if (isConstruction) {
  integrationContent += ` Our construction cleanup services help contractors meet project deadlines and inspection requirements.`;
 } else {
  integrationContent += ` Our flexible scheduling accommodates diverse business hours and operational needs.`;
 }

 return {
  content: integrationContent,
  businessDistricts,
  economicSectors: location.demographics.economicBase
 };
}

// Generate location-specific FAQ content
export function generateLocationFAQ(service: string, location: ServiceLocation) {
 const isConstruction = service === 'construction-cleaning';
 const serviceName = isConstruction ? 'construction cleanup' : 'commercial cleaning';
 
 const baseFAQs = [
  {
   question: `Do you provide ${serviceName} services throughout ${location.name}?`,
   answer: `Yes, Imperial Cleaning provides comprehensive ${serviceName} services throughout ${location.name} and the surrounding ${location.serviceRadius}. ${
    location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 
    "As our headquarters location, we offer immediate response and full-service capabilities." :
    `With ${location.driveTimeFromHQ} response time from our Idaho Falls headquarters, we ensure reliable service delivery.`
   }`
  },
  {
   question: `What makes Imperial Cleaning suitable for ${location.name} businesses?`,
   answer: `Our experience with ${location.demographics.economicBase.join(', ').toLowerCase()} businesses in ${location.name} allows us to understand the unique cleaning requirements of this market. We're familiar with local business districts${
    location.businessDistricts ? ` including ${location.businessDistricts.slice(0, 2).join(' and ')}` : ''
   } and can adapt our services to meet specific operational needs.`
  }
 ];

 // Add construction-specific FAQ
 if (isConstruction) {
  baseFAQs.push({
   question: `How do you handle construction projects of different sizes in ${location.name}?`,
   answer: `We scale our construction cleanup services based on project requirements in ${location.name}. From small renovation projects to large commercial developments, our team adapts to ${location.demographics.constructionActivity} construction activity levels typical in this market. We work with contractors to meet inspection deadlines and project timelines.`
  });
 } else {
  // Add commercial-specific FAQ
  baseFAQs.push({
   question: `What commercial facilities do you clean in ${location.name}?`,
   answer: `We serve diverse commercial facilities reflecting ${location.name}'s economic base in ${location.demographics.economicBase.join(', ').toLowerCase()}. This includes office buildings, retail spaces, healthcare facilities, and specialized environments${
    location.services.specializedServices.length > 0 ? 
    ` with expertise in ${location.services.specializedServices.slice(0, 2).join(' and ').toLowerCase()}` : 
    ''
   }.`
  });
 }

 return baseFAQs;
}

// Generate location-specific structured data
export function generateLocationStructuredData(service: string, location: ServiceLocation, canonicalUrl: string) {
 const isConstruction = service === 'construction-cleaning';
 const serviceName = isConstruction ? 'Construction Cleaning' : 'Commercial Cleaning';
 
 return {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Imperial Cleaning Inc - ${location.name} ${serviceName}`,
  "description": generateLocationDescription(service, location),
  "url": canonicalUrl,
  "telephone": "+1-208-520-3202",
  "address": {
   "@type": "PostalAddress",
   "addressLocality": "Idaho Falls",
   "addressRegion": "ID",
   "addressCountry": "US"
  },
  "areaServed": {
   "@type": "City",
   "name": location.name,
   "addressRegion": location.state === "Idaho" ? "ID" : "UT"
  },
  "serviceType": isConstruction ? 
   ["Post Construction Cleanup", "Construction Site Cleaning", "Debris Removal", "Final Inspection Cleaning"] :
   ["Commercial Cleaning", "Janitorial Services", "Office Cleaning", "Facility Maintenance"],
  "hasOfferCatalog": {
   "@type": "OfferCatalog",
   "name": `${serviceName} Services in ${location.name}`,
   "itemListElement": location.services.specializedServices.slice(0, 3).map(service => ({
    "@type": "Offer",
    "itemOffered": {
     "@type": "Service",
     "name": service,
     "description": `Professional ${service.toLowerCase()} services in ${location.name}, ${location.state}`
    }
   }))
  }
 };
}

// Generate canonical URL for location
export function generateCanonicalUrl(service: string, locationSlug: string): string {
 return `https://imperialcleaninginc.com/${service}/${locationSlug}`;
}

// Generate location-specific breadcrumbs
export function generateLocationBreadcrumbs(service: string, location: ServiceLocation, locationSlug: string) {
 const serviceName = service === 'construction-cleaning' ? 'Construction Cleaning' : 'Commercial Cleaning';
 
 return [
  { name: "Home", url: "https://imperialcleaninginc.com/" },
  { name: "Services", url: "https://imperialcleaninginc.com/#services" },
  { name: serviceName, url: `https://imperialcleaninginc.com/${service}` },
  { name: `${location.name}, ${location.state}`, url: `https://imperialcleaninginc.com/${service}/${locationSlug}` }
 ];
}