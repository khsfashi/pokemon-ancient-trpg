import { readFile, writeFile } from 'node:fs/promises';

const configuredBasePath = process.argv[2];
if (configuredBasePath === undefined) {
  throw new Error('usage: node tools/prepare-pages-manifest.mjs /repository-name/');
}

const basePath = configuredBasePath.endsWith('/') ? configuredBasePath : `${configuredBasePath}/`;
if (!basePath.startsWith('/')) {
  throw new Error(`base path must start with '/': ${configuredBasePath}`);
}

const manifestPath = 'dist/manifest.webmanifest';
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
manifest.id = basePath;
manifest.start_url = basePath;
manifest.scope = basePath;
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

console.log(`pages manifest prepared: base=${basePath}`);
