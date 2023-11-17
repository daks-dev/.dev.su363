<script lang="ts">
  import { DEV } from 'esm-env';
  import { Head, Icon, SvelteKitCounter } from '@daks.dev/svelte.sdk';

  import type { PageData } from './$types';
  export let data: PageData;

  let waiting = false;
  // TODO:
  waiting = waiting;

  const robots = 'noindex, follow';
  const title = 'СУ 363 • Admin';
</script>

<Head
  {robots}
  {title} />

<main>
  <header class="mb-4 flex items-center gap-8 wrapper-lg">
    {#if DEV}
      <h1 class="title grow">Admin</h1>
    {:else}
      <div class=" grow">
        <h1 class="title mb-4">SvelteKit</h1>
        <h4 class="font-semibold text-gray-400">tailwindcss</h4>
      </div>
    {/if}
    <a
      rel="noreferrer nofollow"
      class="
        hover:drop-shadow-deep
        relative w-24 drop-shadow-md transition duration-300
        ease-in-out hover:scale-105 sm:w-32"
      href="https://github.com/daks-dev/.dev.su363"
      target="_blank">
      <img
        class="h-auto w-full"
        src="/assets/icons/github.svg"
        alt="GitHUB"
        decoding="async"
        loading="lazy" />
      <b
        class="
          absolute left-1/2 top-4 -translate-x-1/2 pr-0.5
          text-xs text-slate-400">
        {data.version}
      </b>
    </a>
  </header>

  {#if DEV}
    <div class="flex wrapper-lg">
      <div class="flex flex-col gap-8 border-r-2 pr-8 text-2xl">
        <a
          class="button max-w-full rounded border"
          class:disabled={waiting}
          href="/admin/iconify">
          Iconify
        </a>
      </div>
      <div class="flex grow gap-8">
        {#if waiting}
          <Icon
            icon="svg-spinners:180-ring-with-bg"
            class="mx-auto h-20 w-20 self-center" />
        {:else}
          <Icon
            icon="ic:round-close"
            class="mx-auto h-20 w-20 self-center" />
        {/if}
      </div>
    </div>
  {:else}
    <SvelteKitCounter class="items-center wrapper-lg" />
  {/if}
</main>
