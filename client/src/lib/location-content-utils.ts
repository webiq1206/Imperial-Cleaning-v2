import { ServiceLocation } from "@shared/service-locations";
import { buildServiceLocationUrl } from "./routing-utils";
import { 
  getComplementaryServiceLink, 
  getNearbyCities, 
  getServiceAreaLink,
  getSimilarIndustryLocations 
} from "./linking-utils";

/**
 * Generate location-specific SEO and content for service pages
 * Each function creates unique, highly customized content based on location data
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

// Generate enhanced local market overview content
export function generateMarketOverview(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const businessTypes = location.demographics.economicBase;
  const constructionLevel = location.demographics.constructionActivity;
  const commercialDensity = location.demographics.commercialDensity;
  const districts = location.businessDistricts || location.neighborhoods || [];
  
  let marketDescription = `${location.name} serves as a ${location.marketTier} market in our service network`;
  
  // Add population context if available
  if (location.population) {
    marketDescription += `, with a population of ${location.population}`;
  }
  
  marketDescription += `, featuring a diverse economic base including ${businessTypes.slice(0, 3).join(', ')}.`;
  
  // Add specific business district mentions
  if (districts.length > 0) {
    marketDescription += ` Key commercial areas include ${districts.slice(0, 3).join(', ')}, each with distinct ${isConstruction ? 'development' : 'business'} characteristics.`;
  }
  
  // Add major employers with specific context
  if (location.demographics.majorEmployers && location.demographics.majorEmployers.length > 0) {
    const employers = location.demographics.majorEmployers;
    marketDescription += ` Major employers driving the local economy include ${employers.slice(0, 2).join(' and ')}`;
    if (employers.length > 2) {
      marketDescription += `, among others in the ${businessTypes[0].toLowerCase()} sector`;
    }
    marketDescription += `.`;
  }

  // Add construction-specific or commercial-specific market analysis
  if (isConstruction) {
    const activityDescription = constructionLevel === 'high' ? 
      'robust construction and development activity with multiple ongoing commercial and residential projects' :
      constructionLevel === 'medium' ? 
      'steady construction activity including renovations and new commercial developments' :
      'selective construction projects focused on renovations and targeted new builds';
    
    marketDescription += ` The ${location.name} area features ${activityDescription}, creating consistent demand for professional post-construction cleanup services across various project scales.`;
  } else {
    const densityDescription = commercialDensity === 'high' ? 
      'high commercial density with numerous business facilities, corporate offices, and retail centers requiring regular maintenance' :
      commercialDensity === 'medium' ? 
      'established commercial presence with diverse office buildings, healthcare facilities, and retail operations' :
      'growing business community with expanding commercial spaces and professional services';
    
    marketDescription += ` With ${densityDescription}, there's strong and increasing demand for reliable, professional commercial cleaning services.`;
  }

  return {
    title: `${location.name} Market Overview`,
    description: marketDescription,
    economicBase: businessTypes,
    marketTier: location.marketTier,
    constructionActivity: constructionLevel,
    commercialDensity: commercialDensity,
    keyDistricts: districts,
    population: location.population
  };
}

// Generate location-specific challenges
export function generateLocalChallenges(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const challenges: Array<{title: string; description: string}> = [];
  
  // Climate and geography-based challenges
  if (location.state === "Idaho") {
    challenges.push({
      title: "High Desert Climate Conditions",
      description: `${location.name}'s high desert climate presents unique challenges including fine dust accumulation, low humidity affecting static, and significant seasonal temperature variations. ${isConstruction ? 'Construction sites generate additional dust that requires specialized filtration and removal techniques to prevent HVAC contamination.' : 'Indoor environments require careful humidity management and advanced dust control to maintain air quality.'}`
    });
  } else if (location.state === "Utah") {
    challenges.push({
      title: "Mountain Climate and Air Quality",
      description: `${location.name}'s location along the Wasatch Front creates specific challenges with seasonal inversion patterns and air quality concerns. ${isConstruction ? 'Post-construction dust control is critical during winter months when air quality is already compromised.' : 'Commercial facilities require enhanced air filtration and regular deep cleaning to maintain healthy indoor environments.'}`
    });
  }
  
  // Construction activity-based challenges
  if (isConstruction) {
    if (location.demographics.constructionActivity === 'high') {
      challenges.push({
        title: "High-Volume Project Coordination",
        description: `With ${location.name}'s robust construction activity, managing multiple concurrent cleanup projects requires sophisticated scheduling and resource allocation. Contractors face tight deadlines, especially in commercial developments near ${location.businessDistricts?.[0] || 'downtown areas'}, where final inspections and occupancy timelines are critical.`
      });
    } else if (location.demographics.constructionActivity === 'medium') {
      challenges.push({
        title: "Diverse Project Scale Management",
        description: `${location.name}'s construction market varies from small tenant improvements to significant commercial renovations. Each project type requires different cleanup approaches, equipment, and timing to meet specific contractor and inspection requirements.`
      });
    }
  }
  
  // Industry-specific challenges
  const industries = location.demographics.economicBase;
  
  if (industries.includes("Healthcare")) {
    challenges.push({
      title: "Healthcare Facility Compliance Standards",
      description: `${location.name}'s healthcare sector${location.demographics.majorEmployers?.some(e => e.includes("Hospital") || e.includes("Medical")) ? `, including facilities like ${location.demographics.majorEmployers.find(e => e.includes("Hospital") || e.includes("Medical"))}` : ''}, requires strict adherence to infection control protocols, HIPAA privacy regulations, and specialized cleaning procedures for medical environments. ${isConstruction ? 'Post-construction cleaning must eliminate all dust and debris that could compromise patient safety.' : 'Daily operations require healthcare-grade disinfection and meticulous attention to high-touch surfaces.'}`
    });
  }
  
  if (industries.includes("Technology") || industries.includes("Manufacturing")) {
    challenges.push({
      title: "Clean Room and Controlled Environment Standards",
      description: `${location.name}'s ${industries.includes("Technology") ? 'technology' : 'manufacturing'} sector${location.demographics.majorEmployers?.[0] ? ` (including ${location.demographics.majorEmployers[0]})` : ''} requires specialized cleaning for controlled environments and sensitive equipment areas. ${isConstruction ? 'New facility construction demands ISO-certified clean room preparation and contamination-free final cleaning.' : 'Maintaining particle-free environments with ESD-safe procedures is essential for ongoing operations.'}`
    });
  }
  
  if (industries.includes("Food Processing") || industries.includes("Agriculture")) {
    challenges.push({
      title: "Food Safety and Sanitation Requirements",
      description: `${location.name}'s food processing industry requires rigorous sanitation protocols compliant with FDA, USDA, and local health department standards. ${isConstruction ? 'New or renovated food processing facilities must meet strict cleanliness standards before production can begin.' : 'Regular deep cleaning schedules must accommodate 24/7 production cycles while maintaining GMP compliance.'}`
    });
  }
  
  if (industries.includes("Education")) {
    challenges.push({
      title: "Educational Facility Scheduling Constraints",
      description: `${location.name}'s educational institutions${location.demographics.majorEmployers?.some(e => e.includes("University") || e.includes("College")) ? ` like ${location.demographics.majorEmployers.find(e => e.includes("University") || e.includes("College"))}` : ''} require cleaning services that work around academic calendars, student activities, and strict safety protocols for occupied buildings. ${isConstruction ? 'Summer construction projects have compressed cleanup timelines before fall semester begins.' : 'Daily janitorial services must be completed during limited evening and early morning windows.'}`
    });
  }
  
  // Regional compliance challenges
  const complianceChallenge = {
    title: location.state === "Idaho" ? "Idaho State and Local Regulations" : "Utah State and Local Regulations",
    description: `${location.state} has specific ${isConstruction ? 'construction waste disposal and environmental protection' : 'commercial cleaning chemical usage and workplace safety'} regulations that differ from other states. ${location.name} ${location.county ? `(${location.county})` : ''} adds local permitting requirements and ${isConstruction ? 'debris disposal protocols' : 'waste management standards'} that must be carefully followed.`
  };
  challenges.push(complianceChallenge);
  
  return {
    title: `${location.name} ${isConstruction ? 'Construction' : 'Commercial'} Cleaning Challenges`,
    challenges: challenges.slice(0, 5) // Limit to top 5 most relevant
  };
}

// Generate location-specific solutions
export function generateLocalSolutions(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const solutions: Array<{title: string; description: string}> = [];
  
  // Climate-specific solutions
  if (location.state === "Idaho") {
    solutions.push({
      title: "Advanced Dust Control Systems",
      description: `We employ HEPA-filtered equipment and electrostatic dust control specifically calibrated for ${location.name}'s high desert conditions. Our ${isConstruction ? 'post-construction protocols include multi-stage dust removal, HVAC system protection, and final air quality verification' : 'maintenance programs include frequent filter changes and proactive dust prevention in high-traffic areas'}.`
    });
  } else if (location.state === "Utah") {
    solutions.push({
      title: "Air Quality-Focused Cleaning Protocols",
      description: `Recognizing ${location.name}'s air quality challenges, we use low-VOC cleaning products and advanced filtration systems that improve rather than compromise indoor air quality. ${isConstruction ? 'Our post-construction cleaning includes air scrubbing and verified particulate reduction before occupancy.' : 'Regular deep cleaning cycles help facilities maintain healthy indoor environments year-round.'}`
    });
  }
  
  // Response time and logistics solutions
  if (location.driveTimeFromHQ === "0 minutes (Headquarters)") {
    solutions.push({
      title: "Immediate Local Response Capabilities",
      description: `As our headquarters city, ${location.name} benefits from immediate on-site response, full equipment and supply inventory, and direct management oversight. We maintain ${isConstruction ? 'dedicated construction cleanup crews available for same-day emergency calls and rapid project mobilization' : 'multiple shift teams capable of 24/7 service coverage for any commercial facility need'}.`
    });
  } else {
    const driveTime = location.driveTimeFromHQ;
    solutions.push({
      title: "Optimized Service Delivery from Idaho Falls",
      description: `Our ${driveTime} response time to ${location.name} is supported by pre-positioned equipment, strategic scheduling, and dedicated route planning. ${isConstruction ? `We coordinate with local contractors to align cleanup schedules with project milestones, often establishing temporary staging areas for multi-week projects.` : `Regular service contracts include guaranteed response windows and backup team availability for urgent needs.`}`
    });
  }
  
  // Industry-specific solutions
  const industries = location.demographics.economicBase;
  
  if (industries.includes("Healthcare")) {
    solutions.push({
      title: "Healthcare-Grade Protocols and Certification",
      description: `Our team maintains current healthcare cleaning certifications and follows strict protocols for ${location.name}'s medical facilities. We use hospital-grade disinfectants, color-coded equipment systems, and detailed documentation to ensure compliance with all infection control standards${location.demographics.majorEmployers?.some(e => e.includes("Hospital")) ? `, with proven experience at facilities throughout the region` : ''}.`
    });
  }
  
  if (industries.includes("Technology") || industries.includes("Manufacturing")) {
    solutions.push({
      title: "Controlled Environment Cleaning Expertise",
      description: `We provide ISO-certified clean room cleaning and ESD-safe procedures tailored to ${location.name}'s ${industries.includes("Technology") ? 'technology' : 'manufacturing'} sector. Our technicians are trained in particle control, proper gowning procedures, and specialized equipment handling to meet the stringent requirements of sensitive production environments.`
    });
  }
  
  if (industries.includes("Food Processing")) {
    solutions.push({
      title: "Food Safety Compliance Programs",
      description: `Our food processing facility cleaning meets all FDA, USDA, and local health department requirements specific to ${location.name}. We use food-safe cleaning products, maintain detailed sanitation logs, and coordinate with plant schedules to minimize production disruptions while ensuring GMP compliance.`
    });
  }
  
  // Equipment and technique solutions
  if (isConstruction) {
    solutions.push({
      title: "Specialized Construction Cleanup Equipment",
      description: `Our ${location.name} service fleet includes industrial dust extractors, concrete residue removal systems, and final detail cleaning tools. We use proven techniques for different surface types common in ${location.demographics.constructionActivity === 'high' ? 'the area\'s diverse commercial construction projects' : 'local renovation and construction work'}, from polished concrete to specialty flooring installations.`
    });
  } else {
    solutions.push({
      title: "Comprehensive Commercial Maintenance Systems",
      description: `We deploy customized cleaning programs for ${location.name}'s diverse commercial facilities, from ${location.demographics.commercialDensity === 'high' ? 'high-rise office buildings to extensive retail centers' : 'professional offices to specialized commercial spaces'}. Our quality control systems include regular inspections, detailed checklists, and responsive communication channels.`
    });
  }
  
  // Local partnerships and supplier networks
  if (location.marketTier === "primary") {
    solutions.push({
      title: "Established Local Partnerships",
      description: `Our ${location.name} operations benefit from established relationships with local suppliers, waste management providers, and regulatory agencies. ${isConstruction ? 'We work closely with area contractors, inspection officials, and building departments to ensure smooth project completions.' : 'These partnerships enable rapid material procurement, efficient waste disposal, and seamless coordination with facility management teams.'}`
    });
  }
  
  return {
    title: `Our Solutions for ${location.name}`,
    solutions: solutions.slice(0, 6)
  };
}

// Generate realistic local case studies
export function generateLocalCaseStudies(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const caseStudies: Array<{
    title: string;
    client: string;
    location: string;
    challenge: string;
    solution: string;
    results: string[];
  }> = [];
  
  // Generate case studies based on major employers
  if (location.demographics.majorEmployers && location.demographics.majorEmployers.length > 0) {
    const employers = location.demographics.majorEmployers;
    
    employers.slice(0, 2).forEach((employer, index) => {
      const district = location.businessDistricts?.[index] || location.neighborhoods?.[index] || `${location.name} business district`;
      
      if (employer.includes("Laboratory") || employer.includes("INL")) {
        if (isConstruction) {
          caseStudies.push({
            title: "Research Facility Expansion Cleanup",
            client: "Major Research Laboratory",
            location: `${district}, ${location.name}`,
            challenge: `A 50,000 sq ft laboratory expansion required meticulous post-construction cleaning to meet strict contamination-free standards before sensitive equipment installation. The project timeline allowed only 10 days between construction completion and equipment delivery.`,
            solution: `We deployed a specialized team with clean room cleaning certification, using HEPA-filtered equipment and verified cleaning protocols. Multi-stage cleaning progressed from rough clean to final detail, with particle count verification at each stage.`,
            results: [
              "Achieved ISO Class 7 clean room standards in all laboratory spaces",
              "Completed cleaning 2 days ahead of schedule, enabling early equipment installation",
              "Zero contamination issues during facility startup and validation",
              "Established ongoing maintenance contract for laboratory facilities"
            ]
          });
        } else {
          caseStudies.push({
            title: "Research Laboratory Ongoing Maintenance",
            client: "Major Research Facility",
            location: `${district}, ${location.name}`,
            challenge: `Multiple laboratory buildings totaling 200,000 sq ft required daily janitorial services that wouldn't compromise sensitive research areas or controlled environments. Cleaning had to accommodate 24/7 research operations and strict security protocols.`,
            solution: `Implemented a specialized cleaning program with security-cleared staff trained in laboratory protocols. Developed custom schedules for each building, using approved cleaning products and contamination control procedures.`,
            results: [
              "Maintained consistent cleanliness across all facility types without operational interruption",
              "Zero cross-contamination incidents in controlled research areas",
              "95% client satisfaction rating on quarterly facility assessments",
              "Expanded service to include additional laboratory facilities"
            ]
          });
        }
      } else if (employer.includes("Hospital") || employer.includes("Medical")) {
        if (isConstruction) {
          caseStudies.push({
            title: "Hospital Wing Renovation Cleanup",
            client: "Regional Medical Center",
            location: `${location.name} healthcare district`,
            challenge: `A major hospital wing renovation required final post-construction cleaning that met healthcare facility infection control standards. The area needed to be patient-ready within 72 hours of construction completion.`,
            solution: `Executed a comprehensive healthcare-grade cleaning protocol using hospital-approved disinfectants and equipment. Our team coordinated closely with hospital infection control staff, following strict access protocols and documentation requirements.`,
            results: [
              "Passed all hospital infection control inspections on first review",
              "Completed cleaning and sterilization 12 hours ahead of patient transfer deadline",
              "Zero infection control deficiencies noted during first-month audits",
              "Awarded ongoing cleaning contracts for hospital construction projects"
            ]
          });
        } else {
          caseStudies.push({
            title: "Multi-Facility Healthcare Cleaning Program",
            client: "Healthcare System",
            location: `${location.name} area`,
            challenge: `A healthcare system with multiple facilities needed consistent, high-quality cleaning services that met stringent infection control standards across medical offices, outpatient centers, and administrative buildings.`,
            solution: `Developed a standardized healthcare cleaning program with facility-specific protocols. All staff completed healthcare cleaning certification and followed color-coded equipment systems to prevent cross-contamination between areas.`,
            results: [
              "Achieved 98% compliance on healthcare facility audits",
              "Reduced healthcare-acquired infection indicators in cleaned areas",
              "Streamlined service delivery across 8 separate facilities",
              "Recognized by facility management as 'Preferred Vendor' for healthcare cleaning"
            ]
          });
        }
      } else if (employer.includes("University") || employer.includes("College")) {
        if (isConstruction) {
          caseStudies.push({
            title: "University Building Construction Cleanup",
            client: "Regional University",
            location: `University district, ${location.name}`,
            challenge: `A new academic building required complete post-construction cleaning before fall semester opening. The 75,000 sq ft facility included classrooms, laboratories, and technology centers, each with different cleaning requirements. Deadline was non-negotiable.`,
            solution: `Mobilized multiple crews working overlapping shifts to complete the project in 14 days. Implemented zone-specific cleaning protocols for classrooms, labs, and tech areas, with final inspection coordination with university facilities management.`,
            results: [
              "Building opened on schedule for fall semester",
              "All 45 classrooms and 12 laboratories passed final inspection",
              "Positive feedback from faculty on facility cleanliness",
              "Secured ongoing maintenance contract for the new building"
            ]
          });
        } else {
          caseStudies.push({
            title: "Campus-Wide Janitorial Services",
            client: "University Campus",
            location: `${location.name}`,
            challenge: `University required comprehensive cleaning services for academic buildings, student centers, and athletic facilities. Services needed to work around class schedules, events, and 24/7 student activity.`,
            solution: `Created flexible staffing model with multiple shift times aligned to building usage patterns. Implemented green cleaning program using sustainable products and practices important to campus community.`,
            results: [
              "Maintained cleanliness standards across 15 campus buildings",
              "Achieved 90% satisfaction rating in student facility surveys",
              "Reduced cleaning-related complaints by 60% compared to previous provider",
              "Expanded services to include event cleaning and emergency response"
            ]
          });
        }
      } else if (employer.includes("Technology") || employer.toLowerCase().includes("micron") || employer.toLowerCase().includes("adobe")) {
        if (isConstruction) {
          caseStudies.push({
            title: "Technology Center Build-Out Cleaning",
            client: "Technology Company",
            location: `${district}, ${location.name}`,
            challenge: `A technology company's new facility required final cleaning of office spaces, data centers, and controlled environment areas. Data center spaces required Class 100,000 clean room standards before equipment installation.`,
            solution: `Deployed specialized teams for different facility zones. Data center cleaning used ESD-safe equipment and protocols, while office areas received standard commercial final cleaning. Coordinated closely with IT installation teams.`,
            results: [
              "Data centers met all particle count and cleanliness specifications",
              "Office spaces ready for furniture installation on schedule",
              "Zero delays to equipment installation timeline",
              "Established ongoing contract for facility maintenance"
            ]
          });
        }
      } else if (employer.toLowerCase().includes("simplot") || employer.toLowerCase().includes("chobani") || location.demographics.economicBase.includes("Food Processing")) {
        if (isConstruction) {
          caseStudies.push({
            title: "Food Processing Facility Expansion",
            client: "Food Manufacturing Company",
            location: `Industrial area, ${location.name}`,
            challenge: `A 30,000 sq ft processing facility expansion required complete post-construction cleaning to meet FDA and USDA standards before production equipment installation. No construction residue could remain in any area.`,
            solution: `Implemented food-grade cleaning protocols with multi-stage verification. Used only approved cleaning products and equipment. Coordinated with health department inspectors for pre-operational approval.`,
            results: [
              "Passed all FDA and health department pre-operational inspections",
              "Facility approved for equipment installation ahead of schedule",
              "Zero compliance issues during startup phase",
              "Awarded ongoing sanitation services contract"
            ]
          });
        } else {
          caseStudies.push({
            title: "Food Processing Facility Sanitation",
            client: "Food Production Facility",
            location: `${location.name} industrial district`,
            challenge: `A food processing facility needed comprehensive sanitation services that met all regulatory requirements while accommodating 24/7 production schedules. Previous cleaning provider had compliance issues.`,
            solution: `Developed detailed sanitation program with documented procedures for all facility areas. Staff trained in GMP requirements and food safety protocols. Implemented color-coded equipment and rigorous schedule adherence.`,
            results: [
              "100% compliance on health department inspections",
              "Zero production delays due to cleaning activities",
              "Improved facility ATP testing results by 40%",
              "Recognized as key partner in facility's food safety program"
            ]
          });
        }
      }
    });
  }
  
  // Generate business district-specific case study if no employer-based studies
  if (caseStudies.length === 0 && location.businessDistricts && location.businessDistricts.length > 0) {
    const district = location.businessDistricts[0];
    if (isConstruction) {
      caseStudies.push({
        title: "Commercial Development Final Cleaning",
        client: "Commercial Real Estate Developer",
        location: `${district}, ${location.name}`,
        challenge: `A new mixed-use development in ${district} required final cleaning of 100,000 sq ft across retail, office, and restaurant spaces. Each tenant had different move-in timelines and specific cleaning requirements.`,
        solution: `Coordinated with the general contractor to create phased cleaning schedule aligned with tenant move-in dates. Provided customized cleaning for each space type - retail storefronts, office suites, and restaurant kitchens.`,
        results: [
          "All tenants received their spaces on schedule",
          "100% of spaces passed final inspection",
          "Three tenants requested our company for ongoing maintenance",
          "Developer provided testimonial for future projects"
        ]
      });
    } else {
      caseStudies.push({
        title: "Business District Office Complex",
        client: "Property Management Company",
        location: `${district}, ${location.name}`,
        challenge: `An office complex in ${district} with 15 different tenants needed consistent, high-quality cleaning across diverse business types including law firms, medical offices, and tech companies.`,
        solution: `Implemented tenant-specific cleaning protocols while maintaining efficient service delivery. Created communication system for tenant requests and quality assurance feedback.`,
        results: [
          "Tenant satisfaction increased from 70% to 94%",
          "Renewal rate for property management contract: 100%",
          "Expanded to manage cleaning for three additional properties",
          "Reduced tenant complaints by 75%"
        ]
      });
    }
  }
  
  return {
    title: `${location.name} ${isConstruction ? 'Construction' : 'Commercial'} Cleaning Success Stories`,
    caseStudies: caseStudies.slice(0, 3)
  };
}

// Generate location-specific compliance information
export function generateLocalCompliance(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const compliance: Array<{category: string; requirements: string[]}> = [];
  
  // State-specific regulations
  if (location.state === "Idaho") {
    if (isConstruction) {
      compliance.push({
        category: "Idaho State Construction Regulations",
        requirements: [
          "Idaho Division of Building Safety permits and inspections compliance",
          "Idaho Department of Environmental Quality waste disposal regulations for construction debris",
          "State-mandated OSHA safety protocols for construction site work",
          `${location.county || 'Local county'} building department final cleaning verification requirements`,
          "Idaho hazardous material handling and disposal standards for construction waste"
        ]
      });
    } else {
      compliance.push({
        category: "Idaho State Commercial Cleaning Regulations",
        requirements: [
          "Idaho commercial cleaning contractor licensing requirements",
          "State workplace safety regulations for cleaning staff and chemicals",
          "Idaho waste management and disposal standards for commercial facilities",
          "State environmental protection standards for cleaning product usage",
          "Workers' compensation and liability insurance as required by Idaho law"
        ]
      });
    }
  } else if (location.state === "Utah") {
    if (isConstruction) {
      compliance.push({
        category: "Utah State Construction Regulations",
        requirements: [
          "Utah Division of Occupational and Professional Licensing (DOPL) contractor compliance",
          "Utah Department of Environmental Quality construction waste management standards",
          "State air quality regulations for dust control and emissions during cleanup",
          `${location.county || 'Local county'} construction final inspection requirements`,
          "Utah hazardous waste disposal regulations for construction materials"
        ]
      });
    } else {
      compliance.push({
        category: "Utah State Commercial Cleaning Regulations",
        requirements: [
          "Utah commercial cleaning business licensing and registration",
          "State occupational safety and health requirements for cleaning operations",
          "Utah commercial waste disposal and recycling mandates",
          "State environmental standards for cleaning chemical usage and storage",
          "Utah employment and labor law compliance for cleaning staff"
        ]
      });
    }
  }
  
  // City and county-specific requirements
  compliance.push({
    category: `${location.name} ${location.county ? `(${location.county}) ` : ''}Local Requirements`,
    requirements: [
      `${location.name} business licensing and permit requirements`,
      `${location.county || 'Local'} waste disposal facility usage and protocols`,
      isConstruction ? 
        `Local building inspection standards and final cleaning verification procedures` :
        `${location.name} commercial facility operating permits and compliance inspections`,
      `Local environmental protection ordinances and green cleaning initiatives`,
      `${location.county || 'County'} occupational safety reporting and compliance documentation`
    ]
  });
  
  // Industry-specific compliance
  const industries = location.demographics.economicBase;
  
  if (industries.includes("Healthcare")) {
    compliance.push({
      category: "Healthcare Facility Compliance",
      requirements: [
        "HIPAA privacy regulations for healthcare facility access and documentation",
        "CDC infection control guidelines and healthcare facility cleaning protocols",
        "OSHA Bloodborne Pathogen Standard compliance for medical facility cleaning",
        isConstruction ?
          "Joint Commission environment of care standards for new healthcare construction" :
          "CMS cleanliness and safety standards for healthcare facilities",
        "State health department medical facility sanitation requirements"
      ]
    });
  }
  
  if (industries.includes("Food Processing") || industries.includes("Agriculture")) {
    compliance.push({
      category: "Food Facility Compliance",
      requirements: [
        "FDA Food Safety Modernization Act (FSMA) sanitation requirements",
        "USDA food processing facility cleanliness and sanitation standards",
        "Good Manufacturing Practices (GMP) compliance for food facility cleaning",
        "Local health department food facility inspection requirements",
        isConstruction ?
          "Pre-operational sanitation approval for new food processing facilities" :
          "HACCP plan integration with facility cleaning and sanitation schedules"
      ]
    });
  }
  
  if (industries.includes("Technology") || industries.includes("Manufacturing")) {
    compliance.push({
      category: "Controlled Environment Compliance",
      requirements: [
        "ISO clean room classification standards and verification procedures",
        "ESD (Electrostatic Discharge) safety protocols for sensitive equipment areas",
        "Contamination control requirements for manufacturing environments",
        isConstruction ?
          "Clean room certification and particle count verification before equipment installation" :
          "Ongoing clean room monitoring and documentation requirements",
        "Industry-specific quality management system (QMS) integration"
      ]
    });
  }
  
  if (industries.includes("Education")) {
    compliance.push({
      category: "Educational Facility Compliance",
      requirements: [
        "State education department facility safety and cleanliness standards",
        "Student safety protocols for cleaning chemical usage and storage",
        "ADA compliance for cleaning procedures in educational facilities",
        isConstruction ?
          "School district construction project completion and safety verification" :
          "Green cleaning product requirements for schools and universities",
        "Background check and clearance requirements for staff working in educational settings"
      ]
    });
  }
  
  // Environmental and safety compliance
  compliance.push({
    category: "Environmental and Safety Standards",
    requirements: [
      "EPA environmental protection standards for cleaning operations",
      "OSHA workplace safety regulations and hazard communication standards",
      isConstruction ?
        "Construction site safety protocols and personal protective equipment requirements" :
        "Facility-specific safety data sheet (SDS) management and staff training",
      "State and local environmental protection regulations",
      "Sustainable cleaning practices and green certification compliance where applicable"
    ]
  });
  
  return {
    title: `${location.name} ${isConstruction ? 'Construction' : 'Commercial'} Cleaning Compliance`,
    description: `Imperial Cleaning maintains full compliance with all ${location.state} state regulations, ${location.name} local requirements, and industry-specific standards. Our comprehensive compliance program ensures every project meets or exceeds regulatory requirements.`,
    complianceCategories: compliance
  };
}

// Generate enhanced location-specific FAQ content (5-8 FAQs)
export function generateLocationFAQ(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const serviceName = isConstruction ? 'construction cleanup' : 'commercial cleaning';
  const faqs: Array<{question: string; answer: string}> = [];
  
  // Core service coverage FAQ
  faqs.push({
    question: `Do you provide ${serviceName} services throughout ${location.name}?`,
    answer: `Yes, Imperial Cleaning provides comprehensive ${serviceName} services throughout ${location.name} and the surrounding ${location.serviceRadius}. ${
      location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 
      `As our headquarters location, we offer immediate response capabilities, full equipment inventory, and direct management oversight for all projects in ${location.name}.` :
      `With ${location.driveTimeFromHQ} response time from our Idaho Falls headquarters, we ensure reliable and timely service delivery. We maintain pre-positioned equipment and coordinated scheduling to serve ${location.name} efficiently.`
    }`
  });
  
  // Local experience and suitability FAQ
  faqs.push({
    question: `What experience does Imperial Cleaning have in ${location.name}?`,
    answer: `We have extensive experience serving ${location.name}'s ${location.demographics.economicBase.join(', ').toLowerCase()} sectors${
      location.businessDistricts ? `, with regular service delivery in ${location.businessDistricts.slice(0, 2).join(' and ')}` : ''
    }. ${
      location.demographics.majorEmployers && location.demographics.majorEmployers.length > 0 ?
      `Our team understands the specific requirements of facilities similar to ${location.demographics.majorEmployers.slice(0, 2).join(' and ')}, and we're familiar with local regulations and inspection standards.` :
      `We understand local building codes, environmental regulations, and industry-specific requirements that apply to ${location.name} facilities.`
    }`
  });
  
  // Weather and climate-specific FAQ
  faqs.push({
    question: `How do you handle ${location.state === "Idaho" ? "Idaho's high desert climate" : "Utah's mountain climate"} conditions in ${location.name}?`,
    answer: `${location.state === "Idaho" ? 
      `We use specialized equipment and techniques designed for ${location.name}'s high desert climate, including advanced dust control systems and HEPA filtration. Our protocols account for seasonal temperature variations and the fine dust common in this region.` :
      `We employ air quality-focused cleaning methods suited to ${location.name}'s mountain climate, using low-VOC products and advanced filtration systems. Our approach helps improve indoor air quality, especially important during winter inversion periods.`
    } ${isConstruction ?
      'Our post-construction cleaning prevents dust and debris from compromising HVAC systems and indoor air quality.' :
      'Our regular maintenance programs include proactive measures to manage dust and maintain healthy indoor environments year-round.'
    }`
  });
  
  // Response time and scheduling FAQ
  faqs.push({
    question: `What are your response times for ${isConstruction ? 'construction cleanup projects' : 'service requests'} in ${location.name}?`,
    answer: `${
      location.driveTimeFromHQ === "0 minutes (Headquarters)" ?
      `As our headquarters city, ${location.name} receives immediate attention with same-day response capability for urgent needs. We maintain fully-staffed teams and complete equipment inventory locally.` :
      `Our ${location.driveTimeFromHQ} response time from Idaho Falls to ${location.name} allows us to address urgent needs quickly. For scheduled services, we coordinate timing to meet your specific project deadlines and operational requirements.`
    } ${isConstruction ?
      `We work closely with contractors to align cleanup schedules with construction milestones, often establishing on-site presence for multi-phase projects.` :
      `For ongoing commercial cleaning contracts, we provide guaranteed service windows and backup team availability for any urgent situations.`
    }`
  });
  
  // Project size and scope FAQ
  if (isConstruction) {
    faqs.push({
      question: `What size construction projects do you handle in ${location.name}?`,
      answer: `We handle construction cleanup projects of all sizes in ${location.name}, from small tenant improvements and renovations to large commercial developments. ${
        location.demographics.constructionActivity === 'high' ?
        `Given ${location.name}'s robust construction activity, we're equipped to manage multiple concurrent projects and can scale our crews to meet any project timeline.` :
        location.demographics.constructionActivity === 'medium' ?
        `We adapt to ${location.name}'s diverse construction landscape, efficiently serving both smaller renovation projects and significant new construction.` :
        `We're experienced with the renovation and selective construction projects typical in ${location.name}, providing thorough cleanup regardless of project scale.`
      } Our project management approach ensures quality results whether it's a 1,000 sq ft office remodel or a 100,000 sq ft commercial build-out.`
    });
  } else {
    faqs.push({
      question: `What types of commercial facilities do you clean in ${location.name}?`,
      answer: `We serve the full range of commercial facilities in ${location.name}, reflecting the area's diverse economy. This includes ${
        location.services.specializedServices.length > 0 ?
        location.services.specializedServices.slice(0, 3).join(', ').toLowerCase() :
        'office buildings, retail spaces, healthcare facilities, educational institutions, and specialized commercial environments'
      }. ${
        location.demographics.commercialDensity === 'high' ?
        `Our experience with ${location.name}'s high-density commercial environment means we can handle everything from high-rise office buildings to street-level retail with equal expertise.` :
        `We adapt our services to match each facility's unique needs, from professional offices to specialized commercial spaces.`
      }`
    });
  }
  
  // Industry-specific FAQ
  const industries = location.demographics.economicBase;
  if (industries.includes("Healthcare")) {
    faqs.push({
      question: `Are your ${location.name} teams certified for healthcare facility cleaning?`,
      answer: `Yes, our cleaning teams serving ${location.name} maintain current healthcare facility cleaning certifications and follow strict infection control protocols. We use hospital-grade disinfectants, color-coded equipment systems to prevent cross-contamination, and maintain detailed documentation as required by healthcare standards. ${
        location.demographics.majorEmployers?.some(e => e.includes("Hospital") || e.includes("Medical")) ?
        `We have proven experience with healthcare facilities throughout the ${location.name} area and understand the stringent requirements of medical environments.` :
        `We're fully prepared to meet the rigorous standards required for healthcare facilities in ${location.name}.`
      }`
    });
  } else if (industries.includes("Technology") || industries.includes("Manufacturing")) {
    faqs.push({
      question: `Can you handle clean room and controlled environment cleaning in ${location.name}?`,
      answer: `Absolutely. We provide specialized cleaning for controlled environments, clean rooms, and sensitive equipment areas in ${location.name}'s ${
        industries.includes("Technology") ? 'technology' : 'manufacturing'
      } facilities. Our technicians are trained in ISO clean room standards, ESD-safe procedures, and contamination control protocols. ${
        location.demographics.majorEmployers?.[0] ?
        `We understand the requirements of facilities like those operated by ${location.demographics.majorEmployers[0]} and similar companies in the area.` :
        `We're equipped to meet the stringent cleanliness standards required by ${location.name}'s advanced manufacturing and technology sectors.`
      }`
    });
  } else if (industries.includes("Food Processing")) {
    faqs.push({
      question: `Are you certified for food processing facility cleaning in ${location.name}?`,
      answer: `Yes, our food processing facility cleaning meets all FDA, USDA, and local health department requirements for ${location.name}. We use only food-safe cleaning products, maintain detailed sanitation logs, and follow GMP (Good Manufacturing Practices) compliance protocols. Our team is trained in food safety requirements and coordinates cleaning schedules to minimize production disruptions while ensuring complete sanitation.`
    });
  } else if (industries.includes("Education")) {
    faqs.push({
      question: `How do you work around academic schedules in ${location.name}?`,
      answer: `We're experienced in coordinating cleaning services with academic calendars and campus activities in ${location.name}. ${
        location.demographics.majorEmployers?.some(e => e.includes("University") || e.includes("College")) ?
        `Our work with institutions like ${location.demographics.majorEmployers.find(e => e.includes("University") || e.includes("College"))} has taught us to adapt to semester schedules, exam periods, and campus events.` :
        `We understand the unique scheduling requirements of educational facilities.`
      } ${isConstruction ?
        `For construction projects, we're experienced with compressed summer timelines and the need to have facilities ready before students return.` :
        `For ongoing janitorial services, we work during evening and early morning hours to avoid disrupting classes and student activities.`
      }`
    });
  }
  
  // Pricing and contract FAQ
  faqs.push({
    question: `How is pricing structured for ${serviceName} in ${location.name}?`,
    answer: `Our pricing for ${location.name} is based on several factors including ${
      isConstruction ?
      'project size, scope of work, timeline requirements, and specific cleaning needs' :
      'facility size, cleaning frequency, scope of services, and any specialized requirements'
    }. ${
      location.driveTimeFromHQ === "0 minutes (Headquarters)" ?
      `As our headquarters location, ${location.name} benefits from our most competitive pricing with no travel surcharges.` :
      `We structure pricing to account for our ${location.driveTimeFromHQ} service delivery while remaining competitive with local providers.`
    } We provide detailed written estimates after conducting a site assessment to understand your specific needs. ${
      isConstruction ?
      `Many contractors prefer our per-square-foot pricing for budget predictability on construction projects.` :
      `We offer flexible contract options including one-time deep cleans, regular maintenance schedules, and comprehensive facility management programs.`
    }`
  });
  
  // Local competition and differentiation FAQ
  faqs.push({
    question: `What sets Imperial Cleaning apart from other ${serviceName} providers in ${location.name}?`,
    answer: `Imperial Cleaning stands out in ${location.name} through our combination of ${
      location.driveTimeFromHQ === "0 minutes (Headquarters)" ?
      'local headquarters presence, immediate response capabilities, and' :
      'reliable service delivery,'
    } specialized industry expertise, and proven track record. ${
      location.demographics.majorEmployers && location.demographics.majorEmployers.length > 0 ?
      `We have experience with the specific requirements of ${location.name}'s major industries and employers.` :
      `We understand the unique needs of ${location.name}'s business community.`
    } Our comprehensive insurance coverage, certified cleaning protocols, and quality assurance systems provide peace of mind. ${
      isConstruction ?
      `We maintain strong relationships with local contractors and building inspectors, facilitating smooth project completions.` :
      `Plus, our responsive communication and flexible scheduling adapt to your operational needs rather than requiring you to work around our limitations.`
    }`
  });
  
  return faqs;
}

// Generate location-specific testimonial structures
export function generateLocalTestimonials(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const testimonials: Array<{
    businessType: string;
    location: string;
    quote: string;
    context: string;
  }> = [];
  
  // Generate testimonials based on major employers and industries
  if (location.demographics.majorEmployers && location.demographics.majorEmployers.length > 0) {
    const employer = location.demographics.majorEmployers[0];
    const district = location.businessDistricts?.[0] || `${location.name} area`;
    
    if (employer.includes("Laboratory") || employer.includes("Research")) {
      testimonials.push({
        businessType: "Research Facility Manager",
        location: `${district}, ${location.name}`,
        quote: isConstruction ?
          `Imperial Cleaning's attention to detail during our laboratory expansion cleanup was exceptional. They understood the critical cleanliness standards we required and delivered particle-free environments ready for sensitive equipment installation.` :
          `We require cleaning services that understand contamination control and controlled environments. Imperial Cleaning's team has the specialized training and protocols necessary for our research facilities.`,
        context: isConstruction ?
          `50,000 sq ft laboratory expansion project requiring clean room standards` :
          `Ongoing maintenance of multiple research laboratory buildings with controlled environments`
      });
    } else if (employer.includes("Hospital") || employer.includes("Medical")) {
      testimonials.push({
        businessType: "Healthcare Facilities Director",
        location: `${location.name}`,
        quote: isConstruction ?
          `Our hospital renovation required cleaning services that met the highest infection control standards. Imperial Cleaning's healthcare-certified team delivered patient-ready spaces that passed all inspections on the first review.` :
          `Maintaining cleanliness in healthcare facilities is critical for patient safety. Imperial Cleaning consistently delivers hospital-grade cleaning with meticulous attention to infection control protocols and documentation.`,
        context: isConstruction ?
          `Major hospital wing renovation with strict healthcare facility requirements` :
          `Multi-facility healthcare system with rigorous infection control standards`
      });
    } else if (employer.includes("University") || employer.includes("College")) {
      testimonials.push({
        businessType: "University Facilities Manager",
        location: `${location.name}`,
        quote: isConstruction ?
          `Imperial Cleaning completed our new academic building cleanup on an extremely tight timeline before fall semester. Their project management and crew coordination ensured we opened on schedule with every classroom inspection-ready.` :
          `Managing cleaning services across a university campus requires flexibility and reliability. Imperial Cleaning works seamlessly around our academic calendar and provides consistent quality across all our buildings.`,
        context: isConstruction ?
          `75,000 sq ft academic building with classrooms, laboratories, and technology centers` :
          `Campus-wide cleaning services for multiple academic and student buildings`
      });
    }
  }
  
  // Add business district-based testimonial
  if (location.businessDistricts && location.businessDistricts.length > 0) {
    const district = location.businessDistricts[0];
    testimonials.push({
      businessType: isConstruction ? "Commercial General Contractor" : "Property Management Company",
      location: `${district}, ${location.name}`,
      quote: isConstruction ?
        `We've worked with Imperial Cleaning on multiple projects in ${district}. Their reliability, quality of work, and ability to meet tight deadlines make them our preferred post-construction cleaning partner.` :
        `Managing properties in ${district} requires a cleaning partner who can handle diverse tenant needs and maintain high standards. Imperial Cleaning has consistently exceeded our expectations and our tenants appreciate the quality.`,
      context: isConstruction ?
        `Multiple commercial construction projects in ${location.name}'s business district` :
        `Office complex with 15 diverse tenants in ${location.name}'s commercial center`
    });
  }
  
  // Add industry-specific testimonial
  const industries = location.demographics.economicBase;
  if (industries.includes("Technology")) {
    testimonials.push({
      businessType: "Technology Company Facilities Director",
      location: `${location.name}`,
      quote: isConstruction ?
        `Our data center and office build-out required specialized cleaning for controlled environments. Imperial Cleaning delivered clean room-certified work that allowed us to install equipment on schedule.` :
        `Our technology facility has specific requirements for ESD-safe cleaning and controlled environment maintenance. Imperial Cleaning's specialized expertise gives us confidence in protecting our sensitive equipment.`,
      context: isConstruction ?
        `Technology center with data center clean room requirements` :
        `Ongoing maintenance of technology facility with controlled environment areas`
    });
  } else if (industries.includes("Food Processing")) {
    testimonials.push({
      businessType: "Food Processing Plant Manager",
      location: `${location.name} industrial area`,
      quote: isConstruction ?
        `Our facility expansion required cleaning that met FDA and USDA standards before we could install equipment. Imperial Cleaning's food-grade protocols and documentation ensured we passed all pre-operational inspections.` :
        `Food safety is paramount in our operation. Imperial Cleaning understands GMP requirements and consistently delivers sanitation services that meet all regulatory standards while accommodating our 24/7 production schedule.`,
      context: isConstruction ?
        `30,000 sq ft food processing facility expansion with strict regulatory requirements` :
        `Food production facility requiring ongoing sanitation and regulatory compliance`
    });
  } else if (industries.includes("Manufacturing")) {
    testimonials.push({
      businessType: "Manufacturing Facility Manager",
      location: `${location.name}`,
      quote: isConstruction ?
        `Imperial Cleaning handled the final cleanup of our manufacturing expansion with professionalism and attention to detail. They understood our timeline pressures and delivered quality work that allowed us to start equipment installation immediately.` :
        `Our manufacturing facility requires specialized cleaning that doesn't interfere with production schedules. Imperial Cleaning's team works efficiently around our operations and maintains the cleanliness standards our processes demand.`,
      context: isConstruction ?
        `Manufacturing facility expansion with tight equipment installation deadline` :
        `Active manufacturing facility with specialized cleaning requirements`
    });
  }
  
  return {
    title: `What ${location.name} Clients Say`,
    testimonials: testimonials.slice(0, 4)
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

// Generate location-specific structured data with comprehensive LocalBusiness and Service schemas
export function generateLocationStructuredData(service: string, location: ServiceLocation, canonicalUrl: string) {
  const isConstruction = service === 'construction-cleaning';
  const serviceName = isConstruction ? 'Construction Cleaning' : 'Commercial Cleaning';
  const stateAbbr = location.state === "Idaho" ? "ID" : "UT";
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Imperial Cleaning Inc - ${location.name} ${serviceName}`,
    "alternateName": `Imperial Cleaning ${location.name}`,
    "description": generateLocationDescription(service, location),
    "url": canonicalUrl,
    "telephone": "+1-208-520-3202",
    "email": "service@imperialcleaninginc.com",
    "logo": "https://imperialcleaninginc.com/hero-logo.png",
    "image": "https://imperialcleaninginc.com/hero-logo.png",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Check, Credit Card, ACH Transfer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Idaho Falls",
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    ...(location.coordinates && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.coordinates.lat.toString(),
        "longitude": location.coordinates.lng.toString()
      }
    }),
    "areaServed": [
      {
        "@type": "City",
        "name": location.name,
        "addressRegion": stateAbbr,
        ...(location.county && { "containedInPlace": { "@type": "AdministrativeArea", "name": location.county } })
      },
      {
        "@type": "State",
        "name": location.state,
        "addressRegion": stateAbbr
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": location.coordinates ? {
        "@type": "GeoCoordinates",
        "latitude": location.coordinates.lat.toString(),
        "longitude": location.coordinates.lng.toString()
      } : {
        "@type": "GeoCoordinates",
        "latitude": "43.4666",
        "longitude": "-112.0336"
      },
      "geoRadius": location.serviceRadius
    },
    "serviceType": isConstruction ? 
      ["Post Construction Cleanup", "Construction Site Cleaning", "Debris Removal", "Final Inspection Cleaning"] :
      ["Commercial Cleaning", "Janitorial Services", "Office Cleaning", "Facility Maintenance"],
    "openingHours": [
      "Mo-Fr 07:00-18:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services in ${location.name}`,
      "itemListElement": location.services.specializedServices.slice(0, 5).map(serviceItem => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceItem,
          "description": `Professional ${serviceItem.toLowerCase()} services in ${location.name}, ${location.state}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Imperial Cleaning Inc"
          },
          "areaServed": {
            "@type": "City",
            "name": location.name,
            "addressRegion": stateAbbr
          }
        },
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD"
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-208-520-3202",
      "contactType": "customer service",
      "areaServed": [stateAbbr],
      "availableLanguage": "English",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} Services in ${location.name}, ${location.state}`,
    "description": `Professional ${serviceName.toLowerCase()} services for ${location.name}, ${location.state}. Serving ${location.serviceRadius} with expert ${isConstruction ? 'post-construction cleanup and debris removal' : 'commercial cleaning and janitorial services'}.`,
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Imperial Cleaning Inc",
      "telephone": "+1-208-520-3202",
      "url": "https://imperialcleaninginc.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Idaho Falls",
        "addressRegion": "ID",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "addressRegion": stateAbbr,
      "containedInPlace": {
        "@type": "State",
        "name": location.state
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  };

  return [localBusinessSchema, serviceSchema];
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

// Generate comprehensive service-specific introduction (2-3 paragraphs)
export function generateServiceIntroduction(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const industries = location.demographics.economicBase.slice(0, 3);
  const majorEmployer = location.demographics.majorEmployers?.[0];
  const districts = location.businessDistricts || location.neighborhoods || [];
  
  let intro = {
    title: `${isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning'} Services in ${location.name}, ${location.state}`,
    paragraphs: [] as string[]
  };

  if (isConstruction) {
    intro.paragraphs.push(
      `When you need construction cleanup in ${location.name}, ${location.state}, Imperial Cleaning Inc delivers inspection-ready results that meet the exacting standards of ${location.name}'s ${location.demographics.constructionActivity === 'high' ? 'thriving' : 'growing'} construction sector. Our post-construction cleaning services transform construction sites across ${districts.length > 0 ? districts.slice(0, 2).join(' and ') : location.name} into pristine, move-in-ready spaces that pass final inspections with zero deficiencies. From debris removal and dust elimination to final detailing and OSHA compliance verification, we understand the critical timeline pressures contractors face in ${location.name} and consistently deliver quality results that enable on-time project completion.`
    );

    intro.paragraphs.push(
      `Serving ${industries.join(', ')} construction projects throughout ${location.name}, our construction cleanup expertise addresses the unique challenges of ${location.state}'s ${location.state === 'Idaho' ? 'high desert climate' : 'mountain environment'}. ${majorEmployer ? `Our experience includes work supporting major developments for organizations like ${majorEmployer} and other leading ${location.name} employers.` : `We've successfully completed cleanup projects for major commercial, industrial, and institutional developments throughout the ${location.name} area.`} Whether you're a general contractor managing a ${location.demographics.constructionActivity === 'high' ? '100,000 square foot commercial build-out' : 'multi-phase renovation'} or a specialty contractor completing tenant improvements, our construction cleaning in ${location.name} ensures your project meets inspection standards and client expectations.`
    );

    intro.paragraphs.push(
      `Located ${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 'right here in Idaho Falls' : `just ${location.driveTimeFromHQ} from our Idaho Falls headquarters`}, we provide ${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 'immediate response' : 'reliable same-day or next-day response'} for construction cleanup emergencies and can mobilize full crews to ${location.name} construction sites within ${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 'hours' : 'a day'}. Our deep familiarity with ${location.county ? `${location.county}` : `${location.name} area`} building departments, inspection requirements, and local contractors means we understand exactly what's required for final sign-off in ${location.name}. With specialized equipment calibrated for ${location.state}'s environmental conditions and crews trained in the specific compliance standards that ${location.name} projects demand, Imperial Cleaning Inc is the trusted construction cleanup partner for contractors throughout ${location.name}, ${location.state}.`
    );
  } else {
    intro.paragraphs.push(
      `When ${location.name}, ${location.state} businesses need reliable commercial cleaning services, Imperial Cleaning Inc delivers the professional, consistent facility maintenance that keeps ${industries.join(', ')} organizations operating at peak performance. Our comprehensive commercial cleaning in ${location.name} covers everything from daily office janitorial services to specialized facility maintenance for ${location.demographics.commercialDensity === 'high' ? 'the area\'s extensive commercial infrastructure' : 'growing business facilities'} across ${districts.length > 0 ? districts.slice(0, 2).join(', ') : `${location.name}'s business districts`}. We understand that your facility's cleanliness directly impacts employee productivity, client impressions, and operational efficiency—that's why businesses throughout ${location.name} trust us to maintain their professional environments to the highest standards.`
    );

    intro.paragraphs.push(
      `Serving ${location.name}'s diverse business community, our commercial cleaning expertise spans ${industries.join(', ')} facilities with customized programs that address each industry's unique requirements. ${majorEmployer ? `Our client portfolio includes relationships with major ${location.name} employers, and we understand the exacting standards required by organizations like ${majorEmployer} and other leading businesses in the area.` : `We've established a strong reputation throughout ${location.name} for delivering exceptional cleaning services that meet the varied needs of professional offices, healthcare facilities, educational institutions, and commercial buildings.`} Whether you need nightly janitorial services for a ${location.demographics.commercialDensity === 'high' ? 'downtown high-rise' : 'professional office building'}, weekly deep cleaning for retail spaces, or specialized maintenance for regulated facilities, our commercial cleaning services in ${location.name} deliver the reliability and quality your business demands.`
    );

    intro.paragraphs.push(
      `Based ${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 'right here in Idaho Falls with local teams serving your facility' : `${location.driveTimeFromHQ} from our Idaho Falls headquarters with optimized service routes to ${location.name}`}, we provide ${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 'same-day response' : 'rapid response'} for urgent cleaning needs and maintain consistent service delivery across our entire ${location.serviceRadius} service area. Our teams are thoroughly familiar with ${location.name}'s business environment, understand local workplace standards, and maintain relationships with ${location.county ? `${location.county}` : `${location.name}`} facility managers and building operators. With eco-friendly cleaning products proven effective in ${location.state}'s climate, advanced equipment, and rigorously trained staff, Imperial Cleaning Inc has become the preferred commercial cleaning provider for businesses throughout ${location.name}, ${location.state}.`
    );
  }

  // Add internal links for SEO and user navigation
  const complementaryLink = getComplementaryServiceLink(service, location);
  const stateAreaLink = getServiceAreaLink(location.state);

  return {
    ...intro,
    internalLinks: {
      complementary: complementaryLink,
      stateArea: stateAreaLink
    }
  };
}

// Generate "Why Choose [Service] in [City]" section
export function generateWhyChoose(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const serviceType = isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning';
  
  return {
    title: `Why Choose Imperial Cleaning for ${serviceType} in ${location.name}`,
    intro: `When you select Imperial Cleaning Inc for ${isConstruction ? 'post-construction cleanup' : 'commercial cleaning'} in ${location.name}, you're partnering with a company that combines regional expertise with deep local knowledge. Here's what sets us apart as ${location.name}'s preferred ${isConstruction ? 'construction cleaning' : 'commercial cleaning'} provider:`,
    reasons: [
      {
        title: `${location.name} Local Expertise and Market Knowledge`,
        description: `We've served ${location.name}, ${location.state} for years, building extensive experience with local ${isConstruction ? 'contractors, building departments, and inspection requirements' : 'businesses, facility managers, and workplace standards'}. Our teams understand ${location.county ? `${location.county}'s` : `${location.name}'s`} specific ${isConstruction ? 'building codes, permitting processes, and final inspection criteria' : 'commercial facility standards, health department regulations, and industry compliance requirements'}. This local knowledge ensures we consistently deliver results that meet ${location.name} standards without costly delays or re-work.`
      },
      {
        title: `${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 'Immediate Response from Our Idaho Falls Headquarters' : `Rapid Response Time - ${location.driveTimeFromHQ} from Idaho Falls`}`,
        description: `${location.driveTimeFromHQ === "0 minutes (Headquarters)" 
          ? `As our headquarters city, ${location.name} benefits from our immediate availability, full equipment inventory, and direct management oversight. We can mobilize crews to your ${isConstruction ? 'construction site' : 'facility'} within hours for emergency needs and maintain flexible scheduling for all ${location.name} projects.`
          : `With just ${location.driveTimeFromHQ} drive time from our Idaho Falls headquarters, we provide reliable service delivery to ${location.name} with pre-positioned equipment and strategic scheduling. Our ${isConstruction ? 'construction cleanup crews' : 'janitorial teams'} reach ${location.name} ${isConstruction ? 'job sites' : 'facilities'} promptly for both scheduled services and urgent needs.`
        }`
      },
      {
        title: `Experience with ${location.name}'s Major Industries and Employers`,
        description: `${location.demographics.majorEmployers?.length ? `Our client portfolio includes work with ${location.name}'s leading employers across ${location.demographics.economicBase.slice(0, 3).join(', ')} sectors. We understand the specific ${isConstruction ? 'construction standards and project requirements' : 'facility maintenance needs and operational considerations'} that ${location.name} businesses demand.` : `We've built strong relationships with ${location.name} businesses across ${location.demographics.economicBase.slice(0, 3).join(', ')} industries, understanding the unique ${isConstruction ? 'project timelines and quality standards' : 'cleaning requirements and operational schedules'} each sector requires.`} This industry-specific expertise ensures we deliver appropriate solutions for your ${location.name} ${isConstruction ? 'construction project' : 'business facility'}.`
      },
      {
        title: `${location.state}-Specific Compliance and Regulatory Knowledge`,
        description: `We maintain current knowledge of ${location.state} ${isConstruction ? 'construction waste disposal regulations, environmental protection requirements, and building code standards' : 'commercial cleaning chemical regulations, workplace safety standards, and facility maintenance requirements'} that apply to ${location.name} projects. ${location.county ? `Our familiarity with ${location.county} local ordinances ensures compliance with county-specific ${isConstruction ? 'debris disposal and site cleanup' : 'waste management and cleaning product'} requirements.` : ''} This regulatory expertise protects you from compliance issues while ensuring all ${isConstruction ? 'cleanup work' : 'cleaning services'} meets current ${location.name} standards.`
      },
      {
        title: `Proven Track Record in ${location.name}, ${location.state}`,
        description: `${location.demographics.constructionActivity === 'high' || location.demographics.commercialDensity === 'high' 
          ? `With ${location.demographics.constructionActivity === 'high' ? 'extensive construction cleanup experience across multiple ongoing projects' : 'ongoing contracts with numerous commercial facilities'} in ${location.name}, we've established a reputation for reliability, quality, and professional service. ${isConstruction ? 'Contractors know they can count on us for on-time completion and inspection-ready results.' : 'Facility managers trust us for consistent quality and responsive service.'}`
          : `We've successfully completed ${isConstruction ? 'construction cleanup projects' : 'commercial cleaning contracts'} throughout ${location.name}, earning the trust of local ${isConstruction ? 'contractors and developers' : 'businesses and property managers'}. Our growing presence in ${location.name} reflects our commitment to delivering exceptional service to ${location.state} communities.`
        }`
      },
      {
        title: `Equipment and Techniques Optimized for ${location.state} Conditions`,
        description: `Our ${isConstruction ? 'construction cleanup equipment' : 'commercial cleaning systems'} are specifically selected and maintained for ${location.state}'s ${location.state === 'Idaho' ? 'high desert climate conditions' : 'mountain environment'} that impact ${location.name}. ${location.state === 'Idaho' 
          ? `We use HEPA filtration and advanced dust control systems calibrated for Idaho's fine dust conditions, ensuring ${isConstruction ? 'construction sites' : 'facilities'} remain clean despite the challenging climate.`
          : `We employ air quality-focused cleaning methods that work effectively in Utah's climate, maintaining healthy indoor environments throughout ${location.name}.`
        } This environmental adaptation ensures superior results for ${location.name} ${isConstruction ? 'construction projects' : 'commercial facilities'}.`
      }
    ]
  };
}

// Generate enhanced location-specific service features
export function generateEnhancedServiceFeatures(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const industries = location.demographics.economicBase;
  const districts = location.businessDistricts || location.neighborhoods || [];
  
  return {
    title: `${isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning'} Services Throughout ${location.name}`,
    intro: `Our ${isConstruction ? 'post-construction cleanup services' : 'commercial cleaning programs'} in ${location.name}, ${location.state} are specifically tailored to meet the unique needs of ${location.name}'s ${isConstruction ? 'construction market' : 'business community'} and local environmental conditions.`,
    features: industries.slice(0, 4).map(industry => {
      let feature = {
        title: '',
        description: '',
        icon: industry
      };

      if (isConstruction) {
        if (industry === "Healthcare") {
          feature.title = `Healthcare Facility Construction Cleanup in ${location.name}`;
          feature.description = `Specialized post-construction cleaning for ${location.name} medical facilities, meeting strict infection control and contamination-free standards required by ${location.state} healthcare regulations. ${districts.length > 0 ? `From ${districts[0]} medical centers to outlying clinics` : `Throughout ${location.name}'s healthcare district`}, we deliver hospital-grade cleanup that enables immediate facility operations.`;
        } else if (industry === "Technology" || industry === "Manufacturing") {
          feature.title = `Technology & Clean Room Construction Cleanup in ${location.name}`;
          feature.description = `ISO-certified construction cleanup for ${location.name}'s ${industry.toLowerCase()} facilities, including controlled environments and sensitive equipment areas. Our clean room cleaning protocols meet the exacting standards of ${location.name}'s tech sector${location.demographics.majorEmployers?.[0] ? `, with proven experience supporting facilities like ${location.demographics.majorEmployers[0]}` : ''}.`;
        } else if (industry === "Education") {
          feature.title = `Educational Facility Construction Cleanup in ${location.name}`;
          feature.description = `Fast, thorough post-construction cleanup for ${location.name} schools, colleges, and universities, working within tight academic calendar constraints. We understand the importance of timely completion for ${location.name}'s educational institutions${location.demographics.majorEmployers?.find(e => e.includes("University") || e.includes("College")) ? `, including work with ${location.demographics.majorEmployers.find(e => e.includes("University") || e.includes("College"))}` : ''}.`;
        } else if (industry === "Government" || industry === "Energy") {
          feature.title = `Government & Energy Facility Construction Cleanup in ${location.name}`;
          feature.description = `Security-cleared construction cleanup services for ${location.name}'s government and energy facilities, following strict protocols and compliance requirements. Our teams are experienced with the unique access, security, and quality standards that ${location.name}'s ${industry.toLowerCase()} projects demand.`;
        } else {
          feature.title = `${industry} Construction Cleanup in ${location.name}`;
          feature.description = `Comprehensive post-construction cleaning for ${location.name}'s ${industry.toLowerCase()} sector, from ${districts.length > 0 ? `${districts[0]} commercial developments` : 'downtown projects'} to ${districts.length > 1 ? `${districts[1]} facilities` : 'suburban locations'}. We adapt our construction cleanup approach to meet the specific requirements of ${location.name}'s ${industry.toLowerCase()} construction projects.`;
        }
      } else {
        if (industry === "Healthcare") {
          feature.title = `Healthcare Facility Cleaning in ${location.name}`;
          feature.description = `Medical-grade commercial cleaning for ${location.name} healthcare facilities, maintaining strict infection control protocols and HIPAA-compliant cleaning procedures. ${districts.length > 0 ? `From ${districts[0]} hospitals to medical office buildings` : `Throughout ${location.name}'s healthcare facilities`}, we deliver the specialized cleaning that healthcare environments require.`;
        } else if (industry === "Technology") {
          feature.title = `Technology Campus Cleaning in ${location.name}`;
          feature.description = `Professional commercial cleaning for ${location.name}'s technology companies, including clean room maintenance, ESD-safe procedures, and specialized equipment care. Our tech-sector expertise ensures ${location.name} technology facilities maintain pristine, contamination-free environments${location.demographics.majorEmployers?.[0] ? `, with proven results for companies like ${location.demographics.majorEmployers[0]}` : ''}.`;
        } else if (industry === "Education") {
          feature.title = `Educational Institution Cleaning in ${location.name}`;
          feature.description = `Comprehensive janitorial services for ${location.name}'s schools, colleges, and universities, working around academic schedules and student activities. We provide the consistent, high-quality cleaning that ${location.name}'s educational facilities need${location.demographics.majorEmployers?.find(e => e.includes("University") || e.includes("College")) ? `, including ongoing contracts with ${location.demographics.majorEmployers.find(e => e.includes("University") || e.includes("College"))}` : ''}.`;
        } else if (industry === "Retail") {
          feature.title = `Retail & Shopping Center Cleaning in ${location.name}`;
          feature.description = `Professional retail cleaning services for ${location.name}'s stores, shopping centers, and commercial retail spaces. ${districts.length > 0 ? `From ${districts[0]} retail districts to neighborhood shopping centers` : `Throughout ${location.name}'s retail locations`}, we maintain clean, inviting shopping environments that enhance the customer experience.`;
        } else if (industry === "Food Processing" || industry === "Agriculture") {
          feature.title = `Food Processing Facility Cleaning in ${location.name}`;
          feature.description = `FDA and USDA-compliant commercial cleaning for ${location.name}'s food processing facilities, maintaining strict sanitation standards and GMP compliance. Our food safety expertise ensures ${location.name} food processing operations meet all regulatory requirements while minimizing production disruption.`;
        } else {
          feature.title = `${industry} Commercial Cleaning in ${location.name}`;
          feature.description = `Specialized commercial cleaning services for ${location.name}'s ${industry.toLowerCase()} businesses, ${districts.length > 0 ? `from ${districts[0]} to ${districts[1] || 'surrounding areas'}` : `throughout ${location.name}`}. We understand the unique facility maintenance needs of ${location.name}'s ${industry.toLowerCase()} sector and deliver tailored cleaning solutions.`;
        }
      }

      return feature;
    }),
    localContext: `${location.state === 'Idaho' 
      ? `All ${isConstruction ? 'construction cleanup services' : 'commercial cleaning programs'} in ${location.name} include specialized dust control protocols for Idaho's high desert climate, ensuring superior air quality and cleanliness despite challenging environmental conditions.`
      : `Our ${isConstruction ? 'construction cleanup methods' : 'commercial cleaning programs'} in ${location.name} are specifically adapted for Utah's mountain environment, with air quality-focused approaches that maintain healthy indoor conditions throughout the year.`
    }`,
    internalLinks: {
      serviceHub: {
        url: `/${service}`,
        text: `Explore all our ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} capabilities`
      }
    }
  };
}

// Generate service coverage details
export function generateServiceCoverageDetails(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const districts = location.businessDistricts || location.neighborhoods || [];
  const industries = location.demographics.economicBase;
  
  return {
    title: `Our ${isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning'} Coverage in ${location.name}, ${location.state}`,
    intro: `Imperial Cleaning Inc provides comprehensive ${isConstruction ? 'post-construction cleanup services' : 'commercial cleaning services'} throughout ${location.name} and surrounding ${location.state} communities within our ${location.serviceRadius} service area.`,
    coverage: {
      districts: districts.length > 0 ? {
        title: `${location.name} Districts and Neighborhoods Served`,
        areas: districts.map(district => ({
          name: district,
          description: `${isConstruction ? 'Construction cleanup services' : 'Commercial cleaning programs'} for ${district} ${isConstruction ? 'construction projects' : 'businesses and facilities'}, with ${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? 'immediate local response' : 'regular service routes'} ensuring consistent availability throughout this ${location.name} area.`
        }))
      } : null,
      facilityTypes: {
        title: `Types of ${location.name} ${isConstruction ? 'Construction Projects' : 'Facilities'} We Serve`,
        types: industries.map(industry => {
          if (isConstruction) {
            return `${industry} facility construction and renovation projects`;
          } else {
            return `${industry} commercial facilities and office buildings`;
          }
        })
      },
      responseTime: {
        title: `Response Time Guarantees for ${location.name}`,
        standard: location.driveTimeFromHQ === "0 minutes (Headquarters)" 
          ? `Same-day response for routine ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} requests in ${location.name}` 
          : `Next-day response for standard ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} requests in ${location.name}`,
        emergency: location.driveTimeFromHQ === "0 minutes (Headquarters)"
          ? `2-4 hour response for emergency ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} needs in ${location.name}`
          : `Same-day response for emergency ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} situations in ${location.name}`,
        description: `${location.driveTimeFromHQ === "0 minutes (Headquarters)" 
          ? `Based right here in ${location.name}, our crews are immediately available for any ${isConstruction ? 'construction site' : 'commercial facility'} need.`
          : `With optimized routes from Idaho Falls to ${location.name} (${location.driveTimeFromHQ}), we maintain reliable service delivery across all ${location.name} locations.`
        }`
      },
      emergencyService: {
        title: `24/7 Emergency ${isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning'} in ${location.name}`,
        description: `When ${isConstruction ? 'construction emergencies' : 'facility emergencies'} happen in ${location.name}, Imperial Cleaning Inc is available 24 hours a day, 7 days a week. Whether you need ${isConstruction ? 'urgent post-construction cleanup for an accelerated inspection deadline' : 'emergency cleanup after water damage or contamination incidents'}, our ${location.name} response team is ready to mobilize immediately. Call us anytime at 208-520-3202 for emergency ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} services in ${location.name}, ${location.state}.`
      }
    },
    internalLinks: {
      nearbyCities: getNearbyCities(service, location, 5),
      stateArea: getServiceAreaLink(location.state)
    }
  };
}

// Generate city-specific service process
export function generateCitySpecificProcess(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  
  return {
    title: `Our ${isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning'} Process in ${location.name}`,
    intro: `Here's exactly how we deliver ${isConstruction ? 'post-construction cleanup services' : 'commercial cleaning services'} in ${location.name}, ${location.state}, with local expertise and proven processes:`,
    steps: [
      {
        number: 1,
        title: `${location.name} Site Assessment and Local Consultation`,
        description: isConstruction 
          ? `We begin every ${location.name} construction cleanup with an on-site assessment where we evaluate debris volume, surface types, and project-specific requirements. Our estimator discusses ${location.name} building department inspection criteria, ${location.county ? `${location.county}` : 'local'} permit requirements, and contractor timeline expectations. This assessment ensures our ${location.name} construction cleanup plan aligns with local inspection standards and project schedules.`
          : `Our ${location.name} commercial cleaning program starts with a comprehensive facility walkthrough where we assess space layout, traffic patterns, and specific cleaning needs. We discuss your operational schedule, employee considerations, and any ${location.name} industry-specific requirements. This assessment allows us to design a cleaning program tailored to your ${location.name} facility's unique needs.`,
        localContext: `Understanding ${location.name}'s specific ${isConstruction ? 'construction standards' : 'facility requirements'} is critical—we've worked extensively with ${location.county ? `${location.county}` : location.name} ${isConstruction ? 'building departments and contractors' : 'facility managers and businesses'}, so we know exactly what's expected.`
      },
      {
        number: 2,
        title: `Customized ${location.name} ${isConstruction ? 'Cleanup' : 'Cleaning'} Plan Development`,
        description: isConstruction
          ? `Based on the ${location.name} site assessment, we develop a detailed construction cleanup plan that includes debris removal procedures, specialized cleaning requirements for different surfaces, and a timeline that coordinates with your ${location.name} project schedule. We identify any ${location.state}-specific compliance requirements and plan for ${location.county ? `${location.county}` : 'local'} debris disposal according to ${location.name} regulations.`
          : `We create a customized commercial cleaning plan for your ${location.name} facility that specifies cleaning frequencies, task lists, and quality standards for each area. The plan accommodates your business hours, coordinates with your ${location.name} staff schedules, and addresses any industry-specific requirements relevant to ${location.name} businesses.`,
        localContext: `${location.state === 'Idaho' 
          ? `For ${location.name} projects, our plans always include Idaho's required dust control measures and high desert climate considerations.`
          : `All ${location.name} cleaning plans account for Utah's air quality concerns and seasonal climate variations that affect facility maintenance.`
        }`
      },
      {
        number: 3,
        title: `Professional Crew Assignment and ${location.name} Mobilization`,
        description: isConstruction
          ? `We assign experienced ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} crews familiar with ${location.name} projects and equipped with tools optimized for ${location.state} conditions. ${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? `As a local ${location.name} company, our crews arrive directly from our headquarters with full equipment.` : `Our crews depart from Idaho Falls with all necessary equipment, reaching your ${location.name} construction site within ${location.driveTimeFromHQ}.`} Before work begins, we conduct a safety briefing covering site-specific hazards and ${location.name} project requirements.`
          : `We assign dedicated ${isConstruction ? 'construction cleanup' : 'commercial cleaning'} teams to your ${location.name} facility, introducing them to your staff and reviewing your facility's specific needs. ${location.driveTimeFromHQ === "0 minutes (Headquarters)" ? `As a local ${location.name} service, our teams maintain consistent presence at your facility.` : `Our teams establish regular service routes to ${location.name}, ensuring the same crew maintains your facility for consistency and familiarity.`} All crew members are background-checked, trained, and equipped with ${location.state}-approved cleaning products.`,
        localContext: `${location.name} clients appreciate having crews who understand local ${isConstruction ? 'construction practices' : 'business environments'} and can work seamlessly with ${location.name} ${isConstruction ? 'contractors' : 'facility staff'}.`
      },
      {
        number: 4,
        title: `${isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning'} Execution with ${location.name} Standards`,
        description: isConstruction
          ? `Our construction cleanup work in ${location.name} follows our proven three-phase process: rough cleaning and debris removal, detailed surface cleaning, and final inspection preparation. Throughout the process, we maintain ${location.name} building department standards, use ${location.state}-compliant disposal methods, and coordinate with your contractor team. We schedule work to minimize conflicts with other ${location.name} trades and adapt to ${location.name} project timeline changes.`
          : `Our ${location.name} commercial cleaning services are executed according to the customized plan, with crews arriving at scheduled times and completing all tasks to established quality standards. We use color-coded equipment to prevent cross-contamination, follow your facility's security protocols, and maintain detailed service logs. All work is completed during your preferred hours, minimizing disruption to your ${location.name} business operations.`,
        localContext: `${location.state === 'Idaho'
          ? `In ${location.name}, we pay special attention to dust control throughout all work, using HEPA filtration and Idaho-proven techniques that address the high desert climate.`
          : `Our ${location.name} work includes Utah-specific air quality measures, using low-VOC products and methods that maintain healthy indoor environments.`
        }`
      },
      {
        number: 5,
        title: `Quality Verification and ${location.name} ${isConstruction ? 'Inspection Coordination' : 'Service Reporting'}`,
        description: isConstruction
          ? `Before calling any ${location.name} construction cleanup complete, our site supervisor performs a comprehensive quality inspection using our detailed checklist. We verify that all areas meet ${location.name} building department standards and are inspection-ready. For ${location.name} projects, we coordinate with building inspectors, attend final walkthroughs, and address any punch-list items immediately. We don't consider the job complete until your ${location.name} project passes inspection and you're satisfied.`
          : `After each cleaning service in ${location.name}, our supervisor conducts quality checks using detailed checklists. We provide ${location.name} facility managers with service reports documenting completed tasks, any issues noted, and supplies restocked. Monthly quality audits ensure consistent standards at your ${location.name} facility. We maintain open communication, responding immediately to any ${location.name} client concerns.`,
        localContext: `${location.name} ${isConstruction ? 'contractors know they can count on us for inspection-ready results that meet local building department standards' : 'businesses value our responsive communication and consistent quality that maintains their professional facility standards'}.`
      },
      {
        number: 6,
        title: `${location.name} ${isConstruction ? 'Project Completion and Documentation' : 'Ongoing Service Optimization'}`,
        description: isConstruction
          ? `Upon ${location.name} project completion, we provide comprehensive documentation including before/after photos, waste disposal receipts compliant with ${location.county ? `${location.county}` : location.name} requirements, and certificates of completion. We maintain project records according to ${location.state} requirements and can provide documentation for ${location.name} building departments or final inspections. Our goal is your complete satisfaction and successful project completion in ${location.name}.`
          : `We continuously optimize your ${location.name} commercial cleaning program based on feedback and facility changes. Quarterly business reviews ensure our services evolve with your ${location.name} facility's needs. We track service quality metrics, address any concerns immediately, and proactively suggest improvements. Our goal is long-term partnership, keeping your ${location.name} facility consistently clean and professional.`,
        localContext: `${location.name} clients receive the detailed documentation and responsive service that builds long-term cleaning partnerships throughout ${location.state}.`
      }
    ]
  };
}

// Generate industry-specific applications
export function generateIndustryApplications(service: string, location: ServiceLocation) {
  const isConstruction = service === 'construction-cleaning';
  const industries = location.demographics.economicBase;
  const majorEmployers = location.demographics.majorEmployers || [];
  
  return {
    title: `Industry-Specific ${isConstruction ? 'Construction Cleanup' : 'Commercial Cleaning'} Applications in ${location.name}`,
    intro: `${location.name}'s diverse economy requires ${isConstruction ? 'construction cleanup expertise' : 'commercial cleaning programs'} tailored to each industry's unique requirements. Here's how we serve ${location.name}'s major business sectors:`,
    industries: industries.map(industry => {
      let app = {
        name: industry,
        title: '',
        description: '',
        requirements: [] as string[],
        experience: ''
      };

      const employerMention = majorEmployers.find(emp => 
        (industry === "Healthcare" && (emp.includes("Hospital") || emp.includes("Medical"))) ||
        (industry === "Education" && (emp.includes("University") || emp.includes("College"))) ||
        (industry === "Technology" && (emp.includes("Lab") || emp.includes("Tech"))) ||
        (industry === "Government" && (emp.includes("Department") || emp.includes("Agency")))
      );

      if (isConstruction) {
        if (industry === "Healthcare") {
          app.title = `Healthcare Facility Construction in ${location.name}`;
          app.description = `${location.name}'s healthcare sector demands the highest standards for post-construction cleanup. Medical facility construction requires contamination-free environments, strict infection control protocols, and adherence to healthcare regulations before patient occupancy can begin.`;
          app.requirements = [
            `Hospital-grade post-construction cleaning eliminating all dust and debris`,
            `HEPA filtration and verified air quality testing for ${location.name} medical facilities`,
            `Coordination with ${location.name} infection control staff and health department inspectors`,
            `Healthcare-approved cleaning products and contamination-free procedures`,
            `Detailed documentation meeting ${location.state} healthcare facility requirements`
          ];
          app.experience = employerMention 
            ? `We've successfully completed healthcare construction cleanup projects supporting ${location.name} medical facilities, including work with organizations like ${employerMention}. Our healthcare construction expertise ensures ${location.name} medical facilities meet stringent cleanliness standards before patient services begin.`
            : `Our healthcare construction cleanup experience in ${location.name} ensures medical facilities achieve the contamination-free, inspection-ready condition required for patient care operations.`;
        } else if (industry === "Technology") {
          app.title = `Technology Facility Construction in ${location.name}`;
          app.description = `${location.name}'s technology sector requires specialized post-construction cleanup for controlled environments, clean rooms, and sensitive equipment areas. Tech facility construction cleanup must achieve ISO-certified cleanliness levels and prevent any contamination that could affect operations.`;
          app.requirements = [
            `ISO-certified clean room construction cleanup meeting ${location.name} tech standards`,
            `Particle count verification and contamination control protocols`,
            `ESD-safe cleaning procedures for sensitive equipment areas`,
            `Specialized HEPA filtration calibrated for ${location.state} environmental conditions`,
            `Coordination with ${location.name} technology facility commissioning teams`
          ];
          app.experience = employerMention
            ? `We've provided construction cleanup services for ${location.name} technology facilities, including projects supporting organizations like ${employerMention}. Our clean room expertise and technology-sector experience ensure ${location.name} tech facilities achieve operational readiness.`
            : `Our technology construction cleanup experience ensures ${location.name} tech facilities meet the exacting standards required for controlled environment operations and sensitive equipment protection.`;
        } else if (industry === "Education") {
          app.title = `Educational Facility Construction in ${location.name}`;
          app.description = `${location.name}'s schools, colleges, and universities face strict timeline pressures for construction cleanup, particularly for projects that must complete before academic semesters begin. Educational facility cleanup requires child-safe cleaning methods, coordination with facility operations, and fast turnaround.`;
          app.requirements = [
            `Accelerated construction cleanup meeting tight ${location.name} academic deadlines`,
            `Child-safe, non-toxic cleaning products appropriate for educational environments`,
            `Coordination with ${location.name} school district or university facility managers`,
            `Thorough removal of construction debris from classrooms, labs, and common areas`,
            `Safety-focused final inspection preparation meeting ${location.state} educational facility standards`
          ];
          app.experience = employerMention
            ? `Our educational construction cleanup experience in ${location.name} includes projects with institutions like ${employerMention}. We understand the critical importance of on-time completion for ${location.name} educational facilities.`
            : `We've successfully completed educational facility construction cleanup throughout ${location.name}, consistently meeting the compressed timelines that schools and colleges require.`;
        } else if (industry === "Government" || industry === "Energy") {
          app.title = `Government & Energy Facility Construction in ${location.name}`;
          app.description = `${location.name}'s government and energy sector construction projects often involve security-sensitive facilities requiring cleared personnel, strict protocol adherence, and specialized safety compliance. These ${location.name} facilities demand construction cleanup services that understand security requirements and regulatory standards.`;
          app.requirements = [
            `Security-cleared personnel for sensitive ${location.name} government facilities`,
            `Strict adherence to facility security protocols and access procedures`,
            `Specialized safety compliance for energy sector construction cleanup`,
            `Detailed documentation meeting government facility standards in ${location.state}`,
            `Coordination with ${location.name} facility security officers and project managers`
          ];
          app.experience = employerMention
            ? `We maintain experience with ${location.name} government and energy sector construction, including work supporting facilities like ${employerMention}. Our teams understand the unique requirements that ${location.name}'s government and energy projects demand.`
            : `Our government and energy sector experience ensures ${location.name} secure facilities receive construction cleanup services that meet their heightened security and safety requirements.`;
        } else if (industry === "Retail") {
          app.title = `Retail Construction and Renovation in ${location.name}`;
          app.description = `${location.name}'s retail construction and renovation projects require fast, thorough post-construction cleanup that enables quick store openings and minimizes business disruption. Retail cleanup must achieve showroom-quality results for customer-facing areas.`;
          app.requirements = [
            `Showroom-quality final cleaning for ${location.name} retail spaces`,
            `Fast turnaround construction cleanup minimizing ${location.name} business downtime`,
            `Window and glass cleaning achieving crystal-clear display standards`,
            `Floor care and protection for various retail flooring types`,
            `After-hours scheduling to accommodate ${location.name} retail operations`
          ];
          app.experience = `We've completed retail construction cleanup throughout ${location.name}, from major shopping centers to individual store build-outs, consistently delivering the showroom-ready results that ${location.name} retailers need.`;
        } else if (industry === "Residential" || industry === "Residential Development" || industry === "Luxury Residential") {
          // Skip residential industry - we don't provide residential cleaning services
          return null;
        } else {
          app.title = `${industry} Construction Projects in ${location.name}`;
          app.description = `${location.name}'s ${industry.toLowerCase()} sector has specific construction cleanup requirements based on facility types, operational needs, and industry regulations. Our ${industry.toLowerCase()} construction cleanup experience ensures ${location.name} projects receive appropriate specialized services.`;
          app.requirements = [
            `Industry-specific post-construction cleaning for ${location.name} ${industry.toLowerCase()} facilities`,
            `Compliance with ${location.state} ${industry.toLowerCase()} sector regulations`,
            `Coordination with ${location.name} ${industry.toLowerCase()} contractors and facility managers`,
            `Specialized equipment and techniques appropriate for ${industry.toLowerCase()} environments`,
            `Quality standards meeting ${location.name} ${industry.toLowerCase()} industry expectations`
          ];
          app.experience = employerMention
            ? `Our ${industry.toLowerCase()} construction cleanup experience in ${location.name} includes work supporting organizations like ${employerMention}, demonstrating our understanding of this sector's unique requirements.`
            : `We've served ${location.name}'s ${industry.toLowerCase()} sector with construction cleanup services that meet the industry's specific standards and operational needs.`;
        }
      } else {
        if (industry === "Healthcare") {
          app.title = `Healthcare Facility Cleaning in ${location.name}`;
          app.description = `${location.name}'s healthcare facilities require medical-grade commercial cleaning that maintains strict infection control, follows HIPAA privacy protocols, and uses healthcare-approved disinfectants. Healthcare cleaning must occur without disrupting patient care operations.`;
          app.requirements = [
            `Healthcare-grade disinfection protocols for ${location.name} medical facilities`,
            `Color-coded equipment systems preventing cross-contamination between areas`,
            `HIPAA-compliant cleaning procedures respecting patient privacy`,
            `Coordination with ${location.name} infection control staff and facility managers`,
            `Detailed documentation meeting ${location.state} healthcare facility standards`
          ];
          app.experience = employerMention
            ? `We provide ongoing commercial cleaning for ${location.name} healthcare facilities, including relationships with organizations like ${employerMention}. Our healthcare cleaning expertise ensures ${location.name} medical environments maintain the highest infection control standards.`
            : `Our healthcare cleaning experience throughout ${location.name} demonstrates our commitment to maintaining the stringent cleanliness standards that medical facilities require.`;
        } else if (industry === "Technology") {
          app.title = `Technology Campus Cleaning in ${location.name}`;
          app.description = `${location.name}'s technology companies need commercial cleaning that protects sensitive equipment, maintains clean room standards, and uses ESD-safe procedures. Tech facility cleaning must avoid any contamination or static discharge that could affect operations.`;
          app.requirements = [
            `Clean room maintenance meeting ISO standards for ${location.name} tech facilities`,
            `ESD-safe cleaning procedures protecting sensitive electronic equipment`,
            `Particle-free cleaning methods appropriate for controlled environments`,
            `Coordination with ${location.name} facility engineers and operations teams`,
            `HEPA filtration equipment calibrated for ${location.state} conditions`
          ];
          app.experience = employerMention
            ? `We serve ${location.name} technology companies with specialized commercial cleaning programs, including work with organizations like ${employerMention}. Our tech-sector expertise ensures ${location.name} technology facilities maintain pristine operational environments.`
            : `Our technology sector cleaning experience in ${location.name} ensures tech facilities receive the specialized maintenance that controlled environments and sensitive equipment require.`;
        } else if (industry === "Education") {
          app.title = `Educational Institution Cleaning in ${location.name}`;
          app.description = `${location.name}'s schools, colleges, and universities need reliable commercial cleaning that works around academic schedules, maintains safe environments for students, and uses child-safe cleaning products. Educational cleaning requires flexibility and consistent quality.`;
          app.requirements = [
            `After-hours cleaning schedules accommodating ${location.name} academic calendars`,
            `Child-safe, non-toxic cleaning products appropriate for educational settings`,
            `Coordination with ${location.name} school administrators and facility managers`,
            `Summer deep cleaning and maintenance programs for educational facilities`,
            `Emergency response capabilities for ${location.name} school facility incidents`
          ];
          app.experience = employerMention
            ? `We provide ongoing janitorial services for ${location.name} educational institutions, including contracts with facilities like ${employerMention}. Our educational facility expertise ensures ${location.name} schools maintain clean, safe learning environments.`
            : `Our educational facility cleaning experience throughout ${location.name} demonstrates our ability to maintain the consistent cleanliness that schools and universities require.`;
        } else if (industry === "Retail") {
          app.title = `Retail & Shopping Center Cleaning in ${location.name}`;
          app.description = `${location.name}'s retail businesses need commercial cleaning that maintains inviting customer environments, works around operating hours, and addresses high-traffic area maintenance. Retail cleaning must enhance the shopping experience without disrupting business.`;
          app.requirements = [
            `Customer-focused cleaning maintaining attractive ${location.name} retail environments`,
            `After-hours or early morning schedules for minimal customer disruption`,
            `High-traffic area maintenance addressing ${location.name} retail wear patterns`,
            `Window and glass care maintaining crystal-clear display areas`,
            `Restroom sanitization meeting ${location.name} customer service standards`
          ];
          app.experience = `We serve ${location.name} retail businesses from individual stores to major shopping centers, consistently delivering the quality cleaning that enhances customer experience and protects retailer reputation.`;
        } else if (industry === "Food Processing" || industry === "Agriculture") {
          app.title = `Food Processing Facility Cleaning in ${location.name}`;
          app.description = `${location.name}'s food processing facilities require commercial cleaning that meets FDA, USDA, and local health department standards. Food facility cleaning must maintain GMP compliance, use food-safe products, and coordinate with 24/7 production schedules.`;
          app.requirements = [
            `FDA and USDA-compliant cleaning protocols for ${location.name} food facilities`,
            `Food-safe cleaning products and sanitation procedures`,
            `GMP documentation meeting ${location.state} food safety requirements`,
            `Coordination with ${location.name} plant managers and production schedules`,
            `Sanitation schedules minimizing production disruption while maintaining compliance`
          ];
          app.experience = `Our food processing facility experience in ${location.name} ensures food production environments meet all regulatory requirements while maintaining operational efficiency.`;
        } else if (industry === "Residential" || industry === "Residential Development" || industry === "Luxury Residential") {
          // Skip residential industry - we don't provide residential cleaning services
          return null;
        } else {
          app.title = `${industry} Commercial Cleaning in ${location.name}`;
          app.description = `${location.name}'s ${industry.toLowerCase()} businesses need commercial cleaning programs tailored to their specific operational requirements, facility types, and industry standards. Our ${industry.toLowerCase()} cleaning expertise ensures ${location.name} facilities receive appropriate specialized services.`;
          app.requirements = [
            `Industry-specific cleaning protocols for ${location.name} ${industry.toLowerCase()} facilities`,
            `Compliance with ${location.state} ${industry.toLowerCase()} sector standards`,
            `Coordination with ${location.name} ${industry.toLowerCase()} facility managers`,
            `Flexible scheduling accommodating ${industry.toLowerCase()} business operations`,
            `Quality standards meeting ${location.name} ${industry.toLowerCase()} industry expectations`
          ];
          app.experience = employerMention
            ? `Our ${industry.toLowerCase()} cleaning experience in ${location.name} includes ongoing relationships with organizations like ${employerMention}, demonstrating our understanding of this sector's unique needs.`
            : `We've served ${location.name}'s ${industry.toLowerCase()} sector with commercial cleaning programs that meet the industry's specific operational and maintenance requirements.`;
        }
      }

      return app;
    }).filter(app => app !== null).slice(0, 4),
    internalLinks: {
      complementary: getComplementaryServiceLink(service, location),
      similarIndustry: industries.slice(0, 2).flatMap(industry => 
        getSimilarIndustryLocations(service, location, industry, 2)
      ).slice(0, 3)
    }
  };
}
