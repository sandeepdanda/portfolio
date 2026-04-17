# Stack decision - free hosting

Opinionated pick for a 2026 personal portfolio. Zero monthly cost. Custom domain optional ($12/yr if you want one).

## TL;DR

**Astro 5 on Cloudflare Pages.** Write content in MDX. Deploy from GitHub. Use Cloudflare Web Analytics. Done.

Skip to section 5 if you just want the setup steps.

---

## 1. The three realistic options

| Stack | Host | Free tier reality |
|-------|------|-------------------|
| Astro 5 | Cloudflare Pages | Unlimited bandwidth, 500 builds/month, 100k req/day on Workers if you need SSR. Genuinely free. |
| Next.js 15 | Vercel Hobby | 100 GB bandwidth/month, 100 GB-hrs Serverless exec, commercial use against ToS. Personal portfolio is fine but watch the bandwidth if a post goes viral. |
| SvelteKit | Cloudflare Pages | Same Cloudflare tier as Astro. Smaller ecosystem for MDX and OG images. |

## 2. MDX story

- **Astro**: `@astrojs/mdx` is first-party. Components in Markdown work. Content Collections give you typed frontmatter with Zod schemas. Best-in-class for this.
- **Next.js**: `@next/mdx` works but MDX-in-App-Router has sharp edges. Most real blogs use `contentlayer` or `content-collections` as a middle layer. More moving parts.
- **SvelteKit**: `mdsvex` is the only real option. Works but feels less polished. Typed frontmatter needs manual work.

Astro wins here because content is the entire point of a portfolio.

## 3. Dynamic OG images

- **Astro**: `@vercel/og` or `satori` work. There's also `astro-og-canvas` if you want zero-JS. Generate at build time for each case study.
- **Next.js**: built-in `ImageResponse` from `next/og`. Best DX of the three.
- **SvelteKit**: `satori` works but less documented.

Next.js wins, but Astro is close enough. Build-time generation is fine for a portfolio - you don't ship new pages daily.

## 4. Analytics (free)

| Tool | Free tier | Cost |
|------|-----------|------|
| Cloudflare Web Analytics | Unlimited, privacy-friendly, no cookies | $0 |
| Plausible | No free tier for hosted. Self-host is free but needs a server. | $0 self-host, $9/mo hosted |
| Umami | Self-host free, needs Postgres | $0 self-host, $9/mo hosted |
| Vercel Analytics | 2,500 events/month on Hobby | Tight limit |
| Google Analytics | Free but heavy and creepy | $0 |

**Cloudflare Web Analytics** if you're on Pages. One script tag, no cookie banner needed, no data leaves your infra host. Good enough for "did anyone read my case study."

## 5. Gotchas

- **Vercel Hobby commercial ToS**: personal portfolio with a link to your GitHub is fine. Portfolio with a "hire me" CTA and contract rates is a grey area. Cloudflare has no such restriction.
- **Custom domain**: both hosts give you TLS and custom domains free. You pay for the domain ($10-15/yr at Cloudflare Registrar or Namecheap). The `.pages.dev` or `.vercel.app` subdomain is fine for v1.
- **Astro islands**: you write static HTML by default. Interactive components need `client:load` or similar. Worth learning - keeps the site fast.
- **Next.js cold starts on Vercel Hobby**: functions can cold-start in 300-800ms. For a mostly-static portfolio this rarely matters.
- **Cloudflare Pages build timeout**: 20 minutes. Fine unless you have 10,000 MDX posts.

## 6. Why not just use GitHub Pages?

You can. It's static-only, no serverless, no OG image generation at request time. For a portfolio you'd need to pre-build every OG image. Doable but more friction. Cloudflare Pages gives you the same free-ness plus a runtime when you need it.

## 7. Decision

**Astro 5 + Cloudflare Pages + Cloudflare Web Analytics.**

Reasons:
1. Content-first framework for a content-first site.
2. Truly unlimited bandwidth - you never think about it again.
3. MDX with typed frontmatter out of the box.
4. Static by default means great Lighthouse scores without effort.
5. One vendor for hosting, analytics, and (optionally) the domain.
6. If you want serverless later (contact form, dynamic OG), Cloudflare Workers is one `wrangler.toml` away.

Next.js is also fine if you already know it cold and want the OG image DX. But Astro's lower surface area means fewer footguns on a side project.

## 8. Setup (for later)

```bash
npm create astro@latest portfolio -- --template minimal --typescript strict
cd portfolio
npx astro add mdx sitemap
# deploy: push to GitHub, connect repo in Cloudflare Pages UI
```

Add these early:
- `@astrojs/mdx` - content
- `@astrojs/sitemap` - SEO
- `astro-seo` or hand-rolled meta - OG tags
- `@astrojs/rss` - RSS feed if you add writing

---

## Sources

- https://docs.astro.build/en/guides/integrations-guide/mdx/
- https://developers.cloudflare.com/pages/platform/limits/
- https://vercel.com/docs/limits/overview
- https://developers.cloudflare.com/web-analytics/
- https://docs.astro.build/en/guides/content-collections/

**Confidence**: Task High, Explanation High. The trade-off between Astro and Next.js is real - a strong case exists for Next.js if the OG image DX matters most. I'd still pick Astro.
