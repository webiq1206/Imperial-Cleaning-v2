import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cleanupPricing } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const [pricing] = await db.update(cleanupPricing)
      .set(body)
      .where(eq(cleanupPricing.id, params.id))
      .returning();
    if (!pricing) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(pricing);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
