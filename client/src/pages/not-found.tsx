import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function NotFound() {
 useEffect(() => {
  // Track 404 event for analytics
  trackEvent(
   '404_redirect',
   'navigation',
   `404 page → homepage redirect from ${window.location.pathname}`
  );
  
  // Redirect to homepage for SEO
  window.location.replace('/');
 }, []);

 // Show brief loading message during redirect
 return (
  <div className="min-h-screen flex items-center justify-center">
   <div className="text-center">
    <div className="text-lg text-muted-foreground">Redirecting to homepage...</div>
   </div>
  </div>
 );
}
