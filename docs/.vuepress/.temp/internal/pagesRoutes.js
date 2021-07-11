import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-8c02d0de","/front-end/","介绍",["/front-end/index.html","/front-end/README.md"]],
  ["v-fd7bb9ec","/front-end/how-to-show-country-flag.html","根据国家显示国旗图标",["/front-end/how-to-show-country-flag.md"]],
  ["v-283c6954","/front-end/make-custom-svg-map.html","制作 svg 地图轮廓",["/front-end/make-custom-svg-map.md"]],
  ["v-d04b9b30","/journey/","journey",["/journey/index.html","/journey/README.md"]],
  ["v-cfe3c54c","/journey/blog-start.html","Vuepress 博客搭建",["/journey/blog-start.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
