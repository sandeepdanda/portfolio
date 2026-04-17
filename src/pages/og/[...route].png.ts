import { OGImageRoute } from "astro-og-canvas";
import { SITE } from "../../config";
import { buildOGOptions } from "../../lib/og";

const pages = {
  home: { title: SITE.author, description: SITE.description },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: "route",
  getSlug: (path) => path,
  getImageOptions: (_path, page) => buildOGOptions(page.title, page.description, 84),
});
