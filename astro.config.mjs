import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://astro-example.olsi.dev',
  integrations: [react(), markdoc(), vue(), keystatic(), mdx()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});