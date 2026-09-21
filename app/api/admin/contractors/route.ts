import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, boundedInteger } from "@/lib/admin-auth";
import { db } from "@/lib/db";
import { convertKeysToCamel } from "@/lib/db/utils";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import { contractors } from "@/lib/db/schema";
import { eq, desc, ilike, and, or, sql } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");
    const relationshipStatus = url.searchParams.get("relationship_status");
    const page = boundedInteger(url.searchParams.get("page"), 1, 100000);
    const limit = boundedInteger(url.searchParams.get("limit"), 50, 100);
    const conditions = [];
    if (search) conditions.push(or(ilike(contractors.companyName, `%${search}%`), ilike(contractors.city, `%${search}%`), ilike(contractors.email, `%${search}%`)));
    if (relationshipStatus) conditions.push(eq(contractors.relationshipStatus, relationshipStatus));
    const where = conditions.length > 0 ? and(...conditions) : undefined;
    const [results, countResult] = await Promise.all([
      db.select().from(contractors).where(where).orderBy(desc(contractors.createdAt)).limit(limit).offset((page - 1) * limit),
      db.select({ count: sql<number>`count(*)` }).from(contractors).where(where),
    ]);
    return NextResponse.json({ contractors: results, total: Number(countResult[0].count), page, limit });
  } catch { return NextResponse.json({ error: "Could not load contractors. Please try again." }, { status: 500 }); }
}
export async function POST(req: NextRequest) {
  const denied = requireAdmin(req); if (denied) return denied;
  try {
    const data = convertKeysToCamel(await req.json());
    const [contractor] = await db.insert(contractors).values(data as any).returning();
    return NextResponse.json(contractor, { status: 201 });
  } catch { return NextResponse.json({ error: "Could not save the contractor. Please try again." }, { status: 500 }); }
}

