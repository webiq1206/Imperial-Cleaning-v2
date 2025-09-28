import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { trackEvent } from "@/lib/analytics";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

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

const steps = [
  { id: 1, field: "name", label: "What's your name?", placeholder: "Your full name" },
  { id: 2, field: "company", label: "Company name?", placeholder: "Your company (optional)" },
  { id: 3, field: "email", label: "Email address?", placeholder: "your@email.com" },
  { id: 4, field: "phone", label: "Phone number?", placeholder: "(208) 555-0123" },
  { id: 5, field: "service", label: "What service do you need?" },
  { id: 6, field: "location", label: "Project location?", placeholder: "City, State" },
  { id: 7, field: "message", label: "Project details?", placeholder: "Tell us about your project..." },
];

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
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
      trackEvent('form_submit', 'contact', 'multi_step_form');
      toast({
        title: "Quote Request Sent!",
        description: "We'll contact you within 24 hours with your quote.",
      });
      onClose();
      form.reset();
      setCurrentStep(1);
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

  const nextStep = () => {
    const currentField = steps[currentStep - 1]?.field as keyof FormData;
    
    if (currentField && currentField !== "company" && currentField !== "message") {
      form.trigger(currentField).then((isValid) => {
        if (isValid && currentStep < steps.length) {
          setCurrentStep(currentStep + 1);
          trackEvent('form_step', 'contact', `step_${currentStep}_to_${currentStep + 1}`);
        }
      });
    } else {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
        trackEvent('form_step', 'contact', `step_${currentStep}_to_${currentStep + 1}`);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      trackEvent('form_step', 'contact', `step_${currentStep}_to_${currentStep - 1}`);
    }
  };

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const handleClose = () => {
    trackEvent('form_abandon', 'contact', `step_${currentStep}`);
    onClose();
    form.reset();
    setCurrentStep(1);
  };

  if (!isOpen) return null;

  const progress = (currentStep / steps.length) * 100;
  const currentStepData = steps[currentStep - 1];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-card max-w-md w-full rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold" data-testid="modal-title">Request a Quote</h3>
          <button 
            onClick={handleClose} 
            className="text-muted-foreground hover:text-foreground"
            data-testid="button-close-modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2" data-testid="progress-text">
            Step <span data-testid="current-step">{currentStep}</span> of {steps.length}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Current Step Content */}
            <div data-testid={`form-step-${currentStep}`}>
              <FormField
                control={form.control}
                name={currentStepData.field as keyof FormData}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">
                      {currentStepData.label}
                    </FormLabel>
                    <FormControl>
                      {currentStepData.field === "service" ? (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="construction" data-testid="option-construction">
                              Construction Cleaning
                            </SelectItem>
                            <SelectItem value="commercial" data-testid="option-commercial">
                              Commercial Cleaning
                            </SelectItem>
                            <SelectItem value="both" data-testid="option-both">
                              Both Services
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      ) : currentStepData.field === "message" ? (
                        <Textarea
                          placeholder={currentStepData.placeholder}
                          {...field}
                          rows={4}
                          data-testid={`input-${currentStepData.field}`}
                        />
                      ) : (
                        <Input
                          placeholder={currentStepData.placeholder}
                          {...field}
                          type={currentStepData.field === "email" ? "email" : currentStepData.field === "phone" ? "tel" : "text"}
                          data-testid={`input-${currentStepData.field}`}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={currentStep === 1 ? "invisible" : ""}
                data-testid="button-prev-step"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>

              {currentStep < steps.length ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto"
                  data-testid="button-next-step"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="ml-auto"
                  data-testid="button-submit-form"
                >
                  {submitMutation.isPending ? "Submitting..." : "Submit Quote Request"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
