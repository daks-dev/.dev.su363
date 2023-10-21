import common from '@daks.dev/svelte.sdk/tailwind/presets/common';
import { fontSans } from '@daks.dev/svelte.sdk/tailwind/font-family';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,svelte}', ...common.content],

  presets: [common],

  theme: {
    extend: {
      fontFamily: fontSans()
    }
  }
} satisfies Config;
