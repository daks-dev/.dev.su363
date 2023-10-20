import { DEV } from 'esm-env';
import { iconkit, hooks } from '@daks.dev/svelte.sdk/server';
import type { Handle } from '@sveltejs/kit';

DEV && iconkit();

const redirects: Record<string, string> = {
  // '': ''
};

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname in redirects) {
    return new Response(undefined, {
      status: 308,
      headers: {
        location: redirects[event.url.pathname]
      }
    });
  }
  return await hooks({ event, resolve });
};
