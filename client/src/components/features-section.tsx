export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Why Choose
            <span className="gradient-text block">Imperial Cleaning?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the difference of professional cleaning services with our proven track record across Idaho and Utah.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="bg-card/30 p-8 rounded-xl border border-border/50 hover:border-border transition-all duration-300 backdrop-blur-sm">
              <div className="icon-gradient text-3xl mb-6">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid="feature-title-insured">Fully Insured</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="feature-desc-insured">
                Comprehensive insurance coverage protects your property and provides complete peace of mind for every project.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-card/30 p-8 rounded-xl border border-border/50 hover:border-border transition-all duration-300 backdrop-blur-sm">
              <div className="icon-gradient text-3xl mb-6">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid="feature-title-availability">24/7 Availability</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="feature-desc-availability">
                Flexible scheduling around the clock to meet your construction deadlines and business requirements.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-card/30 p-8 rounded-xl border border-border/50 hover:border-border transition-all duration-300 backdrop-blur-sm">
              <div className="icon-gradient text-3xl mb-6">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid="feature-title-guarantee">Quality Guaranteed</h3>
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
