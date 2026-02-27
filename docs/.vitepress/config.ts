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

    sidebar: {
      guide: [
        {
          text: "Guide",
          collapsed: false,
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Project Structure", link: "/guide/structure" },
            { text: "Commands", link: "/guide/commands" },
          ],
        },
        {
          text: "Shared",
          collapsed: false,
          items: [
            { text: "Overview", link: "/guide/shared/overview" },
            { text: "Hooks", link: "/guide/shared/hooks" },
            { text: "Types", link: "/guide/shared/types" },
            {
              text: "Utilities",
              items: [
                { text: "cn", link: "/guide/shared/utils/cn" },
                { text: "matrix", link: "/guide/shared/utils/matrix" },
                { text: "general", link: "/guide/shared/utils/general" },
              ],
            },
          ],
        },
        {
          text: "Entities",
          collapsed: false,
          items: [
            { text: "Overview", link: "/guide/entities/overview" },
            { text: "Game", link: "/guide/entities/game" },
            { text: "Stats", link: "/guide/entities/stats" },
          ],
        },
      ],
      api: [
        {
          text: "API",
          items: [
            { text: "Analytics", link: "/api/analytics" },
            { text: "Marketing", link: "/api/marketing" },
            { text: "Cookie Consent", link: "/api/cookie-consent" },
          ],
        },
      ],
    },

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
