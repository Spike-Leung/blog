<template><h1 id="vuepress-博客搭建" tabindex="-1"><a class="header-anchor" href="#vuepress-博客搭建" aria-hidden="true">#</a> Vuepress 博客搭建</h1>
<h2 id="博客介绍" tabindex="-1"><a class="header-anchor" href="#博客介绍" aria-hidden="true">#</a> 博客介绍</h2>
<p>目前博客还比较简单，能够编写markdown并且在github page上呈现。</p>
<p>以下是计划要做的:</p>
<ul>
<li>[ ] sidebar自动生成</li>
<li>[ ] 首页连接自动生成</li>
<li>[x] 标签分类 <em>(2020/02/05)</em></li>
<li>[ ] 目录分类</li>
<li>[ ] 按日期归档</li>
<li>[ ] 自定义主题</li>
</ul>
<h2 id="博客技术栈" tabindex="-1"><a class="header-anchor" href="#博客技术栈" aria-hidden="true">#</a> 博客技术栈</h2>
<ul>
<li><a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress<OutboundLink/></a></li>
<li><a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Github Page<OutboundLink/></a></li>
<li><a href="https://travis-ci.org/" target="_blank" rel="noopener noreferrer">Travis<OutboundLink/></a></li>
<li><a href="https://vuepress-plugin-blog.ulivz.com/" target="_blank" rel="noopener noreferrer">@vuepress/plugin-blog<OutboundLink/></a></li>
</ul>
<h2 id="搭建遇到的难点" tabindex="-1"><a class="header-anchor" href="#搭建遇到的难点" aria-hidden="true">#</a> 搭建遇到的难点</h2>
<h3 id="持续化集成到github-pages" tabindex="-1"><a class="header-anchor" href="#持续化集成到github-pages" aria-hidden="true">#</a> 持续化集成到github pages</h3>
<p>官网提供了<a href="https://vuepress.vuejs.org/guide/deploy.html#github-pages" target="_blank" rel="noopener noreferrer">GitHub Pages and Travis CI<OutboundLink/></a>的继承方法，按照步骤来就好了。</p>
<p>需要注意的是，<code>.travis.yml</code>中有一个<code>github_token</code>的配置，这个配置需要到github生成一个token，然后在travis上配置到博客的环境变量中。</p>
<h3 id="使用plugin-blog实现标签分类" tabindex="-1"><a class="header-anchor" href="#使用plugin-blog实现标签分类" aria-hidden="true">#</a> 使用plugin-blog实现标签分类</h3>
<p>安装插件，按照教程设置配置后，发现没有出现标签分类的页面。
<img src="~img/plugin-blog-frontmatter-classifier.png" alt="image"></p>
<p>文档中说，会使用<code>Tags</code>布局作为tag列表的布局，<code>Tag</code>布局作为具体tag的内容展示布局。</p>
<p>但是，vuepress和plugin-blog都没有这两个布局，所以显示不出来，需要自己写两个vue文件作为布局使用.</p>
<p>于是在<code>.vuepress/theme/layouts</code>下尝试去写，写好发现，所有的布局都被影响了，主页，文章页的布局都错乱了。</p>
<p>原因是自己创建<code>theme</code>目录，会被认为在自定义主题，就覆盖了vuepress的默认布局了。</p>
<p>由于默认布局有的功能还用得上，因此想在默认布局的基础上，增加自己的布局，</p>
<p>官网提供了<a href="https://vuepress.vuejs.org/theme/inheritance.html" target="_blank" rel="noopener noreferrer">主题继承<OutboundLink/></a>的方法。</p>
<p>最后，继承默认主题，然后编写Tags和Tag布局即可。</p>
</template>
