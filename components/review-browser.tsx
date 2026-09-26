'use client';
import { useState } from 'react';
import type { VerifiedReview } from '@/data/reviews';
export default function ReviewBrowser({reviews}:{reviews:VerifiedReview[]}) {
  const [service,setService]=useState('all');
  const shown=reviews.filter(review=>service==='all'||review.mentionedServices?.includes(service as 'construction-cleaning'|'commercial-cleaning'));
  return <><div className="resource-filters" role="group" aria-label="Filter reviews by service">{[['all','All reviews'],['construction-cleaning','Construction cleanup'],['commercial-cleaning','Commercial cleaning']].map(([value,label])=><button key={value} type="button" aria-pressed={service===value} onClick={()=>setService(value)}>{label}</button>)}</div><p role="status">{shown.length} reviews. Filters use services identified in the existing review records.</p><div className="audit-grid">{shown.map((review,i)=><figure key={`${review.author}-${i}`} className="glass-card-elevated audit-card"><blockquote>{review.text}</blockquote><figcaption className="mt-5 text-sm">{review.author} · {review.rating} of 5<p className="text-muted-foreground">Recorded {review.date}. Dates may be approximate.</p><a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-link">View source on {review.source}</a></figcaption></figure>)}</div></>;
}
