import { NextRequest, NextResponse } from 'next/server';
import { getDB, fmtTime, quarterFrom, DEFAULT_QUARTER } from '@/lib/db';

export const dynamic = 'force-dynamic';

// GET → { [section_id]: [{ id, author, text, time }], ... }
export async function GET(req: NextRequest) {
  const quarter = quarterFrom(req);
  const db = getDB();

  const { results } = await db
    .prepare(
      'SELECT id, section_id, author, text, timestamp FROM comments WHERE quarter = ? ORDER BY created_at ASC'
    )
    .bind(quarter)
    .all<{ id: number; section_id: string; author: string; text: string; timestamp: string }>();

  const grouped: Record<string, { id: number; author: string; text: string; time: string }[]> = {};
  for (const c of results) {
    (grouped[c.section_id] ??= []).push({
      id: c.id,
      author: c.author,
      text: c.text,
      time: c.timestamp,
    });
  }
  return NextResponse.json(grouped);
}

// POST { section_id, author, text, quarter? } → { success, id, time }
export async function POST(req: NextRequest) {
  const body = await req.json();
  const quarter: string = body?.quarter ?? DEFAULT_QUARTER;
  const time = fmtTime();
  const createdAt = new Date().toISOString();

  const db = getDB();
  const res = await db
    .prepare(
      'INSERT INTO comments (quarter, section_id, author, text, timestamp, created_at) VALUES (?, ?, ?, ?, ?, ?)'
    )
    .bind(quarter, body.section_id, body.author, body.text, time, createdAt)
    .run();

  return NextResponse.json({ success: true, id: res.meta.last_row_id, time });
}
