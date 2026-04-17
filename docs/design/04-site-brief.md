# Site brief - page by page

A build spec. Hand this to a coder (or future-you) and they should be able to start without asking questions.

Voice across the site: simple human English. No AI jargon, no corporate fluff, no em dashes. Direct. Dry wit allowed. Match the research doc's tone.

---

## Site-wide

### Routes

```
/                        Home
/work                    Case studies index
/work/[slug]             Individual case study
/projects                Smaller project grid
/about                   About page
/now                     What I am working on right now
/uses                    Tools and setup (optional, ship later)
/404                     Not found
/rss.xml                 RSS if writing gets added later
/sitemap-index.xml       Generated
```

Use `work` not `case-studies` - shorter URL, reads better in link previews.

### Global navigation

Top bar, sticky, 56px tall. Left side: "Sandeep Danda" as a link to `/`. Right side: `Work · Projects · About · Now`. No hamburger on mobile - these 4 items fit on one line at 360px.

Theme toggle: bottom-right corner, fixed. Sun/moon icon. Remembers choice in localStorage.

### Global footer

Kept short. One line at top, one line at bottom, separated by a thin border.

```
Top line:    Built with Astro. Hosted on Cloudflare Pages. Source on GitHub.
Bottom line: (c) 2026 Sandeep Danda  ·  Updated [last deploy date]  ·  RSS
```

No social icon soup. Link to GitHub, LinkedIn, email as plain text inline in the bio on `/about` instead.

### Empty states, global

If a list has no items yet: `Nothing here yet. Check back soon.` Do not apologize. Do not write "coming soon" with emoji.

### Error messages, global

Never say "Oops!" or "Uh oh!". If a form fails: `Something broke. Try again or email me directly.`

---

## Home - `/`

### Goal

Prove in 20 seconds that you are a senior-track engineer who ships real work in a domain most people do not touch. Push the visitor toward one case study.

### Who opens it

Recruiters (15-30 seconds, skim only). Hiring managers (2-5 minutes, may click through). Peer engineers (depends on how they got here).

### Content blocks, top to bottom

**Block 1 - Name line**
One line, large.
```
Sandeep Danda
Software engineer in Seattle. I build distributed backend systems
and ship AI side projects in my spare time.
```

**Block 2 - Signature interaction (the embedding-space scatter)**
See doc 02. Full-width, 360px tall on desktop, 260px on mobile. A grid with a handful of clustered points, a query point, thin neighbor lines, and a subtle pulse drifting through nearest neighbors. Caption below: `A query drifts through its neighbors in embedding space. This is how my movie recommendation app finds films that feel similar.`

**Block 3 - Featured case study**
One card, full-width. Large title, one-sentence summary, a "Read the case study" link.
```
Not Another Rewatch
A movie recommendation app that runs semantic search locally,
without an OpenAI bill. Built on DynamoDB single-table design.

Read the case study ->
```

**Block 4 - Everything else**
A short bulleted list, 3-4 items. Format: title, one-line description, link.
```
More work
- All case studies - Deep writeups on things I built.
- ReadLoot - A vocabulary RPG for people who read too much. Project page.
- Writing - The occasional long post. Index.
```

**Block 5 - About footer**
Three to four sentences. What you do at work, what you like building outside work, where you are. Ends with a link to the full about page.

```
I am based in Seattle and have been at Amazon for a few years,
mostly working on distributed backend systems. I like building
things with small teams, small dependencies, and long feedback
loops. More about me ->
```

### Anti-patterns for this page

- No skills badge row (AWS / React / Docker icons). Explicitly removed in research doc.
- No "Hi, I'm Sandeep" wave emoji.
- No full resume dump on the homepage. Link only.
- No "currently seeking new opportunities" banner. Put it on LinkedIn if you need it.
- No carousels, no parallax, no three.js.
- No testimonials unless they are real and attributed.

### Success criteria

1. Recruiter can find your name, title, company, and a resume link in 10 seconds.
2. Hiring manager clicks into the featured case study within 60 seconds.
3. The page loads in under 1 second on a 3G connection (Lighthouse).

---

## Work index - `/work`

### Goal

Let a visitor pick which case study to read based on one-line summaries.

### Who opens it

Hiring managers who already decided you might be interesting and want to see more.

### Content blocks

**Block 1 - Header**
```
Work
Deep writeups on systems I built or broke.
```

**Block 2 - Case study list**
Vertical list, not a grid. Each item:
- Title (linked)
- One-line summary (plain text)
- Year, tech tags (small, muted)
- Reading time

Example:
```
Not Another Rewatch
Semantic movie search without an API bill.
2026  ·  DynamoDB, TypeScript, Python  ·  8 min read

ReadLoot
A vocabulary RPG for readers who look up too many words.
2025  ·  TypeScript, React, SQLite  ·  6 min read
```

Order by: most recent first. Featured case study first if you want to push it.

### Anti-patterns

- No filters by tag on v1. Add later if you have 10+ case studies.
- No "popular" or "trending" badges. You are not Medium.
- No preview images next to each item. Keep it textual and fast.

### Success criteria

Visitor picks one case study to click into within 30 seconds.

---

## Case study - `/work/[slug]`

### Goal

Prove you can build, reason about tradeoffs, and explain both in writing. The case study is the single most important page on the entire site.

### Who opens it

Hiring managers and senior engineers, time budget 5-15 minutes.

### Content blocks

**Header**
```
Case study: [Title]
[One-line subtitle, the hook]
[year]  ·  [reading time]  ·  [back to work]
```

**Summary box (above the fold)**
A short fenced block with 3-5 bullets. What it is, stack, my role, status (shipped / WIP / archived), link to repo if public. Lets anyone who will not read the full thing still get the shape.

**Body sections** (use these as H2 headings, adjust wording per case study):
1. `What it is` - one paragraph
2. `Why I built it` - context and problem
3. `What I picked and why` - stack, architecture, one key tradeoff
4. `What broke and how I fixed it` - the honest part
5. `What I would do differently` - senior-level self-critique
6. `Metrics or results` - numbers if available, "too early to say" if not

**Inline visuals**
One or two screenshots or diagrams. Captions in muted text. Never more than three visuals - if you need more, they go in an appendix section.

**Footer**
```
More case studies ->
```

### Microcopy

- Metadata block separator: middle dot `·` with spaces, not pipes.
- Code blocks: language label in the top-right of each block.
- Callouts: one style for "Note", one for "Gotcha". No color explosion.

### Anti-patterns

- No table of contents unless the post is over 2000 words.
- No social share buttons. People who want to share already know how.
- No newsletter signup mid-post. Zero.
- No "Conclusion" heading. End the post when it ends.

### Success criteria

1. A senior engineer reads to the end.
2. They could describe the tradeoff in the post to a colleague from memory.
3. They click to the repo or the next case study.

---

## Projects - `/projects`

### Goal

Show the breadth of what you ship. Smaller and lighter than case studies. Mostly one-paragraph entries with a link.

### Who opens it

Curious visitors who already read a case study and want to see what else you make.

### Content blocks

**Header**
```
Projects
Smaller things I have shipped or maintain. Some finished, some ongoing.
```

**List**
A two-column grid on desktop, one-column on mobile. Each tile:
- Name (linked to repo or demo)
- One sentence description
- Status: `Active`, `Paused`, or `Archived` (plain text, color-coded muted)

Example:
```
ReadLoot                                    Active
A vocabulary RPG for readers. XP for
looking up words, bosses for forgotten ones.

not-another-rewatch                         Active
Movie recommendations with local embeddings.
See the case study for the story.

fake-news-detection                         Archived
Grad school. Kept for honesty.
```

### Anti-patterns

- No deploy status badges, no npm download counters, no star counts. All noise.
- No separate "featured project" row. If it is featured, it is a case study.

### Success criteria

Visitor finds one more thing to click.

---

## About - `/about`

### Goal

Personal context in a way that helps a hiring manager place you. Not a resume dump.

### Who opens it

People who already know you might be interesting and want more.

### Content blocks

**Header photo (optional)**
One photo, square, modest size. Casual, not a LinkedIn headshot if you can help it. Skip if you do not have a good one.

**Bio, three short paragraphs**
Sample:
```
I am a software engineer in Seattle, working at Amazon on
distributed backend systems. My day-to-day is mostly Java and
the kind of problems that show up when data has to move
reliably between places at scale.

Before that I was in grad school, and before that I shipped
full-stack apps for small teams. Java and Spring Boot at work,
TypeScript and React on my own projects. Comfortable in Python
when the problem calls for it.

Outside of work I build small things - most recently a movie
app that does semantic search without calling out to an LLM,
and a vocabulary RPG for people who read too much.
```

**Links**
Plain text, inline. No icons.
```
Email: <first>.<last>@gmail.com
GitHub: github.com/<handle>
LinkedIn: linkedin.com/in/<handle>
Resume: resume.pdf
```

**Optional: what I am looking for**
One short section if you are actively job hunting. Remove when you are not.
```
What I am looking for
Senior engineering roles where I can keep working on distributed
systems and also build things end-to-end. Remote or Seattle.
```

### Anti-patterns

- No timeline of every job since college. The resume has that.
- No "My passions include..." list.
- No testimonials from former colleagues. Put those on LinkedIn.
- No DALL-E generated profile art.

### Success criteria

A hiring manager can pitch you to their team from this page in 30 seconds.

---

## Now - `/now`

### Goal

Prove the site is alive. Acts as an anti-staleness signal.

### Who opens it

Repeat visitors. Interviewers preparing for a call. Other engineers you have linked the page to.

### Content blocks

**Header**
```
Now
What I am working on this month. Updated [date].
```

**Bulleted list**, current month only:
```
- Shipping the next phase of not-another-rewatch (user profiles and watch history).
- Reading: "Designing Data-Intensive Applications" (finally, yes, again).
- Working on a side project in Rust to see if I like it.
- Building this portfolio site. If you are reading this, it worked.
```

**Updated timestamp at bottom**: `Last updated: Month DD, YYYY`. If older than 60 days, show a subtle "This is getting stale" note to yourself (only visible in dev mode).

### Anti-patterns

- No year in review posts - that is blog territory.
- No goals or quarterly OKRs. Inside-baseball.
- No "listening to" or "watching" unless you want to maintain it forever.

### Success criteria

1. You update it at least once a month.
2. A repeat visitor can tell at a glance the site is maintained.

---

## 404 - `/404`

### Goal

Not be annoying.

### Content

```
404
That page does not exist here. Try one of these:

- Home
- Work
- About
```

### Anti-patterns

- No ASCII art unless it is very good.
- No "Lost in the void" cute copy.
- No auto-redirect.

### Success criteria

Visitor clicks one of the three links.

---

## Launch checklist

Before first deploy:

- [ ] Home page with the partition map and one featured case study
- [ ] One full case study (not-another-rewatch recommended)
- [ ] `/about` with bio and links
- [ ] `/now` with current month content
- [ ] `/404` routes correctly
- [ ] Global footer with last-deployed timestamp
- [ ] OG image on home and the one case study
- [ ] JSON-LD Person schema on home
- [ ] sitemap.xml generated and linked
- [ ] Cloudflare Web Analytics script added
- [ ] Lighthouse score 95+ on all four categories

Can ship without: projects grid, second case study, RSS, `/uses`. Add post-launch.

---

## Voice check

Before you ship any page, run this checklist on the copy:

- [ ] Any em dashes? Replace with `-` or rewrite.
- [ ] Any of these words: `leverage`, `utilize`, `facilitate`, `streamline`, `empower`, `passionate`, `journey`? Delete or replace.
- [ ] Does any sentence start with "I'd be happy to" or "Let me"? Delete.
- [ ] Does the copy sound like you explaining it to a teammate? If no, rewrite.

**Confidence**: Task High, Explanation High.
