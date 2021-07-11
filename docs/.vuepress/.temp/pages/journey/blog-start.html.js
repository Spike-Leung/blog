export const data = {
  "key": "v-cfe3c54c",
  "path": "/journey/blog-start.html",
  "title": "Vuepress 博客搭建",
  "lang": "en-US",
  "frontmatter": {
    "tag": "vuepress"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "博客介绍",
      "slug": "博客介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "博客技术栈",
      "slug": "博客技术栈",
      "children": []
    },
    {
      "level": 2,
      "title": "搭建遇到的难点",
      "slug": "搭建遇到的难点",
      "children": [
        {
          "level": 3,
          "title": "持续化集成到github pages",
          "slug": "持续化集成到github-pages",
          "children": []
        },
        {
          "level": 3,
          "title": "使用plugin-blog实现标签分类",
          "slug": "使用plugin-blog实现标签分类",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "journey/blog-start.md",
  "git": {
    "updatedTime": 1580895902000,
    "contributors": [
      {
        "name": "Spike",
        "email": "l-yanlei@hotmail.com",
        "commits": 3
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
