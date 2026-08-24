export type Lang = "pl" | "en";

export const ui = {
	pl: {
		home: {
			title: "Refleksje o autyzmie, przeciążeniu i neuroatypowym mózgu | mozgrozmowy.pl",
			description: "Refleksje o autyzmie, przeciążeniu i próbach zrozumienia, jak działa neuroatypowy mózg — w terapii, relacjach i codziennym życiu.",
			pathname: "/",
			kicker: "Najnowsze rozmowy",
			heading: "Rozmowy z Mózgiem",
			intro:
				"Refleksje o autyzmie, przeciążeniu i próbach zrozumienia, jak działa neuroatypowy mózg — w terapii, relacjach i codziennym życiu.",
		},
		conversations: {
			title: "Wszystkie rozmowy | mozgrozmowy.pl",
			description: "Wszystkie rozmowy z serii.",
			pathname: "/conversations/",
			kicker: "Rozmowy",
			heading: "Wszystkie rozmowy",
			intro: "Pełny widok serii rozmów zebrany w jednej, czytelnej liście.",
		},
		reflections: {
			title: "Wszystkie refleksje | mozgrozmowy.pl",
			description: "Wszystkie refleksje na stronie.",
			pathname: "/reflections/",
			kicker: "Refleksje",
			heading: "Wszystkie refleksje",
			intro: "Pełny widok refleksji zebrany w jednej, czytelnej liście.",
		},
		topicMap: {
			title: "Mapa tematów | mozgrozmowy.pl",
			description: "Tematyczna mapa treści na stronie.",
			pathname: "/topic-map/",
			kicker: "Mapa tematów",
			heading: "Tematyczna mapa treści",
			intro:
				"Pogrupowany widok wątków obecnych na stronie, uporządkowany według tematów, a nie chronologii.",
		},
		tags: {
			title: "Wszystkie tagi | mozgrozmowy.pl",
			description: "Wszystkie tagi użyte na stronie.",
			pathname: "/tags/",
			kicker: "Tagi",
			heading: "Wszystkie tagi",
			intro: "Przeglądaj treści według tematów. Każdy tag prowadzi do strony z powiązanymi wpisami.",
			countSuffix: "wpisów",
		},
		about: {
			title: "Kontekst | mozgrozmowy.pl",
			description: "Strona z kontekstem autorskim.",
			pathname: "/about/",
			kicker: "O mnie",
			heading: "Kontekst",
			intro:
				"Kto stoi za rozmowami i dlaczego właśnie tak patrzę na terapię, przeciążenie i neuroatypowe funkcjonowanie.",
			paragraphs: [
				"Pracuję na styku doświadczenia i analizy. Ten projekt nie jest próbą tworzenia szumu wokół neuroatypowości, tylko budowania spokojnego, precyzyjnego języka do rozmowy o autyzmie, terapii, przeciążeniu i codziennym funkcjonowaniu.",
				"Treści publikowane na tej stronie i w moich mediach społecznościowych mają charakter psychoedukacyjny, refleksyjny i informacyjny. Nie są terapią, diagnozą ani indywidualną poradą psychologiczną. Mogą pomagać nazwać doświadczenie albo zobaczyć mechanizm, ale nie zastępują kontaktu ze specjalistą, zwłaszcza w sytuacji kryzysu lub potrzeby indywidualnej pomocy.",
				"Forma jest celowo prosta. Bez archiwów, bez nadmiaru metadanych, bez zbędnego interfejsu. Jedna czytelna droga do treści.",
				"Aktualny status projektu: publiczna wersja alpha. Strona jest gotowa do oglądania i czytania, ale będzie dalej rozwijana redakcyjnie i technicznie.",
			],
			professionalLinkLead:
				"Ta strona jest projektem autorskim. Jeśli szukasz informacji o mojej pracy zawodowej lub konsultacjach, znajdziesz je na stronie:",
			professionalLinkLabel: "autyzm.poznan.pl",
			contactLead: "Jeśli chcesz się odezwać —",
			contactLinkLabel: "napisz",
		},
		article: {
			kicker: "Rozmowa",
			publishedLabel: "Opublikowano",
			updatedLabel: "Aktualizacja",
			translationAvailableLabel: "English version available",
			tagsLabel: "Tagi",
			previousConversationLabel: "← Poprzednia rozmowa",
			nextConversationLabel: "Następna rozmowa →",
			previousReflectionLabel: "← Poprzednia refleksja",
			nextReflectionLabel: "Następna refleksja →",
		},
		reflectionArticle: {
			kicker: "Refleksja",
		},
		tagPage: {
			title: "Tag",
			kicker: "Tag",
			introPrefix: "Wszystkie wpisy oznaczone tagiem",
		},
	},
	en: {
		home: {
			title: "Reflections on autism, overload, and the neurodivergent brain | mozgrozmowy.pl",
			description: "Writing about how a neurodivergent brain works — across therapy, relationships, overload, and everyday life.",
			pathname: "/en/",
			kicker: "Latest conversations",
			heading: "Conversations with the Brain",
			intro:
				"Reflections on autism, overload, and trying to understand how a neurodivergent brain works — in therapy, relationships, and everyday life.",
		},
		conversations: {
			title: "All conversations | mozgrozmowy.pl",
			description: "All conversations from the series.",
			pathname: "/en/conversations/",
			kicker: "Conversations",
			heading: "All conversations",
			intro: "A complete view of the conversation series, kept in one clean list.",
		},
		reflections: {
			title: "All reflections | mozgrozmowy.pl",
			description: "All reflections on the site.",
			pathname: "/en/reflections/",
			kicker: "Reflections",
			heading: "All reflections",
			intro: "A complete view of the reflections, gathered in one clean list.",
		},
		topicMap: {
			title: "Topic map | mozgrozmowy.pl",
			description: "Thematic map of the site's content.",
			pathname: "/en/topic-map/",
			kicker: "Topic map",
			heading: "Thematic map of the content",
			intro:
				"A grouped view of the ideas running through the site, organized by theme instead of chronology.",
		},
		tags: {
			title: "All tags | mozgrozmowy.pl",
			description: "All tags used across the site.",
			pathname: "/en/tags/",
			kicker: "Tags",
			heading: "All tags",
			intro: "Browse the site by topic. Each tag leads to a page with related entries.",
			countSuffix: "entries",
		},
		about: {
			title: "About | mozgrozmowy.pl",
			description: "Author context page.",
			pathname: "/en/about/",
			kicker: "About",
			heading: "Context",
			intro:
				"Who is behind the conversations and why I look at therapy, overload, and neurodivergent functioning this way.",
			paragraphs: [
				"I work at the intersection of lived experience and analysis. This project is not about creating noise around neurodivergence, but about building a calm, precise language for talking about autism, therapy, overload, and everyday functioning.",
				"The writing published on this site and in my social media is psychoeducational, reflective, and informational. It is not therapy, diagnosis, or individual psychological advice. It may help name an experience or notice a mechanism, but it does not replace contact with a professional, especially in crisis or when individual support is needed.",
				"The structure is intentionally simple. No archives, no metadata clutter, no unnecessary interface. Just a clear way into the ideas.",
				"Current project status: public alpha. The site is ready to be viewed and read, but it will continue to evolve both editorially and technically.",
			],
			professionalLinkLead:
				"This site is an authorial project. If you are looking for information about my professional work or consultations, you can find it at:",
			professionalLinkLabel: "autyzm.poznan.pl",
			contactLead: "If you want to reach out —",
			contactLinkLabel: "write to me",
		},
		article: {
			kicker: "Conversation",
			publishedLabel: "Published",
			updatedLabel: "Updated",
			translationAvailableLabel: "Wersja polska dostępna tutaj",
			tagsLabel: "Tags",
			previousConversationLabel: "← Previous conversation",
			nextConversationLabel: "Next conversation →",
			previousReflectionLabel: "← Previous reflection",
			nextReflectionLabel: "Next reflection →",
		},
		reflectionArticle: {
			kicker: "Reflection",
		},
		tagPage: {
			title: "Tag",
			kicker: "Tag",
			introPrefix: "All entries tagged with",
		},
	},
} as const;
