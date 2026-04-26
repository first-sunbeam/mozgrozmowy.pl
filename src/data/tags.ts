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
	{ pl: "pamięć", en: "memory" },
	{ pl: "komunikacja", en: "communication" },
	{ pl: "kryzys", en: "crisis" },
	{ pl: "lęk", en: "anxiety" },
	{ pl: "maskowanie", en: "masking" },
	{ pl: "meltdown", en: "meltdown" },
	{ pl: "monotropizm", en: "monotropism" },
	{ pl: "neuroatypowość", en: "neurodivergence" },
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
	{ pl: "zamrożenie", en: "freeze" },
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
	return lang === "pl" ? `/tags/${slug}/` : `/en/tags/${slug}/`;
}

export function getTagBySlug(lang: Lang, slug: string) {
	return tagVocabulary[lang].find((tag) => slugifyTag(tag) === slug);
}

export function translateTag(tag: string, from: Lang, to: Lang) {
	const pair = tagPairs.find((item) => item[from] === tag);
	return pair?.[to];
}

const tagExpansions: Partial<Record<Lang, Partial<Record<string, string>>>> = {
	pl: {
		ABA: "Applied Behavior Analysis",
		ACT: "Acceptance and Commitment Therapy",
		ADHD: "Attention-Deficit/Hyperactivity Disorder",
		PDA: "Persistent Drive for Autonomy",
		SIB: "Self-Injurious Behavior",
	},
	en: {
		ABA: "Applied Behavior Analysis",
		ACT: "Acceptance and Commitment Therapy",
		ADHD: "Attention-Deficit/Hyperactivity Disorder",
		PDA: "Persistent Drive for Autonomy",
		SIB: "Self-Injurious Behavior",
	},
};

const tagExplanations: Partial<Record<Lang, Partial<Record<string, string>>>> = {
	pl: {
		ABA: "Applied Behavior Analysis. Termin używany dla podejść opartych na analizie zachowania; w tym projekcie pojawia się głównie w kontekście krytycznej refleksji nad praktyką, etyką i doświadczeniem osób neuroatypowych.",
		ACT: "Acceptance and Commitment Therapy. Podejście terapeutyczne skupione na akceptacji, elastyczności psychologicznej, wartościach i świadomym działaniu mimo trudnych stanów wewnętrznych.",
		ADHD: "Attention-Deficit/Hyperactivity Disorder. Skrót używany dla zespołu nadpobudliwości psychoruchowej z deficytem uwagi; na stronie pojawia się w kontekście doświadczenia, regulacji, uwagi i przeciążenia.",
		PDA: "Persistent Drive for Autonomy; historycznie termin rozwijano także jako Pathological Demand Avoidance. W tym projekcie używamy go do opisu silnej potrzeby autonomii i trudności pojawiających się pod presją żądań, kontroli lub przymusu.",
		SIB: "Self-Injurious Behavior. Skrót odnoszący się do zachowań autoagresywnych; tutaj używany ostrożnie i kontekstowo, z uwzględnieniem przeciążenia, regulacji i znaczenia zachowania, a nie tylko jego zewnętrznego obrazu.",
	},
	en: {
		ABA: "Applied Behavior Analysis. The term is used for approaches grounded in behavior analysis; on this site it appears mainly in the context of critical reflection on practice, ethics, and neurodivergent lived experience.",
		ACT: "Acceptance and Commitment Therapy. A therapeutic approach focused on acceptance, psychological flexibility, values, and committed action in the presence of difficult internal states.",
		ADHD: "Attention-Deficit/Hyperactivity Disorder. The abbreviation is used for ADHD as a diagnostic term; on this site it appears in discussions of lived experience, regulation, attention, and overload.",
		PDA: "Persistent Drive for Autonomy; historically, the term was also expanded as Pathological Demand Avoidance. In this project, it is used to describe a strong drive for autonomy and the difficulties that can emerge under pressure, demands, control, or coercion.",
		SIB: "Self-Injurious Behavior. This abbreviation refers to self-injurious behavior; here it is used carefully and contextually, with attention to overload, regulation, and the meaning of the behavior rather than only its outward form.",
	},
};

export function getTagExpansion(lang: Lang, tag: string) {
	return tagExpansions[lang]?.[tag];
}

export function getTagExplanation(lang: Lang, tag: string) {
	return tagExplanations[lang]?.[tag];
}
