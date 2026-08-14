import { getCloudflareContext } from '@opennextjs/cloudflare';
import type { NextRequest } from 'next/server';

/** The quarter this report build targets. Roll this over each quarter. */
export const DEFAULT_QUARTER = 'Q2FY27';

/** Reads the `quarter` query param, falling back to DEFAULT_QUARTER. */
export function quarterFrom(req: NextRequest): string {
  return req.nextUrl.searchParams.get('quarter') ?? DEFAULT_QUARTER;
}

// ── Minimal Cloudflare D1 types (avoids pulling in @cloudflare/workers-types) ──
export interface D1Result<T = Record<string, unknown>> {
  results: T[];
  success: boolean;
  meta: { changes: number; last_row_id: number };
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
  run(): Promise<D1Result>;
  first<T = Record<string, unknown>>(): Promise<T | null>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
}

/**
 * Returns the D1 database bound as `DB` in wrangler.json.
 * Works on Webflow Cloud (Cloudflare) at runtime and in `next dev`
 * (via initOpenNextCloudflareForDev() in next.config.ts + a local D1).
 */
export function getDB(): D1Database {
  const { env } = getCloudflareContext();
  const db = (env as unknown as { DB?: D1Database }).DB;
  if (!db) {
    throw new Error(
      'D1 binding "DB" not found. Confirm wrangler.json d1_databases[].binding === "DB", ' +
        'the database is provisioned (database_id set), and migrations were applied.'
    );
  }
  return db;
}

// e.g. "Aug 7, 3:45 PM" in Laura's timezone.
const timeFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Los_Angeles',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});

/** Human-readable display timestamp, e.g. "Aug 7, 3:45 PM". */
export function fmtTime(d: Date = new Date()): string {
  return timeFmt.format(d);
}
