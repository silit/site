import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://silitlabs.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // The AI Visibility Report is served through rewrites (vercel.json), so Astro does not know its pages.
      customPages: ['https://silitlabs.com/ai-visibility-report', 'https://silitlabs.com/ai-visibility-report/sample']
    })
  ]
});
