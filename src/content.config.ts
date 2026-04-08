import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const baseSchema = z.object({
	slug: z.string(),
	title: z.string(),
	description: z.string(),
	topics: z.array(z.string()),
	published: z.boolean(),
	featured: z.boolean().optional(),
	publishedAt: z.coerce.date(),
	updatedAt: z.coerce.date().optional(),
	lang: z.enum(["pl", "en"]),
	translationKey: z.string(),
});

const createGlobLoader = (base: string) =>
	glob({
		base,
		pattern: "**/*.{md,mdx}",
		generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/i, ""),
	});

const conversations = defineCollection({
	loader: createGlobLoader("./src/content/conversations"),
	schema: baseSchema,
});

const reflections = defineCollection({
	loader: createGlobLoader("./src/content/reflections"),
	schema: baseSchema,
});

export const collections = {
	conversations,
	reflections,
};
