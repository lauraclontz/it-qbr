-- QBR persistence schema for Webflow Cloud (Cloudflare D1 / SQLite)
-- Applied via: wrangler d1 migrations apply DB [--local | --remote]

CREATE TABLE IF NOT EXISTS flags (
  quarter      TEXT NOT NULL,
  flag_id      TEXT NOT NULL,
  severity     TEXT NOT NULL,
  section      TEXT NOT NULL,
  message      TEXT NOT NULL,
  owner        TEXT NOT NULL,
  resolved     INTEGER NOT NULL DEFAULT 0,
  resolved_by  TEXT,
  resolved_at  TEXT,
  PRIMARY KEY (quarter, flag_id)
);

CREATE TABLE IF NOT EXISTS comments (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  quarter     TEXT NOT NULL,
  section_id  TEXT NOT NULL,
  author      TEXT NOT NULL,
  text        TEXT NOT NULL,
  timestamp   TEXT NOT NULL,          -- human-readable display time, e.g. "Aug 7, 3:45 PM"
  created_at  TEXT NOT NULL            -- ISO 8601, used for ordering
);

CREATE INDEX IF NOT EXISTS idx_comments_quarter ON comments (quarter, created_at);

CREATE TABLE IF NOT EXISTS edits (
  quarter     TEXT NOT NULL,
  edit_id     TEXT NOT NULL,
  content     TEXT NOT NULL,
  author      TEXT,
  updated_at  TEXT NOT NULL,
  PRIMARY KEY (quarter, edit_id)
);
