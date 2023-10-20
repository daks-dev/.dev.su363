import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm preview',
    port: 3000
  },
  testDir: '.',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
