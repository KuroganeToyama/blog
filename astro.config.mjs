// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://kuroganetoyama.github.io',
  // base: 'blog',
  integrations: [mdx(), sitemap()],
  adapter: vercel(),
});