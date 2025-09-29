import { useState } from "react";
import { Shield, CheckCircle, Award, FileCheck, AlertTriangle, Phone, Download, ArrowRight, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import { trackEvent } from "@/lib/analytics";

export default function ComplianceCertificationsSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = (source: string) => {
    trackEvent('contact_compliance', 'engagement', source);
    setShowContactForm(true);
  };

  const handleDownloadClick = (document: string) => {
    trackEvent('download_compliance_doc', 'document', document);
    // In a real implementation, this would trigger actual document downloads
  };

  const complianceCategories = [
    {
      id: "insurance-bonding",
      title: "Insurance & Bonding",
      icon: "fas fa-shield-alt",
      badge: "VERIFIED",
      status: "active",
      description: "Comprehensive insurance coverage protecting your property and providing complete peace of mind for Boise commercial cleaning projects.",
      details: [
        {
          type: "General Liability Insurance",
          coverage: "$2,000,000 per occurrence",
          provider: "Commercial Insurance Partners",
          status: "Active through 2026"
        },
        {
          type: "Workers' Compensation",
          coverage: "$1,000,000 per employee",
          provider: "Idaho State Fund",
          status: "Full compliance"
        },
        {
          type: "Commercial Bonding",
          coverage: "$500,000 aggregate",
          provider: "Surety Bond Solutions",
          status: "Current & verified"
        }
      ],
      keywords: "Boise insured cleaning company, Treasure Valley bonded janitorial services, Idaho insured contractor"
    },
    {
      id: "safety-certifications",
      title: "Safety Certifications",
      icon: "fas fa-hard-hat",
      badge: "OSHA CERTIFIED",
      status: "current",
      description: "OSHA compliant cleaning Nampa operations with comprehensive safety training protocols ensuring accident prevention across all Treasure Valley locations.",
      details: [
        {
          type: "OSHA 30-Hour Construction",
          certification: "Certificate #OS30-2024-ID-1847",
          provider: "US Department of Labor",
          status: "Current through 2026"
        },
        {
          type: "Hazmat Response Training",
          certification: "Level 2 Hazmat Certified",
          provider: "National Safety Council",
          status: "Annual recertification"
        },
        {
          type: "Bloodborne Pathogen Training",
          certification: "BBP-CERT-2024-IC",
          provider: "American Red Cross",
          status: "Updated annually"
        }
      ],
      keywords: "OSHA compliant cleaning Nampa, safety certified cleaning Idaho, professional safety training"
    },
    {
      id: "industry-certifications",
      title: "Industry Certifications",
      icon: "fas fa-certificate",
      badge: "ISSA MEMBER",
      status: "certified",
      description: "Certified commercial cleaners Meridian with ISSA membership and specialized green cleaning certifications demonstrating industry expertise.",
      details: [
        {
          type: "ISSA Membership",
          certification: "Member #ID-2847-2024",
          provider: "International Sanitary Supply Association",
          status: "Active member since 2020"
        },
        {
          type: "Green Building Certification",
          certification: "LEED Green Associate",
          provider: "US Green Building Council",
          status: "Certified professional"
        },
        {
          type: "Carpet & Fabric Care",
          certification: "IICRC WRT Certified",
          provider: "Institute of Inspection Cleaning",
          status: "Water Restoration Technician"
        }
      ],
      keywords: "certified commercial cleaners Meridian, ISSA member cleaning Idaho, green certified cleaning"
    },
    {
      id: "local-compliance",
      title: "Local Compliance",
      icon: "fas fa-map-marker-alt",
      badge: "LICENSED",
      status: "compliant",
      description: "Licensed cleaning contractor Idaho with full compliance in both Idaho and Utah, meeting all municipal requirements for Boise area operations.",
      details: [
        {
          type: "Idaho State Business License",
          license: "IBL-47291-2024-IC",
          provider: "Idaho Secretary of State",
          status: "Active through December 2025"
        },
        {
          type: "Ada County Business Permit",
          license: "ADA-BP-2024-8472",
          provider: "Ada County Clerk",
          status: "Current commercial permit"
        },
        {
          type: "Utah Contractor License",
          license: "UCL-9483-COM-2024",
          provider: "Utah Division of Occupational Licensing",
          status: "Multi-state operations"
        }
      ],
      keywords: "licensed cleaning contractor Idaho, Boise business permit cleaning, Utah licensed cleaning"
    },
    {
      id: "quality-standards",
      title: "Quality Standards",
      icon: "fas fa-medal",
      badge: "ISO COMPLIANT",
      status: "certified",
      description: "ISO quality management standards with comprehensive quality control processes ensuring customer satisfaction for trusted cleaning services Eagle and throughout the Treasure Valley.",
      details: [
        {
          type: "ISO 9001:2015 Compliance",
          certification: "Quality Management System",
          provider: "International Organization for Standardization",
          status: "Compliant operations"
        },
        {
          type: "Customer Satisfaction Guarantee",
          policy: "100% Satisfaction Promise",
          provider: "Imperial Cleaning Inc Policy",
          status: "24-hour callback guarantee"
        },
        {
          type: "Quality Control Process",
          standard: "Multi-point inspection system",
          provider: "Internal QC Department",
          status: "Every project verified"
        }
      ],
      keywords: "trusted cleaning services Eagle, quality guaranteed cleaning Boise, customer satisfaction cleaning"
    },
    {
      id: "emergency-protocols",
      title: "Emergency Protocols",
      icon: "fas fa-exclamation-triangle",
      badge: "24/7 RESPONSE",
      status: "available",
      description: "Comprehensive emergency response procedures with 24/7 availability and rapid incident management across all Treasure Valley cleaning operations.",
      details: [
        {
          type: "Emergency Response Plan",
          protocol: "2-hour response guarantee",
          coverage: "All Treasure Valley locations",
          status: "24/7 dispatch center"
        },
        {
          type: "Incident Management System",
          protocol: "Immediate notification & response",
          coverage: "Boise, Meridian, Nampa coverage",
          status: "Full documentation process"
        },
        {
          type: "After-Hours Availability",
          protocol: "Emergency cleaning services",
          coverage: "Ada County & Canyon County",
          status: "Always available"
        }
      ],
      keywords: "24/7 emergency cleaning Boise, rapid response cleaning Idaho, emergency cleaning services"
    }
  ];

  return (
    <>
      <section className="py-24 px-6 compliance-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass-effect sophisticated-glow">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider" data-testid="section-badge-compliance">
                Industry Compliance & Certifications
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground" data-testid="heading-compliance-main">
              Trusted & Certified Cleaning Excellence
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-normal" data-testid="desc-compliance-main">
              Imperial Cleaning Inc. maintains the highest standards of professional compliance, safety, and quality assurance. 
              As a fully licensed, insured, and certified cleaning contractor serving Boise, Meridian, Nampa, and the entire Treasure Valley, 
              we provide complete transparency and peace of mind for every commercial and construction cleaning project.
            </p>
          </div>

          {/* Compliance Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {complianceCategories.map((category, index) => (
              <div 
                key={category.id} 
                className={`group animate-fade-in-up stagger-delay-${index + 1}`}
                data-testid={`compliance-card-${category.id}`}
              >
                <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand parallax-subtle p-8 rounded-lg h-full flex flex-col">
                  {/* Header with Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="resend-icon hover-lift-gentle group-hover:scale-105 transition-all duration-500">
                      <i className={`${category.icon} icon-gradient text-3xl`}></i>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                      category.status === 'active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      category.status === 'current' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      category.status === 'certified' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      category.status === 'compliant' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`} data-testid={`badge-${category.id}`}>
                      {category.badge}
                    </div>
                  </div>

                  {/* Elegant divider */}
                  <div className="glass-divider-top mb-6"></div>

                  {/* Title and Description */}
                  <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" data-testid={`title-${category.id}`}>
                    {category.title}
                  </h3>
                  
                  <div className="glass-divider-top mb-4"></div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`desc-${category.id}`}>
                    {category.description}
                  </p>

                  {/* Compliance Details */}
                  <div className="space-y-4 flex-grow">
                    {category.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex} 
                        className="glass-effect rounded-lg p-4 hover:bg-white/5 transition-all duration-300"
                        data-testid={`detail-${category.id}-${detailIndex}`}
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div className="flex-grow">
                            <h4 className="font-medium text-foreground text-sm mb-1">
                              {detail.type}
                            </h4>
                            {(detail as any).coverage && (
                              <p className="text-primary text-sm font-medium mb-1">
                                {(detail as any).coverage}
                              </p>
                            )}
                            {(detail as any).certification && (
                              <p className="text-primary text-sm font-medium mb-1">
                                {(detail as any).certification}
                              </p>
                            )}
                            {(detail as any).license && (
                              <p className="text-primary text-sm font-medium mb-1">
                                {(detail as any).license}
                              </p>
                            )}
                            {(detail as any).policy && (
                              <p className="text-primary text-sm font-medium mb-1">
                                {(detail as any).policy}
                              </p>
                            )}
                            {(detail as any).protocol && (
                              <p className="text-primary text-sm font-medium mb-1">
                                {(detail as any).protocol}
                              </p>
                            )}
                            {(detail as any).standard && (
                              <p className="text-primary text-sm font-medium mb-1">
                                {(detail as any).standard}
                              </p>
                            )}
                            <p className="text-muted-foreground text-xs">
                              {(detail as any).provider || (detail as any).coverage || 'Provider'} • {detail.status}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadClick(category.title)}
                      className="flex-1 glass-effect hover:bg-white/10 border-white/20"
                      data-testid={`button-download-${category.id}`}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Documentation
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleContactClick(category.id)}
                      className="flex-1 resend-gradient-button"
                      data-testid={`button-verify-${category.id}`}
                    >
                      <FileCheck className="w-4 h-4 mr-2" />
                      Verify
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators Section */}
          <div className="glass-card-premium sophisticated-glow rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" data-testid="heading-trust-indicators">
                Verified Trust Indicators
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto" data-testid="desc-trust-indicators">
                Imperial Cleaning Inc. undergoes regular third-party verification and maintains transparent compliance documentation 
                for all Boise area clients seeking trusted, professional cleaning services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group" data-testid="indicator-insurance">
                <div className="resend-icon mb-4 group-hover:scale-105 transition-all duration-300">
                  <Shield className="w-12 h-12 text-green-400 mx-auto" />
                </div>
                <h4 className="font-medium text-foreground mb-2">$2M+ Insurance Coverage</h4>
                <p className="text-sm text-muted-foreground">Comprehensive liability protection</p>
              </div>
              
              <div className="text-center group" data-testid="indicator-response">
                <div className="resend-icon mb-4 group-hover:scale-105 transition-all duration-300">
                  <Clock className="w-12 h-12 text-blue-400 mx-auto" />
                </div>
                <h4 className="font-medium text-foreground mb-2">2-Hour Response</h4>
                <p className="text-sm text-muted-foreground">Emergency service guarantee</p>
              </div>
              
              <div className="text-center group" data-testid="indicator-compliance">
                <div className="resend-icon mb-4 group-hover:scale-105 transition-all duration-300">
                  <Award className="w-12 h-12 text-purple-400 mx-auto" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Multi-State Licensed</h4>
                <p className="text-sm text-muted-foreground">Idaho & Utah compliance</p>
              </div>
              
              <div className="text-center group" data-testid="indicator-availability">
                <div className="resend-icon mb-4 group-hover:scale-105 transition-all duration-300">
                  <Globe className="w-12 h-12 text-cyan-400 mx-auto" />
                </div>
                <h4 className="font-medium text-foreground mb-2">24/7 Availability</h4>
                <p className="text-sm text-muted-foreground">Always ready to serve</p>
              </div>
            </div>
          </div>

          {/* Service Area Compliance */}
          <div className="glass-effect rounded-lg p-8 text-center">
            <h3 className="text-xl lg:text-2xl font-medium mb-4 text-foreground" data-testid="heading-service-area-compliance">
              Local Compliance Across the Treasure Valley
            </h3>
            <p className="text-muted-foreground mb-6 max-w-4xl mx-auto" data-testid="desc-service-area-compliance">
              Imperial Cleaning Inc. maintains full compliance and certification in all service areas including Boise, Meridian, Nampa, Caldwell, Eagle, Star, and Kuna. 
              Our comprehensive licensing covers both commercial cleaning and post-construction cleanup services throughout Idaho and Utah.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                "Boise insured cleaning company",
                "Treasure Valley bonded janitorial services", 
                "certified commercial cleaners Meridian",
                "licensed cleaning contractor Idaho",
                "OSHA compliant cleaning Nampa",
                "trusted cleaning services Eagle"
              ].map((keyword, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground"
                  data-testid={`keyword-${index}`}
                >
                  {keyword}
                </span>
              ))}
            </div>
            
            <Button
              onClick={() => handleContactClick('service-area-verification')}
              className="resend-gradient-button"
              data-testid="button-verify-compliance"
            >
              <Phone className="w-4 h-4 mr-2" />
              Verify Our Compliance
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <ContactFormModal 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </>
  );
}