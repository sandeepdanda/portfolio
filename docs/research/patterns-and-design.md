# Portfolio Patterns and Design - 2026

Written for Sandeep (Amazon SDE 1, AWS Payments Core). No implementation code here. Just what works, what does not, and why.

Verified April 2026. Where I could not reach a live site from this environment, I flag it.

---

## 1. What hiring managers actually read

Two different audiences open your portfolio:

**Recruiters (15 to 30 seconds).** They skim. They want:
- Your current company and title
- One line on what you do
- Location and work authorization status
- A resume link that works
- A LinkedIn that matches

That is it. If they spend more than 30 seconds, something caught their eye (usually a logo they recognize or a job title they are hiring for).

**Hiring managers and senior engineers on the loop (2 to 5 minutes).** They want proof you can do the job. They look for:
- One or two deep writeups on a real system you built or debugged
- Tradeoffs, not just "I built X". What did you pick? What did you reject? Why?
- Evidence of scope. Did you own a feature, a service, a team effort?
- Writing clarity. If your writing is sloppy, they assume your code is too.
- Signs of curiosity. Side projects, blog posts, OSS contributions, conference talks.

Sources:
- [Gergely Orosz on technical portfolios](https://blog.pragmaticengineer.com/how-to-stand-out-applying-for-software-engineering-jobs/)
- [Rands, "The Rands Test" for engineering org health](https://randsinrepose.com/archives/the-rands-test/) - context on what senior engineers value
- [Staff Eng archetypes](https://staffeng.com/guides/staff-archetypes/) - useful for framing your own "what do I do" line
- [Will Larson on promotion packets](https://lethain.com/promotion-packet/) - same material that makes a good portfolio

**What recruiters skim that hiring managers ignore:** badge rows (AWS, React, Docker icons). They signal nothing at the senior level. Everyone your target bar has those. Replace them with specifics.

**What hiring managers read that recruiters ignore:** case studies. A recruiter does not click through to "how I debugged a cross-partition data sync issue". A staff engineer on the loop does. Write both.

---

## 2. Senior-engineer portfolios worth studying

I picked these to cover different approaches. Verify each one before copying. URLs drift.

### [Brittany Chiang - brittanychiang.com](https://brittanychiang.com)
Classic developer portfolio. Single-page, left nav with scrollspy, right side scrolls through About, Experience, Projects, Writing. Dark mode with one accent color (green). Every job has one paragraph and a tech stack pill row. Each project links either to a live demo or a writeup. No fluff.

What to steal: the experience timeline layout. Hover states on the nav. Keyboard-accessible. No animations that get in the way.

What to avoid: her layout has been cloned to death. If you ship it verbatim, people notice.

### [Josh Comeau - joshwcomeau.com](https://joshwcomeau.com)
Writing-first. The homepage is a blog roll with hand-drawn illustrations per post. Heavy on interactive demos inside posts (Framer Motion + React). Strong personal voice.

What to steal: the "mini project" format inside blog posts. If you explain something with a working widget instead of a screenshot, readers remember it.

What to avoid: this only works if you write. A lot. If you ship 1 post a year, the homepage looks dead.

### [Lee Robinson - leerob.io](https://leerob.io)
Pragmatic, Next.js-native. Homepage is bio + project highlights + recent posts. Dark by default. Uses his own site as a live demo of what Next.js can do (view transitions, edge functions, MDX). Code is [open source on GitHub](https://github.com/leerob/site) - fork it if you want. Last updated recently. Actively maintained.

What to steal: the structure. Bio at the top, "what I am working on now" section, projects grid, blog list. Short. Scannable.

What to avoid: cloning the visual style 1:1. Half the Vercel ecosystem already did.

### [Rauno Freiberg - rauno.me](https://rauno.me)
Design-engineer portfolio. The entire site is a showcase of UI craft. Custom cursor, micro-animations, command palette, tasteful transitions. Linear designer. If the job is "design engineer", this is the north star.

What to steal: the taste. Not the specific effects. The restraint.

What to avoid: over-indexing on animation if your target role is backend or infra. It sends the wrong signal.

### [Dan Abramov - overreacted.io](https://overreacted.io)
Writing-only portfolio. Literally a blog. No projects page, no "about" theater. The posts are the resume. Works because Dan is Dan. Harder to pull off if you do not have an existing audience.

What to steal: the idea that writing is enough if it is good enough. One deep post beats ten shallow ones.

What to avoid: the minimalism if you have no content yet. An empty blog is worse than no blog.

### [Linus Lee - thesephist.com](https://thesephist.com) / [linus.zone/now](https://linus.zone/now)
Research and side-project heavy. Lots of small demos linked from the homepage. "Now" page showing what he is currently building. Writing is deep and weird in a good way. AI and tools-for-thought focus.

What to steal: the "now" page. Cheap signal that your site is alive.

What to avoid: trying to match his output cadence. He ships a lot.

### [Maggie Appleton - maggieappleton.com](https://maggieappleton.com)
Digital garden model. Notes, essays, and illustrated explainers, all interlinked. Organized by topic clusters, not chronology. Uses [TK Rankings: Seedling, Budding, Evergreen](https://maggieappleton.com/garden-history) for post maturity.

What to steal: the "garden" framing if you have half-finished thoughts you do not want to hide. It removes the pressure of "every post must be polished".

What to avoid: if you are not going to maintain 50+ notes, skip it.

### [Rich Harris - rich-harris.dev](https://rich-harris.dev)
Minimalist. Svelte creator, so he gets away with "hi I made Svelte". Single page, bio, a list of talks, a list of projects. Black and white. No animations. Very senior move.

What to steal: the confidence of omission. You do not need a dedicated "skills" section if your work makes them obvious.

What to avoid: matching this minimalism before you have the track record to back it up. For someone at SDE 2 aiming at senior, you need to show more work.

### Runners up, worth a look but did not make the 8

- [Delba de Oliveira - delba.dev](https://delba.dev) - clean Next.js + MDX starter vibe. [Source on GitHub](https://github.com/delbaoliveira/website)
- [Julian Schrenzel - jschr.dev](https://jschr.dev) - I could not verify this URL from my environment. Flag and check manually.
- [Cassidy Williams - cassidoo.co](https://cassidoo.co) - newsletter-first, which is a pattern if you write a newsletter. Probably not your move.
- [Tania Rascia - taniarascia.com](https://taniarascia.com) - older but still a reference for a writing-heavy Gatsby (now Next) site.
- [Wes Bos - wesbos.com](https://wesbos.com) - more course-creator than portfolio now.

---

## 3. Design trends that matter in 2026

### Typography

**Serif revival is real.** Editorial-looking sites use serifs for headlines now. Look at [vercel.com](https://vercel.com) and most Stripe-adjacent marketing for examples. Good choices:
- [Inter](https://rsms.me/inter/) - variable, free, boring in the best way. Default pick.
- [Geist and Geist Mono](https://vercel.com/font) - Vercel's own font. Feels modern without being weird.
- [Satoshi](https://www.fontshare.com/fonts/satoshi) - clean sans, common on indie portfolios.
- [GT Sectra](https://www.grillitype.com/typeface/gt-sectra) or [Fraunces](https://fonts.google.com/specimen/Fraunces) - serifs for headlines if you want editorial.
- Mono for code. [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [Berkeley Mono](https://berkeleygraphics.com/typefaces/berkeley-mono/), or Geist Mono.

**Variable fonts are standard.** Use them. One file, every weight and width you need, smaller bundle than multiple static files.

### Color

**Muted palettes with one accent.** The Tailwind-default "vibrant everything" look is out. What works in 2026:
- A single neutral base (warm white or cool gray or near-black)
- One accent (amber, indigo, green, whatever). Used sparingly. Links, hover states, callouts.
- A second neutral for body text that is not pure black or pure white. Pure black hurts eyes in dark mode.

**Dark mode default is a status signal.** Senior engineers mostly live in dark IDEs and tolerate dark sites better. Most 2026 portfolios ship dark-first with a toggle for light. Use a system-preference detector, then let users override.

**Do not use Tailwind's default colors without adjustment.** Everyone recognizes `indigo-500` and `slate-900`. Shift them slightly or pick a custom palette. [uicolors.app](https://uicolors.app) generates palettes from a hex.

### Motion

**Framer Motion is still the default for React.** View Transitions API is showing up (Next.js 15.2 experimental, Chrome and Safari support), but library coverage is uneven. Framer Motion handles the same cases with less pain.

**Restraint wins.** Three rules that hold up:
1. Page transitions should take under 300ms or not exist.
2. Hover effects on cards are fine. Hover effects on every element feel tacky.
3. Scroll-jacking is dead. Let users scroll.

**What reads as cheap in 2026:**
- Gradient backgrounds with animated blobs
- Typewriter effects on headlines (the README one you have is a classic example)
- Parallax on the whole page
- Cursor followers that are not subtle

**What still reads as premium:**
- Text that fades up as it enters viewport, once
- Subtle scale-on-hover on cards
- Staggered entry animations on lists
- Physics-based drag and springs on interactive elements (see Rauno's site)

### Layout

**Editorial beats grid for bio and writing.** A centered column 640 to 720 pixels wide, with generous line-height, is the default for readable content. Grids are for project showcases and nothing else.

**Scroll storytelling is a niche.** It is cool but expensive to maintain. Skip unless a specific case study needs it.

---

## 4. Case study vs GitHub link

A GitHub link is a commitment to homework. Hiring managers open one and scan the README for 30 seconds. If the README is weak, they close the tab. You never know.

A case study on your own site gives you control over the narrative.

### When a GitHub link is enough
- LeetCode solutions repo
- Config dotfiles
- Small tools and scripts
- Forks with your fix
- Anything you are not proud of but want to keep public for transparency

### When a case study is the move
- Any project you want to talk about in an interview
- Anything with non-obvious tradeoffs (why DynamoDB and not Postgres, why local embeddings and not OpenAI)
- Anything where the process is the story, not the code

### What makes a good case study

Structure that holds up across the portfolios I studied:

1. **One line on what it is.** "A movie app that suggests films based on mood." Not "a Spring Boot application."
2. **Why you built it.** Context. Problem you were solving, pain point you were scratching, bar you were trying to clear.
3. **What you picked and why.** Stack, architecture, one key tradeoff. Keep it under 300 words.
4. **What you would do differently.** This is the part that separates senior-level writing from junior-level "tutorial blogging". Honest self-critique.
5. **One or two visuals.** A screenshot, a short screen recording, or an architecture diagram. Not all three.
6. **A link to the repo.** Last, not first.

**Length guidance.** 500 to 1500 words. Under 500 feels like you did not care. Over 1500 is unread.

**Screenshots vs metrics.** Both beat code snippets. Nobody wants to read inline code on a portfolio. Link to the file in the repo instead. Metrics ("loads 45K movies in under 200ms on a local DynamoDB") land hard.

---

## 5. Does a blog still matter in 2026

Short answer: yes, if you are going to write more than 3 good posts a year. No, if you are going to ship one post and abandon it.

### Who benefits

- **People switching roles or companies.** Writing about what you want to do next is how you get noticed for it. If you want to move from payments to AI infra, write about AI infra.
- **Specialists.** If you are the person on your team who knows observability cold, write about observability.
- **People who want to interview for senior roles.** A blog is evidence of communication skill. Senior loops care about this.

### Who should not bother

- If you cannot commit to 4+ posts a year, do not launch a blog. An empty blog on your portfolio hurts.
- If your target is a very junior role, a blog rarely moves the needle. Ship projects instead.

### Alternatives that cost less

- **LinkedIn posts.** Lower commitment, your audience is already there. Good for 200 to 400 word takes.
- **Twitter/X threads.** Diminishing returns in 2026 but not dead.
- **OSS contributions.** A few merged PRs on a well-known project signal more than 10 blog posts for some roles.
- **Conference talks.** Expensive in time, huge in signal. One good talk goes on your portfolio forever.
- **Paper club writeups.** Summarize a paper you read. Great for AI/ML roles.

### Blog format that holds up

- Post dates are important. Old dates are fine. "Last updated 2022" tells people you stopped.
- Reading time helps. 5 minute posts get read. 25 minute posts get bookmarked and forgotten.
- RSS still matters for engineering audiences.
- OG images per post. See section 6.

---

## 6. SEO basics for personal sites

You are not trying to rank for "best react hooks tutorial". You are trying to:
1. Show up for your name
2. Show up cleanly in link previews when someone shares your site
3. Not get filtered out by LLM search tools like Perplexity and Kiro

### What moves the needle

- **Title tags per page.** "Sandeep Danda - Software Engineer" on the home page. "Case Study: Not Another Rewatch" on a case study. Not "Home | Portfolio".
- **Meta descriptions per page.** 140 to 160 characters. Written for humans, not robots. Google uses them, LLMs also pull them.
- **OG images per page.** Dynamic OG images (Next.js has a [built-in generator](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image), so does Astro via [satori](https://github.com/vercel/satori)) make your site look way better when shared in Slack, LinkedIn, Twitter. Worth the 2 hours.
- **JSON-LD Person schema.** Add a [Person schema](https://schema.org/Person) to your homepage. Google's Knowledge Graph uses it. Link your LinkedIn, GitHub, and email.
- **Sitemap and robots.txt.** Generate a sitemap.xml automatically. Most frameworks do this. Let crawlers in.
- **Canonical URLs.** If you cross-post to Medium or dev.to, set a canonical back to your site.

### What does not move the needle

- Keyword stuffing in the body
- Meta keywords tag (dead since 2009)
- Backlink buying
- Google Search Console obsession for a site that gets 200 visits a month

### LLM search

If someone asks Perplexity "who is Sandeep Danda", it will only find you if:
- Your site shows your full name on the homepage in plain text
- Your schema.org tags are correct
- Your content is crawlable (not hidden behind JS that only renders client-side)

This is a real signal in 2026 and will be bigger by 2027.

---

## 7. Accessibility basics

Cheap wins. Worth doing even if you do not care, because they overlap with SEO and with generally better UX.

- **Semantic HTML.** Use `<nav>`, `<main>`, `<article>`, `<section>`, `<h1>` through `<h3>`. Not a pile of `<div>`. Screen readers and crawlers both care.
- **Keyboard navigation.** Tab through your site once. Can you reach every link? Can you see the focus ring? If no, fix it. Tailwind has `focus-visible:ring-2` etc.
- **Alt text on images.** Skip decorative images. For meaningful images, 1 short sentence. For charts and diagrams, longer.
- **Color contrast.** WCAG 2.2 AA means body text at 4.5:1 against its background. [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/) checks this in 10 seconds.
- **Reduced motion.** Respect `prefers-reduced-motion`. If the user asks to not have animations, do not animate. Framer Motion has `useReducedMotion`. Tailwind has `motion-safe:` and `motion-reduce:`.
- **Dark mode contrast.** Pure black backgrounds with pure white text hurt. Use `#0a0a0a` and `#e5e5e5` or similar. Tailwind's `zinc` scale works.
- **Skip links.** "Skip to main content" at the top for keyboard users. 4 lines of code, very senior-looking move.

**How to test:** run [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools. Aim for 95+ on Accessibility. Not because the score matters but because the warnings are a checklist.

---

## 8. What this means for Sandeep

Based on the research and your background (Amazon SDE 2, AWS Payments Core, side projects span AI + full-stack + Java/Spring), here is the opinionated take:

1. **Pick the hybrid model, not the minimal one.** You have a mix of deep work (payments, cross-partition data sync) and interesting side projects (not-another-rewatch with local embeddings, readloot vocabulary RPG). You need a site that shows both. That means: bio page, project showcase grid, 3 to 5 deep case studies, a blog with maybe 1 post at launch.

2. **Lead with the not-another-rewatch case study.** It is your strongest story: 17 shipped phases, DynamoDB single-table design, local semantic search without API bills, visual redesign with a clear editorial voice. That case study is your audition for "I can design and ship non-trivial systems end to end."

3. **Cut or archive the older grad school repos from the featured list.** fake-news-detection, movie-database, reinforcement-learning. They can live on your GitHub, but they should not appear on the portfolio front page. Hiring managers will see them and set the bar lower than your actual work deserves. If you want to show grad school work, put it in an "Early Work" section below the fold.

4. **Skip the skills badge row.** The "Python, Java, TypeScript, AWS, React, Docker" pill wall signals "I made a portfolio". Replace with specifics in bio prose: "Java 21 and Spring Boot at work, TypeScript and React on personal projects, comfortable in Python when the problem calls for it." Hiring managers read that as "he knows what each language is for."

5. **Dark mode default, one accent color, serifs on headlines.** You already have the muted-warm-editorial visual instinct from the not-another-rewatch Phase 12 redesign. Carry that here. Do not use a bright indigo or the default Tailwind palette.

6. **Write one case study before launch and one blog post within a month.** If you cannot commit to that, scope the blog out of v1. Empty blogs hurt.

7. **OG images, schema.org Person, sitemap on day one.** These are cheap and outsize the effort.

---

## Sources cited

Portfolios (verify each before using):
- https://brittanychiang.com
- https://joshwcomeau.com
- https://leerob.io
- https://rauno.me
- https://overreacted.io
- https://thesephist.com
- https://maggieappleton.com
- https://rich-harris.dev
- https://delba.dev
- https://wesbos.com
- https://cassidoo.co
- https://taniarascia.com

Writing and framing:
- https://blog.pragmaticengineer.com/how-to-stand-out-applying-for-software-engineering-jobs/
- https://staffeng.com/guides/staff-archetypes/
- https://lethain.com/promotion-packet/
- https://randsinrepose.com/archives/the-rands-test/

Fonts:
- https://rsms.me/inter/
- https://vercel.com/font
- https://www.fontshare.com/fonts/satoshi
- https://fonts.google.com/specimen/Fraunces

Accessibility and SEO:
- https://webaim.org/resources/contrastchecker/
- https://schema.org/Person
- https://developers.google.com/web/tools/lighthouse
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
- https://github.com/vercel/satori

**What I could not verify from my environment:** live load of each portfolio URL. I included them based on reputation and recent references. Before cloning a look, load the site and check it is still live and current.