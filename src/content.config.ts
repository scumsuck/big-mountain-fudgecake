import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const art = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/art" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    img: image().refine(() => true).optional(),
    imgAlt: z.string(),
    tags: z.array(z.string())   
  })
});

export const collections = { art };