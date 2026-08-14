// Regenerates lib/qbr-html.ts from public/qbr-body.html.
// The Webflow Cloud edge runtime can't read files, so the report body is
// bundled as a TS string. Run after every edit to public/qbr-body.html:
//   node scripts/sync-qbr-html.mjs      (or: npm run sync:html)
import { readFileSync, writeFileSync } from 'node:fs';

const src = 'public/qbr-body.html';
const out = 'lib/qbr-html.ts';

const html = readFileSync(src, 'utf-8');
const escaped = html
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$\{/g, '\\${');

writeFileSync(out, `export const qbrBodyHtml = \`${escaped}\`;\n`);
console.log(`Synced ${out} from ${src}: ${escaped.length} chars`);
