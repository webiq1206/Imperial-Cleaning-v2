import { Link } from "wouter";
import { Shield, Clock, Award, CheckCircle, Star, Building } from "lucide-react";
import { FeatureStatsProps } from "../types";

export default function FeatureStats({
  features,
  columns = 3,
  layout = "grid",
  animationDelay = 0,
  className = ""
}: FeatureStatsProps) {
  
  const getDefaultFeatures = () => [
    {
      title: "Licensed & Insured",
      description: "$2M liability insurance and comprehensive bonding provides complete peace of mind for every commercial cleaning project.",
      icon: Shield,
      linkText: "View our certifications →",
      linkHref: "#compliance"
    },
    {
      title: "24/7 Service Available", 
      description: "Around-the-clock availability throughout our Idaho and Utah service areas. Flexible scheduling and responsive service for all cleanup needs across both states.",
      icon: Clock
    },
    {
      title: "Quality Standards",
      description: "100% satisfaction guarantee backed by professional standards and multi-state compliance. Professional services that exceed expectations with documented quality assurance protocols.",
      icon: Award
    }
  ];

  const featuresToDisplay = features.length > 0 ? features : getDefaultFeatures();

  const getLayoutClasses = () => {
    switch (layout) {
      case "horizontal":
        return "flex flex-wrap justify-center gap-8";
      case "vertical":
        return "flex flex-col gap-8";
      default:
        return `grid md:grid-cols-${columns} gap-8 md:items-stretch`;
    }
  };

  const renderIcon = (icon: any) => {
    if (typeof icon === 'string') {
      return <i className={`fas fa-${icon} icon-gradient`} />;
    }
    const IconComponent = icon;
    return <IconComponent className="w-6 h-6 icon-gradient" />;
  };

  return (
    <section 
      className={`py-24 px-6 features-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      data-testid="feature-stats-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground">
            Why Businesses Choose Imperial Cleaning
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
            Most trusted commercial cleaning company with proven expertise across multiple markets and regions. Professional service with comprehensive coverage and quality assurance.
          </p>
        </div>

        {/* Features Grid */}
        <div className={getLayoutClasses()}>
          {featuresToDisplay.map((feature, index) => (
            <div 
              key={index}
              className={`group animate-fade-in-up stagger-delay-${index + 1} flex`}
              data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand parallax-subtle p-6 rounded-lg h-full">
                {/* Icon */}
                <div className="resend-icon mb-6 hover-lift-gentle group-hover:scale-105 transition-all duration-500">
                  {renderIcon(feature.icon)}
                </div>
                
                {/* Elegant inset divider after icon */}
                <div className="glass-divider-top mb-6"></div>
                
                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                {/* Inset divider before description */}
                <div className="glass-divider-top mb-4"></div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                  {feature.linkText && feature.linkHref && (
                    <>
                      {" "}
                      <Link 
                        href={feature.linkHref} 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {feature.linkText}
                      </Link>
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