"use client";
import { lazy, Suspense, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { BUSINESS_EMAIL, BUSINESS_HOURS_SHORT, BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/data/business-info";
import { quoteServices } from "@/data/service-priorities";
import { trackConversionComplete, trackCTAClick, trackEvent, trackFormInteraction } from "@/lib/analytics";
import { shortLeadSchema, type ShortLeadData } from "@/lib/contact-schema";
import { fileToLeadAttachment, type LeadAttachment } from "@/lib/lead-attachment";
import { quoteContext, type QuoteContext } from "@/lib/quote-context";

const QuoteForm = lazy(() => import("@/components/quote-form"));
const DRAFT_KEY = "imperial:short-lead:v1";
const DRAFT_TTL = 30 * 60 * 1000;
type Placement = "hero" | "contact" | "dialog";
type LeadValues = ShortLeadData;

function readDraft(): Partial<Pick<LeadValues, "name" | "email" | "phone" | "message">> | null {
  try {
    const draft = JSON.parse(sessionStorage.getItem(DRAFT_KEY) || "null");
    if (!draft || !Number.isFinite(draft.updated) || Date.now() - draft.updated > DRAFT_TTL || draft.updated > Date.now()) {
      sessionStorage.removeItem(DRAFT_KEY);
      return null;
    }
    const values: Record<string, string> = {};
    for (const key of ["name", "email", "phone", "message"] as const) {
      const value = draft.values?.[key];
      if (typeof value !== "string") return null;
      values[key] = value.slice(0, key === "message" ? 5000 : key === "email" ? 254 : key === "name" ? 120 : 32);
    }
    return values;
  } catch { return null; }
}
function writeDraft(values: Partial<LeadValues>) {
  try {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ updated: Date.now(), values: { name: values.name || "", email: values.email || "", phone: values.phone || "", message: values.message || "" } }));
  } catch { /* Storage is optional and never triggers an email. */ }
}
function clearDraft() {
  try { sessionStorage.removeItem(DRAFT_KEY); } catch { /* Storage is optional. */ }
}

export default function LeadRequest({ placement }: { placement: Placement }) {
  return <Suspense fallback={<p role="status">Loading request form...</p>}><LeadRequestFields placement={placement} /></Suspense>;
}

function LeadRequestFields({ placement }: { placement: Placement }) {
  const routePath = usePathname();
  const routeSearch = useSearchParams();
  const pathname = routePath ?? (typeof window !== "undefined" ? window.location.pathname : "");
  const search = routeSearch?.toString() ?? (typeof window !== "undefined" ? window.location.search.replace(/^\?/, "") : "");
  const context = quoteContext(pathname, search);
  const [chatOpen, setChatOpen] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const chatButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const chatId = useId();
  const canCall = BUSINESS_PHONE.trim().length > 0 && BUSINESS_PHONE_TEL.trim().length > 0;
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_DESIGN_PREVIEW === "1") return;
    const controller = new AbortController();
    void fetch("/api/contact/availability", { cache: "no-store", signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(result => { if (!controller.signal.aborted && result?.available === false) setUnavailable(true); })
      .catch(() => { /* A failed check must not block a valid submission. */ });
    return () => controller.abort();
  }, []);
  useEffect(() => {
    if (placement !== "contact" || window.location.hash !== "#project-details") return;
    if (detailsRef.current) detailsRef.current.open = true;
    setShowWizard(true);
  }, [placement]);
  useEffect(() => {
    if (!chatOpen) return;
    const frame = requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("input,textarea")?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      setChatOpen(false);
      chatButtonRef.current?.focus();
    };
    document.addEventListener("keydown", onKey, true);
    return () => { cancelAnimationFrame(frame); document.removeEventListener("keydown", onKey, true); };
  }, [chatOpen]);
  const serviceName = quoteServices.find(option => option.value === context.service)?.name;
  const contextLine = serviceName && context.location ? `We will include ${serviceName} for ${context.location} with this request.` : serviceName ? `We will include ${serviceName} with this request.` : context.location ? `We will include ${context.location} with this request.` : "";
  return <div className="lead-request" data-primary-cta="true">
    {canCall && <div className="lead-actions">
      <a className="ic-button" href={`tel:${BUSINESS_PHONE_TEL}`} data-testid="lead-call" onClick={() => trackCTAClick("phone_call", { page: pathname || "/", section: placement })}><Phone size={18} aria-hidden="true" />Call {BUSINESS_PHONE}</a>
      {!unavailable && <button ref={chatButtonRef} type="button" className="ic-button secondary" data-testid="lead-chat" aria-expanded={chatOpen} aria-controls={chatId} onClick={() => { setChatOpen(open => !open); trackFormInteraction("form_open", "contact_form", 1); }}><MessageCircle size={18} aria-hidden="true" />Chat</button>}
    </div>}
    {!canCall && !unavailable && <div className="lead-actions"><button ref={chatButtonRef} type="button" className="ic-button secondary" data-testid="lead-chat" aria-expanded={chatOpen} aria-controls={chatId} onClick={() => { setChatOpen(open => !open); trackFormInteraction("form_open", "contact_form", 1); }}><MessageCircle size={18} aria-hidden="true" />Chat</button></div>}
    {unavailable ? <div className="quote-result" role="status"><h2>Request your quote by phone or email.</h2><p>Online requests are temporarily unavailable. Tell us the service you need, your city and state, and your preferred schedule.</p><p><a className="text-link" href={`mailto:${BUSINESS_EMAIL}`}>Email {BUSINESS_EMAIL}</a></p></div> : <>
      {chatOpen && <section ref={panelRef} id={chatId} className="site-chat-panel" aria-label="Chat"><h2>Send a message</h2><p className="form-intro">Send a message. We follow up during office hours ({BUSINESS_HOURS_SHORT} Mountain Time).</p><LeadForm context={context} contextLine={contextLine} includeFile={false} persist={false} submitLabel="Send message" heading="" intro="" /><button type="button" className="back-button" onClick={() => { setChatOpen(false); chatButtonRef.current?.focus(); }}>Close chat</button></section>}
      <LeadForm context={context} contextLine={contextLine} includeFile persist heading={placement === "contact" ? "" : "Request a quote"} intro="Name, phone, email, and a note. We will follow up." submitLabel="Send my request" />
      {placement === "hero" ? <p className="secondary-intake-link"><Link className="text-link" href="/contact#project-details">Add project details</Link></p> : <details ref={detailsRef} id={placement === "contact" ? "project-details" : undefined} className="secondary-intake" onToggle={event => { if (event.currentTarget.open) setShowWizard(true); }}><summary onClick={() => setShowWizard(true)}>Add project details</summary>{showWizard && <Suspense fallback={<p role="status">Loading project details...</p>}><p>Optional. The form above is enough for us to follow up.</p><QuoteForm /></Suspense>}</details>}
    </>}
  </div>;
}

function LeadForm({ context, contextLine, includeFile, persist, heading, intro, submitLabel }: { context: QuoteContext; contextLine: string; includeFile: boolean; persist: boolean; heading: string; intro: string; submitLabel: string }) {
  const id = useId();
  const errorRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inFlight = useRef(false);
  const started = useRef(false);
  const attempt = useRef({ payload: "", key: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "preview">("idle");
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const form = useForm<LeadValues>({ resolver: zodResolver(shortLeadSchema), defaultValues: { intent: "short", name: "", email: "", phone: "", message: "", location: "", website: "" }, shouldFocusError: true });
  useEffect(() => {
    if (!persist) return;
    const draft = readDraft();
    if (draft) form.reset({ ...form.getValues(), ...draft });
    const subscription = form.watch(values => writeDraft(values));
    return () => { writeDraft(form.getValues()); subscription.unsubscribe(); };
  }, [form, persist]);
  const { errors } = form.formState;
  const fieldError = (key: keyof LeadValues) => errors[key] ? <span className="field-error" id={`${id}-${key}-error`} role="alert">{errors[key]?.message}</span> : null;
  const attrs = (key: keyof LeadValues) => ({ id: `${id}-${key}`, "aria-invalid": !!errors[key] || undefined, "aria-describedby": errors[key] ? `${id}-${key}-error` : undefined });
  const start = () => { if (!started.current) { started.current = true; trackEvent("form_start", "contact", "quote_request"); } };
  const submit = async (values: LeadValues) => {
    if (inFlight.current) return;
    setError("");
    start();
    let attachment: LeadAttachment | undefined;
    if (includeFile && file) {
      const parsed = await fileToLeadAttachment(file);
      if (!parsed.ok) { setFileError(parsed.error); return; }
      attachment = parsed.attachment;
      setFileError("");
    }
    if (process.env.NEXT_PUBLIC_DESIGN_PREVIEW === "1") { setStatus("preview"); titleRef.current?.focus(); return; }
    inFlight.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    const payload = { intent: "short" as const, name: values.name, email: values.email, phone: values.phone, message: values.message, location: context.location || "", website: values.website || "", ...(context.service ? { service: context.service } : {}), ...(attachment ? { attachment } : {}) };
    let accepted = false;
    try {
      const body = JSON.stringify(payload);
      if (attempt.current.payload !== body) attempt.current = { payload: body, key: crypto.randomUUID() };
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": attempt.current.key }, body, signal: controller.signal });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true || result?.status !== "accepted" || typeof result?.receipt !== "string") {
        throw new Error(typeof result?.error === "string" ? result.error : "We could not confirm your request. Your details are still here. Please retry or call us.");
      }
      accepted = true;
    } catch (cause) {
      trackEvent("form_error", "contact", "quote_request");
      setError(controller.signal.aborted ? "We could not confirm your request in time. Your details are still here. Retry without changing them, or call us." : cause instanceof Error ? cause.message : "We could not confirm your request. Please retry or call us.");
      setStatus("idle");
      requestAnimationFrame(() => errorRef.current?.focus());
    } finally { clearTimeout(timer); inFlight.current = false; }
    if (!accepted) return;
    if (persist) clearDraft();
    setStatus("sent");
    requestAnimationFrame(() => titleRef.current?.focus());
    try {
      trackConversionComplete("contact_form", { serviceType: values.service === "both" ? undefined : values.service === "construction" || context.service === "construction" ? "construction-cleaning" : context.service === "commercial" ? "commercial-cleaning" : undefined, sourcePage: includeFile ? "short_request" : "chat" });
      trackEvent("form_submit", "contact", "quote_request");
    } catch { /* Optional analytics must not block the visitor. */ }
  };
  if (status === "sent" || status === "preview") return <div className="quote-result" role="status"><h2 ref={titleRef} tabIndex={-1}>{status === "preview" ? "Your preview request is ready." : "Your request was submitted."}</h2><p>{status === "preview" ? "This is a design preview. Nothing was sent to Imperial Cleaning." : "Thank you. We will follow up using the phone or email you entered. If you need a faster reply, please call us."}</p>{status === "sent" && BUSINESS_PHONE_TEL && <a className="text-link" href={`tel:${BUSINESS_PHONE_TEL}`}>Call {BUSINESS_PHONE}</a>}<button type="button" className="ic-button secondary" onClick={() => { setStatus("idle"); if (status === "sent") { form.reset(); started.current = false; attempt.current = { payload: "", key: "" }; setFile(null); } }}>Back to the form</button></div>;
  return <form className={includeFile ? "quote-form short-lead-form" : "quote-form site-chat-form"} method="post" action="/api/contact" data-clarity-mask="true" data-testid={includeFile ? "short-lead-form" : undefined} aria-busy={status === "sending"} onChange={start} onSubmit={form.handleSubmit(submit, () => trackEvent("form_error", "contact", "quote_request"))} noValidate>
    <noscript><p>Online requests need JavaScript. Please call {BUSINESS_PHONE} or email {BUSINESS_EMAIL}. Do not enter details in this inactive form.</p></noscript>
    {process.env.NEXT_PUBLIC_DESIGN_PREVIEW === "1" && <p className="preview-note">Design preview: requests will not be sent.</p>}
    {heading && <h2 ref={titleRef} tabIndex={-1}>{heading}</h2>}
    {intro && <p className="form-intro">{intro}</p>}
    {contextLine && <p className="lead-context">{contextLine}</p>}
    <label htmlFor={`${id}-name`}>Full name <span aria-hidden="true">*</span></label><input {...attrs("name")} {...form.register("name")} autoComplete="name" required maxLength={120} />{fieldError("name")}
    <div className="form-two-col"><div><label htmlFor={`${id}-phone`}>Phone <span aria-hidden="true">*</span></label><input type="tel" inputMode="tel" {...attrs("phone")} {...form.register("phone")} autoComplete="tel" required maxLength={32} />{fieldError("phone")}</div><div><label htmlFor={`${id}-email`}>Email <span aria-hidden="true">*</span></label><input type="email" {...attrs("email")} {...form.register("email")} autoComplete="email" required maxLength={254} />{fieldError("email")}</div></div>
    <label htmlFor={`${id}-message`}>Note <span aria-hidden="true">*</span></label><textarea {...attrs("message")} {...form.register("message")} required rows={4} maxLength={5000} placeholder="City, service, timing, or anything we should know" />{fieldError("message")}
    {includeFile && <><label htmlFor={`${id}-file`}>Attach a file <span className="optional-label">(optional)</span></label><input id={`${id}-file`} type="file" accept=".pdf,.png,.jpg,.jpeg,.webp,application/pdf,image/png,image/jpeg,image/webp" aria-describedby={`${id}-file-hint`} aria-invalid={fileError ? true : undefined} onChange={event => { setFile(event.target.files?.[0] || null); setFileError(""); }} /><p className="file-hint" id={`${id}-file-hint`}>PDF, JPG, PNG, or WebP. Up to 4 MB.</p>{fileError && <span className="field-error" role="alert">{fileError}</span>}</>}
    <p className="form-consent">By submitting, you are asking Imperial Cleaning to contact you about this request. <Link href="/privacy-policy">Privacy policy</Link>.</p>
    {error && <div ref={errorRef} tabIndex={-1} className="form-error" role="alert">{error} {BUSINESS_PHONE_TEL && <a href={`tel:${BUSINESS_PHONE_TEL}`}>Call {BUSINESS_PHONE}</a>}</div>}
    <button className="ic-button form-next" type="submit" disabled={status === "sending"}>{status === "sending" ? "Submitting..." : submitLabel}<ArrowUpRight size={18} aria-hidden="true" /></button>
    <div className="honeypot" aria-hidden="true"><label>Website<input {...form.register("website")} tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-reassurance">Free quote. No obligation.</div>
  </form>;
}
