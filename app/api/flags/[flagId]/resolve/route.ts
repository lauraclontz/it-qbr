import { NextRequest, NextResponse } from 'next/server';
import { getDB, fmtTime, quarterFrom } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ flagId: string }> }
) {
  const { flagId } = await params;
  const quarter = quarterFrom(req);
  const body = await req.json().catch(() => ({}));
  const resolvedBy: string = body?.resolved_by ?? '';
  const resolvedAt = fmtTime();

  const db = getDB();
  const res = await db
    .prepare(
      'UPDATE flags SET resolved = 1, resolved_by = ?, resolved_at = ? WHERE quarter = ? AND flag_id = ?'
    )
    .bind(resolvedBy, resolvedAt, quarter, flagId)
    .run();

  if (!res.meta.changes) {
    return NextResponse.json({ detail: 'Flag not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, resolved_at: resolvedAt });
}
