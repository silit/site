---
title: "How to get cited by ChatGPT: how it picks the pages it links"
description: "Where ChatGPT finds the pages it cites, what 2026 research says about which ones get picked, and the changes that make your page one of the sources."
date: 2026-11-25
category: "AI search"
tool: "chatgpt-visibility-checker"
readMinutes: 7
---

A citation is a link. When ChatGPT searches the web before it answers, it shows the pages it used: small links inside the text and a list of sources under the answer. Being one of those pages is being cited.

It is not the same as being named. A business can be named because a review site mentioned it, and then the citation goes to the review site. Our guide to [ChatGPT brand mentions](/guides/chatgpt-brand-mentions/) covers the names. This one is about the links: where ChatGPT finds the pages it cites, what is known about how it picks them, and what makes your page one of them.

## Where ChatGPT finds the pages it cites

With search on, ChatGPT turns the question into one or more web searches, gathers the pages that come back, reads some of them and writes its answer, citing the ones it used.

**The searches run on several sources at once.** OpenAI's [publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) says that any public website can appear in ChatGPT search, and OpenAI has said it works with a variety of search providers. [Research by Peec AI](https://docs.peec.ai/research/chatgpt-search-result-providers) in September 2026 traced ChatGPT's results to an index of OpenAI's own plus at least eight outside sources, among them Google results, Bing in Deep Research, and Yelp and TripAdvisor for local businesses. There is no single index to get into.

**OpenAI's own crawler is OAI-SearchBot.** OpenAI's [crawler documentation](https://developers.openai.com/api/docs/bots) states that sites opted out of OAI-SearchBot are not shown in ChatGPT search answers, only as plain navigational links, and that a change to robots.txt takes about 24 hours to reach its systems. OpenAI's other agents are separate: GPTBot collects pages for training, ChatGPT-User opens a page when a person asks ChatGPT to, and OAI-AdsBot checks the pages behind ads. None of them decides whether you can appear in search.

**There is nothing to submit.** No form, no feed and no paid way in. A page becomes a candidate by being found in the places ChatGPT searches.

## What decides which pages get cited

OpenAI has not published how it chooses sources. The most useful public evidence so far is a [study of ChatGPT's live web search](https://arxiv.org/abs/2610.15382) that recorded its searches and citations for 80 questions between March and July 2026, across four model versions. Four of its findings matter to a business:

1. **The pages it gathers change from one run to the next.** Asked the same question again, ChatGPT often found different pages. Between 41 and 45% of the pages it gathered turned up in only one run.
2. **Pages that keep turning up are the ones it cites.** The more runs a page appeared in, the more likely it was to be cited. The pattern was stronger for whole websites than for single pages.
3. **Position in the search results helped only a little.** A high rank predicted a citation, but weakly.
4. **A recent date alone did not help.** The publication date was close to no signal at all.

Read together, ChatGPT cites the websites that show up for a subject again and again, across the different searches it runs for one question. A page that ranks for one wording is fragile. A site that covers the subject from several angles, and is found whichever way the question is put, is the one that gets cited.

The same study found that Google's results and OpenAI's own search API together held only 26 to 28% of the pages ChatGPT cited, and about half of the websites. Ranking in Google is useful, but it does not tell you whether ChatGPT will cite you.

## How to become a page ChatGPT cites

### 1. Let it in

- **Allow OAI-SearchBot in robots.txt.** A rule for all crawlers that shuts out a folder shuts it out too, so read the whole file.
- **Put the words in the page code.** Most AI crawlers do not run JavaScript. If your text only appears once scripts have loaded, they read an almost empty page. The free [AEO checker](/tools/aeo-checker/) reads your robots.txt and your page code the way a crawler does.
- **Get indexed by Google and Bing.** Send your sitemap to Google Search Console and to Bing Webmaster Tools. Neither promises anything in ChatGPT, but both feed the searches it runs.
- **Leave noindex off the pages you want cited.** OpenAI's FAQ names the noindex tag as the way to keep a page out of ChatGPT.

### 2. Write each page for one question

ChatGPT cites a page for a specific thing it says in the answer. Make that thing easy to find.

- One page per question your customers ask, with the answer in the first two sentences.
- Headings that say what each section answers.
- Facts in plain text: prices, numbers, names, places and dates. A sentence can be quoted. A price inside an image cannot.
- A table where a reader would compare options.

### 3. Cover the subject, not one wording

The study's strongest signal was a website turning up again and again. So write the pages around the main question as well: what it costs, how long it takes, who it suits, the alternatives, how to choose. Link them to each other. A site with eight good pages on a subject is found under more wordings than a site with one.

### 4. Publish something only you have

When ChatGPT states a figure, it cites where the figure came from. Your own prices, your own numbers, a small survey of your customers, a dated price list: a fact nobody else has makes your page the only possible source for that sentence.

### 5. Be on the other pages it searches

Round-ups, directories and review sites in your field are cited all the time, and for local businesses Yelp and TripAdvisor are among ChatGPT's sources in the Peec AI research. A listing there does not cite your website, but the listing becomes a source that names you. The free check on this page shows which pages ChatGPT read for your customers' question, so you can see which of them name your rivals and not you.

## How to check whether you are cited

1. **Ask the way a customer would.** Use ChatGPT with search on, in a temporary chat, and leave your name out of the question.
2. **Open the sources.** Write down which websites are cited, not only which pages. The study found websites much steadier than single links.
3. **Ask two or three times.** One answer is a sample of one.
4. **Look in your analytics.** OpenAI's FAQ says ChatGPT adds `utm_source=chatgpt.com` to the links it sends, so visits from its answers can be filtered.

## What does not get you cited

- **An llms.txt file.** OpenAI's crawler documentation does not mention it.
- **Unblocking GPTBot.** It collects pages for training, not for search. Allow or block it as you prefer: it is a separate setting.
- **A new date on an old page.** In the study, the date itself predicted almost nothing, and readers notice a changed date on unchanged content.
- **Paying for placement.** ChatGPT now shows ads, but an ad is not a citation, and OpenAI describes no paid way into the sources of an answer.

## Questions

### Can I submit my website to ChatGPT?

No. There is no submission form. OpenAI says any public website can appear in ChatGPT search, and a page becomes a candidate when the searches ChatGPT runs find it.

### How long after fixing robots.txt can I be cited?

OpenAI says its systems take about 24 hours to adjust to a robots.txt change. After that the page still has to be found for the question, which for a new page can take weeks.

### Do I need to rank first on Google to be cited?

No. In the 2026 study, Google's results and OpenAI's own search API together held only 26 to 28% of the pages ChatGPT cited. A good Google rank helps, but it is not the gate.

### Does ChatGPT cite the same pages every time?

Not always. In the study, between 41 and 45% of the pages ChatGPT gathered turned up in only one run. Websites were steadier than single pages, which is why it pays to track the websites that are cited rather than the exact links.
