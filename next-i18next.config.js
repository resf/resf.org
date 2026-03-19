module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === "development",
  fallbackLng: "en",
  lowerCaseLng: false,
  i18n: {
    defaultLocale: "en",
    // Only include locales that have translation files in public/locales/.
    // Add locales back here as their translation files are created.
    locales: ["en"],
  },
  react: {
    useSuspense: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
