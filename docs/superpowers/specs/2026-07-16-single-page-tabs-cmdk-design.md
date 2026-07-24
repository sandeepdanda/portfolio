# Single-page portfolio + scroll-spy tabs + command palette

> Historical design proposal. The single-page layout and scroll-spy shipped.
> The command palette and portrait were later removed, and detail pages retain
> the shared navigation. See `NORTH_STAR.md` for the current direction.

Date: 2026-07-16

## What

Convert the multi-page portfolio into one scrolling page with a sticky tab
nav that scroll-spies the active section, and add a Cmd/Ctrl+K command palette
for jump-navigation and quick actions. Project detail pages stay as separate
deep-link routes.

## Why

The reference sites Sandeep admires (ganeshkumarm1.github.io, brittanychiang.com)
put everything on one scrolling page with a tab bar that tracks scroll position.
The current site is 5 separate routes, so there is no continuous scroll and no
tab-style active indicator. This change delivers the "easy scroll and navigate
to all sections in a single page" and "tab style" that Sandeep asked for, and the
palette is the highest-signal "builds real tools" affordance for a backend
hiring audience.

Not in scope: /notes writing section, GitHub recently-shipped strip, resume link
(no PDF exists), backend case-study rewrites, brand-mark changes.

## Decisions on prior constraints

- **10KB home budget: retired.** It was written for a hero-only home. A
  single-page portfolio makes it obsolete. New target: keep total home transfer
  lean (gzip well under 60KB), no per-section budget.
- **Per-page OG images: home OG only.** Collapsing sections to one page means one
  OG image. Project detail pages keep their own.
- **Reject list "page transitions": not violated.** Single-page scroll is not a
  route transition. Smooth-scroll is the only motion and is reduced-motion gated.
- **Old routes: 301-style static redirects** to home anchors so indexed links and
  bookmarks do not 404.

## Architecture

### Sections (single page)

`index.astro` renders 5 stacked `<section>` blocks with ids `me`, `education`,
`experience`, `projects`, `about`. Section content moves into components under
`src/components/sections/`:

- `MeSection.astro` — hero (name, location, tagline) + short projects teaser copy
- `EducationSection.astro` — the 4 education cards + EducationMark
- `ExperienceSection.astro` — the 3 job cards + BrandMark
- `ProjectsSection.astro` — project cards linking to detail routes
- `AboutSection.astro` — portrait dossier, bio, get-in-touch cards

Each section leads with a mono section number + title (reusing the existing
`.section-number` / `.section-title` pattern from the current home) so the page
reads as a numbered editorial sequence.

### Detail routes (unchanged)

`/projects/[...slug]` stays. Its back-link changes from `/projects` to
`/#projects`.

### Redirects

`astro.config.mjs` gains `redirects`: `/education`, `/experience`, `/projects`,
`/about` → `/#<anchor>`. `/projects` is special: it must still allow the detail
routes, so only the exact `/projects` index redirects (detail slugs are separate
static paths and take precedence).

### Sticky tab nav + scroll-spy

`Base.astro` header becomes `position: sticky; top: 0` with a solid/blurred
background so content scrolls under it. NAV hrefs become in-page anchors
(`#me`, `#education`, ...). A small inline script uses `IntersectionObserver`
to set `aria-current="page"` on the tab whose section is centered in the
viewport (rootMargin approximates mid-viewport). The existing
`.nav-link[aria-current] ::after` amber underline is the active indicator — no
new visual language. Clicking a tab smooth-scrolls (CSS `scroll-behavior`),
with `scroll-margin-top` on sections to clear the sticky header. Reduced-motion
disables smooth scroll.

Because the layout is now single-page, the layout only needs the section-anchor
NAV on the home page. Detail pages get a simplified header (brand + "← home").

### Command palette

New `src/components/CommandPalette.astro`, rendered once in `Base.astro`.

- Native `<dialog>` (showModal gives focus-trap, Esc, backdrop, inert bg). No
  cmdk / React dependency.
- Trigger: Cmd/Ctrl+K and `/` (ignored while typing in inputs). Also a small
  `⌘K` hint chip near the theme toggle opens it (mouse/touch discoverability).
- Items built by JS from a config array on first open, so home HTML ships only a
  tiny empty dialog shell.
- Groups: **Go to** (5 sections, in-page scroll), **Projects** (5 detail deep
  links), **Actions** (toggle theme, copy email, GitHub, LinkedIn).
- Fuzzy filter on type; ArrowUp/Down move; Enter activates; Esc closes.
  `role="listbox"` + `role="option"` + `aria-activedescendant`. Copy-email uses
  an `aria-live` confirmation.
- Reuses existing theme data-attr/localStorage logic and existing color/mono
  tokens. Open/close = sub-200ms opacity+translateY, reduced-motion gated.

## What stays untouched

Brand micro-marks (BrandMark, EducationMark), Card, ThemeToggle logic, Footer,
fonts, JSON-LD PersonSchema, all color tokens, project MDX content. No new
dependencies.

## Testing

- `npm run build` passes; dist emits single-page home + detail routes + redirects.
- Browser (Playwright/agent-browser): tabs scroll-spy correctly; click smooth-
  scrolls; Cmd+K opens/filters/selects/closes; theme toggle + copy-email work
  from palette; keyboard-only nav reaches everything; focus rings visible.
- `prefers-reduced-motion: reduce`: smooth scroll and palette motion disabled.
- Old routes redirect to anchors.
- Mobile width: tabs wrap/scroll horizontally, no hamburger, palette usable.
