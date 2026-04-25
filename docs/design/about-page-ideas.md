# About page - visual refresh ideas

The current /about is honest but flat: one portrait, one subtitle, a single column of prose, then contact cards. Works, but does not do enough visually. Use this doc to brainstorm, research references, then pick one direction.

## The problem

- Single portrait is the only image on the page. Feels thin.
- Bio reads well but has no visual rhythm. No moments to breathe.
- Pull-quote helps, but one accent is not enough texture.
- Page feels "resume-ish" rather than "personal."

## Research targets

Before committing to a direction, look at how other engineering/design portfolios handle the /about page:

- https://paco.me
- https://rauno.me
- https://maggieappleton.com/about
- https://wesbos.com/about
- https://leerob.io
- https://brittanychiang.com
- https://pketh.org/about.html (illustrated)
- https://www.robinrendle.com (prose-heavy, editorial)
- Read: Robin Rendle's "The web we lost" essays for prose-layout patterns
- Read: Every Layout by Heydon Pickering for responsive stack/cluster primitives
- Look: old New Yorker + Wired feature-article layouts for drop caps, pull quotes, photo insets

## Direction A: photo strip

Add a horizontal 3-4 image strip below the portrait or inline with the bio. Photos from the places the bio names: Thorrur, Hyderabad, Buffalo, Seattle. Each photo:

- 1:1 thumbnail, 80-96px
- Mono caption below ("BUFFALO. WINTER 2024.")
- Tiny hover zoom (1.05 scale, 200ms)
- Click opens a lightweight lightbox (no deps - just CSS)

Tradeoff: asks for 3-4 more photos. Images must be real, no stock.

## Direction B: map + timeline

A simple SVG map of the four places, connected by a dashed line in reading order. On hover over a city dot, the corresponding bio paragraph gets an accent left border. Click = smooth-scroll to that paragraph. Pure SVG + CSS variables.

- ~200px tall
- Accent dots, muted line, mono city labels
- Reduced motion: no smooth scroll, straight jump

Tradeoff: requires geography accuracy. Four points is too few for a map to feel earned.

## Direction C: asymmetric photo grid (Bauhaus-ish)

Three photos of different sizes, arranged like a magazine layout:

```
+----------+-------+
|          |       |
| portrait | small |
|          |       |
|          +-------+
|          | small |
+----------+-------+
```

Caption under each in mono. Bio flows to the right of this block on desktop, stacks below on mobile. Gives the page composition without adding moving parts.

Tradeoff: harder to lay out. Needs 2 more real photos.

## Direction D: pull quotes every 2-3 paragraphs

No new photos. Extract 3 short lines from the bio (~8-12 words each) and render as large serif italic pull quotes between paragraphs. Each in accent color, each on its own line with a thin border-left:

- "I had my first real production outage."
- "This time for the curiosity, not the path."
- "The missing pieces more than the finished ones."

Tradeoff: page gets longer. Works only if all 3 quotes land.

## Direction E: side-margin annotations

Desktop: use the left or right margin to float tiny mono annotations next to specific paragraphs (year, city, a side note). Like `(Noida, 2020)` floating beside the Nucleus paragraph. Hide on mobile.

Tradeoff: requires a wider page than current. Could push max-width to 64rem on desktop.

## Direction F: the illustrated portrait

Commission or hand-draw a line-art version of the portrait (black ink, accent highlights). Use it alongside the photo - photo appears on first paint, line-art on hover. Gives the page a craft object. Slow to produce.

Tradeoff: weeks of work, or money.

## Direction G: favorite-things grid

Below the bio: a 2x3 or 3x3 grid of small cards - favorite movie, favorite book, favorite hike, favorite recipe, favorite album, etc. Each card: tiny image or initial, title, one-line why.

- Reuses the existing `.card` treatment from Get-in-touch
- Adds visual density without adding photos
- Personal in a way prose cannot be

Tradeoff: risks feeling like a blog sidebar. Keep to 6 max.

## Combinations worth considering

- **A + D**: photo strip + 2 pull quotes. Most bang per hour.
- **C + E**: magazine layout + margin annotations. Maximum editorial feel, most work.
- **G alone**: just the favorites grid, no photo strip. Quick win, personal.
- **D alone**: pull quotes only, zero new assets. Ships in an hour.

## Assets to gather before implementation

- [ ] 3-4 real photos (Thorrur, Hyderabad, Buffalo, Seattle). Phone photos fine. Must be mine, not stock.
- [ ] Alt text written for each (accessibility - not just decorative)
- [ ] Process each through Astro `<Picture>` pipeline for AVIF/WebP
- [ ] Confirm favorite-thing list stable enough to commit to public page (albums drift, movies less so)

## Decision checklist

When picking a direction, ask:

- Can it ship in one evening?
- Does it survive on mobile without looking cramped?
- Does it pass the voice check (no AI jargon, no em dashes, no forced warmth)?
- Does it still look good in light mode? (accent color is different hex)
- Does `prefers-reduced-motion` degrade gracefully?

## Rejected outright

- Video background loop. Too heavy, not the vibe.
- "Hi, my name is ___ and I am a passionate ___" greeting. Covered elsewhere already.
- Corporate headshot against gray wall. Not the brand.
- Testimonials. Already on the reject list in build-plan.

## Default recommendation

If I cannot decide in 30 minutes: ship **D alone** (pull quotes, zero new assets). Revisit with photos later.
