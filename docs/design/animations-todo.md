# Animation ideas - TODO

Living list. Add, pick, implement in small batches. Every idea must earn its place: reinforces identity, not decoration.

## Principles

- **Subtle over showy.** If animation draws attention away from content, cut it.
- **Brand-true.** When a brand has its own visual language (Amazon smile arrow, Deloitte green dot), honor it. Do not invent.
- **Respect reduced motion.** Wrap every animation in `@media (prefers-reduced-motion: no-preference)`. Global rule in `global.css` already zeros transitions on `prefers-reduced-motion: reduce`.
- **Stagger, do not swarm.** Max one animation firing per user action.
- **Performance.** Prefer `transform` + `opacity` over layout props. No JS-driven animation unless CSS cannot do it.

## Experience page cards

### Amazon - smile arrow

On card hover: draw the Amazon smile arrow under the company name. Amazon orange (`#FF9900`). Animate stroke-dasharray from 0 to full. ~500ms ease-out. Reverse on unhover.

- SVG path: shallow arc + arrow tip, from `/src/assets/brands/amazon-smile.svg` (add asset)
- Position: below `.headline`, 10px offset
- Trigger: `.card:hover .brand-mark` draws; default state is dashoffset = pathLength

### Deloitte - green dot

Deloitte logo uses a single green square/dot (`#86BC25`). On hover: pulse a small green square next to the company name. `scale(1) -> scale(1.3) -> scale(1)`, 600ms ease-in-out.

### Nucleus Software - circuit trace

Nucleus brand is a stylized nucleus circle. On hover: spin a thin ring (1px border) once, 360deg, 900ms ease. Border color = accent, not brand (brand color is dated maroon).

## Education page cards

### Buffalo - snow

UB winters are legendary. On hover: emit 4-5 tiny SVG snowflakes that drift from the top of the card to the bottom, fade out. 1.2s each, staggered 120ms. `prefers-reduced-motion` => skip entirely.

### NIT Durgapur - flame

NIT's logo has a torch. On hover: a small flame glyph flickers next to `.headline` using `opacity` keyframes at 2 steps, 300ms loop while hovered.

### Narayana Junior College - underline

Simple: accent-color underline sweeps left-to-right beneath the school name. 250ms ease-out. Same for Aryabhatta.

## Projects page cards

### Not Another Rewatch - film reel

On hover: 3 small film-perforation dots animate along the bottom edge (like a filmstrip scrolling). Loops while hovered.

### Readloot - coin flip

Readloot is a vocabulary RPG. On hover: small coin icon next to the name does a 3D flip (`rotateY(360deg)`), 700ms.

### Wellness Pro - heartbeat

ECG-style line pulses beneath the name. Stroke-dashoffset animates, loops slowly (1.5s) while hovered.

### Fake News Detection - scan line

Thin accent-colored line sweeps vertically across the card once on hover, 800ms. Evokes the "scanning" metaphor.

### Reinforcement Learning - gridworld

4x4 dot grid in card corner. On hover: one dot walks from top-left to bottom-right in discrete steps. 1s total.

## Get in touch cards

### Email card

Already has copy-to-clipboard. Add: envelope icon opens (flap lifts) on hover. 200ms.

### LinkedIn card

`in` mark glows in LinkedIn blue (`#0A66C2`) for 400ms on hover, then settles back to muted.

### GitHub card

Octocat icon does a single head-tilt (rotate -5deg -> 0), 400ms ease-in-out.

## Home page hero

### Name accent shimmer

`Danda` italic em already amber. On first load only: accent glyph fades from muted to full accent over 600ms, 300ms after paint. Feels like it "arrives."

### Section 01 teaser link

"See them all ->" arrow already shifts 4px on hover. Upgrade: arrow draws in (stroke-dasharray) on card mount via IntersectionObserver. Fire once per page load.

## Nav and chrome

### Active link underline

`[aria-current="page"]` link gets a static accent underline. Non-active links get a sweeping underline on hover (left-to-right, 200ms).

### Theme toggle

On click: icon morphs between sun and moon (crossfade + slight rotation, 300ms). Do NOT animate the whole page re-color - jarring.

## Portrait

### About page portrait

On first scroll into view: fade in + lift 8px, 600ms ease-out. Once per page load. Uses IntersectionObserver.

## Research before implementing

- [ ] Collect official SVG marks for Amazon, Deloitte, Nucleus from brand kits (public press pages only - no scraping internal)
- [ ] Verify brand hex values against each company's current brand guidelines
- [ ] Write a `BrandMark.astro` component that accepts `company` + `animation` props, hides behind `prefers-reduced-motion`
- [ ] Benchmark: every card hover should stay under 16ms paint time (devtools Performance tab)
- [ ] Axe scan after each batch - animations must not trigger accessibility warnings
- [ ] Lighthouse performance score must not drop > 2 points from current baseline

## Implementation order

Ship in this order so each batch is self-contained:

1. **Batch 1 - Chrome polish** (low risk): nav underline sweep, theme toggle morph, portrait fade-in
2. **Batch 2 - Experience brand marks**: Amazon smile, Deloitte dot, Nucleus ring. Introduces `BrandMark.astro`.
3. **Batch 3 - Education brand marks**: Buffalo snow, NIT flame, underline sweep for schools.
4. **Batch 4 - Projects motifs**: film reel, coin flip, heartbeat, scan line, gridworld.
5. **Batch 5 - Contact cards**: envelope open, LinkedIn glow, GitHub head-tilt.
6. **Batch 6 - Home hero**: name shimmer, arrow draw-in.

Each batch = its own branch + its own CR.

## Reject list (ideas to NOT do)

- Parallax scroll. Feels 2015.
- Confetti on any action. Not the vibe.
- Page transitions. Astro view-transitions are nice but add weight; skip until content justifies it.
- Cursor trails. Never.
- Typewriter text effect on H1. Overused.
