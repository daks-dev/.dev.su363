import { addIcon } from '@iconify/svelte/offline';

addIcon('local:blocks-scale', {
  body: `
  <g fill="currentColor">
    <rect x="1.5" y="1.5" width="9" height="9" rx="1">
      <animate id="a" attributeName="x" begin="0;b.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5" />
      <animate attributeName="y" begin="0;b.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5" />
      <animate attributeName="width" begin="0;b.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9" />
      <animate attributeName="height" begin="0;b.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9" />
    </rect>
    <rect x="13.5" y="1.5" width="9" height="9" rx="1">
      <animate attributeName="x" begin="a.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5" />
      <animate attributeName="y" begin="a.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5" />
      <animate attributeName="width" begin="a.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9" />
      <animate attributeName="height" begin="a.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9" />
    </rect>
    <rect x="13.5" y="13.5" width="9" height="9" rx="1">
      <animate attributeName="x" begin="a.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5" />
      <animate attributeName="y" begin="a.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5" />
      <animate attributeName="width" begin="a.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9" />
      <animate attributeName="height" begin="a.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9" />
    </rect>
    <rect x="1.5" y="13.5" width="9" height="9" rx="1">
      <animate id="b" attributeName="x" begin="a.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5" />
      <animate attributeName="y" begin="a.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5" />
      <animate attributeName="width" begin="a.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9" />
      <animate attributeName="height" begin="a.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9" />
    </rect>
  </g>
  `
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/\n/g, ''),
  width: 24,
  height: 24
});
