import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), markdoc(), vue(), keystatic(), mdx()],
  output: 'static',

  adapter: node({
    mode: 'standalone',
  })
});