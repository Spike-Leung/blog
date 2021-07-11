<template><h1 id="根据国家显示国旗图标" tabindex="-1"><a class="header-anchor" href="#根据国家显示国旗图标" aria-hidden="true">#</a> 根据国家显示国旗图标</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>项目中，要根据返回的国家名称显示对应的国旗图标。实现思路很简单，找到对应的国旗图片，然后根据返回的国家名匹配对应的图片就可以了。</p>
<h2 id="获取国旗图标" tabindex="-1"><a class="header-anchor" href="#获取国旗图标" aria-hidden="true">#</a> 获取国旗图标</h2>
<p>一开始，打算在网上找点相关的icon，但是很多找到的，有的要付费（<a href="https://www.flaticon.com/search?word=country%20flag" target="_blank" rel="noopener noreferrer">flaticon<OutboundLink/></a>），不付费的也不好看，有点杂乱。</p>
<p>后来，找到了<a href="https://www.countryflags.com/en/" target="_blank" rel="noopener noreferrer">country flag<OutboundLink/></a>这个网站，国旗比较齐全，也比较美观，可以选择下载的类型和尺寸也很多，唯一的不足是没找到批量下载的方法，190+的国旗一个个下载也很费劲。</p>
<p>于是想，有没有更简便的方法？无意中，看到了<code>emoji</code>,想起来，在手机上输入“中国”的时候，会出现一个emoji图标，<code>🇨🇳</code>，所以是不是可以用emoji实现呢？</p>
<h2 id="emoji实现国旗图标" tabindex="-1"><a class="header-anchor" href="#emoji实现国旗图标" aria-hidden="true">#</a> emoji实现国旗图标</h2>
<p>简单的说，emoji本质是一些字符，可能是多个字符组合出来，像是中国的国旗emoji，其实是<code>🇨🇳</code>（<code>CN</code>）这两个字符组合而成的, 注意这里不是我们平时使用的英文<code>C</code>, <code>N</code>,而是<code>unicode</code>字符集里非常靠后的另外两个字符。</p>
<p>而为了让返回的国家和emoji能够对应起来，我们需要一套<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank" rel="noopener noreferrer">规则<OutboundLink/></a>：</p>
<p><code>CN</code>表示中国，<code>DE</code>表示德国... 只要得到国家的国家编号，然后找到这两个字母在unicode字符集的位置，获取可以生成emoji的unicode字符，然后把获取的字符渲染到页面即可。</p>
<p><a href="https://github.com/thekelvinliu/country-code-emoji/blob/master/src/index.js" target="_blank" rel="noopener noreferrer">country-code-emoji <OutboundLink/></a>中的方法可以帮我们根据国家编号(<code>CN</code>)找到其在unicode中对应的位置。</p>
<h2 id="emoji存在的问题" tabindex="-1"><a class="header-anchor" href="#emoji存在的问题" aria-hidden="true">#</a> emoji存在的问题</h2>
<p>用emoji实现国旗是很方便的，不需要下载图片，只要去找国家代码对应的unicode然后进行渲染即可。但是遗憾的是，<code>window</code>系统下，并不支持国旗的emoji，就<code>apple</code>的系统支持.</p>
<p>为了在不同的系统都能显示, 还是得使用png图片的形式。</p>
<h2 id="最终解决方案" tabindex="-1"><a class="header-anchor" href="#最终解决方案" aria-hidden="true">#</a> 最终解决方案</h2>
<p>到<a href="https://www.countryflags.com/en/" target="_blank" rel="noopener noreferrer">Country Flag<OutboundLink/></a>下载对应的国旗png图片，按照<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank" rel="noopener noreferrer">ISO 3166-1 alpha-2<OutboundLink/></a>进行命名，然后根据国家编码去对应获取就好。如中国（<code>CN</code>）就渲染<code>CN.png</code>.</p>
<h3 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> tips</h3>
<p>在<a href="https://www.countryflags.com/en/" target="_blank" rel="noopener noreferrer">Country Flag<OutboundLink/></a>一张张点下载太慢了，可以写个小脚本，批量下载下来。可以参考<a href="https://github.com/Spike-Leung/flag-download" target="_blank" rel="noopener noreferrer">flag download<OutboundLink/></a></p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>
<ul>
<li><a href="https://www.countryflags.com/en/" target="_blank" rel="noopener noreferrer">Country Flag<OutboundLink/></a></li>
<li><a href="https://www.kirupa.com/html5/emoji.htm" target="_blank" rel="noopener noreferrer">Using Emojis in HTML, CSS, and JavaScript<OutboundLink/></a></li>
<li><a href="https://thekevinscott.com/emojis-in-javascript/" target="_blank" rel="noopener noreferrer">Emojis in Javascript<OutboundLink/></a></li>
<li><a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank" rel="noopener noreferrer">ISO 3166-1 alpha-2<OutboundLink/></a></li>
<li><a href="https://github.com/thekelvinliu/country-code-emoji/blob/master/src/index.js" target="_blank" rel="noopener noreferrer">country-code-emoji <OutboundLink/></a></li>
<li><a href="https://stackoverflow.com/questions/54519758/flag-emojis-not-rendering" target="_blank" rel="noopener noreferrer">Flag Emojis not rendering<OutboundLink/></a></li>
</ul>
</template>
