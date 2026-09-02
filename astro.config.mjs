// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeSections from './src/utils/rehype-sections.mjs';
import { SITE } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
    rehypePlugins: [rehypeSlug, rehypeSections],
  },
});
