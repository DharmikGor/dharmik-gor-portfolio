// Generates public/sitemap.xml before each build.
// Project URLs are read from src/data/projects.ts, so new case studies are included automatically.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://dharmikgor.netlify.app';

const projectsSource = readFileSync(join(root, 'src/data/projects.ts'), 'utf8');
const projectIds = [...projectsSource.matchAll(/^\s{4}id:\s*'([a-z0-9-]+)'/gm)].map((m) => m[1]);

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/work', priority: '0.9' },
  { path: '/services', priority: '0.8' },
  { path: '/about', priority: '0.7' },
  { path: '/contact', priority: '0.7' },
  ...projectIds.map((id) => ({ path: `/work/${id}`, priority: '0.8' })),
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml: ${pages.length} URLs`);
