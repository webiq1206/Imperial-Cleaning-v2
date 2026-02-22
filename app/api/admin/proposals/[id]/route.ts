import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { bidProposals } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { convertKeysToCamel } from "@/lib/db/utils";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const [proposal] = await db.select().from(bidProposals).where(eq(bidProposals.id, params.id));
    if (!proposal) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(proposal);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const data = convertKeysToCamel(body);
    const [proposal] = await db.update(bidProposals)
      .set(data as any)
      .where(eq(bidProposals.id, params.id))
      .returning();
    if (!proposal) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(proposal);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.delete(bidProposals).where(eq(bidProposals.id, params.id));
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
