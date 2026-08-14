import { NextRequest, NextResponse } from 'next/server';
import { getDB, quarterFrom } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ flagId: string }> }
) {
  const { flagId } = await params;
  const quarter = quarterFrom(req);

  const db = getDB();
  const res = await db
    .prepare(
      'UPDATE flags SET resolved = 0, resolved_by = NULL, resolved_at = NULL WHERE quarter = ? AND flag_id = ?'
    )
    .bind(quarter, flagId)
    .run();

  if (!res.meta.changes) {
    return NextResponse.json({ detail: 'Flag not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
