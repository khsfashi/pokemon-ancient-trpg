import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: ['p8-exit.spec.ts', 'p8-localization.spec.ts'],
  fullyParallel: false,
  workers: 1,
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    viewport: { width: 390, height: 844 },
    serviceWorkers: 'allow',
  },
  projects: [
    { name: 'phone-chromium', use: { browserName: 'chromium' } },
    { name: 'phone-webkit', use: { browserName: 'webkit' } },
  ],
  webServer: {
    command: 'node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
  },
});
