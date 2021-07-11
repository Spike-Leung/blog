export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "tagline": "一个积累和反思的地方",
    "footer": "MIT Licensed | Copyright © 2021-present Spike Leung"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前端学习",
      "slug": "前端学习",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1580647825000,
    "contributors": [
      {
        "name": "Spike",
        "email": "l-yanlei@hotmail.com",
        "commits": 2
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
