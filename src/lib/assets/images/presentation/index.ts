import { globIndex, globInfoset, globDataset } from '@daks.dev/svelte.sdk';

export const index = globIndex(
  import.meta.glob('./*.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)', {
    import: 'default',
    eager: true
  })
);

export const captions = globInfoset(
  index,
  import.meta.glob('./*.(json|yaml|yml)', {
    import: 'default',
    eager: true
  })
);

export const sources = globDataset(
  index,
  captions,
  import.meta.glob('./*.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)', {
    query: { meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export const squares = globDataset(
  index,
  captions,
  import.meta.glob('./*.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)', {
    query: { w: 320, h: 320, meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);

export const screens = globDataset(
  index,
  captions,
  import.meta.glob('./*.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)', {
    query: { w: 320, h: 180, meta: true },
    import: 'default',
    eager: true
  }) as unknown as ImageMetadata
);
