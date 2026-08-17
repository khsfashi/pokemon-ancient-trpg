import { generateSW } from 'workbox-build';

const result = await generateSW({
  globDirectory: 'dist',
  globPatterns: ['**/*.{html,js,css,webmanifest,json,svg,woff2}'],
  globIgnores: ['**/*pokemon*', '**/pokemon/**'],
  swDest: 'dist/sw.js',
  cleanupOutdatedCaches: true,
  clientsClaim: false,
  skipWaiting: false,
  navigateFallback: '/index.html',
  maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
  mode: 'production',
});

if (result.warnings.length > 0) {
  throw new Error(`Workbox warnings:\n${result.warnings.join('\n')}`);
}
if (result.count === 0) {
  throw new Error('Workbox precache is empty');
}

console.log(`workbox precache: ${result.count} files / ${result.size} bytes`);
