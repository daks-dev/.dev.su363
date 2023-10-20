<script lang="ts">
  import { Head, IconifyAdmin } from '@daks.dev/svelte.sdk';

  import type { PageData } from './$types.d.ts';
  export let data: PageData;

  const robots = 'noindex, follow';
  const title = 'СУ 363 • Admin [ Iconify ]';
</script>

<Head
  {robots}
  {title} />

<main>
  <header class="content">
    <h1 class="title">Iconify</h1>
  </header>

  <IconifyAdmin {...data} />
</main>
