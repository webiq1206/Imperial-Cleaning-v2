import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { cleanupPricing } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const body = await req.json();
    const [pricing] = await db.update(cleanupPricing).set(body as any).where(eq(cleanupPricing.id,id)).returning();
    if (!pricing) return NextResponse.json({error:"Not found"},{status:404});
    return NextResponse.json(pricing);
  } catch { return NextResponse.json({error:"Could not update pricing. Please try again."},{status:500}); }
}
