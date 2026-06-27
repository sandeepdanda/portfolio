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
- **Shipped (Phases 1–7):** global shell, content collections for typed MDX
  projects, About/Experience/Education/Projects pages, per-page OG images,
  JSON-LD, a11y pass, self-hosted fonts + responsive images, per-project detail
  pages from MDX bodies.
- **Phase 9 Batch 2 (new):** `BrandMark.astro` — brand-true hover micro-marks on
  the Experience cards (Amazon smile-arrow draw, Deloitte green-square pulse,
  Nucleus accent-ring spin). Inline SVG/CSS, no external assets, reduced-motion
  safe, browser-verified.

## The vision

A site that reads like the person — typography-led, calm, fast, with small
brand-true touches that reward attention without shouting. Editorial, not a
template. Every animation earns its place; nothing is decoration.

## Next level — roadmap (highest value first)

1. **Phase 8 — deploy (the real gap).** Cloudflare Pages Git integration:
   framework Astro, build `npm run build`, output `dist`, `NODE_VERSION=22.12.0`.
   Outward-facing → run by the human. Verify the BuildLog strip shows the real
   commit SHA, then attach a custom domain.
2. **Animation Batch 3 — education marks.** Buffalo snow drift, NIT torch
   flicker, school underline sweep. Reuse the `BrandMark.astro` pattern.
3. **Batch 4 — project motifs.** Film reel, coin flip, ECG heartbeat, scan line,
   gridworld walk — one per project card.
4. **Batches 5–6.** Contact-card interactions (envelope open, LinkedIn glow,
   GitHub head-tilt) and the home-hero name shimmer + arrow draw-in.
5. **About page refresh.** `docs/design/about-page-ideas.md` has directions
   (photo strip, map + timeline, pull quotes) and a decision checklist.

## Constraints that don't change

- No git commit/push — left to the human. No Cloudflare deploy without the human.
- Respect `prefers-reduced-motion`: every animation behind
  `@media (prefers-reduced-motion: no-preference)`.
- CSS-first: `transform`/`opacity` only, no JS animation unless CSS can't do it.
- Brand-true: honor each brand's own visual language; never invent. Public brand
  assets/hexes only.
- Voice: no em dashes, no `leverage`/`utilize`/`facilitate`. Keep homepage HTML
  under 10 KB. No hamburger menu, no testimonials unless real.
- Reject list (do not build): parallax, confetti, page transitions, cursor
  trails, typewriter H1.

## Working agreement (how to build here)

Ship animations in small self-contained batches (the order in
`animations-todo.md`). Build with Node 22, serve the preview, verify in the
browser (marks render, hover fires, reduced-motion degrades), then a localhost
before/after report. Confirm what's already shipped before re-doing it.
