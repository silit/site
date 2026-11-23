---
title: "How to rank in Google AI Mode: what decides the answer"
description: "Google AI Mode has no positions, only names and links in an answer. How it builds that answer, what a page needs to be in it and how to check where you stand."
date: 2026-11-23
category: "AI search"
tool: "ai-overview-checker"
readMinutes: 7
---

Nothing ranks in Google AI Mode the way a page ranks in search results. There is no list of ten. There is one written answer, a few businesses named in it and a handful of links beside it.

So "ranking" in AI Mode means two things: being one of the names in the answer, and being one of the pages it links to. This guide covers how AI Mode builds its answer, what a page needs before it can be part of one, and what makes Google pick it.

## What AI Mode is

AI Mode is the part of Google Search where you ask a question in full and get a written answer with links, then follow up as in a conversation. It has its own tab on the results page and its own address, google.com/ai. Google says it is available in more than 200 countries and territories and has more than a billion users a month.

Two facts from Google's own pages matter for anyone who wants to be in its answers:

- **It splits your question up.** [Google's help](https://support.google.com/websearch/answer/16011537) describes a "query fan-out": AI Mode divides a question into subtopics, searches each of them at the same time, and combines what it finds into one answer.
- **The questions are long.** Google says people ask AI Mode questions [nearly three times longer](https://blog.google/products-and-platforms/products/search/ai-mode-expands-languages-locations/) than their ordinary searches.

Put the two together. A customer does not type "boutique hotel lisbon". They ask for a quiet hotel in the old town, near the station, with breakfast, for two nights in March. AI Mode turns that into several searches, one per detail, and builds the answer from the pages that turn up. The page that states those details in plain words is the page that gets used.

## AI Mode and AI Overviews are not the same

| | AI Overviews | AI Mode |
| --- | --- | --- |
| Where it is | At the top of ordinary results | Its own tab, and google.com/ai |
| When it appears | Only for some searches | For almost every question asked there |
| What people type | Mostly short searches | Long questions and follow-ups |
| What you can win | A link beside a short summary | A link or a mention in a longer answer |

Google says the two may use different models and techniques, so the links they show for the same search can differ. In our [sample report](/ai-visibility-report/sample), the same five searches were put to both. AI Overviews appeared for four of them and named the business once. AI Mode answered all five and named it twice.

## What a page needs before anything else

Four things have to be true. They are settings, not content, and each one keeps a page out whatever it says.

1. **The page is indexed.** Google's [guidance](https://developers.google.com/search/docs/appearance/ai-features) is that a page must be in its index to be shown as a link in AI Mode.
2. **It may show a snippet.** A `nosnippet` rule, or a `max-snippet` of zero, rules the page out.
3. **Googlebot may fetch it.** AI Mode works from what Googlebot crawls, so a robots.txt rule that turns Googlebot away turns AI Mode away too.
4. **The site has not been taken out.** Search Console has a setting under Settings, Search generative AI that [excludes a whole site](https://support.google.com/webmasters/answer/16908024) from AI Overviews and AI Mode. Sites are included by default, so check that nobody changed it.

Google states that there are no other technical requirements.

## What gets a page chosen

Beyond the settings, Google's [guide to its generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says these run on the same ranking and quality systems as ordinary Search. The advice that follows from that, and from how the fan-out works:

### Answer the details, not only the headline

Because the question is split into subtopics, a page is fetched for a detail as often as for the main topic. Put the details customers add to their questions on the page as plain sentences: prices, opening hours, who it suits, how far it is from the station, what is included. A sentence can be quoted. A price inside an image cannot.

### Say something only you can say

Google's guide asks for content that is not a repeat of what every other page says: first-hand experience, your own numbers, your own photos. A summary of common knowledge gives AI Mode nothing it does not already have.

### Be on the pages Google reads about you

The names in an answer often come from other people's pages: round-ups, directories, review sites. Open AI Mode, ask what your customers ask, and look at the links beside the answer. If those pages name your rivals and not you, that is the gap, and a place on them usually does more than another paragraph on your own site.

### Keep your Google profiles complete

For local businesses and shops, Google's guide points to Business Profile and Merchant Center as the sources AI answers draw on for places and products. Opening hours, categories, photos, prices and stock that are filled in and current can appear in the answer directly.

### Make the page easy to use

Clear headings, sections that each cover one thing, a page that loads quickly and works on a phone. Google lists these for AI features exactly as it does for Search.

## What you can skip

- **llms.txt.** Google's guide says Search ignores the file.
- **Cutting pages into small pieces.** The same guide says there is no need, and no ideal length.
- **Writing "for AI".** No special phrasing is needed. The systems understand synonyms and intent.
- **Special markup.** Google says there is no structured data made for its AI features. Ordinary structured data is still worth having for what it does in Search.

## How to check where you stand

**Ask it yourself.** Open google.com/ai in a private window, signed out, and ask what a customer would ask, without your name. AI Mode can tailor answers to a signed-in user's history, so signed out is closer to what a stranger sees. Note who is named and which pages are linked.

**Open Search Console.** The [Generative AI performance report](https://support.google.com/webmasters/answer/16984139) counts how often links to your pages were shown in AI Overviews and AI Mode, by page and country. It does not show the questions or the answers, and it counts nothing when you are named without a link.

**Read the answers side by side.** Our free [AI Overview checker](/tools/ai-overview-checker/) shows what Google's AI Overview says for one of your searches, from your customers' country. It does not ask AI Mode. The full report does: it puts your five most searched to AI Mode, to AI Overviews and to four chat engines.

## Questions

### Is there a rank tracker for AI Mode?

Several subscription trackers list AI Mode among the engines they cover, some as a paid extra. Our [comparison of six tools](/guides/profound-alternatives/) has their prices. What they report is how often you are named or linked, since there are no positions to track.

### Can I keep my site out of AI Mode?

Yes. The Search generative AI setting in Search Console takes a site out of AI Mode and AI Overviews together. Google says it is not used as a ranking signal elsewhere in Search.

### Does a first place in Google get me into AI Mode?

It helps, because AI Mode searches Google's own index. It is not enough on its own: the answer is built from several searches, and the page that wins the main one may say nothing about the detail the customer asked for.

### How long does a change take to show?

There is no fixed time. Google has to crawl the page again before a change can count. Check again after a few weeks, with the same questions.
