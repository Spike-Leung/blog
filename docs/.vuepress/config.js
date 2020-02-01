module.exports = {
  title: '落羽',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: '前端学习', link: '/front-end/' },
      { text: '随想', link: '/journey/' },
    ],
    navbar: true,
    sidebar: {
      '/front-end/': [
        '',
        'calculate-element-accurate-position',
        'make-custom-svg-map',
      ],
    },
    searchPlaceholder: '现在只可以搜索标题',
    lastUpdated: true,
  },
};
