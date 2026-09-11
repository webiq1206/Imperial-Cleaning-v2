"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { getPageRegistry } from "@/lib/page-registry";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
const entries = getPageRegistry();
export default function SearchBar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/);
    if (!query.trim()) return entries.filter(p => ["/commercial-cleaning", "/construction-cleaning", "/service-areas", "/contact"].includes(p.url));
    return entries.filter(p => words.every(word => `${p.title} ${p.h1} ${p.city || ""}`.toLowerCase().includes(word))).sort((a,b) => Number(b.h1.toLowerCase().includes(query.trim().toLowerCase())) - Number(a.h1.toLowerCase().includes(query.trim().toLowerCase()))).slice(0, 12);
  }, [query]);
  return <Dialog open={isOpen} onOpenChange={value => {if (!value) onClose();}}><DialogContent className="search-dialog">
    <DialogTitle>What can we help you find?</DialogTitle><DialogDescription>Search services, cities, and cleaning guides.</DialogDescription>
    <label className="search-input"><Search size={20} aria-hidden="true" /><input autoFocus type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Try office cleaning or Idaho Falls" aria-label="Search Imperial Cleaning" /></label>
    <div aria-live="polite" className="search-results"><span className="eyebrow">{query ? `${matches.length} results` : "Popular pages"}</span>
      {matches.map(p => <Link href={p.url} key={p.url} onClick={onClose}><span>{p.h1}<small>{p.type === "city-service" ? p.state : p.type.replaceAll("-", " ")}</small></span><ArrowUpRight size={18} aria-hidden="true" /></Link>)}
      {!matches.length && <p>No matching pages. Try a city or service name, or <Link href="/contact" onClick={onClose}>contact our team</Link>.</p>}
    </div>
  </DialogContent></Dialog>;
}
