import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Word Search",
  description:
    "A word search puzzle game built with React Router, TypeScript, and Tailwind CSS.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/analytics" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Project Structure", link: "/guide/structure" },
          { text: "Commands", link: "/guide/commands" },
          { text: "Shared Layer", link: "/guide/shared/index" },
        ],
      },
      {
        text: "Shared",
        items: [
          { text: "Overview", link: "/guide/shared/index" },
          { text: "Hooks", link: "/guide/shared/hooks" },
          { text: "Types", link: "/guide/shared/types" },
          { text: "Utilities", link: "/guide/shared/utils" },
        ],
      },
      {
        text: "API",
        items: [
          { text: "Analytics", link: "/api/analytics" },
          { text: "Marketing", link: "/api/marketing" },
          { text: "Cookie Consent", link: "/api/cookie-consent" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/t-oma/COP" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026-present",
    },
  },

  vite: {
    server: {
      port: 5174,
    },
  },
});
