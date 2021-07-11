export const data = {
  "key": "v-d04b9b30",
  "path": "/journey/",
  "title": "journey",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "journey/README.md",
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
