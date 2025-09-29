// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Enhanced Page View Tracking
export const trackServicePageView = (
  serviceType: 'construction-cleaning' | 'commercial-cleaning',
  location?: string,
  marketTier?: 'primary' | 'secondary' | 'extended'
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  // Enhanced page view with service context
  window.gtag('config', measurementId, {
    page_path: location ? `/${serviceType}/${location}` : `/${serviceType}`,
    page_title: location ? 
      `${serviceType.replace('-', ' ')} in ${location}` : 
      `${serviceType.replace('-', ' ')} services`,
    custom_map: {
      service_type: serviceType,
      location: location || 'all_areas',
      market_tier: marketTier || 'general',
      page_category: location ? 'service-location' : 'service-hub'
    }
  });

  // Track as custom event for better reporting
  window.gtag('event', 'service_page_view', {
    event_category: 'page_views',
    service_type: serviceType,
    location: location || 'all_areas',
    market_tier: marketTier || 'general',
    page_category: location ? 'service-location' : 'service-hub'
  });
};

// Navigation Tracking
export const trackNavigationInteraction = (
  action: 'dropdown_open' | 'dropdown_close' | 'menu_click' | 'submenu_hover' | 'mobile_menu_toggle',
  menu: 'services' | 'service_areas' | 'main_nav',
  label?: string
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'navigation_interaction', {
    event_category: 'navigation',
    event_label: label,
    navigation_action: action,
    navigation_menu: menu,
    timestamp: Date.now()
  });
};

export const trackServiceNavigation = (
  serviceType: 'construction-cleaning' | 'commercial-cleaning',
  navigationPath: 'direct_link' | 'dropdown_selection' | 'submenu_location',
  location?: string
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'service_navigation', {
    event_category: 'navigation',
    service_type: serviceType,
    navigation_path: navigationPath,
    target_location: location || 'service_hub',
    user_journey_step: location ? 'location_selection' : 'service_selection'
  });
};

// Conversion Tracking
export const trackCTAClick = (
  ctaType: 'quote_request' | 'phone_call' | 'contact_form' | 'service_navigation',
  source: {
    page: string;
    section: string;
    serviceType?: 'construction-cleaning' | 'commercial-cleaning';
    location?: string;
    marketTier?: 'primary' | 'secondary' | 'extended';
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'cta_click', {
    event_category: 'conversions',
    cta_type: ctaType,
    cta_source_page: source.page,
    cta_source_section: source.section,
    service_type: source.serviceType || 'general',
    location: source.location || 'all_areas',
    market_tier: source.marketTier || 'general',
    conversion_step: 'cta_interaction',
    value: ctaType === 'quote_request' ? 10 : (ctaType === 'phone_call' ? 15 : 5)
  });
};

export const trackFormInteraction = (
  action: 'form_open' | 'form_step' | 'form_submit' | 'form_abandon',
  formType: 'contact_form' | 'quote_request',
  step?: number,
  serviceContext?: {
    serviceType?: 'construction-cleaning' | 'commercial-cleaning';
    location?: string;
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'form_interaction', {
    event_category: 'conversions',
    form_action: action,
    form_type: formType,
    form_step: step || 1,
    service_type: serviceContext?.serviceType || 'general',
    location: serviceContext?.location || 'all_areas',
    conversion_step: action === 'form_submit' ? 'conversion_complete' : 'conversion_in_progress'
  });
};

export const trackConversionComplete = (
  conversionType: 'quote_request' | 'phone_call' | 'contact_form',
  serviceContext: {
    serviceType?: 'construction-cleaning' | 'commercial-cleaning';
    location?: string;
    marketTier?: 'primary' | 'secondary' | 'extended';
    sourcePage: string;
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'conversion', {
    event_category: 'conversions',
    conversion_type: conversionType,
    service_type: serviceContext.serviceType || 'general',
    location: serviceContext.location || 'all_areas',
    market_tier: serviceContext.marketTier || 'general',
    source_page: serviceContext.sourcePage,
    value: conversionType === 'quote_request' ? 25 : (conversionType === 'phone_call' ? 30 : 15)
  });

  // Track as conversion goal
  window.gtag('event', 'purchase', {
    transaction_id: `${conversionType}_${Date.now()}`,
    value: conversionType === 'quote_request' ? 25 : (conversionType === 'phone_call' ? 30 : 15),
    currency: 'USD',
    items: [{
      item_id: conversionType,
      item_name: `${conversionType.replace('_', ' ')} - ${serviceContext.serviceType || 'general'}`,
      item_category: 'conversion',
      quantity: 1,
      price: conversionType === 'quote_request' ? 25 : (conversionType === 'phone_call' ? 30 : 15)
    }]
  });
};

// Engagement Tracking
export const trackContentEngagement = (
  contentType: 'case_study' | 'faq' | 'testimonial' | 'stats' | 'location_grid',
  action: 'view' | 'expand' | 'collapse' | 'click' | 'scroll',
  contentId?: string,
  serviceContext?: {
    serviceType?: 'construction-cleaning' | 'commercial-cleaning';
    location?: string;
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'content_engagement', {
    event_category: 'engagement',
    content_type: contentType,
    engagement_action: action,
    content_id: contentId || 'unknown',
    service_type: serviceContext?.serviceType || 'general',
    location: serviceContext?.location || 'all_areas',
    engagement_time: Date.now()
  });
};

export const trackScrollDepth = (
  depth: 25 | 50 | 75 | 90 | 100,
  pageType: 'homepage' | 'service-hub' | 'service-location' | 'about' | 'contact',
  serviceContext?: {
    serviceType?: 'construction-cleaning' | 'commercial-cleaning';
    location?: string;
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'scroll', {
    event_category: 'engagement',
    scroll_depth: depth,
    page_type: pageType,
    service_type: serviceContext?.serviceType || 'general',
    location: serviceContext?.location || 'all_areas'
  });
};

// Location-Specific Tracking
export const trackLocationInteraction = (
  action: 'location_view' | 'location_click' | 'location_cta' | 'location_info_expand',
  location: string,
  marketTier: 'primary' | 'secondary' | 'extended',
  serviceType?: 'construction-cleaning' | 'commercial-cleaning'
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'location_interaction', {
    event_category: 'locations',
    location_action: action,
    location: location,
    market_tier: marketTier,
    service_type: serviceType || 'general',
    location_engagement_score: marketTier === 'primary' ? 3 : (marketTier === 'secondary' ? 2 : 1)
  });
};

export const trackServiceDemand = (
  serviceType: 'construction-cleaning' | 'commercial-cleaning',
  location: string,
  demandIndicator: 'page_view' | 'cta_click' | 'quote_request' | 'return_visit'
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'service_demand', {
    event_category: 'demand_analytics',
    service_type: serviceType,
    location: location,
    demand_indicator: demandIndicator,
    demand_timestamp: Date.now(),
    demand_weight: demandIndicator === 'quote_request' ? 10 : (demandIndicator === 'cta_click' ? 5 : 1)
  });
};

// User Journey Tracking
export const trackUserJourney = (
  stage: 'discovery' | 'consideration' | 'decision' | 'conversion',
  touchpoint: string,
  serviceContext?: {
    serviceType?: 'construction-cleaning' | 'commercial-cleaning';
    location?: string;
    sessionDuration?: number;
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'user_journey', {
    event_category: 'funnel_tracking',
    journey_stage: stage,
    journey_touchpoint: touchpoint,
    service_type: serviceContext?.serviceType || 'general',
    location: serviceContext?.location || 'all_areas',
    session_duration: serviceContext?.sessionDuration || 0,
    funnel_position: stage === 'discovery' ? 1 : (stage === 'consideration' ? 2 : (stage === 'decision' ? 3 : 4))
  });
};

// Performance and SEO Tracking
export const trackSEOPerformance = (
  location: string,
  serviceType: 'construction-cleaning' | 'commercial-cleaning',
  metrics: {
    organicTraffic?: boolean;
    searchQuery?: string;
    rankingPosition?: number;
    localSearchResult?: boolean;
  }
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'seo_performance', {
    event_category: 'seo_analytics',
    location: location,
    service_type: serviceType,
    organic_traffic: metrics.organicTraffic || false,
    search_query: metrics.searchQuery || 'unknown',
    ranking_position: metrics.rankingPosition || 0,
    local_search_result: metrics.localSearchResult || false
  });
};

// Enhanced Error and Performance Tracking
export const trackAnalyticsError = (
  errorType: 'tracking_failure' | 'ga_load_error' | 'event_error',
  errorDetails?: string
) => {
  if (typeof window === 'undefined') return;
  
  // Fallback tracking for analytics errors
  console.warn(`Analytics Error [${errorType}]:`, errorDetails);
  
  if (window.gtag) {
    window.gtag('event', 'analytics_error', {
      event_category: 'system_errors',
      error_type: errorType,
      error_details: errorDetails || 'unknown',
      timestamp: Date.now()
    });
  }
};
