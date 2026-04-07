import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const conversations = defineCollection({
	loader: glob({
		base: "./src/content/conversations",
		pattern: "**/*.{md,mdx}"
	}),
	schema: z.object({
		slug: z.string(),
		title: z.string(),
		description: z.string(),
		topics: z.array(z.string()),
		published: z.boolean(),
		featured: z.boolean().optional(),
		order: z.number().optional(),
		lang: z.enum(["pl", "en"])
	})
});

export const collections = {
	conversations
};
