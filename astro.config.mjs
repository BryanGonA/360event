// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config

export default defineConfig({
  site: 'https://bryangona.github.io',
  base: '/360event',
  build: {
    format: 'directory', // Esto genera carpeta/index.html en lugar de archivo.html
  }, 
});
