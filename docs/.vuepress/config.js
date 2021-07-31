const { path } = require("@vuepress/utils");

module.exports = {
  title: "落羽",
  base: "/blog/",
  theme: path.resolve(__dirname, 'theme'),
  themeConfig: {
    navbar: [
      { text: "前端学习", link: "/front-end/" },
      { text: "杂", link: "/others/" },
      // { text: "标签", link: "/tag/" },
    ],
    sidebar: {
      "/front-end/": ["make-custom-svg-map.md", "how-to-show-country-flag.md"],
      "/others/": ["svn-cheatsheet.md"],
    },
    lastUpdated: true,
  },
  plugins: [
    [
      "@vuepress/docsearch",
      {
        apiKey: "e181b068b0389b48c9e6c973c17ec438",
        indexName: "spike-leung",
        locales: {
          "/": {
            placeholder: "Search Documentation",
          },
          "/zh/": {
            placeholder: "搜索文档",
          },
        },
      },
    ],
  ],
};
