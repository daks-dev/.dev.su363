<script lang="ts">
  import { YandexMetrikaHit, YandexSearchForm, YandexSearchSerp } from '@daks.dev/svelte.sdk';

  const robots = 'noindex, follow';
  const title = 'СУ 363 • Поиск';
  const description = 'Поиск на сайте СУ 363';
  const canonical = '';
</script>

<YandexMetrikaHit
  {robots}
  {title}
  {description}
  {canonical} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Результаты поиска</h1>
  </header>

  <YandexSearchForm
    class="content mb-8 px-8 xs:pr-[44px] sm:pr-[52px] md:pr-[55px] lg:pr-[142px]"
    reload
    reverse />

  <YandexSearchSerp class="content pr-8 lg:pr-4" />
</main>
