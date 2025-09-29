import { useState } from "react";
import { Building, Factory, MapPin, Clock, CheckCircle, ArrowRight, Award, TrendingUp, Shield, Users, Star, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ContactFormModal from "@/components/contact-form-modal";
import { trackEvent } from "@/lib/analytics";

export default function CaseStudiesSection() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [expandedStudies, setExpandedStudies] = useState<Set<string>>(new Set());

  const handleGetQuote = (projectType: string) => {
    trackEvent('get_quote', 'case_studies', projectType);
    setShowContactForm(true);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    trackEvent('filter_case_studies', 'engagement', filter);
  };

  const toggleExpanded = (studyId: string) => {
    const newExpanded = new Set(expandedStudies);
    if (newExpanded.has(studyId)) {
      newExpanded.delete(studyId);
      trackEvent('collapse_case_study', 'engagement', studyId);
    } else {
      newExpanded.add(studyId);
      trackEvent('expand_case_study', 'engagement', studyId);
    }
    setExpandedStudies(newExpanded);
  };

  const isExpanded = (studyId: string) => expandedStudies.has(studyId);

  const getPreviewText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  const caseStudies = [
    {
      id: "boise-downtown-office",
      category: "construction",
      title: "Boise Downtown Office Complex",
      subtitle: "75,000 sq ft Post-Construction Cleanup Excellence",
      location: "Downtown Boise, ID",
      projectType: "Commercial Construction Cleanup",
      timeline: "Completed 2 days ahead of schedule",
      badge: "CONSTRUCTION",
      challenge: "A premier 15-story downtown Boise office complex required comprehensive post-construction cleaning after extensive renovations. Construction debris, dust contamination, and strict occupancy deadlines created a complex cleaning challenge with zero tolerance for delays.",
      solution: "Imperial Cleaning deployed a specialized 12-person crew with industrial HEPA systems, implementing our proven 3-phase construction cleanup process. We coordinated with general contractors to minimize disruption while ensuring thorough debris removal, deep cleaning, and final polish.",
      results: {
        timeline: "Completed in 4 days (2 days early)",
        area: "75,000 square feet cleaned",
        efficiency: "40% faster than industry standard",
        satisfaction: "100% client satisfaction rating"
      },
      metrics: [
        { label: "Square Footage", value: "75,000 sq ft", icon: "building" },
        { label: "Completion Time", value: "4 days", icon: "clock" },
        { label: "Cost Savings", value: "15% under budget", icon: "trending-up" },
        { label: "Client Rating", value: "5/5 stars", icon: "star" }
      ],
      testimonial: {
        quote: "Imperial Cleaning exceeded every expectation. Their systematic approach and attention to detail ensured our building was inspection-ready ahead of schedule. Professional, reliable, and incredibly thorough.",
        author: "Michael Chen",
        position: "Project Manager",
        company: "Treasure Valley Development Group"
      },
      beforeAfter: {
        before: "Construction site with heavy debris, dust contamination across all floors, window film residue, and unfinished surfaces requiring detailed cleaning throughout the 15-story complex.",
        after: "Pristine office environment ready for immediate occupancy with spotless windows, polished floors, sanitized surfaces, and air quality meeting strict commercial standards."
      },
      keywords: "Boise commercial cleaning project, downtown office complex cleaning, post-construction cleanup Boise"
    },
    {
      id: "meridian-manufacturing",
      category: "industrial",
      title: "Meridian Manufacturing Facility",
      subtitle: "Industrial Cleaning Transformation & Safety Enhancement",
      location: "Meridian, ID",
      projectType: "Manufacturing Facility Deep Clean",
      timeline: "Monthly maintenance program established",
      badge: "INDUSTRIAL",
      challenge: "A 200,000 sq ft Meridian manufacturing facility faced declining safety scores due to accumulated industrial contaminants, machinery buildup, and inadequate cleaning protocols. OSHA compliance concerns and production efficiency issues required immediate intervention.",
      solution: "Imperial Cleaning implemented a comprehensive industrial cleaning transformation program, including specialized degreasing, high-pressure washing, and establishment of ongoing maintenance protocols. Our OSHA-certified team used industrial-grade equipment and safety procedures.",
      results: {
        timeline: "Initial deep clean: 1 week",
        area: "200,000 square feet restored",
        safety: "OSHA compliance achieved",
        efficiency: "23% production efficiency improvement"
      },
      metrics: [
        { label: "Facility Size", value: "200,000 sq ft", icon: "building" },
        { label: "Safety Score", value: "OSHA Compliant", icon: "shield" },
        { label: "Efficiency Gain", value: "23% improvement", icon: "trending-up" },
        { label: "Program Duration", value: "Ongoing since 2023", icon: "calendar" }
      ],
      testimonial: {
        quote: "The transformation has been remarkable. Our safety scores improved dramatically, production efficiency increased, and employee satisfaction is at an all-time high. Imperial Cleaning truly understands industrial environments.",
        author: "Sarah Rodriguez",
        position: "Facilities Director", 
        company: "Meridian Precision Manufacturing"
      },
      beforeAfter: {
        before: "Heavy machinery contamination, oil residue throughout production areas, poor air quality, accumulated industrial dust, and surfaces that hadn't been properly cleaned in years.",
        after: "Pristine manufacturing environment with spotless machinery, improved air quality, slip-resistant floors, and comprehensive cleaning protocols maintaining continuous high standards."
      },
      keywords: "Meridian office cleaning results, industrial cleaning transformation, manufacturing facility cleaning Idaho"
    },
    {
      id: "eagle-corporate-headquarters",
      category: "commercial",
      title: "Eagle Corporate Headquarters",
      subtitle: "Luxury Office Maintenance Program Excellence",
      location: "Eagle, ID",
      projectType: "Executive Office Maintenance",
      timeline: "18-month premium service agreement",
      badge: "COMMERCIAL",
      challenge: "A prestigious Eagle corporate headquarters demanded the highest standards of cleanliness for executive offices, conference facilities, and client reception areas. Previous cleaning services failed to maintain luxury standards expected by C-level executives and important clients.",
      solution: "Imperial Cleaning developed a custom luxury office maintenance program with daily, weekly, and monthly service tiers. Our trained professionals use premium cleaning products and white-glove techniques to maintain impeccable standards throughout the facility.",
      results: {
        timeline: "Perfect service record: 18 months",
        area: "45,000 square feet maintained",
        satisfaction: "Zero complaints received",
        renewal: "Contract extended through 2026"
      },
      metrics: [
        { label: "Service Period", value: "18 months", icon: "calendar" },
        { label: "Office Space", value: "45,000 sq ft", icon: "building" },
        { label: "Satisfaction Rate", value: "100%", icon: "star" },
        { label: "Contract Status", value: "Extended to 2026", icon: "check-circle" }
      ],
      testimonial: {
        quote: "Imperial Cleaning has become an extension of our team. Their attention to detail and professionalism reflects the standards we expect in our corporate environment. Consistently excellent service.",
        author: "James Patterson",
        position: "Chief Operations Officer",
        company: "Eagle Financial Partners"
      },
      beforeAfter: {
        before: "Standard office cleaning that didn't meet executive standards, inconsistent service quality, missed details in high-visibility areas, and frequent client complaints about facility appearance.",
        after: "Impeccable luxury office environment with consistently spotless executive suites, conference rooms that impress clients, and maintained premium standards throughout all areas."
      },
      keywords: "Eagle corporate cleaning services, luxury office maintenance Idaho, executive office cleaning Treasure Valley"
    },
    {
      id: "utah-construction-projects",
      category: "construction",
      title: "Utah Multi-Site Construction Projects",
      subtitle: "Large-Scale Construction Cleanup Across Multiple Locations",
      location: "Salt Lake City & Provo, UT",
      projectType: "Multi-State Construction Program",
      timeline: "6-month multi-project program",
      badge: "MULTI-STATE",
      challenge: "A major construction company required reliable post-construction cleanup services across multiple Utah locations simultaneously. Coordinating resources, maintaining quality standards, and meeting tight deadlines across different sites presented significant logistical challenges.",
      solution: "Imperial Cleaning established dedicated Utah operations with local project managers and specialized crews. Our multi-state capabilities enabled consistent service delivery across all locations while maintaining our Idaho-proven quality standards and processes.",
      results: {
        timeline: "All 8 projects completed on schedule",
        area: "Combined 400,000 square feet",
        efficiency: "Multi-state operations seamless",
        expansion: "Utah operations permanently established"
      },
      metrics: [
        { label: "Projects Completed", value: "8 locations", icon: "building" },
        { label: "Total Area", value: "400,000 sq ft", icon: "users" },
        { label: "Schedule Performance", value: "100% on-time", icon: "clock" },
        { label: "Geographic Reach", value: "Multi-state", icon: "award" }
      ],
      testimonial: {
        quote: "Imperial Cleaning's ability to scale across state lines while maintaining their exceptional quality standards is impressive. They've become our go-to partner for construction cleanup throughout the region.",
        author: "Amanda Thompson",
        position: "Regional Construction Manager",
        company: "Mountain West Builders"
      },
      beforeAfter: {
        before: "Multiple construction sites across Utah requiring coordination, consistent quality standards, complex logistics for multi-location service delivery, and tight project deadlines.",
        after: "Successfully completed construction cleanup across all Utah locations with consistent quality, on-time delivery, and established permanent multi-state operations capability."
      },
      keywords: "Utah construction cleanup, multi-state cleaning services, large-scale construction cleaning"
    },
    {
      id: "treasure-valley-healthcare",
      category: "healthcare",
      title: "Treasure Valley Healthcare Facility",
      subtitle: "Specialized Medical Cleaning & Compliance Standards",
      location: "Boise, ID",
      projectType: "Medical Facility Specialized Cleaning",
      timeline: "Ongoing compliance program since 2022",
      badge: "HEALTHCARE",
      challenge: "A critical healthcare facility in the Treasure Valley required specialized cleaning services meeting strict medical standards, infection control protocols, and regulatory compliance. Standard cleaning approaches were insufficient for sensitive medical environments.",
      solution: "Imperial Cleaning developed comprehensive medical facility cleaning protocols with specialized training for healthcare environments. Our team maintains certifications in bloodborne pathogen handling, medical waste disposal, and infection control procedures.",
      results: {
        timeline: "2+ years of perfect compliance",
        area: "Healthcare facility fully compliant",
        standards: "All regulatory requirements met",
        recognition: "Facility commendation received"
      },
      metrics: [
        { label: "Compliance Record", value: "100% since 2022", icon: "shield" },
        { label: "Medical Standards", value: "Fully certified", icon: "award" },
        { label: "Inspection Results", value: "Zero violations", icon: "check-circle" },
        { label: "Program Duration", value: "2+ years ongoing", icon: "calendar" }
      ],
      testimonial: {
        quote: "Imperial Cleaning understands the critical nature of medical facility cleaning. Their specialized protocols and attention to compliance have been essential to our operational success and patient safety.",
        author: "Dr. Maria Gonzalez",
        position: "Chief Medical Officer",
        company: "Treasure Valley Medical Center"
      },
      beforeAfter: {
        before: "Healthcare facility requiring specialized medical cleaning protocols, strict compliance with health regulations, infection control measures, and medical waste handling procedures.",
        after: "Fully compliant medical facility with specialized cleaning protocols, perfect regulatory compliance record, enhanced infection control, and recognition for outstanding standards."
      },
      keywords: "Treasure Valley healthcare cleaning, medical facility cleaning Idaho, Idaho commercial cleaning expertise"
    }
  ];

  const filteredCaseStudies = selectedFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedFilter);

  const filters = [
    { id: "all", label: "All Projects", count: caseStudies.length },
    { id: "construction", label: "Construction", count: caseStudies.filter(s => s.category === "construction").length },
    { id: "commercial", label: "Commercial", count: caseStudies.filter(s => s.category === "commercial").length },
    { id: "industrial", label: "Industrial", count: caseStudies.filter(s => s.category === "industrial").length },
    { id: "healthcare", label: "Healthcare", count: caseStudies.filter(s => s.category === "healthcare").length }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "construction": return "text-orange-400 border-orange-400/20 bg-orange-400/10";
      case "commercial": return "text-blue-400 border-blue-400/20 bg-blue-400/10";
      case "industrial": return "text-purple-400 border-purple-400/20 bg-purple-400/10";
      case "healthcare": return "text-green-400 border-green-400/20 bg-green-400/10";
      default: return "text-cyan-400 border-cyan-400/20 bg-cyan-400/10";
    }
  };

  const getMetricIcon = (iconType: string) => {
    switch (iconType) {
      case "building": return <Building className="w-4 h-4" />;
      case "clock": return <Clock className="w-4 h-4" />;
      case "trending-up": return <TrendingUp className="w-4 h-4" />;
      case "star": return <Star className="w-4 h-4" />;
      case "shield": return <Shield className="w-4 h-4" />;
      case "calendar": return <Calendar className="w-4 h-4" />;
      case "check-circle": return <CheckCircle className="w-4 h-4" />;
      case "award": return <Award className="w-4 h-4" />;
      case "users": return <Users className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <>
      <section id="case-studies" className="py-24 px-6 case-studies-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass-effect sophisticated-glow">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider" data-testid="section-badge-case-studies">
                Case Studies & Project Spotlights
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground" data-testid="heading-case-studies-main">
              Proven <span className="gradient-text-cyan-purple">Excellence</span> Across Idaho & Utah
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-normal" data-testid="desc-case-studies-main">
              Discover how Imperial Cleaning Inc. delivers exceptional results across diverse projects in the Treasure Valley and beyond. 
              From Boise commercial cleaning projects to large-scale Utah construction cleanup, our expertise speaks through measurable outcomes.
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-lift-gentle ${
                  selectedFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "glass-effect text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`filter-${filter.id}`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {filteredCaseStudies.map((study, index) => (
              <Collapsible
                key={study.id}
                open={isExpanded(study.id)}
                onOpenChange={() => toggleExpanded(study.id)}
                className={`glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand parallax-subtle rounded-lg overflow-hidden group animate-fade-in-up stagger-delay-${index + 1}`}
                data-testid={`case-study-card-${study.id}`}
              >
                {/* Collapsed Content - Always Visible */}
                <div className="p-6 lg:p-8">
                  {/* Header with badges */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(study.category)}`} data-testid={`badge-${study.id}`}>
                        {study.badge}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {study.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {study.timeline}
                    </div>
                  </div>

                  {/* Title and subtitle */}
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300" data-testid={`title-${study.id}`}>
                    {study.title}
                  </h3>
                  <p className="text-base lg:text-lg text-primary mb-4 font-medium" data-testid={`subtitle-${study.id}`}>
                    {study.subtitle}
                  </p>

                  {/* Preview of challenge */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">Challenge Preview</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm" data-testid={`challenge-preview-${study.id}`}>
                      {getPreviewText(study.challenge)}
                    </p>
                  </div>

                  {/* Expand/Collapse Button */}
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-sm font-medium hover:bg-muted/50 transition-all duration-300 mt-4 px-4 py-4 min-h-[48px] rounded-lg border border-border/50 hover:border-border group/trigger touch-manipulation"
                      data-testid={`toggle-${study.id}`}
                    >
                      <span>
                        {isExpanded(study.id) ? 'Show Less Details' : 'Show Full Details'}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {isExpanded(study.id) ? 'Collapse' : 'Expand'}
                        </span>
                        {isExpanded(study.id) ? (
                          <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover/trigger:scale-110" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/trigger:scale-110" />
                        )}
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                </div>

                {/* Expandable Content */}
                <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-up-2 data-[state=open]:slide-down-2">
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                    {/* Elegant divider */}
                    <div className="glass-divider-top mb-6"></div>

                    {/* Full Challenge & Solution */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">Full Challenge</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm" data-testid={`challenge-${study.id}`}>
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">Our Solution</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm" data-testid={`solution-${study.id}`}>
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Project Results</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {study.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="glass-effect p-3 rounded-lg hover-lift-gentle group/metric">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="text-primary group-hover/metric:scale-110 transition-transform duration-300">
                                {getMetricIcon(metric.icon)}
                              </div>
                              <span className="text-xs text-muted-foreground font-medium">{metric.label}</span>
                            </div>
                            <div className="text-sm font-semibold text-foreground" data-testid={`metric-${study.id}-${metricIndex}`}>
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Before/After Narrative */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Transformation</h4>
                      <div>
                        <h5 className="text-xs font-semibold text-red-400 mb-1 uppercase tracking-wider">Before</h5>
                        <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`before-${study.id}`}>
                          {study.beforeAfter.before}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-green-400 mb-1 uppercase tracking-wider">After</h5>
                        <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`after-${study.id}`}>
                          {study.beforeAfter.after}
                        </p>
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="glass-effect p-4 rounded-lg mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Client Testimonial</h4>
                      <blockquote className="text-foreground text-sm leading-relaxed mb-3 italic" data-testid={`testimonial-quote-${study.id}`}>
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-foreground text-sm" data-testid={`testimonial-author-${study.id}`}>
                            {study.testimonial.author}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {study.testimonial.position}, {study.testimonial.company}
                          </div>
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => handleGetQuote(study.category)}
                      className="w-full group/cta hover-lift-gentle bg-primary hover:bg-primary/90 text-primary-foreground"
                      data-testid={`cta-${study.id}`}
                    >
                      Get Similar Results
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          {/* Trust Building Summary */}
          <div className="text-center">
            <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-foreground">
                Proven Track Record Across Idaho & Utah
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center hover-lift-gentle group" data-testid="summary-stat-projects">
                  <div className="text-3xl font-bold gradient-text-cyan-purple mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center hover-lift-gentle group" data-testid="summary-stat-states">
                  <div className="text-3xl font-bold gradient-text-cyan-purple mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
                  <div className="text-sm text-muted-foreground">States Served</div>
                </div>
                <div className="text-center hover-lift-gentle group" data-testid="summary-stat-sqft">
                  <div className="text-3xl font-bold gradient-text-cyan-purple mb-2 group-hover:scale-110 transition-transform duration-300">1M+</div>
                  <div className="text-sm text-muted-foreground">Square Feet Cleaned</div>
                </div>
                <div className="text-center hover-lift-gentle group" data-testid="summary-stat-satisfaction">
                  <div className="text-3xl font-bold gradient-text-cyan-purple mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
              <Button
                onClick={() => handleGetQuote("comprehensive")}
                variant="default"
                size="lg"
                className="hover-lift-moderate button-ripple"
                data-testid="cta-main-case-studies"
              >
                Start Your Success Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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