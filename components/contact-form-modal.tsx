import { useState, useEffect } from "react";
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

const steps = [
 { id: 1, field: "name", label: "What's your name?", placeholder: "Your full name" },
 { id: 2, field: "company", label: "Company name?", placeholder: "Your company (optional)" },
 { id: 3, field: "email", label: "Email address?", placeholder: "your@email.com" },
 { id: 4, field: "phone", label: "Phone number?", placeholder: "(208) 555-0123" },
 { id: 5, field: "service", label: "What service do you need?" },
 { id: 6, field: "location", label: "Project location?", placeholder: "City, State" },
 { id: 7, field: "message", label: "Project details?", placeholder: "Tell us about your project..." },
];

export default function ContactFormModal(props: ContactFormModalProps) {
  return (
    <QueryClientProvider client={modalQueryClient}>
      <ContactFormModalInner {...props} />
    </QueryClientProvider>
  );
}

function ContactFormModalInner({ isOpen, onClose }: ContactFormModalProps) {
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
   // Enhanced form submission tracking
   const formData = form.getValues();
   trackConversionComplete('contact_form', {
    serviceType: formData.service === 'construction' ? 'construction-cleaning' : 
          formData.service === 'commercial' ? 'commercial-cleaning' : undefined,
    location: formData.location,
    sourcePage: 'contact_form_modal'
   });
   
   // Track user journey completion
   trackUserJourney('conversion', 'contact_form_completed', {
    serviceType: formData.service === 'construction' ? 'construction-cleaning' : 
          formData.service === 'commercial' ? 'commercial-cleaning' : undefined,
    location: formData.location
   });
   
   // Legacy tracking
   trackEvent('form_submit', 'contact', 'multi_step_form');
   toast({
    title: "Quote Request Sent!",
    description: "We'll contact you within 24 hours with your quote.",
   });
   onClose();
   form.reset({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    message: "",
   });
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
     
     // Enhanced form step tracking
     trackFormInteraction('form_step', 'contact_form', currentStep + 1, {
      serviceType: form.getValues().service === 'construction' ? 'construction-cleaning' : 
            form.getValues().service === 'commercial' ? 'commercial-cleaning' : undefined,
      location: form.getValues().location
     });
     
     // Legacy tracking
     trackEvent('form_step', 'contact', `step_${currentStep}_to_${currentStep + 1}`);
    }
   });
  } else {
   if (currentStep < steps.length) {
    setCurrentStep(currentStep + 1);
    
    // Enhanced form step tracking for optional fields
    trackFormInteraction('form_step', 'contact_form', currentStep + 1, {
     serviceType: form.getValues().service === 'construction' ? 'construction-cleaning' : 
           form.getValues().service === 'commercial' ? 'commercial-cleaning' : undefined,
     location: form.getValues().location
    });
    
    // Legacy tracking
    trackEvent('form_step', 'contact', `step_${currentStep}_to_${currentStep + 1}`);
   }
  }
 };

 const prevStep = () => {
  if (currentStep > 1) {
   setCurrentStep(currentStep - 1);
   
   // Enhanced form back tracking
   trackFormInteraction('form_step', 'contact_form', currentStep - 1, {
    serviceType: form.getValues().service === 'construction' ? 'construction-cleaning' : 
          form.getValues().service === 'commercial' ? 'commercial-cleaning' : undefined,
    location: form.getValues().location
   });
   
   // Legacy tracking
   trackEvent('form_step', 'contact', `step_${currentStep}_to_${currentStep - 1}`);
  }
 };

 const onSubmit = (data: FormData) => {
  submitMutation.mutate(data);
 };

 const handleClose = () => {
  // Enhanced form abandonment tracking
  const formData = form.getValues();
  const filledFields = Object.values(formData).filter(value => value && value.toString().trim() !== '').length;
  
  trackFormInteraction('form_abandon', 'contact_form', currentStep, {
   serviceType: formData.service === 'construction' ? 'construction-cleaning' : 
         formData.service === 'commercial' ? 'commercial-cleaning' : undefined,
   location: formData.location
  });
  
  // Legacy tracking
  trackEvent('form_abandon', 'contact', `step_${currentStep}`);
  
  // Reset form state completely
  form.reset({
   name: "",
   company: "",
   email: "",
   phone: "",
   location: "",
   message: "",
  });
  setCurrentStep(1);
  onClose();
 };

 const progress = (currentStep / steps.length) * 100;
 const currentStepData = steps[currentStep - 1];

 // Focus management for better UX
 useEffect(() => {
  if (isOpen && currentStepData) {
   // Focus the current input field after a brief delay
   const timer = setTimeout(() => {
    const currentInput = document.querySelector(`[data-testid="input-${currentStepData.field}"]`) as HTMLInputElement;
    if (currentInput) {
     currentInput.focus({ preventScroll: true });
    }
   }, 100);
   return () => clearTimeout(timer);
  }
 }, [currentStep, isOpen, currentStepData]);

 // Handle escape key to close modal
 useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
   if (e.key === 'Escape' && isOpen) {
    handleClose();
   }
  };
  
  if (isOpen) {
   document.addEventListener('keydown', handleEscape);
   return () => document.removeEventListener('keydown', handleEscape);
  }
 }, [isOpen, handleClose]);

 if (!isOpen) return null;

 return (
  <div 
   className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
   onClick={handleClose}
  >
   <div 
    className="resend-card max-w-md w-full border-border/50 hover:border-border transition-all duration-300"
    onClick={(e) => e.stopPropagation()}
   >
    <div className="flex items-center justify-between mb-8">
     <h3 className="text-2xl tracking-tight" data-testid="modal-title">Request a Quote</h3>
     <button 
      onClick={handleClose} 
      className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary/50 rounded-lg"
      data-testid="button-close-modal"
     >
      <X className="h-5 w-5" />
     </button>
    </div>

    {/* Progress Bar */}
    <div className="mb-8">
     <div className="h-1.5 bg-muted rounded-full mb-3 overflow-hidden">
      <div 
       className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300" 
       style={{ width: `${progress}%` }}
      />
     </div>
     <p className="text-sm text-muted-foreground " data-testid="progress-text">
      Step <span data-testid="current-step" className="text-foreground ">{currentStep}</span> of {steps.length}
     </p>
    </div>

    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {/* Current Step Content */}
      <div data-testid={`form-step-${currentStep}`}>
       <FormField
        key={`${currentStepData.field}-${currentStep}`}
        control={form.control}
        name={currentStepData.field as keyof FormData}
        render={({ field }) => (
         <FormItem className="space-y-4">
          <FormLabel className="text-lg text-foreground">
           {currentStepData.label}
          </FormLabel>
          <FormControl>
           {currentStepData.field === "service" ? (
            <Select onValueChange={field.onChange} value={field.value}>
             <SelectTrigger 
              data-testid="select-service"
              className="h-12 border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200"
             >
              <SelectValue placeholder="Select a service" />
             </SelectTrigger>
             <SelectContent className="border-border bg-card">
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
             value={field.value || ""}
             onChange={field.onChange}
             onBlur={field.onBlur}
             name={field.name}
             rows={4}
             data-testid={`input-${currentStepData.field}`}
             className="border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200 resize-none"
            />
           ) : (
            <Input
             placeholder={currentStepData.placeholder}
             value={field.value || ""}
             onChange={(e) => {
              field.onChange(e);
              form.setValue(currentStepData.field as keyof FormData, e.target.value);
             }}
             onBlur={field.onBlur}
             onKeyDown={(e) => {
              if (e.key === "Enter" && currentStepData.field !== "message") {
                e.preventDefault();
                nextStep();
              }
             }}
             name={field.name}
             type={currentStepData.field === "email" ? "email" : currentStepData.field === "phone" ? "tel" : "text"}
             data-testid={`input-${currentStepData.field}`}
             className="h-12 border-border bg-input hover:border-primary/50 focus:border-primary transition-colors duration-200 text-base"
             autoComplete={currentStepData.field === "email" ? "email" : currentStepData.field === "phone" ? "tel" : "off"}
            />
           )}
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-6">
       <Button
        type="button"
        variant="pill-secondary"
        size="pill-md"
        onClick={prevStep}
        disabled={currentStep === 1}
        className={`${currentStep === 1 ? "invisible" : ""} transition-transform duration-300 ease-out hover:-translate-y-1 hover-lift-gentle `}
        data-testid="button-prev-step"
       >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
       </Button>

       {currentStep < steps.length ? (
        <Button
         type="button"
         variant="pill-primary"
         size="pill-md"
         onClick={nextStep}
         className="ml-auto transition-transform duration-300 ease-out hover:-translate-y-1 "
         data-testid="button-next-step"
        >
         Next
         <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
       ) : (
        <Button
         type="submit"
         variant="pill-primary"
         size="pill-md"
         disabled={submitMutation.isPending}
         className="ml-auto transition-transform duration-300 ease-out hover:-translate-y-1 "
         data-testid="button-submit-form"
        >
         {submitMutation.isPending ? "Submitting..." : "Submit Request"}
        </Button>
       )}
      </div>
     </form>
    </Form>
   </div>
  </div>
 );
}
