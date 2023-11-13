import type { Config } from 'tailwindcss';

import common from '@daks.dev/svelte.sdk/tailwind/presets/common';
import { fontSans } from '@daks.dev/svelte.sdk/tailwind/font-family';

import screens from '@daks.dev/svelte.sdk/tailwind/screens';
const breakpoint = 704; // process.env.PUBLIC_BREAKPOINT ?? 1024;

export default {
  content: ['./src/**/*.{html,js,ts,svelte}', ...common.content],

  presets: [common],

  theme: {
    screens: screens(breakpoint),
    extend: {
      fontFamily: fontSans()
    }
  }
} satisfies Config;
