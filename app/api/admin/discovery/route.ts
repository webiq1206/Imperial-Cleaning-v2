import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { discoveryQueue, constructionProjects } from "@/lib/db/schema";
import { eq, desc, and, inArray } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const queue = await db.select().from(discoveryQueue).where(eq(discoveryQueue.status, "pending")).orderBy(desc(discoveryQueue.createdAt));
    return NextResponse.json({ queue });
  } catch { return NextResponse.json({ error: "Could not load discovery items. Please try again." }, { status: 500 }); }
}
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const { action, ids, projectData } = await req.json();
    if (!Array.isArray(ids) || ids.length < 1 || ids.length > 100 || ids.some(id => typeof id !== "string")) return NextResponse.json({error:"Choose between 1 and 100 valid items."},{status:400});
    const uniqueIds = Array.from(new Set<string>(ids));
    if (action === "add_to_pipeline") {
      // Lock selected pending rows in one transaction so retries cannot create duplicate projects.
      const added = await db.transaction(async tx => {
        const items = await tx.select().from(discoveryQueue).where(and(eq(discoveryQueue.status, "pending"), inArray(discoveryQueue.id, uniqueIds))).for("update");
        let count = 0;
        for (const item of items.filter(i => uniqueIds.includes(i.id))) {
          await tx.insert(constructionProjects).values({
            projectName: item.projectName || "Unknown Project", projectType: item.projectType || "commercial",
            city: item.city || "Unknown", state: item.state || "ID", address: item.address,
            estimatedProjectValue: item.estimatedValue?.toString(), gcCompanyName: item.gcName,
            source: item.sourceName, sourceProjectId: item.sourceProjectId, pipelineStage: "discovered",
          } as any);
          await tx.update(discoveryQueue).set({ status: "added" }).where(eq(discoveryQueue.id, item.id));
          count += 1;
        }
        return count;
      });
      return NextResponse.json({ success: true, added });
    }
    if (action === "dismiss") {
      let dismissed = 0;
      for (const id of uniqueIds) {
        const rows = await db.update(discoveryQueue).set({ status: "dismissed", dismissedReason: typeof projectData?.reason === "string" ? projectData.reason.slice(0,1000) : "not_relevant" }).where(eq(discoveryQueue.id, id)).returning({id:discoveryQueue.id});
        dismissed += rows.length;
      }
      return NextResponse.json({ success: true, dismissed });
    }
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch { return NextResponse.json({ error: "Could not update discovery items. Please try again." }, { status: 500 }); }
}
