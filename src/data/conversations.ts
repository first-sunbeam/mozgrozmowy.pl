export interface ConversationItem {
	slug: string;
	title: string;
	description: string;
	topics: string[];
}

export const conversations: ConversationItem[] = [
	{
		slug: "adult-therapy",
		title: '🧠 Rozmowa z Mózgiem: "Jeśli tak wygląda dorosłość, to jak ma wyglądać terapia?"',
		description:
			"Integracja dwóch wystąpień z Konferencji PDA w Perth i próba sprawdzenia, czy opis doświadczenia dorosłych jest spójny z proponowanym sposobem prowadzenia terapii.",
		topics: ["PDA", "terapia", "dorośli"]
	},
	{
		slug: "support-benefit",
		title:
			'Obiektywny system, który dziwnie często wie, ile masz "dostać". Rozmowa z 🧠 Mózgiem: #ŚwiadczenieWspierające',
		description:
			"Tekst o zderzeniu języka systemowego z realnym doświadczeniem osoby, której potrzeby próbuje się przeliczyć na punkty, progi i decyzje.",
		topics: ["system wsparcia", "świadczenia", "orzecznictwo"]
	},
	{
		slug: "sib-trilogy",
		title: "📖 Trylogia o #SIB",
		description:
			"Cykl oparty między innymi na artykule o czynnikach przewidujących nasilenie zachowań samouszkadzających u autystycznych dzieci i nastolatków.",
		topics: ["SIB", "autyzm", "badania"]
	},
	{
		slug: "nd-therapy-analytic-structural",
		title: "Rozmowa „JA ↔ MÓZG”: ND-terapia w trybie analityczno-strukturalnym",
		description:
			"Próba opisania terapii, która nie romantyzuje chaosu, ale też nie narzuca struktury ignorującej granice układu nerwowego.",
		topics: ["ND-terapia", "analiza", "struktura"]
	},
	{
		slug: "knowledge-and-overload",
		title: "💡 Wiedza nie daje ulgi. Po prostu wiesz dokładniej, kiedy zaczyna się przeciążenie.",
		description:
			"Tekst o tym, że rozumienie mechanizmu nie zawsze przynosi ukojenie, ale może dawać bardziej precyzyjny język do opisu granic i kosztów.",
		topics: ["przeciążenie", "wiedza", "samoregulacja"]
	}
];

export const conversationsEn: ConversationItem[] = [
	{
		slug: "adult-therapy",
		title: '🧠 Conversation with the Brain: "If this is what adulthood looks like, what should therapy look like?"',
		description:
			"An integration of two talks from the PDA Conference in Perth and an attempt to see whether the description of adult experience is coherent with the proposed therapeutic approach.",
		topics: ["PDA", "therapy", "adults"]
	},
	{
		slug: "support-benefit",
		title:
			'An objective system that strangely often knows how much support you are supposed to "deserve". Conversation with 🧠 Brain: #SupportBenefit',
		description:
			"A text about the collision between bureaucratic language and the lived experience of a person whose needs are translated into points, thresholds, and decisions.",
		topics: ["support system", "benefits", "assessment"]
	},
	{
		slug: "sib-trilogy",
		title: "📖 Trilogy on #SIB",
		description:
			"A series based in part on a paper about predictors of the severity of self-injurious behaviours in autistic children and adolescents.",
		topics: ["SIB", "autism", "research"]
	},
	{
		slug: "nd-therapy-analytic-structural",
		title: "Conversation “ME ↔ BRAIN”: ND therapy in an analytical-structural mode",
		description:
			"An attempt to describe therapy that does not romanticize chaos but also does not impose structure that ignores nervous-system limits.",
		topics: ["ND therapy", "analysis", "structure"]
	},
	{
		slug: "knowledge-and-overload",
		title: "💡 Knowledge does not bring relief. It only lets you know more precisely when overload begins.",
		description:
			"A text about how understanding the mechanism does not always soothe, but it can offer more precise language for limits and cost.",
		topics: ["overload", "knowledge", "self-regulation"]
	}
];

export const topicMap = [
	{
		title: "Terapia i relacja",
		items: [
			"Jak terapia ma wyglądać, jeśli wymaganie samo uruchamia blokadę",
			"ND-terapia w trybie analityczno-strukturalnym",
			"Granice między wsparciem a zarządzaniem"
		]
	},
	{
		title: "System i świadczenia",
		items: [
			"Świadczenie wspierające i logika punktacji",
			"Jak system opisuje potrzebę wsparcia",
			"Co dzieje się, gdy doświadczenie nie mieści się w formularzu"
		]
	},
	{
		title: "Przeciążenie i regulacja",
		items: [
			"Wiedza i moment rozpoznania przeciążenia",
			"Koszt funkcjonowania i zmienna wydolność",
			"Język opisu granic układu nerwowego"
		]
	},
	{
		title: "Badania i interpretacja",
		items: [
			"Trylogia o SIB",
			"Przekład wyników badań na doświadczenie",
			"Co badanie mówi, a czego nie wyjaśnia"
		]
	}
];

export const topicMapEn = [
	{
		title: "Therapy and relationship",
		items: [
			"What therapy should look like when demand itself triggers a block",
			"ND therapy in an analytical-structural mode",
			"The boundary between support and management"
		]
	},
	{
		title: "Systems and benefits",
		items: [
			"Support benefit and the logic of scoring",
			"How the system describes the need for support",
			"What happens when lived experience does not fit the form"
		]
	},
	{
		title: "Overload and regulation",
		items: [
			"Knowledge and the moment overload becomes visible",
			"The cost of functioning and changing capacity",
			"Language for nervous-system limits"
		]
	},
	{
		title: "Research and interpretation",
		items: [
			"The SIB trilogy",
			"Translating research findings into lived experience",
			"What a study says and what it still cannot explain"
		]
	}
];
