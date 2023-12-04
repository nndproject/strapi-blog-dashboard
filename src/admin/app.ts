import favicon_custom from "./extensions/favicon/mstile-150x150.png";

export default {
  config: {
    // Replace the favicon
    head: {
      favicon: favicon_custom,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    // Extend the translations
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "NND Dashboard",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
