import type { Lang } from "../i18n/ui";

export const tagPairs = [
	{ pl: "ABA", en: "ABA" },
	{ pl: "ACT", en: "ACT" },
	{ pl: "ADHD", en: "ADHD" },
	{ pl: "PDA", en: "PDA" },
	{ pl: "SIB", en: "SIB" },
	{ pl: "akceptacja", en: "acceptance" },
	{ pl: "autonomia", en: "autonomy" },
	{ pl: "autyzm", en: "autism" },
	{ pl: "burnout", en: "burnout" },
	{ pl: "czas", en: "time" },
	{ pl: "double empathy", en: "double empathy" },
	{ pl: "emocje", en: "emotions" },
	{ pl: "hiperfokus", en: "hyperfocus" },
	{ pl: "komunikacja", en: "communication" },
	{ pl: "kryzys", en: "crisis" },
	{ pl: "lęk", en: "anxiety" },
	{ pl: "maskowanie", en: "masking" },
	{ pl: "meltdown", en: "meltdown" },
	{ pl: "monotropizm", en: "monotropism" },
	{ pl: "neuroróżnorodność", en: "neurodiversity" },
	{ pl: "niepełnosprawność", en: "disability" },
	{ pl: "opieka", en: "care" },
	{ pl: "perfekcjonizm", en: "perfectionism" },
	{ pl: "przetwarzanie", en: "processing" },
	{ pl: "przeciążenie", en: "overload" },
	{ pl: "psychoterapia", en: "psychotherapy" },
	{ pl: "regulacja", en: "regulation" },
	{ pl: "relacje", en: "relationships" },
	{ pl: "rodzicielstwo", en: "parenting" },
	{ pl: "sensoryka", en: "sensory" },
	{ pl: "shutdown", en: "shutdown" },
	{ pl: "stres", en: "stress" },
	{ pl: "system wsparcia", en: "support system" },
	{ pl: "terapia", en: "therapy" },
	{ pl: "tożsamość", en: "identity" },
	{ pl: "trauma", en: "trauma" },
	{ pl: "uwaga", en: "attention" },
	{ pl: "współregulacja", en: "co-regulation" },
] as const;

export const tagVocabulary = {
	pl: tagPairs.map((pair) => pair.pl),
	en: tagPairs.map((pair) => pair.en),
} as const;

export function slugifyTag(tag: string) {
	return tag
		.toLowerCase()
		.replace(/ł/g, "l")
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

export function getTagPath(lang: Lang, tag: string) {
	const slug = slugifyTag(tag);
	return lang === "pl" ? `/tags/${slug}` : `/en/tags/${slug}`;
}

export function getTagBySlug(lang: Lang, slug: string) {
	return tagVocabulary[lang].find((tag) => slugifyTag(tag) === slug);
}

export function translateTag(tag: string, from: Lang, to: Lang) {
	const pair = tagPairs.find((item) => item[from] === tag);
	return pair?.[to];
}
