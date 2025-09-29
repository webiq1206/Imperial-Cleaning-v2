import { Link } from "wouter";

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 features-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground">
            Why Businesses Choose Imperial Cleaning
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
            Most trusted commercial cleaning company with proven expertise across multiple markets and regions. Licensed, bonded, and certified with comprehensive coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group animate-fade-in-up stagger-delay-1">
            <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand  parallax-subtle p-6 rounded-lg">
              <div className="resend-icon mb-6 hover-lift-gentle  group-hover:scale-105 transition-all duration-500">
                <i className="fas fa-shield-alt icon-gradient"></i>
              </div>
              
              {/* Elegant inset divider after icon */}
              <div className="glass-divider-top mb-6"></div>
              
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" data-testid="feature-title-insured">Licensed & Insured</h3>
              
              {/* Inset divider before description */}
              <div className="glass-divider-top mb-4"></div>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="feature-desc-insured">
                $2M liability insurance and comprehensive bonding provides complete peace of mind for every commercial cleaning project. <Link href="#compliance" className="text-primary hover:text-primary/80 transition-colors">View our certifications →</Link>
              </p>
            </div>
          </div>

          <div className="group animate-fade-in-up stagger-delay-2">
            <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand  parallax-gentle p-6 rounded-lg">
              <div className="resend-icon mb-6 hover-lift-gentle  group-hover:scale-105 transition-all duration-500">
                <i className="fas fa-clock icon-gradient"></i>
              </div>
              
              {/* Elegant inset divider after icon */}
              <div className="glass-divider-top mb-6"></div>
              
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" data-testid="feature-title-availability">24/7 Service Available</h3>
              
              {/* Inset divider before description */}
              <div className="glass-divider-top mb-4"></div>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="feature-desc-availability">
                Around-the-clock availability throughout our Idaho and Utah service areas. Flexible scheduling and responsive service for all cleanup needs across both states.
              </p>
            </div>
          </div>

          <div className="group animate-fade-in-up stagger-delay-3">
            <div className="glass-card-elevated sophisticated-glow hover-lift-moderate hover-glow-expand  parallax-depth p-6 rounded-lg">
              <div className="resend-icon mb-6 hover-lift-gentle  group-hover:scale-105 transition-all duration-500">
                <i className="fas fa-award icon-gradient"></i>
              </div>
              
              {/* Elegant inset divider after icon */}
              <div className="glass-divider-top mb-6"></div>
              
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" data-testid="feature-title-guarantee">Certified Quality Standards</h3>
              
              {/* Inset divider before description */}
              <div className="glass-divider-top mb-4"></div>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="feature-desc-guarantee">
                100% satisfaction guarantee backed by industry certification and multi-state compliance. Professional services that exceed expectations with documented quality assurance protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
