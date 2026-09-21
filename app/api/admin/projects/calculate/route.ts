import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { cleanupPricing } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const {buildingType,buildingSqft,cleanupPhases,margin=0.15}=await req.json();
    if(typeof buildingType!=="string" || buildingType.length>120 || typeof buildingSqft!=="number" || !Number.isFinite(buildingSqft) || buildingSqft<=0 || !Array.isArray(cleanupPhases) || cleanupPhases.length<1 || cleanupPhases.length>20 || cleanupPhases.some(p=>typeof p!=="string" || p.length>120) || typeof margin!=="number" || !Number.isFinite(margin) || margin<0) return NextResponse.json({error:"Enter a building type, a positive square footage, valid phases and a nonnegative markup."},{status:400});
    const pricing=await db.select().from(cleanupPricing).where(and(eq(cleanupPricing.buildingType,buildingType),eq(cleanupPricing.isActive,true)));
    const results=Array.from(new Set<string>(cleanupPhases)).map(phase=>{
      const rate=pricing.find(p=>p.cleanupPhase===phase);
      if(!rate) return {phase,error:"No pricing data found"};
      const pricePerSqft=Number(rate.pricePerSqftMid);
      if(!Number.isFinite(pricePerSqft) || pricePerSqft<0) return {phase,error:"Invalid pricing data"};
      const baseCost=Math.round(buildingSqft*pricePerSqft*100)/100;
      const sqftPerHour=rate.sqftPerHourPerPerson || 500;
      if(sqftPerHour<=0) return {phase,error:"Invalid production rate"};
      const totalHours=Math.ceil(buildingSqft/sqftPerHour);
      const crewSize=Math.max(2,Math.ceil(totalHours/8));
      const estimatedDays=Math.ceil(totalHours/(crewSize*8));
      // Preserve the existing price calculation. This input is a markup, not gross margin.
      const price=Math.round(baseCost*(1+margin)*100)/100;
      if(!Number.isFinite(price)) return {phase,error:"Estimate exceeds supported numeric limits"};
      return {phase,pricePerSqft,pricePerSqftLow:Number(rate.pricePerSqftLow),pricePerSqftHigh:Number(rate.pricePerSqftHigh),baseCost,totalHours,crewSize,estimatedDays,price};
    });
    if(results.some(r=>r.error)) return NextResponse.json({error:"Pricing is missing or invalid for one or more phases. No complete total was produced.",phases:results},{status:422});
    const subtotal=results.reduce((sum,r)=>sum+(r.price || 0),0);
    return NextResponse.json({buildingType,buildingSqft,margin,phases:results,subtotal:Math.round(subtotal*100)/100,total:Math.round(subtotal*100)/100});
  } catch { return NextResponse.json({error:"Could not calculate the estimate. Please try again."},{status:500}); }
}
