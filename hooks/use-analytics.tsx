import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';

export const useAnalytics = () => {
 const [location] = useLocation();
 const prevLocationRef = useRef<string>('');
 
 useEffect(() => {
  // Track page views when location changes
  if (location !== prevLocationRef.current) {
   // Track the page view
   trackPageView(location);
   prevLocationRef.current = location;
  }
 }, [location]);
};
