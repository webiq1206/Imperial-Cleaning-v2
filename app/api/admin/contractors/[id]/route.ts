import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contractors, constructionProjects, activityLog } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { convertKeysToCamel } from "@/lib/db/utils";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const [contractor] = await db.select().from(contractors).where(eq(contractors.id, params.id));
    if (!contractor) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const projects = await db.select().from(constructionProjects)
      .where(eq(constructionProjects.gcCompanyId, params.id))
      .orderBy(desc(constructionProjects.createdAt));

    const activities = await db.select().from(activityLog)
      .where(eq(activityLog.contractorId, params.id))
      .orderBy(desc(activityLog.createdAt))
      .limit(50);

    return NextResponse.json({ ...contractor, projects, activities });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const data = convertKeysToCamel(body);
    const [contractor] = await db.update(contractors)
      .set({ ...data, updatedAt: new Date() } as any)
      .where(eq(contractors.id, params.id))
      .returning();
    if (!contractor) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(contractor);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.delete(contractors).where(eq(contractors.id, params.id));
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
