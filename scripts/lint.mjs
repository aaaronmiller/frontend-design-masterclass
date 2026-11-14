#!/usr/bin/env node
/* lint.mjs: run the vendored Hallmark sloplint (vendor/hallmark/scripts/sloplint.mjs, unmodified)
   with Hallmark's page budgets off and its hero-geometry gates demoted to advice.
   Node 18+, no dependencies. Gate ids and tiers: references/direction.md. */
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SLOPLINT = join(HERE, '..', 'vendor', 'hallmark', 'scripts', 'sloplint.mjs');

// Dropped by default: Hallmark's stamp and its page budgets (words per screen and per page,
// section counts, section gaps, section mass, section-head size).
const BUDGET = ['20', '58', '59', '77', '78'];
// Reported as ADVICE by default, never counted: they presume Hallmark's hero postures,
// its capped container and its ban on drawn illustration, which this skill does not require.
const SHAPE = ['44a', '44b', '44c', '44d', '79', '80'];

function usage() {
  console.error(`usage: node lint.mjs <file-or-dir ...> [--render] [--url http://localhost:3000] [--hallmark]
                    [--off <gates>] [--on <gates>] [--advise <gates>] [--json] [other sloplint flags]

  default      gates ${BUDGET.join(', ')} are off; gates ${SHAPE.join(', ')} report as ADVICE
  --hallmark   upstream behaviour: every gate on at its own tier (use in a Hallmark run)
  --off 80,83  also drop these gates          --on 58      restore a gate to its upstream tier
  --advise 83  report these gates as ADVICE   --json       machine-readable result
  --render     add the render tier: 320 to 1920 overflow, contrast, focus rings, screenshots
               (needs puppeteer-core and a Chrome; HALLMARK_PUPPETEER and CHROME_PATH override discovery)
  a gate list is comma-separated; "44" covers 44a to 44d, "44b" names one clause
  passes through: --scope page|component|app  --stage hero|page  --tier floor  --genre  --before  --kept
  exit 0 clean, 1 an open FAIL or REFLEX, 2 a usage or run error`);
}

const argv = process.argv.slice(2);
const pass = [];
const off = new Set(BUDGET);
const advise = new Set(SHAPE);
let json = false;
const VALUED = new Set(['--genre', '--scope', '--tier', '--stage', '--url']);
const list = (v) => String(v || '').split(',').map((s) => s.trim()).filter(Boolean);
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--help' || a === '-h') { usage(); process.exit(0); }
  else if (a === '--hallmark') { off.clear(); advise.clear(); }
  else if (a === '--off') { for (const g of list(argv[++i])) { off.add(g); advise.delete(g); } }
  else if (a === '--on') { for (const g of list(argv[++i])) for (const set of [off, advise]) for (const k of [...set]) if (k === g || numberOf(k) === g) set.delete(k); }
  else if (a === '--advise') { for (const g of list(argv[++i])) { advise.add(g); off.delete(g); } }
  else if (a === '--json') json = true;
  else { pass.push(a); if (VALUED.has(a)) pass.push(argv[++i]); }
}
if (!pass.some((a) => a !== undefined && !String(a).startsWith('--')) && !pass.includes('--url')) { usage(); process.exit(2); }

function numberOf(id) { return (/^(\d{1,2})/.exec(String(id)) || [])[1] || null; }
function inSet(set, gate) {
  const g = String(gate);
  if (set.has(g)) return true;
  const n = numberOf(g);
  return !/^F/i.test(g) && n !== null && set.has(n);
}

// The render tier needs puppeteer-core and a browser. Upstream looks in the working folder, beside
// itself, in the global npm root and at system Chrome paths; add the common per-user caches.
const env = { ...process.env };
if (pass.includes('--render') || pass.includes('--url')) {
  const home = homedir();
  if (!env.HALLMARK_PUPPETEER) {
    const roots = [join(home, '.bun', 'install', 'global'), join(home, '.config', 'yarn', 'global'), join(home, '.local', 'share', 'pnpm', 'global', '5')];
    const hit = roots.find((r) => ['puppeteer-core', 'puppeteer'].some((n) => existsSync(join(r, 'node_modules', n))));
    if (hit) env.HALLMARK_PUPPETEER = hit;
  }
  if (!env.CHROME_PATH) {
    const newest = (dir, tail) => {
      try {
        return readdirSync(dir).sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))
          .flatMap((d) => tail.map((t) => join(dir, d, t))).find((p) => existsSync(p)) || null;
      } catch { return null; }
    };
    env.CHROME_PATH = newest(join(home, '.cache', 'puppeteer', 'chrome'), ['chrome-linux64/chrome'])
      || newest(join(home, '.cache', 'ms-playwright'), ['chrome-linux64/chrome', 'chrome-linux/chrome'])
      || newest(join(home, 'Library', 'Caches', 'ms-playwright'), ['chrome-mac/Chromium.app/Contents/MacOS/Chromium', 'chrome-mac-arm64/Chromium.app/Contents/MacOS/Chromium'])
      || undefined;
    if (!env.CHROME_PATH) delete env.CHROME_PATH;
  }
}

const run = spawnSync(process.execPath, [SLOPLINT, ...pass, '--json'], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, env });
if (run.stderr) process.stderr.write(run.stderr);
let result = null;
try { result = JSON.parse(run.stdout); } catch { /* not a result */ }
if (!result || !Array.isArray(result.findings)) {
  if (run.stdout) process.stdout.write(run.stdout);
  console.error(`lint: sloplint did not return a result (exit ${run.status ?? run.signal})`);
  process.exit(2);
}

const dropped = {};
const findings = [];
for (const f of result.findings) {
  if (inSet(off, f.gate)) { dropped[f.gate] = (dropped[f.gate] || 0) + 1; continue; }
  if (inSet(advise, f.gate) && ['FAIL', 'REFLEX', 'WARN'].includes(f.grade)) findings.push({ ...f, grade: 'ADVICE', was: f.grade });
  else findings.push(f);
}
const RANK = { FAIL: 0, REFLEX: 1, WAIVER: 2, WARN: 3, ADVICE: 4, WAIVED: 5, ANSWERED: 6, DISMISSED: 7, NOTE: 8 };
findings.sort((a, b) => (RANK[a.grade] ?? 9) - (RANK[b.grade] ?? 9));

const count = (g) => findings.filter((f) => f.grade === g).length;
const fails = count('FAIL');
const reflex = count('REFLEX');
const droppedTotal = Object.values(dropped).reduce((a, b) => a + b, 0);
const sum = result.summary || {};
const summary = {
  fails, reflex, warns: count('WARN'), advice: count('ADVICE'), waived: count('WAIVED'), rejected: count('WAIVER'),
  answered: count('ANSWERED'), dismissed: count('DISMISSED'), notes: count('NOTE'),
  files: sum.files, render: sum.render, off: [...off], advise: [...advise], dropped,
  ...(sum.kept ? { kept: sum.kept } : {}), ...(sum.before ? { before: sum.before } : {}),
};
const exitCode = !pass.includes('--before') && (fails > 0 || reflex > 0) ? 1 : 0;

if (json) {
  console.log(JSON.stringify({ summary, findings }, null, 2));
} else {
  const byFile = new Map();
  for (const f of findings) { if (!byFile.has(f.file)) byFile.set(f.file, []); byFile.get(f.file).push(f); }
  const told = new Set();
  for (const [file, rows] of byFile) {
    console.log(file);
    for (const f of rows) {
      const key = `${f.gate}|${f.fix}`;
      const quiet = ['WAIVED', 'ANSWERED', 'DISMISSED'].includes(f.grade) || told.has(key) || !f.fix;
      told.add(key);
      console.log(`  ${f.grade} ${f.gate} :${f.line} ${f.evidence}${quiet ? '' : ` | fix: ${f.fix}`}`);
    }
  }
  const tally = [`${fails} FAIL`, `${reflex} REFLEX`, `${summary.warns} WARN`];
  for (const [k, label] of [['advice', 'ADVICE'], ['waived', 'WAIVED'], ['rejected', 'REJECTED'], ['answered', 'ANSWERED'], ['dismissed', 'DISMISSED'], ['notes', 'NOTE']]) if (summary[k]) tally.push(`${summary[k]} ${label}`);
  console.log(`lint: ${findings.length ? '' : 'clean. '}${tally.join(', ')} across ${sum.files ?? '?'} file(s).`);
  console.log(off.size || advise.size
    ? `gates off: ${[...off].join(' ') || 'none'}${droppedTotal ? ` (${droppedTotal} finding${droppedTotal > 1 ? 's' : ''} dropped: ${Object.entries(dropped).map(([g, n]) => `${g} x${n}`).join(', ')})` : ''} · advice only: ${[...advise].join(' ') || 'none'} · --hallmark restores them`
    : 'every gate on at its upstream tier (--hallmark)');
  if (sum.render && sum.render !== 'off' && sum.render !== 'ran') console.log(`render tier ${sum.render}`);
  if (sum.kept) console.log(sum.kept);
  if (sum.before) console.log(sum.before);
}
process.exit(exitCode);
