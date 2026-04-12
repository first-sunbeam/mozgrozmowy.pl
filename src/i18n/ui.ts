export type Lang = "pl" | "en";

export const ui = {
	pl: {
		home: {
			title: "Rozmowy o terapii, przeciążeniu i wsparciu | mozgrozmowy.pl",
			description: "Spokojne, czytelne rozmowy o terapii, przeciążeniu i systemach wsparcia. Teksty o neuroróżnorodności, regulacji i codziennym funkcjonowaniu.",
			pathname: "/",
			kicker: "Najnowsze rozmowy",
			heading:
				"Spokojne, czytelne rozmowy o terapii, przeciążeniu i systemach wsparcia.",
			intro:
				"Strona główna pokazuje najnowsze teksty z serii. Układ pozostaje prosty: czytelne tytuły, krótkie opisy i miejsce na samą treść.",
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
				"Ta strona daje kontekst: kto stoi za rozmowami i jak ten projekt podchodzi do analizy, terapii, przeciążenia i doświadczenia.",
			paragraphs: [
				"Pracuję na styku doświadczenia i analizy. Ten projekt nie jest próbą tworzenia szumu wokół neuroróżnorodności, tylko budowania spokojnego, precyzyjnego języka dla terapii, systemów wsparcia, przeciążenia i codziennego funkcjonowania.",
				"Forma jest celowo prosta. Bez archiwów, bez nadmiaru metadanych, bez zbędnego interfejsu. Jedna czytelna droga do treści.",
				"Aktualny status projektu: publiczna wersja alpha. Strona jest gotowa do oglądania i czytania, ale będzie dalej rozwijana redakcyjnie i technicznie.",
			],
			contactLead: "Jeśli chcesz się odezwać —",
			contactLinkLabel: "napisz",
		},
		article: {
			kicker: "Rozmowa",
			publishedLabel: "Opublikowano",
			updatedLabel: "Aktualizacja",
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
			title: "Conversations about therapy, overload, and support | mozgrozmowy.pl",
			description: "Calm, readable conversations about therapy, overload, and systems of support. Writing on neurodivergence, regulation, and everyday functioning.",
			pathname: "/en/",
			kicker: "Latest conversations",
			heading:
				"Calm, readable conversations about therapy, overload, and systems of support.",
			intro:
				"This homepage shows the latest entries from the series. The structure stays simple: clear titles, short descriptions, and space for the writing itself.",
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
				"This page gives context: who is behind the conversations and how this project approaches analysis, therapy, overload, and lived experience.",
			paragraphs: [
				"I work at the intersection of lived experience and analysis. This project is not about creating noise around neurodivergence, but about building a calm, precise language for therapy, support systems, overload, and everyday functioning.",
				"The structure is intentionally simple. No archives, no metadata clutter, no unnecessary interface. Just a clear way into the ideas.",
				"Current project status: public alpha. The site is ready to be viewed and read, but it will continue to evolve both editorially and technically.",
			],
			contactLead: "If you want to reach out —",
			contactLinkLabel: "write to me",
		},
		article: {
			kicker: "Conversation",
			publishedLabel: "Published",
			updatedLabel: "Updated",
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
