import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { convertKeysToCamel } from "@/lib/db/utils";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { constructionProjects, activityLog } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const [project]=await db.select().from(constructionProjects).where(eq(constructionProjects.id,params.id));
    if(!project) return NextResponse.json({error:"Not found"},{status:404});
    return NextResponse.json(project);
  } catch { return NextResponse.json({error:"Could not load the project. Please try again."},{status:500}); }
}
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const data=convertKeysToCamel(await req.json());
    const [existing]=await db.select().from(constructionProjects).where(eq(constructionProjects.id,params.id));
    if(!existing) return NextResponse.json({error:"Not found"},{status:404});
    const updates:any={...data,updatedAt:new Date()};
    if(data.pipelineStage && data.pipelineStage!==existing.pipelineStage) {
      updates.pipelineUpdatedAt=new Date();
      await db.insert(activityLog).values({projectId:params.id,contractorId:existing.gcCompanyId,activityType:"stage_change",subject:`Pipeline: ${existing.pipelineStage} → ${data.pipelineStage}`,details:`Project moved from "${existing.pipelineStage}" to "${data.pipelineStage}"`});
    }
    if(data.currentPhase && data.currentPhase!==existing.currentPhase) updates.phaseUpdatedAt=new Date();
    const [project]=await db.update(constructionProjects).set(updates).where(eq(constructionProjects.id,params.id)).returning();
    return NextResponse.json(project);
  } catch { return NextResponse.json({error:"Could not update the project. Please try again."},{status:500}); }
}
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req); if (denied) return denied;
  try { await db.delete(constructionProjects).where(eq(constructionProjects.id,params.id)); return NextResponse.json({success:true}); }
  catch { return NextResponse.json({error:"Could not delete the project. Please try again."},{status:500}); }
}
