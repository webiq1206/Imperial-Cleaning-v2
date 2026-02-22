import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cleanupPricing } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const { buildingType, buildingSqft, cleanupPhases, margin = 0.15 } = await req.json();

    if (!buildingType || !buildingSqft || !cleanupPhases?.length) {
      return NextResponse.json({ error: "buildingType, buildingSqft, and cleanupPhases are required" }, { status: 400 });
    }

    const pricing = await db.select().from(cleanupPricing)
      .where(and(
        eq(cleanupPricing.buildingType, buildingType),
        eq(cleanupPricing.isActive, true)
      ));

    const results = cleanupPhases.map((phase: string) => {
      const rate = pricing.find(p => p.cleanupPhase === phase);
      if (!rate) return { phase, error: "No pricing data found" };

      const pricePerSqft = Number(rate.pricePerSqftMid);
      const baseCost = Math.round(buildingSqft * pricePerSqft * 100) / 100;
      const sqftPerHour = rate.sqftPerHourPerPerson || 500;
      const totalHours = Math.ceil(buildingSqft / sqftPerHour);
      const crewSize = Math.max(2, Math.ceil(totalHours / 8));
      const estimatedDays = Math.ceil(totalHours / (crewSize * 8));

      return {
        phase,
        pricePerSqft,
        pricePerSqftLow: Number(rate.pricePerSqftLow),
        pricePerSqftHigh: Number(rate.pricePerSqftHigh),
        baseCost,
        totalHours,
        crewSize,
        estimatedDays,
        price: Math.round(baseCost * (1 + margin) * 100) / 100,
      };
    });

    const subtotal = results.reduce((sum: number, r: any) => sum + (r.price || 0), 0);

    return NextResponse.json({
      buildingType,
      buildingSqft,
      margin,
      phases: results,
      subtotal: Math.round(subtotal * 100) / 100,
      total: Math.round(subtotal * 100) / 100,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
