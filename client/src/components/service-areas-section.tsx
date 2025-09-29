import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServiceAreasSection() {
  return (
    <section id="areas" className="py-24 px-6 areas-sophisticated-bg noise-overlay grain-texture vignette-radial">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight text-foreground">
            Service Areas
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proudly serving construction and commercial clients across multiple markets with professional cleaning solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Primary Service Region */}
          <div className="premium-card-bg sophisticated-glow transition-transform duration-300 ease-out hover:-translate-y-1 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="resend-icon mr-4">
                <i className="fas fa-star"></i>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">Idaho Service Area</h3>
                <p className="text-sm text-primary font-medium">Primary Market Focus</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <i className="fas fa-crown text-primary mr-2"></i>
                Idaho Cleaning Services
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="glass-card-elevated p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional commercial and construction cleaning services throughout Idaho's major metropolitan areas and growing communities.
                  </p>
                  <Link href="/service-areas" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    View All Service Areas
                    <i className="fas fa-arrow-right ml-2 text-xs"></i>
                  </Link>
                </div>
                <Link href="/service-areas/idaho#kuna" className="group">
                  <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-kuna">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Kuna</span>
                  </div>
                </Link>
              </div>
            </div>
            
            <Link href="/service-areas/idaho">
              <Button 
                variant="pill-primary"
                size="pill-md"
                data-testid="button-view-region-one"
                className="w-full sm:w-auto"
              >
                View Idaho Coverage →
              </Button>
            </Link>
          </div>

          {/* Secondary Service Region */}
          <div className="premium-card-bg sophisticated-glow transition-transform duration-300 ease-out hover:-translate-y-1 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="resend-icon mr-4">
                <i className="fas fa-city"></i>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">Utah Service Area</h3>
                <p className="text-sm text-muted-foreground font-medium">Expanding Market Presence</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="glass-card-elevated p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  Growing service coverage across Utah's business centers with the same professional standards and quality assurance we provide in Idaho.
                </p>
                <Link href="/service-areas" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  View Utah Coverage
                  <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </Link>
              </div>
            </div>
            <Link href="/service-areas/utah">
              <Button 
                variant="pill-secondary"
                size="pill-md"
                data-testid="button-view-region-two"
              >
                View Utah Areas →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
