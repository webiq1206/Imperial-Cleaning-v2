import { guideTools, guideToolText } from '@/data/guide-tools';
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() {return Object.keys(guideTools).map(slug=>({slug}));}
export async function GET(_request:Request,{params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const text=guideToolText(slug);
  if(!text)return new Response('Not found',{status:404});
  return new Response(text,{headers:{'Content-Type':'text/plain; charset=utf-8','Content-Disposition':`attachment; filename="imperial-${slug}-worksheet.md"`,'X-Content-Type-Options':'nosniff','X-Robots-Tag':'noindex'}});
}
