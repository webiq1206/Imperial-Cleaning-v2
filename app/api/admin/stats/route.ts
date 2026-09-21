import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { constructionProjects, activityLog } from "@/lib/db/schema";
import { sql, and, inArray, desc } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const activeStages=["discovered","researching","gc_contacted","plans_requested","plans_received","estimating","bid_submitted","bid_follow_up","awarded","in_progress"];
    const bidStages=["bid_submitted","bid_follow_up"];
    const [activeProjectsResult,pipelineValueResult,bidsOutstandingResult,totalBidResult,wonBidResult,recentActivities,hotProjects,stageBreakdown]=await Promise.all([
      db.select({count:sql<number>`count(*)`}).from(constructionProjects).where(inArray(constructionProjects.pipelineStage,activeStages)),
      db.select({total:sql<number>`COALESCE(SUM(CAST(estimated_cleanup_value AS NUMERIC)), 0)`}).from(constructionProjects).where(inArray(constructionProjects.pipelineStage,activeStages)),
      db.select({count:sql<number>`count(*)`}).from(constructionProjects).where(inArray(constructionProjects.pipelineStage,bidStages)),
      db.select({count:sql<number>`count(*)`}).from(constructionProjects).where(inArray(constructionProjects.pipelineStage,["bid_submitted","bid_follow_up","awarded","lost","completed"])),
      db.select({count:sql<number>`count(*)`}).from(constructionProjects).where(inArray(constructionProjects.pipelineStage,["awarded","completed"])),
      db.select().from(activityLog).orderBy(desc(activityLog.createdAt)).limit(20),
      db.select().from(constructionProjects).where(and(inArray(constructionProjects.priority,["hot","high"]),inArray(constructionProjects.pipelineStage,activeStages))).orderBy(desc(constructionProjects.updatedAt)).limit(10),
      db.select({stage:constructionProjects.pipelineStage,count:sql<number>`count(*)`}).from(constructionProjects).groupBy(constructionProjects.pipelineStage),
    ]);
    const totalBids=Number(totalBidResult[0].count); const wonBids=Number(wonBidResult[0].count);
    const winRate=totalBids>0?Math.round((wonBids/totalBids)*100):0;
    return NextResponse.json({activeProjects:Number(activeProjectsResult[0].count),pipelineValue:Number(pipelineValueResult[0].total),bidsOutstanding:Number(bidsOutstandingResult[0].count),winRate,recentActivities,hotProjects,stageBreakdown:stageBreakdown.reduce((acc,row)=>{acc[row.stage || "unknown"]=Number(row.count);return acc;},{} as Record<string,number>)});
  } catch { return NextResponse.json({error:"Could not load dashboard statistics. Please try again."},{status:500}); }
}

