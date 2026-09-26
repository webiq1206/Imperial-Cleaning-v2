import type { Metadata } from 'next';
import { buildSearchMetadata, searchImage, searchListing } from '@/lib/search-appearance';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Clock, CheckCircle2, Calendar } from 'lucide-react';
import { StructuredData } from '@/components/structured-data';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import RelatedContent from '@/components/shared/related-content';
import { guides, getGuideBySlug } from '@/data/guides';
import PreferredSourceButton from '@/components/preferred-source-button';
import HandoverChecklist from '@/components/handover-checklist';
import GuideTool from '@/components/guide-tool';
import RfpScorecard from '@/components/rfp-scorecard';
import { quoteHref } from '@/lib/quote-context';
import rules from '@/data/publication-rules.json';
import type { PublicationRules } from '@/lib/publishing-policy';
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from '@/data/business-info';

function getSearchGuide(slug: string) {
  const guide = getGuideBySlug(slug);
  return guide;
}

interface GuidePageProps { params: { slug: string } }
export function generateStaticParams() { return guides.map(guide => ({slug:guide.slug})); }
export function generateMetadata({params}:GuidePageProps): Metadata {
  const guide=getSearchGuide(params.slug);
  if(!guide) return {title:{absolute:'Resource Not Found | Imperial Cleaning Inc'},robots:{index:false,follow:false}};
  const modified=(rules as PublicationRules)[`/resources/${guide.slug}`]?.modified || guide.dateModified;
  return buildSearchMetadata(`/resources/${guide.slug}`, { published: guide.datePublished, modified });
}
export default function GuidePage({params}:GuidePageProps) {
  const guide=getSearchGuide(params.slug);if(!guide)notFound();
  const path=`/resources/${guide.slug}`;
  const url=`https://imperialcleaninginc.com${path}`;
  const modified=(rules as PublicationRules)[path]?.modified || guide.dateModified;
  const featured = searchImage(path);
  const checklist=guide.slug==='construction-cleanup-process-checklist';
  const articleSchema={'@context':'https://schema.org','@type':'Article','@id':`${url}#article`,headline:guide.title,description:searchListing(path).description,image:featured.url,url,datePublished:guide.datePublished,dateModified:modified,author:{'@id':'https://imperialcleaninginc.com/#organization'},publisher:{'@id':'https://imperialcleaninginc.com/#organization'},isPartOf:{'@id':'https://imperialcleaninginc.com/#website'},mainEntityOfPage:url,articleSection:guide.category};
  const breadcrumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://imperialcleaninginc.com/'},{'@type':'ListItem',position:2,name:'Resources',item:'https://imperialcleaninginc.com/resources'},{'@type':'ListItem',position:3,name:guide.title,item:url}]};
  const faqSchema=guide.faqs.length?{'@context':'https://schema.org','@type':'FAQPage',mainEntity:guide.faqs.map(faq=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))}:null;
  const howToSchema=guide.steps?.length?{'@context':'https://schema.org','@type':'HowTo',name:guide.title,description:guide.intro,step:guide.steps.map((step,i)=>({'@type':'HowToStep',position:i+1,name:step.name,text:step.text}))}:null;
  const schemas=[articleSchema,breadcrumbSchema,...(faqSchema?[faqSchema]:[]),...(howToSchema?[howToSchema]:[])];
  const date=(value:string)=>new Date(value).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
  return <>
    <StructuredData data={schemas}/>
    <div className="bg-card/30 border-b border-border/20"><div className="max-w-3xl mx-auto px-6 lg:px-8 py-4"><Breadcrumbs includeStructuredData={false} items={[{name:'Resources',href:'/resources'},{name:guide.title}]}/></div></div>
    <article className="py-16 px-6"><div className="max-w-3xl mx-auto">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground"><span className="px-2 py-1 bg-primary/10 text-primary rounded-full">{guide.category}</span><span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden="true"/>{guide.readTime}</span></div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-6">{guide.title}</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-6"><span>By <strong className="text-foreground/80">Imperial Cleaning Inc</strong></span><span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" aria-hidden="true"/>Published <time dateTime={guide.datePublished}>{date(guide.datePublished)}</time></span>{modified!==guide.datePublished&&<span>Updated <time dateTime={modified}>{date(modified)}</time></span>}</div>
        <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">{guide.intro}</p>
      </header>
      <div className="download-panel"><a href="#planning-tool" className="text-link">Jump to the practical worksheet and free download</a></div>
      <nav className="article-toc" aria-label="In this guide"><strong>In this guide</strong><ul>{guide.sections.map((section,i)=><li key={section.heading}><a href={`#section-${i}`}>{section.heading}</a></li>)}{checklist&&<li><a href="#handover-checklist">Use the handover checklist</a></li>}</ul></nav>
      <div className="space-y-10">
        {guide.sections.map((section,i)=><section key={section.heading} id={`section-${i}`}><h2 className="text-2xl text-foreground mb-4">{section.heading}</h2><div className="space-y-4">{section.body.map((paragraph,n)=><p key={n} className="text-muted-foreground leading-relaxed">{paragraph}</p>)}</div></section>)}
        {guide.steps&&<section><h2 className="text-2xl text-foreground mb-6">Step-by-step process</h2><ol className="space-y-5">{guide.steps.map((step,i)=><li key={step.name} className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">{i+1}</span><div><h3 className="text-lg text-foreground mb-1">{step.name}</h3><p className="text-muted-foreground leading-relaxed">{step.text}</p></div></li>)}</ol></section>}
        <GuideTool slug={guide.slug}/>
        {guide.slug==='commercial-cleaning-rfp-template'&&<RfpScorecard/>}
        {checklist&&<HandoverChecklist/>}
        {guide.faqs.length>0&&<section><h2 className="text-2xl text-foreground mb-6">Frequently asked questions</h2><div className="space-y-6">{guide.faqs.map(faq=><div key={faq.question}><h3 className="text-lg text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground leading-relaxed">{faq.answer}</p></div>)}</div></section>}
      </div>
      <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center gap-4"><p className="text-sm text-muted-foreground flex-1">Find this useful? Add Imperial Cleaning Inc as a preferred source in Google.</p><PreferredSourceButton className="flex-shrink-0"/></div>
      <div className="mt-12 glass-card-elevated p-8 rounded-lg text-center"><h2 className="text-2xl text-foreground mb-3">Discuss your cleaning scope</h2><p className="text-muted-foreground mb-6">Imperial Cleaning Inc handles construction and commercial cleaning across Idaho and Utah.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href={quoteHref(path)} className="ic-button">Get a free quote</Link><a href={`tel:${BUSINESS_PHONE_TEL}`} className="ic-button secondary">Call {BUSINESS_PHONE}</a></div></div>
      {guide.related.length>0&&<div className="mt-12"><h2 className="text-xl text-foreground mb-4">Related</h2><ul className="space-y-3">{guide.related.map(link=><li key={link.href}><Link href={link.href} className="inline-flex items-center text-primary hover:underline"><CheckCircle2 className="w-4 h-4 mr-2" aria-hidden="true"/>{link.label}<ArrowRight className="w-4 h-4 ml-2" aria-hidden="true"/></Link></li>)}</ul></div>}
    </div></article>
    <RelatedContent pageUrl={path} heading="Keep reading" description="More guides and services related to this topic." limit={5}/>
  </>;
}
