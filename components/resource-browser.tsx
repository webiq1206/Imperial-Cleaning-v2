'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { Guide } from '@/data/guides';
type Card = Pick<Guide,'slug'|'title'|'description'|'category'|'readTime'>;
export default function ResourceBrowser({guides}:{guides:Card[]}) {
  const [category,setCategory]=useState('All');
  const shown=guides.filter(guide=>category==='All'||guide.category===category);
  return <><div className="resource-filters" role="group" aria-label="Filter guides by topic">{['All','Construction Cleaning','Commercial Cleaning','Buying Guide'].map(item=><button type="button" key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div><p role="status">{shown.length} guides. Every guide includes a practical worksheet.</p><div className="audit-grid">{shown.map(guide=><Link key={guide.slug} href={`/resources/${guide.slug}`} className="glass-card-elevated audit-card"><span className="eyebrow">{guide.category}</span><h2 className="text-xl">{guide.title}</h2><p>{guide.description}</p><p className="text-sm">{guide.readTime}</p><span className="text-link">Read guide and use worksheet</span></Link>)}</div></>;
}
