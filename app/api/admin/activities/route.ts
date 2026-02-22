import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { activityLog } from "@/lib/db/schema";
import { eq, desc, and, isNotNull, gte, sql } from "drizzle-orm";
import { convertKeysToCamel } from "@/lib/db/utils";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const projectId = url.searchParams.get("project_id");
    const contractorId = url.searchParams.get("contractor_id");
    const limit = parseInt(url.searchParams.get("limit") || "50");

    const conditions = [];
    if (projectId) conditions.push(eq(activityLog.projectId, projectId));
    if (contractorId) conditions.push(eq(activityLog.contractorId, contractorId));

    const where = conditions.length > 0 ? and(...conditions) : undefined;

    const activities = await db.select().from(activityLog)
      .where(where)
      .orderBy(desc(activityLog.createdAt))
      .limit(limit);

    return NextResponse.json({ activities });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = convertKeysToCamel(body);
    const [activity] = await db.insert(activityLog).values(data).returning();
    return NextResponse.json(activity, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
