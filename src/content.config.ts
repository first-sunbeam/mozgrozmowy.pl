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
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		lang: z.enum(["pl", "en"]),
		translationKey: z.string()
	})
});

export const collections = {
	conversations
};
