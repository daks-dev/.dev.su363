import { fs } from '@daks.dev/svelte.sdk/server';
import type { PageServerLoad } from './$types';

export const load = (async () => ({
  version: await fs.readFile('./package.json').then((val) => val && JSON.parse(val).version)
})) satisfies PageServerLoad;
