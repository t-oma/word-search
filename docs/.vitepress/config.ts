import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Word Search",
  description:
    "A word search puzzle game built with React Router, TypeScript, and Tailwind CSS.",
  themeConfig: {
    search: {
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
      { text: "FSD", link: "/fsd/", activeMatch: "/fsd/" },
      { text: "API", link: "/api/analytics", activeMatch: "/api/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          collapsed: false,
          items: [
            { text: "Getting Started", link: "/guide/" },
            { text: "Project Structure", link: "/guide/structure" },
            { text: "Commands", link: "/guide/commands" },
          ],
        },
      ],

      "/fsd/": [
        {
          text: "FSD",
          collapsed: false,
          items: [
            { text: "Overview", link: "/fsd/" },
            { text: "Shared", link: "/fsd/shared" },
            { text: "Entities", link: "/fsd/entities" },
          ],
        },
      ],

      "/api/": [
        {
          text: "Features",
          collapsed: false,
          items: [
            {
              text: "Grid Generator",
              link: "/api/features/grid-generator/",
              items: [
                {
                  text: "useGenerator()",
                  link: "/api/features/grid-generator/useGenerator",
                },
                {
                  text: "Generators",
                  items: [
                    {
                      text: "generateGridLetters()",
                      link: "/api/features/grid-generator/generators/generateGridLetters",
                    },
                    {
                      text: "generateWords()",
                      link: "/api/features/grid-generator/generators/generateWords",
                    },
                  ],
                },
                {
                  text: "Placement",
                  items: [
                    {
                      text: "tryPlaceWord()",
                      link: "/api/features/grid-generator/placement/tryPlaceWord",
                    },
                  ],
                },
                {
                  text: "Helpers",
                  link: "/api/features/grid-generator/helpers",
                },
              ],
            },
          ],
        },
        {
          text: "Entities",
          collapsed: false,
          items: [
            { text: "Analytics", link: "/api/analytics" },
            { text: "Marketing", link: "/api/marketing" },
            { text: "Cookie Consent", link: "/api/cookie-consent" },
          ],
        },
        {
          text: "Entities",
          collapsed: false,
          items: [
            { text: "Overview", link: "/api/entities/overview" },
            { text: "Game", link: "/api/entities/game" },
            { text: "Stats", link: "/api/entities/stats" },
          ],
        },
        {
          text: "Shared",
          collapsed: false,
          items: [
            { text: "Overview", link: "/api/shared/overview" },
            { text: "Hooks", link: "/api/shared/hooks" },
            { text: "Types", link: "/api/shared/types" },
            {
              text: "Utilities",
              link: "/api/shared/utils/cn",
              items: [
                { text: "cn", link: "/api/shared/utils/cn" },
                { text: "matrix", link: "/api/shared/utils/matrix" },
                { text: "general", link: "/api/shared/utils/general" },
              ],
            },
            { text: "Lib", link: "/api/shared/lib" },
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
