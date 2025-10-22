import { useState, useEffect, useRef, useMemo } from "react";
import { Search, MapPin, Wrench, FileText, X } from "lucide-react";
import { useLocation } from "wouter";
import { trackEvent } from "@/lib/analytics";
import { allServiceLocations } from "@shared/service-locations";
import { buildServiceLocationUrl } from "@/lib/routing-utils";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  section?: string;
  category: 'page' | 'service' | 'location' | 'section';
  icon: 'page' | 'service' | 'location';
}

// Build search index dynamically from location data
const buildSearchIndex = (): SearchResult[] => {
  const staticResults: SearchResult[] = [
    // Main Pages
    { title: "Home", description: "Imperial Cleaning Inc. homepage", url: "/", category: "page", icon: "page" },
    { title: "About", description: "Learn about Imperial Cleaning Inc.", url: "/about", category: "page", icon: "page" },
    { title: "Contact", description: "Get in touch with us", url: "/contact", category: "page", icon: "page" },
    
    // Services
    { title: "Construction Cleaning", description: "Post-construction cleanup services", url: "/construction-cleaning", category: "service", icon: "service" },
    { title: "Commercial Cleaning", description: "Daily office & facility maintenance", url: "/commercial-cleaning", category: "service", icon: "service" },
    
    // Service Areas
    { title: "Idaho Service Areas", description: "Cleaning services across Idaho", url: "/service-areas/idaho", category: "location", icon: "location" },
    { title: "Utah Service Areas", description: "Cleaning services across Utah", url: "/service-areas/utah", category: "location", icon: "location" },
    
    // Page Sections
    { title: "Compliance & Certifications", description: "Our certifications and compliance standards", url: "/#compliance", category: "section", icon: "page", section: "compliance" },
    { title: "Testimonials", description: "Client reviews and success stories", url: "/#testimonials", category: "section", icon: "page", section: "testimonials" },
    { title: "Company Statistics", description: "Our experience and achievements", url: "/#stats", category: "section", icon: "page", section: "stats" },
    { title: "FAQ", description: "Frequently asked questions", url: "/construction-cleaning#faq", category: "section", icon: "page", section: "faq" },
    { title: "Case Studies", description: "Real project examples and results", url: "/#case-studies", category: "section", icon: "page", section: "case-studies" },
    
    // Legal
    { title: "Privacy Policy", description: "Our privacy policy and data protection", url: "/privacy-policy", category: "page", icon: "page" },
    { title: "Terms of Service", description: "Terms and conditions", url: "/terms-of-service", category: "page", icon: "page" },
    { title: "Sitemap", description: "Complete site navigation", url: "/sitemap", category: "page", icon: "page" },
  ];

  // Add location-specific entries dynamically
  const locationResults: SearchResult[] = [];
  
  // Get primary locations (limit to avoid too many results)
  const primaryLocations = allServiceLocations.filter(loc => loc.marketTier === 'primary' || loc.marketTier === 'secondary');
  
  primaryLocations.forEach(loc => {
    // Add construction cleaning entry if available
    if (loc.services.constructionCleanup) {
      locationResults.push({
        title: `${loc.name} - Construction Cleaning`,
        description: `Post-construction cleanup in ${loc.name}, ${loc.state}`,
        url: buildServiceLocationUrl(loc.state, 'construction-cleaning', loc.name),
        category: "location",
        icon: "location"
      });
    }
    
    // Add commercial cleaning entry if available
    if (loc.services.commercialCleaning) {
      locationResults.push({
        title: `${loc.name} - Commercial Cleaning`,
        description: `Commercial cleaning services in ${loc.name}, ${loc.state}`,
        url: buildServiceLocationUrl(loc.state, 'commercial-cleaning', loc.name),
        category: "location",
        icon: "location"
      });
    }
  });

  return [...staticResults, ...locationResults];
};

const searchIndex = buildSearchIndex();

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase().trim();
    const filtered = searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery);
      const descMatch = item.description.toLowerCase().includes(searchQuery);
      const sectionMatch = item.section?.toLowerCase().includes(searchQuery);
      return titleMatch || descMatch || sectionMatch;
    });

    setResults(filtered.slice(0, 8));
    setSelectedIndex(0);
  }, [query]);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus({ preventScroll: true });
      }, 100);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelectResult(results[selectedIndex]);
        }
        break;
    }
  };

  const handleSelectResult = (result: SearchResult) => {
    trackEvent('search_select', 'search', result.title);
    navigate(result.url);
    onClose();
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'service':
        return <Wrench className="w-4 h-4" />;
      case 'location':
        return <MapPin className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="relative mb-4">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search pages, services, and locations..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.trim().length > 0) {
                trackEvent('search_query', 'search', e.target.value);
              }
            }}
            onKeyDown={handleKeyDown}
            className="w-full h-16 pl-16 pr-16 text-lg bg-gray-900/90 backdrop-blur-sm border border-border/30 rounded-xl
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                     transition-all duration-200"
            data-testid="input-search"
          />
          <button
            onClick={onClose}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-secondary/50"
            data-testid="button-close-search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Results */}
        {results.length > 0 && (
          <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-2xl overflow-hidden glass-card-elevated">
            <div className="py-2 max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <button
                  key={`${result.url}-${index}`}
                  onClick={() => handleSelectResult(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-6 py-4 text-left transition-all duration-150 ${
                    index === selectedIndex
                      ? 'bg-secondary/50 text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/30 hover:text-foreground'
                  }`}
                  data-testid={`search-result-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 ${index === selectedIndex ? 'text-primary' : 'text-muted-foreground'}`}>
                      {getIcon(result.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base mb-1">
                        {result.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {result.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="px-6 py-3 border-t border-border/30 bg-secondary/20">
              <div className="text-xs text-muted-foreground flex items-center justify-between">
                <span>Use ↑↓ to navigate</span>
                <span>↵ to select • ESC to close</span>
              </div>
            </div>
          </div>
        )}

        {query.trim().length > 0 && results.length === 0 && (
          <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-2xl overflow-hidden glass-card-elevated">
            <div className="px-6 py-12 text-center">
              <div className="text-muted-foreground">
                No results found for "{query}"
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
