import { Link } from "wouter";

export default function ServiceAreasSection() {
  return (
    <section id="areas" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight text-foreground">
            Service <span className="gradient-text-cyan-purple">Areas</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proudly serving construction and commercial clients across Idaho and Utah with professional cleaning solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <div className="resend-card hover-lift">
            <div className="flex items-center mb-8">
              <div className="resend-icon mr-4">
                <i className="fas fa-mountain"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold gradient-text">Idaho</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center" data-testid="city-idaho-falls">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Idaho Falls</span>
                </div>
                <div className="flex items-center" data-testid="city-pocatello">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Pocatello</span>
                </div>
                <div className="flex items-center" data-testid="city-rexburg">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Rexburg</span>
                </div>
                <div className="flex items-center" data-testid="city-blackfoot">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Blackfoot</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center" data-testid="city-ammon">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Ammon</span>
                </div>
                <div className="flex items-center" data-testid="city-chubbuck">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Chubbuck</span>
                </div>
                <div className="flex items-center" data-testid="city-shelley">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Shelley</span>
                </div>
                <div className="flex items-center" data-testid="city-rigby">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Rigby</span>
                </div>
              </div>
            </div>
            <Link href="/service-areas/idaho">
              <button 
                className="pill-button"
                data-testid="button-view-idaho-areas"
              >
                Learn More →
              </button>
            </Link>
          </div>

          <div className="resend-card hover-lift">
            <div className="flex items-center mb-8">
              <div className="resend-icon mr-4">
                <i className="fas fa-city"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold gradient-text">Utah</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center" data-testid="city-logan">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Logan</span>
                </div>
                <div className="flex items-center" data-testid="city-ogden">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Ogden</span>
                </div>
                <div className="flex items-center" data-testid="city-salt-lake">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Salt Lake City</span>
                </div>
                <div className="flex items-center" data-testid="city-provo">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Provo</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center" data-testid="city-west-valley">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">West Valley</span>
                </div>
                <div className="flex items-center" data-testid="city-sandy">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Sandy</span>
                </div>
                <div className="flex items-center" data-testid="city-orem">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Orem</span>
                </div>
                <div className="flex items-center" data-testid="city-layton">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-muted-foreground">Layton</span>
                </div>
              </div>
            </div>
            <Link href="/service-areas/utah">
              <button 
                className="pill-button"
                data-testid="button-view-utah-areas"
              >
                Learn More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
