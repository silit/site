---
title: "How to check if ChatGPT recommends your business"
description: "A repeatable way to see whether ChatGPT, Google AI Overviews and other AI engines name your business for the questions your customers ask, and what to do when they name a rival instead."
date: 2026-11-16
updated: 2026-11-23
category: "Webflow"
product: "ai-seo-deck"
readMinutes: 8
---

More people now ask an AI which product, studio or service to choose before they ever see a list of links. If ChatGPT answers "the best invoicing software for a small business" with three names and yours is not one of them, that customer may never reach your site, however well you rank on Google.

The good news is that you can check where you stand, and the check is simple enough to repeat every week. This guide shows how to run it by hand, what to write down, and how to turn what you find into changes on your site. If you would rather see one check done before you start, the free [AI Visibility Report](/ai-visibility-report) check runs one for your site in about a minute.

## Why an AI answer is not a ranking

A Google results page is fairly stable: the same search from the same place returns roughly the same ten links. An AI answer is written fresh each time. The wording of the question, whether the engine searches the web, your location and even small changes in the model can change which names appear.

That has two consequences. First, one question asked once tells you very little. Second, the useful number is not a position but a share: out of all the answers you collect for a topic, how many name you.

## Step 1: turn each keyword into real questions

Start from the keywords you already care about, the ones you would track in an SEO tool. For each one, write the questions a customer would actually type into a chat window. People ask AI in full sentences, often with a budget, a size or a constraint.

| Keyword | Questions a customer would ask |
| --- | --- |
| invoicing software for small business | What is the best invoicing software for a small business? / How much does invoicing software cost for a small business? |
| bookkeeping app for freelancers | Which bookkeeping app should a freelancer use? / Is there a simple bookkeeping app for freelancers with a free plan? |

Two questions per keyword is a good start. One asks for a recommendation, the other asks about price or fit, which is where many buying decisions happen.

## Step 2: ask in a clean session, with search on

Answers are shaped by what the engine knows about you, so remove that first.

- Use a temporary or logged out chat, so memory and past conversations do not steer the answer.
- Make sure web search is on. For "best" and "how much" questions, ChatGPT usually searches on its own, and the answer then lists the sites it read.
- Ask as a customer would. Do not mention your own brand in the question, or you are testing something else.
- Note the country you are in. If your customers are elsewhere, results from your own location can mislead you.

## Step 3: write down four things

For every answer, record the same four things in a sheet. It takes a minute per answer and it is what makes the check useful later.

1. **Named or not.** Does the answer mention your business by name?
2. **Linked or not.** Does it link to your site, or only mention you?
3. **Who it named instead.** The rivals in the answer are your real competition for that question, and they are often not the companies you expect.
4. **Which sources it used.** When the engine searches, it shows the pages it read: review sites, comparison articles, directories, Reddit threads. These sources decide the answer more than anything else.

## Step 4: repeat on the other engines

ChatGPT is not the only place this happens. Google shows AI Overviews above the results for many questions and has a separate AI Mode, and people also ask Gemini, Claude, Grok and Perplexity. Each one searches differently and reads different sources, so a business can be named by one and ignored by the next.

Run the same questions on each engine you care about, and keep the results side by side. A pattern usually appears quickly: one engine names you often, another never does, and the sources explain why.

## Step 5: check again every week

Because answers change, a single check is a snapshot. Run the same questions on the same day each week and watch the share of answers that name you. One good or bad week means little. A trend over a month or two tells you whether your changes are working.

## What to do when a rival is named instead of you

The sources in step 3 are the place to start. If the answers keep citing the same comparison article or review site, ask to be included there, collect reviews on that platform or publish your own comparison that answers the question honestly. Being where the AI looks often matters more than anything on your own site.

Then look at the page on your site that should answer the question:

- **Say what the page is in the title and description.** "Invoicing | Tallyhawk" tells an engine very little. "Invoicing software for small business | Tallyhawk" tells it exactly which question the page answers.
- **Answer the questions on the page itself.** If customers ask about price, put a clear, written answer about price on the page, in text rather than inside an image.
- **Add FAQ structured data that matches the visible answers.** It helps engines read the question and answer pairs. Google is clear that structured data has to match what visitors can see.
- **Do not block the search crawlers.** OpenAI's [OAI-SearchBot](https://developers.openai.com/api/docs/bots) is how sites appear in ChatGPT search answers, and Anthropic documents [Claude-SearchBot](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web) for the same job. Check your robots.txt does not shut them out by accident: the free [llms.txt checker](/tools/llms-txt-checker/) reads it and shows which AI crawlers it turns away.

For Google's AI features, the rules are the ones you already know. Google says a page has to be indexed and eligible to show a snippet in Search to appear as a link in AI Overviews or AI Mode, and that there are [no extra requirements](https://developers.google.com/search/docs/appearance/ai-features) or special files beyond that.

Asking the engines is the first half of an audit. The other half is the pages behind the answers, what the engines say about you by name and what a crawler sees on your site. Our [GEO audit guide](/guides/geo-audit/) goes through all of it in order.

## When to stop doing it by hand

Five keywords, two questions each, on six engines is sixty answers a week. That is manageable once, and tiring by week three. A tracker does the same steps for you: it asks every question on every engine, records whether you are named and linked, keeps the rivals and sources, and shows the trend.

That is what we built AI SEO Deck to do for Webflow sites. It asks ChatGPT, Gemini, Claude and Grok two customer questions per keyword, checks Google AI Overviews and AI Mode for the search itself, and turns the gaps into fixes you can apply to your Webflow pages. The free plan covers one site and three keywords, so you can compare it with your own sheet.

Not on Webflow? The [AI Visibility Report](/ai-visibility-report) does the same check once, for any website. Type your address and the free check finds the searches your customers make, with how often each is made on Google, and shows what ChatGPT, Google AI Overviews and Gemini answer for one of them, word for word. The full report covers five searches on six engines, asks every chat engine twice and comes with the fixes. You can read a [sample report](/ai-visibility-report/sample) first.
