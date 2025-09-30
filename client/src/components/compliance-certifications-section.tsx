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
   id: "insurance-protection",
   title: "Insurance & Protection",
   icon: "fas fa-shield-alt",
   badge: "PROTECTED",
   status: "active",
   description: "Locally owned and operated company with comprehensive insurance coverage protecting your property and providing complete peace of mind for all commercial cleaning projects.",
   details: [
    {
     type: "General Liability Coverage",
     coverage: "Comprehensive protection",
     provider: "Licensed insurance coverage",
     status: "Active protection"
    },
    {
     type: "Workers' Compensation",
     coverage: "Full employee coverage",
     provider: "Professional insurance",
     status: "Complete compliance"
    },
    {
     type: "Property Protection",
     coverage: "Client property coverage",
     provider: "Bonding protection",
     status: "Current & verified"
    }
   ],
   keywords: "Insured cleaning company, professional cleaning services, reliable cleaning contractor"
  },
  {
   id: "safety-standards",
   title: "Safety Standards",
   icon: "fas fa-hard-hat",
   badge: "SAFETY FOCUSED",
   status: "current",
   description: "Professional safety operations with comprehensive training protocols ensuring accident prevention and safe practices across all service locations.",
   details: [
    {
     type: "Professional Safety Training",
     standard: "Comprehensive safety protocols",
     provider: "Professional training programs",
     status: "Ongoing education"
    },
    {
     type: "Hazmat Response Protocols",
     standard: "Specialized handling procedures",
     provider: "Safety training standards",
     status: "Regular training updates"
    },
    {
     type: "Health & Safety Procedures",
     standard: "Professional health protocols",
     provider: "Safety training programs",
     status: "Updated regularly"
    }
   ],
   keywords: "Safety compliant cleaning services, professional safety training, safe cleaning practices"
  },
  {
   id: "professional-standards",
   title: "Professional Standards",
   icon: "fas fa-medal",
   badge: "PROFESSIONAL",
   status: "established",
   description: "Locally-based professional cleaners with industry knowledge and specialized environmental cleaning practices demonstrating professional expertise.",
   details: [
    {
     type: "Industry Knowledge",
     standard: "Professional expertise",
     provider: "Industry experience",
     status: "Ongoing development"
    },
    {
     type: "Environmental Practices",
     standard: "Sustainable cleaning methods",
     provider: "Environmental responsibility",
     status: "Professional practices"
    },
    {
     type: "Specialized Training",
     standard: "Advanced cleaning techniques",
     provider: "Professional development",
     status: "Continuous improvement"
    }
   ],
   keywords: "professional commercial cleaners, experienced cleaning services, knowledgeable cleaning team"
  },
  {
   id: "local-compliance",
   title: "Licensed Operations",
   icon: "fas fa-map-marker-alt",
   badge: "LICENSED",
   status: "compliant",
   description: "Licensed cleaning contractor with full compliance across all service regions, meeting all municipal requirements for professional operations.",
   details: [
    {
     type: "Business Licensing",
     license: "Professional business license",
     provider: "State licensing requirements",
     status: "Current commercial license"
    },
    {
     type: "Local Permits",
     license: "Municipal business permits",
     provider: "Local compliance requirements",
     status: "Current permits"
    },
    {
     type: "Multi-State Operations",
     license: "Regional service authorization",
     provider: "State compliance",
     status: "Multi-state operations"
    }
   ],
   keywords: "licensed cleaning contractor, compliant cleaning services, professional cleaning operations"
  },
  {
   id: "quality-assurance",
   title: "Quality Assurance",
   icon: "fas fa-check-circle",
   badge: "QUALITY FOCUSED",
   status: "guaranteed",
   description: "Professional quality standards with comprehensive quality control processes ensuring customer satisfaction for reliable cleaning services throughout all service areas.",
   details: [
    {
     type: "Quality Management",
     standard: "Professional quality systems",
     provider: "Quality control processes",
     status: "Systematic operations"
    },
    {
     type: "Customer Satisfaction",
     policy: "100% Satisfaction Promise",
     provider: "Company commitment",
     status: "24-hour callback guarantee"
    },
    {
     type: "Quality Control",
     standard: "Multi-point inspection system",
     provider: "Internal quality department",
     status: "Every project verified"
    }
   ],
   keywords: "reliable cleaning services, quality guaranteed cleaning, customer satisfaction cleaning"
  },
  {
   id: "environmental-compliance",
   title: "Environmental Compliance",
   icon: "fas fa-leaf",
   badge: "ECO-CERTIFIED",
   status: "certified",
   description: "Environmentally responsible cleaning operations using eco-friendly products and sustainable practices while maintaining the highest professional cleaning standards.",
   details: [
    {
     type: "Green Cleaning Products",
     standard: "EPA-approved cleaning solutions",
     provider: "Environmental certification",
     status: "Eco-friendly operations"
    },
    {
     type: "Waste Management",
     protocol: "Sustainable disposal practices",
     provider: "Environmental compliance",
     status: "Responsible waste handling"
    },
    {
     type: "Resource Conservation",
     standard: "Water and energy efficiency",
     provider: "Sustainability practices",
     status: "Conservation protocols"
    }
   ],
   keywords: "eco-friendly cleaning services, green cleaning company, sustainable cleaning practices"
  }
 ];

 return (
  <>
   <section id="compliance" className="py-24 px-6 compliance-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
    <div className="max-w-7xl mx-auto">
     {/* Section Header */}
     <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass-effect sophisticated-glow">
       <Shield className="w-5 h-5 text-primary" />
       <span className="text-sm text-primary uppercase tracking-wider" data-testid="section-badge-compliance">
        Professional Standards & Compliance
       </span>
      </div>
      
      <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground" data-testid="heading-compliance-main">
       Professional & Reliable Cleaning Excellence
      </h2>
      
      <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-normal" data-testid="desc-compliance-main">
       Imperial Cleaning Inc. maintains the highest standards of professional service, safety, and quality assurance. 
       As a fully licensed and insured cleaning contractor serving all regional service areas, 
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
          <div className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider ${
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
         <h3 className="text-2xl lg:text-3xl mb-4 text-foreground" data-testid={`title-${category.id}`}>
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
              <h4 className=" text-foreground text-sm mb-1">
               {detail.type}
              </h4>
              {(detail as any).coverage && (
               <p className="text-primary text-sm mb-1">
                {(detail as any).coverage}
               </p>
              )}
              {(detail as any).certification && (
               <p className="text-primary text-sm mb-1">
                {(detail as any).certification}
               </p>
              )}
              {(detail as any).license && (
               <p className="text-primary text-sm mb-1">
                {(detail as any).license}
               </p>
              )}
              {(detail as any).policy && (
               <p className="text-primary text-sm mb-1">
                {(detail as any).policy}
               </p>
              )}
              {(detail as any).protocol && (
               <p className="text-primary text-sm mb-1">
                {(detail as any).protocol}
               </p>
              )}
              {(detail as any).standard && (
               <p className="text-primary text-sm mb-1">
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

         {/* Action Button */}
         <div className="mt-6">
          <Button
           variant="default"
           size="sm"
           onClick={() => handleContactClick(category.id)}
           className="w-full resend-gradient-button"
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
       <h3 className="text-2xl lg:text-3xl mb-4 text-foreground" data-testid="heading-trust-indicators">
        Verified Trust Indicators
       </h3>
       <p className="text-muted-foreground max-w-3xl mx-auto" data-testid="desc-trust-indicators">
        Imperial Cleaning Inc. undergoes regular third-party verification and maintains transparent compliance documentation 
        for all regional clients seeking trusted, professional cleaning services.
       </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
       <div className="text-center group" data-testid="indicator-insurance">
        <div className="resend-icon mb-4 group-hover:scale-105 transition-all duration-300">
         <Shield className="w-12 h-12 text-green-400 mx-auto" />
        </div>
        <h4 className=" text-foreground mb-2">Comprehensive Protection</h4>
        <p className="text-sm text-muted-foreground">Full liability coverage</p>
       </div>
       
       <div className="text-center group" data-testid="indicator-response">
        <div className="resend-icon mb-4 group-hover:scale-105 transition-all duration-300">
         <Clock className="w-12 h-12 text-blue-400 mx-auto" />
        </div>
        <h4 className=" text-foreground mb-2">Rapid Response</h4>
        <p className="text-sm text-muted-foreground">Professional service guarantee</p>
       </div>
       
       <div className="text-center group" data-testid="indicator-compliance">
        <div className="resend-icon mb-4 group-hover:scale-105 transition-all duration-300">
         <Award className="w-12 h-12 text-purple-400 mx-auto" />
        </div>
        <h4 className=" text-foreground mb-2">Professional Operations</h4>
        <p className="text-sm text-muted-foreground">Regional compliance</p>
       </div>
       
       <div className="text-center group" data-testid="indicator-availability">
        <div className="resend-icon mb-4 group-hover:scale-105 transition-all duration-300">
         <Globe className="w-12 h-12 text-cyan-400 mx-auto" />
        </div>
        <h4 className=" text-foreground mb-2">24/7 Availability</h4>
        <p className="text-sm text-muted-foreground">Always ready to serve</p>
       </div>
      </div>
     </div>

     {/* Service Area Compliance */}
     <div className="glass-effect rounded-lg p-8 text-center">
      <h3 className="text-xl lg:text-2xl mb-4 text-foreground" data-testid="heading-service-area-compliance">
       Local Compliance Across All Service Areas
      </h3>
      <p className="text-muted-foreground mb-6 max-w-4xl mx-auto" data-testid="desc-service-area-compliance">
       Imperial Cleaning Inc. maintains full compliance and certification in all service areas across our regional markets. 
       Our comprehensive licensing covers both commercial cleaning and post-construction cleanup services throughout all service regions.
      </p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
       {[
        "insured cleaning company",
        "professional janitorial services", 
        "commercial cleaning services",
        "licensed cleaning contractor",
        "safety compliant cleaning services",
        "trusted cleaning services"
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