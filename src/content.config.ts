import { defineCollection, z } from "astro:content";

const art = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/art" }),
    schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
    tags: z.array(z.string())   
    })
});
// Export a single `collections` object to register your collection(s)

export const collections = { art };