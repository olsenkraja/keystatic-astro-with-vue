import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react(), markdoc(), vue(), keystatic(), mdx()],
  output: 'server',
  adapter: vercel()
});