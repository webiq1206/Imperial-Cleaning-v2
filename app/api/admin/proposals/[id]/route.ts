import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { convertKeysToCamel } from "@/lib/db/utils";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { bidProposals } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const [proposal]=await db.select().from(bidProposals).where(eq(bidProposals.id,id));
    if(!proposal) return NextResponse.json({error:"Not found"},{status:404});
    return NextResponse.json(proposal);
  } catch { return NextResponse.json({error:"Could not load the proposal. Please try again."},{status:500}); }
}
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const data=convertKeysToCamel(await req.json());
    const [proposal]=await db.update(bidProposals).set(data as any).where(eq(bidProposals.id,id)).returning();
    if(!proposal) return NextResponse.json({error:"Not found"},{status:404});
    return NextResponse.json(proposal);
  } catch { return NextResponse.json({error:"Could not update the proposal. Please try again."},{status:500}); }
}
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const denied = requireAdmin(req); if (denied) return denied;
  try { await db.delete(bidProposals).where(eq(bidProposals.id,id)); return NextResponse.json({success:true}); }
  catch { return NextResponse.json({error:"Could not delete the proposal. Please try again."},{status:500}); }
}

