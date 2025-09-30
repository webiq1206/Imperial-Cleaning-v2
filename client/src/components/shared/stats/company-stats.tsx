import { Building, Users, MapPin, Award, Shield, Clock, Star, TrendingUp } from "lucide-react";
import { CompanyStatsProps } from "../types";

export default function CompanyStats({
 stats,
 showTitle = true,
 title = "Why Businesses Choose Imperial Cleaning",
 variant = "company-metrics",
 layout = "grid",
 animationDelay = 0,
 className = ""
}: CompanyStatsProps) {
 
 const getVariantTitle = () => {
  switch (variant) {
   case "trust-indicators":
    return "Trusted by Businesses Across Idaho & Utah";
   case "achievements":
    return "Our Track Record of Excellence";
   default:
    return title;
  }
 };

 const getDefaultStats = () => {
  switch (variant) {
   case "trust-indicators":
    return [
     { label: "Projects Completed", value: "200+", icon: Building, color: "primary" },
     { label: "Happy Clients", value: "50+", icon: Users, color: "primary" },
     { label: "Years Experience", value: "5+", icon: Award, color: "primary" },
     { label: "States Served", value: "2", icon: MapPin, color: "primary" }
    ];
   case "achievements":
    return [
     { label: "Customer Satisfaction", value: "100%", icon: Star, color: "success" },
     { label: "Insurance Coverage", value: "Comprehensive", icon: Shield, color: "info" },
     { label: "Response Time", value: "24/7", icon: Clock, color: "warning" },
     { label: "Success Rate", value: "99%", icon: TrendingUp, color: "success" }
    ];
   default:
    return [
     { label: "Licensed & Insured", value: "Professional Service", icon: Shield, color: "primary" },
     { label: "Service Availability", value: "24/7", icon: Clock, color: "primary" },
     { label: "Quality Standards", value: "100% Guarantee", icon: Award, color: "primary" },
     { label: "Coverage Area", value: "Multi-State", icon: MapPin, color: "primary" }
    ];
  }
 };

 const statsToDisplay = stats.length > 0 ? stats : getDefaultStats();

 const getLayoutClasses = () => {
  switch (layout) {
   case "horizontal":
    return "flex flex-wrap justify-center gap-8";
   case "vertical":
    return "flex flex-col gap-6";
   default:
    return `grid ${statsToDisplay.length <= 2 ? 'md:grid-cols-2' : statsToDisplay.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8`;
  }
 };

 const getColorClasses = (color?: string) => {
  switch (color) {
   case "success":
    return "text-green-400";
   case "warning":
    return "text-yellow-400";
   case "info":
    return "text-blue-400";
   case "secondary":
    return "text-purple-400";
   default:
    return "text-primary";
  }
 };

 const renderIcon = (icon: any) => {
  if (typeof icon === 'string') {
   return <i className={`fas fa-${icon} icon-gradient`} />;
  }
  const IconComponent = icon;
  return <IconComponent className="w-6 h-6" />;
 };

 return (
  <section 
   className={`py-24 px-6 ${className}`}
   style={{ animationDelay: `${animationDelay}ms` }}
   data-testid={`company-stats-${variant}`}
  >
   <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    {showTitle && (
     <div className="text-center mb-20">
      <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">
       {getVariantTitle()}
      </h2>
      {variant === "company-metrics" && (
       <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
        Most trusted commercial cleaning company with proven expertise across multiple markets and regions. Professional service with comprehensive coverage and quality assurance.
       </p>
      )}
     </div>
    )}

    {/* Stats Grid */}
    <div className={getLayoutClasses()}>
     {statsToDisplay.map((stat, index) => (
      <div 
       key={index}
       className={`group animate-fade-in-up stagger-delay-${index + 1}`}
       data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
      >
       <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand parallax-subtle p-6 rounded-lg h-full">
        {/* Icon */}
        <div className="resend-icon mb-6 hover-lift-gentle group-hover:scale-105 transition-all duration-500">
         <div className={getColorClasses(stat.color)}>
          {renderIcon(stat.icon)}
         </div>
        </div>
        
        {/* Elegant inset divider after icon */}
        <div className="glass-divider-top mb-6"></div>
        
        {/* Label */}
        <h3 className="text-2xl lg:text-3xl mb-4 text-foreground">
         {stat.label}
        </h3>
        
        {/* Inset divider before value */}
        <div className="glass-divider-top mb-4"></div>
        
        {/* Value/Description */}
        <p className="text-muted-foreground leading-relaxed">
         {stat.value}
         {'description' in stat && stat.description && (
          <>
           <br />
           <span className="text-sm mt-2 block">{stat.description}</span>
          </>
         )}
        </p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}