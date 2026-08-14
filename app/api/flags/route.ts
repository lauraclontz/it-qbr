import { NextRequest, NextResponse } from 'next/server';
import { getDB, quarterFrom, type D1Database } from '@/lib/db';

export const dynamic = 'force-dynamic';

// Q2 FY27 default flags — seeded on first read for a quarter (idempotent).
const FLAG_DEFAULTS = [
  { flag_id: 'flag-exec-summary',       severity: 'HIGH',   section: 'Exec Summary',      message: 'AI-drafted executive summary pending — Laura to finalize before presenting',                owner: 'Laura' },
  { flag_id: 'flag-btec-data-quality',  severity: 'MEDIUM', section: 'BTEC Data Quality', message: 'Check Q2 categorization rate — Q1 was 91% (34 tickets missing). Target 95%+.',                owner: 'Anna Duncanson' },
  { flag_id: 'flag-eni-data-quality',   severity: 'LOW',    section: 'ENI Data Quality',  message: 'ENI bug rate is largely auto-created Workato error tickets — not signal. Context in section.', owner: 'Sachin' },
  { flag_id: 'flag-biztech-commentary', severity: 'MEDIUM', section: 'GTM',                message: 'GTM commentary needs Anna Duncanson review',                                                owner: 'Anna Duncanson' },
  { flag_id: 'flag-enttech-commentary', severity: 'MEDIUM', section: 'Finance & Legal Systems', message: 'Finance & Legal Systems commentary needs Bali review',                                 owner: 'Bali' },
  { flag_id: 'flag-eni-commentary',     severity: 'MEDIUM', section: 'Integrations',      message: 'Integrations commentary needs Sachin review',                                               owner: 'Sachin' },
  { flag_id: 'flag-endpoint',           severity: 'LOW',    section: 'Endpoint',          message: 'Awaiting Jamf data from Chris',                                                             owner: 'Chris' },
  { flag_id: 'flag-ai-adoption',        severity: 'LOW',    section: 'AI Adoption',       message: 'Awaiting Q2 AI adoption metrics from Reed',                                                 owner: 'Reed' },
  { flag_id: 'flag-decisions',          severity: 'LOW',    section: 'Decisions',         message: 'Laura / Lalena to populate before QBR meeting',                                             owner: 'Laura / Lalena' },
  { flag_id: 'flag-sf-maturity',        severity: 'LOW',    section: 'SF Maturity',       message: 'Review SF maturity assessment and Q3 targets',                                              owner: 'Laura' },
  { flag_id: 'flag-actions',            severity: 'LOW',    section: 'Action Items',      message: 'Carry forward open Q1 items; capture new items during QBR',                                 owner: 'Laura' },
];

async function seedFlags(db: D1Database, quarter: string) {
  const row = await db
    .prepare('SELECT COUNT(*) AS n FROM flags WHERE quarter = ?')
    .bind(quarter)
    .first<{ n: number }>();
  if (row && row.n > 0) return;

  const insert = db.prepare(
    'INSERT OR IGNORE INTO flags (quarter, flag_id, severity, section, message, owner, resolved) VALUES (?, ?, ?, ?, ?, ?, 0)'
  );
  await db.batch(
    FLAG_DEFAULTS.map((f) =>
      insert.bind(quarter, f.flag_id, f.severity, f.section, f.message, f.owner)
    )
  );
}

export async function GET(req: NextRequest) {
  const quarter = quarterFrom(req);
  const db = getDB();
  await seedFlags(db, quarter);

  const { results } = await db
    .prepare(
      'SELECT flag_id, severity, section, message, owner, resolved, resolved_by, resolved_at FROM flags WHERE quarter = ?'
    )
    .bind(quarter)
    .all<{
      flag_id: string; severity: string; section: string; message: string;
      owner: string; resolved: number; resolved_by: string | null; resolved_at: string | null;
    }>();

  const flags = results.map((f) => ({
    ...f,
    resolved: !!f.resolved,
    resolved_by: f.resolved_by ?? '',
    resolved_at: f.resolved_at ?? '',
  }));

  return NextResponse.json(flags);
}
