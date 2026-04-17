import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";
import { buildOGOptions } from "../../../lib/og";

const entries = await getCollection("work", (e) => e.data.status !== "draft");

const pages = Object.fromEntries(
  entries.map((e) => [e.id, { title: e.data.title, description: e.data.summary }])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: "slug",
  getSlug: (path) => path,
  getImageOptions: (_path, page) => buildOGOptions(page.title, page.description, 72),
});
