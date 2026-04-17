import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Case studies - deep writeups. Live under src/content/work/
const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["draft", "wip", "shipped", "archived"]).default("shipped"),
    featured: z.boolean().default(false),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
});

// Small projects - tile entries. Live under src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    status: z.enum(["active", "paused", "archived"]).default("active"),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { work, projects };
