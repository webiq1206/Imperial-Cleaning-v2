'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '../lib/analytics';

export const useAnalytics = () => {
 const pathname = usePathname();
 const prevLocationRef = useRef<string>('');
 
 useEffect(() => {
  // Track page views when location changes
  if (pathname !== prevLocationRef.current) {
   // Track the page view
   trackPageView(pathname);
   prevLocationRef.current = pathname;
  }
 }, [pathname]);
};
