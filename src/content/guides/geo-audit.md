---
title: "GEO audit: how to run one yourself, step by step"
description: "A GEO audit you can run in an afternoon: choose the searches, ask the AI engines, count who gets named, read their sources, check your site and list the fixes."
date: 2026-11-23
category: "AI search"
tool: "ai-search-audit"
readMinutes: 9
---

A GEO audit answers one question: when a customer asks an AI engine for what you sell, are you in the answer, and if not, why not?

GEO stands for generative engine optimization. The same review is also sold as an AI search audit, an AEO audit and an AI visibility audit. Whatever it is called, it has two halves. The first is reading what the engines say today. The second is finding out what on your site, and on other people's sites, made them say it.

Many tools that call themselves GEO audits do only the second half. They grade your pages against a checklist and give you a score out of 100. That is useful, but a score cannot tell you whether anyone is recommending you. This guide does both halves, by hand, in the order that saves you the most work.

## What you need

- **A spreadsheet.** One row per answer.
- **A private browser window.** So that your own history does not steer the answers.
- **The engines your customers use.** For most businesses that is ChatGPT and Google's AI Overviews first, then Gemini and Google AI Mode. Add Claude, Grok, Perplexity or Copilot if your market uses them.
- **An afternoon.** Five searches on six engines is about 50 answers to ask for, read and record.

## Step 1: choose the searches that matter

Five is enough. More searches make a bigger sheet, not a better audit.

Pick searches where someone is choosing a provider. "Boutique hotel alfama" is one. "What is a boutique hotel" is not: nobody who types it is about to book. Leave your own name out of all of them, because asked by name an engine will find something to say about almost any business.

Good places to find them:

- **Search Console.** Under Performance, the Queries list shows what people already type before they reach you. Skip the ones with your name in them.
- **Your inbox.** The first question in a customer's email is usually the search they made the day before.
- **A keyword tool.** Any will do. Google's Keyword Planner is free with an Ads account and shows how often each search is made, as a range.

Write each search down twice: as the keyword, and as the question a customer would type into a chat.

| Keyword, for Google | Question, for a chat engine |
| --- | --- |
| boutique hotel alfama | What is a good boutique hotel in Alfama, Lisbon for a weekend? |
| romantic hotels lisbon | Where should a couple stay in Lisbon with a view and walkable to everything? |

If your tool gives you monthly numbers, keep them. In step 7 they tell you which gap costs most.

## Step 2: ask every engine, more than once

The way you ask decides whether the answer means anything.

- **Use a clean session.** Log out or open a temporary chat, in a private window, with web search on.
- **Ask the chat engines twice.** Open a fresh chat for the second run. The same question often gets different names the second time, and one answer cannot tell you which kind of result you have.
- **Give Google the keyword itself.** Note first whether an AI Overview appears at all. Often there is none, and that is a result too. Then open AI Mode for the same search. The free [AI Overview checker](/tools/ai-overview-checker/) does this for one search, from your customers' country.
- **Mind where you are.** Engines answer for the place they think you are in. If your customers are in another country, say so in the question, or what you read is not what they read.
- **Keep the whole answer.** Paste it into the sheet or save a screenshot. You will read it again in steps 3 and 4.

Our guide on [how to check if ChatGPT recommends your business](/guides/check-if-chatgpt-recommends-your-business/) goes through the asking in more detail.

## Step 3: count who gets named

Give each answer one row with these columns.

| Column | What to write |
| --- | --- |
| Search | Which of your five |
| Engine and run | For example "ChatGPT, 2nd" |
| Named | Yes or no: is your business in the text of the answer? |
| Place | First, second, third name in the answer |
| Cited | Yes or no: is a page of your site among the sources? |
| Others named | Every other business in the answer |
| Sources | Every page the answer lists |

Then count three things.

1. **How many answers name you**, out of all of them. This is the number the whole audit hangs on.
2. **The same, engine by engine and search by search.** An engine that never names you and a search you are missing from are two different problems.
3. **How often each other business is named.** The name at the top of that list is who the engines send your customers to.

Being named and being cited are not the same thing, and the difference matters later. Our guide to [ChatGPT brand mentions](/guides/chatgpt-brand-mentions/) explains it.

Do not turn the count into a yes or a no too early. Named in one run of two means "sometimes", and sometimes is the most common result.

For Google there is one count you do not have to make by hand. If the site is yours, Search Console's [Generative AI performance report](https://support.google.com/webmasters/answer/16984139) shows how often links to your pages were shown in AI Overviews and AI Mode, by page and country. It has no searches and no clicks in it, and it cannot show an answer you are missing from, so it adds to your sheet and does not replace it.

## Step 4: read the pages behind the answers

Engines do not make their lists up. They build them from pages they read at that moment: round-ups, directories, review sites and guides. Your Sources column is the list of those pages.

Count how often each page appears. A handful of them will be behind most of the answers. For each of those, write down:

- **What kind of page it is.** A listing, a review site, an article, or a rival's own website.
- **Whether you are on it.**
- **Who on it gets named.** Usually the same names as in the answers, which is the point.

Set the rivals' own websites aside: you cannot get onto those. The rest is a to-do list. A listing can be claimed, a review site can be filled, and the author of a round-up can be written to.

## Step 5: ask about yourself by name

Now, and only now, use your name. Ask each chat engine what your business is, what it offers, where it is and what it costs.

Write down everything that is wrong: an old address, last year's prices, a service you dropped, or a description that belongs to another business with a similar name. An engine that mixes you up with someone else will not recommend you with confidence.

Each mistake has a source. It is usually an old directory entry, a profile nobody updated, or a home page that never says in one plain paragraph who you are.

## Step 6: read your site as a crawler does

This is the half the checklist tools do, and it is quicker by hand than it sounds. Check these in order, because one near the top can undo everything below it.

1. **Can crawlers get in?** Open `yourdomain.com/robots.txt`. Look for rules that shut out OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot or Bingbot, or every crawler at once with `Disallow: /` under `User-agent: *`. The free [llms.txt checker](/tools/llms-txt-checker/) reads the file and lists each crawler for you. For Google, also open Settings, Search generative AI in Search Console: sites are included by default, but [that setting](https://support.google.com/webmasters/answer/16908024) can take a whole site out of AI Overviews and AI Mode.
2. **Are your words in the page code?** Open your home page, choose View source, and search for a sentence you can see on the page. If it is not there, a script adds it later, and most AI crawlers do not run scripts.
3. **Does the page say who you are?** A title and a description that name what you do and where. Organization markup, so that an engine does not have to guess.
4. **Do you answer questions on the page?** Prices, places and limits in text, with FAQ markup where the page really is questions and answers.
5. **The small things.** HTTPS, a sitemap.xml, and last an llms.txt, which no major engine has said it uses.

The [AEO checker](/tools/aeo-checker/) page lists all nine things worth checking on a site, in the order they matter.

## Step 7: write the fixes, most important first

You now have more findings than you can act on. Sort them with one rule: fix what the other fixes depend on.

1. **Readable.** Crawlers shut out, or words that are not in the page code. Nothing below works until this does.
2. **Known.** Wrong facts about you, and no clear statement of who you are. Fix the source of each mistake, and give engines one paragraph they can quote.
3. **Named.** The pages from step 4 that you are not on. This is usually the longest job and the one that moves the count most.
4. **Cited.** A page of your own for each search you are missing from, answering it better than the pages that are cited now.
5. **First.** A reason to be put at the top: recent reviews, a clear speciality, numbers a rival cannot show.

Beside each fix write who does it and how long it takes. A list with names and hours gets done. A list without them gets filed.

Use the monthly numbers from step 1 to choose between two fixes of the same kind. A search made 480 times a month that you are missing from costs more than one made 70 times.

## Step 8: ask again in a month

Run the same five searches on the same engines in the same way, about a month after the fixes went live. Engines need time to read pages again, and the pages they build answers from change slowly.

Compare the count from step 3. With 50 answers, a move of two or three is noise. Look for a change you would notice without a calculator.

If you want the count every week from then on, that is no longer an audit. It is tracking, and [a tracker](/guides/ai-visibility-tracker/) does it better than a spreadsheet.

## What a finished audit looks like

Our [sample audit](/ai-visibility-report/sample) shows every step above for a made-up hotel in Lisbon: the five searches, 49 answers on six engines, who is named instead, the pages the answers came from, what the engines say about the hotel by name, the crawler view and nine fixes in order.

It was not made by hand. The [AI search audit](/tools/ai-search-audit/) runs steps 1 to 3 for one search on three engines, free, in about a minute, so you can read your own answers before you spend an afternoon. The full audit does all eight steps for $29, once.
