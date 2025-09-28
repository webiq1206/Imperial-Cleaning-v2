export default function ProcessTerminalSection() {
  const cleaningProcess = [
    {
      command: "imperial-clean --init",
      output: "✓ Initializing cleaning protocol...",
      description: "Site assessment and preparation"
    },
    {
      command: "scan --debris --construction-waste",
      output: "✓ Debris removal: 847 items processed",
      description: "Construction debris and waste removal"
    },
    {
      command: "clean --surfaces --windows --deep",
      output: "✓ Surface cleaning: 12,500 sq ft completed",
      description: "Deep cleaning of all surfaces and windows"
    },
    {
      command: "sanitize --disinfect --commercial-grade",
      output: "✓ Sanitization: EPA-approved disinfectants applied",
      description: "Commercial-grade sanitization and disinfection"
    },
    {
      command: "inspect --quality-check --final-walkthrough",
      output: "✓ Final inspection: 100% completion verified",
      description: "Quality assurance and final inspection"
    },
    {
      command: "deploy --ready-for-occupancy",
      output: "🎉 Project ready for handover!",
      description: "Site ready for occupancy or handover"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-foreground">
            Our Cleaning Workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A systematic approach to professional cleaning that ensures consistent, high-quality results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Code Example */}
          <div className="code-block overflow-hidden">
            {/* Code Header */}
            <div className="code-block-header">
              <div className="text-xs font-mono">Cleaning Process Steps</div>
            </div>

            {/* Code Content */}
            <div className="code-block-content">
              {cleaningProcess.map((step, index) => (
                <div 
                  key={index} 
                  className="mb-4"
                  data-testid={`process-step-${index}`}
                >
                  <div className="flex items-start mb-2">
                    <span className="code-comment mr-3">{index + 1}.</span>
                    <div className="flex-1">
                      <div className="code-command font-medium mb-1">{step.command}</div>
                      <div className="code-success text-sm mb-1" data-testid={`process-output-${index}`}>
                        {step.output}
                      </div>
                      <div className="code-comment text-xs" data-testid={`process-description-${index}`}>
                        {step.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Status Bar */}
              <div className="mt-6 pt-4 border-t border-muted">
                <div className="flex items-center justify-between text-xs">
                  <span className="code-comment">Status: Complete</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <span className="code-comment">All steps executed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="resend-icon mx-auto mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Systematic Approach</h3>
              <p className="text-sm text-muted-foreground">
                Every step documented and executed with precision
              </p>
            </div>
            <div className="text-center">
              <div className="resend-icon mx-auto mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Quality Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Real-time monitoring and quality assurance
              </p>
            </div>
            <div className="text-center">
              <div className="resend-icon mx-auto mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Efficient Execution</h3>
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