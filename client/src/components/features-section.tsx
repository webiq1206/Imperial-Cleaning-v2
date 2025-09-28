export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 features-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground">
            Why Choose Imperial Cleaning?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
            Experience the difference of professional cleaning services with our proven track record across Idaho and Utah.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group animate-fade-in-up stagger-delay-1">
            <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand glow-pulse-subtle parallax-subtle p-6 rounded-lg">
              <div className="resend-icon mb-6 hover-lift-gentle glow-pulse-breathing group-hover:scale-105 transition-all duration-500">
                <i className="fas fa-shield-alt icon-gradient"></i>
              </div>
              
              {/* Elegant inset divider after icon */}
              <div className="glass-divider-top mb-6"></div>
              
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" data-testid="feature-title-insured">Fully Insured</h3>
              
              {/* Inset divider before description */}
              <div className="glass-divider-top mb-4"></div>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="feature-desc-insured">
                Comprehensive insurance coverage protects your property and provides complete peace of mind for every project.
              </p>
            </div>
          </div>

          <div className="group animate-fade-in-up stagger-delay-2">
            <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand glow-pulse-subtle parallax-gentle p-6 rounded-lg">
              <div className="resend-icon mb-6 hover-lift-gentle glow-pulse-breathing group-hover:scale-105 transition-all duration-500">
                <i className="fas fa-clock icon-gradient"></i>
              </div>
              
              {/* Elegant inset divider after icon */}
              <div className="glass-divider-top mb-6"></div>
              
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" data-testid="feature-title-availability">24/7 Availability</h3>
              
              {/* Inset divider before description */}
              <div className="glass-divider-top mb-4"></div>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="feature-desc-availability">
                Flexible scheduling around the clock to meet your construction deadlines and business requirements.
              </p>
            </div>
          </div>

          <div className="group animate-fade-in-up stagger-delay-3">
            <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand glow-pulse-subtle parallax-depth p-6 rounded-lg">
              <div className="resend-icon mb-6 hover-lift-gentle glow-pulse-breathing group-hover:scale-105 transition-all duration-500">
                <i className="fas fa-award icon-gradient"></i>
              </div>
              
              {/* Elegant inset divider after icon */}
              <div className="glass-divider-top mb-6"></div>
              
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" data-testid="feature-title-guarantee">Quality Guaranteed</h3>
              
              {/* Inset divider before description */}
              <div className="glass-divider-top mb-4"></div>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="feature-desc-guarantee">
                100% satisfaction guarantee on all cleaning services with professional standards that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
