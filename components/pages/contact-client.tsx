"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { StructuredData } from "@/components/structured-data";
import RelatedContent from "@/components/shared/related-content";
import { CheckCircle, Phone, MapPin, Mail, ArrowLeft, ArrowRight, Star, Home } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BUSINESS_FULL_ADDRESS,
  BUSINESS_HOURS_SENTENCE,
  BUSINESS_HOURS_SHORT,
} from "@/data/business-info";
import { GOOGLE_LISTING_URL, GOOGLE_REVIEW_COUNT } from "@/data/reviews";

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
  const [submitted, setSubmitted] = useState<{ name: string; phone: string } | null>(null);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Imperial Cleaning Inc",
    "description": "Contact Imperial Cleaning Inc for professional cleaning services in Idaho & Utah. Call (208) 520-3202 for free quotes.",
    "url": "https://imperialcleaninginc.com/contact",
    "isPartOf": { "@id": "https://imperialcleaninginc.com/#website" },
    "mainEntity": { "@id": "https://imperialcleaninginc.com/#organization" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://imperialcleaninginc.com/contact" }
    ]
  };

  const contactFaqs = [
    {
      question: "How fast will I get a quote?",
      answer: "Most quotes are delivered within 24 hours. For urgent projects, call (208) 520-3202 directly and we can often provide a same-day estimate over the phone or schedule a site visit."
    },
    {
      question: "Is the quote really free?",
      answer: "Yes. All estimates are free with no obligation, whether you call, email, or use the quote form. There are no hidden fees or surprise charges - the price we quote is the price you pay."
    },
    {
      question: "What information should I have ready for my quote?",
      answer: "The approximate square footage, the type of cleaning needed (post-construction or commercial), your project location, and your preferred timeline. Photos of the space help us quote faster and more accurately."
    },
    {
      question: "What are your business hours?",
      answer: `We answer calls ${BUSINESS_HOURS_SENTENCE}`
    },
    {
      question: "Do you travel to my city?",
      answer: "We serve 24 cities across Idaho and Utah from our Idaho Falls headquarters, including Pocatello, Rexburg, Twin Falls, Boise, Salt Lake City, Logan, Ogden, and Provo. If you are nearby one of these markets, contact us - we regularly take on projects in surrounding communities."
    }
  ];

  const contactFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const contactMethods: { title: string; description: string; action: string; label: string; icon: LucideIcon; iconKey: string; available: string }[] = [
    {
      title: "Call Us",
      description: "Speak directly with our team",
      action: "tel:+12085203202",
      label: "(208) 520-3202",
      icon: Phone,
      iconKey: "phone",
      available: BUSINESS_HOURS_SHORT
    },
    {
      title: "Email Us",
      description: "Send us your project details",
      action: "mailto:service@imperialcleaninginc.com",
      label: "Email Us",
      icon: Mail,
      iconKey: "envelope",
      available: "We respond within 4 hours"
    },
    {
      title: "Visit Us",
      description: "Meet us at our headquarters",
      action: "https://www.google.com/maps/search/?api=1&query=2653+Clarence+Pl+Idaho+Falls+ID+83402",
      label: BUSINESS_FULL_ADDRESS,
      icon: MapPin,
      iconKey: "map-marker-alt",
      available: BUSINESS_HOURS_SHORT
    }
  ];

  return (
    <>
      <StructuredData data={[contactPageSchema, breadcrumbSchema, contactFaqSchema]} />

      {/* Hero Section */}
      <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-6 tracking-tight leading-tight text-foreground">
              Get Your Free Quote
            </h1>
            {/* Review badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <a
                href={GOOGLE_LISTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 glass-effect hover:border-border transition-colors"
                data-testid="badge-contact-reviews"
              >
                <span className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </span>
                <span className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">5.0</span> · {GOOGLE_REVIEW_COUNT} reviews on Google
                </span>
              </a>
            </div>
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
              <div className="mb-10">
                <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight text-foreground">
                  Tell Us About Your Project
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  3 quick steps. We&apos;ll call you back within 2 business hours.
                </p>
              </div>

              {!submitted ? (
                <ContactFormSurvey onSubmitComplete={(name, phone) => setSubmitted({ name, phone })} />
              ) : (
                <PageSuccessScreen
                  name={submitted.name}
                  phone={submitted.phone}
                  onReset={() => setSubmitted(null)}
                />
              )}
            </div>

            {/* Info Section */}
            <div className="lg:pl-8">
              <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg mb-8">
                <h3 className="text-2xl mb-6 text-foreground">Why Choose Imperial Cleaning?</h3>
                <div className="space-y-4">
                  {[
                    { title: "Fast Response", desc: "We call back within 2 business hours" },
                    { title: "Transparent Pricing", desc: "No hidden fees or surprise charges" },
                    { title: "Licensed & Insured", desc: "Full liability and workers\u2019 compensation coverage" },
                    { title: "Satisfaction Guarantee", desc: "100% satisfaction or we\u2019ll make it right" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <div className="text-foreground">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
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

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight text-foreground">
              Quote &amp; Contact FAQ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Answers to the most common questions about quotes, pricing, and scheduling.
            </p>
          </div>
          <div className="space-y-6">
            {contactFaqs.map((faq) => (
              <div key={faq.question} className="glass-card-elevated p-6 rounded-lg">
                <h3 className="text-lg text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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

// ---- Success screen ----

function PageSuccessScreen({ name, phone, onReset }: { name: string; phone: string; onReset: () => void }) {
  const firstName = name.split(" ")[0];
  return (
    <div className="glass-card-elevated sophisticated-glow p-10 rounded-lg text-center" data-testid="contact-success-screen">
      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl mb-3 text-foreground">Thanks, {firstName}!</h3>
      <p className="text-muted-foreground mb-2 leading-relaxed">
        We received your request and will call{phone ? ` ${phone}` : " you"} within{" "}
        <strong className="text-foreground">2 business hours</strong> (Mon–Fri, 8AM–5PM MT).
      </p>
      <p className="text-muted-foreground text-sm mb-8">
        Urgent? Call us directly and we will pick up.
      </p>

      {/* What happens next */}
      <div className="text-left bg-card/50 rounded-lg p-5 mb-8 space-y-3">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">What happens next</p>
        {[
          "We review your project details",
          "We call you to confirm scope and answer questions",
          "You receive a written quote within 24 hours",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
            <span className="text-sm text-muted-foreground">{step}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="tel:+12085203202"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
          data-testid="button-success-call"
        >
          <Phone className="w-4 h-4" />
          Call (208) 520-3202
        </a>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 border border-border bg-card text-muted-foreground rounded-full hover:text-foreground hover:border-border/80 transition-colors text-sm"
          data-testid="link-success-home"
        >
          <Home className="w-4 h-4" />
          Back to homepage
        </Link>
        <button
          onClick={onReset}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-success-new-request"
        >
          Submit another request
        </button>
      </div>
    </div>
  );
}

// ---- 3-screen form ----

interface ContactFormSurveyProps {
  onSubmitComplete: (name: string, phone: string) => void;
}

function ContactFormSurvey({ onSubmitComplete }: ContactFormSurveyProps) {
  const { toast } = useToast();
  const [currentScreen, setCurrentScreen] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });
  // Quick callback (phone-only fast path)
  const [cbPhone, setCbPhone] = useState("");
  const [cbSubmitting, setCbSubmitting] = useState(false);

  const TOTAL = 3;

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
      onSubmitComplete(formData.name, formData.phone);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const set = (field: keyof typeof formData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const validateScreen = (): boolean => {
    if (currentScreen === 1) {
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        toast({ title: "Required", description: "Please enter your name.", variant: "destructive" });
        return false;
      }
      if (!formData.phone.trim() || formData.phone.trim().length < 10) {
        toast({ title: "Required", description: "Please enter a valid phone number.", variant: "destructive" });
        return false;
      }
    }
    if (currentScreen === 2) {
      if (!formData.service) {
        toast({ title: "Required", description: "Please select a service.", variant: "destructive" });
        return false;
      }
      if (!formData.location.trim() || formData.location.trim().length < 2) {
        toast({ title: "Required", description: "Please enter your project location.", variant: "destructive" });
        return false;
      }
    }
    if (currentScreen === 3) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRe.test(formData.email)) {
        toast({ title: "Required", description: "Please enter a valid email address.", variant: "destructive" });
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (!validateScreen()) return;
    if (currentScreen < TOTAL) setCurrentScreen((s) => s + 1);
  };

  const prev = () => {
    if (currentScreen > 1) setCurrentScreen((s) => s - 1);
  };

  const submit = () => {
    if (!validateScreen()) return;
    submitMutation.mutate(formData);
  };

  const handleCallbackSubmit = async () => {
    const stripped = cbPhone.replace(/\D/g, "");
    if (stripped.length < 10) {
      toast({ title: "Invalid number", description: "Please enter a valid 10-digit phone number.", variant: "destructive" });
      return;
    }
    setCbSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Quick Callback",
          email: "callback@queued.local",
          phone: cbPhone,
          service: "callback",
          location: "To be confirmed",
          message: "Quick callback request — no additional details provided",
        }),
      });
      onSubmitComplete("", cbPhone);
    } catch {
      toast({ title: "Error", description: "Failed to send. Please call us directly.", variant: "destructive" });
    } finally {
      setCbSubmitting(false);
    }
  };

  const progress = (currentScreen / TOTAL) * 100;

  return (
    <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
      {/* Progress */}
      <div className="mb-7">
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Step <span className="text-foreground">{currentScreen}</span> of {TOTAL}
        </p>
      </div>

      {/* Screen 1: Name + Phone */}
      {currentScreen === 1 && (
        <div className="space-y-5 mb-8" data-testid="form-step-1">
          <div>
            <label className="block text-sm text-foreground mb-2">Your name</label>
            <input
              type="text"
              placeholder="Full name"
              value={formData.name}
              autoComplete="name"
              onChange={(e) => set("name", e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") next(); }}
              className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 text-base"
              data-testid="input-name"
            />
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">Phone number</label>
            <input
              type="tel"
              placeholder="(208) 555-0123"
              value={formData.phone}
              autoComplete="tel"
              onChange={(e) => set("phone", e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") next(); }}
              className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 text-base"
              data-testid="input-phone"
            />
          </div>
          {/* Quick callback fast path */}
          <div className="mt-2 pt-5 border-t border-border/40">
            <p className="text-sm font-medium text-foreground mb-3">Or just leave your number — we'll call you</p>
            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="(208) 555-0123"
                value={cbPhone}
                autoComplete="tel"
                onChange={(e) => setCbPhone(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleCallbackSubmit(); }}
                className="flex-1 p-3 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                data-testid="input-callback-phone"
              />
              <button
                type="button"
                onClick={handleCallbackSubmit}
                disabled={cbSubmitting || !cbPhone.trim()}
                className="px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                data-testid="button-callback-submit"
              >
                {cbSubmitting ? "Sending..." : "Call me"}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">We call back within 4 hours on business days.</p>
          </div>
        </div>
      )}

      {/* Screen 2: Service + Location */}
      {currentScreen === 2 && (
        <div className="space-y-5 mb-8" data-testid="form-step-2">
          <div>
            <label className="block text-sm text-foreground mb-3">What service do you need?</label>
            <div className="space-y-2">
              {(
                [
                  { value: "construction", label: "Construction Cleaning", desc: "Post-construction cleanup and debris removal" },
                  { value: "commercial", label: "Commercial Cleaning", desc: "Offices, facilities, and ongoing maintenance" },
                  { value: "both", label: "Both Services", desc: "Complete cleaning solutions for all your needs" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => set("service", opt.value)}
                  data-testid={`option-${opt.value}`}
                  className={`w-full p-4 text-left border rounded-lg transition-all duration-200 ${
                    formData.service === opt.value
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border bg-card text-card-foreground hover:border-primary/50"
                  }`}
                >
                  <div className="font-medium text-sm">{opt.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-foreground mb-2">Project location</label>
            <input
              type="text"
              placeholder="City, State"
              value={formData.location}
              onChange={(e) => set("location", e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") next(); }}
              className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 text-base"
              data-testid="input-location"
            />
          </div>
        </div>
      )}

      {/* Screen 3: Email + optional company + optional message */}
      {currentScreen === 3 && (
        <div className="space-y-5 mb-8" data-testid="form-step-3">
          <div>
            <label className="block text-sm text-foreground mb-2">Email address</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              autoComplete="email"
              onChange={(e) => set("email", e.target.value)}
              className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 text-base"
              data-testid="input-email"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Company <span className="text-xs">(optional)</span></label>
            <input
              type="text"
              placeholder="Your company name"
              value={formData.company}
              autoComplete="organization"
              onChange={(e) => set("company", e.target.value)}
              className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 text-base"
              data-testid="input-company"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Project details <span className="text-xs">(optional)</span></label>
            <textarea
              placeholder="Tell us about your project — size, timeline, anything helpful..."
              value={formData.message}
              onChange={(e) => set("message", e.target.value)}
              rows={3}
              className="w-full p-4 border border-border bg-input rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
              data-testid="input-message"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prev}
          disabled={currentScreen === 1}
          className={`px-6 py-3 rounded-full transition-all duration-200 text-sm ${
            currentScreen === 1
              ? "invisible"
              : "border border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
          data-testid="button-prev-step"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5 inline" />
          Back
        </button>

        {currentScreen < TOTAL ? (
          <button
            onClick={next}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
            data-testid="button-next-step"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-1.5 inline" />
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={submitMutation.isPending}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 text-sm font-medium"
            data-testid="button-submit-form"
          >
            {submitMutation.isPending ? "Sending..." : "Get My Quote"}
          </button>
        )}
      </div>
    </div>
  );
}
