import { TrustIndicatorsProps } from "../types";
import { trackContentEngagement } from "@/lib/analytics";

export default function TrustIndicators({
 projectsCompleted = 200,
 happyClients = 50,
 yearsExperience = 5,
 statesServed = 2,
 customStats = [],
 showIcons = true,
 layout = "grid",
 animationDelay = 0,
 className = ""
}: TrustIndicatorsProps) {
 
 const defaultStats = [
  {
   label: "Projects Completed",
   value: `${projectsCompleted}+`,
   icon: "building",
   description: "Successfully finished projects"
  },
  {
   label: "Happy Clients", 
   value: `${happyClients}+`,
   icon: "users",
   description: "Satisfied customers served"
  },
  {
   label: "Years Experience",
   value: `${yearsExperience}+`, 
   icon: "award",
   description: "Years of professional service"
  },
  {
   label: "States Served",
   value: `${statesServed}`,
   icon: "map-pin",
   description: "States with active service"
  }
 ];

 const statsToDisplay = customStats.length > 0 ? customStats : defaultStats;

 const getLayoutClasses = () => {
  switch (layout) {
   case "horizontal":
    return "flex flex-wrap justify-center items-center gap-8";
   case "vertical":
    return "flex flex-col items-center gap-6";
   default:
    return "grid grid-cols-2 md:grid-cols-4 gap-8";
  }
 };

 const getItemClasses = (index: number) => {
  const baseClasses = "text-center hover-lift-gentle group animate-fade-in-scale";
  const delayClass = `stagger-delay-${index + 1}`;
  return `${baseClasses} ${delayClass}`;
 };

 return (
  <div 
   className={`${getLayoutClasses()} max-w-3xl mx-auto ${className}`}
   style={{ animationDelay: `${animationDelay}ms` }}
   data-testid="trust-indicators-container"
  >
   {statsToDisplay.map((stat, index) => (
    <div
     key={index}
     className={getItemClasses(index)}
     onClick={() => {
      // Track stats engagement
      trackContentEngagement(
       'stats',
       'click',
       stat.label
      );
     }}
     data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
    >
     {/* Stat Value */}
     <div className="text-2xl lg:text-3xl gradient-text-cyan-purple mb-2 group-hover:scale-110 transition-transform duration-300">
      {stat.value}
     </div>
     
     {/* Stat Label */}
     <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
      {stat.label}
     </div>
     
     {/* Optional Description */}
     {stat.description && (
      <div className="text-xs text-muted-foreground/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       {stat.description}
      </div>
     )}
    </div>
   ))}
  </div>
 );
}
