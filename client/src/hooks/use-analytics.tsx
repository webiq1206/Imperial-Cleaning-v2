import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>('');
  
  useEffect(() => {
    // Always scroll to top on location change, including initial page load
    if (location !== prevLocationRef.current) {
      // Use setTimeout to ensure DOM is updated before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, 0);
      
      // Track the page view
      trackPageView(location);
      prevLocationRef.current = location;
    }
  }, [location]);
  
  // Also handle initial page load
  useEffect(() => {
    // Ensure we scroll to top on initial mount
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);
};
