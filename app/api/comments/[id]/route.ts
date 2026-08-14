import { NextRequest, NextResponse } from 'next/server';
import { getDB } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const db = getDB();
  const res = await db
    .prepare('DELETE FROM comments WHERE id = ?')
    .bind(Number(id))
    .run();

  if (!res.meta.changes) {
    return NextResponse.json({ detail: 'Comment not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
