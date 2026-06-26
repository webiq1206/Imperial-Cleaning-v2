"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, ArrowLeft, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { trackEvent, trackFormInteraction, trackUserJourney, trackConversionComplete } from "@/lib/analytics";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const modalQueryClient = new QueryClient({
  defaultOptions: { mutations: { retry: false } },
});

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.enum(["construction", "commercial", "both"], {
    required_error: "Please select a service",
  }),
  location: z.string().min(2, "Please enter a location"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 3 screens — each holds multiple fields so the form feels fast
const SCREENS = [
  { id: 1, fields: ["name", "phone"] as const },
  { id: 2, fields: ["service", "location"] as const },
  { id: 3, fields: ["email", "company", "message"] as const },
];

const TOTAL_SCREENS = SCREENS.length;

export default function ContactFormModal(props: ContactFormModalProps) {
  return (
    <QueryClientProvider client={modalQueryClient}>
      <ContactFormModalInner {...props} />
    </QueryClientProvider>
  );
}

function ContactFormModalInner({ isOpen, onClose }: ContactFormModalProps) {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [submitted, setSubmitted] = useState<{ name: string; phone: string } | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      const { name, phone, service, location } = form.getValues();
      trackConversionComplete("contact_form", {
        serviceType:
          service === "construction"
            ? "construction-cleaning"
            : service === "commercial"
            ? "commercial-cleaning"
            : undefined,
        location,
        sourcePage: "contact_form_modal",
      });
      trackUserJourney("conversion", "contact_form_completed", {
        serviceType:
          service === "construction"
            ? "construction-cleaning"
            : service === "commercial"
            ? "commercial-cleaning"
            : undefined,
        location,
      });
      trackEvent("form_submit", "contact", "multi_step_form");
      setSubmitted({ name, phone });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const nextScreen = async () => {
    const screen = SCREENS[currentScreen - 1];
    const valid = await form.trigger(screen.fields as (keyof FormData)[]);
    if (valid) {
      setCurrentScreen((s) => s + 1);
      trackFormInteraction("form_step", "contact_form", currentScreen + 1, {});
      trackEvent("form_step", "contact", `screen_${currentScreen}_to_${currentScreen + 1}`);
    }
  };

  const prevScreen = () => {
    setCurrentScreen((s) => s - 1);
    trackEvent("form_step", "contact", `screen_${currentScreen}_back`);
  };

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const handleClose = () => {
    if (!submitted) {
      trackFormInteraction("form_abandon", "contact_form", currentScreen, {});
      trackEvent("form_abandon", "contact", `screen_${currentScreen}`);
    }
    form.reset();
    setCurrentScreen(1);
    setSubmitted(null);
    onClose();
  };

  // Escape key handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const progress = submitted ? 100 : (currentScreen / TOTAL_SCREENS) * 100;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="resend-card max-w-md w-full border-border/50 hover:border-border transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl tracking-tight" data-testid="modal-title">
            {submitted ? "Request Received" : "Request a Free Quote"}
          </h3>
          <button
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary/50 rounded-lg"
            data-testid="button-close-modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="mb-6">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2" data-testid="progress-text">
              Step <span className="text-foreground" data-testid="current-step">{currentScreen}</span> of {TOTAL_SCREENS}
            </p>
          </div>
        )}

        {/* Success screen */}
        {submitted ? (
          <SuccessScreen name={submitted.name} phone={submitted.phone} onClose={handleClose} />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
              {/* Screen 1: Name + Phone */}
              {currentScreen === 1 && (
                <div className="space-y-5" data-testid="form-step-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Your name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Full name"
                            {...field}
                            type="text"
                            autoComplete="name"
                            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); nextScreen(); } }}
                            data-testid="input-name"
                            className="h-12 border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200 text-base"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Phone number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(208) 555-0123"
                            {...field}
                            type="tel"
                            autoComplete="tel"
                            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); nextScreen(); } }}
                            data-testid="input-phone"
                            className="h-12 border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200 text-base"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p className="text-xs text-muted-foreground pt-1">
                    Prefer to call?{" "}
                    <a href="tel:+12085203202" className="text-primary hover:underline">
                      (208) 520-3202
                    </a>
                    {" "}— we pick up during business hours.
                  </p>
                </div>
              )}

              {/* Screen 2: Service + Location */}
              {currentScreen === 2 && (
                <div className="space-y-5" data-testid="form-step-2">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">What service do you need?</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            {(
                              [
                                { value: "construction", label: "Construction Cleaning", desc: "Post-construction cleanup and debris removal" },
                                { value: "commercial", label: "Commercial Cleaning", desc: "Offices, facilities, and ongoing maintenance" },
                                { value: "both", label: "Both Services", desc: "Complete cleaning solutions" },
                              ] as const
                            ).map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => field.onChange(opt.value)}
                                data-testid={`option-${opt.value}`}
                                className={`w-full p-4 text-left border rounded-lg transition-all duration-200 ${
                                  field.value === opt.value
                                    ? "border-primary bg-primary/5 text-foreground"
                                    : "border-border bg-card text-card-foreground hover:border-primary/50"
                                }`}
                              >
                                <div className="text-sm font-medium">{opt.label}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
                              </button>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Project location</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="City, State"
                            {...field}
                            type="text"
                            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); nextScreen(); } }}
                            data-testid="input-location"
                            className="h-12 border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200 text-base"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Screen 3: Email + optional Company + optional Message */}
              {currentScreen === 3 && (
                <div className="space-y-5" data-testid="form-step-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your@email.com"
                            {...field}
                            type="email"
                            autoComplete="email"
                            data-testid="input-email"
                            className="h-12 border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200 text-base"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">Company <span className="text-muted-foreground">(optional)</span></FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company name"
                            {...field}
                            type="text"
                            autoComplete="organization"
                            data-testid="input-company"
                            className="h-12 border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200 text-base"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">Project details <span className="text-muted-foreground">(optional)</span></FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project — size, timeline, anything helpful..."
                            value={field.value || ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            rows={3}
                            data-testid="input-message"
                            className="border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-7">
                <Button
                  type="button"
                  variant="pill-secondary"
                  size="pill-md"
                  onClick={prevScreen}
                  className={currentScreen === 1 ? "invisible" : ""}
                  data-testid="button-prev-step"
                >
                  <ArrowLeft className="h-4 w-4 mr-1.5" />
                  Back
                </Button>

                {currentScreen < TOTAL_SCREENS ? (
                  <Button
                    type="button"
                    variant="pill-primary"
                    size="pill-md"
                    onClick={nextScreen}
                    className="ml-auto"
                    data-testid="button-next-step"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="pill-primary"
                    size="pill-md"
                    disabled={submitMutation.isPending}
                    className="ml-auto"
                    data-testid="button-submit-form"
                  >
                    {submitMutation.isPending ? "Sending..." : "Get My Quote"}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}

function SuccessScreen({ name, phone, onClose }: { name: string; phone: string; onClose: () => void }) {
  const firstName = name.split(" ")[0];
  return (
    <div className="text-center py-4" data-testid="form-success-screen">
      <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
        <CheckCircle className="w-7 h-7 text-green-500" />
      </div>
      <h4 className="text-xl text-foreground mb-3">Thanks, {firstName}!</h4>
      <p className="text-muted-foreground mb-2 text-sm leading-relaxed">
        We received your request and will call{phone ? ` ${phone}` : " you"} within{" "}
        <strong className="text-foreground">2 business hours</strong> (Mon–Fri, 8AM–5PM MT).
      </p>
      <p className="text-muted-foreground text-sm mb-7">
        Need faster help? Call us now.
      </p>
      <div className="flex flex-col gap-3">
        <a
          href="tel:+12085203202"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-medium"
          data-testid="button-success-call"
        >
          <Phone className="w-4 h-4" />
          Call (208) 520-3202
        </a>
        <button
          onClick={onClose}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-success-close"
        >
          Close
        </button>
      </div>
    </div>
  );
}
