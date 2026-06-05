import HeroCTAButtons from "@/components/hero-cta-buttons";

const logoPathPNG = "/hero-logo.png";

interface HeroSectionProps {
  imageAlt?: string;
}

export default function HeroSection({ 
  imageAlt = "Imperial Cleaning Inc - Professional Commercial & Construction Cleaning Services Idaho Utah" 
}: HeroSectionProps = {}) {
 return (
   <section className="relative min-h-[85vh] md:min-h-screen hero-sophisticated-bg noise-overlay grain-texture vignette-radial overflow-hidden">
    {/* Background logo - visible on mobile, hidden on desktop */}
    <div 
     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-72 h-72 md:w-96 md:h-96"
    >
      <img 
       src={logoPathPNG}
       alt={imageAlt}
       className="w-full h-full object-contain opacity-15 md:opacity-0 pointer-events-none"
       width="384"
       height="384"
       loading="lazy"
       decoding="async"
       fetchPriority="low"
      />
    </div>

    {/* Parallax background elements - hidden on mobile for performance */}
    <div className="absolute inset-0 parallax-subtle opacity-20 hidden md:block">
     <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 rounded-full blur-xl"></div>
     <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/8 to-cyan-500/4 rounded-full blur-lg"></div>
    </div>
    
    <div className="absolute inset-0 parallax-gentle opacity-10 hidden md:block">
     <div className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/6 to-purple-600/3 rounded-full blur-2xl"></div>
     <div className="absolute bottom-20 left-32 w-28 h-28 bg-gradient-to-br from-purple-400/5 to-cyan-600/2 rounded-full blur-xl"></div>
    </div>

    {/* Resend-style hero layout */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
     <div className="flex items-center h-[85vh] md:h-screen relative -mt-12 md:mt-0">
      {/* Left side - Content */}
      <div className="flex-1 max-w-2xl z-20">
       {/* Enhanced Resend-style announcement pill with motion polish */}
       <div className="mb-6 md:mb-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800/60 glass-effect hover:border-gray-700/80 hover:bg-gray-950/60 transition-all duration-300 group sophisticated-glow hover-lift-gentle hover-shimmer">
         <span className="text-sm text-secondary-color tracking-tight">
          Professional Cleaning Services • Licensed &amp; Insured • Trusted Partner
         </span>
         <svg className="ml-2 w-3.5 h-3.5 text-subtle-color group-hover:text-secondary-color transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
         </svg>
        </div>
       </div>

       {/* Main heading - no animation delay for fastest LCP */}
       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-6 md:mb-8" data-testid="heading-hero-h1">
        <span className="inline-block hover-lift-gentle">Professional </span>
        <br />
        <span className="inline-block hover-lift-gentle">cleaning for</span>
        <br />
        <span className="inline-block hover-lift-gentle gradient-text-cyan-purple">businesses</span>
       </h1>

       {/* Enhanced subtitle - no animation for fastest LCP paint */}
       <p className="text-lg md:text-xl text-secondary-color mb-8 md:mb-10 max-w-xl leading-[1.6] font-normal tracking-tight">
        Locally owned and operated commercial cleaning company providing premier construction cleanup and janitorial services for businesses that demand excellence across multiple markets.
       </p>

       {/* CTA buttons - client component for interactivity */}
       <HeroCTAButtons />
      </div>

      {/* Right side - Enhanced 3D logo with sophisticated parallax (hidden on mobile) */}
      <div className="flex-1 items-center justify-center relative z-10 animate-fade-in-right stagger-delay-3 hidden md:flex">
       <div className="relative parallax-depth">
        {/* Enhanced logo with 3D effect and motion polish */}
        <div className="logo-3d-container relative">
         {/* Main logo */}
         <img 
           src={logoPathPNG}
           alt={imageAlt}
           className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[32rem] xl:h-[32rem] object-contain opacity-25"
           width="512"
           height="512"
           loading="lazy"
           decoding="async"
           fetchPriority="low"
          />
         
         {/* Enhanced overlay layers with motion */}
         <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50 parallax-subtle"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
         
         {/* Enhanced glow with subtle animation */}
         <div className="absolute inset-0 blur-2xl hero-glow-gradient"></div>
         
         {/* Additional orbital elements */}
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

    {/* Sophisticated background treatments - desktop only for performance */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
     <div className="absolute inset-0 sophisticated-bg-primary opacity-60"></div>
     
     <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-8">
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-800/30 rotate-12"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-gray-700/30 rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/6 w-16 h-16 border border-gray-600/30 -rotate-12"></div>
     </div>
     
     <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl"></div>
     <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-radial from-purple-500/6 via-transparent to-transparent rounded-full blur-2xl"></div>
    </div>
   </section>
 );
}
