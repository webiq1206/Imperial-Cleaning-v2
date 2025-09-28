import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyContacts from "@/components/sticky-contacts";
import { useState } from "react";
import ContactFormModal from "@/components/contact-form-modal";

export default function ServiceAreasUtah() {
  const [showContactForm, setShowContactForm] = useState(false);

  const cities = [
    {
      name: "Salt Lake City",
      description: "Professional cleaning services for Salt Lake City's growing construction and commercial markets. Premier cleaning solutions in Utah's capital.",
      services: ["High-Rise Construction Cleanup", "Commercial Office Cleaning", "Facility Maintenance", "Project Management"]
    },
    {
      name: "Logan",
      description: "Reliable commercial and construction cleaning services in Logan. Serving contractors and businesses throughout Cache County.",
      services: ["Construction Site Services", "Commercial Cleaning", "University Facilities", "Industrial Cleaning"]
    },
    {
      name: "Ogden",
      description: "Quality cleaning services for Ogden businesses and construction projects. Trusted by contractors and commercial clients in Weber County.",
      services: ["Construction Cleanup", "Commercial Maintenance", "Government Facilities", "Healthcare Cleaning"]
    },
    {
      name: "Provo",
      description: "Professional cleaning solutions for Provo area construction sites and commercial facilities in Utah County.",
      services: ["Tech Facility Cleaning", "Commercial Services", "Construction Support", "Educational Facilities"]
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Utah Cleaning Services
            <span className="gradient-text-cyan-purple block">Wasatch Front & Beyond</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional construction and commercial cleaning services throughout Utah. Trusted by contractors and businesses across the Wasatch Front.
          </p>
          <button 
            className="pill-button-primary px-8 py-4 text-lg font-semibold hover-lift"
            onClick={() => setShowContactForm(true)}
            data-testid="button-request-quote"
          >
            Request Quote for Utah
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Utah Cities We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive cleaning services across Utah's major metropolitan areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cities.map((city, index) => (
              <div key={index} className="resend-card hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{city.name} <span className="gradient-text-cyan-purple">Cleaning Services</span></h3>
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
            <h2 className="text-4xl font-bold mb-4 text-foreground">Additional Utah Service Areas</h2>
            <p className="text-xl text-muted-foreground">
              We also serve these Utah communities with professional cleaning services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "West Valley City", "Sandy", "Orem", "Layton",
              "Murray", "Taylorsville", "West Jordan", "Draper",
              "Lehi", "Clearfield", "Bountiful", "Park City"
            ].map((city, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground">{city}</p>
                <p className="text-sm text-muted-foreground mt-1">Construction & Commercial</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Utah */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Utah Trusts Imperial Cleaning</h2>
            <p className="text-xl text-muted-foreground">
              Mountain West expertise, Wasatch Front coverage, and professional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-mountain"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Mountain West Expertise</h3>
              <p className="text-muted-foreground">We understand Utah's unique climate and high-altitude construction needs</p>
            </div>
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-city"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Wasatch Front Coverage</h3>
              <p className="text-muted-foreground">Complete coverage from Ogden to Provo and all points between</p>
            </div>
            <div className="text-center">
              <div className="icon-gradient text-5xl mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Utah Excellence</h3>
              <p className="text-muted-foreground">Recognized by Utah contractors and businesses for superior service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Serve Your Utah Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for professional cleaning services anywhere in Utah
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => setShowContactForm(true)}
            data-testid="button-contact-utah"
          >
            Get Utah Service Quote
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
