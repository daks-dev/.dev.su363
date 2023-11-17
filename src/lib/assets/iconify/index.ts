import { DEV } from 'esm-env';
import { addCollection, type IconifyJSON } from '@iconify/svelte/offline';
import bundles from './bundles.json';

bundles.forEach((bundle: unknown) => addCollection(bundle as IconifyJSON));

export default Object.keys(import.meta.glob('./local/*.ts', { eager: true })).map((key) =>
  key.replace(/.\/local\/(.+).ts/, '$1')
);

DEV && console.debug('CSR iconify');
