import common from '@daks.dev/svelte.sdk/tailwind/presets/common';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,svelte}', ...common.content],

  presets: [common]

  // theme: { extend: {} }
} satisfies Config;
