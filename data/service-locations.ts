/**
 * Authoritative Service Locations for Imperial Cleaning Inc.
 * Headquartered in Idaho Falls, ID
 * 
 * This file defines the complete service coverage areas across Idaho and Utah
 * based on realistic drive times, market opportunities, and current service capabilities.
 */

export interface ServiceLocation {
  name: string;
  state: "Idaho" | "Utah";
  county?: string;
  population?: string;
  marketTier: "primary" | "secondary" | "extended";
  driveTimeFromHQ: string;
  serviceRadius: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  demographics: {
    economicBase: string[];
    majorEmployers?: string[];
    constructionActivity: "high" | "medium" | "low";
    commercialDensity: "high" | "medium" | "low";
  };
  services: {
    constructionCleanup: boolean;
    commercialCleaning: boolean;
    industrialCleaning: boolean;
    specializedServices: string[];
  };
  businessDistricts?: string[];
  neighborhoods?: string[];
  keywords: string[];
  notes?: string;
}

export interface ServiceRegion {
  id: string;
  name: string;
  state: "Idaho" | "Utah";
  description: string;
  headquarters?: boolean;
  marketImportance: "primary" | "secondary" | "extended";
  totalPopulation: string;
  averageDriveTime: string;
  locations: ServiceLocation[];
}

// IDAHO SERVICE LOCATIONS
export const idahoLocations: ServiceLocation[] = [
  // SOUTHEASTERN IDAHO - PRIMARY (Headquarters Region)
  {
    name: "Idaho Falls",
    state: "Idaho",
    county: "Bonneville County",
    population: "65,000+",
    marketTier: "primary",
    driveTimeFromHQ: "0 minutes (Headquarters)",
    serviceRadius: "30 mile radius",
    coordinates: { lat: 43.4933, lng: -112.0339 },
    demographics: {
      economicBase: ["Healthcare", "Government", "Technology", "Energy", "Education"],
      majorEmployers: ["Idaho National Laboratory", "Eastern Idaho Regional Medical Center", "Melaleuca"],
      constructionActivity: "high",
      commercialDensity: "high"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Government Facilities", "Healthcare Facilities", "Laboratory Cleaning", "Educational Institutions"]
    },
    businessDistricts: ["Downtown Idaho Falls", "Snake River Landing", "Westside Business District"],
    neighborhoods: ["Downtown", "West Side", "Ammon", "Lincoln Road Corridor"],
    keywords: ["Idaho Falls commercial cleaning", "Idaho Falls construction cleanup", "Snake River Landing cleaning", "INL cleaning services"],
    notes: "Headquarters location - full service capabilities and immediate response"
  },
  {
    name: "Pocatello",
    state: "Idaho",
    county: "Bannock County",
    population: "56,000+",
    marketTier: "primary",
    driveTimeFromHQ: "30 minutes",
    serviceRadius: "25 mile radius",
    coordinates: { lat: 42.8713, lng: -112.4455 },
    demographics: {
      economicBase: ["Education", "Healthcare", "Manufacturing", "Transportation", "Government"],
      majorEmployers: ["Idaho State University", "Portneuf Medical Center", "ON Semiconductor"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["University Facilities", "Healthcare Facilities", "Manufacturing Support"]
    },
    businessDistricts: ["Downtown Pocatello", "University District", "Industrial Park"],
    neighborhoods: ["Old Town", "Highland", "Chubbuck", "Inkom"],
    keywords: ["Pocatello industrial cleaning", "ISU cleaning services", "Bannock County commercial cleaning", "eastern Idaho cleaning services"]
  },
  {
    name: "Blackfoot",
    state: "Idaho",
    county: "Bingham County",
    population: "12,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "25 minutes",
    serviceRadius: "15 mile radius",
    demographics: {
      economicBase: ["Agriculture", "Food Processing", "Government", "Healthcare"],
      constructionActivity: "low",
      commercialDensity: "low"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Food Processing Facilities", "Agricultural Facilities"]
    },
    keywords: ["Blackfoot commercial cleaning", "Bingham County cleaning services", "food processing facility cleaning"]
  },
  {
    name: "Rexburg",
    state: "Idaho",
    county: "Madison County",
    population: "32,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "45 minutes",
    serviceRadius: "20 mile radius",
    demographics: {
      economicBase: ["Education", "Agriculture", "Small Business", "Technology"],
      majorEmployers: ["Brigham Young University-Idaho", "Madison Memorial Hospital"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["University Facilities", "Educational Institutions", "Student Housing"]
    },
    businessDistricts: ["Downtown Rexburg", "University District"],
    keywords: ["Rexburg cleaning services", "BYU-Idaho cleaning", "Madison County commercial cleaning"]
  },
  // MAGIC VALLEY - SECONDARY
  {
    name: "Twin Falls",
    state: "Idaho",
    county: "Twin Falls County",
    population: "52,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "2 hours",
    serviceRadius: "30 mile radius",
    coordinates: { lat: 42.5630, lng: -114.4608 },
    demographics: {
      economicBase: ["Agriculture", "Food Processing", "Healthcare", "Tourism", "Technology"],
      majorEmployers: ["St. Luke's Magic Valley", "Glanbia", "Simplot"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Food Processing Facilities", "Agricultural Facilities", "Healthcare Facilities"]
    },
    businessDistricts: ["Downtown Twin Falls", "Magic Valley Mall Area", "Industrial District"],
    neighborhoods: ["Downtown", "Filer", "Buhl", "Jerome"],
    keywords: ["Twin Falls commercial cleaning", "Magic Valley cleaning services", "Twin Falls construction cleanup", "Jerome County cleaning"]
  },
  // TREASURE VALLEY - EXTENDED
  {
    name: "Boise",
    state: "Idaho",
    county: "Ada County",
    population: "235,000+",
    marketTier: "extended",
    driveTimeFromHQ: "3.5 hours",
    serviceRadius: "30 mile radius",
    coordinates: { lat: 43.6150, lng: -116.2023 },
    demographics: {
      economicBase: ["Technology", "Healthcare", "Government", "Finance", "Education"],
      majorEmployers: ["Micron Technology", "St. Luke's Health System", "Idaho Power", "Albertsons"],
      constructionActivity: "high",
      commercialDensity: "high"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Government Facilities", "Healthcare Facilities", "Technology Centers", "Corporate Offices"]
    },
    businessDistricts: ["Downtown Financial District", "Vista Village", "Boise Town Square", "WestPark Center"],
    neighborhoods: ["Downtown Boise", "West Boise", "North End", "Bench", "Southeast Boise"],
    keywords: ["Boise commercial cleaning", "Treasure Valley cleaning services", "downtown Boise cleaning", "Ada County commercial cleaning"],
    notes: "Major market - suitable for large projects and contracts"
  },
  {
    name: "Meridian",
    state: "Idaho",
    county: "Ada County",
    population: "125,000+",
    marketTier: "extended",
    driveTimeFromHQ: "3.5 hours",
    serviceRadius: "20 mile radius",
    demographics: {
      economicBase: ["Residential Development", "Retail", "Healthcare", "Technology"],
      constructionActivity: "high",
      commercialDensity: "high"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Retail Facilities", "Commercial Development", "Medical Facilities"]
    },
    businessDistricts: ["The Village at Meridian", "Eagle Road Corridor", "Meridian Crossroads"],
    neighborhoods: ["Meridian Ranch", "Bridgetower", "Ustick Station", "Tuscany"],
    keywords: ["Meridian construction cleanup", "Village at Meridian cleaning", "Eagle Road cleaning services"]
  },
  {
    name: "Nampa",
    state: "Idaho",
    county: "Canyon County",
    population: "105,000+",
    marketTier: "extended",
    driveTimeFromHQ: "3.5 hours",
    serviceRadius: "25 mile radius",
    demographics: {
      economicBase: ["Manufacturing", "Agriculture", "Food Processing", "Transportation"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Manufacturing Facilities", "Food Processing", "Warehouse Cleaning"]
    },
    businessDistricts: ["Karcher Corridor", "Downtown Nampa", "Industrial Park"],
    neighborhoods: ["Historic Downtown Nampa", "Karcher Mall Area", "Greenhurst", "South Nampa"],
    keywords: ["Nampa industrial cleaning", "Canyon County cleaning services", "Karcher Corridor cleaning"]
  },
  {
    name: "Caldwell",
    state: "Idaho",
    county: "Canyon County",
    population: "65,000+",
    marketTier: "extended",
    driveTimeFromHQ: "3.5 hours",
    serviceRadius: "20 mile radius",
    demographics: {
      economicBase: ["Agriculture", "Food Processing", "Education", "Manufacturing"],
      majorEmployers: ["College of Idaho", "Simplot"],
      constructionActivity: "medium",
      commercialDensity: "low"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Food Processing Facilities", "Educational Institutions", "Agricultural Facilities"]
    },
    businessDistricts: ["Downtown Caldwell", "Cleveland Boulevard", "College of Idaho District"],
    keywords: ["Caldwell commercial cleaning", "College of Idaho cleaning", "Canyon County cleaning services"]
  },
  {
    name: "Eagle",
    state: "Idaho",
    county: "Ada County",
    population: "32,000+",
    marketTier: "extended",
    driveTimeFromHQ: "3.5 hours",
    serviceRadius: "15 mile radius",
    demographics: {
      economicBase: ["Luxury Residential", "Professional Services", "Healthcare", "Corporate Offices"],
      constructionActivity: "high",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Executive Offices", "Medical Facilities", "Luxury Commercial"]
    },
    businessDistricts: ["Eagle Road Corporate District", "Downtown Eagle", "Medical Plaza"],
    neighborhoods: ["Eagle Hills", "Banbury", "Seven Oaks", "Baneberry"],
    keywords: ["Eagle commercial cleaning", "Eagle Road cleaning services", "luxury office cleaning"]
  }
];

// UTAH SERVICE LOCATIONS
export const utahLocations: ServiceLocation[] = [
  // NORTHERN UTAH / CACHE VALLEY
  {
    name: "Logan",
    state: "Utah",
    county: "Cache County",
    population: "52,000+",
    marketTier: "primary",
    driveTimeFromHQ: "2.5 hours",
    serviceRadius: "25 mile radius",
    coordinates: { lat: 41.7370, lng: -111.8338 },
    demographics: {
      economicBase: ["Education", "Agriculture", "Technology", "Healthcare", "Manufacturing"],
      majorEmployers: ["Utah State University", "Logan Regional Hospital", "ICON Health & Fitness"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["University Facilities", "Healthcare Facilities", "Research Facilities", "Agricultural Processing"]
    },
    businessDistricts: ["Downtown Logan", "University District", "Cache Valley Mall Area"],
    keywords: ["Logan commercial cleaning", "Utah State University cleaning", "Cache County cleaning services", "northern Utah cleaning"]
  },
  // WASATCH FRONT - PRIMARY UTAH MARKET
  {
    name: "Salt Lake City",
    state: "Utah",
    county: "Salt Lake County",
    population: "200,000+",
    marketTier: "primary",
    driveTimeFromHQ: "3.5 hours",
    serviceRadius: "35 mile radius",
    coordinates: { lat: 40.7589, lng: -111.8883 },
    demographics: {
      economicBase: ["Government", "Healthcare", "Technology", "Finance", "Education", "Tourism"],
      majorEmployers: ["University of Utah", "Intermountain Healthcare", "Goldman Sachs", "Adobe"],
      constructionActivity: "high",
      commercialDensity: "high"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Government Facilities", "Healthcare Facilities", "Technology Centers", "Financial Institutions", "University Facilities"]
    },
    businessDistricts: ["Downtown Salt Lake City", "Gateway District", "University District", "Sugar House"],
    neighborhoods: ["Capitol Hill", "Avenues", "Sugar House", "Millcreek", "Murray"],
    keywords: ["Salt Lake City commercial cleaning", "downtown Salt Lake cleaning", "Utah government facility cleaning", "Wasatch Front cleaning services"],
    notes: "Major Utah market - state capital with significant commercial opportunities"
  },
  {
    name: "Ogden",
    state: "Utah",
    county: "Weber County",
    population: "87,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "3 hours",
    serviceRadius: "25 mile radius",
    coordinates: { lat: 41.2230, lng: -111.9738 },
    demographics: {
      economicBase: ["Government", "Transportation", "Manufacturing", "Healthcare", "Education"],
      majorEmployers: ["Hill Air Force Base", "Weber State University", "McKay-Dee Hospital"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Government Facilities", "Military Facilities", "Healthcare Facilities", "University Facilities"]
    },
    businessDistricts: ["Downtown Ogden", "Weber State University District", "Industrial District"],
    keywords: ["Ogden commercial cleaning", "Weber County cleaning services", "Hill Air Force Base cleaning", "Weber State cleaning"]
  },
  {
    name: "Provo",
    state: "Utah",
    county: "Utah County",
    population: "117,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "4 hours",
    serviceRadius: "25 mile radius",
    coordinates: { lat: 40.2338, lng: -111.6585 },
    demographics: {
      economicBase: ["Education", "Technology", "Healthcare", "Manufacturing", "Professional Services"],
      majorEmployers: ["Brigham Young University", "Utah Valley Hospital", "Nu Skin", "Qualtrics"],
      constructionActivity: "high",
      commercialDensity: "high"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["University Facilities", "Technology Centers", "Healthcare Facilities", "Research Facilities"]
    },
    businessDistricts: ["Downtown Provo", "BYU Campus District", "Technology Corridor", "Riverwoods"],
    keywords: ["Provo commercial cleaning", "BYU cleaning services", "Utah County cleaning", "Utah Valley cleaning services"]
  }
];

// EXTENDED COVERAGE AREAS
export const extendedIdahoLocations: ServiceLocation[] = [
  {
    name: "Ammon",
    state: "Idaho",
    county: "Bonneville County",
    population: "17,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "10 minutes",
    serviceRadius: "Local coverage",
    demographics: {
      economicBase: ["Residential", "Retail", "Professional Services"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Retail Facilities", "Professional Offices"]
    },
    keywords: ["Ammon commercial cleaning", "Bonneville County cleaning"]
  },
  {
    name: "Chubbuck",
    state: "Idaho",
    county: "Bannock County",
    population: "15,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "35 minutes",
    serviceRadius: "Local coverage",
    demographics: {
      economicBase: ["Residential", "Retail", "Small Business"],
      constructionActivity: "low",
      commercialDensity: "low"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Retail Facilities", "Small Business Support"]
    },
    keywords: ["Chubbuck cleaning services", "Bannock County commercial cleaning"]
  },
  {
    name: "Shelley",
    state: "Idaho",
    county: "Bingham County",
    population: "4,500+",
    marketTier: "extended",
    driveTimeFromHQ: "20 minutes",
    serviceRadius: "Local coverage",
    demographics: {
      economicBase: ["Agriculture", "Small Business"],
      constructionActivity: "low",
      commercialDensity: "low"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Agricultural Facilities", "Small Business Support"]
    },
    keywords: ["Shelley commercial cleaning", "Bingham County cleaning services"]
  },
  {
    name: "Rigby",
    state: "Idaho",
    county: "Jefferson County",
    population: "5,000+",
    marketTier: "extended",
    driveTimeFromHQ: "25 minutes",
    serviceRadius: "Local coverage",
    demographics: {
      economicBase: ["Agriculture", "Small Business", "Education"],
      constructionActivity: "low",
      commercialDensity: "low"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Educational Facilities", "Agricultural Support"]
    },
    keywords: ["Rigby cleaning services", "Jefferson County commercial cleaning"]
  },
  {
    name: "St. Anthony",
    state: "Idaho",
    county: "Fremont County",
    population: "3,500+",
    marketTier: "extended",
    driveTimeFromHQ: "1 hour",
    serviceRadius: "Local coverage",
    demographics: {
      economicBase: ["Agriculture", "Tourism", "Small Business"],
      constructionActivity: "low",
      commercialDensity: "low"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Tourism Facilities", "Agricultural Support"]
    },
    keywords: ["St. Anthony cleaning services", "Fremont County commercial cleaning"]
  },
  {
    name: "Driggs",
    state: "Idaho",
    county: "Teton County",
    population: "2,000+",
    marketTier: "extended",
    driveTimeFromHQ: "1.5 hours",
    serviceRadius: "Local coverage",
    demographics: {
      economicBase: ["Tourism", "Recreation", "Agriculture"],
      constructionActivity: "medium",
      commercialDensity: "low"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Tourism Facilities", "Recreation Centers", "Ski Resort Support"]
    },
    keywords: ["Driggs cleaning services", "Teton County commercial cleaning", "ski resort cleaning"]
  }
];

export const extendedUtahLocations: ServiceLocation[] = [
  {
    name: "West Valley City",
    state: "Utah",
    county: "Salt Lake County",
    population: "140,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "3.5 hours",
    serviceRadius: "20 mile radius",
    demographics: {
      economicBase: ["Manufacturing", "Retail", "Healthcare", "Government"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Manufacturing Facilities", "Retail Centers", "Government Facilities"]
    },
    keywords: ["West Valley City cleaning", "Salt Lake County commercial cleaning"]
  },
  {
    name: "Sandy",
    state: "Utah",
    county: "Salt Lake County",
    population: "96,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "4 hours",
    serviceRadius: "15 mile radius",
    demographics: {
      economicBase: ["Retail", "Professional Services", "Healthcare", "Technology"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Retail Centers", "Professional Offices", "Medical Facilities"]
    },
    keywords: ["Sandy Utah cleaning", "Salt Lake County cleaning services"]
  },
  {
    name: "Orem",
    state: "Utah",
    county: "Utah County",
    population: "98,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "4 hours",
    serviceRadius: "15 mile radius",
    demographics: {
      economicBase: ["Technology", "Education", "Healthcare", "Retail"],
      constructionActivity: "high",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: false,
      specializedServices: ["Technology Centers", "Educational Facilities", "Healthcare Facilities"]
    },
    keywords: ["Orem commercial cleaning", "Utah County cleaning services"]
  },
  {
    name: "Layton",
    state: "Utah",
    county: "Davis County",
    population: "81,000+",
    marketTier: "secondary",
    driveTimeFromHQ: "3 hours",
    serviceRadius: "15 mile radius",
    demographics: {
      economicBase: ["Government", "Retail", "Healthcare", "Manufacturing"],
      constructionActivity: "medium",
      commercialDensity: "medium"
    },
    services: {
      constructionCleanup: true,
      commercialCleaning: true,
      industrialCleaning: true,
      specializedServices: ["Government Facilities", "Retail Centers", "Manufacturing Support"]
    },
    keywords: ["Layton cleaning services", "Davis County commercial cleaning"]
  }
];

// SERVICE REGIONS
export const serviceRegions: ServiceRegion[] = [
  {
    id: "southeastern-idaho",
    name: "Southeastern Idaho",
    state: "Idaho",
    description: "Primary market region centered around our Idaho Falls headquarters with immediate service capabilities",
    headquarters: true,
    marketImportance: "primary",
    totalPopulation: "150,000+",
    averageDriveTime: "0-45 minutes",
    locations: [
      ...idahoLocations.filter(loc => ["Idaho Falls", "Pocatello", "Blackfoot", "Rexburg"].includes(loc.name)),
      ...extendedIdahoLocations.filter(loc => ["Ammon", "Chubbuck", "Shelley", "Rigby", "St. Anthony"].includes(loc.name))
    ]
  },
  {
    id: "magic-valley",
    name: "Magic Valley",
    state: "Idaho",
    description: "Secondary Idaho market with strong agricultural and food processing industries",
    marketImportance: "secondary",
    totalPopulation: "75,000+",
    averageDriveTime: "2 hours",
    locations: idahoLocations.filter(loc => loc.name === "Twin Falls")
  },
  {
    id: "treasure-valley",
    name: "Treasure Valley",
    state: "Idaho",
    description: "Major Idaho market suitable for large commercial projects and contracts",
    marketImportance: "extended",
    totalPopulation: "750,000+",
    averageDriveTime: "3.5 hours",
    locations: idahoLocations.filter(loc => ["Boise", "Meridian", "Nampa", "Caldwell", "Eagle"].includes(loc.name))
  },
  {
    id: "northern-utah",
    name: "Northern Utah / Cache Valley",
    state: "Utah",
    description: "Primary Utah market with strong university and agricultural base",
    marketImportance: "primary",
    totalPopulation: "130,000+",
    averageDriveTime: "2.5 hours",
    locations: utahLocations.filter(loc => loc.name === "Logan")
  },
  {
    id: "wasatch-front",
    name: "Wasatch Front",
    state: "Utah",
    description: "Major Utah metropolitan area with significant commercial and construction opportunities",
    marketImportance: "primary",
    totalPopulation: "2,500,000+",
    averageDriveTime: "3-4 hours",
    locations: [
      ...utahLocations.filter(loc => ["Salt Lake City", "Ogden", "Provo"].includes(loc.name)),
      ...extendedUtahLocations
    ]
  },
  {
    id: "eastern-idaho-extended",
    name: "Eastern Idaho Extended",
    state: "Idaho",
    description: "Extended coverage areas for specialized projects and seasonal work",
    marketImportance: "extended",
    totalPopulation: "25,000+",
    averageDriveTime: "1-1.5 hours",
    locations: extendedIdahoLocations.filter(loc => ["Driggs"].includes(loc.name))
  }
];

// HEADQUARTERS INFORMATION
export const headquarters = {
  name: "Imperial Cleaning Inc. Headquarters",
  address: "Idaho Falls, ID",
  coordinates: { lat: 43.4933, lng: -112.0339 },
  phone: "+1-208-520-3202",
  email: "service@imperialcleaninginc.com",
  serviceRadius: "Multi-state operations across Idaho and Utah",
  establishedYear: "2010+",
  coverage: {
    immediateResponse: "30 mile radius from Idaho Falls",
    primaryMarkets: "Southeastern Idaho, Northern Utah",
    secondaryMarkets: "Magic Valley, Wasatch Front",
    extendedMarkets: "Treasure Valley, selected Utah communities",
    maxServiceDistance: "4 hours drive time for large projects"
  }
};

// SUMMARY STATISTICS
export const serviceStats = {
  totalLocations: idahoLocations.length + utahLocations.length + extendedIdahoLocations.length + extendedUtahLocations.length,
  totalPopulationServed: "3,500,000+",
  states: ["Idaho", "Utah"],
  counties: {
    Idaho: ["Bonneville", "Bannock", "Bingham", "Madison", "Twin Falls", "Ada", "Canyon", "Jefferson", "Fremont", "Teton"],
    Utah: ["Cache", "Salt Lake", "Weber", "Utah", "Davis"]
  },
  primaryMarkets: 6,
  secondaryMarkets: 8,
  extendedMarkets: 12,
  averageDriveTime: "2.5 hours",
  maxDriveTime: "4 hours",
  serviceCapabilities: {
    constructionCleanup: true,
    commercialCleaning: true,
    industrialCleaning: true,
    specializedServices: true,
    emergencyResponse: true,
    multiStateOperations: true
  }
};

// EXPORT ALL DATA
export const allServiceLocations = [
  ...idahoLocations,
  ...utahLocations,
  ...extendedIdahoLocations,
  ...extendedUtahLocations
];

// Alias for convenience
export const serviceLocations = allServiceLocations;

export default {
  headquarters,
  serviceRegions,
  idahoLocations,
  utahLocations,
  extendedIdahoLocations,
  extendedUtahLocations,
  allServiceLocations,
  serviceStats
};
