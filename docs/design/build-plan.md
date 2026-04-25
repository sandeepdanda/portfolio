# Build plan - phased

Living document. Updated as we ship each phase. Mark phases `DONE`, `WIP`, or `TODO`. Keep the "what changed" notes brief.

**Stack**: Astro 6 + Tailwind v4 + MDX, deployed to Cloudflare Pages.
**Visual direction**: Editorial brutalist - serif headlines (Fraunces), warm amber accent, thin vertical rule on the left edge.
**Signature interactions**: Typography-led pages + small build log strip in the footer.

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
- `src/components/BuildLog.astro` - "built YYYY-MM-DD HH:MM · sha" strip
- `src/components/Footer.astro` - warm two-line footer
- `src/components/ThemeToggle.astro` - fixed bottom-right toggle with localStorage
- `src/pages/index.astro` - typography-led homepage

Lessons learned:
- Astro CLI positional arg parser mis-reads `--typescript strict`. Use `--typescript=strict`.
- Astro 6 broke compatibility with `@astrojs/tailwind`. Use `@tailwindcss/vite` directly.

---

## Phase 2 - Content collections and MDX projects  `DONE`

**Goal**: project entries live as typed MDX with auto-generated list.

Shipped:
- `src/content.config.ts` with `projects` collection typed by Zod schema
- `src/lib/content.ts` - reading time + date helpers
- `src/pages/projects.astro` - sorted project list pulled from collection
- Five starter entries in `src/content/projects/`: not-another-rewatch, readloot, wellness-pro, fake-news-detection, reinforcement-learning

Lessons learned:
- Astro 6 content collections use the `glob` loader from `astro/loaders`. Legacy `src/content/<name>/` auto-discovery is gone.
- `render()` imported from `astro:content`, not `entry.render()` like Astro 4.
- Empty content collection dirs emit a build warning.

---

## Phase 3 - Supporting pages  `DONE`

**Goal**: fill out the navigation. All routes return something real.

Shipped:
- `src/pages/about.astro` - bio, portrait, Get-in-touch contact list
- `src/pages/experience.astro` - timeline of jobs (Amazon, Deloitte, Nucleus Software)
- `src/pages/education.astro` - schools and gpas
- `src/pages/projects.astro` - two-column grid pulling from `projects` collection
- `src/pages/404.astro` - three-link fallback

Note: earlier drafts included a `work` collection with a single case study and a `/now` page. Both were removed in favor of an Experience page + richer per-project detail (see Phase 7). The case-study concept was killed in commit 14cd27e.

---

## Phase 4 - SEO and OG  `DONE`

**Goal**: good link previews, good crawlability, discoverable by name.

Shipped:
- `src/components/PersonSchema.astro` - JSON-LD Person schema on the homepage
- `src/lib/og.ts` - shared OG image style
- `src/pages/og/[...route].png.ts` - homepage OG generator
- `public/robots.txt` + sitemap
- Base layout accepts `ogImage` prop and emits `og:image` + `twitter:image`

Lessons learned:
- `astro-og-canvas`'s `OGImageRoute` returns a Promise. Must `await` at the top of the route module.
- Default `getSlug` doubles the extension. Custom `getSlug: (path) => path` fixes it.

---

## Phase 5 - Polish and a11y pass  `DONE`

**Goal**: focus states visible, keyboard-only users can navigate, contrast tokens pass WCAG AA.

Shipped:
- Heading audit: every page has exactly one H1
- Contrast verified across tokens in both themes. Fixed light-mode focus ring from `#c89b3c` (2.6:1, fails WCAG 1.4.11) to `#6f4f1a` (>7:1) (CR: 256f7f8)
- `:focus-visible` broadened from `a` only to `a, button, [role="button"], summary` (CR: 256f7f8)
- Project card titles from `<span>` to `<h2>` for screen-reader document outline (CR: 256f7f8)
- Visually-hidden `<h2>About</h2>` added to `/about` between hero and bio (CR: 256f7f8)
- `.sr-only` utility class in `global.css`
- ThemeToggle wraps `localStorage.setItem` in try/catch for Safari private mode
- Footer `wave` emoji replaced with inline SVG hand (CR: 8248fbc)
- Footer GitHub link now opens in new tab, consistent with other externals
- `aria-current="page"` on active nav link

Agent audit (2026-04-24) confirmed:
- Zero em dashes in copy
- Zero AI-jargon hits (leverage/utilize/facilitate/etc)
- Zero internal Amazon team/service name leaks
- No inline event handlers; CSP strict only blocked by 3 known inline scripts (theme pre-paint, JSON-LD, Astro module bundle)

Remaining for manual verification:
- Lighthouse run on preview or prod. Target 95+ across Performance / A11y / Best Practices / SEO.
- Axe DevTools pass. Target zero violations.
- Tab-through on every page. Confirm focus ring visible.

---

## Phase 6 - Performance  `DONE`

**Goal**: fast first paint, no FOIT, responsive imagery.

Shipped (CR: 378f835):
- Self-hosted variable fonts via `@fontsource-variable/{fraunces,inter,jetbrains-mono}`. CSS imports in `global.css`. Replaces render-blocking Google Fonts `<link>` with `font-display: swap` served from the build output.
- Preload critical weights (Fraunces wght, Inter wght) via Vite `?url` import so Astro emits the hashed href at build time.
- Portrait moved from `public/profile.png` (100 KB raw PNG) to `src/assets/profile.png`. Swapped `<img>` for Astro's `<Picture>` with AVIF + WebP + JPG fallback at widths 320 / 480 / 640 / 960. Largest AVIF is 68 KB, smallest is 22 KB.

Bundle snapshot after Phase 6:
- 11 HTML pages, ~60 KB HTML total
- Single shared CSS bundle ~15 KB
- Per-image assets served via `<picture>` with AVIF + WebP + JPG fallback
- JS footprint near-zero (one tiny theme pre-paint inline script + theme-toggle module)

---

## Phase 7 - Per-project detail pages  `DONE`

**Goal**: let each project have a dedicated page that renders its MDX body. Replaces the earlier "second case study" phase.

Shipped (CR: 1479e38):
- `src/pages/projects/[...slug].astro` - dynamic route that renders MDX bodies via `getCollection` + `render()` from `astro:content`. Emits 5 detail pages.
- Filled out bodies for all five project MDX files with What / Approach / Stack sections. Previously only frontmatter was consumed.
- Sharpened summaries: reinforcement-learning names Q-learning, SARSA, DQN. Wellness Pro calls out 'three role-based dashboards'.
- Projects list cards now link title + "Read →" to `/projects/<slug>`.
- Removed duplicate "SDE at Amazon in Seattle" line from about.astro, kept the concrete "idempotent writes, replay queues, alarm tuning" detail.

---

## Phase 8 - Deploy to Cloudflare Pages  `TODO`

**Goal**: the site is live on a real URL.

Recommended path: **Cloudflare Pages UI Git integration** (over wrangler CLI or GitHub Actions). Reasons: zero YAML, automatic PR preview URLs posted to GitHub, `CF_PAGES_COMMIT_SHA` env var injected free (BuildLog reads this).

Exact setup:

```
Framework preset:   Astro
Build command:      npm run build
Build output dir:   dist
Root directory:     (leave blank)
Branch:             main
Env vars:
  NODE_VERSION=22.12.0
  # CF_PAGES_COMMIT_SHA auto-injected. BuildLog.astro reads it.
```

Steps:
1. Confirm GitHub remote green (it is: `sandeepdanda/portfolio`).
2. Dashboard > Workers & Pages > Create application > Pages > Connect to Git > pick the repo.
3. Plug in the values above. Click Save and Deploy.
4. First deploy lands on `<project>.pages.dev`. Verify BuildLog strip shows real 7-char commit SHA instead of `local`.
5. Decide on custom domain (Cloudflare Registrar, `.dev` ~$10-12/yr). Attach via Custom domains > Set up a domain; CNAME auto-created.
6. Turn on Cloudflare Web Analytics.

Acceptance:
- Site loads on `<project>.pages.dev`.
- BuildLog shows real commit SHA.
- PR previews work.

References:
- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://developers.cloudflare.com/pages/configuration/preview-deployments/
- https://developers.cloudflare.com/pages/configuration/build-configuration/

---

## Later (not scheduled)

- `/uses` page for tools and setup
- Writing section if I commit to 4+ posts a year
- Command palette (`cmd+k` style) if navigation gets busier
- Per-page OG images (template exists in `src/pages/og/[...route].png.ts` but `Base.astro:17` currently hardcodes `/og/home.png`)
- Movie recommendation card as a live widget on the index page
- Brand-aware micro-animations on hover (Amazon smile arrow, Deloitte green dot, etc). See `docs/design/animations-todo.md` for the full list, principles, and ship order.
- Extract shared `Card.astro` component (4 near-identical copies live in experience, education, projects, about today)

---

## Notes to future self

- Keep the homepage HTML under 10 KB. Measure on every change.
- Do not add a hamburger menu. The 4 nav items fit on 360px.
- Do not add testimonials unless they are real.
- Voice check before shipping any copy: no em dashes, no `leverage`/`utilize`/`facilitate`, no "I'd be happy to".
- Node 22.12+ required. Homebrew default `node` symlink may point to `node@20` - use `/opt/homebrew/opt/node/bin` on PATH.

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

- 2026-04-17: Phase 1 shipped. Scaffolded project, global shell, homepage renders with signature visual.
- 2026-04-17: Phase 2 shipped. Content collections for `work` and `projects`, list + detail pages, first draft of not-another-rewatch case study.
- 2026-04-17: Scrub pass. Removed internal-work references from copy. Added `docs/SCRUB-RULES.md` as a permanent guardrail.
- 2026-04-17: Phase 3 shipped. About, Now, Projects, 404 pages.
- 2026-04-17: Phase 4 shipped. JSON-LD Person schema, per-page OG images via astro-og-canvas, RSS feed, robots.txt.
- 2026-04-17: Phase 5 partial. Agent-side a11y polish (aria-current, theme toggle label, skip link, heading audit, contrast verified).
- 2026-04-17 to 2026-04-20: Case-study model killed (commit 14cd27e). Experience and Education pages added. Homepage rewritten typography-led. EmbeddingMap removed. `/now` and RSS dropped. Various footer and hero tweaks (commits f3ab96d..e9b53c3).
- 2026-04-24: Pinned vite to 7.x for @tailwindcss/vite compat (rolldown-based vite 8 breaks the plugin).
- 2026-04-24: Phase 5 marked DONE. Focus ring contrast fix, `:focus-visible` broadened to buttons, project titles promoted to `<h2>`, sr-only About heading, try/catch on localStorage. BuildLog wired into Footer, emoji wave swapped to SVG.
- 2026-04-24: Phase 6 shipped. Fonts self-hosted via fontsource-variable. Portrait ships AVIF + WebP + JPG at 4 widths via Astro `<Picture>`.
- 2026-04-24: Phase 7 shipped. Per-project detail pages at `/projects/<slug>` from MDX bodies. 5 new pages. Project summaries sharpened. About copy deduped against index.
- 2026-04-24: Phase 8 (deploy) queued with exact Cloudflare Pages setup values. Pending user approval for actual deploy.
