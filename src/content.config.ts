import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const artPosts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/art" }),
  schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      author: z.string(),
      description: z.string(),
      img: image(),
      imgAlt: z.string().optional(), // you'll be able to reference this anywhere when it's defined in frontmatter, AKA the --- lines
      tags: z.array(z.string()), // this is a trick i use on my site ladyflash idk why it works
      nsfw: z.boolean()
    })
});

export const collections = { artPosts };