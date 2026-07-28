import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://redmountainsoap.com',
  srcDir: './site',
  publicDir: './site-public',
  outDir: './dist',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
