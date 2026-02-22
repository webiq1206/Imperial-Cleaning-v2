import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { constructionProjects, activityLog } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { convertKeysToCamel } from "@/lib/db/utils";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const [project] = await db.select().from(constructionProjects).where(eq(constructionProjects.id, params.id));
    if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const data = convertKeysToCamel(body);
    const [existing] = await db.select().from(constructionProjects).where(eq(constructionProjects.id, params.id));
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const updates: any = { ...data, updatedAt: new Date() };

    if (data.pipelineStage && data.pipelineStage !== existing.pipelineStage) {
      updates.pipelineUpdatedAt = new Date();
      await db.insert(activityLog).values({
        projectId: params.id,
        contractorId: existing.gcCompanyId,
        activityType: "stage_change",
        subject: `Pipeline: ${existing.pipelineStage} → ${data.pipelineStage}`,
        details: `Project moved from "${existing.pipelineStage}" to "${data.pipelineStage}"`,
      });
    }

    if (data.currentPhase && data.currentPhase !== existing.currentPhase) {
      updates.phaseUpdatedAt = new Date();
    }

    const [project] = await db.update(constructionProjects)
      .set(updates)
      .where(eq(constructionProjects.id, params.id))
      .returning();

    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.delete(constructionProjects).where(eq(constructionProjects.id, params.id));
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
