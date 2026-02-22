import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cleanupPricing } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const pricing = await db.select().from(cleanupPricing).where(eq(cleanupPricing.isActive, true));
    return NextResponse.json({ pricing });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
