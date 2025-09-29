import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { isValidServiceLocation, getLocationBySlug } from "./lib/routing-utils";

// Layout
import PageLayout from "@/components/layout/page-layout";

// Pages
import Home from "@/pages/home";
import ConstructionCleaning from "@/pages/construction-cleaning";
import CommercialCleaning from "@/pages/commercial-cleaning";
import ServiceAreasIdaho from "@/pages/service-areas-idaho";
import ServiceAreasUtah from "@/pages/service-areas-utah";
import NotFound from "@/pages/not-found";

// Service/Location Page Component
interface ServiceLocationPageProps {
  params: {
    service: string;
    location: string;
  };
}

function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const { service, location } = params;
  
  // Validate the service/location combination
  if (!isValidServiceLocation(service, location)) {
    return <NotFound />;
  }
  
  const locationData = getLocationBySlug(location);
  
  // Render the appropriate service page with location context
  if (service === 'construction-cleaning') {
    return <ConstructionCleaning params={{}} locationData={locationData} />;
  } else if (service === 'commercial-cleaning') {
    return <CommercialCleaning params={{}} locationData={locationData} />;
  }
  
  return <NotFound />;
}

// About Page Component (simple implementation)
function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-foreground">About Imperial Cleaning Inc.</h1>
        <div className="prose prose-lg text-muted-foreground">
          <p className="text-xl mb-6">
            Imperial Cleaning Inc. has been providing professional cleaning services across Idaho and Utah since 2010. 
            We specialize in construction cleanup and commercial cleaning services for businesses, contractors, and 
            property managers throughout our service areas.
          </p>
          <p className="mb-6">
            Headquartered in Idaho Falls, Idaho, we serve clients across both states with comprehensive cleaning 
            solutions that meet the highest industry standards. Our team is fully licensed, bonded, and insured, 
            ensuring complete protection for your property and peace of mind for our clients.
          </p>
          <p>
            From post-construction debris removal to ongoing commercial maintenance, we deliver consistent, 
            reliable service that helps our clients maintain clean, safe, and professional environments.
          </p>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component (simple implementation)
function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Contact Imperial Cleaning Inc.</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Get In Touch</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong className="text-foreground">Phone:</strong><br />
                <a href="tel:+12085203202" className="text-primary hover:text-primary/80">(208) 520-3202</a>
              </div>
              <div>
                <strong className="text-foreground">Email:</strong><br />
                <a href="mailto:service@imperialcleaninginc.com" className="text-primary hover:text-primary/80">
                  service@imperialcleaninginc.com
                </a>
              </div>
              <div>
                <strong className="text-foreground">Headquarters:</strong><br />
                Idaho Falls, ID
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Business Hours</h2>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Emergency Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Router() {
  useAnalytics();
  
  return (
    <PageLayout>
      <Switch>
        {/* Homepage */}
        <Route path="/" component={Home} />
        
        {/* Service pages */}
        <Route path="/construction-cleaning" component={ConstructionCleaning} />
        <Route path="/commercial-cleaning" component={CommercialCleaning} />
        
        {/* Service + Location pages */}
        <Route path="/construction-cleaning/:location">
          {(params) => <ServiceLocationPage params={{ service: 'construction-cleaning', location: params.location }} />}
        </Route>
        <Route path="/commercial-cleaning/:location">
          {(params) => <ServiceLocationPage params={{ service: 'commercial-cleaning', location: params.location }} />}
        </Route>
        
        {/* Service areas */}
        <Route path="/service-areas/idaho" component={ServiceAreasIdaho} />
        <Route path="/service-areas/utah" component={ServiceAreasUtah} />
        
        {/* About and Contact pages */}
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        
        {/* 404 fallback */}
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
}

function App() {
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;