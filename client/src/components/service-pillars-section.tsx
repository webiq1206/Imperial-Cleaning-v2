import { useState } from "react";
import { ChevronDown, Clock, Shield, Award, CheckCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import { trackEvent } from "@/lib/analytics";

export default function ServicePillarsSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleGetQuote = (service: string) => {
    trackEvent('get_quote', 'service_pillars', service);
    setShowContactForm(true);
  };

  const servicePillars = [
    {
      id: "post-construction-cleanup",
      title: "Post-Construction Cleanup Process",
      subtitle: "Boise Post-Construction Cleaning Excellence",
      icon: "fas fa-hard-hat",
      description: "Comprehensive Boise post-construction cleaning services with systematic 3-phase approach ensuring your Treasure Valley construction projects meet inspection standards and are ready for occupancy.",
      timeline: "48-72 hours typical completion",
      certification: "OSHA Certified • Bonded • Insured",
      processSteps: [
        {
          phase: "Phase 1: Rough Cleaning",
          duration: "Day 1",
          tasks: [
            "Complete debris removal and disposal in Boise area",
            "Heavy dust elimination with HEPA filtration systems",
            "Surface preparation and protection application",
            "Construction material cleanup and sorting"
          ]
        },
        {
          phase: "Phase 2: Detail Cleaning", 
          duration: "Day 2",
          tasks: [
            "Window cleaning inside/out with professional equipment",
            "Light fixture and ceiling fan cleaning",
            "Floor deep cleaning and protective coating",
            "Cabinet, trim, and surface detail cleaning"
          ]
        },
        {
          phase: "Phase 3: Final Inspection Ready",
          duration: "Day 3",
          tasks: [
            "Touch-up cleaning and quality inspection",
            "Floor protection installation for move-in",
            "Final walkthrough with project manager",
            "Completion certification and documentation"
          ]
        }
      ],
      equipment: [
        "Industrial HEPA filtration systems",
        "Commercial floor scrubbers and buffers", 
        "High-reach window cleaning equipment",
        "Specialized construction dust removal tools"
      ],
      serviceAreas: "Serving Boise, Meridian, Nampa, Caldwell, Eagle, Star, and surrounding Treasure Valley communities",
      guarantee: "100% satisfaction guarantee with 24-hour callback service"
    },
    {
      id: "commercial-office-maintenance",
      title: "Commercial Office Maintenance",
      subtitle: "Treasure Valley Commercial Janitorial Services",
      icon: "fas fa-building",
      description: "Professional Treasure Valley commercial janitorial services with flexible scheduling for Meridian office cleaning, Boise business maintenance, and comprehensive facility management.",
      timeline: "Daily/Weekly/Monthly schedules available",
      certification: "Green Certified • ISSA Member • Bonded",
      schedules: [
        {
          frequency: "Daily Office Cleaning",
          time: "After hours (6 PM - 6 AM)",
          services: [
            "Workstation sanitization and dusting",
            "Restroom cleaning and restocking", 
            "Kitchen/break room maintenance",
            "Trash removal and recycling",
            "Floor vacuuming and mopping"
          ]
        },
        {
          frequency: "Weekly Deep Cleaning",
          time: "Weekend service available",
          services: [
            "Conference room deep cleaning",
            "Window washing (interior)",
            "Carpet spot cleaning and treatment",
            "Light fixture and ceiling fan cleaning",
            "Furniture polishing and sanitization"
          ]
        },
        {
          frequency: "Monthly Maintenance",
          time: "Scheduled during off-hours",
          services: [
            "Floor stripping and waxing",
            "High dusting and ceiling cleaning", 
            "Window washing (exterior)",
            "Deep carpet cleaning and extraction",
            "HVAC vent cleaning and sanitization"
          ]
        }
      ],
      businessTypes: [
        "Corporate offices in Boise and Meridian",
        "Medical facilities and clinics",
        "Legal offices and professional services",
        "Technology companies in Eagle area"
      ],
      serviceAreas: "Meridian office cleaning services, Boise commercial cleaning, Eagle commercial maintenance, and throughout Ada County",
      guarantee: "Service quality audits and 48-hour issue resolution guarantee"
    },
    {
      id: "industrial-facility-cleaning",
      title: "Industrial Facility Cleaning",
      subtitle: "Nampa Industrial Cleaning & Manufacturing Support",
      icon: "fas fa-industry",
      description: "Specialized Nampa industrial cleaning services for manufacturing facilities, warehouses, and production environments throughout Canyon County and the greater Treasure Valley.",
      timeline: "24/7 scheduling to minimize production downtime",
      certification: "OSHA 30-Hour Certified • EPA Compliant • Safety Trained",
      facilityTypes: [
        {
          type: "Manufacturing Plants",
          location: "Nampa and Caldwell industrial zones",
          services: [
            "Production line cleaning and degreasing",
            "Equipment cleaning with food-grade solutions",
            "Floor cleaning with industrial-strength equipment",
            "Waste removal and hazardous material disposal"
          ]
        },
        {
          type: "Warehouse & Distribution Centers",
          location: "Throughout Canyon County",
          services: [
            "High-bay cleaning with specialized lift equipment",
            "Loading dock cleaning and maintenance",
            "Inventory area dust control and cleaning",
            "Office area maintenance within facilities"
          ]
        },
        {
          type: "Food Processing Facilities",
          location: "Idaho's agricultural centers",
          services: [
            "USDA-compliant sanitization procedures",
            "Cold storage and freezer cleaning",
            "Production equipment deep cleaning",
            "Food safety protocol implementation"
          ]
        }
      ],
      specialEquipment: [
        "Industrial pressure washers (up to 4000 PSI)",
        "Steam cleaning systems for sanitization",
        "High-reach boom lifts for warehouse cleaning",
        "Specialized chemical dispensing systems"
      ],
      compliance: [
        "OSHA safety standards compliance",
        "FDA food safety regulations", 
        "EPA environmental protection standards",
        "State of Idaho industrial cleaning requirements"
      ],
      serviceAreas: "Nampa industrial cleaning, Caldwell facility cleaning, and manufacturing support throughout the Treasure Valley",
      guarantee: "Zero production downtime commitment with emergency response capability"
    },
    {
      id: "emergency-cleanup-services",
      title: "Emergency Cleanup Services",
      subtitle: "24/7 Response in Ada County & Canyon County",
      icon: "fas fa-exclamation-triangle",
      description: "Rapid response emergency cleanup services available 24/7 throughout Ada County and Canyon County with 2-hour response time guarantee for urgent situations.",
      timeline: "2-hour response time guarantee",
      certification: "IICRC Certified • Hazmat Trained • Emergency Response Certified",
      emergencyTypes: [
        {
          type: "Water Damage & Flooding",
          response: "Immediate (1-2 hours)",
          coverage: "Boise, Meridian, Nampa metro areas",
          services: [
            "Water extraction and structural drying",
            "Mold prevention and treatment",
            "Content cleaning and restoration",
            "Insurance documentation and coordination"
          ]
        },
        {
          type: "Biohazard & Trauma Cleanup",
          response: "Immediate (2-4 hours)",
          coverage: "All Treasure Valley locations",
          services: [
            "Blood and bodily fluid cleanup",
            "Crime scene restoration",
            "Medical waste disposal",
            "Odor elimination and sanitization"
          ]
        },
        {
          type: "Chemical Spills & Hazmat",
          response: "Immediate (1-3 hours)",
          coverage: "Industrial areas of Canyon County",
          services: [
            "Chemical spill containment and cleanup",
            "Hazardous material disposal",
            "Air quality testing and remediation",
            "Regulatory compliance documentation"
          ]
        },
        {
          type: "Fire & Smoke Damage",
          response: "Same day (4-8 hours)", 
          coverage: "Greater Boise area and surrounding counties",
          services: [
            "Smoke odor elimination",
            "Soot removal and surface cleaning",
            "Content cleaning and restoration",
            "Structural cleaning and deodorization"
          ]
        }
      ],
      responseTeam: [
        "Certified emergency response technicians",
        "Hazmat-trained cleanup specialists",
        "Insurance claim documentation experts",
        "24/7 dispatch and coordination center"
      ],
      serviceAreas: "Emergency response covering Ada County, Canyon County, and extended Treasure Valley region",
      guarantee: "Certified response times with full insurance coordination and regulatory compliance"
    },
    {
      id: "green-cleaning-solutions",
      title: "Green Cleaning Solutions",
      subtitle: "Eco-Friendly Cleaning for Idaho & Utah Clients",
      icon: "fas fa-leaf",
      description: "Environmentally responsible cleaning solutions using EPA-approved, non-toxic products perfect for Idaho and Utah businesses committed to sustainability and employee health.",
      timeline: "Standard scheduling with eco-friendly processes",
      certification: "Green Seal Certified • EPA Safer Choice Partner • LEED Compliant",
      greenPrograms: [
        {
          program: "LEED Building Compliance",
          suitable: "Corporate offices and certified buildings",
          features: [
            "Green Seal certified cleaning products",
            "Microfiber technology reducing chemical usage",
            "Energy-efficient equipment and procedures",
            "Waste reduction and recycling programs"
          ]
        },
        {
          program: "Healthcare-Safe Cleaning",
          suitable: "Medical facilities and schools",
          features: [
            "EPA Safer Choice approved products",
            "Non-toxic disinfectants and sanitizers", 
            "Fragrance-free options for sensitive environments",
            "Reduced VOC emissions for indoor air quality"
          ]
        },
        {
          program: "Child-Safe Environments",
          suitable: "Schools, daycares, and family businesses",
          features: [
            "Plant-based cleaning formulations",
            "Non-toxic floor care products",
            "Safe surface sanitizers",
            "Allergy-conscious cleaning protocols"
          ]
        }
      ],
      ecoProducts: [
        "Biodegradable all-purpose cleaners",
        "Plant-based floor care solutions",
        "Non-toxic window and glass cleaners",
        "Enzyme-based carpet and upholstery cleaners"
      ],
      benefits: [
        "Improved indoor air quality",
        "Reduced chemical exposure for employees",
        "Support for LEED certification goals",
        "Environmentally responsible business practices"
      ],
      serviceAreas: "Green cleaning solutions available throughout Idaho and Utah for environmentally conscious businesses",
      guarantee: "Cleaning effectiveness guarantee with environmental safety compliance"
    },
    {
      id: "specialized-equipment-techniques",
      title: "Specialized Equipment & Techniques",
      subtitle: "Advanced Cleaning Technology & Professional Expertise",
      icon: "fas fa-cogs",
      description: "State-of-the-art cleaning equipment and advanced techniques ensuring superior results for complex cleaning challenges throughout the Treasure Valley region.",
      timeline: "Equipment deployed based on project requirements",
      certification: "Equipment Certified • ISSA Trained • Manufacturer Authorized",
      equipmentCategories: [
        {
          category: "Air Filtration & Dust Control",
          equipment: [
            "HEPA filtration systems (99.97% efficiency)",
            "Negative air machines for containment",
            "Industrial air scrubbers",
            "Dust collection and containment systems"
          ],
          applications: "Post-construction cleanup, renovation projects, industrial cleaning"
        },
        {
          category: "Floor Care Technology",
          equipment: [
            "Ride-on floor scrubbers with edge cleaning",
            "Burnishing machines for high-gloss finishes",
            "Steam cleaning systems for sanitization",
            "Diamond pad polishing systems"
          ],
          applications: "Commercial facilities, healthcare environments, retail spaces"
        },
        {
          category: "Pressure Washing Systems",
          equipment: [
            "Hot water pressure washers (up to 4000 PSI)",
            "Soft washing systems for delicate surfaces",
            "Water reclamation and filtration systems",
            "Specialized surface cleaning attachments"
          ],
          applications: "Building exterior cleaning, concrete restoration, equipment cleaning"
        },
        {
          category: "Window & High-Access Cleaning",
          equipment: [
            "Water-fed pole systems (up to 60 feet)",
            "Pure water filtration systems",
            "Aerial lift equipment for high-rise access",
            "Rope access systems for difficult locations"
          ],
          applications: "Commercial buildings, construction sites, industrial facilities"
        }
      ],
      techniques: [
        {
          technique: "Electrostatic Disinfection",
          description: "Positively charged disinfectant particles adhere to surfaces for 360-degree coverage",
          ideal: "Medical facilities, offices, schools requiring thorough sanitization"
        },
        {
          technique: "Color-Coded Cleaning Systems",
          description: "Prevents cross-contamination with designated equipment for different areas",
          ideal: "Healthcare facilities, food service areas, restrooms"
        },
        {
          technique: "Encapsulation Carpet Cleaning",
          description: "Low-moisture cleaning method encapsulating soil for easy removal",
          ideal: "Commercial carpets requiring minimal downtime"
        }
      ],
      safetyProtocols: [
        "OSHA-compliant safety procedures",
        "Personal protective equipment (PPE) requirements",
        "Equipment maintenance and inspection schedules",
        "Emergency response and first aid procedures"
      ],
      serviceAreas: "Advanced cleaning technology deployed throughout Idaho and Utah for specialized cleaning requirements",
      guarantee: "Equipment performance guarantee with certified operator training and maintenance"
    }
  ];

  return (
    <>
      <section id="service-pillars" className="py-24 px-6 services-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="resend-icon mx-auto mb-8 hover-lift-gentle animate-fade-in-up">
              <i className="fas fa-columns icon-gradient text-4xl"></i>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight">
              <span className="gradient-text-cyan-purple">Service Excellence Pillars</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-normal">
              Discover our comprehensive expertise in Boise post-construction cleaning, Treasure Valley commercial janitorial services, and specialized cleaning solutions throughout Idaho and Utah.
            </p>
          </div>

          {/* Service Pillars Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {servicePillars.map((pillar, index) => (
              <div 
                key={pillar.id}
                className={`group animate-fade-in-up stagger-delay-${index + 1}`}
                data-testid={`service-pillar-${pillar.id}`}
              >
                <div className="glass-card-premium sophisticated-glow hover-lift-moderate hover-glow-expand parallax-subtle p-8 rounded-lg">
                  {/* Pillar Header */}
                  <div className="flex items-start mb-6">
                    <div className="resend-icon mr-6 hover-lift-gentle group-hover:scale-105 transition-all duration-500">
                      <i className={`${pillar.icon} icon-gradient text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-medium mb-2 hover-lift-gentle" data-testid={`pillar-title-${pillar.id}`}>
                        {pillar.title}
                      </h3>
                      <p className="text-primary font-medium text-sm" data-testid={`pillar-subtitle-${pillar.id}`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Elegant divider */}
                  <div className="glass-divider-top mb-6"></div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`pillar-description-${pillar.id}`}>
                    {pillar.description}
                  </p>

                  {/* Quick Info Cards */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="glass-card-elevated p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-medium">Timeline</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{pillar.timeline}</p>
                    </div>
                    
                    <div className="glass-card-elevated p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Shield className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-medium">Certification</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{pillar.certification}</p>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="details" className="border-0">
                      <AccordionTrigger 
                        className="hover:no-underline p-4 glass-card-elevated rounded-lg hover-lift-gentle"
                        data-testid={`expand-details-${pillar.id}`}
                      >
                        <div className="flex items-center">
                          <Award className="h-4 w-4 text-primary mr-2" />
                          <span className="font-medium">View Detailed Process & Equipment</span>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="pt-4">
                        <div className="space-y-6">
                          {/* Process Steps (for construction cleanup) */}
                          {pillar.processSteps && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                Systematic Process Breakdown
                              </h4>
                              <div className="space-y-4">
                                {pillar.processSteps.map((step, stepIndex) => (
                                  <div key={stepIndex} className="glass-card-elevated p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-3">
                                      <h5 className="font-medium text-foreground">{step.phase}</h5>
                                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                                        {step.duration}
                                      </span>
                                    </div>
                                    <ul className="space-y-2">
                                      {step.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="flex items-start text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                          {task}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Schedules (for commercial cleaning) */}
                          {pillar.schedules && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                                <Clock className="h-4 w-4 text-primary mr-2" />
                                Flexible Service Schedules
                              </h4>
                              <div className="space-y-4">
                                {pillar.schedules.map((schedule, scheduleIndex) => (
                                  <div key={scheduleIndex} className="glass-card-elevated p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-3">
                                      <h5 className="font-medium text-foreground">{schedule.frequency}</h5>
                                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                                        {schedule.time}
                                      </span>
                                    </div>
                                    <ul className="space-y-2">
                                      {schedule.services.map((service, serviceIndex) => (
                                        <li key={serviceIndex} className="flex items-start text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                          {service}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Facility Types (for industrial cleaning) */}
                          {pillar.facilityTypes && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                                <i className="fas fa-industry w-4 h-4 text-primary mr-2"></i>
                                Specialized Facility Expertise
                              </h4>
                              <div className="space-y-4">
                                {pillar.facilityTypes.map((facility, facilityIndex) => (
                                  <div key={facilityIndex} className="glass-card-elevated p-4 rounded-lg">
                                    <div className="mb-3">
                                      <h5 className="font-medium text-foreground">{facility.type}</h5>
                                      <p className="text-xs text-primary">{facility.location}</p>
                                    </div>
                                    <ul className="space-y-2">
                                      {facility.services.map((service, serviceIndex) => (
                                        <li key={serviceIndex} className="flex items-start text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                          {service}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Emergency Types (for emergency services) */}
                          {pillar.emergencyTypes && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                                <i className="fas fa-ambulance w-4 h-4 text-primary mr-2"></i>
                                Emergency Response Capabilities
                              </h4>
                              <div className="space-y-4">
                                {pillar.emergencyTypes.map((emergency, emergencyIndex) => (
                                  <div key={emergencyIndex} className="glass-card-elevated p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-3">
                                      <h5 className="font-medium text-foreground">{emergency.type}</h5>
                                      <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded-full">
                                        {emergency.response}
                                      </span>
                                    </div>
                                    <p className="text-xs text-primary mb-3">{emergency.coverage}</p>
                                    <ul className="space-y-2">
                                      {emergency.services.map((service, serviceIndex) => (
                                        <li key={serviceIndex} className="flex items-start text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                          {service}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Green Programs (for green cleaning) */}
                          {pillar.greenPrograms && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                                <i className="fas fa-leaf w-4 h-4 text-green-400 mr-2"></i>
                                Environmental Programs
                              </h4>
                              <div className="space-y-4">
                                {pillar.greenPrograms.map((program, programIndex) => (
                                  <div key={programIndex} className="glass-card-elevated p-4 rounded-lg">
                                    <div className="mb-3">
                                      <h5 className="font-medium text-foreground">{program.program}</h5>
                                      <p className="text-xs text-green-400">{program.suitable}</p>
                                    </div>
                                    <ul className="space-y-2">
                                      {program.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                          {feature}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Equipment Categories (for specialized equipment) */}
                          {pillar.equipmentCategories && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                                <i className="fas fa-cogs w-4 h-4 text-primary mr-2"></i>
                                Professional Equipment Arsenal
                              </h4>
                              <div className="space-y-4">
                                {pillar.equipmentCategories.map((category, categoryIndex) => (
                                  <div key={categoryIndex} className="glass-card-elevated p-4 rounded-lg">
                                    <div className="mb-3">
                                      <h5 className="font-medium text-foreground">{category.category}</h5>
                                      <p className="text-xs text-primary">{category.applications}</p>
                                    </div>
                                    <ul className="space-y-2">
                                      {category.equipment.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Equipment List (simple list format) */}
                          {pillar.equipment && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                                <i className="fas fa-tools w-4 h-4 text-primary mr-2"></i>
                                Professional Equipment
                              </h4>
                              <div className="glass-card-elevated p-4 rounded-lg">
                                <ul className="space-y-2">
                                  {pillar.equipment.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Service Areas */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <i className="fas fa-map-marker-alt w-4 h-4 text-primary mr-2"></i>
                              Service Coverage Area
                            </h4>
                            <div className="glass-card-elevated p-4 rounded-lg">
                              <p className="text-sm text-muted-foreground">{pillar.serviceAreas}</p>
                            </div>
                          </div>

                          {/* Guarantee */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <Shield className="h-4 w-4 text-primary mr-2" />
                              Service Guarantee
                            </h4>
                            <div className="glass-card-elevated p-4 rounded-lg">
                              <p className="text-sm text-muted-foreground">{pillar.guarantee}</p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Elegant divider before button */}
                  <div className="glass-divider-top mb-6"></div>

                  {/* Call to Action */}
                  <Button 
                    variant="pill-secondary"
                    size="pill-lg"
                    className="w-full font-medium hover-lift-gentle button-ripple hover-shimmer group"
                    onClick={() => handleGetQuote(pillar.id)}
                    data-testid={`button-get-quote-${pillar.id}`}
                  >
                    Get Free Quote for {pillar.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="glass-card-premium sophisticated-glow p-8 rounded-lg animate-fade-in-up stagger-delay-7">
              <h3 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">
                Ready to Experience Imperial Cleaning Excellence?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Contact us today for a comprehensive consultation and discover how our specialized cleaning expertise can support your Treasure Valley business or construction project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="pill-primary"
                  size="pill-lg"
                  className="font-medium hover-lift-gentle button-ripple hover-shimmer"
                  onClick={() => handleGetQuote('consultation')}
                  data-testid="button-consultation"
                >
                  Schedule Free Consultation
                </Button>
                
                <Button 
                  variant="pill-secondary"
                  size="pill-lg"
                  className="font-medium hover-lift-gentle button-ripple hover-shimmer"
                  onClick={() => window.open('tel:+1-208-555-0123', '_self')}
                  data-testid="button-call-now"
                >
                  Call Now: (208) 555-0123
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showContactForm && (
        <ContactFormModal 
          isOpen={showContactForm} 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </>
  );
}