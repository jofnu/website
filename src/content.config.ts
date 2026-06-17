import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
    // default id is the basename → fr/ and en/ collide; keep the lang folder
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      slug: z.string(), // shared across fr/en to link translations
      lang: z.enum(["fr", "en"]),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
      cover: image().optional(),
    }),
});

export const collections = { blog };
