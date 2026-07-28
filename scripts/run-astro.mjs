import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const command = process.argv[2];
const args = process.argv.slice(3);
const allowedCommands = new Set(['build', 'check', 'dev']);

if (!allowedCommands.has(command)) {
  throw new Error(`Unsupported Astro command: ${command ?? '(missing)'}`);
}

const astroCli = fileURLToPath(
  new URL('../node_modules/astro/bin/astro.mjs', import.meta.url),
);

const child = spawn(process.execPath, [astroCli, command, ...args], {
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: '1',
  },
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exitCode = code ?? 1;
});
