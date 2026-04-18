import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Projects - tile entries. Live under src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    status: z.enum(["active", "paused", "archived"]).default("active"),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
