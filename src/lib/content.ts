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
	)).sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
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
