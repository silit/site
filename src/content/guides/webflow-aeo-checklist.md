---
title: "Webflow AEO checklist: get your site ready for AI search"
description: "A practical checklist for answer engine optimization on Webflow: crawler access, titles and descriptions, FAQ answers and schema, llms.txt, and how to check whether ChatGPT and Google AI Overviews name you."
date: 2026-11-16
updated: 2026-11-23
category: "Webflow"
product: "ai-seo-deck"
readMinutes: 8
---

Answer engine optimization, or AEO, is the work of making your site easy for AI engines to find, read and quote. On Webflow most of it happens in settings you already know: robots.txt, page SEO fields, the CMS and a little structured data.

This checklist goes from the basics that stop you appearing at all to the details that help an engine choose you over a rival. Most items take minutes.

## 1. Let the search crawlers in

Open **Site settings, SEO** and look at your robots.txt. AI companies use separate crawlers for training and for search, and blocking the wrong one can remove you from answers.

| Crawler | Who | What it does |
| --- | --- | --- |
| Googlebot | Google | Crawls for Search, which also feeds AI Overviews and AI Mode |
| OAI-SearchBot | OpenAI | Lets your site appear in ChatGPT search answers |
| GPTBot | OpenAI | Collects content that may be used for model training |
| Claude-SearchBot | Anthropic | Crawls to improve Claude's search results |
| ClaudeBot | Anthropic | Anthropic's training crawler |

You can block the training crawlers and still allow the search crawlers. OpenAI notes that a site that blocks [OAI-SearchBot](https://developers.openai.com/api/docs/bots) will not be shown in ChatGPT search answers, and Anthropic says the same about [Claude-SearchBot](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web) and its search results.

## 2. Make sure pages are indexed and can show a snippet

For Google's AI features, Google's guidance is short: a page needs to be indexed and eligible to show a snippet in Search to appear as a supporting link in AI Overviews or AI Mode, and there are [no extra requirements](https://developers.google.com/search/docs/appearance/ai-features) beyond that.

- Check **Page settings** for pages excluded from search by mistake, especially CMS template pages.
- Avoid `nosnippet` and very short `max-snippet` values on pages you want quoted.
- Use the Pages report in Google Search Console to find important pages that are not indexed.
- In Search Console, open **Settings, Search generative AI**. Sites are included by default, but [this setting](https://support.google.com/webmasters/answer/16908024) can take a whole site out of AI Overviews and AI Mode, so make sure nobody changed it.

## 3. Write titles and descriptions that state the answer

An engine choosing which page answers "invoicing software for small business" reads your title and description first. "Home | Tallyhawk" says nothing. "Invoicing software for small business | Tallyhawk" says exactly what the page is.

In Webflow, set these in **Page settings, SEO settings**. For CMS template pages, build the title and description from fields, so every item gets its own: a plain text field such as "Meta description" with help text for editors keeps them consistent.

## 4. Answer the questions on the page

AI engines quote text they can read. For each important page, list the questions customers ask about that topic, then answer them on the page in plain sentences.

- Put prices, durations, locations and limits in text, not only inside images or videos.
- Use one clear heading per question, so each answer can stand on its own.
- Keep answers short and specific. "From $19 a month, with a free plan for one site" is easier to quote than a paragraph about value.

## 5. Add FAQ structured data that matches the answers

FAQPage structured data marks up question and answer pairs in a format machines read reliably. On Webflow, add the JSON-LD in **Page settings, Custom code, Inside head tag**, or build it from CMS fields on a template page.

Two rules matter. The markup must match text visitors can see on the page, and it does not replace good content: Google states that no [special schema](https://developers.google.com/search/docs/appearance/ai-features) is needed for its AI features. Treat structured data as a way to make clear answers clearer.

Organization structured data on the home page, with your name, logo and social profiles, also helps engines connect your brand across sources.

## 6. Add an llms.txt file, without expecting too much

An llms.txt file is a short Markdown summary of your site with links to the pages that matter most, written for language models. Webflow supports it in **Site settings, SEO, LLMs.txt**: upload a UTF-8 file of up to 100 KB, and after you publish it is served at the root of your custom domain. It is not published to the webflow.io staging domain. Our guide to [llms.txt on Webflow](/guides/webflow-llms-txt/) has a template to copy and the steps one by one.

Webflow's own [help article](https://help.webflow.com/hc/en-us/articles/43240104183315-Upload-an-llms-txt-file-to-your-site) calls the format experimental, and Google's [guide to its AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says Search ignores such files. Add one because it is cheap, keep it current, and spend most of your effort on the pages it links to. Once it is live, the free [llms.txt checker](/tools/llms-txt-checker/) tells you whether the file follows the format and whether your robots.txt lets AI crawlers in.

## 7. Cover the basics engines rely on

- **Alt text** on every meaningful image, describing what it shows.
- **One H1 per page** and headings in order, so the structure of each page is clear.
- **Internal links** from related pages, using words that describe the destination.
- **Open Graph title, description and image** on every page, including CMS templates, so shared links look right in chat apps and AI answers.

## 8. Be where the AI looks

AI answers lean heavily on other sites: review platforms, comparison articles, directories, forums. When an engine names a rival instead of you, look at the sources it cited. Getting listed, reviewed or compared on those pages often moves you into the answer faster than any change on your own site.

## 9. Measure whether it works

AEO without measurement is guesswork. Pick the keywords that matter, turn each one into the questions customers ask, and check every week whether ChatGPT, Google AI Overviews, AI Mode, Gemini, Claude and Grok name you, link to you, or name someone else.

For Google's own AI features there is one count you get for free. Search Console's [Generative AI performance report](https://support.google.com/webmasters/answer/16984139) shows how often links to your pages were shown in AI Overviews and AI Mode, by page and country. It has no searches or clicks in it, and it says nothing about ChatGPT, Gemini or Claude. Our free [AI Overview checker](/tools/ai-overview-checker/) shows the Overview itself for one search.

For everything else, you can do this by hand with a sheet, or let a tracker do it. AI SEO Deck runs these checks for Webflow sites, shows the rivals and sources behind every answer, and writes the fixes from steps 3 to 5 from your own pages, ready to apply to Webflow as unpublished changes. It is free for one site.
