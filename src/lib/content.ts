import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { getTagPath, slugifyTag, translateTag } from "../data/tags";
import type { Lang } from "../i18n/ui";

export interface ContentListItem {
	title: string;
	description: string;
	href: string;
	publishedAt: Date;
}

export interface ConversationListItem extends ContentListItem {}
export interface ReflectionListItem extends ContentListItem {}

export interface TagOverviewItem {
	tag: string;
	href: string;
	count: number;
}

export interface ArticleNavItem {
	title: string;
	href: string;
}

export type ArticleEntry =
	| CollectionEntry<"conversations">
	| CollectionEntry<"reflections">;

const toConversationPath = (lang: Lang, slug: string) =>
	lang === "pl" ? `/conversations/${slug}/` : `/en/conversations/${slug}/`;

const toReflectionPath = (lang: Lang, slug: string) =>
	lang === "pl" ? `/reflections/${slug}/` : `/en/reflections/${slug}/`;

function sortByPublishedAtDesc<T extends { data: { publishedAt: Date } }>(entries: T[]) {
	return entries.sort(
		(a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
	);
}

function toArticlePath(entry: ArticleEntry) {
	return entry.collection === "conversations"
		? getConversationPath(entry.data.lang, entry.data.slug)
		: getReflectionPath(entry.data.lang, entry.data.slug);
}

function toListItems<
	T extends { data: { title: string; description: string; slug: string; publishedAt: Date } },
>(entries: T[], getPath: (slug: string) => string): ContentListItem[] {
	return entries.map((entry) => ({
		title: entry.data.title,
		description: entry.data.description,
		href: getPath(entry.data.slug),
		publishedAt: entry.data.publishedAt,
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

	return conversations.map((entry, index) => {
		const alternateEntry = allConversations.find(
			(candidate) =>
				candidate.data.translationKey === entry.data.translationKey &&
				candidate.data.lang !== entry.data.lang,
		);
		const previousEntry = conversations[index - 1];
		const nextEntry = conversations[index + 1];

		return {
			params: { slug: entry.data.slug },
			props: {
				entry,
				alternatePath: alternateEntry
					? getConversationPath(alternateEntry.data.lang, alternateEntry.data.slug)
					: undefined,
				previousEntry: previousEntry
					? {
							title: previousEntry.data.title,
							href: getConversationPath(previousEntry.data.lang, previousEntry.data.slug),
						}
					: undefined,
				nextEntry: nextEntry
					? {
							title: nextEntry.data.title,
							href: getConversationPath(nextEntry.data.lang, nextEntry.data.slug),
						}
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

	return reflections.map((entry, index) => {
		const alternateEntry = allReflections.find(
			(candidate) =>
				candidate.data.translationKey === entry.data.translationKey &&
				candidate.data.lang !== entry.data.lang,
		);
		const previousEntry = reflections[index - 1];
		const nextEntry = reflections[index + 1];

		return {
			params: { slug: entry.data.slug },
			props: {
				entry,
				alternatePath: alternateEntry
					? getReflectionPath(alternateEntry.data.lang, alternateEntry.data.slug)
					: undefined,
				previousEntry: previousEntry
					? {
							title: previousEntry.data.title,
							href: getReflectionPath(previousEntry.data.lang, previousEntry.data.slug),
						}
					: undefined,
				nextEntry: nextEntry
					? {
							title: nextEntry.data.title,
							href: getReflectionPath(nextEntry.data.lang, nextEntry.data.slug),
						}
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

export async function getPublishedArticles(lang: Lang): Promise<ArticleEntry[]> {
	const [conversations, reflections] = await Promise.all([
		getPublishedConversations(lang),
		getPublishedReflections(lang),
	]);

	return sortByPublishedAtDesc([...conversations, ...reflections]);
}

export async function getTagStaticPaths(lang: Lang) {
	const articles = await getPublishedArticles(lang);
	const tags = [...new Set(articles.flatMap((entry) => entry.data.topics))];

	return tags.map((tag) => {
		const entries = articles.filter((entry) => entry.data.topics.includes(tag));
		const alternateTag = translateTag(tag, lang, lang === "pl" ? "en" : "pl");

		return {
			params: { tag: slugifyTag(tag) },
			props: {
				tag,
				items: entries.map((entry) => ({
					title: entry.data.title,
					description: entry.data.description,
					href: toArticlePath(entry),
					publishedAt: entry.data.publishedAt,
				})),
				alternatePath: alternateTag ? getTagPath(lang === "pl" ? "en" : "pl", alternateTag) : undefined,
			},
		};
	});
}

export async function getTagOverviewItems(lang: Lang): Promise<TagOverviewItem[]> {
	const articles = await getPublishedArticles(lang);
	const counts = new Map<string, number>();

	for (const entry of articles) {
		for (const tag of entry.data.topics) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}

	return [...counts.entries()]
		.map(([tag, count]) => ({
			tag,
			href: getTagPath(lang, tag),
			count,
		}))
		.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, lang));
}

