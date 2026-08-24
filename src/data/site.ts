export const siteConfig = {
	siteName: "Rozmowy z Mózgiem",
	siteUrl: "https://mozgrozmowy.pl",
	defaultTitle: "mozgrozmowy.pl",
	defaultDescription: "Refleksje o autyzmie, przeciążeniu i próbach zrozumienia, jak działa neuroatypowy mózg — w terapii, relacjach i codziennym życiu.",
	defaultOgImagePath: "/og-default.png",
	author: {
		name: "Małgorzata Mikołajczyk",
		jobTitle: "Psycholog · Analityk zachowania (BCBA)",
	},
	contact: {
		emailUser: "kontakt",
		emailDomain: "mozgrozmowy.pl",
	},
} as const;

export const contactEmail =
	`${siteConfig.contact.emailUser}@${siteConfig.contact.emailDomain}`;
