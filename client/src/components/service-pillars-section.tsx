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
      subtitle: "Available in All Service Areas Across Idaho & Utah",
      icon: "fas fa-hard-hat",
      description: "Comprehensive post-construction cleaning services available in all Imperial Cleaning service areas with systematic 3-phase approach ensuring your construction projects meet inspection standards and are ready for occupancy.",
      certification: "Professional Standards • Quality Assured",
      processSteps: [
        {
          phase: "Phase 1: Rough Cleaning",
          tasks: [
            "Complete debris removal and disposal in all service areas",
            "Heavy dust elimination with HEPA filtration systems",
            "Surface preparation and protection application",
            "Construction material cleanup and sorting"
          ]
        },
        {
          phase: "Phase 2: Detail Cleaning", 
          tasks: [
            "Window cleaning inside/out with professional equipment",
            "Light fixture and ceiling fan cleaning",
            "Floor deep cleaning and protective coating",
            "Cabinet, trim, and surface detail cleaning"
          ]
        },
        {
          phase: "Phase 3: Final Inspection Ready",
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
      serviceAreas: "Available in all Imperial Cleaning service areas across Idaho and Utah",
      guarantee: "100% satisfaction guarantee with 24-hour callback service"
    },
    {
      id: "commercial-office-maintenance",
      title: "Commercial Office Maintenance",
      subtitle: "Available in All Service Areas Across Idaho & Utah",
      icon: "fas fa-building",
      description: "Professional commercial janitorial services available in all Imperial Cleaning service areas with flexible scheduling for office cleaning, business maintenance, and comprehensive facility management.",
      certification: "Environmentally Certified • Industry Member • Bonded",
      schedules: [
        {
          frequency: "Daily Office Cleaning",
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
        "Corporate offices in all service areas",
        "Medical facilities and clinics",
        "Legal offices and professional services",
        "Technology companies in all service areas"
      ],
      serviceAreas: "Available in all Imperial Cleaning service areas across Idaho and Utah",
      guarantee: "Service quality audits and 48-hour issue resolution guarantee"
    },
    {
      id: "industrial-facility-cleaning",
      title: "Industrial Facility Cleaning",
      subtitle: "Available in All Service Areas Across Idaho & Utah",
      icon: "fas fa-industry",
      description: "Specialized industrial cleaning services available in all Imperial Cleaning service areas for manufacturing facilities, warehouses, and production environments.",
      certification: "Safety Certified • Environmentally Compliant • Professional Training",
      facilityTypes: [
        {
          type: "Manufacturing Plants",
          location: "All Imperial Cleaning service areas",
          services: [
            "Production line cleaning and degreasing",
            "Equipment cleaning with food-grade solutions",
            "Floor cleaning with industrial-strength equipment",
            "Waste removal and hazardous material disposal"
          ]
        },
        {
          type: "Warehouse & Distribution Centers",
          location: "All Imperial Cleaning service areas",
          services: [
            "High-bay cleaning with specialized lift equipment",
            "Loading dock cleaning and maintenance",
            "Inventory area dust control and cleaning",
            "Office area maintenance within facilities"
          ]
        },
        {
          type: "Food Processing Facilities",
          location: "All Imperial Cleaning service areas",
          services: [
            "Federal-compliant sanitization procedures",
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
        "Safety standards compliance",
        "FDA food safety regulations", 
        "Environmental protection standards",
        "State of Idaho industrial cleaning requirements"
      ],
      serviceAreas: "Available in all Imperial Cleaning service areas across Idaho and Utah",
      guarantee: "Zero production downtime commitment"
    },
    {
      id: "specialized-equipment-techniques",
      title: "Specialized Equipment & Techniques",
      subtitle: "Advanced Cleaning Technology & Professional Expertise",
      icon: "fas fa-cogs",
      description: "State-of-the-art cleaning equipment and advanced techniques ensuring superior results for complex cleaning challenges throughout the Treasure Valley region.",
      certification: "Equipment Certified • Industry Trained • Manufacturer Authorized",
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
        "Safety-compliant safety procedures",
        "Personal protective equipment (PPE) requirements",
        "Equipment maintenance and inspection schedules",
        "First aid and safety response procedures"
      ],
      serviceAreas: "Advanced cleaning technology deployed in all Imperial Cleaning service areas across Idaho and Utah",
      guarantee: "Equipment performance guarantee with certified operator training and maintenance"
    }
  ];

  return (
    <>
      <section id="service-pillars" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 services-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="resend-icon mx-auto mb-8 hover-lift-gentle">
              <i className="fas fa-columns icon-gradient text-4xl"></i>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 sm:mb-8 tracking-tight leading-tight">
              <span className="gradient-text-cyan-purple">Service Excellence Pillars</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-normal px-2">
              Discover our comprehensive expertise in post-construction cleaning, commercial janitorial services, and specialized cleaning solutions for businesses across our service regions.
            </p>
          </div>

          {/* Service Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {servicePillars.map((pillar, index) => (
              <div 
                key={pillar.id}
                className="group"
                data-testid={`service-pillar-${pillar.id}`}
              >
                <div className="glass-card-premium sophisticated-glow hover-lift-moderate hover-glow-expand parallax-subtle p-4 sm:p-6 lg:p-8 rounded-lg">
                  {/* Pillar Header */}
                  <div className="flex flex-col sm:flex-row items-start mb-4 sm:mb-6">
                    <div className="resend-icon mb-3 sm:mb-0 sm:mr-4 lg:mr-6 hover-lift-gentle group-hover:scale-105 transition-all duration-500 self-center sm:self-start">
                      <i className={`${pillar.icon} icon-gradient text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-2 hover-lift-gentle break-words hyphens-auto" data-testid={`pillar-title-${pillar.id}`}>
                        {pillar.title}
                      </h3>
                      <p className="text-primary font-medium text-xs sm:text-sm break-words" data-testid={`pillar-subtitle-${pillar.id}`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Elegant divider */}
                  <div className="glass-divider-top mb-6"></div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed break-words" data-testid={`pillar-description-${pillar.id}`}>
                    {pillar.description}
                  </p>

                  {/* Quick Info Cards */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="glass-card-elevated p-3 sm:p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Shield className="h-4 w-4 text-primary mr-2" />
                        <span className="text-xs sm:text-sm font-medium">Certification</span>
                      </div>
                      <p className="text-xs text-muted-foreground break-words">{pillar.certification}</p>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <Accordion type="single" collapsible className="mb-4 sm:mb-6">
                    <AccordionItem value="details" className="border-0">
                      <AccordionTrigger 
                        className="hover:no-underline p-3 sm:p-4 glass-card-elevated rounded-lg hover-lift-gentle min-h-[48px] text-left"
                        data-testid={`expand-details-${pillar.id}`}
                      >
                        <div className="flex items-center flex-wrap">
                          <Award className="h-4 w-4 text-primary mr-2" />
                          <span className="font-light text-sm sm:text-base break-words">View Detailed Process & Equipment</span>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="pt-3 sm:pt-4">
                        <div className="space-y-4 sm:space-y-6">
                          {/* Process Steps (for construction cleanup) */}
                          {pillar.processSteps && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                Systematic Process Breakdown
                              </h4>
                              <div className="space-y-3 sm:space-y-4">
                                {pillar.processSteps.map((step, stepIndex) => (
                                  <div key={stepIndex} className="glass-card-elevated p-3 sm:p-4 rounded-lg">
                                    <div className="mb-2 sm:mb-3">
                                      <h5 className="font-medium text-foreground text-sm sm:text-base break-words">{step.phase}</h5>
                                    </div>
                                    <ul className="space-y-1 sm:space-y-2">
                                      {step.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                          <span className="break-words">{task}</span>
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
                              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                                <Clock className="h-4 w-4 text-primary mr-2" />
                                Flexible Service Schedules
                              </h4>
                              <div className="space-y-3 sm:space-y-4">
                                {pillar.schedules.map((schedule, scheduleIndex) => (
                                  <div key={scheduleIndex} className="glass-card-elevated p-3 sm:p-4 rounded-lg">
                                    <div className="mb-2 sm:mb-3">
                                      <h5 className="font-medium text-foreground text-sm sm:text-base break-words">{schedule.frequency}</h5>
                                    </div>
                                    <ul className="space-y-1 sm:space-y-2">
                                      {schedule.services.map((service, serviceIndex) => (
                                        <li key={serviceIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                          <span className="break-words">{service}</span>
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
                              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                                <i className="fas fa-industry w-4 h-4 text-primary mr-2"></i>
                                Specialized Facility Expertise
                              </h4>
                              <div className="space-y-3 sm:space-y-4">
                                {pillar.facilityTypes.map((facility, facilityIndex) => (
                                  <div key={facilityIndex} className="glass-card-elevated p-3 sm:p-4 rounded-lg">
                                    <div className="mb-2 sm:mb-3">
                                      <h5 className="font-medium text-foreground text-sm sm:text-base break-words">{facility.type}</h5>
                                      <p className="text-xs text-primary break-words">{facility.location}</p>
                                    </div>
                                    <ul className="space-y-1 sm:space-y-2">
                                      {facility.services.map((service, serviceIndex) => (
                                        <li key={serviceIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                          <span className="break-words">{service}</span>
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
                              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                                <i className="fas fa-cogs w-4 h-4 text-primary mr-2"></i>
                                Professional Equipment Arsenal
                              </h4>
                              <div className="space-y-3 sm:space-y-4">
                                {pillar.equipmentCategories.map((category, categoryIndex) => (
                                  <div key={categoryIndex} className="glass-card-elevated p-3 sm:p-4 rounded-lg">
                                    <div className="mb-2 sm:mb-3">
                                      <h5 className="font-medium text-foreground text-sm sm:text-base break-words">{category.category}</h5>
                                      <p className="text-xs text-primary break-words">{category.applications}</p>
                                    </div>
                                    <ul className="space-y-1 sm:space-y-2">
                                      {category.equipment.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                          <span className="break-words">{item}</span>
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
                              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                                <i className="fas fa-tools w-4 h-4 text-primary mr-2"></i>
                                Professional Equipment
                              </h4>
                              <div className="glass-card-elevated p-3 sm:p-4 rounded-lg">
                                <ul className="space-y-1 sm:space-y-2">
                                  {pillar.equipment.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                      <span className="break-words">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Service Areas */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                              <i className="fas fa-map-marker-alt w-4 h-4 text-primary mr-2"></i>
                              Service Coverage Area
                            </h4>
                            <div className="glass-card-elevated p-3 sm:p-4 rounded-lg">
                              <p className="text-xs sm:text-sm text-muted-foreground break-words">{pillar.serviceAreas}</p>
                            </div>
                          </div>

                          {/* Guarantee */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                              <Shield className="h-4 w-4 text-primary mr-2" />
                              Service Guarantee
                            </h4>
                            <div className="glass-card-elevated p-3 sm:p-4 rounded-lg">
                              <p className="text-xs sm:text-sm text-muted-foreground break-words">{pillar.guarantee}</p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Elegant divider before button */}
                  <div className="glass-divider-top mb-4 sm:mb-6"></div>

                  {/* Call to Action */}
                  <Button 
                    variant="pill-secondary"
                    size="pill-lg"
                    className="w-full font-medium hover-lift-gentle button-ripple hover-shimmer group text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4"
                    onClick={() => handleGetQuote(pillar.id)}
                    data-testid={`button-get-quote-${pillar.id}`}
                  >
                    <span className="break-words text-center">Get Free Quote for {pillar.title}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="glass-card-premium sophisticated-glow p-4 sm:p-6 lg:p-8 rounded-lg animate-fade-in-up stagger-delay-7">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-foreground break-words">
                Ready to Experience Imperial Cleaning Excellence?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto break-words px-2">
                Contact us today for a comprehensive consultation and discover how our specialized cleaning expertise can support your Treasure Valley business or construction project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  variant="pill-primary"
                  size="pill-lg"
                  className="font-medium hover-lift-gentle button-ripple hover-shimmer text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4"
                  onClick={() => handleGetQuote('consultation')}
                  data-testid="button-consultation"
                >
                  Schedule Free Consultation
                </Button>
                
                <Button 
                  variant="pill-secondary"
                  size="pill-lg"
                  className="font-medium hover-lift-gentle button-ripple hover-shimmer text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4"
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