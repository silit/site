---
title: "Webflow llms.txt: how to add it, with a template to copy"
description: "How to add an llms.txt file to a Webflow site: a template to copy, the upload in Site settings, how to check the file is live, and what it can and cannot do."
date: 2026-11-23
category: "Webflow"
tool: "llms-txt-checker"
readMinutes: 9
---

Webflow has a setting for llms.txt. You write a short text file, upload it in **Site settings**, publish, and the file is served at the root of your domain. The whole job takes about fifteen minutes, and most of that is deciding which pages to list.

This guide covers the file, the upload, how to check that it worked, and what to expect from it afterwards. That last part is less than most guides promise.

## The short version

| Question | Answer |
| --- | --- |
| Where is the setting? | Site settings, SEO tab, LLMs.txt |
| What do you upload? | One plain text file named llms.txt, in UTF-8 and under 100 KB |
| Where is it served? | At the root of your custom domain, after you publish |
| Where is it not served? | On the webflow.io staging address |
| Who writes the file? | You do. Webflow serves it, and does not create it or keep it up to date |

These limits come from Webflow's help article, [Upload an llms.txt file to your site](https://help.webflow.com/hc/en-us/articles/43240104183315-Upload-an-llms-txt-file-to-your-site). The setting has been there since July 2025.

## What goes in the file

An llms.txt file is a reading list for language models, written in Markdown. It names your site, says in a sentence or two what it is, and links to the pages worth reading. The format comes from the [llms.txt proposal](https://llmstxt.org/) and has few rules:

- **A title.** The first line starts with one `#` and names the site or the business. It is the only part the format requires.
- **A summary.** A line starting with `>` that says what you do, for whom and where.
- **Sections of links.** Each section starts with `##`. Each link sits on its own line, written `- [Title](https://address): a short note`. The note is optional.
- **An "Optional" section.** A section with exactly that name holds links a reader may skip when it is short of room.

## Step 1: write the file

Copy this, replace every line with your own, and delete the sections you do not need.

```
# Your business name

> One or two sentences that say what you do, for whom and where.

## Main pages

- [Services](https://yourdomain.com/services): what you offer and for whom
- [Pricing](https://yourdomain.com/pricing): the plans and what each includes
- [About](https://yourdomain.com/about): who runs the business, and where

## Guides

- [Blog](https://yourdomain.com/blog): answers to what customers ask most
- [Choosing a plan](https://yourdomain.com/blog/choosing-a-plan)

## Optional

- [Contact](https://yourdomain.com/contact)
- [Privacy policy](https://yourdomain.com/privacy)
```

A few choices make the file better:

- **List pages, not everything.** Ten to thirty links is plenty for most sites. The file is an index of your best pages, not a second sitemap.
- **Use full addresses on your custom domain.** Start every link with `https://` and the domain your site lives on, with `www` if your site uses it. A reader that fetched only this file has nothing to resolve `/pricing` against.
- **Write the summary for a stranger.** Say what you do, for whom and where, in the words you would use across a table. It is the first thing a reader of the file gets to.
- **Write notes in plain words.** "The plans and what each includes" tells a model what it will find. "Flexible pricing for every stage of growth" tells it nothing.
- **For CMS collections, list the collection page.** Link the blog page and the handful of posts you most want read. If you list every post, the file is out of date the next time you publish one.
- **Leave private pages out.** Anything in the file is an invitation to read it. Do not list staging pages, thank-you pages or anything behind a login.

## Step 2: save it as plain text

The file has to be plain text in UTF-8. Name it `llms.txt`, all in lower case.

- **On a Mac:** in TextEdit choose Format, then Make Plain Text, before you save. UTF-8 is the encoding it offers.
- **On Windows:** in Notepad choose Save as, set the file name to `llms.txt` and the encoding to UTF-8.
- **In a code editor** such as VS Code, a new file saved as `llms.txt` is already right.

Do not write the file in Word or Google Docs and export it. Those add formatting a plain text file cannot hold. The 100 KB limit is not one you will reach by accident: a file with thirty links is about 3 KB.

## Step 3: upload it in Webflow

1. Open your site and go to **Site settings**.
2. Open the **SEO** tab and scroll to **LLMs.txt**.
3. Click **Upload file** and choose your `llms.txt`.
4. Click **Save changes**.
5. **Publish** the site to your custom domain. The file is not live until you do.

To change the file later, edit it on your computer, upload the new version in the same place and publish again.

## Step 4: check that it is live

Open `https://yourdomain.com/llms.txt` in a browser, with your own domain. You should see your text exactly as you wrote it, with no page design around it.

Then run it through the free [llms.txt checker](/tools/llms-txt-checker/). It reads the file from your live domain, tells you which rule of the format a line breaks, and also reads your robots.txt to see whether AI crawlers are allowed in. That second check matters more than the first, for reasons further down.

If the file is not there, the cause is almost always one of these:

- **You looked on webflow.io.** Webflow publishes the file to custom domains only. On the staging address there is nothing at `/llms.txt`.
- **You saved but did not publish.** The upload is a site setting, and settings go live with a publish.
- **An old redirect is in the way.** Before the setting existed, the usual workaround was to upload the file as an asset and add a 301 redirect from `/llms.txt` to it. If your site still has that redirect, remove it under Site settings, Publishing, 301 redirects, so that the address serves the uploaded file itself.

## Should robots.txt point to llms.txt?

Some guides tell you to add a comment or a line to robots.txt that points to the file. It does nothing. A line that starts with `#` is a comment, and crawlers skip comments by design. A made-up line such as `LLMs-txt:` is not part of robots.txt, and no crawler has said it reads one.

The proposal has its own way to point at the file: a link in the page head. If you want to add it, go to **Site settings, Custom code, Head code** and paste:

```
<link rel="describedby" href="/llms.txt">
```

This is optional. The root of the domain is where anything that reads llms.txt already knows to look, and yours is there.

## What Webflow does not do

- **It does not write or update the file.** When you add a service, change your pricing page or rename a URL, the file stays as it was until you upload a new one. Put a reminder where you keep your publishing checklist.
- **It does not publish Markdown copies of your pages.** The proposal also suggests a `.md` version of each page. Webflow's help article says it supports the llms.txt file only. For Enterprise sites, Webflow added a separate setting in April 2026 that [converts pages to Markdown](https://webflow.com/updates/markdown-for-agents) when an AI agent asks for them.
- **It does not offer the API to every plan.** Reading and changing llms.txt through Webflow's API is for Enterprise workspaces. Everyone else uses the upload.

Our Webflow app, [AI SEO Deck](/webflow-apps/ai-seo-deck/), drafts an llms.txt from your published pages after it has read the site. Read the draft through and edit it before you upload it: you know better than any tool which pages matter.

## Does llms.txt help?

Add it because it is cheap, not because it will move anything soon. The evidence so far:

- **Many sites have one, and almost nobody fetches it.** [Ahrefs looked at 137,000 domains](https://ahrefs.com/blog/what-is-llms-txt/) in 2026 and found that 28% publish an llms.txt. Of the domains with a valid file, 97% received no request for it at all in May 2026.
- **Google does not ask for it.** Its guidance on [AI features in Search](https://developers.google.com/search/docs/appearance/ai-features) says you do not need new AI text files to appear in AI Overviews or AI Mode.
- **Webflow says so too.** Its own help article calls the format experimental and its effect unproven.

Where the file is read today is on documentation sites, by coding assistants that a developer points at the docs. If your Webflow site is a product's documentation, the file is worth more care. If it is a business site, the file is a small bet on the future.

## What matters more on a Webflow site

Two things in the same settings decide far more than llms.txt does.

**Your robots.txt.** It is in the same SEO tab. AI companies fetch pages with crawlers of their own, such as OAI-SearchBot for ChatGPT search and Claude-SearchBot for Claude. A rule that shuts one of them out removes you from that engine's answers, however good your llms.txt is. The [llms.txt checker](/tools/llms-txt-checker/) lists each crawler and whether your rules let it in.

**Text that is in the page.** Webflow publishes pages as finished HTML, so the words you type in the Designer are in the page code and a crawler can read them. What it will not see is anything a script adds later: a reviews widget, a pricing table loaded from another service, or items that appear only after a visitor presses "Load more". If something important lives in one of those, put it in the page as text too.

The rest of the work, from titles to FAQ markup, is in our [Webflow AEO checklist](/guides/webflow-aeo-checklist/).

## Questions

### Does Webflow create llms.txt automatically?

No. Webflow serves the file you upload and does not generate one. You write it, or a tool drafts it for you, and you upload it again whenever your pages change.

### Does llms.txt work on the free webflow.io address?

No. The file is published only to a custom domain, so the site needs a Site plan with a domain connected.

### Where is the LLMs.txt setting in Webflow?

In Site settings, on the SEO tab, in the section called LLMs.txt. It sits near the robots.txt and sitemap settings.

### Do I need an llms-full.txt as well?

No. An llms-full.txt holds the full text of a documentation site in one file. It is a habit of some documentation tools, not part of the proposal, and Webflow's setting takes the one file.

### How often should I update the file?

Whenever a page it lists changes its address or its purpose, and whenever you add a page that belongs on the list. For most business sites that is a few times a year.
