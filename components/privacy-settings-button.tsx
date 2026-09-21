'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { safeAnalyticsPath } from '@/lib/public-route-paths';
export default function PrivacySettingsButton() {
  const pathname=usePathname();
  const [available,setAvailable]=useState(false);
  useEffect(()=>{setAvailable(process.env.NEXT_PUBLIC_DESIGN_PREVIEW!=='1' && window.location.protocol==='https:' && !!safeAnalyticsPath(window.location.href));},[pathname]);
  if(!available)return null;
  return <button type="button" className="privacy-settings-button" onClick={() => window.dispatchEvent(new Event('imperial:privacy-settings'))}>Privacy settings</button>;
}
