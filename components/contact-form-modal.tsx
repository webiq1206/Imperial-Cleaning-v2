"use client";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import QuoteForm from "@/components/quote-form";
export default function ContactFormModal({isOpen,onClose}:{isOpen:boolean;onClose:()=>void}) {
 return <Dialog open={isOpen} onOpenChange={v => {if(!v) onClose();}}><DialogContent className="quote-dialog"><DialogTitle className="sr-only">Request a free cleaning quote</DialogTitle><DialogDescription className="sr-only">Tell us about your space and how to contact you.</DialogDescription><QuoteForm /></DialogContent></Dialog>;
}
