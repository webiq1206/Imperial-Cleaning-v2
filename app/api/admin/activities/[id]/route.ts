import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { convertKeysToCamel } from "@/lib/db/utils";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { activityLog } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const data = convertKeysToCamel(await req.json());
    const [activity] = await db.update(activityLog).set(data as any).where(eq(activityLog.id, params.id)).returning();
    if (!activity) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(activity);
  } catch { return NextResponse.json({ error: "Could not update the activity. Please try again." }, { status: 500 }); }
}
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    await db.delete(activityLog).where(eq(activityLog.id, params.id));
    return NextResponse.json({ success: true });
  } catch { return NextResponse.json({ error: "Could not delete the activity. Please try again." }, { status: 500 }); }
}

