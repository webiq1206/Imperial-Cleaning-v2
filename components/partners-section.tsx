import { Award, Shield, HardHat, Leaf, Star, Lock, type LucideIcon } from "lucide-react";

export default function PartnersSection() {
 const partners: { name: string; description: string; icon: LucideIcon; type: string }[] = [
  {
   name: "Professional Standards",
   description: "Industry Best Practices",
   icon: Award,
   type: "quality"
  },
  {
   name: "Comprehensive Coverage",
   description: "Full Protection",
   icon: Shield,
   type: "insurance"
  },
  {
   name: "Safety Excellence",
   description: "Rigorous Safety Protocols",
   icon: HardHat,
   type: "safety"
  },
  {
   name: "Environmental Responsibility",
   description: "Eco-Friendly Practices",
   icon: Leaf,
   type: "environmental"
  },
  {
   name: "Quality Assurance",
   description: "Consistent Excellence",
   icon: Star,
   type: "quality"
  },
  {
   name: "Protected Service",
   description: "Complete Peace of Mind",
   icon: Lock,
   type: "protection"
  }
 ];

 return (
  <section className="py-24 px-6 partners-sophisticated-bg noise-overlay section-transition-top section-transition-bottom">
   <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
     <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">
      Professional Excellence
     </h2>
     <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
      Our commitment to quality and professional standards ensures the highest level of cleaning services with complete protection and peace of mind.
     </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
     {partners.map((partner, index) => {
      const IconComponent = partner.icon;
      return (
       <div 
        key={index} 
        className="glass-card-elevated sophisticated-glow group text-center p-6 transition-all duration-300 hover:-translate-y-1 rounded-lg"
        data-testid={`partner-card-${index}`}
       >
        <div className="resend-icon mb-6 group-hover:scale-110 transition-transform duration-300">
         <IconComponent className="w-5 h-5" />
        </div>
        
        {/* Elegant inset divider between icon and content */}
        <div className="glass-divider-top mb-6"></div>
        
        <h3 className="text-sm mb-2 text-foreground" data-testid={`partner-name-${index}`}>
         {partner.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-tight" data-testid={`partner-desc-${index}`}>
         {partner.description}
        </p>
       </div>
      );
     })}
    </div>

    <div className="mt-16 text-center">
     <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-sm text-muted-foreground">
       Professional standards maintained
      </span>
     </div>
    </div>
   </div>
  </section>
 );
}
