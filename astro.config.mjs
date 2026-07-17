// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sandeepdanda.dev',
  integrations: [mdx(), sitemap()],
  // Old multi-page routes now live as sections on the single-page home.
  // Redirect indexed links / bookmarks to the matching anchor.
  redirects: {
    '/education': '/#education',
    '/experience': '/#experience',
    '/projects': '/#projects',
    '/about': '/#about',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
