import { NextRequest, NextResponse } from 'next/server';
import { getDB, fmtTime, quarterFrom, DEFAULT_QUARTER } from '@/lib/db';

export const dynamic = 'force-dynamic';

// GET → { [edit_id]: { content, author } }
export async function GET(req: NextRequest) {
  const quarter = quarterFrom(req);
  const db = getDB();

  const { results } = await db
    .prepare('SELECT edit_id, content, author FROM edits WHERE quarter = ?')
    .bind(quarter)
    .all<{ edit_id: string; content: string; author: string | null }>();

  const out: Record<string, { content: string; author: string }> = {};
  for (const e of results) {
    out[e.edit_id] = { content: e.content, author: e.author ?? '' };
  }
  return NextResponse.json(out);
}

// POST { edit_id, content, author?, quarter? } → { success }  (upsert)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const quarter: string = body?.quarter ?? DEFAULT_QUARTER;
  const author: string | null = body?.author ?? null;
  const updatedAt = fmtTime();

  const db = getDB();
  await db
    .prepare(
      `INSERT INTO edits (quarter, edit_id, content, author, updated_at)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(quarter, edit_id)
       DO UPDATE SET content = excluded.content, author = excluded.author, updated_at = excluded.updated_at`
    )
    .bind(quarter, body.edit_id, body.content, author, updatedAt)
    .run();

  return NextResponse.json({ success: true });
}
