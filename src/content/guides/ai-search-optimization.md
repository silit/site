---
title: "AI search optimization: a step-by-step plan for a small business"
description: "What AI search optimization is, how each AI engine finds a business, and the work in the order that pays off: the first week, the first month and the next two."
date: 2026-11-25
category: "AI search"
tool: "ai-search-audit"
readMinutes: 9
---

AI search optimization is the work of getting your business into the answers of AI engines: ChatGPT, Gemini, Claude, Grok, and Google's AI Overviews and AI Mode. When a customer asks one of them for what you sell, you want two things from the answer. Your name in the text, and a link to your website among its sources.

You will also see it called GEO (generative engine optimization), AEO (answer engine optimization) or LLM SEO. They are the same work under different names. This guide is the plan: how each engine finds a business, what to do first, and how to tell whether it is working. Each step links to a longer guide when you want the detail.

## How AI engines find a business

An AI engine answering a question about products, places or prices does not answer from memory alone. It runs web searches, reads a handful of pages and writes its answer from what it finds there. Two consequences follow, and the whole plan rests on them.

**The pages it reads decide the names.** If the round-up article, directory or review site an engine reads names three of your rivals and not you, the answer will too. Most of the work is about being on those pages, yours and other people's.

**Each engine reads through its own door.**

| Engine | Where its answers come from | What lets you in |
| --- | --- | --- |
| Google AI Overviews and AI Mode | Google's own index, through several related searches per question | Being indexed, Googlebot allowed, the site not excluded in Search Console |
| Gemini | Google Search, when it searches | The same as Google |
| ChatGPT | An index of OpenAI's own plus outside search providers | OAI-SearchBot allowed in robots.txt |
| Claude | Its web search, and its crawler Claude-SearchBot | Claude-SearchBot allowed in robots.txt |
| Grok | The web and posts on X | Being findable on the web |

Google's [guide to its AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says they run on the same ranking and quality systems as ordinary Search, and that no [special schema](https://developers.google.com/search/docs/appearance/ai-features) is needed. OpenAI's [crawler documentation](https://developers.openai.com/api/docs/bots) says a site that blocks OAI-SearchBot is not shown in ChatGPT search answers, and Anthropic says the same of [Claude-SearchBot](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web).

By reach, Google comes first: it says AI Overviews has [more than 2.5 billion monthly users](https://blog.google/products-and-platforms/products/search/new-opportunities-control-and-insights-for-website-owners/). Among the chat apps, ChatGPT has the most users. Start with those two.

## How it differs from SEO

| | SEO | AI search optimization |
| --- | --- | --- |
| What the customer sees | A list of ten links | One written answer with a few names in it |
| What wins | A page that ranks | A business the pages agree on |
| Who decides | Your page's rank | The pages the engine reads, often not yours |
| How you measure it | Search Console: positions and clicks | Asking the questions and counting the answers |

SEO still matters, because engines that search the web find pages much as people do. But a page can rank first and still be left out of an answer, because the answer is about businesses, not pages.

## Before you start: five searches

Pick five searches where a customer is choosing a provider, the way they would type them into Google and the way they would ask a chat. "Dentist for implants in Leeds", not "what is an implant". Leave your own name out. The [GEO audit guide](/guides/geo-audit/) shows how to find them in Search Console and your inbox.

Ask each one on ChatGPT and Google, twice each for the chat engines, and write down three things per answer: are you named, is your site cited, and who is named instead. That sheet is your starting point, and you will fill it in again every month.

## Week 1: be readable and be known

These are settings and short texts. They take an afternoon and they come first, because nothing else works without them.

1. **Open your robots.txt.** Allow Googlebot, Bingbot, OAI-SearchBot and Claude-SearchBot. Blocking the training crawlers, such as GPTBot, is a separate choice and does not hide you from answers.
2. **Check the Search Console setting.** Under Settings, Search generative AI, a [setting](https://support.google.com/webmasters/answer/16908024) can take a whole site out of AI Overviews and AI Mode. Sites are in by default; make sure nobody changed it.
3. **Make sure the text is in the page code.** Most AI crawlers do not run JavaScript. If your words appear only once scripts have loaded, they read an almost empty page. The free [AEO checker](/tools/aeo-checker/) shows your home page as a crawler reads it.
4. **Say who you are in one paragraph.** What you do, for whom and where, near the top of the home page, in plain text. Use the same words on every listing you control. When every source describes you the same way, the engines repeat it.
5. **Add Organization markup** with your name, address, logo and the profiles that are yours. It must match what visitors can see.
6. **Complete your Google Business Profile** if customers come to you, and keep opening hours, categories and photos current. Google's AI answers draw on it for places.

## Weeks 2 to 4: get onto the pages AI reads

This step moves the most answers, and it happens on other people's websites.

Go back to your five searches and open the sources of each answer. Make a list of the pages that come up more than once: round-ups ("the 7 best..."), directories, review sites, comparison articles, local guides. Then, for each one:

- **A directory or review site:** claim or create your listing, fill it in completely and collect reviews there.
- **A round-up or guide:** write to the author with something they can use, such as a fact, a photo or a reason you belong on the list. Ask to be added, once and politely.
- **A comparison that leaves you out:** check whether the author takes suggestions, and offer accurate information about how you differ.

Our [ChatGPT brand mentions guide](/guides/chatgpt-brand-mentions/) explains why these third-party pages earn names more than your own pages do.

## Months 2 and 3: become the page AI cites

Now make your own site the source for the facts an answer needs.

- **One page per question your customers ask**, with the answer in the first two sentences. Prices, timings, who it suits, what is included.
- **Facts in plain text.** A sentence can be quoted; a price inside an image cannot.
- **Cover the subject, not one wording.** A [2026 study](https://arxiv.org/abs/2610.15382) of ChatGPT's live search found that the websites that turn up again and again when a question is asked are the ones it cites, more than any single page. Write the related pages and link them to each other.
- **Publish something only you have.** Your own prices, numbers or a small survey make your page the only possible source for that sentence.

[How to get cited by ChatGPT](/guides/how-to-get-cited-by-chatgpt/) goes through this step in detail, and [how to rank in Google AI Mode](/guides/how-to-rank-in-ai-mode/) does the same for Google.

## Measure it once a month

Ask the same five searches again, on the same engines, and fill in the sheet. Three numbers tell you where you are:

- **Named:** answers that name you, out of all answers.
- **Cited:** answers that link to your site.
- **First:** answers where you are the first name.

Google gives you one more count for free: Search Console's [Generative AI performance report](https://support.google.com/webmasters/answer/16984139) shows how often links to your pages appeared in AI Overviews and AI Mode. In your analytics, visits from ChatGPT carry `utm_source=chatgpt.com`, which OpenAI adds to the links it sends.

Expect movement after weeks, not days. The pages the engines read have to be crawled again before an answer can change, and third-party pages change on their authors' schedule.

## What not to spend time on

- **An llms.txt file before anything else.** It is quick to add, but no major AI company has said its answers rely on it. Add it last, if at all.
- **Repeating your name or keywords.** Engines name businesses they meet on the pages they read. More repetitions on a page they do not read change nothing.
- **Telling a chatbot about your business.** What it learns in your conversation stays in your conversation.
- **Paying for "guaranteed" AI rankings.** Nobody controls what an engine writes. ChatGPT now shows ads, but an ad is not a place in the answer.

## Doing it yourself, or with a tool

The plan above needs no tool: a spreadsheet, a private browser window and a few hours a month. Tools save the asking and counting.

- **A free first pass.** The [AI search audit](/tools/ai-search-audit/) on this page asks one of your customers' searches on ChatGPT, Gemini and Google AI Overviews, and shows the answers with every name marked.
- **A one-time report.** Our [AI Visibility Report](/ai-visibility-report) asks your five most searched questions on six engines, about 50 answers, lists the pages behind them and ends in a fix kit. It costs $29, once.
- **A tracker,** from about $29 a month, repeats your questions every day. It is worth it once you are changing things every week. Our [comparison of AI visibility tools](/guides/profound-alternatives/) lists six with prices.

## Questions

### Is AI search optimization the same as SEO?

No, but it builds on it. SEO gets a page ranked. AI search optimization gets a business named in a written answer, which depends on which pages the engine reads, including pages you do not own.

### Is it the same as GEO, AEO or LLM SEO?

Yes. They are different names for the same work: being named and cited in answers from AI engines. Our guide to [LLM visibility](/guides/llm-visibility/) covers how that visibility is measured.

### Which AI engine should I start with?

Google's AI Overviews and ChatGPT, because they reach the most people. Gemini and AI Mode come next, since they read Google's index too. Add Claude and Grok if your customers use them.

### How long does it take?

The settings in week 1 count within days to a few weeks, once the pages are crawled again. Places on third-party pages take as long as their authors take. Expect to judge the work over two or three monthly checks, not one.

### Does it work for a local business?

Yes, and often faster. Local answers lean on a few sources, such as Google Business Profile, review sites and local guides, so a small number of listings can change the answer.
