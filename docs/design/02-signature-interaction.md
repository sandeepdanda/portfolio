# Signature interaction concepts

The one thing someone remembers after closing the tab. Seven concepts, specific to your background. One recommended, one backup at the end.

Rules these follow:
- No generic hero sections
- No pulsing CTAs, no typewriter effects
- Must survive 30 seconds of attention
- Must work with reduced-motion (graceful fallback)

---

## 1. The partition map

**What the user sees**: a minimal map above the fold showing four unlabeled nodes connected by thin lines. Subtle pulses travel along the lines on different cadences. Hovering a line highlights it. The caption reads "Distributed systems - data moving between places."

**Why it fits**: "I build distributed backend systems" is the line on the homepage. Showing one silently says the same thing with less text. Works at any level of specificity - you never have to name what the dots are.

**Cost**: 6-10 hours. SVG + CSS animations.

**Risk**: reads as generic if not restrained. Keep the node count low, no tooltips with specifics, no labels.

---

## 2. The movie recommendation card

**What the user sees**: one card in the middle of the homepage titled "What Sandeep would recommend right now". It shows a film poster, one sentence of reasoning ("because you liked the atmosphere of X"), a star rating, and a refresh button. Clicking refresh pulls a new recommendation. Below the card, a line: "Powered by my own embedding search. No OpenAI, no API bills."

**Why it fits**: not-another-rewatch is your strongest AI-side-project story. Shipping a live piece of it on your portfolio is the portfolio-equivalent of bringing working code to an interview. The "no OpenAI" line signals cost-awareness, which senior engineers respect.

**Cost**: 12-18 hours. Needs the embeddings hosted somewhere (Cloudflare D1 or Turso free tier), a tiny API endpoint, and graceful failure if the endpoint is down. More infrastructure than anything else on this list.

**Risk**: if the endpoint is ever slow or broken the homepage looks broken. Must have a cached fallback. Also must not autoplay trailer video or do anything aggressive.

---

## 3. AWS CLI boot

**What the user sees**: the homepage loads with a blank terminal prompt. Two lines type themselves, fast:
```
$ aws portfolio describe --user sdad
$ aws portfolio list-case-studies
```
Then the "output" expands into the actual homepage below. The terminal stays in the top-left as a subtle always-visible element. Keyboard shortcut `:` opens a real command palette.

**Why it fits**: you live in `aws` CLI. The opening gesture tells a technical audience "this person thinks in command lines, not dashboards." It frames the rest of the site as "output" which is a cleaner mental model than "content."

**Cost**: 8-12 hours. Type-on animation, one command palette component, keyboard shortcuts.

**Risk**: clichéd if overdone. Works only if the palette is actually useful (navigate, search, toggle theme). If it's decorative, cut it.

---

## 4. The bento status grid

**What the user sees**: the homepage is a 3x3 grid of tiles. Each tile is a different shape and size. One shows a GitHub contributions heatmap. One shows "now playing" from Last.fm or Spotify. One shows the most recent CR or commit. One shows a link to the newest case study. One shows weather in Seattle. One shows a counter ("37 deploys this quarter"). The grid breathes - tiles update live.

**Why it fits**: this is the "digital dashboard of a person" pattern - see rauno.me, tomisloading.com. It shows you as someone who builds live systems, not someone who writes a static bio once a year.

**Cost**: 15-25 hours if you integrate real data sources. Less if you fake some of them on first launch and wire them up later.

**Risk**: high maintenance. If Last.fm stops working, the tile goes blank. Needs monitoring. Also can feel gimmicky if the tiles don't tell a story about WHO you are.

---

## 5. The spatial canvas

**What the user sees**: the landing page is a tldraw-style infinite canvas. Your bio is a sticky-note top-left. Case studies are cards you can pan to. Projects are smaller cards. There's a suggested path with arrows for first-time visitors but you can drag freely. Double-click zooms into a case study.

**Why it fits**: you work on distributed systems - the canvas metaphor matches. It also signals design-engineer taste. Very few portfolios do it and the ones that do stand out hard (see rauno.me, linear.app/design).

**Cost**: 25-40 hours. This is the most expensive option by a wide margin.

**Risk**: worst accessibility story of the list. Must have a "linear mode" fallback for keyboard and screen-reader users. Also slow on mobile unless carefully built.

---

## 6. Shipping log

**What the user sees**: a small muted badge on the homepage: "Last shipped: 3 days ago to /work/not-another-rewatch". Updates based on the most recent content change in the repo.

**Why it fits**: shows the site is alive without revealing anything about work rotations or production systems. Pure signal of "this person maintains what they publish."

**Cost**: 3-4 hours. Reads last-modified times from the content collection, picks the most recent, formats it.

**Risk**: almost none.

---

## 7. The "build log" header

**What the user sees**: across the top of every page, a single line in monospace: "Last deployed: 2 hours ago · commit 4a8b2f · 12,847 bytes of HTML". Numbers update from the actual build. Clicking expands into a short changelog of recent site changes.

**Why it fits**: shows the site itself is a project you maintain. Tells any engineer looking at it that you think about deploys, metrics, and observability. Zero marketing fluff - pure information density.

**Cost**: 3-5 hours. Build-time injection of commit SHA and timestamp. Changelog is a markdown file you edit when you ship.

**Risk**: almost none. Low-effort, high signal. Could live alongside any of the bigger concepts above.

---

## Recommendation

**Primary: an embedding-space scatter visualization.**

Concept 1 (the distributed systems map) is a fine idea but the embedding scatter is stronger because:
1. It's visibly tied to one of your real side projects (the movie recommendation app), so the visual and a case study reinforce each other.
2. Nothing about it depends on day-job information. Pure public-safe content.
3. A scatter with a drifting pulse through nearest neighbors is visually interesting without being flashy.
4. Graceful degradation is trivial - on reduced-motion, just show the static scatter and the neighbor lines.

**Secondary: Concept 7 - The build log header.**

Small enough to ship alongside the scatter. Takes 4 hours, lives in the global layout, and does a lot of signaling for almost no effort. Ship both on day one.

**Skip for v1**: Concepts 2, 4, 5. They're all strong but each one is its own project. Concept 2 (movie card) becomes a case study in itself - write the case study first, link to a live demo from there, don't embed it on the homepage.

**Skip entirely**: Concept 3 (CLI boot) because it's been done. Concept 1 (distributed systems map) stays in the doc for completeness but is not the pick.

**Confidence**: Task High, Explanation High.
