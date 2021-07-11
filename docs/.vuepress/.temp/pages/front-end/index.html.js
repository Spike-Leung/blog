export const data = {
  "key": "v-8c02d0de",
  "path": "/front-end/",
  "title": "介绍",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "front-end/README.md",
  "git": {
    "updatedTime": 1580566718000,
    "contributors": [
      {
        "name": "Spike",
        "email": "l-yanlei@hotmail.com",
        "commits": 1
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
