import { getTwMerge } from '@daks.dev/svelte.sdk/tailwind/tailwind-merge';
import { twmerge as store } from '@daks.dev/svelte.sdk/stores/nano/index';

store.set({
  // 'text-color': [{ text: ['accent', 'brand'] }],
  // 'bg-color': [{ bg: ['accent', 'brand'] }],
  // 'border-color': [{ border: ['accent', 'brand'] }],
  'drop-shadow': [{ 'drop-shadow': ['brand'] }]
});

const twMerge = getTwMerge();

export default (...x: ClassName[]) => twMerge(...x) || undefined;
