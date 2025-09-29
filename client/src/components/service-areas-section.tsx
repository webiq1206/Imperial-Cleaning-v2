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
            Proudly serving Boise, the Treasure Valley, and construction and commercial clients throughout Idaho and Utah with professional cleaning solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Idaho - Treasure Valley Primary Market */}
          <div className="premium-card-bg sophisticated-glow transition-transform duration-300 ease-out hover:-translate-y-1 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="resend-icon mr-4">
                <i className="fas fa-star"></i>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">Idaho - Treasure Valley</h3>
                <p className="text-sm text-primary font-medium">Our Primary Market</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <i className="fas fa-crown text-primary mr-2"></i>
                Treasure Valley (Primary Market)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/service-areas/idaho#boise" className="group">
                  <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-boise">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Boise</span>
                    <span className="text-xs text-primary ml-auto">(Capital)</span>
                  </div>
                </Link>
                <Link href="/service-areas/idaho#meridian" className="group">
                  <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-meridian">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Meridian</span>
                  </div>
                </Link>
                <Link href="/service-areas/idaho#nampa" className="group">
                  <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-nampa">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Nampa</span>
                  </div>
                </Link>
                <Link href="/service-areas/idaho#eagle" className="group">
                  <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-eagle">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Eagle</span>
                  </div>
                </Link>
                <Link href="/service-areas/idaho#caldwell" className="group">
                  <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-caldwell">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Caldwell</span>
                  </div>
                </Link>
                <Link href="/service-areas/idaho#kuna" className="group">
                  <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-kuna">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Kuna</span>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center">
                <i className="fas fa-mountain text-muted-foreground mr-2"></i>
                Extended Idaho Coverage
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/service-areas/idaho#idaho-falls" className="group">
                  <div className="flex items-center text-xs p-1 rounded hover:bg-card transition-colors" data-testid="city-idaho-falls">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">Idaho Falls</span>
                  </div>
                </Link>
                <Link href="/service-areas/idaho#pocatello" className="group">
                  <div className="flex items-center text-xs p-1 rounded hover:bg-card transition-colors" data-testid="city-pocatello">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">Pocatello</span>
                  </div>
                </Link>
                <Link href="/service-areas/idaho#twin-falls" className="group">
                  <div className="flex items-center text-xs p-1 rounded hover:bg-card transition-colors" data-testid="city-twin-falls">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">Twin Falls</span>
                  </div>
                </Link>
                <Link href="/service-areas/idaho#star" className="group">
                  <div className="flex items-center text-xs p-1 rounded hover:bg-card transition-colors" data-testid="city-star">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">Star</span>
                  </div>
                </Link>
              </div>
            </div>
            <Link href="/service-areas/idaho">
              <Button 
                variant="pill-primary"
                size="pill-md"
                data-testid="button-view-idaho-areas"
                className="w-full sm:w-auto"
              >
                View Treasure Valley Coverage →
              </Button>
            </Link>
          </div>

          {/* Utah - Secondary Market */}
          <div className="premium-card-bg sophisticated-glow transition-transform duration-300 ease-out hover:-translate-y-1 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="resend-icon mr-4">
                <i className="fas fa-city"></i>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">Utah</h3>
                <p className="text-sm text-muted-foreground font-medium">Wasatch Front Coverage</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <Link href="/service-areas/utah#salt-lake-city" className="group">
                <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-salt-lake">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Salt Lake City</span>
                  <span className="text-xs text-primary ml-auto">(Capital)</span>
                </div>
              </Link>
              <Link href="/service-areas/utah#logan" className="group">
                <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-logan">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Logan</span>
                </div>
              </Link>
              <Link href="/service-areas/utah#ogden" className="group">
                <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-ogden">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Ogden</span>
                </div>
              </Link>
              <Link href="/service-areas/utah#provo" className="group">
                <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-provo">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Provo</span>
                </div>
              </Link>
              <Link href="/service-areas/utah#west-valley" className="group">
                <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-west-valley">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">West Valley</span>
                </div>
              </Link>
              <Link href="/service-areas/utah#sandy" className="group">
                <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-sandy">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Sandy</span>
                </div>
              </Link>
              <Link href="/service-areas/utah#orem" className="group">
                <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-orem">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Orem</span>
                </div>
              </Link>
              <Link href="/service-areas/utah#layton" className="group">
                <div className="flex items-center p-2 rounded hover:bg-primary/10 transition-colors" data-testid="city-layton">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Layton</span>
                </div>
              </Link>
            </div>
            <Link href="/service-areas/utah">
              <Button 
                variant="pill-secondary"
                size="pill-md"
                data-testid="button-view-utah-areas"
              >
                Learn More →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
