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

// The free tools. Each gets a page under /tools/, a card on the hub and a share picture (`og`).
// Optional: `tag` (the word shown beside it in lists, 'Free' when left out), `cta` (the hub card's button) and
// `form` ('llms' when the tool has its own form and does not start an AI visibility check).
export const TOOLS = [
  {
    id: 'llm-visibility-checker',
    href: '/tools/llm-visibility-checker/',
    og: '/images/og/llm-visibility-checker.jpg',
    name: 'LLM visibility checker',
    line: 'Type a website and read what ChatGPT, Gemini and Google AI Overviews answer when its customers search.',
    facts: ['Three LLMs', 'About a minute', 'No sign-up']
  },
  {
    id: 'chatgpt-visibility-checker',
    href: '/tools/chatgpt-visibility-checker/',
    og: '/images/og/chatgpt-visibility-checker.jpg',
    name: 'ChatGPT visibility checker',
    line: 'Read what ChatGPT answers when customers ask for a business like yours: who it names, the searches it ran and the pages it read.',
    facts: ['Asked with web search on', 'About a minute', 'No sign-up']
  },
  {
    id: 'aeo-checker',
    href: '/tools/aeo-checker/',
    og: '/images/og/aeo-checker.jpg',
    name: 'AEO checker',
    line: 'An answer engine check in two halves: what the engines answer today, and what on the site keeps it out of the answer.',
    facts: ['Answers and site', 'About a minute', 'No sign-up']
  },
  {
    id: 'llms-txt-checker',
    href: '/tools/llms-txt-checker/',
    og: '/images/og/llms-txt-checker.jpg',
    name: 'llms.txt checker',
    line: 'Check a site\'s llms.txt against the format, and the robots.txt rules that decide whether AI crawlers can read the site at all.',
    facts: ['Format and crawler rules', 'A few seconds', 'No sign-up'],
    form: 'llms'
  },
  {
    id: 'ai-search-audit',
    href: '/tools/ai-search-audit/',
    og: '/images/og/ai-search-audit.jpg',
    name: 'AI search audit',
    line: 'The five questions an audit of AI search has to answer, and a free first pass at them for any website.',
    facts: ['Free first pass', `Full audit ${REPORT.price}, once`, 'No sign-up'],
    tag: 'Free first pass',
    cta: 'See the audit'
  }
];
