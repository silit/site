import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Puts every table in a guide inside <div class="table-wrap">, so that a table wider than a phone scrolls
// sideways on its own instead of making the whole page wider (.table-wrap in global.css).
function wrapTables() {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === 'element' && child.tagName === 'table') {
        return { type: 'element', tagName: 'div', properties: { className: ['table-wrap'] }, children: [child] };
      }
      walk(child);
      return child;
    });
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://silitlabs.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Code blocks in guides are plain text to copy (a file, a line for the page head): styled in global.css, no colours.
  markdown: { syntaxHighlight: false, rehypePlugins: [wrapTables] },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // The AI Visibility Report is served through rewrites (vercel.json), so Astro does not know its pages.
      customPages: ['https://silitlabs.com/ai-visibility-report', 'https://silitlabs.com/ai-visibility-report/sample']
    })
  ]
});
