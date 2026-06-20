#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const pages = [
  'https://cutlerlandscapeservices.com/',
  'https://cutlerlandscapeservices.com/commercial-lawn-care-services/',
  'https://cutlerlandscapeservices.com/residential-lawn-care-services/',
  'https://cutlerlandscapeservices.com/contact-us/',
];

const outDir = path.join(process.cwd(), 'public/images/cutler-source');
const headers = { 'user-agent': 'Mozilla/5.0 CutlerLawnsAssetTool/1.0' };

function cleanUrl(raw, base) {
  if (!raw) return null;
  let value = raw.replace(/&amp;/g, '&').replace(/^['"]|['"]$/g, '').trim();
  if (!value || value.startsWith('data:')) return null;
  try {
    const url = new URL(value, base);
    url.hash = '';
    url.search = '';
    return url.toString();
  } catch {
    return null;
  }
}

function attrs(tag) {
  const found = {};
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/g)) {
    found[match[1].toLowerCase()] = match[2].replace(/^['"]|['"]$/g, '').replace(/&amp;/g, '&');
  }
  return found;
}

function slug(value) {
  return String(value || 'image').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || 'image';
}

function category(text) {
  text = text.toLowerCase();
  if (text.includes('logo')) return 'logo';
  if (text.includes('parking')) return 'parking-lot-cleaning';
  if (text.includes('snow') || text.includes('ice')) return 'snow-ice-removal';
  if (text.includes('gutter')) return 'gutter-cleaning';
  if (text.includes('pressure') || text.includes('power')) return 'pressure-washing';
  if (text.includes('sprinkler') || text.includes('irrigation')) return 'sprinkler-irrigation';
  if (text.includes('installation') || text.includes('plant') || text.includes('flower')) return 'landscape-installation';
  if (text.includes('maintenance') || text.includes('landscape')) return 'landscape-maintenance';
  if (text.includes('mow') || text.includes('lawn')) return 'lawn-care';
  if (text.includes('cleanup') || text.includes('leaf')) return 'seasonal-cleanup';
  return 'uncategorized';
}

function extFor(url, type) {
  const ext = path.extname(new URL(url).pathname).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) return ext;
  if (type.includes('png')) return '.png';
  if (type.includes('webp')) return '.webp';
  if (type.includes('gif')) return '.gif';
  if (type.includes('svg')) return '.svg';
  return '.jpg';
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const candidates = new Map();

  for (const page of pages) {
    console.log('Fetching', page);
    const res = await fetch(page, { headers });
    if (!res.ok) {
      console.log('  page failed', res.status);
      continue;
    }
    const html = await res.text();

    for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
      const a = attrs(match[0]);
      const sources = [a.src, a['data-src'], a['data-lazy-src'], a['data-original']];
      for (const srcset of [a.srcset, a['data-srcset'], a['data-lazy-srcset']]) {
        if (srcset) sources.push(...srcset.split(',').map(s => s.trim().split(/\s+/)[0]));
      }
      for (const source of sources) {
        const url = cleanUrl(source, page);
        if (!url) continue;
        const host = new URL(url).hostname.replace(/^www\./, '');
        const ext = path.extname(new URL(url).pathname).toLowerCase();
        if (host !== 'cutlerlandscapeservices.com') continue;
        if (!['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) continue;
        if (/favicon|spacer|pixel|blank|loader|spinner|1x1/i.test(url)) continue;
        if (!candidates.has(url)) candidates.set(url, { url, page, alt: a.alt || '', title: a.title || '' });
      }
    }
  }

  const manifest = [];
  const hashes = new Set();

  for (const item of candidates.values()) {
    console.log('Downloading', item.url);
    const res = await fetch(item.url, { headers });
    if (!res.ok) {
      console.log('  failed', res.status);
      continue;
    }
    const type = res.headers.get('content-type') || '';
    if (!type.startsWith('image/') && !type.includes('svg')) {
      console.log('  skipped non-image', type);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const hash = createHash('sha256').update(buffer).digest('hex');
    if (hashes.has(hash)) {
      console.log('  duplicate');
      continue;
    }
    hashes.add(hash);

    const cat = category(`${item.alt} ${item.title} ${item.url} ${item.page}`);
    const ext = extFor(item.url, type);
    const base = slug(`${cat}-${item.alt || path.basename(new URL(item.url).pathname, ext)}`);
    const filename = `${base}-${hash.slice(0, 8)}${ext}`;
    await writeFile(path.join(outDir, filename), buffer);
    manifest.push({ filename, localPath: `/images/cutler-source/${filename}`, originalUrl: item.url, sourcePage: item.page, alt: item.alt, title: item.title, category: cat, contentType: type, bytes: buffer.length, sha256: hash });
    console.log('  saved', filename);
  }

  await writeFile(path.join(outDir, 'manifest.json'), JSON.stringify({ harvestedAt: new Date().toISOString(), sourcePages: pages, assets: manifest }, null, 2));
  console.log(`Done. Saved ${manifest.length} images to public/images/cutler-source`);
}

main().catch(err => { console.error(err); process.exit(1); });
