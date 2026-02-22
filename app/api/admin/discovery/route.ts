import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { discoveryQueue, constructionProjects } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET() {
  try {
    const queue = await db.select().from(discoveryQueue)
      .where(eq(discoveryQueue.status, "pending"))
      .orderBy(desc(discoveryQueue.createdAt));
    return NextResponse.json({ queue });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { action, ids, projectData } = await req.json();

    if (action === "add_to_pipeline" && ids?.length) {
      const items = await db.select().from(discoveryQueue)
        .where(eq(discoveryQueue.status, "pending"));

      for (const item of items.filter(i => ids.includes(i.id))) {
        await db.insert(constructionProjects).values({
          projectName: item.projectName || "Unknown Project",
          projectType: item.projectType || "commercial",
          city: item.city || "Unknown",
          state: item.state || "ID",
          address: item.address,
          estimatedProjectValue: item.estimatedValue?.toString(),
          gcCompanyName: item.gcName,
          source: item.sourceName,
          sourceProjectId: item.sourceProjectId,
          pipelineStage: "discovered",
        } as any);
        await db.update(discoveryQueue).set({ status: "added" }).where(eq(discoveryQueue.id, item.id));
      }

      return NextResponse.json({ success: true, added: ids.length });
    }

    if (action === "dismiss" && ids?.length) {
      for (const id of ids) {
        await db.update(discoveryQueue)
          .set({ status: "dismissed", dismissedReason: projectData?.reason || "not_relevant" })
          .where(eq(discoveryQueue.id, id));
      }
      return NextResponse.json({ success: true, dismissed: ids.length });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
