import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { bidProposals, constructionProjects } from "@/lib/db/schema";
import { eq, desc, sql } from "drizzle-orm";
import { convertKeysToCamel } from "@/lib/db/utils";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const projectId = url.searchParams.get("project_id");

    const query = projectId
      ? db.select().from(bidProposals).where(eq(bidProposals.projectId, projectId)).orderBy(desc(bidProposals.createdAt))
      : db.select().from(bidProposals).orderBy(desc(bidProposals.createdAt));

    const proposals = await query;
    return NextResponse.json({ proposals });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = convertKeysToCamel(body);

    const countResult = await db.select({ count: sql<number>`count(*)` }).from(bidProposals);
    const nextNum = Number(countResult[0].count) + 1;
    const year = new Date().getFullYear();
    const proposalNumber = `ICI-${year}-${String(nextNum).padStart(3, "0")}`;

    const [proposal] = await db.insert(bidProposals).values({
      ...data,
      proposalNumber,
    }).returning();

    return NextResponse.json(proposal, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
