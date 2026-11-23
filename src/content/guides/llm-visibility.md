---
title: "LLM visibility: what it is, how to measure it and how to raise it"
description: "LLM visibility is how often AI models such as ChatGPT and Gemini name your business. What decides it, the numbers worth tracking and the work that raises it."
date: 2026-11-23
category: "AI search"
tool: "llm-visibility-checker"
readMinutes: 8
---

LLM visibility is how often, and how well, a large language model names your business when someone asks it for what you sell. The models in question are the ones behind ChatGPT, Gemini, Claude and Grok, and behind Google's AI Overviews and AI Mode.

It is not a ranking. There is no page two and no position seven. A customer asks a question, the model writes a few lines, and your name is in them or it is not. This guide covers what decides that, how to put a number on it, and what raises the number.

## What counts as being visible

Four things can be true of you in an answer, and each is harder to get than the one before.

| Level | What it means |
| --- | --- |
| Known | Asked about you by name, the model describes you correctly |
| Named | Asked for what you sell, without your name, the model includes you |
| Cited | A page of your own site is among the sources of the answer |
| First | Yours is the first name in the answer |

Most businesses that worry about LLM visibility are stuck at the second one: the model knows they exist, and names somebody else.

## Where a model gets its answer

From two places, and it matters which one you are dealing with.

**What it learned in training.** A model has read a large part of the public web up to a cutoff date. Brands that were written about often, on many sites, are the ones it remembers. This changes only when a new model is trained, so there is little you can do about it this month.

**What it reads at the moment you ask.** For questions about products, places and prices, the chat apps now search the web before they answer. OpenAI's help says ChatGPT [searches automatically](https://help.openai.com/en/articles/9237897-chatgpt-search) when a question might benefit from information on the web. Google says its AI Overviews and AI Mode may run [several related searches](https://developers.google.com/search/docs/appearance/ai-features) for a single question and build the answer from what they find. The model then reads a handful of pages and writes its answer from them.

The second place is where a small business can change something in weeks. The answer is built from a few pages. If you are on those pages, you are in the answer far more often.

## How it differs from search visibility

| | Search results | LLM answers |
| --- | --- | --- |
| What you win | A position on a page | A name in an answer |
| How stable it is | Moves slowly | Can differ between two tries of the same question |
| What your tools show | Impressions and clicks | Almost nothing: a mention leaves no trace in analytics |
| Whose pages decide it | Mostly your own | Yours, and the pages the model reads about you |

Good search visibility still helps. Models that search the web find pages the same way people do, and [Ahrefs reports](https://ahrefs.com/blog/llm-visibility/) a moderate link between ranking well on Google and being cited in AI Overviews. But a page can rank first and still be left out of the answer, because the answer names businesses, not pages.

## How to measure it

Ask real questions and count. That is all a measurement of LLM visibility is, however it is packaged.

1. **Choose the searches.** Five that a customer makes when choosing a provider, with no brand name in them.
2. **Ask each model, more than once.** Answers vary, so one answer is luck.
3. **Count four things:** how many answers name you, which models never do, who is named in your place, and which pages the answers cite.

The first number is the one to watch: the share of answers that name you. In our [sample report](/ai-visibility-report/sample), a made-up hotel is named in 15 of 49 answers. One model never names it, and one search made 480 times a month names it once in ten tries. Those three facts say more than any single score.

There are four ways to get the numbers:

- **By hand**, with a spreadsheet. Our [GEO audit guide](/guides/geo-audit/) goes through it step by step.
- **A free check.** The [LLM visibility checker](/tools/llm-visibility-checker/) asks ChatGPT, Gemini and Google AI Overviews one search for your site and shows the answers word for word.
- **A one-time report**, which asks every search on every model and ends in a list of fixes.
- **A tracker**, which repeats the same questions every week. Our guide on [what a tracker should measure](/guides/ai-visibility-tracker/) covers when one is worth paying for.

For Google alone there is also a count you get for free: Search Console's [Generative AI performance report](https://support.google.com/webmasters/answer/16984139) shows how often links to your pages appeared in AI Overviews and AI Mode. It has no searches and no clicks in it, and it covers no other model.

## How to raise it

In this order, because each step rests on the one before.

### 1. Let the models read you

Each company fetches pages with its own crawler, and a rule in robots.txt can shut one out without you knowing. Most of these crawlers also do not run JavaScript, so text that a script adds after the page loads is text they never see. The free [llms.txt checker](/tools/llms-txt-checker/) reads your robots.txt and lists which AI crawlers it turns away.

### 2. Say plainly who you are

One paragraph on your home page that states what you do, for whom and where, in words a stranger would use. Organization markup with the same facts. Then ask each model about you by name and fix what it gets wrong at the source, which is usually an old listing or a profile nobody updated.

### 3. Get onto the pages the models read

This is the step that moves the number most. Look at the sources under the answers you are missing from: the round-ups, directories and review sites that come up again and again. The same Ahrefs article reports a study of 75,000 brands: mentions of a brand on other websites were what went most closely with its visibility in AI Overviews. Claim the listing, earn the reviews, write to the author of the round-up.

### 4. Publish the page that answers the search

For each search you are missing from, one page that answers it directly, with prices, places and limits in text. Models quote what they can read in a sentence.

### 5. Keep it current

Ahrefs also found that AI assistants cite newer pages than ordinary search results do. A page last touched three years ago loses to one updated this quarter.

## What does not raise it

- **An llms.txt file.** It costs little, but Google's [guide to its AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says Search ignores the file, and no other company has said its answers use it.
- **Writing "for AI".** The same guide says there is no need for special phrasing or for pages cut into small pieces. Write for the customer who asked.
- **Bought or invented mentions.** Google's guide says seeking artificial mentions across the web does not help and breaks its spam policies. The mentions that count are the ones on pages people read.

## How long it takes

Changes to the pages a model reads at answer time can show within weeks: the page has to be fetched again, and the search behind the answer has to find it. What a model learned in training does not move until the next model. So measure again about a month after a change, with the same searches asked the same way, and expect the search-driven models to move first.

## Questions

### Is LLM visibility the same as AI visibility, GEO or AEO?

It is the same thing seen from different sides. LLM visibility and AI visibility are names for the result: being in the answer. GEO (generative engine optimization) and AEO (answer engine optimization) are names for the work that gets you there.

### Which models matter most?

The ones your customers use. By reach, Google's AI answers are the largest (see [how AI Mode picks its answer](/guides/how-to-rank-in-ai-mode/)): Google says AI Overviews has [more than 2.5 billion monthly users](https://blog.google/products-and-platforms/products/search/new-opportunities-control-and-insights-for-website-owners/). Among the chat apps, ChatGPT has the most users. Check those two before the rest.

### Does a first place on Google guarantee a mention?

No. It helps, because models that search the web tend to read pages that rank. But the answer is assembled from several pages, and the names in it often come from a listing or a round-up, not from the page that ranks first.

### Can I see LLM visibility in my analytics?

Only the small part that ends in a click. A visit from chatgpt.com or gemini.google.com shows up as a referral. A mention that the reader remembers and searches for later shows up as a branded search or a direct visit, with nothing to say where it began.
