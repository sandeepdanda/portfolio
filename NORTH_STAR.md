# Portfolio — North Star

Futuristic goals for this project. Current state, vision, next moves. Detailed
phase log lives in `docs/design/build-plan.md`; the animation backlog in
`docs/design/animations-todo.md`. This file points forward.

## What it is today

A personal portfolio site — editorial-brutalist visual direction (Fraunces
serif headlines, warm amber accent, thin left vertical rule).

- **Stack:** Astro 6 + Tailwind v4 (via `@tailwindcss/vite`) + MDX, TypeScript
  strict. Deploys to Cloudflare Pages. **Requires Node 22.12+** (Homebrew's
  default `node` symlink may point at node@20 — use mise's 22).
- **Shipped:** global shell, content collections for typed MDX
  projects, About/Experience/Education/Projects pages, per-page OG images,
  JSON-LD, a11y pass, self-hosted fonts + responsive images, per-project detail
  pages from MDX bodies, Cloudflare Pages deployment, single-page scroll-spy
  navigation, and the About journey map.
- **Brand marks:** `BrandMark.astro` - brand-true hover micro-marks on
  the Experience cards (Amazon smile-arrow draw, Deloitte green-square pulse,
  Nucleus accent-ring spin), plus the Education card marks.

## The vision

A site that reads like the person — typography-led, calm, fast, with small
brand-true touches that reward attention without shouting. Editorial, not a
template. Every animation earns its place; nothing is decoration.

## Next level — roadmap (highest value first)

1. Add concrete, public-safe ownership and outcomes to Experience entries.
2. Add screenshots, tradeoffs, and measured results to the strongest project
   pages once those artifacts are available.
3. Keep regression checks focused on metadata, responsive layout, navigation,
   and the journey map.
4. Add animation only when it clarifies identity or state.

## Constraints that don't change

- No git commit/push — left to the human. No Cloudflare deploy without the human.
- Respect `prefers-reduced-motion`: every animation behind
  `@media (prefers-reduced-motion: no-preference)`.
- CSS-first: `transform`/`opacity` only, no JS animation unless CSS can't do it.
- Brand-true: honor each brand's own visual language; never invent. Public brand
  assets/hexes only.
- Voice: no em dashes, no `leverage`/`utilize`/`facilitate`. Keep transferred
  homepage HTML under 10 KB gzip. No hamburger menu, no testimonials unless real.
- Reject list (do not build): parallax, confetti, page transitions, cursor
  trails, typewriter H1.

## Working agreement (how to build here)

Ship animations in small self-contained batches (the order in
`animations-todo.md`). Build with Node 22, serve the preview, verify in the
browser (marks render, hover fires, reduced-motion degrades), then a localhost
before/after report. Confirm what's already shipped before re-doing it.
