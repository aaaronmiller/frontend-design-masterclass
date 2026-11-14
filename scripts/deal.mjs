#!/usr/bin/env node
/* deal.mjs: deal three far-apart themes from the vendored Hallmark catalog
   (vendor/hallmark/references/themes) for one brief. The fourth direction is the one you
   derive from the subject yourself. Node 18+, no dependencies. Method: references/direction.md. */
import { readFileSync } from 'node:fs';
import { createHash, randomBytes } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const THEMES = join(HERE, '..', 'vendor', 'hallmark', 'references', 'themes');

function usage() {
  console.error(`usage: node deal.mjs "<the brief in a sentence>" [--avoid <slug,slug>] [--seed <hex>] [--json]
       node deal.mjs --list

  deals three themes that differ in paper, display class and genre:
    fit       the theme whose keywords match the brief best
    contrast  another paper band and another genre, still chosen with the brief in view
    wildcard  far from both on at least two axes, chosen without regard to fit
  --avoid   skip themes already used this session, so consecutive pages do not share a material
  --seed    repeat a deal; without it every run deals fresh`);
}

const argv = process.argv.slice(2);
const flag = (k) => { const i = argv.indexOf(`--${k}`); return i >= 0 ? argv[i + 1] : null; };
const has = (k) => argv.includes(`--${k}`);
if (has('help') || argv.includes('-h')) { usage(); process.exit(0); }

let themes;
try { themes = JSON.parse(readFileSync(join(THEMES, 'index.json'), 'utf8')).themes; } catch (e) { console.error(`deal: cannot read the theme index (${e.message})`); process.exit(2); }
const axes = (t) => `${t.paper.band} / ${t.display.class} / ${t.accent.band}`;

if (has('list')) {
  for (const t of themes) console.log(`${t.slug.padEnd(12)} ${t.genre.padEnd(15)} ${t.posture.padEnd(13)} ${axes(t).padEnd(46)} ${t.material}`);
  process.exit(0);
}

const VALUED = new Set(['--avoid', '--seed']);
const words = [];
for (let i = 0; i < argv.length; i++) { const a = argv[i]; if (a.startsWith('--')) { if (VALUED.has(a)) i++; continue; } words.push(a); }
const brief = words.join(' ').trim();
if (!brief) { usage(); process.exit(2); }

const avoid = new Set(String(flag('avoid') || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean));
const seed = flag('seed') || randomBytes(4).toString('hex');
let state = createHash('sha256').update(`${seed}·${brief.toLowerCase()}`).digest();
let at = 0;
const rand = () => { if (at > state.length - 4) { state = createHash('sha256').update(state).digest(); at = 0; } const v = state.readUInt32BE(at); at += 4; return v / 0x100000000; };
const pick = (arr) => arr[Math.floor(rand() * arr.length)];

const stem = (w) => { let x = w.replace(/(?:ing|ed)$/, ''); if (x.length < 3) x = w; return x.endsWith('ss') ? x : x.replace(/s$/, ''); };
const tokens = (s) => String(s).toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((w) => w.length > 2).map(stem);
const briefWords = new Set(tokens(brief));
const spread = new Map();
for (const t of themes) for (const k of new Set(t.keywords.map((x) => x.toLowerCase()))) spread.set(k, (spread.get(k) || 0) + 1);

const pool = themes.filter((t) => !avoid.has(t.slug)).map((t) => {
  let fit = 0;
  const hits = [];
  for (const k of t.keywords) {
    const kw = tokens(k);
    if (kw.length && kw.every((w) => briefWords.has(w))) { const d = spread.get(k.toLowerCase()); fit += d <= 2 ? 3 : d <= 4 ? 2 : 1; hits.push(k); }
  }
  return { t, fit, hits };
});
if (pool.length < 3) { console.error('deal: fewer than three themes left after --avoid'); process.exit(2); }

const distance = (a, b) => ['paper', 'display', 'accent'].filter((k) => (k === 'display' ? a.t.display.class !== b.t.display.class : a.t[k].band !== b.t[k].band)).length + (a.t.genre !== b.t.genre ? 1 : 0);
const topBy = (arr, n) => arr.map((s) => ({ s, r: rand() })).sort((a, b) => b.s.fit - a.s.fit || a.r - b.r).slice(0, n).map((x) => x.s);

const best = Math.max(...pool.map((s) => s.fit));
const first = pick(best > 0 ? pool.filter((s) => s.fit >= best - 1 && s.fit > 0) : pool);
let rest = pool.filter((s) => s !== first);
const apart = rest.filter((s) => s.t.paper.band !== first.t.paper.band && s.t.genre !== first.t.genre);
const second = pick(topBy(apart.length ? apart : rest, 6));
rest = rest.filter((s) => s !== second);
const far = rest.filter((s) => distance(s, first) >= 2 && distance(s, second) >= 2 && s.t.display.class !== first.t.display.class && s.t.display.class !== second.t.display.class);
const third = pick(far.length ? far : rest);

const hand = [['fit', first], ['contrast', second], ['wildcard', third]].map(([role, s]) => ({
  role, name: s.t.name, slug: s.t.slug, genre: s.t.genre, posture: s.t.posture, axes: axes(s.t), material: s.t.material,
  matched: s.hits, file: join(THEMES, `${s.t.slug}.md`),
}));

if (has('json')) { console.log(JSON.stringify({ seed, brief, deal: hand }, null, 2)); process.exit(0); }
console.log(`deal ${seed} for "${brief}" (repeat with --seed ${seed}; skip used themes with --avoid ${hand.map((h) => h.slug).join(',')})`);
hand.forEach((h, i) => {
  console.log(`${i + 1}. ${h.role.padEnd(9)} ${h.name} (${h.slug}) · ${h.genre} · ${h.posture} · ${h.axes}`);
  console.log(`             ${h.material}`);
  if (h.matched.length) console.log(`             matched: ${h.matched.slice(0, 5).join(', ')}`);
  console.log(`             read: ${h.file}`);
});
console.log('4. custom    yours: one direction drawn from the subject alone, sharing no face and no palette family with the three above');
console.log('next: sketch each in five lines, score all four against the subject, pick one, and say in a line why the others lost (references/direction.md)');
