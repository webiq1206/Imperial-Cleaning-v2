import { Link } from "wouter";

export default function ServiceAreasSection() {
  return (
    <section id="areas" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-muted-foreground">
            Proudly serving construction and commercial clients across Idaho and Utah
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Idaho</h3>
            <div className="grid grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p data-testid="city-idaho-falls">• Idaho Falls</p>
                <p data-testid="city-pocatello">• Pocatello</p>
                <p data-testid="city-rexburg">• Rexburg</p>
                <p data-testid="city-blackfoot">• Blackfoot</p>
              </div>
              <div>
                <p data-testid="city-ammon">• Ammon</p>
                <p data-testid="city-chubbuck">• Chubbuck</p>
                <p data-testid="city-shelley">• Shelley</p>
                <p data-testid="city-rigby">• Rigby</p>
              </div>
            </div>
            <Link href="/service-areas/idaho">
              <button 
                className="mt-6 w-full neon-border py-3 rounded-lg font-medium"
                data-testid="button-view-idaho-areas"
              >
                View All Idaho Areas
              </button>
            </Link>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Utah</h3>
            <div className="grid grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p data-testid="city-logan">• Logan</p>
                <p data-testid="city-ogden">• Ogden</p>
                <p data-testid="city-salt-lake">• Salt Lake City</p>
                <p data-testid="city-provo">• Provo</p>
              </div>
              <div>
                <p data-testid="city-west-valley">• West Valley</p>
                <p data-testid="city-sandy">• Sandy</p>
                <p data-testid="city-orem">• Orem</p>
                <p data-testid="city-layton">• Layton</p>
              </div>
            </div>
            <Link href="/service-areas/utah">
              <button 
                className="mt-6 w-full neon-border py-3 rounded-lg font-medium"
                data-testid="button-view-utah-areas"
              >
                View All Utah Areas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
