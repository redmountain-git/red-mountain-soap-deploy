import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const releaseRoot = resolve(repoRoot, 'src', 'web');
const requiredFiles = [
  'index.html',
  'shop/index.html',
  'about/index.html',
  'wholesale/index.html',
  'where-to-buy/index.html',
  'contact/index.html',
  'policies/index.html',
  'soap/slot-canyon/index.html',
  'soap/cedar-mesa/index.html',
  'soap/granola-goat-milk/index.html',
  'soap/unscented-goat-milk/index.html',
  'soap/valley-meadow/index.html',
  'soap/alpine-summit/index.html',
  'calculator/index.html',
  'robots.txt',
  'sitemap.xml',
  '.htaccess',
];

const failures = [];

for (const relativePath of requiredFiles) {
  const absolutePath = resolve(releaseRoot, relativePath);
  try {
    if (!(await stat(absolutePath)).isFile()) {
      failures.push(`${relativePath} is not a file`);
    }
  } catch {
    failures.push(`${relativePath} is missing`);
  }
}

async function collectHtml(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === 'calculator') {
      continue;
    }

    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectHtml(path)));
    } else if (entry.name.endsWith('.html')) {
      files.push(path);
    }
  }
  return files;
}

for (const htmlPath of await collectHtml(releaseRoot)) {
  const html = await readFile(htmlPath, 'utf8');
  const relativePath = htmlPath.slice(releaseRoot.length + 1);

  if (html.includes('390 W Redstone')) {
    failures.push(`${relativePath} exposes the private operations address`);
  }

  if (html.includes('Red Mountain Soap Company')) {
    failures.push(`${relativePath} contains the unapproved public brand name`);
  }

  if (!html.includes('Red Mountain Soap LC')) {
    failures.push(`${relativePath} is missing the legal footer identity`);
  }
}

const calculatorHtml = await readFile(
  resolve(releaseRoot, 'calculator', 'index.html'),
  'utf8',
);
if (!calculatorHtml.includes('Calculator safety note')) {
  failures.push('calculator/index.html is missing its safety note');
}

if (failures.length > 0) {
  console.error('Release verification failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exitCode = 1;
} else {
  console.log('Release verification passed.');
}
