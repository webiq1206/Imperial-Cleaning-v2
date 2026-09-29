"use client";
import dynamic from "next/dynamic";
/** Toast UI has no server-rendered content, so it loads only in the browser. Next 15 requires this in a Client Component. */
const Toaster = dynamic(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })), { ssr: false });
export default function ClientToaster() { return <Toaster />; }
