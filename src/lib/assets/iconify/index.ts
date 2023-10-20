//@ts-nocheck
import { DEV } from 'esm-env';
import { addCollection } from '@iconify/svelte/offline';
import bundles from './bundles.json';

bundles.forEach((bundle: unknown) => addCollection(bundle));

export default Object.keys(import.meta.glob('./local/*.ts', { eager: true })).map((key) =>
  key.replace(/.\/local\/(.+).ts/, '$1')
);

DEV && console.debug('CSR iconify');
