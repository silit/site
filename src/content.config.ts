import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Guides: SEO articles in Markdown. One file per guide in src/content/guides.
// `product` links the guide to a product page (a kit id or a template id); `tool` links it to a free tool
// (an id from TOOLS in src/data/report.js) and puts that tool's form under the guide; `category` groups guides on /guides/.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['Clinic documents', 'Clinic marketing', 'Webflow', 'AI search']),
    product: z.string().optional(),
    tool: z.string().optional(),
    readMinutes: z.number()
  })
});

export const collections = { guides };
