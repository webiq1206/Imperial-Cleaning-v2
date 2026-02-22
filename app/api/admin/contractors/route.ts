import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contractors } from "@/lib/db/schema";
import { eq, desc, ilike, and, or, sql } from "drizzle-orm";
import { convertKeysToCamel } from "@/lib/db/utils";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");
    const relationshipStatus = url.searchParams.get("relationship_status");
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "50");

    const conditions = [];
    if (search) {
      conditions.push(
        or(
          ilike(contractors.companyName, `%${search}%`),
          ilike(contractors.city, `%${search}%`),
          ilike(contractors.email, `%${search}%`)
        )
      );
    }
    if (relationshipStatus) conditions.push(eq(contractors.relationshipStatus, relationshipStatus));

    const where = conditions.length > 0 ? and(...conditions) : undefined;

    const [results, countResult] = await Promise.all([
      db.select().from(contractors).where(where).orderBy(desc(contractors.createdAt)).limit(limit).offset((page - 1) * limit),
      db.select({ count: sql<number>`count(*)` }).from(contractors).where(where),
    ]);

    return NextResponse.json({ contractors: results, total: Number(countResult[0].count), page, limit });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = convertKeysToCamel(body);
    const [contractor] = await db.insert(contractors).values(data as any).returning();
    return NextResponse.json(contractor, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
