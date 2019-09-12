/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
  title: "Reason Native Web", // Title for your website.
  tagline: "A toolkit for native web development",
  url: "https://reason-native-web.github.io", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "reason-native-web.github.io",
  organizationName: "reason-native-web",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "projects/project-morph", label: "Projects" },
    { doc: "morph/http-getting-started", label: "Guides" },
    { doc: "api", label: "API" },
    { page: "help", label: "Help" },
    { href: "https://github.com/reason-native-web", label: "GitHub" }
    // { blog: true, label: "Blog" }
  ],

  wrapPagesHTML: true,

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  // headerIcon: "img/favicon.ico",
  // footerIcon: "img/favicon.ico",
  // favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#f4511e",
    secondaryColor: "#ff844c"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "dark"
  },
  usePrism: ["reason", "ocaml"],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js",
    "/js/highlight.pack.js"
  ],
  stylesheets: ["/css/code-block-buttons.css", "/css/odoc.css"],

  // On page navigation for the current documentation page.
  // onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg"

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
