import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyContacts from "@/components/sticky-contacts";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactFormModal from "@/components/contact-form-modal";

export default function ConstructionCleaning() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StickyContacts />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-2"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Professional Construction Cleaning Across Idaho & Utah
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Post-construction cleanup services for contractors. From debris removal to final detailing, we prepare your projects for handover.
          </p>
          <Button 
            variant="pill-primary"
            size="pill-lg"
            onClick={() => setShowContactForm(true)}
            data-testid="button-request-quote"
            className="text-lg font-semibold px-8 py-4"
          >
            Request a Quote
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Construction Cleaning Idaho & Utah</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our construction cleaning services in Idaho and Utah help contractors meet project deadlines and safety requirements. We specialize in post-construction cleanup that prepares your site for final inspection and handover.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><i className="fas fa-check text-primary mr-3"></i>Post-construction debris removal across Idaho and Utah</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Window and surface cleaning for construction sites</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Floor care and protection services</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Final inspection ready cleanup</li>
                <li><i className="fas fa-check text-primary mr-3"></i>Safety-compliant construction site cleaning</li>
              </ul>
            </div>
            <div className="resend-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Site Assessment</h4>
                    <p className="text-sm text-muted-foreground">We evaluate your construction site's cleaning needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-broom"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Deep Cleaning</h4>
                    <p className="text-sm text-muted-foreground">Thorough removal of construction debris and dust</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="icon-gradient text-2xl mr-4 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Final Inspection</h4>
                    <p className="text-sm text-muted-foreground">Quality check to ensure inspection readiness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Construction Cleaning Service Areas</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Serving construction sites throughout Idaho and Utah
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="resend-card-subtle p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Idaho Construction Cleaning</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                <p>• Idaho Falls construction cleanup</p>
                <p>• Pocatello construction cleaning</p>
                <p>• Rexburg post-construction services</p>
                <p>• Blackfoot construction site cleaning</p>
                <p>• Ammon construction cleaning</p>
                <p>• Chubbuck construction cleanup</p>
                <p>• Shelley construction services</p>
                <p>• Rigby construction cleaning</p>
              </div>
            </div>
            <div className="resend-card-subtle p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Utah Construction Cleaning</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                <p>• Logan construction cleanup</p>
                <p>• Ogden construction cleaning</p>
                <p>• Salt Lake City construction services</p>
                <p>• Provo post-construction cleanup</p>
                <p>• West Valley construction cleaning</p>
                <p>• Sandy construction site services</p>
                <p>• Orem construction cleanup</p>
                <p>• Layton construction cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for professional construction cleaning services across Idaho and Utah
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => setShowContactForm(true)}
            data-testid="button-get-quote"
          >
            Get Your Quote Today
          </button>
        </div>
      </section>

      <Footer />
      
      {showContactForm && (
        <ContactFormModal 
          isOpen={showContactForm} 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </div>
  );
}
