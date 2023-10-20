<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, CarouselKit } from '@daks.dev/svelte.sdk';

  import { screens as dataset } from '$lib/assets/images/presentation';
  dataset.forEach((val) => (delete val.subtitle, delete val.description));

  const show = (x: number): number =>
    (x < 640 && 1) || (x < 768 && 2) || (x < 1024 && 3) || (x < 1280 && 4) || 5;

  const title = 'СУ 363 • О предприятии';
  const description = 'О предприятии Строительное Управление № 363';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<svelte:body itemtype="https://schema.org/AboutPage" />

<main itemprop="mainContentOfPage">
  <header class="content xs:mb-12">
    <h1
      class="title"
      itemprop="name">
      О предприятии
    </h1>
  </header>

  <CarouselKit
    class="xs:block overflow-hidde container mb-8 hidden rounded-lg drop-shadow-md"
    custom={{
      inner: {
        caption: 'absolute right-2 top-2 left-2 text-xs text-white text-shadow text-center',
        progress: '!bottom-0'
      }
    }}
    {dataset}
    {show}
    ratio={16 / 9}
    duration={15000}
    controls="play"
    progress
    stream
    check />

  <div class="content readable">
    <h2 class="mb-4">Основные направления деятельности:</h2>

    <ul class="pl-5 -indent-4 leading-7 sm:pl-6 lg:pl-7">
      <li>Снос зданий и сооружений;</li>
      <li>Вырубка деревьев, кустарников и корчевка пней. Земляные работы;</li>
      <li>Устройство свайных оснований и фундаментов;</li>
      <li>Устройство гидроизоляции и утепления стен, фундаментов;</li>
      <li>Устройство монолитных железобетонных кострукций;</li>
      <li>Устройство кровли и молниезащиты;</li>
      <li>Каменная кладка, утройство перегородок;</li>
      <li>Изготовление и монтаж металлоконструкций;</li>
      <li>Установка конструкций витражей и окон;</li>
      <li>Установка внутренних и наружных дверных блоков, ворот;</li>
      <li>Монтаж вентилируемых фасадов и фасадов по системе "Теплый дом";</li>
      <li>Внутренняя отделка зданий;</li>
      <li class="">
        Монтаж внутренних инженерных коммуникаций: канализация, отопление, водоснабжение,
        вентиляция, кондиционирование, электромонтажные работы, слаботочные системы, системы
        пожарной безопасности, спринклерное пожаротушение;
      </li>
      <li>Вертикальный транспорт и подъемное оборудование;</li>
      <li>Поставка и монтаж оборудования и оснащения;</li>
      <li>Монтаж ИТП, ТП;</li>
      <li>Благоустройство и озеленение территории. Устройство дорог, парковок, проездов;</li>
      <li>Прокладка и перекладка наружных коммуникаций;</li>
      <li>Наружное освещение;</li>
      <li>Оснащение объектов технологическим оборудованием, мебелью.</li>
    </ul>
  </div>
</main>
