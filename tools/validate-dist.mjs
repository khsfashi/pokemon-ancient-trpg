import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const DIST = 'dist';
const REQUIRED = ['index.html', 'manifest.webmanifest', 'sw.js'];
const EXPECTED_MANIFEST_START_URL = process.env.EXPECTED_MANIFEST_START_URL ?? '/';
const FORBIDDEN_BINARY_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.mp3', '.ogg', '.wav', '.m4a', '.flac',
]);
const FORBIDDEN_RUNTIME_ORIGINS = [
  'pokeapi.co',
  'raw.githubusercontent.com/pokesprite',
  'raw.githubusercontent.com/pagefaultgames/pokerogue-assets',
];

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      output.push(...(await walk(path)));
    } else {
      output.push(path);
    }
  }
  return output;
}

for (const required of REQUIRED) {
  await stat(join(DIST, required));
}

const manifest = JSON.parse(await readFile(join(DIST, 'manifest.webmanifest'), 'utf8'));
if (manifest.display !== 'standalone' || manifest.start_url !== EXPECTED_MANIFEST_START_URL) {
  throw new Error(
    `Invalid Batch 02 web manifest: expected start_url=${EXPECTED_MANIFEST_START_URL}, got ${String(manifest.start_url)}`,
  );
}

const files = await walk(DIST);
let totalBytes = 0;
for (const path of files) {
  const info = await stat(path);
  totalBytes += info.size;
  const name = relative(DIST, path).replaceAll('\\', '/');
  const extension = extname(name).toLowerCase();

  if (FORBIDDEN_BINARY_EXTENSIONS.has(extension)) {
    throw new Error(`Batch 02 public dist must contain no Pokémon/source binary media: ${name}`);
  }

  if (['.html', '.js', '.css', '.json', '.webmanifest', '.svg', '.txt'].includes(extension)) {
    const text = await readFile(path, 'utf8');
    for (const origin of FORBIDDEN_RUNTIME_ORIGINS) {
      if (text.includes(origin)) {
        throw new Error(`Runtime remote Pokémon source/API reference found in ${name}: ${origin}`);
      }
    }
  }
}

if (totalBytes > 3 * 1024 * 1024) {
  throw new Error(`Batch 02 static shell exceeds inherited 3 MiB required-initial budget: ${totalBytes}`);
}

console.log(
  `dist validation PASS: ${files.length} files / ${totalBytes} bytes / backend=none / pokemon_media=0 / start_url=${EXPECTED_MANIFEST_START_URL}`,
);
