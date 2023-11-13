<script lang="ts">
  import { page } from '$app/stores';

  const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
  <title>СУ 363 • {$page.status}</title>
  <meta
    name="description"
    content="Ошибка в работе приложения" />
</svelte:head>

<main class="content items-center">
  {#if online}
    <h1
      class="
        w-full
        font-mono text-[35vh] font-bold text-slate-500 dark:text-slate-500">
      {$page.status}
    </h1>
    <p
      class="
        w-full rounded bg-rose-600
        px-12 py-8 text-xl text-gray-200">
      {#if $page.error?.message}
        {$page.error.message}
      {:else}
        Обнаружена ошибка {$page.status}
      {/if}
    </p>
    <!--
    {#if $page.status >= 500}
      {#if dev && $page.error?.stack}
        <pre>{$page.error.stack}</pre>
      {:else}
        <p>Please try reloading the page.</p>
      {/if}
    {/if}
    -->
  {:else}
    <h1 class="mt-auto w-full text-4xl leading-loose">
      Похоже отсутствует подключение к интернету
    </h1>
    <p class="mb-auto w-full">Перегрузите страницу при восстановлении соединения.</p>
  {/if}
</main>
