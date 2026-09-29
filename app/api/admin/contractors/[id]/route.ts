import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { convertKeysToCamel } from "@/lib/db/utils";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { contractors, constructionProjects, activityLog } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const [contractor] = await db.select().from(contractors).where(eq(contractors.id, id));
    if (!contractor) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const projects = await db.select().from(constructionProjects).where(eq(constructionProjects.gcCompanyId, id)).orderBy(desc(constructionProjects.createdAt));
    const activities = await db.select().from(activityLog).where(eq(activityLog.contractorId, id)).orderBy(desc(activityLog.createdAt)).limit(50);
    return NextResponse.json({ ...contractor, projects, activities });
  } catch { return NextResponse.json({ error: "Could not load the contractor. Please try again." }, { status: 500 }); }
}
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const data = convertKeysToCamel(await req.json());
    const [contractor] = await db.update(contractors).set({ ...data, updatedAt: new Date() } as any).where(eq(contractors.id, id)).returning();
    if (!contractor) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(contractor);
  } catch { return NextResponse.json({ error: "Could not update the contractor. Please try again." }, { status: 500 }); }
}
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const denied = requireAdmin(req); if (denied) return denied;
  try { await db.delete(contractors).where(eq(contractors.id, id)); return NextResponse.json({ success: true }); }
  catch { return NextResponse.json({ error: "Could not delete the contractor. Please try again." }, { status: 500 }); }
}

