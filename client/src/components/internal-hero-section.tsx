import { useState } from "react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";
import { Button } from "@/components/ui/button";
import logoPathPNG from "@assets/Imperial-Cleaning-Inc.-Commercial-Cleaning-in-Idaho-Falls-ID-Website-Icon-white (1)_1759082752680.png";

const logoPathWebP = "/hero-logo.webp";

interface InternalHeroSectionProps {
 title: string;
 subtitle: string;
 pillText?: string;
 primaryCTA?: {
  text: string;
  onClick: () => void;
 };
 secondaryCTA?: {
  text: string;
  href: string;
 };
 minHeight?: string;
}

export default function InternalHeroSection({
 title,
 subtitle,
 pillText,
 primaryCTA,
 secondaryCTA,
 minHeight = "min-h-[60vh]"
}: InternalHeroSectionProps) {
 const [showContactForm, setShowContactForm] = useState(false);

 const handlePrimaryCTA = () => {
  if (primaryCTA?.onClick) {
   primaryCTA.onClick();
  } else {
   // Default: Open quote request form
   trackEvent('quote_request', 'internal_hero', 'default_cta');
   setShowContactForm(true);
  }
 };

 return (
  <>
   <section className={`relative ${minHeight} hero-sophisticated-bg noise-overlay grain-texture vignette-radial overflow-hidden animate-fade-in-up`}>
    {/* Enhanced background logo - visible on mobile with darkening effect, hidden on desktop */}
    <div 
     className="fixed md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-72 h-72 md:w-96 md:h-96"
     style={{ transform: 'translate(-50%, -50%) translateZ(0)', willChange: 'transform' }}
    >
      <picture>
        <source srcSet={logoPathWebP} type="image/webp" />
        <img 
         src={logoPathPNG}
         alt="Imperial Cleaning Inc Logo - Commercial Cleaning Idaho"
         className="w-full h-full object-contain opacity-20 md:opacity-0 pointer-events-none"
         width="384"
         height="384"
         fetchPriority="high"
         decoding="async"
         style={{ filter: 'brightness(0.4) contrast(1.2)', transform: 'translateZ(0)' }}
        />
      </picture>
    </div>

    {/* Enhanced parallax background elements */}
    <div className="absolute inset-0 parallax-subtle opacity-20">
     <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 rounded-full blur-xl"></div>
     <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/8 to-cyan-500/4 rounded-full blur-lg"></div>
    </div>
    
    <div className="absolute inset-0 parallax-gentle opacity-10">
     <div className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/6 to-purple-600/3 rounded-full blur-2xl"></div>
     <div className="absolute bottom-20 left-32 w-28 h-28 bg-gradient-to-br from-purple-400/5 to-cyan-600/2 rounded-full blur-xl"></div>
    </div>

    {/* Content container */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
     <div className={`flex items-center ${minHeight} relative -mt-12 md:mt-0`}>
      {/* Left side - Content */}
      <div className="flex-1 max-w-2xl z-20">
       {/* Optional announcement pill */}
       {pillText && (
        <div className="mb-6 md:mb-8 animate-fade-in-left stagger-delay-1">
         <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800/60 glass-effect hover:border-gray-700/80 hover:bg-gray-950/60 transition-all duration-300 group sophisticated-glow hover-lift-gentle hover-shimmer">
          <span className="text-sm text-secondary-color tracking-tight">
           {pillText}
          </span>
          <svg className="ml-2 w-3.5 h-3.5 text-subtle-color group-hover:text-secondary-color transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
         </div>
        </div>
       )}

       {/* Main heading - H1 for SEO */}
       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-6 md:mb-8 animate-fade-in-up stagger-delay-2">
        {title}
       </h1>

       {/* Subtitle */}
       <p className="text-lg md:text-xl text-secondary-color mb-8 md:mb-10 max-w-xl leading-[1.6] font-normal tracking-tight animate-fade-in-up stagger-delay-3">
        {subtitle}
       </p>

       {/* CTA buttons */}
       <div className="flex items-center gap-4 animate-fade-in-up stagger-delay-4">
        <Button 
         onClick={handlePrimaryCTA}
         variant="pill-primary"
         size="pill-lg"
         className="pill-button-resend-primary hover-lift-moderate button-ripple"
         data-testid="button-internal-hero-primary"
        >
         {primaryCTA?.text || "Request Quote"}
        </Button>
        {secondaryCTA && (
         <Link href={secondaryCTA.href}>
          <Button 
           variant="pill-secondary"
           size="pill-lg"
           className="pill-button-resend-secondary hover-lift-gentle hover-shimmer"
           data-testid="button-internal-hero-secondary"
          >
           {secondaryCTA.text}
          </Button>
         </Link>
        )}
       </div>
      </div>

      {/* Right side - Desktop logo (hidden on mobile) */}
      <div className="flex-1 items-center justify-center relative z-10 animate-fade-in-right stagger-delay-3 hidden md:flex">
       <div className="relative parallax-depth">
        {/* Logo with subtle 3D effect */}
        <div className="logo-3d-container relative">
         {/* Main logo */}
         <picture>
          <source srcSet={logoPathWebP} type="image/webp" />
          <img 
           src={logoPathPNG}
           alt="Imperial Cleaning Inc - Professional Commercial and Construction Cleaning Services"
           className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain opacity-25"
           width="384"
           height="384"
           fetchPriority="high"
           decoding="async"
          />
         </picture>
         
         {/* Overlay layers */}
         <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50 parallax-subtle"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
         
         {/* Subtle glow */}
         <div className="absolute inset-0 blur-2xl" style={{ background: 'radial-gradient(ellipse at center, hsl(195, 100%, 50%, 0.08), hsl(271, 81%, 56%, 0.04), transparent)' }}></div>
         
         {/* Orbital elements */}
         <div className="absolute -inset-4">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-sm"></div>
          <div className="absolute top-1/3 right-0 w-1 h-1 bg-cyan-300/50 rounded-full blur-sm"></div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>

    {/* Enhanced sophisticated background treatments */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
     {/* Layered sophisticated gradients */}
     <div className="absolute inset-0 sophisticated-bg-primary opacity-60"></div>
     
     {/* Geometric elements with enhanced sophistication */}
     <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-8">
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-800/30 rotate-12 sophisticated-glow"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-gray-700/30 rotate-45 sophisticated-glow"></div>
      <div className="absolute bottom-1/3 right-1/6 w-16 h-16 border border-gray-600/30 -rotate-12 sophisticated-glow"></div>
     </div>
     
     {/* Enhanced radial glow effects */}
     <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl"></div>
     <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-radial from-purple-500/6 via-transparent to-transparent rounded-full blur-2xl"></div>
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
