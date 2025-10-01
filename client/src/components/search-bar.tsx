import { useState, useEffect, useRef } from "react";
import { Search, MapPin, Wrench, FileText, X } from "lucide-react";
import { useLocation } from "wouter";
import { trackEvent } from "@/lib/analytics";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  section?: string;
  category: 'page' | 'service' | 'location' | 'section';
  icon: 'page' | 'service' | 'location';
}

const searchIndex: SearchResult[] = [
  // Main Pages
  { title: "Home", description: "Imperial Cleaning Inc. homepage", url: "/", category: "page", icon: "page" },
  { title: "About", description: "Learn about Imperial Cleaning Inc.", url: "/about", category: "page", icon: "page" },
  { title: "Contact", description: "Get in touch with us", url: "/contact", category: "page", icon: "page" },
  
  // Services
  { title: "Construction Cleaning", description: "Post-construction cleanup services", url: "/construction-cleaning", category: "service", icon: "service" },
  { title: "Commercial Cleaning", description: "Daily office & facility maintenance", url: "/commercial-cleaning", category: "service", icon: "service" },
  
  // Service Areas - Idaho
  { title: "Idaho Service Areas", description: "Cleaning services across Idaho", url: "/service-areas/idaho", category: "location", icon: "location" },
  { title: "Idaho Falls", description: "Construction & commercial cleaning in Idaho Falls", url: "/construction-cleaning/idaho-falls", category: "location", icon: "location" },
  { title: "Pocatello", description: "Construction & commercial cleaning in Pocatello", url: "/construction-cleaning/pocatello", category: "location", icon: "location" },
  { title: "Twin Falls", description: "Construction & commercial cleaning in Twin Falls", url: "/construction-cleaning/twin-falls", category: "location", icon: "location" },
  { title: "Blackfoot", description: "Construction & commercial cleaning in Blackfoot", url: "/construction-cleaning/blackfoot", category: "location", icon: "location" },
  { title: "Rexburg", description: "Construction & commercial cleaning in Rexburg", url: "/construction-cleaning/rexburg", category: "location", icon: "location" },
  { title: "Boise", description: "Construction & commercial cleaning in Boise", url: "/construction-cleaning/boise", category: "location", icon: "location" },
  
  // Service Areas - Utah
  { title: "Utah Service Areas", description: "Cleaning services across Utah", url: "/service-areas/utah", category: "location", icon: "location" },
  { title: "Salt Lake City", description: "Construction & commercial cleaning in Salt Lake City", url: "/construction-cleaning/salt-lake-city", category: "location", icon: "location" },
  { title: "Logan", description: "Construction & commercial cleaning in Logan", url: "/construction-cleaning/logan", category: "location", icon: "location" },
  { title: "Ogden", description: "Construction & commercial cleaning in Ogden", url: "/construction-cleaning/ogden", category: "location", icon: "location" },
  { title: "Provo", description: "Construction & commercial cleaning in Provo", url: "/construction-cleaning/provo", category: "location", icon: "location" },
  
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

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [, navigate] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

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
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
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

  return (
    <div ref={searchRef} className="relative w-full max-w-xs lg:max-w-sm">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            if (e.target.value.trim().length > 0) {
              trackEvent('search_query', 'search', e.target.value);
            }
          }}
          onFocus={() => {
            if (query.trim().length > 0) {
              setIsOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
          className="w-full h-9 pl-9 pr-9 text-sm bg-secondary/30 border border-border/30 rounded-lg
                   text-foreground placeholder:text-muted-foreground
                   focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50
                   transition-all duration-200 hover:border-border/50"
          data-testid="input-search"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-clear-search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card/98 backdrop-blur-md border border-border/50 rounded-lg shadow-xl overflow-hidden z-50 glass-card-elevated">
          <div className="py-2 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={`${result.url}-${index}`}
                onClick={() => handleSelectResult(result)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full px-4 py-3 text-left transition-all duration-150 ${
                  index === selectedIndex
                    ? 'bg-secondary/50 text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/30 hover:text-foreground'
                }`}
                data-testid={`search-result-${index}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 ${index === selectedIndex ? 'text-primary' : 'text-muted-foreground'}`}>
                    {getIcon(result.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm truncate">
                      {result.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 truncate">
                      {result.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-border/30 bg-secondary/20">
            <div className="text-xs text-muted-foreground flex items-center justify-between">
              <span>Use ↑↓ to navigate</span>
              <span>↵ to select</span>
            </div>
          </div>
        </div>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card/98 backdrop-blur-md border border-border/50 rounded-lg shadow-xl overflow-hidden z-50 glass-card-elevated">
          <div className="px-4 py-6 text-center">
            <div className="text-muted-foreground text-sm">
              No results found for "{query}"
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
