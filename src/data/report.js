// Facts about the AI Visibility Report that the free tool pages repeat. The report is built by the AI SEO Deck app
// and served here through the rewrites in vercel.json (see SITE.report). When its price, engines or limits change
// there (the app's README lists them), change them here too.

export const REPORT = {
  href: '/ai-visibility-report',
  sample: '/ai-visibility-report/sample',
  price: '$29',
  searches: 5, // searches in the full report
  searchesWord: 'five',
  answers: 50, // 5 searches x (4 chat models asked twice + 2 Google surfaces)
  checksPerDay: 4, // free checks a visitor can start in a day
  keptDays: 30 // how long a free check is kept
};

// The six engines, in the order the report shows them. `sent` is what the engine is given: a chat model gets the
// question a customer would type, Google gets the search itself. `free` and `full` are answers per search.
export const ENGINES = [
  { id: 'chatgpt', name: 'ChatGPT', maker: 'OpenAI', sent: 'question', free: 1, full: 2 },
  { id: 'aio', name: 'Google AI Overviews', maker: 'Google', sent: 'search', free: 1, full: 1 },
  { id: 'gemini', name: 'Gemini', maker: 'Google', sent: 'question', free: 1, full: 2 },
  { id: 'aimode', name: 'Google AI Mode', maker: 'Google', sent: 'search', free: 0, full: 1 },
  { id: 'claude', name: 'Claude', maker: 'Anthropic', sent: 'question', free: 0, full: 2 },
  { id: 'grok', name: 'Grok', maker: 'xAI', sent: 'question', free: 0, full: 2 }
];

// The free tools. Each gets a page under /tools/ and a card on the hub.
export const TOOLS = [
  {
    id: 'llm-visibility-checker',
    href: '/tools/llm-visibility-checker/',
    name: 'LLM visibility checker',
    line: 'Type a website and read what ChatGPT, Gemini and Google AI Overviews answer when its customers search.',
    facts: ['Three LLMs', 'About a minute', 'No sign-up']
  }
];
