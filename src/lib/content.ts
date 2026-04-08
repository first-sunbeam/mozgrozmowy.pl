import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

export interface ContentListItem {
	title: string;
	description: string;
	href: string;
}

export interface ConversationListItem extends ContentListItem {}
export interface ReflectionListItem extends ContentListItem {}

const toConversationPath = (lang: Lang, slug: string) =>
	lang === "pl" ? `/conversations/${slug}` : `/en/conversations/${slug}`;

const toReflectionPath = (lang: Lang, slug: string) =>
	lang === "pl" ? `/reflections/${slug}` : `/en/reflections/${slug}`;

function sortByPublishedAtDesc<T extends { data: { publishedAt: Date } }>(entries: T[]) {
	return entries.sort(
		(a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
	);
}

function toListItems<T extends { data: { title: string; description: string; slug: string } }>(
	entries: T[],
	getPath: (slug: string) => string,
): ContentListItem[] {
	return entries.map((entry) => ({
		title: entry.data.title,
		description: entry.data.description,
		href: getPath(entry.data.slug),
	}));
}

export async function getPublishedConversations(lang: Lang) {
	return sortByPublishedAtDesc(
		await getCollection("conversations", ({ data }) => data.lang === lang && data.published),
	);
}

export async function getPublishedReflections(lang: Lang) {
	return sortByPublishedAtDesc(
		await getCollection("reflections", ({ data }) => data.lang === lang && data.published),
	);
}

export async function getConversationStaticPaths(lang: Lang) {
	const allConversations = await getCollection("conversations", ({ data }) => data.published);
	const conversations = sortByPublishedAtDesc(
		allConversations.filter((entry) => entry.data.lang === lang),
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

export async function getReflectionStaticPaths(lang: Lang) {
	const allReflections = await getCollection("reflections", ({ data }) => data.published);
	const reflections = sortByPublishedAtDesc(
		allReflections.filter((entry) => entry.data.lang === lang),
	);

	return reflections.map((entry) => {
		const alternateEntry = allReflections.find(
			(candidate) =>
				candidate.data.translationKey === entry.data.translationKey &&
				candidate.data.lang !== entry.data.lang,
		);

		return {
			params: { slug: entry.data.slug },
			props: {
				entry,
				alternatePath: alternateEntry
					? getReflectionPath(alternateEntry.data.lang, alternateEntry.data.slug)
					: undefined,
			},
		};
	});
}

export function toConversationListItems(
	entries: CollectionEntry<"conversations">[],
	lang: Lang,
): ConversationListItem[] {
	return toListItems(entries, (slug) => toConversationPath(lang, slug));
}

export function toReflectionListItems(
	entries: CollectionEntry<"reflections">[],
	lang: Lang,
): ReflectionListItem[] {
	return toListItems(entries, (slug) => toReflectionPath(lang, slug));
}

export function getConversationPath(lang: Lang, slug: string) {
	return toConversationPath(lang, slug);
}

export function getReflectionPath(lang: Lang, slug: string) {
	return toReflectionPath(lang, slug);
}
