import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const DIST = 'dist';
const REQUIRED = ['index.html', 'manifest.webmanifest', 'sw.js'];
const EXPECTED_MANIFEST_START_URL = process.env.EXPECTED_MANIFEST_START_URL ?? '/';
const FORBIDDEN_BINARY_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.mp3', '.ogg', '.wav', '.m4a', '.flac',
]);
const P83_AUDITED_GOLDEN_RASTER = Object.freeze({
  name: 'illustrations/windbreak-orchard.png',
  width: 384,
  height: 276,
  maxEncodedBytes: 64 * 1024,
});
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

async function validateAuditedGoldenRaster(path, name, encodedBytes) {
  if (name !== P83_AUDITED_GOLDEN_RASTER.name) return false;
  if (encodedBytes > P83_AUDITED_GOLDEN_RASTER.maxEncodedBytes) {
    throw new Error(`P8.3 golden raster exceeds audited encoded cap: ${name} / ${encodedBytes}`);
  }

  const bytes = await readFile(path);
  const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (bytes.length < 24 || !bytes.subarray(0, 8).equals(pngSignature) || bytes.toString('ascii', 12, 16) !== 'IHDR') {
    throw new Error(`P8.3 golden raster must be a valid PNG with IHDR first: ${name}`);
  }

  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width !== P83_AUDITED_GOLDEN_RASTER.width || height !== P83_AUDITED_GOLDEN_RASTER.height) {
    throw new Error(
      `P8.3 golden raster dimensions drifted: ${name} / ${width}x${height}; expected ${P83_AUDITED_GOLDEN_RASTER.width}x${P83_AUDITED_GOLDEN_RASTER.height}`,
    );
  }
  return true;
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
let auditedGoldenRasterCount = 0;
for (const path of files) {
  const info = await stat(path);
  totalBytes += info.size;
  const name = relative(DIST, path).replaceAll('\\', '/');
  const extension = extname(name).toLowerCase();

  if (FORBIDDEN_BINARY_EXTENSIONS.has(extension)) {
    if (await validateAuditedGoldenRaster(path, name, info.size)) {
      auditedGoldenRasterCount += 1;
    } else {
      throw new Error(`Public dist must contain no unaudited Pokémon/source binary media: ${name}`);
    }
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

if (auditedGoldenRasterCount !== 1) {
  throw new Error(`Expected exactly one audited P8.3 golden raster in dist, found ${auditedGoldenRasterCount}`);
}

if (totalBytes > 3 * 1024 * 1024) {
  throw new Error(`Batch 02 static shell exceeds inherited 3 MiB required-initial budget: ${totalBytes}`);
}

console.log(
  `dist validation PASS: ${files.length} files / ${totalBytes} bytes / backend=none / unaudited_binary_media=0 / p83_golden_raster=${auditedGoldenRasterCount} / start_url=${EXPECTED_MANIFEST_START_URL}`,
);
