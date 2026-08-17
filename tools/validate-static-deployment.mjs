import { access, readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const FORBIDDEN_BACKEND_ROOTS = [
  'api',
  'server',
  'serverless',
  'functions',
  '.vercel/output/functions',
];
const FORBIDDEN_SERVER_EXTENSIONS = new Set(['.php', '.py', '.rb']);

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') return false;
    throw error;
  }
}

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      output.push(...(await walk(path)));
      continue;
    }
    if (!entry.isFile()) {
      throw new Error(`Static deployment output contains a non-file entry: ${path}`);
    }
    output.push(path);
  }
  return output;
}

const vercel = JSON.parse(await readFile('vercel.json', 'utf8'));
if (vercel.framework !== 'vite') {
  throw new Error('vercel.json must use the Vite framework preset');
}
for (const forbiddenKey of ['functions', 'builds']) {
  if (Object.hasOwn(vercel, forbiddenKey)) {
    throw new Error(`vercel.json must not define ${forbiddenKey} for the static baseline`);
  }
}

for (const root of FORBIDDEN_BACKEND_ROOTS) {
  if (await exists(root)) {
    throw new Error(`Backend/serverless path is forbidden in the P7 static baseline: ${root}`);
  }
}

for (const required of ['index.html', 'manifest.webmanifest', 'sw.js']) {
  const info = await stat(join(DIST, required));
  if (!info.isFile()) throw new Error(`Required static output is not a file: ${required}`);
}

const files = await walk(DIST);
let totalBytes = 0;
for (const path of files) {
  const info = await stat(path);
  totalBytes += info.size;
  const name = relative(DIST, path).replaceAll('\\', '/');
  const extension = name.includes('.') ? `.${name.split('.').pop()?.toLowerCase()}` : '';
  if (FORBIDDEN_SERVER_EXTENSIONS.has(extension) || name.endsWith('.server.js') || name.endsWith('.server.mjs')) {
    throw new Error(`Server executable is forbidden in static dist: ${name}`);
  }
}

console.log(`static deployment validation PASS: framework=vite / files=${files.length} / bytes=${totalBytes} / serverless=0 / backend=0`);
