"use client";
import { useState, useId, useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, ArrowLeft, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { contactSchema, type ContactData } from "@/lib/contact-schema";
import { trackConversionComplete, trackEvent } from "@/lib/analytics";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/data/business-info";
export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "preview">("idle");
  const [error, setError] = useState("");
  const id = useId();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const form = useForm<ContactData>({ resolver: zodResolver(contactSchema), defaultValues: { name:"", email:"", phone:"", location:"", company:"", message:"", website:"" }, shouldFocusError: true });
  const { errors } = form.formState;
  const focusTitle = () => requestAnimationFrame(() => titleRef.current?.focus());
  const next = async () => { if (await form.trigger(["service", "location", "message"], { shouldFocus: true })) { setStep(2); focusTitle(); } };
  const submit = async (values: ContactData) => {
    setError("");
    if (process.env.NEXT_PUBLIC_DESIGN_PREVIEW === "1") { setStatus("preview"); focusTitle(); return; }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(values) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "We couldn’t send your request. Please try again or call us.");
      setStatus("sent"); focusTitle();
      trackConversionComplete("contact_form", {serviceType: values.service === "construction" ? "construction-cleaning" : "commercial-cleaning", location: values.location, sourcePage: "quote_form"});
      trackEvent("form_submit", "contact", "quote_request");
    } catch (cause) { setError(cause instanceof Error ? cause.message : "We couldn’t send your request. Please call us."); setStatus("idle"); }
  };
  const fieldError = (key: keyof ContactData) => errors[key] ? <span className="field-error" id={`${id}-${key}-error`} role="alert">{errors[key]?.message}</span> : null;
  const attrs = (key: keyof ContactData) => ({ id:`${id}-${key}`, "aria-invalid": !!errors[key], "aria-describedby": errors[key] ? `${id}-${key}-error` : undefined });
  if (status === "sent" || status === "preview") return <div className="quote-result" role="status"><CheckCircle2 size={40} /><h2 ref={titleRef} tabIndex={-1}>{status === "preview" ? "Your preview request is ready." : "Your request has been sent."}</h2><p>{status === "preview" ? "This is a design preview. Nothing was sent to Imperial Cleaning." : "Our team will review your space and contact you to discuss the scope and schedule."}</p><button className="ic-button secondary" onClick={() => {setStatus("idle"); setStep(1); if(status === "sent") form.reset();}}>Back to the form</button>{status === "sent" && <a className="text-link" href={`tel:${BUSINESS_PHONE_TEL}`}>Need help now? Call {BUSINESS_PHONE}</a>}</div>;
  return <form className="quote-form" onSubmit={step === 1 ? (event) => { event.preventDefault(); void next(); } : form.handleSubmit(submit)} noValidate>
    {process.env.NEXT_PUBLIC_DESIGN_PREVIEW === "1" && <p className="preview-note">Design preview: requests won’t be sent.</p>}
    <div className="form-progress" aria-label={`Step ${step} of 2`}><span className="active">1. Your space</span><span className={step === 2 ? "active" : ""}>2. Your details</span></div>
    <h2 ref={titleRef} tabIndex={-1}>{step === 1 ? "Tell us about your space." : "How can we reach you?"}</h2>
    <p className="form-intro">{step === 1 ? "A few details help us prepare the right quote." : "We’ll follow up about your cleaning needs. No obligation."}</p>
    {step === 1 ? <>
      <fieldset><legend>What do you need? <span aria-hidden="true">*</span></legend><div className="service-options">{[{value:"commercial",name:"Commercial cleaning",detail:"Recurring or one-time facility care"},{value:"construction",name:"Construction cleanup",detail:"Rough, final, or touch-up cleaning"},{value:"both",name:"Both / help me decide",detail:"We’ll work through the scope together"}].map(s => <label key={s.value} className={form.watch("service") === s.value ? "selected" : ""}><input type="radio" value={s.value} {...form.register("service")} aria-invalid={!!errors.service} aria-describedby={errors.service ? `${id}-service-error` : undefined} /><span><strong>{s.name}</strong><small>{s.detail}</small></span></label>)}</div>{fieldError("service")}</fieldset>
      <label htmlFor={`${id}-location`}>City and state <span aria-hidden="true">*</span></label><input {...attrs("location")} {...form.register("location")} placeholder="e.g., Idaho Falls, ID" autoComplete="address-level2" />{fieldError("location")}
      <details className="optional-details"><summary>Add project notes (optional)</summary><label htmlFor={`${id}-message`}>Anything we should know?</label><textarea {...attrs("message")} {...form.register("message")} rows={3} maxLength={5000} placeholder="Approximate size, cleaning schedule, or project deadline" />{fieldError("message")}</details>
      <button className="ic-button form-next" type="button" onClick={next}>Continue <ArrowUpRight size={18} /></button>
    </> : <>
      <label htmlFor={`${id}-name`}>Full name <span aria-hidden="true">*</span></label><input {...attrs("name")} {...form.register("name")} autoComplete="name" />{fieldError("name")}
      <div className="form-two-col"><div><label htmlFor={`${id}-email`}>Email <span aria-hidden="true">*</span></label><input type="email" {...attrs("email")} {...form.register("email")} autoComplete="email" />{fieldError("email")}</div><div><label htmlFor={`${id}-phone`}>Phone <span aria-hidden="true">*</span></label><input type="tel" inputMode="tel" {...attrs("phone")} {...form.register("phone")} autoComplete="tel" />{fieldError("phone")}</div></div>
      <label htmlFor={`${id}-company`}>Company <span className="optional-label">(optional)</span></label><input {...attrs("company")} {...form.register("company")} autoComplete="organization" />{fieldError("company")}
      <p className="form-consent">By submitting, you’re asking Imperial Cleaning to contact you about this request. <Link href="/privacy-policy">Privacy policy</Link>.</p>
      {error && <div className="form-error" role="alert">{error} <a href={`tel:${BUSINESS_PHONE_TEL}`}>Call {BUSINESS_PHONE}</a>.</div>}
      <div className="form-actions"><button type="button" className="back-button" disabled={status === "sending"} onClick={() => {setStep(1); focusTitle();}}><ArrowLeft size={17} />Back</button><button className="ic-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request my free quote"}<ArrowUpRight size={18} /></button></div>
    </>}
    <div className="honeypot" aria-hidden="true"><label>Website<input {...form.register("website")} tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-reassurance"><ShieldCheck size={16} /> Free quote. No obligation.</div>
    <a className="form-call" href={`tel:${BUSINESS_PHONE_TEL}`}><Phone size={15} /> Prefer to talk? {BUSINESS_PHONE}</a>
  </form>;
}
