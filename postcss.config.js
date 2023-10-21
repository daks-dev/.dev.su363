import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const config = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer({
      cascade: true
    }),
    process.env.NODE_ENV === 'production' &&
      cssnano({
        preset: ['advanced', { zindex: false }]
      })
  ]
};

export default config;
