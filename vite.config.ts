import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools, yaml } from '@daks.dev/svelte.sdk/vite';
import type { UserConfig } from 'vite';

export default {
  logLevel: 'info', // error
  plugins: [imagetools(), yaml(), sveltekit()],
  ssr: {
    noExternal: ['@daks.dev/svelte.sdk']
  },
  optimizeDeps: {
    exclude: ['@daks.dev/svelte.sdk']
  },
  // server: { fs: { strict: false } },
  // build: { target: 'esnext' },
  define: {
    'process.env': process.env
  },
  test: {
    // globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
} satisfies UserConfig;
