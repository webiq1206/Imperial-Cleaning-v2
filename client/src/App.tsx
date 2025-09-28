import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Home from "@/pages/home";
import ConstructionCleaning from "@/pages/construction-cleaning";
import CommercialCleaning from "@/pages/commercial-cleaning";
import ServiceAreasIdaho from "@/pages/service-areas-idaho";
import ServiceAreasUtah from "@/pages/service-areas-utah";
import NotFound from "@/pages/not-found";

function Router() {
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/construction-cleaning" component={ConstructionCleaning} />
      <Route path="/commercial-cleaning" component={CommercialCleaning} />
      <Route path="/service-areas/idaho" component={ServiceAreasIdaho} />
      <Route path="/service-areas/utah" component={ServiceAreasUtah} />
      <Route component={NotFound} />
    </Switch>
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
