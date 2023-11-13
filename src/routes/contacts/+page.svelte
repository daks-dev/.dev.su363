<script lang="ts">
  import { Contacts, YandexMetrikaHit, YandexMap } from '@daks.dev/svelte.sdk';

  import microdata from '$lib/configs/microdata';

  const data = {
    locations: [
      {
        geometry: [55.646035, 37.666438],
        properties: {
          iconContent: '<strong class="tracking-wider">СУ 363</strong>',
          balloonContentHeader: 'Строительное Управление № 363',
          balloonContentBody:
            '<img class=mx-auto src=/assets/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.646035, 37.666438],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    },
    options: {
      autoFitToViewport: 'always'
    }
  };

  const title = 'СУ 363 • Контакты';
  const description = 'Контакты Строительного Управления № 363';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="grow gap-8"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <Contacts
    class="content"
    {microdata} />

  <div
    class="
      content flex h-[40vmax]
      grow xs:h-[35vmax] sm:h-[30vmax] md:h-[25vmax] lg:h-auto">
    <YandexMap
      class="
        min-h-full w-full overflow-hidden
        border-4 border-slate-400 bg-gray-200 bg-waiting bg-25% bg-center bg-no-repeat dark:bg-slate-200 sm:bg-20%
        md:bg-10% xl:bg-5%"
      {data} />
  </div>
</main>
