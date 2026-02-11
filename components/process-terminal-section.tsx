import { useState, useEffect } from "react";
import { Settings, TrendingUp, Rocket } from "lucide-react";

export default function ProcessTerminalSection() {
 const [currentStep, setCurrentStep] = useState(0);
 
 const cleaningProcess = [
  {
   command: "imperial-clean --init",
   output: "✓ Initializing cleaning protocol...",
   description: "Site assessment and preparation",
   color: "text-cyan-400"
  },
  {
   command: "scan --debris --construction-waste",
   output: "✓ Debris removal: 847 items processed",
   description: "Construction debris and waste removal",
   color: "text-green-400"
  },
  {
   command: "clean --surfaces --windows --deep",
   output: "✓ Surface cleaning: 12,500 sq ft completed",
   description: "Deep cleaning of all surfaces and windows",
   color: "text-blue-400"
  },
  {
   command: "sanitize --disinfect --commercial-grade",
   output: "✓ Sanitization: EPA-approved disinfectants applied",
   description: "Commercial-grade sanitization and disinfection",
   color: "text-purple-400"
  },
  {
   command: "inspect --quality-check --final-walkthrough",
   output: "✓ Final inspection: 100% completion verified",
   description: "Quality assurance and final inspection",
   color: "text-yellow-400"
  },
  {
   command: "deploy --ready-for-occupancy",
   output: "Project ready for handover!",
   description: "Site ready for occupancy or handover",
   color: "text-green-500"
  }
 ];

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentStep((prev) => (prev + 1) % cleaningProcess.length);
  }, 3000);
  return () => clearInterval(interval);
 }, []);

 return (
  <section className="py-24 px-6 process-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
   <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
     <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">
      Our Cleaning Workflow
     </h2>
     <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
      A systematic, technology-driven approach to professional cleaning that ensures consistent, high-quality results every time.
     </p>
    </div>

    <div className="max-w-4xl mx-auto">
     {/* Terminal Window */}
     <div className="glass-effect sophisticated-glow rounded-lg border border-gray-800/40 overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
       <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
       </div>
       <div className="text-xs text-secondary-color font-mono">imperial-cleaning-system@production</div>
       <div className="w-12"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 md:p-6 font-mono text-sm leading-relaxed min-h-[300px] md:min-h-[400px]">
       {cleaningProcess.map((step, index) => (
        <div 
         key={index} 
         className={`mb-4 transition-all duration-500 ${
          index <= currentStep ? 'opacity-100' : 'opacity-30'
         }`}
         data-testid={`process-step-${index}`}
        >
         <div className="flex items-center mb-2">
          <span className="text-green-400 mr-2">$</span>
          <span className="text-white">{step.command}</span>
          {index === currentStep && (
           <span className="ml-2 w-2 h-4 bg-green-400 animate-pulse"></span>
          )}
         </div>
         <div className={`ml-4 mb-2 ${step.color}`} data-testid={`process-output-${index}`}>
          {step.output}
         </div>
         <div className="ml-4 mb-6 text-secondary-color text-xs" data-testid={`process-description-${index}`}>
          {step.description}
         </div>
        </div>
       ))}
       
       {/* Status Bar */}
       <div className="mt-8 pt-4 border-t border-gray-800">
        <div className="flex items-center justify-between text-xs text-secondary-color">
         <div className="flex items-center gap-4">
          <span>Status: {currentStep === cleaningProcess.length - 1 ? 'COMPLETE' : 'PROCESSING'}</span>
          <span>Progress: {Math.round(((currentStep + 1) / cleaningProcess.length) * 100)}%</span>
         </div>
         <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span>System Online</span>
         </div>
        </div>
       </div>
      </div>
     </div>

     {/* Process Benefits */}
     <div className="grid md:grid-cols-3 gap-6 mt-16">
      <div className="text-center">
       <div className="icon-gradient text-2xl mb-6">
        <Settings className="w-6 h-6" />
       </div>
       <h3 className="text-lg mb-2 text-foreground">Systematic Approach</h3>
       <p className="text-sm text-muted-foreground">
        Every step documented and executed with precision
       </p>
      </div>
      <div className="text-center">
       <div className="icon-gradient text-2xl mb-6">
        <TrendingUp className="w-6 h-6" />
       </div>
       <h3 className="text-lg mb-2 text-foreground">Quality Tracking</h3>
       <p className="text-sm text-muted-foreground">
        Real-time monitoring and quality assurance
       </p>
      </div>
      <div className="text-center">
       <div className="icon-gradient text-2xl mb-6">
        <Rocket className="w-6 h-6" />
       </div>
       <h3 className="text-lg mb-2 text-foreground">Efficient Execution</h3>
       <p className="text-sm text-muted-foreground">
        Optimized workflow for faster project completion
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
