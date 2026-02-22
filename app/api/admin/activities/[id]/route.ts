import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { activityLog } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { convertKeysToCamel } from "@/lib/db/utils";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const data = convertKeysToCamel(body);
    const [activity] = await db.update(activityLog)
      .set(data)
      .where(eq(activityLog.id, params.id))
      .returning();
    if (!activity) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(activity);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.delete(activityLog).where(eq(activityLog.id, params.id));
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
