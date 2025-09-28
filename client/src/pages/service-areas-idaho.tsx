import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyContacts from "@/components/sticky-contacts";
import { useState } from "react";
import ContactFormModal from "@/components/contact-form-modal";

export default function ServiceAreasIdaho() {
  const [showContactForm, setShowContactForm] = useState(false);

  const cities = [
    {
      name: "Idaho Falls",
      description: "Professional cleaning services for Idaho Falls construction and commercial clients. Premier cleaning solutions in southeastern Idaho.",
      services: ["Construction Cleaning", "Commercial Cleaning", "Office Maintenance", "Post-Construction Cleanup"]
    },
    {
      name: "Pocatello",
      description: "Reliable commercial and construction cleaning services in Pocatello. Serving contractors and businesses throughout Bannock County.",
      services: ["Construction Site Cleaning", "Commercial Maintenance", "Office Cleaning", "Facility Services"]
    },
    {
      name: "Rexburg",
      description: "Quality cleaning services for Rexburg businesses and construction projects. Trusted by contractors and commercial clients.",
      services: ["Construction Cleanup", "Commercial Cleaning", "Business Maintenance", "Project Cleaning"]
    },
    {
      name: "Blackfoot",
      description: "Professional cleaning solutions for Blackfoot area construction sites and commercial facilities.",
      services: ["Post-Construction Services", "Commercial Cleaning", "Facility Maintenance", "Construction Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StickyContacts />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-2"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Idaho Cleaning Services
            <span className="gradient-text-cyan-purple block">Statewide Coverage</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional construction and commercial cleaning services throughout Idaho. Trusted by contractors and businesses statewide.
          </p>
          <button 
            className="pill-button-primary px-8 py-4 text-lg font-semibold hover-lift"
            onClick={() => setShowContactForm(true)}
            data-testid="button-request-quote"
          >
            Request Quote for Idaho
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Idaho Cities We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive cleaning services across Idaho's major cities and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cities.map((city, index) => (
              <div key={index} className="resend-card hover-lift">
                <h3 className="text-2xl font-bold mb-4 gradient-text-cyan-purple">{city.name} Cleaning Services</h3>
                <p className="text-muted-foreground mb-6">{city.description}</p>
                <div className="space-y-2">
                  {city.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm">
                      <i className="fas fa-check text-primary mr-3"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Coverage Areas */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Idaho Service Areas</h2>
            <p className="text-xl text-muted-foreground">
              We also serve these Idaho communities with professional cleaning services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Ammon", "Chubbuck", "Shelley", "Rigby",
              "American Falls", "Preston", "Soda Springs", "Montpelier",
              "St. Anthony", "Driggs", "Victor", "Ashton"
            ].map((city, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                <p className="font-semibold">{city}</p>
                <p className="text-sm text-muted-foreground mt-1">Construction & Commercial</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Idaho */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Idaho Trusts Imperial Cleaning</h2>
            <p className="text-xl text-muted-foreground">
              Local expertise, statewide coverage, and professional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Idaho Knowledge</h3>
              <p className="text-muted-foreground">We understand Idaho's unique climate and construction challenges</p>
            </div>
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-truck"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Statewide Coverage</h3>
              <p className="text-muted-foreground">From Boise to Idaho Falls, we serve all major Idaho markets</p>
            </div>
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Idaho Partnerships</h3>
              <p className="text-muted-foreground">Trusted by Idaho contractors and businesses for over a decade</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Serve Your Idaho Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for professional cleaning services anywhere in Idaho
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => setShowContactForm(true)}
            data-testid="button-contact-idaho"
          >
            Get Idaho Service Quote
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
