import { getTwMerge } from '@daks.dev/svelte.sdk/tailwind/tailwind-merge';
import { twmerge } from '@daks.dev/svelte.sdk/stores/nano';

twmerge.set({
  // 'text-color': [{ text: ['accent', 'brand'] }],
  // 'bg-color': [{ bg: ['accent', 'brand'] }],
  // 'border-color': [{ border: ['accent', 'brand'] }],
  'drop-shadow': [{ 'drop-shadow': ['brand'] }]
});

const twMerge = getTwMerge();

export default (...x: ClassName[]) => twMerge(...x) || undefined;
