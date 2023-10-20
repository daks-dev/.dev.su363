// import { DEV } from 'esm-env';
import type { LayoutLoad } from './$types';

// export const csr = dev;
export const prerender = true;

export const load = (({ url }) => ({
  refresh: url.pathname
})) satisfies LayoutLoad;
