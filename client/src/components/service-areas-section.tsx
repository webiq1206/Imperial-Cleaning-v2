import { Link } from "wouter";

export default function ServiceAreasSection() {
  return (
    <section id="areas" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Service
            <span className="gradient-text block">Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proudly serving construction and commercial clients across Idaho and Utah with professional cleaning solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card/30 p-8 rounded-xl border border-border/50 hover:border-border transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="icon-gradient text-3xl mr-4">
                <i className="fas fa-mountain"></i>
              </div>
              <h3 className="text-3xl font-bold gradient-text">Idaho</h3>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center" data-testid="city-idaho-falls">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Idaho Falls</span>
                </div>
                <div className="flex items-center" data-testid="city-pocatello">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Pocatello</span>
                </div>
                <div className="flex items-center" data-testid="city-rexburg">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Rexburg</span>
                </div>
                <div className="flex items-center" data-testid="city-blackfoot">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Blackfoot</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center" data-testid="city-ammon">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Ammon</span>
                </div>
                <div className="flex items-center" data-testid="city-chubbuck">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Chubbuck</span>
                </div>
                <div className="flex items-center" data-testid="city-shelley">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Shelley</span>
                </div>
                <div className="flex items-center" data-testid="city-rigby">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Rigby</span>
                </div>
              </div>
            </div>
            <Link href="/service-areas/idaho">
              <button 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                data-testid="button-view-idaho-areas"
              >
                View All Idaho Areas →
              </button>
            </Link>
          </div>

          <div className="bg-card/30 p-8 rounded-xl border border-border/50 hover:border-border transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="icon-gradient text-3xl mr-4">
                <i className="fas fa-city"></i>
              </div>
              <h3 className="text-3xl font-bold gradient-text">Utah</h3>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center" data-testid="city-logan">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Logan</span>
                </div>
                <div className="flex items-center" data-testid="city-ogden">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Ogden</span>
                </div>
                <div className="flex items-center" data-testid="city-salt-lake">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Salt Lake City</span>
                </div>
                <div className="flex items-center" data-testid="city-provo">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Provo</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center" data-testid="city-west-valley">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">West Valley</span>
                </div>
                <div className="flex items-center" data-testid="city-sandy">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Sandy</span>
                </div>
                <div className="flex items-center" data-testid="city-orem">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Orem</span>
                </div>
                <div className="flex items-center" data-testid="city-layton">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Layton</span>
                </div>
              </div>
            </div>
            <Link href="/service-areas/utah">
              <button 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                data-testid="button-view-utah-areas"
              >
                View All Utah Areas →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
