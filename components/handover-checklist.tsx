'use client';
import { useEffect, useId, useState } from 'react';
import { buildHandoverText, handoverGroups, handoverItems } from '@/data/handover-checklist';
import { trackEvent } from '@/lib/analytics';
const storageKey = 'imperial.handover-checkmarks.v1';
export default function HandoverChecklist() {
  const id = useId();
  const [checked,setChecked] = useState<string[]>([]);
  const [message,setMessage] = useState('');
  useEffect(() => { try { const stored: unknown = JSON.parse(sessionStorage.getItem(storageKey) || '[]'); if(Array.isArray(stored)) setChecked(Array.from(new Set(stored.filter((value):value is string => typeof value === 'string' && handoverItems.some(item=>item.id===value))))); } catch { /* This tool works without browser storage. */ } },[]);
  const update = (values:string[]) => { setChecked(values); try {sessionStorage.setItem(storageKey,JSON.stringify(values));} catch { /* Keep the current in-memory selection. */ } };
  const download = () => {
    try {
      const objectURL = URL.createObjectURL(new Blob([buildHandoverText(checked)],{type:'text/plain;charset=utf-8'}));
      const anchor=document.createElement('a');anchor.href=objectURL;anchor.download='imperial-construction-handover-checklist.txt';document.body.appendChild(anchor);anchor.click();anchor.remove();
      setTimeout(()=>URL.revokeObjectURL(objectURL),30_000);
      setMessage('Your checklist download was requested.');trackEvent('checklist_download','resources','construction_checklist');
    } catch {setMessage('The download could not start. Your checkmarks are still here. Use Print or save to PDF instead.');}
  };
  return <section id="handover-checklist" className="handover-tool" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>Construction cleaning handover checklist</h2>
    <p>Use this planning aid to organize the scope and follow-up. It is not a cleaning procedure, safety plan, inspection certification or contract.</p>
    <p id={`${id}-progress`} role="status">{checked.length} of {handoverItems.length} items checked. Checkmarks stay in this browser tab. No project details are requested.</p>
    {handoverGroups.map(group=><fieldset key={group.title}><legend>{group.title}</legend>{handoverItems.filter(item=>item.group===group.title).map(item=><label key={item.id} htmlFor={`${id}-${item.id}`}><input id={`${id}-${item.id}`} type="checkbox" checked={checked.includes(item.id)} onChange={event=>{update(event.target.checked?[...checked,item.id]:checked.filter(value=>value!==item.id));trackEvent('checklist_use','resources','construction_checklist');}}/><span>{item.label}</span></label>)}</fieldset>)}
    <div className="handover-actions"><button type="button" className="ic-button" onClick={download}>Download checklist</button><button type="button" className="ic-button secondary" onClick={()=>{window.print();trackEvent('checklist_print','resources','construction_checklist');}}>Print or save to PDF</button><button type="button" className="text-link" onClick={()=>{update([]);setMessage('Checkmarks cleared.');}}>Clear checkmarks</button></div>
    <p role="status">{message}</p>
    <noscript><p>JavaScript is needed to save checkmarks or download a checked copy. The checklist remains readable, and you can print this page from your browser.</p></noscript>
  </section>;
}
