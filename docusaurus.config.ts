import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DSA Final Exam Notes',
  tagline: 'Data Structures & Algorithms — Complete Study Guide',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'student',
  projectName: 'dsa-notes',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DSA Notes',
      logo: {
        alt: 'DSA Notes',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'dsaSidebar',
          position: 'left',
          label: '📚 Study Notes',
        },
        {
          to: '/docs/exam-qa/differences',
          label: '❓ Exam Q&A',
          position: 'left',
        },
        {
          to: '/original-notes',
          label: '📄 Original Notes',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Topics',
          items: [
            {label: 'ADT & Searching',       to: '/docs/abstract-data-types-and-searching/abstract-data-types'},
            {label: 'Linked List',            to: '/docs/linked-list/introduction'},
            {label: 'Stack',                  to: '/docs/stack/stack-operations'},
            {label: 'Queue',                  to: '/docs/queue/queue-operations'},
            {label: 'Elementary Sorting',     to: '/docs/elementary-sorting/bubble-sort'},
          ],
        },
        {
          title: 'More Topics',
          items: [
            {label: 'Advanced Sorting',       to: '/docs/advanced-sorting/merge-sort'},
            {label: 'Binary Tree',            to: '/docs/binary-tree/properties-and-types'},
            {label: 'Binary Search Tree',     to: '/docs/binary-search-tree/operations'},
            {label: 'AVL Tree',               to: '/docs/avl-tree/introduction'},
            {label: 'Graph',                  to: '/docs/graph/representation'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Original Notes (PDF)',   to: '/original-notes'},
          ],
        },
      ],
      copyright: `DSA Final Exam Notes · ${new Date().getFullYear()} · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
