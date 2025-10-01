import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, Search, Building2, Hammer, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { trackEvent, trackNavigationInteraction, trackServiceNavigation } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";
import SearchBar from "@/components/search-bar";
import { allServiceLocations } from "@shared/service-locations";
import { buildServiceLocationUrl } from "@/lib/routing-utils";

export default function Header() {
 const [location] = useLocation();
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [showContactForm, setShowContactForm] = useState(false);
 const [showSearch, setShowSearch] = useState(false);
 const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
 const [activeServiceTab, setActiveServiceTab] = useState<'construction' | 'commercial'>('construction');
 const [expandedMobileService, setExpandedMobileService] = useState<string | null>(null);
 const megaMenuRef = useRef<HTMLDivElement>(null);
 const megaMenuButtonRef = useRef<HTMLButtonElement>(null);
 const megaMenuPanelRef = useRef<HTMLDivElement>(null);

 // Memoize filtered locations by service type and state
 const getLocationsByService = useMemo(() => {
  return (serviceType: 'construction' | 'commercial') => {
   return allServiceLocations.filter(loc => {
    if (serviceType === 'construction') {
     return loc.services.constructionCleanup;
    } else {
     return loc.services.commercialCleaning;
    }
   }).sort((a, b) => {
    const stateDiff = a.state.localeCompare(b.state);
    if (stateDiff !== 0) return stateDiff;
    const tierOrder = { primary: 0, secondary: 1, extended: 2 };
    const tierDiff = tierOrder[a.marketTier] - tierOrder[b.marketTier];
    return tierDiff !== 0 ? tierDiff : a.name.localeCompare(b.name);
   });
  };
 }, []);

 // Group locations by state
 const getLocationsByServiceAndState = (serviceType: 'construction' | 'commercial', state: 'Idaho' | 'Utah') => {
  return getLocationsByService(serviceType).filter(loc => loc.state === state);
 };

 const handleRequestQuote = () => {
  trackEvent('quote_request', 'contact', 'header_button');
  setShowContactForm(true);
 };

 const handleMobileMenuToggle = () => {
  const newState = !isMobileMenuOpen;
  setIsMobileMenuOpen(newState);
  
  trackNavigationInteraction(
   'mobile_menu_toggle',
   'main_nav',
   newState ? 'mobile_menu_open' : 'mobile_menu_close'
  );
  trackEvent('mobile_menu_toggle', 'navigation', newState ? 'open' : 'close');
 };

 const closeMobileMenu = () => {
  setIsMobileMenuOpen(false);
  setExpandedMobileService(null);
 };

 const toggleMobileService = (serviceType: string) => {
  const newService = expandedMobileService === serviceType ? null : serviceType;
  setExpandedMobileService(newService);
  
  trackNavigationInteraction(
   'mobile_menu_toggle',
   'services',
   `mobile_${serviceType}_${newService ? 'expand' : 'collapse'}`
  );
 };

 const handleMegaMenuToggle = () => {
  const newState = !isMegaMenuOpen;
  setIsMegaMenuOpen(newState);
  
  trackNavigationInteraction(
   newState ? 'dropdown_open' : 'dropdown_close',
   'services',
   'services_mega_menu'
  );
  trackEvent('mega_menu_toggle', 'navigation', newState ? 'open' : 'close');
 };

 const closeMegaMenu = () => {
  setIsMegaMenuOpen(false);
  
  if (megaMenuButtonRef.current) {
   megaMenuButtonRef.current.focus();
  }
 };

 const handleServiceTabChange = (serviceType: 'construction' | 'commercial') => {
  setActiveServiceTab(serviceType);
  
  trackNavigationInteraction(
   'menu_click',
   'services',
   `${serviceType}_tab`
  );
 };

 const handleMegaMenuKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
   event.preventDefault();
   handleMegaMenuToggle();
  } else if (event.key === 'Escape') {
   event.preventDefault();
   closeMegaMenu();
  } else if (event.key === 'ArrowLeft' && activeServiceTab === 'commercial') {
   event.preventDefault();
   handleServiceTabChange('construction');
  } else if (event.key === 'ArrowRight' && activeServiceTab === 'construction') {
   event.preventDefault();
   handleServiceTabChange('commercial');
  }
 };

 // Focus management for mega menu
 useEffect(() => {
  if (isMegaMenuOpen && megaMenuPanelRef.current) {
   const firstFocusable = megaMenuPanelRef.current.querySelector<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
   );
   if (firstFocusable) {
    firstFocusable.focus();
   }
  }
 }, [isMegaMenuOpen]);

 // Close mega menu when clicking outside
 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
   if (
    megaMenuRef.current &&
    !megaMenuRef.current.contains(event.target as Node)
   ) {
    closeMegaMenu();
   }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
   if (event.key === 'Escape') {
    closeMegaMenu();
   }
  };

  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);
  return () => {
   document.removeEventListener('mousedown', handleClickOutside);
   document.removeEventListener('keydown', handleEscapeKey);
  };
 }, []);

 return (
  <>
   <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20 glass-effect sophisticated-glow animate-fade-in-up">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
     <div className="flex items-center justify-between h-[72px] gap-4 lg:gap-8">
      <div className="flex items-center flex-shrink-0">
       <Link href="/" data-testid="link-home" className="flex items-center hover:opacity-80 transition-all duration-300 hover-lift-gentle ">
        <img 
         src="/header-logo.png" 
         alt="Imperial Cleaning Inc" 
         className="h-5 w-auto brightness-0 invert opacity-40 hover:opacity-60 transition-all duration-300 mix-blend-overlay"
        />
       </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
       <button
        onClick={() => setShowSearch(true)}
        className="text-muted-foreground hover:text-foreground transition-all duration-300 hover-lift-gentle p-2 hover:bg-secondary/50 rounded-lg"
        aria-label="Search"
        data-testid="button-open-search"
       >
        <Search className="w-5 h-5" />
       </button>
       
       <div className="relative" ref={megaMenuRef}>
        <button 
         ref={megaMenuButtonRef}
         className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 nav-item-slide hover-lift-gentle flex items-center focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md px-2 py-1"
         onClick={handleMegaMenuToggle}
         onKeyDown={handleMegaMenuKeyDown}
         aria-haspopup="true"
         aria-expanded={isMegaMenuOpen}
         aria-controls="services-mega-menu-panel"
         data-testid="button-mega-menu"
        >
         Services
         <svg className={`ml-1 h-3 w-3 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
         </svg>
        </button>
        
        <div 
         id="services-mega-menu-panel"
         ref={megaMenuPanelRef}
         role="menu"
         className={`absolute top-full left-1/2 mt-3 w-[700px] bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-2xl transition-opacity transition-visibility duration-300 ease-out glass-card-elevated sophisticated-glow ${
          isMegaMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
         }`}
         style={{ transform: 'translateX(-50%)' }}
        >
         
         <div className="border-b border-border/20">
          <div className="flex p-2 gap-2">
           <button
            onClick={() => handleServiceTabChange('construction')}
            role="menuitem"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors duration-200 ${
             activeServiceTab === 'construction' 
              ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' 
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            }`}
            data-testid="button-tab-construction"
           >
            <Hammer className="w-4 h-4" />
            <span className="font-medium">Construction Cleaning</span>
           </button>
           <button
            onClick={() => handleServiceTabChange('commercial')}
            role="menuitem"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors duration-200 ${
             activeServiceTab === 'commercial' 
              ? 'bg-green-500/20 text-green-600 border border-green-500/30' 
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            }`}
            data-testid="button-tab-commercial"
           >
            <Building2 className="w-4 h-4" />
            <span className="font-medium">Commercial Cleaning</span>
           </button>
          </div>
         </div>

         <div className="p-6">
          {activeServiceTab === 'construction' && (
           <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
             <div>
              <h3 className="text-lg font-semibold text-foreground">Construction Cleaning Services</h3>
              <p className="text-sm text-muted-foreground mt-1">Post-construction debris removal and final cleanup</p>
             </div>
             <Link 
              href="/construction-cleaning" 
              role="menuitem"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
              onClick={() => {
               trackServiceNavigation('construction-cleaning', 'dropdown_selection');
               trackNavigationInteraction('menu_click', 'services', 'construction_cleaning_all');
               closeMegaMenu();
              }}
              data-testid="link-construction-cleaning-all"
             >
              View All →
             </Link>
            </div>

            <div>
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <h4 className="text-sm font-semibold text-foreground">Idaho</h4>
             </div>
             <div className="grid grid-cols-3 gap-2">
              {getLocationsByServiceAndState('construction', 'Idaho').map((loc) => (
               <Link 
                key={`${loc.state}-${loc.name}`}
                href={buildServiceLocationUrl(loc.state, 'construction-cleaning', loc.name)}
                role="menuitem"
                className="group flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors duration-200"
                onClick={() => {
                 trackServiceNavigation('construction-cleaning', 'submenu_location', loc.name);
                 trackNavigationInteraction('menu_click', 'services', `construction_cleaning_${loc.name.toLowerCase().replace(/\s+/g, '_')}`);
                 closeMegaMenu();
                }}
                data-testid={`link-construction-cleaning-${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
               >
                <div className="flex items-center gap-2 min-w-0">
                 <MapPin className="w-3 h-3 flex-shrink-0 text-muted-foreground/50 group-hover:text-blue-500" />
                 <span className="truncate">{loc.name}</span>
                </div>
                {loc.marketTier === 'primary' && (
                 <Star className="w-3 h-3 flex-shrink-0 text-blue-500" />
                )}
               </Link>
              ))}
             </div>
            </div>

            <div>
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <h4 className="text-sm font-semibold text-foreground">Utah</h4>
             </div>
             <div className="grid grid-cols-3 gap-2">
              {getLocationsByServiceAndState('construction', 'Utah').map((loc) => (
               <Link 
                key={`${loc.state}-${loc.name}`}
                href={buildServiceLocationUrl(loc.state, 'construction-cleaning', loc.name)}
                role="menuitem"
                className="group flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors duration-200"
                onClick={() => {
                 trackServiceNavigation('construction-cleaning', 'submenu_location', loc.name);
                 trackNavigationInteraction('menu_click', 'services', `construction_cleaning_${loc.name.toLowerCase().replace(/\s+/g, '_')}`);
                 closeMegaMenu();
                }}
                data-testid={`link-construction-cleaning-${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
               >
                <div className="flex items-center gap-2 min-w-0">
                 <MapPin className="w-3 h-3 flex-shrink-0 text-muted-foreground/50 group-hover:text-blue-500" />
                 <span className="truncate">{loc.name}</span>
                </div>
                {loc.marketTier === 'primary' && (
                 <Star className="w-3 h-3 flex-shrink-0 text-blue-500" />
                )}
               </Link>
              ))}
             </div>
            </div>
           </div>
          )}

          {activeServiceTab === 'commercial' && (
           <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
             <div>
              <h3 className="text-lg font-semibold text-foreground">Commercial Cleaning Services</h3>
              <p className="text-sm text-muted-foreground mt-1">Daily office and facility maintenance</p>
             </div>
             <Link 
              href="/commercial-cleaning" 
              role="menuitem"
              className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline"
              onClick={() => {
               trackServiceNavigation('commercial-cleaning', 'dropdown_selection');
               trackNavigationInteraction('menu_click', 'services', 'commercial_cleaning_all');
               closeMegaMenu();
              }}
              data-testid="link-commercial-cleaning-all"
             >
              View All →
             </Link>
            </div>

            <div>
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <h4 className="text-sm font-semibold text-foreground">Idaho</h4>
             </div>
             <div className="grid grid-cols-3 gap-2">
              {getLocationsByServiceAndState('commercial', 'Idaho').map((loc) => (
               <Link 
                key={`${loc.state}-${loc.name}`}
                href={buildServiceLocationUrl(loc.state, 'commercial-cleaning', loc.name)}
                role="menuitem"
                className="group flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors duration-200"
                onClick={() => {
                 trackServiceNavigation('commercial-cleaning', 'submenu_location', loc.name);
                 trackNavigationInteraction('menu_click', 'services', `commercial_cleaning_${loc.name.toLowerCase().replace(/\s+/g, '_')}`);
                 closeMegaMenu();
                }}
                data-testid={`link-commercial-cleaning-${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
               >
                <div className="flex items-center gap-2 min-w-0">
                 <MapPin className="w-3 h-3 flex-shrink-0 text-muted-foreground/50 group-hover:text-green-500" />
                 <span className="truncate">{loc.name}</span>
                </div>
                {loc.marketTier === 'primary' && (
                 <Star className="w-3 h-3 flex-shrink-0 text-green-500" />
                )}
               </Link>
              ))}
             </div>
            </div>

            <div>
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <h4 className="text-sm font-semibold text-foreground">Utah</h4>
             </div>
             <div className="grid grid-cols-3 gap-2">
              {getLocationsByServiceAndState('commercial', 'Utah').map((loc) => (
               <Link 
                key={`${loc.state}-${loc.name}`}
                href={buildServiceLocationUrl(loc.state, 'commercial-cleaning', loc.name)}
                role="menuitem"
                className="group flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors duration-200"
                onClick={() => {
                 trackServiceNavigation('commercial-cleaning', 'submenu_location', loc.name);
                 trackNavigationInteraction('menu_click', 'services', `commercial_cleaning_${loc.name.toLowerCase().replace(/\s+/g, '_')}`);
                 closeMegaMenu();
                }}
                data-testid={`link-commercial-cleaning-${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
               >
                <div className="flex items-center gap-2 min-w-0">
                 <MapPin className="w-3 h-3 flex-shrink-0 text-muted-foreground/50 group-hover:text-green-500" />
                 <span className="truncate">{loc.name}</span>
                </div>
                {loc.marketTier === 'primary' && (
                 <Star className="w-3 h-3 flex-shrink-0 text-green-500" />
                )}
               </Link>
              ))}
             </div>
            </div>
           </div>
          )}
         </div>
        </div>
       </div>

       <Link 
        href="/about" 
        className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 nav-item-slide hover-lift-gentle"
        data-testid="link-about"
       >
        About
       </Link>

       <Link 
        href="/contact" 
        className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 nav-item-slide hover-lift-gentle"
        data-testid="link-contact"
       >
        Contact
       </Link>
      </nav>

      <Button 
       variant="pill-secondary"
       size="pill-md"
       onClick={handleRequestQuote}
       data-testid="button-request-quote-header"
       className="hidden md:inline-flex hover-lift-moderate button-ripple hover-shimmer"
      >
       Request Quote
      </Button>

      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
       <SheetTrigger asChild>
        <Button
         variant="ghost"
         size="icon"
         className="md:hidden p-2 hover:bg-secondary/50 rounded-lg hover-lift-gentle button-magnetic"
         data-testid="button-mobile-menu"
        >
         <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-90' : 'rotate-0 scale-100'}`}>
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
         </div>
         <span className="sr-only">Toggle mobile menu</span>
        </Button>
       </SheetTrigger>

       <SheetContent side="right" className="w-full sm:w-80 glass-overlay">
        <SheetHeader className="text-left">
         <SheetTitle className="text-primary-color text-lg ">
          Navigation
         </SheetTitle>
        </SheetHeader>

        <div className="py-4">
         <button
          onClick={() => {
           setIsMobileMenuOpen(false);
           setShowSearch(true);
          }}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-secondary-color hover:text-primary-color rounded-xl transition-all duration-300 hover-lift-gentle glass-button"
          data-testid="button-open-search-mobile"
         >
          <Search className="w-5 h-5" />
          <span>Search</span>
         </button>
        </div>

        <div className="flex flex-col h-full py-6 pb-32 space-y-1 overflow-y-auto">
         <div className="px-2 py-4">
          <div className="text-xs text-secondary-color uppercase tracking-wider mb-4">Services</div>
          
          <div className="mb-4">
           <button
            className={`w-full flex items-center justify-between px-4 py-4 text-sm rounded-xl transition-all duration-300 hover-lift-gentle glass-button ${
             location.startsWith('/construction-cleaning') 
              ? 'text-primary bg-primary/10 border-primary/20' 
              : 'text-secondary-color hover:text-primary-color'
            }`}
            onClick={() => toggleMobileService('construction')}
            data-testid="button-construction-cleaning-mobile"
           >
            <div className="flex items-center">
             <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
             <div className="text-left">
              <div className=" text-primary-color">Construction Cleaning</div>
              <div className="text-xs text-secondary-color mt-1">Post-construction debris removal</div>
             </div>
            </div>
            <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
             expandedMobileService === 'construction' ? 'rotate-90' : 'rotate-0'
            }`} />
           </button>
           
           <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedMobileService === 'construction' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
           }`}>
            <div className="pl-4 pt-2 space-y-3 max-h-80 overflow-y-auto">
             <Link 
              href="/construction-cleaning" 
              className="block px-4 py-3 text-sm text-primary-color hover:bg-secondary/30 rounded-lg transition-all duration-200 border-b border-border/20 mb-3"
              onClick={() => {
               trackServiceNavigation('construction-cleaning', 'dropdown_selection');
               trackNavigationInteraction('menu_click', 'services', 'construction_cleaning_all');
               closeMobileMenu();
              }}
              data-testid="link-construction-cleaning-all-mobile"
             >
              <div className="flex items-center">
               <Hammer className="w-4 h-4 mr-3 text-blue-500" />
               <span className="font-medium">View All Construction Cleaning</span>
              </div>
             </Link>
             
             <div>
              <div className="flex items-center gap-2 px-4 mb-2">
               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
               <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider">Idaho</h5>
              </div>
              <div className="space-y-1">
               {getLocationsByServiceAndState('construction', 'Idaho').map((loc) => (
                <Link 
                 key={`${loc.state}-${loc.name}`}
                 href={buildServiceLocationUrl(loc.state, 'construction-cleaning', loc.name)}
                 className="flex items-center justify-between px-4 py-2 text-sm text-secondary-color hover:text-primary-color hover:bg-secondary/20 rounded-lg transition-all duration-200"
                 onClick={() => {
                  trackServiceNavigation('construction-cleaning', 'submenu_location', loc.name);
                  trackNavigationInteraction('menu_click', 'services', `construction_cleaning_${loc.name.toLowerCase().replace(/\s+/g, '_')}`);
                  closeMobileMenu();
                 }}
                 data-testid={`link-construction-cleaning-${loc.name.toLowerCase().replace(/\s+/g, '-')}-mobile`}
                >
                 <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-muted-foreground/50" />
                  <span>{loc.name}</span>
                 </div>
                 {loc.marketTier === 'primary' && (
                  <Star className="w-3 h-3 text-blue-500" />
                 )}
                </Link>
               ))}
              </div>
             </div>

             <div>
              <div className="flex items-center gap-2 px-4 mb-2">
               <div className="w-2 h-2 bg-red-600 rounded-full"></div>
               <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider">Utah</h5>
              </div>
              <div className="space-y-1">
               {getLocationsByServiceAndState('construction', 'Utah').map((loc) => (
                <Link 
                 key={`${loc.state}-${loc.name}`}
                 href={buildServiceLocationUrl(loc.state, 'construction-cleaning', loc.name)}
                 className="flex items-center justify-between px-4 py-2 text-sm text-secondary-color hover:text-primary-color hover:bg-secondary/20 rounded-lg transition-all duration-200"
                 onClick={() => {
                  trackServiceNavigation('construction-cleaning', 'submenu_location', loc.name);
                  trackNavigationInteraction('menu_click', 'services', `construction_cleaning_${loc.name.toLowerCase().replace(/\s+/g, '_')}`);
                  closeMobileMenu();
                 }}
                 data-testid={`link-construction-cleaning-${loc.name.toLowerCase().replace(/\s+/g, '-')}-mobile`}
                >
                 <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-muted-foreground/50" />
                  <span>{loc.name}</span>
                 </div>
                 {loc.marketTier === 'primary' && (
                  <Star className="w-3 h-3 text-blue-500" />
                 )}
                </Link>
               ))}
              </div>
             </div>
            </div>
           </div>
          </div>

          <div className="mb-4">
           <button
            className={`w-full flex items-center justify-between px-4 py-4 text-sm rounded-xl transition-all duration-300 hover-lift-gentle glass-button ${
             location.startsWith('/commercial-cleaning') 
              ? 'text-primary bg-primary/10 border-primary/20' 
              : 'text-secondary-color hover:text-primary-color'
            }`}
            onClick={() => toggleMobileService('commercial')}
            data-testid="button-commercial-cleaning-mobile"
           >
            <div className="flex items-center">
             <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
             <div className="text-left">
              <div className=" text-primary-color">Commercial Cleaning</div>
              <div className="text-xs text-secondary-color mt-1">Daily office & facility maintenance</div>
             </div>
            </div>
            <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
             expandedMobileService === 'commercial' ? 'rotate-90' : 'rotate-0'
            }`} />
           </button>
           
           <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedMobileService === 'commercial' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
           }`}>
            <div className="pl-4 pt-2 space-y-3 max-h-80 overflow-y-auto">
             <Link 
              href="/commercial-cleaning" 
              className="block px-4 py-3 text-sm text-primary-color hover:bg-secondary/30 rounded-lg transition-all duration-200 border-b border-border/20 mb-3"
              onClick={() => {
               trackServiceNavigation('commercial-cleaning', 'dropdown_selection');
               trackNavigationInteraction('menu_click', 'services', 'commercial_cleaning_all');
               closeMobileMenu();
              }}
              data-testid="link-commercial-cleaning-all-mobile"
             >
              <div className="flex items-center">
               <Building2 className="w-4 h-4 mr-3 text-green-500" />
               <span className="font-medium">View All Commercial Cleaning</span>
              </div>
             </Link>
             
             <div>
              <div className="flex items-center gap-2 px-4 mb-2">
               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
               <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider">Idaho</h5>
              </div>
              <div className="space-y-1">
               {getLocationsByServiceAndState('commercial', 'Idaho').map((loc) => (
                <Link 
                 key={`${loc.state}-${loc.name}`}
                 href={buildServiceLocationUrl(loc.state, 'commercial-cleaning', loc.name)}
                 className="flex items-center justify-between px-4 py-2 text-sm text-secondary-color hover:text-primary-color hover:bg-secondary/20 rounded-lg transition-all duration-200"
                 onClick={() => {
                  trackServiceNavigation('commercial-cleaning', 'submenu_location', loc.name);
                  trackNavigationInteraction('menu_click', 'services', `commercial_cleaning_${loc.name.toLowerCase().replace(/\s+/g, '_')}`);
                  closeMobileMenu();
                 }}
                 data-testid={`link-commercial-cleaning-${loc.name.toLowerCase().replace(/\s+/g, '-')}-mobile`}
                >
                 <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-muted-foreground/50" />
                  <span>{loc.name}</span>
                 </div>
                 {loc.marketTier === 'primary' && (
                  <Star className="w-3 h-3 text-green-500" />
                 )}
                </Link>
               ))}
              </div>
             </div>

             <div>
              <div className="flex items-center gap-2 px-4 mb-2">
               <div className="w-2 h-2 bg-red-600 rounded-full"></div>
               <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider">Utah</h5>
              </div>
              <div className="space-y-1">
               {getLocationsByServiceAndState('commercial', 'Utah').map((loc) => (
                <Link 
                 key={`${loc.state}-${loc.name}`}
                 href={buildServiceLocationUrl(loc.state, 'commercial-cleaning', loc.name)}
                 className="flex items-center justify-between px-4 py-2 text-sm text-secondary-color hover:text-primary-color hover:bg-secondary/20 rounded-lg transition-all duration-200"
                 onClick={() => {
                  trackServiceNavigation('commercial-cleaning', 'submenu_location', loc.name);
                  trackNavigationInteraction('menu_click', 'services', `commercial_cleaning_${loc.name.toLowerCase().replace(/\s+/g, '_')}`);
                  closeMobileMenu();
                 }}
                 data-testid={`link-commercial-cleaning-${loc.name.toLowerCase().replace(/\s+/g, '-')}-mobile`}
                >
                 <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-muted-foreground/50" />
                  <span>{loc.name}</span>
                 </div>
                 {loc.marketTier === 'primary' && (
                  <Star className="w-3 h-3 text-green-500" />
                 )}
                </Link>
               ))}
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div className="px-2 py-4 border-t border-border/20">
          <div className="text-xs text-secondary-color uppercase tracking-wider mb-4">Quick Links</div>
          <Link 
           href="/about" 
           className="block px-4 py-3 text-sm text-secondary-color hover:text-primary-color rounded-xl transition-all duration-300 hover-lift-gentle glass-button mb-2"
           onClick={closeMobileMenu}
           data-testid="link-about-mobile"
          >
           About Us
          </Link>
          <Link 
           href="/contact" 
           className="block px-4 py-3 text-sm text-secondary-color hover:text-primary-color rounded-xl transition-all duration-300 hover-lift-gentle glass-button"
           onClick={closeMobileMenu}
           data-testid="link-contact-mobile"
          >
           Contact
          </Link>
         </div>

         <div className="mt-auto px-2 py-4 border-t border-border/20">
          <Button 
           variant="pill-primary"
           size="pill-lg"
           onClick={() => {
            closeMobileMenu();
            handleRequestQuote();
           }}
           data-testid="button-request-quote-mobile"
           className="w-full mb-4 hover-lift-moderate button-ripple"
          >
           Request Quote
          </Button>
          <div className="text-center">
           <a 
            href="tel:+12085203202" 
            className="text-sm text-secondary-color hover:text-primary-color transition-colors duration-200 "
            data-testid="link-phone-mobile"
           >
            📞 (208) 520-3202
           </a>
          </div>
         </div>
        </div>
       </SheetContent>
      </Sheet>
     </div>

    </div>
   </header>

   {showContactForm && (
    <ContactFormModal 
     isOpen={showContactForm} 
     onClose={() => setShowContactForm(false)} 
    />
   )}

   <SearchBar 
    isOpen={showSearch}
    onClose={() => setShowSearch(false)}
   />
  </>
 );
}
