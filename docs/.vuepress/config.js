module.exports = {
  title: "落羽",
  base: "/blog/",
  themeConfig: {
    navbar: [
      { text: "前端学习", link: "/front-end/" },
      // { text: "杂", link: "/journey/" },
      // { text: "标签", link: "/tag/" },
    ],
    sidebar: {
      "/front-end/": ["make-custom-svg-map.md", "how-to-show-country-flag.md"],
    },
    lastUpdated: true,
  },
  plugins: [
    [
      "@vuepress/docsearch",
      {
        apiKey: "e181b068b0389b48c9e6c973c17ec438",
        indexName: "spike-leung",
      },
    ],
  ],
};
