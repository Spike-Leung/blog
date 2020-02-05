---
tag: vuepress
---

# Vuepress 博客搭建

## 博客介绍
目前博客还比较简单，能够编写markdown并且在github page上呈现。

以下是计划要做的:

 - [ ] sidebar自动生成
 - [ ] 首页连接自动生成
 - [x] 标签分类 _(2020/02/05)_
 - [ ] 目录分类
 - [ ] 按日期归档
 - [ ] 自定义主题

## 博客技术栈

- [VuePress](https://vuepress.vuejs.org/)
- [Github Page](https://pages.github.com/)
- [Travis](https://travis-ci.org/)
- [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/)

## 搭建遇到的难点
### 持续化集成到github pages
官网提供了[GitHub Pages and Travis CI](https://vuepress.vuejs.org/guide/deploy.html#github-pages)的继承方法，按照步骤来就好了。

需要注意的是，`.travis.yml`中有一个`github_token`的配置，这个配置需要到github生成一个token，然后在travis上配置到博客的环境变量中。
### 使用plugin-blog实现标签分类
安装插件，按照教程设置配置后，发现没有出现标签分类的页面。
![image](~img/plugin-blog-frontmatter-classifier.png)

文档中说，会使用`Tags`布局作为tag列表的布局，`Tag`布局作为具体tag的内容展示布局。

但是，vuepress和plugin-blog都没有这两个布局，所以显示不出来，需要自己写两个vue文件作为布局使用.

于是在`.vuepress/theme/layouts`下尝试去写，写好发现，所有的布局都被影响了，主页，文章页的布局都错乱了。

原因是自己创建`theme`目录，会被认为在自定义主题，就覆盖了vuepress的默认布局了。

由于默认布局有的功能还用得上，因此想在默认布局的基础上，增加自己的布局，

官网提供了[主题继承](https://vuepress.vuejs.org/theme/inheritance.html)的方法。

最后，继承默认主题，然后编写Tags和Tag布局即可。
