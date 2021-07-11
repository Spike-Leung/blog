import{r as e,o as l,c as r,a,F as n,b as u}from"./app.d3892aed.js";const s={},t=a("h1",{id:"vuepress-博客搭建",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vuepress-博客搭建","aria-hidden":"true"},"#"),u(" Vuepress 博客搭建")],-1),i=a("h2",{id:"博客介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#博客介绍","aria-hidden":"true"},"#"),u(" 博客介绍")],-1),o=a("p",null,"目前博客还比较简单，能够编写markdown并且在github page上呈现。",-1),h=a("p",null,"以下是计划要做的:",-1),p=a("ul",null,[a("li",null,"[ ] sidebar自动生成"),a("li",null,"[ ] 首页连接自动生成"),a("li",null,[u("[x] 标签分类 "),a("em",null,"(2020/02/05)")]),a("li",null,"[ ] 目录分类"),a("li",null,"[ ] 按日期归档"),a("li",null,"[ ] 自定义主题")],-1),g=a("h2",{id:"博客技术栈",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#博客技术栈","aria-hidden":"true"},"#"),u(" 博客技术栈")],-1),d={href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},b=u("VuePress"),c={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},f=u("Github Page"),v={href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"},m=u("Travis"),k={href:"https://vuepress-plugin-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"},x=u("@vuepress/plugin-blog"),_=a("h2",{id:"搭建遇到的难点",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#搭建遇到的难点","aria-hidden":"true"},"#"),u(" 搭建遇到的难点")],-1),T=a("h3",{id:"持续化集成到github-pages",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#持续化集成到github-pages","aria-hidden":"true"},"#"),u(" 持续化集成到github pages")],-1),j=u("官网提供了"),y={href:"https://vuepress.vuejs.org/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"},P=u("GitHub Pages and Travis CI"),G=u("的继承方法，按照步骤来就好了。"),V=a("p",null,[u("需要注意的是，"),a("code",null,".travis.yml"),u("中有一个"),a("code",null,"github_token"),u("的配置，这个配置需要到github生成一个token，然后在travis上配置到博客的环境变量中。")],-1),w=a("h3",{id:"使用plugin-blog实现标签分类",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用plugin-blog实现标签分类","aria-hidden":"true"},"#"),u(" 使用plugin-blog实现标签分类")],-1),z=a("p",null,[u("安装插件，按照教程设置配置后，发现没有出现标签分类的页面。 "),a("img",{src:"/blog/assets/plugin-blog-frontmatter-classifier.683f4b6f.png",alt:"image"})],-1),C=a("p",null,[u("文档中说，会使用"),a("code",null,"Tags"),u("布局作为tag列表的布局，"),a("code",null,"Tag"),u("布局作为具体tag的内容展示布局。")],-1),F=a("p",null,"但是，vuepress和plugin-blog都没有这两个布局，所以显示不出来，需要自己写两个vue文件作为布局使用.",-1),H=a("p",null,[u("于是在"),a("code",null,".vuepress/theme/layouts"),u("下尝试去写，写好发现，所有的布局都被影响了，主页，文章页的布局都错乱了。")],-1),I=a("p",null,[u("原因是自己创建"),a("code",null,"theme"),u("目录，会被认为在自定义主题，就覆盖了vuepress的默认布局了。")],-1),L=a("p",null,"由于默认布局有的功能还用得上，因此想在默认布局的基础上，增加自己的布局，",-1),O=u("官网提供了"),q={href:"https://vuepress.vuejs.org/theme/inheritance.html",target:"_blank",rel:"noopener noreferrer"},A=u("主题继承"),B=u("的方法。"),D=a("p",null,"最后，继承默认主题，然后编写Tags和Tag布局即可。",-1);s.render=function(u,s){const E=e("OutboundLink");return l(),r(n,null,[t,i,o,h,p,g,a("ul",null,[a("li",null,[a("a",d,[b,a(E)])]),a("li",null,[a("a",c,[f,a(E)])]),a("li",null,[a("a",v,[m,a(E)])]),a("li",null,[a("a",k,[x,a(E)])])]),_,T,a("p",null,[j,a("a",y,[P,a(E)]),G]),V,w,z,C,F,H,I,L,a("p",null,[O,a("a",q,[A,a(E)]),B]),D],64)};export default s;
