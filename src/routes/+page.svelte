<script lang="ts">
  import { YandexMetrikaHit, LightboxKit, Icon } from '@daks.dev/svelte.sdk';

  import { sources, squares as thumbnails } from '$lib/assets/images/presentation';

  const canonical = process.env.APP_CANONICAL ? new URL(process.env.APP_CANONICAL).origin : '';

  import microdata from '$lib/configs/microdata';
  const { itemtype, name, logo, email, telephone, address } = microdata.organization;

  const button = `
    py-4 px-5 rounded-lg
    text-cyan-600 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200
    dark:text-slate-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
    shadow-md shadow-slate-500/20
  `;

  const title = 'СУ 363 • Строительное Управление № 363 Москва';
  const description =
    'Строительство и ремонт, строительный и технический надзор в Москве. Строительное Управление № 363';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <div
    class="
      wrapper flex
      cursor-default flex-wrap items-start py-12"
    itemscope
    {itemtype}>
    <!-- style:--text-shadow-color="#222" -->
    <header
      class="mb-8 flex grow flex-col"
      style:--text-shadow-val="5px">
      <h1
        class="
          text-shadow
          mb-8 text-7xl
          font-extrabold sm:text-9xl"
        itemprop="name"
        style:--text-shadow-color="#222">
        <span class="text-rose-700">СУ</span>
        <span class="text-gray-600">363</span>
      </h1>
      <h2
        class="
          text-shadow
          ml-2 text-xl sm:text-2xl md:text-3xl 2xl:text-4xl">
        Строительное Управление №&nbsp;363 Москва
      </h2>
      <meta
        itemprop="name"
        content={name} />
      <meta
        itemprop="email"
        content={email} />
      <meta
        itemprop="telephone"
        content={telephone} />
      <link
        itemprop="logo"
        href={`${canonical}${logo}`} />
    </header>
    <div
      class="grow px-2 lg:max-w-xs lg:pt-4 xl:max-w-sm"
      itemprop="address"
      itemscope
      itemtype={address.itemtype}>
      <div
        class="
          xs:hidden
          flex w-full flex-row items-center justify-around">
        <a
          class={button}
          href="tel://{telephone.replace(/[\s-()]/g, '')}">
          <Icon
            class="h-16 w-16"
            icon="ic:round-phone-in-talk" />
        </a>
        <a
          class={button}
          href="mailto:{email}">
          <Icon
            icon="ic:round-mail-outline"
            class="h-16 w-16" />
        </a>
      </div>
      <div
        class="
          xs:flex hidden flex-col items-center justify-center gap-y-4 text-slate-600
          dark:text-slate-400 lg:gap-y-5">
        <a
          class="
            text-2xl
            font-semibold transition-all duration-200 ease-in-out
            hover:text-sky-500
            sm:text-4xl lg:text-3xl xl:text-4xl"
          href="tel://{telephone.replace(/[\s-()]/g, '')}">
          {telephone}
        </a>
        <a
          rel="nofollow noreferrer"
          class="
            text-center transition-all
            duration-200 ease-in-out hover:text-sky-500 sm:text-lg
            md:text-xl
            lg:text-start lg:text-lg xl:text-xl"
          href={address.url}
          target="_blank"
          itemprop="url">
          <span itemprop="streetAddress">{@html address.streetAddress}</span>
        </a>
      </div>
      <meta
        itemprop="postalCode"
        content={address.postalCode} />
      <meta
        itemprop="addressRegion"
        content={address.addressRegion} />
      <meta
        itemprop="addressLocality"
        content={address.addressLocality} />
    </div>
  </div>

  <!-- justify-around gap-8 lg:gap-12 2xl:gap-16 -->
  <LightboxKit
    class="
      wrapper
      3xl:grid-cols-4 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    {sources}
    {thumbnails}
    grid
    sign
    adaptive
    centered
    rounded
    shadow
    scale
    grayscale />
</main>
