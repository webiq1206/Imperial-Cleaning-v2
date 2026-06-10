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
  /** Real USPS ZIP codes for the city - rendered on city pages and in geo schema. */
  zipCodes?: string[];
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
  // Optional per-city differentiators. Leave undefined unless the value is factual
  // for that specific city - do NOT fabricate. Rendered conditionally on city pages
  // to increase genuine local uniqueness and reduce template/doorway risk.
  localLandmarks?: string[];
  regulatoryNote?: string;
  climateNote?: string;
  // TODO(real-data): add real, named local projects (with client permission) per city.
  localProjects?: { title: string; summary: string }[];
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
    zipCodes: ["83401", "83402", "83404", "83406"],
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
    localLandmarks: ["the Snake River and Greenbelt", "Snake River Landing", "Idaho National Laboratory", "Eastern Idaho Regional Medical Center"],
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
    zipCodes: ["83201", "83204", "83209"],
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
    localLandmarks: ["Idaho State University", "Historic Old Town Pocatello", "Portneuf Medical Center"],
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
    coordinates: { lat: 43.1905, lng: -112.3450 },
    zipCodes: ["83221"],
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
    businessDistricts: ["Downtown Blackfoot", "US-91 Commercial Corridor"],
    localLandmarks: ["the Idaho Potato Museum", "the Eastern Idaho State Fair grounds", "Bingham Memorial Hospital"],
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
    coordinates: { lat: 43.8260, lng: -111.7897 },
    zipCodes: ["83440"],
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
    localLandmarks: ["Brigham Young University-Idaho", "Madison Memorial Hospital", "the Rexburg Temple"],
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
    zipCodes: ["83301"],
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
    localLandmarks: ["Shoshone Falls", "Perrine Bridge and the Snake River Canyon", "St. Luke's Magic Valley Medical Center"],
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
    zipCodes: ["83702", "83704", "83706", "83709"],
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
    localLandmarks: ["the Boise River Greenbelt", "downtown Boise's financial district", "Boise State University", "St. Luke's Boise Medical Center"],
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
    coordinates: { lat: 43.6121, lng: -116.3915 },
    zipCodes: ["83642", "83646"],
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
    localLandmarks: ["The Village at Meridian", "the Eagle Road corridor", "St. Luke's Meridian Medical Center"],
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
    coordinates: { lat: 43.5407, lng: -116.5635 },
    zipCodes: ["83651", "83686", "83687"],
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
    localLandmarks: ["the Ford Idaho Center", "Northwest Nazarene University", "Historic Downtown Nampa"],
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
    coordinates: { lat: 43.6629, lng: -116.6874 },
    zipCodes: ["83605", "83607"],
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
    localLandmarks: ["the College of Idaho", "Indian Creek Plaza", "downtown Caldwell"],
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
    coordinates: { lat: 43.6954, lng: -116.3540 },
    zipCodes: ["83616"],
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
    localLandmarks: ["downtown Eagle", "the Boise River greenbelt", "Eagle Island State Park"],
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
    zipCodes: ["84321", "84341"],
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
    localLandmarks: ["Utah State University", "Historic Downtown Logan", "Logan Regional Hospital"],
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
    zipCodes: ["84101", "84102", "84103", "84111", "84115"],
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
    localLandmarks: ["Temple Square", "the Utah State Capitol", "University of Utah", "the Wasatch Front"],
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
    zipCodes: ["84401", "84403", "84404"],
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
    localLandmarks: ["Historic 25th Street", "Weber State University", "Hill Air Force Base", "McKay-Dee Hospital"],
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
    zipCodes: ["84601", "84604", "84606"],
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
    localLandmarks: ["Brigham Young University", "Utah Lake", "Provo Towne Centre", "Utah Valley Hospital"],
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
    coordinates: { lat: 43.4747, lng: -111.9666 },
    zipCodes: ["83406"],
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
    businessDistricts: ["Hitt Road Retail Corridor", "Ammon Town Center Area"],
    localLandmarks: ["the Hitt Road retail corridor bordering Idaho Falls", "Sandcreek area commercial growth"],
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
    coordinates: { lat: 42.9208, lng: -112.4661 },
    zipCodes: ["83202"],
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
    businessDistricts: ["Yellowstone Avenue Retail Corridor", "Pine Ridge Mall Area"],
    localLandmarks: ["Pine Ridge Mall", "the Yellowstone Avenue retail corridor"],
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
    coordinates: { lat: 43.3813, lng: -112.1233 },
    zipCodes: ["83274"],
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
    businessDistricts: ["Downtown Shelley along US-91"],
    localLandmarks: ["downtown Shelley along US-91", "the annual Idaho Spud Day celebration grounds"],
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
    coordinates: { lat: 43.6724, lng: -111.9149 },
    zipCodes: ["83442"],
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
    businessDistricts: ["Downtown Rigby", "US-20 Commercial Corridor"],
    localLandmarks: ["Rigby Lake (Jefferson County Lake)", "the Farnsworth TV & Pioneer Museum"],
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
    coordinates: { lat: 43.9663, lng: -111.6816 },
    zipCodes: ["83445"],
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
    businessDistricts: ["Downtown St. Anthony"],
    localLandmarks: ["the St. Anthony Sand Dunes", "Henry's Fork of the Snake River"],
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
    coordinates: { lat: 43.7233, lng: -111.1114 },
    zipCodes: ["83422"],
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
    businessDistricts: ["Downtown Driggs"],
    localLandmarks: ["Grand Targhee Resort", "the Teton Valley", "downtown Driggs"],
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
    coordinates: { lat: 40.6916, lng: -112.0011 },
    zipCodes: ["84119", "84120", "84128"],
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
    businessDistricts: ["Valley Fair Mall Area", "Decker Lake Business District"],
    localLandmarks: ["the Maverik Center", "Valley Fair Mall"],
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
    coordinates: { lat: 40.5649, lng: -111.8389 },
    zipCodes: ["84070", "84092", "84093", "84094"],
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
    businessDistricts: ["The Shops at South Town Area", "Sandy Civic Center District"],
    localLandmarks: ["America First Field", "The Shops at South Town", "the gateway to Little Cottonwood Canyon"],
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
    coordinates: { lat: 40.2969, lng: -111.6946 },
    zipCodes: ["84057", "84058", "84097"],
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
    businessDistricts: ["University Place Area", "State Street Commercial Corridor"],
    localLandmarks: ["Utah Valley University", "University Place"],
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
    coordinates: { lat: 41.0602, lng: -111.9711 },
    zipCodes: ["84040", "84041"],
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
    businessDistricts: ["Layton Hills Mall Area", "Main Street Commercial Corridor"],
    localLandmarks: ["Layton Hills Mall", "the area adjacent to Hill Air Force Base"],
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
  establishedYear: "2015",
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
