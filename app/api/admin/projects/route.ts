import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, boundedInteger } from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { convertKeysToCamel } from "@/lib/db/utils";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { constructionProjects } from "@/lib/db/schema";
import { eq, desc, asc, ilike, and, or, sql, inArray } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const url = new URL(req.url);
    const page = boundedInteger(url.searchParams.get("page"),1,100000);
    const limit = boundedInteger(url.searchParams.get("limit"),50,100);
    const sort = url.searchParams.get("sort") || "created_at";
    const order = url.searchParams.get("order") || "desc";
    const search = url.searchParams.get("search");
    const pipelineStage = url.searchParams.get("pipeline_stage");
    const currentPhase = url.searchParams.get("current_phase");
    const city = url.searchParams.get("city");
    const state = url.searchParams.get("state");
    const buildingType = url.searchParams.get("building_type");
    const priority = url.searchParams.get("priority");
    const gcCompanyId = url.searchParams.get("gc_company_id");
    const conditions = [];
    if(search) conditions.push(or(ilike(constructionProjects.projectName,`%${search}%`),ilike(constructionProjects.address,`%${search}%`),ilike(constructionProjects.gcCompanyName,`%${search}%`),ilike(constructionProjects.permitNumber,`%${search}%`)));
    if(pipelineStage) conditions.push(inArray(constructionProjects.pipelineStage,pipelineStage.split(",")));
    if(currentPhase) conditions.push(eq(constructionProjects.currentPhase,currentPhase));
    if(city) conditions.push(ilike(constructionProjects.city,city));
    if(state) conditions.push(eq(constructionProjects.state,state));
    if(buildingType) conditions.push(eq(constructionProjects.buildingType,buildingType));
    if(priority) conditions.push(eq(constructionProjects.priority,priority));
    if(gcCompanyId) conditions.push(eq(constructionProjects.gcCompanyId,gcCompanyId));
    const where = conditions.length ? and(...conditions) : undefined;
    const sortColumn = sort === "project_name" ? constructionProjects.projectName : sort === "city" ? constructionProjects.city : sort === "pipeline_stage" ? constructionProjects.pipelineStage : sort === "estimated_cleanup_value" ? constructionProjects.estimatedCleanupValue : sort === "estimated_cleanup_start" ? constructionProjects.estimatedCleanupStart : sort === "priority" ? constructionProjects.priority : constructionProjects.createdAt;
    const orderFn = order === "asc" ? asc : desc;
    const [projects,countResult] = await Promise.all([
      db.select().from(constructionProjects).where(where).orderBy(orderFn(sortColumn)).limit(limit).offset((page-1)*limit),
      db.select({count:sql<number>`count(*)`}).from(constructionProjects).where(where),
    ]);
    return NextResponse.json({projects,total:Number(countResult[0].count),page,limit,totalPages:Math.ceil(Number(countResult[0].count)/limit)});
  } catch { return NextResponse.json({error:"Could not load projects. Please try again."},{status:500}); }
}
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const data=convertKeysToCamel(await req.json());
    const [project]=await db.insert(constructionProjects).values({...data,pipelineUpdatedAt:new Date()} as any).returning();
    return NextResponse.json(project,{status:201});
  } catch { return NextResponse.json({error:"Could not save the project. Please try again."},{status:500}); }
}
