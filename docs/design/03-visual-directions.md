# Visual directions

Three distinct directions. Each one is ready to hand to a coder. One is recommended at the end.

Shared constraints across all three:
- Dark mode default, light mode works
- WCAG AA contrast
- Free/OSS fonts only
- Respects `prefers-reduced-motion`
- System font fallbacks specified

---

## Direction A - Editorial brutalist

**Mood**: a printed magazine that happens to be a website. Strong grid. Generous whitespace. Big serif display type. Minimal color. Feels expensive without trying.

**Type**
- Display: **Fraunces** (weight 400-700, optical size 72+). Warm serif, variable. Headlines only.
- Body: **Inter** (400, 500, 600). Variable. Tight letter-spacing at large sizes.
- Mono: **JetBrains Mono** (400, 500) for code and project IDs.
- System fallback: `ui-serif, Georgia` / `ui-sans-serif, system-ui` / `ui-monospace, Menlo`.

**Color (dark mode)**
```
background      #0b0b0c
surface         #15151a
surface-raised  #1e1e25
text            #eaeaec
text-muted      #9a9aa3
border          #2a2a33
accent          #c89b3c   /* warm amber, used only for links and hover */
accent-hover    #d9ac4d
focus-ring      #e3c677
```

**Color (light mode)**
```
background      #f7f5f0
surface         #ffffff
surface-raised  #fffef9
text            #1a1a1e
text-muted      #5a5a63
border          #e2ddd2
accent          #8a6423
accent-hover    #6f4f1a
focus-ring      #c89b3c
```

**Motion principles**
1. Content fades up 16px, once on viewport enter. 400ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
2. Links underline on hover with a `scaleX` from left, 180ms.
3. No scroll-driven animations beyond the initial fade. Scroll is for reading.
4. Page transitions: fade-through 200ms. Skip if reduced-motion.
5. No hover states on mobile.

**Iconography**: Lucide icons at 16-20px, stroke 1.5. Only where semantic (external link, RSS, GitHub). No decorative icons.

**Signature element**: a thin vertical rule (`1px`, `#2a2a33`) down the left edge of every content page, with a horizontal tick mark for each section heading. Reads like a book spine. Cheap to build. Nothing else on the internet does it.

---

## Direction B - Monospace terminal

**Mood**: a senior engineer's `~/notes` directory opened in the browser. Everything is monospace. Dense information. Feels like a tool, not a marketing site. Works because you build infrastructure.

**Type**
- Everything: **Berkeley Mono** if licensed, else **JetBrains Mono** (400, 500, 700).
- One exception: case study long-form prose uses **IBM Plex Sans** (400, 500) for readability. Headlines stay mono.
- System fallback: `ui-monospace, 'SF Mono', Menlo, monospace`.

**Color (dark mode)**
```
background      #0f1011
surface         #161819
surface-raised  #1c1f20
text            #d4d4d2
text-muted      #7a7d7a
border          #2a2d2c
accent          #7bb662   /* terminal green, used for prompts and links */
accent-hover    #92c97a
focus-ring      #aee094
```

**Color (light mode)**
```
background      #fafaf7
surface         #ffffff
surface-raised  #ffffff
text            #1a1b1a
text-muted      #5e615d
border          #e3e3df
accent          #3d7528
accent-hover    #2e5a1e
focus-ring      #7bb662
```

**Motion principles**
1. Cursor blinks on the hero "prompt" line (500ms toggle, infinite). Nowhere else.
2. Section entry: type-on effect for headings only, 40ms per char, max 600ms total. Skip on reduced-motion.
3. Links get a `>` prefix that slides in 8px on hover, 120ms.
4. No fades, no scales, no parallax. Terminals don't animate.
5. Keyboard shortcuts visible everywhere (`g h` for home, `g c` for cases). Feels earned.

**Iconography**: no icons. Use ASCII characters where needed: `->`, `[x]`, `*`, `~`.

**Signature element**: a persistent bottom status bar, Vim-style, showing current route, word count on long pages, and a tiny time-of-day indicator. Fixed. Always there. Makes the whole site feel like one continuous tool.

---

## Direction C - Soft technical

**Mood**: warm, engineered, not trying too hard. Editorial but approachable. Feels like a personal essay site that happens to have screenshots of infrastructure. The middle ground between A and B.

**Type**
- Display and headlines: **Geist** (500, 600). Variable. Vercel's font, looks modern but not faddish.
- Body: **Geist** regular (400) at 17-18px for readability.
- Mono: **Geist Mono** (400, 500) for inline code and IDs.
- System fallback: `ui-sans-serif, system-ui, -apple-system` / `ui-monospace, Menlo`.

**Color (dark mode)**
```
background      #0c0d0f
surface         #16181c
surface-raised  #1f2329
text            #e6e7e9
text-muted      #8b8f97
border          #2b2f36
accent          #6ea8fe   /* soft blue, sparingly */
accent-hover    #85b6ff
focus-ring      #9bc3ff
```

**Color (light mode)**
```
background      #fbfbfa
surface         #ffffff
surface-raised  #ffffff
text            #15171a
text-muted      #5b6068
border          #e4e6e9
accent          #2f6ad1
accent-hover    #1f539f
focus-ring      #6ea8fe
```

**Motion principles**
1. Fade-up on scroll, 12px, 350ms, ease-out. Once only.
2. Card hover: `translateY(-2px)` with shadow bloom, 150ms.
3. Route transitions with View Transitions API where supported, fallback to fade.
4. Subtle spring on interactive elements (command palette open, toggle). `stiffness: 260, damping: 28` if using Framer Motion / Motion One.
5. Hero has one subtle moment: a drifting gradient behind the headline, 15s loop, paused on reduced-motion.

**Iconography**: Phosphor icons at 18px, thin weight. Only in navigation and external links.

**Signature element**: a small "now" indicator top-right of every page showing what you're currently building (pulled from a `now.json` file, updates when you push). Green dot when recently updated, grey when stale. Quiet but shows the site is alive.

---

## Recommendation

**Direction A - Editorial brutalist.**

Reasons:
1. Your existing research doc is already written in that voice - direct, declarative, short sentences. The site should match the writing.
2. Your not-another-rewatch Phase 12 redesign went editorial-warm. You have the instinct for it.
3. Senior hiring managers read a lot of portfolios that look like Direction C (Vercel-ish). Editorial stands out.
4. Serif headlines signal "writer and builder" - useful when you want case studies to be the center of gravity.
5. The vertical-rule signature element is unique and cheap to build.

Backup pick: **Direction B** if you decide the portfolio should feel like a tool rather than a publication. Only pick B if you commit to the terminal metaphor everywhere (404 page is a shell error, nav is keyboard-first, etc). Half-committing to B looks like a theme, not a choice.

Do not pick Direction C. It's safe and good but doesn't distinguish you from 80% of engineer portfolios already online.

**Confidence**: Task High, Explanation High.
