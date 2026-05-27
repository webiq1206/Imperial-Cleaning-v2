"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { StructuredData } from "@/components/structured-data";
import RelatedContent from "@/components/shared/related-content";
import { CheckCircle, Phone, MapPin, Mail, ArrowLeft, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const contactQueryClient = new QueryClient({
  defaultOptions: { mutations: { retry: false } },
});

export default function ContactClient() {
  return (
    <QueryClientProvider client={contactQueryClient}>
      <ContactClientInner />
    </QueryClientProvider>
  );
}

function ContactClientInner() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://imperialcleaninginc.com/#localbusiness",
    "name": "Imperial Cleaning Inc",
    "alternateName": "Imperial Cleaning",
    "description": "Professional construction and commercial cleaning services in Idaho Falls and throughout Idaho and Utah. Contact us for free cleaning quotes and reliable service.",
    "url": "https://imperialcleaninginc.com",
    "telephone": "+1-208-520-3202",
    "email": "service@imperialcleaninginc.com",
    "logo": "https://imperialcleaninginc.com/hero-logo.png",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.4666",
      "longitude": "-112.0336"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-208-520-3202",
      "email": "service@imperialcleaninginc.com",
      "contactType": "customer service",
      "areaServed": ["ID", "UT"],
      "availableLanguage": "English"
    },
    "areaServed": [
      { "@type": "State", "name": "Idaho", "sameAs": "https://en.wikipedia.org/wiki/Idaho" },
      { "@type": "State", "name": "Utah", "sameAs": "https://en.wikipedia.org/wiki/Utah" }
    ],
    "priceRange": "$$"
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Imperial Cleaning Inc",
    "description": "Contact Imperial Cleaning Inc for professional cleaning services in Idaho & Utah. Call (208) 520-3202 for free quotes.",
    "url": "https://imperialcleaninginc.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Imperial Cleaning Inc",
      "telephone": "+1-208-520-3202",
      "email": "service@imperialcleaninginc.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://imperialcleaninginc.com/contact" }
    ]
  };

  const contactMethods: { title: string; description: string; action: string; label: string; icon: LucideIcon; iconKey: string; available: string }[] = [
    {
      title: "Call Us",
      description: "Speak directly with our team",
      action: "tel:+12085203202",
      label: "(208) 520-3202",
      icon: Phone,
      iconKey: "phone",
      available: "Mon-Fri 7AM-6PM, Sat 8AM-4PM"
    },
    {
      title: "Email Us",
      description: "Send us your project details",
      action: "mailto:service@imperialcleaninginc.com",
      label: "service@imperialcleaninginc.com",
      icon: Mail,
      iconKey: "envelope",
      available: "24/7 - We respond within 4 hours"
    },
    {
      title: "Visit Us",
      description: "Meet us at our headquarters",
      action: "https://www.google.com/maps/place/Idaho+Falls,+ID",
      label: "Idaho Falls, ID",
      icon: MapPin,
      iconKey: "map-marker-alt",
      available: "By appointment"
    }
  ];

  return (
    <>
      <StructuredData data={[localBusinessSchema, contactPageSchema, breadcrumbSchema]} />

      {/* Hero Section */}
      <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-8 tracking-tight leading-tight text-foreground">
              Get Your Free Quote
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              Connect with Idaho and Utah&apos;s most trusted cleaning professionals.
              Fast responses, transparent pricing, exceptional results.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card-elevated sophisticated-glow p-8 rounded-lg text-center hover-lift-moderate group transition-all duration-300"
                  data-testid={`contact-method-${method.iconKey}`}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl mb-3 text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="text-primary text-lg mb-2">{method.label}</div>
                  <div className="text-sm text-muted-foreground">{method.available}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Contact Form */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Section */}
            <div>
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight text-foreground">
                  Tell Us About Your Project
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Complete our quick survey to receive a personalized quote tailored to your specific cleaning needs.
                  Takes less than 2 minutes.
                </p>
              </div>

              {!isSubmitted ? (
                <ContactFormSurvey
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  onSubmitComplete={() => setIsSubmitted(true)}
                />
              ) : (
                <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl mb-4 text-foreground">Quote Request Received!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for choosing Imperial Cleaning. We&apos;ll review your project details and contact you
                    within 24 hours with a detailed quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+12085203202"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now for Faster Service
                    </a>
                    <button
                      onClick={() => { setIsSubmitted(false); setCurrentStep(1); }}
                      className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="lg:pl-8">
              <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg mb-8">
                <h3 className="text-2xl mb-6 text-foreground">Why Choose Imperial Cleaning?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <div className="text-foreground">Fast Response</div>
                      <div className="text-sm text-muted-foreground">All quotes delivered within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <div className="text-foreground">Transparent Pricing</div>
                      <div className="text-sm text-muted-foreground">No hidden fees or surprise charges</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <div className="text-foreground">Licensed & Insured</div>
                      <div className="text-sm text-muted-foreground">Full liability and workers&apos; compensation coverage</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <div className="text-foreground">Satisfaction Guarantee</div>
                      <div className="text-sm text-muted-foreground">100% satisfaction or we&apos;ll make it right</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
                <h3 className="text-xl mb-4 text-foreground">Service Areas</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-foreground">Idaho</div>
                    <div className="text-sm text-muted-foreground">Idaho Falls, Pocatello, Boise, Twin Falls, Rexburg, and surrounding areas</div>
                  </div>
                  <div>
                    <div className="text-foreground">Utah</div>
                    <div className="text-sm text-muted-foreground">Salt Lake City, Logan, Ogden, Provo, and surrounding areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        pageUrl="/contact"
        heading="While You're Here: Explore Our Services"
        description="Learn more about the services we offer and the cities we serve."
        limit={5}
      />
    </>
  );
}

// Contact Form Survey Component
interface ContactFormSurveyProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  onSubmitComplete: () => void;
}

function ContactFormSurvey({ currentStep, setCurrentStep, onSubmitComplete }: ContactFormSurveyProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  const steps: Array<{
    id: number;
    field: keyof typeof formData;
    label: string;
    placeholder?: string;
    required: boolean;
  }> = [
    { id: 1, field: "name", label: "What's your name?", placeholder: "Your full name", required: true },
    { id: 2, field: "company", label: "Company name?", placeholder: "Your company (optional)", required: false },
    { id: 3, field: "email", label: "Email address?", placeholder: "your@email.com", required: true },
    { id: 4, field: "phone", label: "Phone number?", placeholder: "(208) 555-0123", required: true },
    { id: 5, field: "service", label: "What service do you need?", required: true },
    { id: 6, field: "location", label: "Project location?", placeholder: "City, State", required: true },
    { id: 7, field: "message", label: "Project details?", placeholder: "Tell us about your project...", required: false }
  ];

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Failed to submit");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll contact you within 24 hours with your quote.",
      });
      onSubmitComplete();
    },
    onError: (error) => {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    const step = steps[currentStep - 1];
    const fieldValue = formData[step.field];

    if (step.required && (!fieldValue || fieldValue.trim() === "")) {
      toast({
        title: "Required Field",
        description: `Please fill in ${step.label.toLowerCase()}`,
        variant: "destructive",
      });
      return;
    }

    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    submitMutation.mutate(formData);
  };

  const progress = (currentStep / steps.length) * 100;
  const currentStepData = steps[currentStep - 1];

  return (
    <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-muted rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Step <span className="text-foreground">{currentStep}</span> of {steps.length}
        </p>
      </div>

      {/* Current Step */}
      <div className="mb-8">
        <h3 className="text-2xl mb-6 text-foreground">
          {currentStepData.label}
        </h3>

        {currentStepData.field === "service" ? (
          <div className="space-y-3">
            {["construction", "commercial", "both"].map((option) => (
              <button
                key={option}
                onClick={() => handleFieldChange("service", option)}
                className={`w-full p-4 text-left border rounded-lg transition-all duration-200 ${formData.service === option
                  ? "border-primary bg-primary/5 text-foreground"
                  : "border-border bg-card text-card-foreground hover:border-primary/50"
                  }`}
                data-testid={`option-${option}`}
              >
                <div className="">
                  {option === "construction" && "Construction Cleaning"}
                  {option === "commercial" && "Commercial Cleaning"}
                  {option === "both" && "Both Services"}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {option === "construction" && "Post-construction cleanup and debris removal"}
                  {option === "commercial" && "Office buildings, facilities, and ongoing maintenance"}
                  {option === "both" && "Complete cleaning solutions for all your needs"}
                </div>
              </button>
            ))}
          </div>
        ) : currentStepData.field === "message" ? (
          <textarea
            placeholder={currentStepData.placeholder}
            value={formData[currentStepData.field]}
            onChange={(e) => handleFieldChange(currentStepData.field, e.target.value)}
            rows={4}
            className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
            data-testid={`input-${currentStepData.field}`}
          />
        ) : (
          <input
            type={currentStepData.field === "email" ? "email" : currentStepData.field === "phone" ? "tel" : "text"}
            placeholder={currentStepData.placeholder}
            value={formData[currentStepData.field]}
            onChange={(e) => handleFieldChange(currentStepData.field, e.target.value)}
            className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 text-lg"
            data-testid={`input-${currentStepData.field}`}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-lg transition-all duration-200 ${currentStep === 1
            ? "invisible"
            : "border border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          data-testid="button-prev-step"
        >
          <ArrowLeft className="w-4 h-4 mr-2 inline" />
          Back
        </button>

        {currentStep < steps.length ? (
          <button
            onClick={nextStep}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
            data-testid="button-next-step"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitMutation.isPending}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50"
            data-testid="button-submit-form"
          >
            {submitMutation.isPending ? "Submitting..." : "Get My Quote"}
          </button>
        )}
      </div>
    </div>
  );
}
