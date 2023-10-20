import { Nav, type NavSite } from '@daks.dev/svelte.sdk';

const config: NavSite = {
  navbar: {
    links: [
      {
        href: '/about',
        label: 'О!'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ]
  },
  footer: {
    copylink: {
      href: '/',
      label: 'СУ&nbsp;363'
    },
    links: [
      {
        href: '/privacy',
        label: 'Конфиденциальность'
      },
      {
        href: '/admin',
        label: 'ic:outline-settings'
      }
    ]
  }
};

export const map = [
  ...Nav.map(config.navbar.links),
  ...Nav.map(config.footer?.links ?? []),
  ...(config.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);

export default config;
