import { generateSW } from 'workbox-build';

const configuredBasePath = process.env.VITE_BASE_PATH ?? '/';
const basePath = configuredBasePath.endsWith('/') ? configuredBasePath : `${configuredBasePath}/`;
if (!basePath.startsWith('/')) {
  throw new Error(`VITE_BASE_PATH must start with '/': ${configuredBasePath}`);
}

const result = await generateSW({
  globDirectory: 'dist',
  globPatterns: ['**/*.{html,js,css,webmanifest,json,svg,woff2}'],
  globIgnores: ['**/*pokemon*', '**/pokemon/**'],
  swDest: 'dist/sw.js',
  cleanupOutdatedCaches: true,
  clientsClaim: false,
  skipWaiting: false,
  navigateFallback: `${basePath}index.html`,
  maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
  mode: 'production',
});

if (result.warnings.length > 0) {
  throw new Error(`Workbox warnings:\n${result.warnings.join('\n')}`);
}
if (result.count === 0) {
  throw new Error('Workbox precache is empty');
}

console.log(`workbox precache: ${result.count} files / ${result.size} bytes / base=${basePath}`);
