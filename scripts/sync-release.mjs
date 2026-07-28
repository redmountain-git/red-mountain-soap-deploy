import {
  cp,
  mkdir,
  readdir,
  rm,
  stat,
} from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const buildRoot = resolve(repoRoot, 'dist');
const releaseRoot = resolve(repoRoot, 'src', 'web');
const calculatorRoot = resolve(releaseRoot, 'calculator');

if (releaseRoot !== resolve(repoRoot, 'src', 'web')) {
  throw new Error(`Refusing to update unexpected release path: ${releaseRoot}`);
}

if (!(await stat(buildRoot)).isDirectory()) {
  throw new Error(`Build output is missing: ${buildRoot}`);
}

if (!(await stat(calculatorRoot)).isDirectory()) {
  throw new Error(
    `Calculator artifact is missing; refusing to replace release output: ${calculatorRoot}`,
  );
}

await mkdir(releaseRoot, { recursive: true });

for (const entry of await readdir(releaseRoot, { withFileTypes: true })) {
  if (entry.name === 'calculator') {
    continue;
  }

  await rm(resolve(releaseRoot, entry.name), {
    recursive: entry.isDirectory(),
    force: true,
  });
}

await cp(buildRoot, releaseRoot, {
  recursive: true,
  force: true,
});

console.log(`Updated static release at ${releaseRoot}; preserved /calculator/.`);
