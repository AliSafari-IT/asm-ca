// docusaurus.config.ts
import { themes as prismThemes } from "prism-react-renderer";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

const getIntlVars = {
  defaultLocale: "en",
  locales: ["en", "nl", "fa"],
  path: "i18n",
  localeConfigs: {
    en: {
      label: "English",
      direction: "ltr",
      htmlLang: "en-US",
      calendar: "gregory",
      path: "en",
    },
    nl: {
      label: "Nederlands",
      direction: "ltr",
      htmlLang: "nl-NL",
      calendar: "gregory",
      path: "nl",
    },
    fa: {
      label: "فارسی",
      direction: "rtl",
      htmlLang: "fa-IR",
      calendar: "persian",
      path: "fa",
    },
  },
};

const config = {
  title: "DevKnowledgeBase",
  tagline: "Explore, Learn, Innovate",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://asafarim.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: "/",
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "asafarim",
  projectName: "DevDocsCentral",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: getIntlVars,

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/AliSafari-IT/asafarim/edit/main/techdocs/",
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        pages: {
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: {
          path: "./blog",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time
              ? defaultReadingTime({ content })
              : defaultReadingTime({
                content,
                options: { wordsPerMinute: 100 },
              }),
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/AliSafari-IT/asafarim/edit/main/techdocs/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: "Blog title",
          blogDescription: "Blog",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Latest Posts & Articles",
          routeBasePath: "blog",
          include: ["**/*.{md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          postsPerPage: 5,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          feedOptions: {
            type: "all",
            title: '',
            description: '',
            copyright: '',
            language: undefined,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "ASafariM",
      logo: {
        alt: "DevDocsCentral Logo",
        src: "img/logoT.svg",
        target: "_self",
        href: "https://asafarim.com",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "TechTutorialVault",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "code-n-create", label: "Code & Create", position: "left" },
        { to: "/ideahub", label: "Idea Hub", position: "left" },
        { to: "/About", label: "About", position: "right" },
        { to: "/Contact", label: "Contact", position: "right" },
        { to: "/Eula", label: "EULA", position: "right" },
        {
          href: "https://github.com/AliSafari-IT",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "TechDocsHub",
          items: [
            {
              label: "ASafariM",
              to: "//asafarim.com",
              prependBaseUrlToHref: true,
            },
            {
              label: "Tutorial Vault",
              to: "/docs/category/a-step-by-step-guide",
            },
            {
              label: "DevDocsCentral",
              to: "/docs/category/topics",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/10703628/ali-safari",
            },
            {
              label: "X",
              href: "https://x.com/asafarim",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Code & Create",
              to: "/code-n-create",
              position: "right",
            },
            {
              label: "GitHub",
              href: "https://github.com/AliSafari-IT",
            },
            {
              label: "EULA",
              to: "/Eula",
            },
            {
              label: "Disclaimer",
              to: "/Disclaimer",
            },
            {
              label: "Cookies",
              to: "/Cookies/En",
            },
          ],
        },
      ],
      copyright: `       
      Copyright © ${new Date().getFullYear()} ASAFARIM, Inc.`,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    tailwindPlugin,
    function (context, options) {
      return {
        name: "custom-docusaurus-plugin",
        configureWebpack(config, isServer, utils) {
          return {
            devServer: {
              proxy: {
                "/api": {
                  target: "http://localhost:3000",
                  changeOrigin: true,
                },
              },
            },
          };
        },
      };
    },
    path.resolve(__dirname, "plugins/custom-webpack-plugin/index.js"),
  ],
};

export default config;
