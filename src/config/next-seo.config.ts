const NextSeo = {
  defaultTitle: "Bright Links",
  titleTemplate: "%s | Bright Links",
  description:
    "Bright links, is an app where you can find different resources to learn more about your deen!",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.brightlinks.me",
    site_name: "Bright Links",

    images: [
      {
        url: "https://www.brightlinks.me/assets/og_image.png",
        height: 630,
        width: 1200,
      },
    ],
  },

  twitter: {
    // handle: "@",
    // site: "@",
    cardType: "summary_large_image",
  },
};

export default NextSeo;
