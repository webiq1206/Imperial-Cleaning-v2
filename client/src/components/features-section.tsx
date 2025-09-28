export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Imperial Cleaning?
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the difference of professional cleaning services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="icon-gradient text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="feature-title-insured">Fully Insured</h3>
            <p className="text-muted-foreground" data-testid="feature-desc-insured">
              Comprehensive insurance coverage for your peace of mind
            </p>
          </div>

          <div className="text-center group">
            <div className="icon-gradient text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="feature-title-availability">24/7 Availability</h3>
            <p className="text-muted-foreground" data-testid="feature-desc-availability">
              Flexible scheduling to meet your project deadlines
            </p>
          </div>

          <div className="text-center group">
            <div className="icon-gradient text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-award"></i>
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="feature-title-guarantee">Quality Guaranteed</h3>
            <p className="text-muted-foreground" data-testid="feature-desc-guarantee">
              100% satisfaction guarantee on all cleaning services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
