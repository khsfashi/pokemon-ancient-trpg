import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDir = path.resolve('src/generated/fonts');

const fonts = [
  {
    name: 'NeoDunggeunmo v1.601',
    url: 'https://raw.githubusercontent.com/neodgm/neodgm-webfont/e0a715695c457d3f8ccd071f88cd71b376a5a23e/neodgm/neodgm.woff2',
    sha256: '0c0ca9cd73f692a5da5d7fb39737902aa9ea312537237779972a9d81ef0a33bf',
    filename: 'neodgm.woff2',
  },
  {
    name: 'NeoDunggeunmo Pro v1.020',
    url: 'https://raw.githubusercontent.com/neodgm/neodgm-pro-webfont/1751c2981808869750c7df391c1d2b486e978f12/neodgm_pro/neodgm_pro.woff2',
    sha256: 'b6b28ef07a91a889587b3f2485ad77d3cd116456f8bfbc50a271cbe90b39535d',
    filename: 'neodgm_pro.woff2',
  },
];

function digest(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

async function verifiedExisting(file, expected) {
  try {
    const bytes = await readFile(file);
    return digest(bytes) === expected;
  } catch (error) {
    if (error?.code === 'ENOENT') return false;
    throw error;
  }
}

await mkdir(outputDir, { recursive: true });

for (const font of fonts) {
  const target = path.join(outputDir, font.filename);
  if (await verifiedExisting(target, font.sha256)) {
    console.log(`font ready: ${font.name} (${font.filename})`);
    continue;
  }

  const response = await fetch(font.url, {
    redirect: 'follow',
    headers: { 'user-agent': 'pokemon-ancient-trpg-build/1' },
  });
  if (!response.ok) {
    throw new Error(`font fetch failed for ${font.name}: ${response.status} ${response.statusText}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  const actual = digest(bytes);
  if (actual !== font.sha256) {
    throw new Error(`font digest mismatch for ${font.name}: expected ${font.sha256}, got ${actual}`);
  }

  await writeFile(target, bytes);
  console.log(`font fetched: ${font.name} / ${bytes.byteLength} bytes / sha256=${actual}`);
}
