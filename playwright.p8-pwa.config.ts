import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: 'p8-pwa-pending.spec.ts',
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
});
