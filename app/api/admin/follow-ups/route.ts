import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { activityLog, constructionProjects } from "@/lib/db/schema";
import { isNotNull, asc, eq, sql, and, gte, lte, inArray } from "drizzle-orm";

export async function GET() {
  try {
    const today = new Date().toISOString().split("T")[0];
    const thirtyDaysOut = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const [followUps, approachingCleanup, expiringBids] = await Promise.all([
      db.select().from(activityLog)
        .where(and(
          isNotNull(activityLog.nextActionDate),
          lte(activityLog.nextActionDate, thirtyDaysOut)
        ))
        .orderBy(asc(activityLog.nextActionDate))
        .limit(50),

      db.select().from(constructionProjects)
        .where(and(
          isNotNull(constructionProjects.estimatedCleanupStart),
          gte(constructionProjects.estimatedCleanupStart, today),
          lte(constructionProjects.estimatedCleanupStart, thirtyDaysOut),
          inArray(constructionProjects.pipelineStage, [
            "discovered", "researching", "gc_contacted", "plans_requested",
            "plans_received", "estimating", "bid_submitted", "bid_follow_up", "awarded"
          ])
        ))
        .orderBy(asc(constructionProjects.estimatedCleanupStart)),

      db.select().from(constructionProjects)
        .where(and(
          inArray(constructionProjects.currentPhase, ["drywall", "interior_finishes", "punch_list"]),
          inArray(constructionProjects.pipelineStage, [
            "discovered", "researching", "gc_contacted"
          ])
        )),
    ]);

    return NextResponse.json({
      followUps,
      approachingCleanup,
      outreachNeeded: expiringBids,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
