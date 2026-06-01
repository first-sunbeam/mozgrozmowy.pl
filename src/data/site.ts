export const siteConfig = {
	siteName: "Rozmowy z Mózgiem",
	siteUrl: "https://mozgrozmowy.pl",
	defaultTitle: "mozgrozmowy.pl",
	defaultDescription: "Spokojne, czytelne rozmowy o terapii, przeciążeniu i systemach wsparcia.",
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
