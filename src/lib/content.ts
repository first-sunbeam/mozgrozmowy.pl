import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

export interface ConversationListItem {
	title: string;
	description: string;
	href: string;
}

const toConversationPath = (lang: Lang, slug: string) =>
	lang === "pl" ? `/conversations/${slug}` : `/en/conversations/${slug}`;

export async function getPublishedConversations(lang: Lang) {
	return (await getCollection(
		"conversations",
		({ data }) => data.lang === lang && data.published,
	)).sort(
		(a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
	);
}

export async function getConversationStaticPaths(lang: Lang) {
	const allConversations = await getCollection(
		"conversations",
		({ data }) => data.published,
	);
	const conversations = allConversations
		.filter((entry) => entry.data.lang === lang)
		.sort(
			(a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
		);

	return conversations.map((entry) => {
		const alternateEntry = allConversations.find(
			(candidate) =>
				candidate.data.translationKey === entry.data.translationKey &&
				candidate.data.lang !== entry.data.lang,
		);

		return {
			params: { slug: entry.data.slug },
			props: {
				entry,
				alternatePath: alternateEntry
					? getConversationPath(alternateEntry.data.lang, alternateEntry.data.slug)
					: undefined,
			},
		};
	});
}

export function toConversationListItems(
	entries: CollectionEntry<"conversations">[],
	lang: Lang,
): ConversationListItem[] {
	return entries.map((entry) => ({
		title: entry.data.title,
		description: entry.data.description,
		href: toConversationPath(lang, entry.data.slug),
	}));
}

export function getConversationPath(lang: Lang, slug: string) {
	return toConversationPath(lang, slug);
}
