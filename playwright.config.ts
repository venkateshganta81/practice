import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e-spec.ts',
  forbidOnly: Boolean(process.env['CI']),
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4201',
    browserName: 'chromium',
    launchOptions: {
      executablePath: process.env['PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH'],
    },
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm start -- --host 127.0.0.1 --port 4201',
    url: 'http://127.0.0.1:4201',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
