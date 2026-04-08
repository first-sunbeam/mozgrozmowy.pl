export const siteConfig = {
	siteName: "Rozmowy z Mózgiem",
	siteUrl: "https://mozgrozmowy.pl",
	defaultTitle: "mozgrozmowy.pl",
	defaultDescription: "Site content coming soon.",
	defaultOgImagePath: "/web-app-manifest-512x512.png",
	author: {
		name: "Małgorzata Mikołajczyk",
		jobTitle: "Psycholog · analityk zachowania (BCBA)",
	},
	contact: {
		emailUser: "kontakt",
		emailDomain: "mozgrozmowy.pl",
	},
} as const;

export const contactEmail =
	`${siteConfig.contact.emailUser}@${siteConfig.contact.emailDomain}`;
