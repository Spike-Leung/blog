module.exports = {
  title: '落羽',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: '前端学习', link: '/front-end/' },
      { text: '杂', link: '/journey/' },
      { text: '标签', link: '/tag/' },
    ],
    navbar: true,
    sidebar: {
      '/front-end/': [
        '',
        'calculate-element-accurate-position',
        'make-custom-svg-map',
      ],
      '/journey/': [
        '',
        'blog-start',
      ],
    },
    searchPlaceholder: '搜索标题',
    lastUpdated: true,
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-link',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/blog',
      {
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag', 'tags'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            // Layout of the `entry page`
            layout: 'Tags',
            // Layout of the `scope page`
            scopeLayout: 'Tag'
          },
        ],
      },
    ],
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'img': '../../images',
      },
    },
  },
};
