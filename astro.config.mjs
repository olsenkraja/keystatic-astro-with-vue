import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://olsenkraja.github.io',
  integrations: [react(), markdoc(), vue(), keystatic(), mdx()],
  output: 'static'
});