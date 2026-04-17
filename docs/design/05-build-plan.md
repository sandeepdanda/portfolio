# Build plan - phased

Living document. Updated as we ship each phase. Mark phases `DONE`, `WIP`, or `TODO`. Keep the "what changed" notes brief.

**Stack**: Astro 5/6 + Tailwind v4 + MDX, deployed to Cloudflare Pages.
**Visual direction**: Editorial brutalist (Direction A, see `docs/design/03-visual-directions.md`).
**Signature interactions**: Embedding-space scatter + build log header (see `docs/design/02-signature-interaction.md`).

---

## Phase 1 - Scaffold and global shell  `DONE`

**Goal**: project boots, builds, renders a homepage, and has the global layout locked in.

Shipped:
- Astro scaffold with TypeScript strict
- Tailwind v4 via `@tailwindcss/vite` (Astro 6 does not use `@astrojs/tailwind`)
- `@astrojs/mdx`, `@astrojs/sitemap` installed
- Design tokens in `src/styles/global.css` (editorial brutalist palette)
- `src/config.ts` - single source of truth for site metadata, nav, social
- `src/layouts/Base.astro` - global shell with OG tags, skip link, vertical rule
- `src/components/BuildLog.astro` - "built YYYY-MM-DD HH:MM · sha" header
- `src/components/Footer.astro` - minimal two-line footer
- `src/components/ThemeToggle.astro` - fixed bottom-right toggle with localStorage
- `src/components/EmbeddingMap.astro` - SVG scatter of points in embedding space with a drifting pulse through neighbors (based on the not-another-rewatch side project)
- `src/pages/index.astro` - homepage with all blocks from `04-site-brief.md`
- `npm run build` passes in 1.13s. Output: 7.8KB static HTML, zero JS to render.

Lessons learned:
- Astro CLI positional arg parser mis-reads `--typescript strict` when scaffolding into the current dir. Use `--typescript=strict` or scaffold into a named subdir and move files.
- Astro 6 broke compatibility with `@astrojs/tailwind`. Use `@tailwindcss/vite` directly.

---

## Phase 2 - Content collections and MDX case studies  `DONE`

**Goal**: case studies live as typed MDX with auto-generated list and detail pages.

Shipped:
- `src/content.config.ts` with two collections: `work` and `projects`, typed with Zod schemas
- `src/lib/content.ts` - reading time + date helpers
- `src/pages/work/index.astro` - sorted case study list
- `src/pages/work/[...slug].astro` - detail template with summary box + prose typography
- `src/content/work/not-another-rewatch.mdx` - first case study (DRAFT - replace placeholder numbers with real ones before shipping)
- Homepage refactored to pull the featured case study from the collection

Build: 3 pages static, 1.70s total.

Lessons learned:
- Astro 6 content collections use the `glob` loader from `astro/loaders`. Legacy `src/content/<name>/` auto-discovery is gone.
- `render()` is imported from `astro:content`, not `entry.render()` like in Astro 4.
- `entry.body` is raw markdown. Use it for reading-time estimates.
- Empty content collection dirs emit a build warning. Added `.gitkeep` in `projects/`.

---

## Phase 3 - Supporting pages  `DONE`

**Goal**: fill out the navigation. All routes from the site brief return something real.

Shipped:
- `src/pages/about.astro` - bio + links section (scrub-safe)
- `src/pages/now.astro` - current month bullets with last-updated timestamp
- `src/pages/projects.astro` - two-column grid pulling from the `projects` content collection
- `src/pages/404.astro` - three-link fallback per spec
- Two starter entries in `src/content/projects/`: not-another-rewatch, readloot

Build: 7 pages in 1.77s.

---

## Phase 4 - SEO and OG  `TODO`

**Goal**: good link previews, good crawlability, discoverable by name.

Steps:
1. JSON-LD Person schema on the homepage (link GitHub, LinkedIn, email).
2. Dynamic OG images per page (use `satori` or `astro-og-canvas`, build-time).
3. `robots.txt` generation.
4. RSS feed for case studies (`@astrojs/rss`).
5. Validate sitemap.xml has every route.

Acceptance:
- Share a case study URL in Slack, rich preview renders.
- Searching "sandeep danda" on Perplexity finds the site.
- Lighthouse SEO score 100.

---

## Phase 5 - Polish and a11y pass  `TODO`

**Goal**: site passes Lighthouse 95+ on every category, keyboard-only users can navigate cleanly.

Steps:
1. Tab through every page. Confirm focus rings visible, skip link works, no traps.
2. Contrast check all text colors with WebAIM. Fix any AA failures.
3. Add alt text audit for any images.
4. Verify `prefers-reduced-motion` kills the embedding-map pulses.
5. Test on mobile viewport 360px wide. Nothing should overflow.
6. Check headings form a valid outline (one H1 per page, no level skips).

Acceptance:
- Lighthouse 95+ on Performance, Accessibility, Best Practices, SEO.
- axe DevTools reports zero violations.

---

## Phase 6 - Deploy to Cloudflare Pages  `TODO`

**Goal**: the site is live on a real URL.

Steps:
1. Push repo to GitHub.
2. Connect repo in Cloudflare Pages UI. Build command: `npm run build`. Output: `dist`.
3. Confirm deploy works on `<project>.pages.dev` first.
4. Decide on custom domain. If yes, register at Cloudflare Registrar (~$12/yr for `.dev`) and point DNS.
5. Turn on Cloudflare Web Analytics.
6. Set up preview deploys for every PR.

Acceptance:
- Site loads on production URL.
- Build log shows real commit SHA instead of "local".
- Analytics reports pageviews.

---

## Phase 7 - Writing the second case study  `TODO`

**Goal**: two strong case studies so the "Work" index feels alive.

Pick one:
- A deeper dive on a complete side project (readloot, for example)
- A standalone tools/infra project you shipped outside of work

Keep under 1500 words. Include one diagram. Follow the 6-section spine.

---

## Later (not scheduled)

- Movie recommendation card as a live widget (own case study first)
- `/uses` page for tools and setup
- Writing section if you commit to 4+ posts a year
- Command palette (`cmd+k` style) if navigation gets busier
- Dynamic "now" indicator showing live status

---

## Notes to future self

- Keep the homepage under 10KB of HTML. Measure on every change.
- If the embedding map ever becomes boring, iterate on it before replacing it.
- Do not add a hamburger menu. The 4 nav items fit on 360px.
- Do not add testimonials unless they are real.
- Voice check before shipping any copy: no em dashes, no `leverage`/`utilize`/`facilitate`, no "I'd be happy to".

## Quick-reference commands

```bash
# Dev server
npm run dev

# Production build (run before every commit that touches UI)
npm run build

# Preview production build
npm run preview
```

## Update log

- 2026-04-17: Phase 1 shipped. Scaffolded project, global shell, homepage renders with signature visual. Build clean in ~1s.
- 2026-04-17: Phase 2 shipped. Content collections for `work` and `projects`, case study list + detail pages, first draft of not-another-rewatch case study, homepage pulls featured from collection. 3 pages built in 1.7s.
- 2026-04-17: Scrub pass. Replaced partition-map signature with an embedding-space scatter. Removed all internal-work references from copy, component code, and docs. Added `docs/SCRUB-RULES.md` as a permanent guardrail.
- 2026-04-17: Phase 3 shipped. About, Now, Projects, 404 pages. Two seed entries in the projects collection. 7 pages built in 1.77s.
