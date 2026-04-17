import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config";

export async function GET(context: { site: URL }) {
  const entries = await getCollection("work", (e) => e.data.status !== "draft");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: entries
      .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.summary,
        pubDate: entry.data.publishedAt,
        link: `/work/${entry.id}/`,
      })),
  });
}
