//@ts-nocheck
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
  const meta = JSON.parse(cookies.get('meta', { path: '/admin' }) ?? null);
  cookies.delete('meta', { path: '/admin' });
  return {
    meta,
    local: (await import('$iconify')).default,
    bundles: (await import('$iconify/bundles.json')).default
  };
}) satisfies PageServerLoad;
