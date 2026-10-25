"use client";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import LeadRequest from "@/components/lead-request";
export default function ContactFormModal({isOpen,onClose}:{isOpen:boolean;onClose:()=>void}) {
 return <Dialog open={isOpen} onOpenChange={v => {if(!v) onClose();}}><DialogContent className="quote-dialog"><DialogTitle className="sr-only">Request a free cleaning quote</DialogTitle><DialogDescription className="sr-only">Call, chat, or send a short request.</DialogDescription><LeadRequest placement="dialog" /></DialogContent></Dialog>;
}
