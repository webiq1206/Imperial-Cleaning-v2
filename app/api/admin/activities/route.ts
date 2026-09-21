import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, boundedInteger } from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { convertKeysToCamel } from "@/lib/db/utils";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { activityLog } from "@/lib/db/schema";
import { eq, desc, and } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const url = new URL(req.url);
    const projectId = url.searchParams.get("project_id");
    const contractorId = url.searchParams.get("contractor_id");
    const limit = boundedInteger(url.searchParams.get("limit"), 50, 100);
    const conditions = [];
    if (projectId) conditions.push(eq(activityLog.projectId, projectId));
    if (contractorId) conditions.push(eq(activityLog.contractorId, contractorId));
    const where = conditions.length > 0 ? and(...conditions) : undefined;
    const activities = await db.select().from(activityLog).where(where).orderBy(desc(activityLog.createdAt)).limit(limit);
    return NextResponse.json({ activities });
  } catch { return NextResponse.json({ error: "Could not load activities. Please try again." }, { status: 500 }); }
}
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const data = convertKeysToCamel(await req.json());
    const [activity] = await db.insert(activityLog).values(data as any).returning();
    return NextResponse.json(activity, { status: 201 });
  } catch { return NextResponse.json({ error: "Could not save the activity. Please try again." }, { status: 500 }); }
}

