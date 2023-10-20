import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import 'dotenv/config';

const toStatic = process.env.ADAPTER === 'static';
const adapter = toStatic ? adapterStatic : adapterNode;
const options = {
  fallback: toStatic ? '200.html' : undefined,
  precompress: true
};

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  vitePlugin: {
    inspector: {
      holdMode: true
    }
  },

  kit: {
    alias: {
      $iconify: resolve(__dirname, './src/lib/assets/iconify')
    },

    adapter: adapter(options),

    files: {
      serviceWorker: 'node_modules/@daks.dev/svelte.sdk/dist/app/service-worker'
    }

    // inlineStyleThreshold: Infinity
  }
};

export default config;
