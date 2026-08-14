# QBR Persistence — Webflow Cloud D1 (SQLite) Setup

The QBR app's comments / flags / edits persistence was migrated off the FastAPI backend
(`qbr-app/`, `BACKEND_URL`) to **Cloudflare D1** via Webflow Cloud's native SQLite storage.

> **Correction to `Q2FY27_RUNBOOK.md` Step 4:** the runbook's `import { sql } from '@webflow/cloud/db'`
> API does **not** exist. The real integration is a `wrangler.json` D1 binding accessed through
> `@opennextjs/cloudflare`'s `getCloudflareContext().env.DB`, with schema managed as SQL migrations.

## What's already done (code, committed to the working tree)

- **Deps added:** `@opennextjs/cloudflare`, `wrangler` (dev). Next bumped `16.2.5 → ^16.3.0`
  (OpenNext requires `next >=16.2.11`).
- **`wrangler.json`** — declares the `DB` D1 binding, `migrations_dir: "migrations"`.
- **`migrations/0001_init.sql`** — `flags`, `comments`, `edits` tables (+ index).
- **`lib/db.ts`** — `getDB()` (binding accessor) + `fmtTime()` (Pacific display timestamps).
- **`next.config.ts`** — `initOpenNextCloudflareForDev()` so the binding works in `next dev`.
- **All 6 routes** under `app/api/{flags,comments,edits}` rewritten to raw D1 prepared
  statements. Request/response shapes are **identical** to the old FastAPI contract, so
  `public/qbr-init.js` needs no changes. (Also fixed a latent bug: the old flag *unresolve*
  proxy pointed at `/flags/...` instead of `/api/flags/...`.)
- **Q2 flag seeding** — `GET /api/flags` seeds the 11 Q2 `FLAG_DEFAULTS` on first read per quarter (idempotent).

## Verified locally

- `npx tsc --noEmit` — clean
- `npm run build` — clean; all 6 API routes compile as Dynamic (ƒ), `/` prerenders static
- Local D1 applied (`npm run db:apply:local`) and every endpoint round-tripped:
  seed → 11 flags; comment POST/GET(grouped)/DELETE (+404); edit upsert; flag resolve/unresolve (+404).

## Handoff — steps only you (Laura) can do (infra + deploy)

Per Webflow Cloud docs, provisioning is **automatic on deploy** — you do **not** run a manual
`wrangler d1 create` or apply migrations by hand:

1. **Deploy** the `qbr-nextjs/` app to Webflow Cloud (push to `main`, or the Webflow Cloud deploy flow).
2. On deploy, Webflow Cloud **provisions the D1 database**, assigns the real `database_id`, and
   **auto-applies** the files in `migrations/`.
3. In the **Webflow Cloud dashboard**, confirm the `DB` resource exists and the `database_id` is populated.
   (The `PLACEHOLDER_...` value in `wrangler.json` is the documented placeholder pattern; Webflow Cloud
   overrides it. If the dashboard shows a fixed ID it wants pinned, paste it into `wrangler.json`.)
4. Load the live URL and confirm the **flags panel shows the 11 Q2 flags**, and that adding a
   comment / resolving a flag persists across reload.

### To verify locally against the production-like runtime (optional)
```bash
npm run db:apply:local        # apply migrations to local D1
npm run dev                   # or: npx opennextjs-cloudflare preview
```

## Known follow-ups (not part of this persistence migration)

- **`/api/data/{jira,workato,asana}`** return 404 — these live-data endpoints were never ported
  to Next.js. The frontend already catches this and renders from data embedded in the report body.
  Decide during the content phase: embed Q2 data directly in `qbr-body.html`, or add static
  data routes. (Q2 source data is ready in `output/Q2FY27/` and `input/Q2FY27/`.)
- **`.env.local` `BACKEND_URL`** is now unused (FastAPI retired) — safe to remove.
- **`webflow.json` build command** stays `npm run build`; confirm Webflow Cloud still wraps the
  OpenNext build server-side (it did for the prior deploy).
- **`qbr-init.js` `QUARTER` const** is still `'Q1FY27'` — flip to `'Q2FY27'` in the content phase.
