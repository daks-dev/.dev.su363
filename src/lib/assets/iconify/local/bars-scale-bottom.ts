import { addIcon } from '@iconify/svelte/offline';

addIcon('local:bars-scale-bottom', {
  body: `
  <g fill="currentColor">
    <rect transform="scale(1 1.0927)" width="4" height="7">
      <animateTransform attributeName="transform" attributeType="xml" begin="0s" dur="0.6s" repeatCount="indefinite"
        type="scale" values="1,1; 1,3; 1,1" />
    </rect>
    <rect transform="scale(1 2.2406)" x="10" width="4" height="7">
      <animateTransform attributeName="transform" attributeType="xml" begin="0.2s" dur="0.6s" repeatCount="indefinite"
        type="scale" values="1,1; 1,3; 1,1" />
    </rect>
    <rect transform="scale(1 2.426)" x="20" width="4" height="7">
      <animateTransform attributeName="transform" attributeType="xml" begin="0.4s" dur="0.6s" repeatCount="indefinite"
        type="scale" values="1,1; 1,3; 1,1" />
    </rect>
  </g>
  `
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/\n/g, ''),
  width: 24,
  height: 24
});
