import { Building, Clock, TrendingUp, Star, Shield, Calendar, CheckCircle, Award, Users } from "lucide-react";
import { ProjectMetricsProps } from "../types";

export default function ProjectMetrics({
 metrics,
 projectId,
 compact = false,
 showLabels = true,
 layout = "grid",
 animationDelay = 0,
 className = ""
}: ProjectMetricsProps) {
 
 const getMetricIcon = (iconType: string) => {
  const iconMap = {
   "building": Building,
   "clock": Clock,
   "trending-up": TrendingUp,
   "star": Star,
   "shield": Shield,
   "calendar": Calendar,
   "check-circle": CheckCircle,
   "award": Award,
   "users": Users
  };
  
  const IconComponent = iconMap[iconType as keyof typeof iconMap];
  return IconComponent ? <IconComponent className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />;
 };

 const getLayoutClasses = () => {
  if (compact) {
   return "flex flex-wrap gap-3";
  }
  
  switch (layout) {
   case "horizontal":
    return "flex flex-wrap justify-center gap-6";
   case "vertical":
    return "flex flex-col gap-4";
   default:
    return "grid grid-cols-2 gap-3";
  }
 };

 const getItemClasses = () => {
  if (compact) {
   return "glass-effect p-2 rounded-lg hover-lift-gentle group/metric flex-1 min-w-[120px]";
  }
  return "glass-effect p-3 rounded-lg hover-lift-gentle group/metric";
 };

 return (
  <div 
   className={`${className}`}
   {...(animationDelay > 0 ? { style: { animationDelay: `${animationDelay}ms` } } : {})}
   data-testid={`project-metrics-${projectId || 'default'}`}
  >
   {showLabels && !compact && (
    <h4 className="text-sm text-foreground mb-3 uppercase tracking-wider">
     Project Results
    </h4>
   )}
   
   <div className={getLayoutClasses()}>
    {metrics.map((metric, metricIndex) => (
     <div 
      key={metricIndex} 
      className={getItemClasses()}
      data-testid={`metric-${projectId || 'default'}-${metricIndex}`}
     >
      {/* Icon and Label Row */}
      <div className="flex items-center gap-2 mb-1">
       <div className="text-primary group-hover/metric:scale-110 transition-transform duration-300">
        {typeof metric.icon === 'string' 
          ? getMetricIcon(metric.icon) 
          : metric.icon 
            ? (() => { const Icon = metric.icon; return <Icon className="w-4 h-4" />; })()
            : <CheckCircle className="w-4 h-4" />
        }
       </div>
       {showLabels && (
        <span className="text-xs text-muted-foreground ">
         {metric.label}
        </span>
       )}
      </div>
      
      {/* Value */}
      <div className="text-sm text-foreground">
       {metric.value}
      </div>
      
      {/* Optional Description */}
      {metric.description && !compact && (
       <div className="text-xs text-muted-foreground/80 mt-1">
        {metric.description}
       </div>
      )}
     </div>
    ))}
   </div>
  </div>
 );
}
