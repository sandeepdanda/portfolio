import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";
import { SITE } from "../../config";
import { buildOGOptions } from "../../lib/og";

const projects = await getCollection("projects");

const pages: Record<string, { title: string; description: string }> = {
  home: { title: SITE.author, description: SITE.description },
  about: {
    title: "About",
    description: "A software engineer in Seattle. A little about me, beyond the resume.",
  },
  experience: {
    title: "Experience",
    description: "Where I have worked so far.",
  },
  education: {
    title: "Education",
    description: "Where I studied.",
  },
  projects: {
    title: "Projects",
    description: "Things I have shipped or maintain.",
  },
  uses: {
    title: "Uses",
    description: "The tools I actually open every day.",
  },
  "404": {
    title: "Not found",
    description: "The page you are looking for does not exist.",
  },
};

for (const entry of projects) {
  pages[`projects/${entry.id}`] = {
    title: entry.data.name,
    description: entry.data.summary,
  };
}

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: "route",
  getSlug: (path) => path,
  getImageOptions: (_path, page) => buildOGOptions(page.title, page.description, 84),
});
