export default function PartnersSection() {
  const partners = [
    {
      name: "IICRC Certified",
      description: "Institute of Inspection, Cleaning and Restoration",
      icon: "fas fa-certificate",
      type: "certification"
    },
    {
      name: "General Liability",
      description: "$2M Coverage",
      icon: "fas fa-shield-alt",
      type: "insurance"
    },
    {
      name: "OSHA Compliant",
      description: "Safety Standards Certified",
      icon: "fas fa-hard-hat",
      type: "certification"
    },
    {
      name: "EPA Registered",
      description: "Environmental Protection Agency",
      icon: "fas fa-leaf",
      type: "certification"
    },
    {
      name: "Better Business Bureau",
      description: "A+ Rating",
      icon: "fas fa-star",
      type: "accreditation"
    },
    {
      name: "Bonded & Insured",
      description: "Complete Protection",
      icon: "fas fa-lock",
      type: "insurance"
    }
  ];

  return (
    <section className="py-24 px-6 partners-sophisticated-bg noise-overlay section-transition-top section-transition-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground">
            Trusted & Certified
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
            Our certifications and partnerships ensure the highest quality cleaning services with complete protection and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="glass-card-elevated sophisticated-glow group text-center p-6 transition-all duration-300 hover:-translate-y-1 rounded-lg"
              data-testid={`partner-card-${index}`}
            >
              <div className="resend-icon mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={partner.icon}></i>
              </div>
              
              {/* Elegant inset divider between icon and content */}
              <div className="glass-divider-top mb-4"></div>
              
              <h3 className="text-sm font-semibold mb-2 text-foreground" data-testid={`partner-name-${index}`}>
                {partner.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-tight" data-testid={`partner-desc-${index}`}>
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              All certifications current and verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}