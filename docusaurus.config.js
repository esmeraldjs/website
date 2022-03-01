const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Esmerald.Js',
  tagline: 'Powerfull Discord API Library for Node.js',
  url: 'https://esmeraldjs.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'esmeraldjs', 
  projectName: 'esmerald.js',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Esmerald.JS',
        logo: {
          alt: 'Esmeraldjs Logo',
          src: 'img/Esmerald.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'general/intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: "/blog", label: 'Changelogs', position: 'left', title: "Changelogs"},
          {
            href: 'https://github.com/esmeraldjs',
            position: 'right',
          },
          {
            href: 'https://discord.gg/9u8MWUpu4U',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Documentation',
        //     items: [
        //       {
        //         label: 'Documentation',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Discord',
        //         href: 'https://discord.gg/9u8MWUpu4U',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/esmeraldjs',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Esmerald.Js.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
