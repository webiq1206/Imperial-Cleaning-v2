import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { cleanupPricing } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try { const pricing = await db.select().from(cleanupPricing).where(eq(cleanupPricing.isActive,true)); return NextResponse.json({pricing}); }
  catch { return NextResponse.json({error:"Could not load pricing. Please try again."},{status:500}); }
}
