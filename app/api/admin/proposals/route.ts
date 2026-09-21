import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { convertKeysToCamel } from "@/lib/db/utils";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { bidProposals } from "@/lib/db/schema";
import { eq, desc, sql } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const projectId=new URL(req.url).searchParams.get("project_id");
    const query=projectId ? db.select().from(bidProposals).where(eq(bidProposals.projectId,projectId)).orderBy(desc(bidProposals.createdAt)) : db.select().from(bidProposals).orderBy(desc(bidProposals.createdAt));
    const proposals=await query;
    return NextResponse.json({proposals});
  } catch { return NextResponse.json({error:"Could not load proposals. Please try again."},{status:500}); }
}
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const data=convertKeysToCamel(await req.json());
    const countResult=await db.select({count:sql<number>`count(*)`}).from(bidProposals);
    const nextNum=Number(countResult[0].count)+1;
    const year=new Date().getFullYear();
    const proposalNumber=`ICI-${year}-${String(nextNum).padStart(3,"0")}`;
    const [proposal]=await db.insert(bidProposals).values({...data,proposalNumber} as any).returning();
    return NextResponse.json(proposal,{status:201});
  } catch { return NextResponse.json({error:"Could not save the proposal. Please try again."},{status:500}); }
}

