export default function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-foreground">
            Why Choose Imperial Cleaning?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the difference with our proven track record across Idaho and Utah.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-border rounded-lg hover:border-muted transition-colors">
            <div className="resend-icon mx-auto mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground" data-testid="feature-title-insured">Fully Insured</h3>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="feature-desc-insured">
              Comprehensive insurance coverage protects your property and provides complete peace of mind for every project.
            </p>
          </div>

          <div className="text-center p-6 border border-border rounded-lg hover:border-muted transition-colors">
            <div className="resend-icon mx-auto mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground" data-testid="feature-title-availability">24/7 Availability</h3>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="feature-desc-availability">
              Flexible scheduling around the clock to meet your construction deadlines and business requirements.
            </p>
          </div>

          <div className="text-center p-6 border border-border rounded-lg hover:border-muted transition-colors">
            <div className="resend-icon mx-auto mb-4">
              <i className="fas fa-award"></i>
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground" data-testid="feature-title-guarantee">Quality Guaranteed</h3>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="feature-desc-guarantee">
              100% satisfaction guarantee on all cleaning services with professional standards that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
