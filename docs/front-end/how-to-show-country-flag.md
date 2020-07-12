---
tag: [emoji, js, nodejs]
---

# 根据国家显示国旗图标

## 前言

项目中，要根据返回的国家名称显示对应的国旗图标。实现思路很简单，找到对应的国旗图片，然后根据返回的国家名匹配对应的图片就可以了。

## 获取国旗图标

一开始，打算在网上找点相关的icon，但是很多找到的，有的要付费（[flaticon](https://www.flaticon.com/search?word=country%20flag)），不付费的也不好看，有点杂乱。

后来，找到了[country flag](https://www.countryflags.com/en/)这个网站，国旗比较齐全，也比较美观，可以选择下载的类型和尺寸也很多，唯一的不足是没找到批量下载的方法，190+的国旗一个个下载也很费劲。

于是想，有没有更简便的方法？无意中，看到了`emoji`,想起来，在手机上输入“中国”的时候，会出现一个emoji图标，`🇨🇳`，所以是不是可以用emoji实现呢？


## emoji实现国旗图标

简单的说，emoji本质是一些字符，可能是多个字符组合出来，像是中国的国旗emoji，其实是`🇨🇳`（`CN`）这两个字符组合而成的, 注意这里不是我们平时使用的英文`C`, `N`,而是`unicode`字符集里非常靠后的另外两个字符。

而为了让返回的国家和emoji能够对应起来，我们需要一套[规则](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)：

`CN`表示中国，`DE`表示德国... 只要得到国家的国家编号，然后找到这两个字母在unicode字符集的位置，获取可以生成emoji的unicode字符，然后把获取的字符渲染到页面即可。

[country-code-emoji ](https://github.com/thekelvinliu/country-code-emoji/blob/master/src/index.js)中的方法可以帮我们根据国家编号(`CN`)找到其在unicode中对应的位置。

## emoji存在的问题

用emoji实现国旗是很方便的，不需要下载图片，只要去找国家代码对应的unicode然后进行渲染即可。但是遗憾的是，`window`系统下，并不支持国旗的emoji，就`apple`的系统支持.

为了在不同的系统都能显示, 还是得使用png图片的形式。

## 最终解决方案
到[Country Flag](https://www.countryflags.com/en/)下载对应的国旗png图片，按照[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)进行命名，然后根据国家编码去对应获取就好。如中国（`CN`）就渲染`CN.png`.

### tips
在[Country Flag](https://www.countryflags.com/en/)一张张点下载太慢了，可以写个小脚本，批量下载下来。可以参考[flag download](https://github.com/Spike-Leung/flag-download)


## 参考链接
- [Country Flag](https://www.countryflags.com/en/)
- [Using Emojis in HTML, CSS, and JavaScript](https://www.kirupa.com/html5/emoji.htm)
- [Emojis in Javascript](https://thekevinscott.com/emojis-in-javascript/)
- [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
- [country-code-emoji ](https://github.com/thekelvinliu/country-code-emoji/blob/master/src/index.js)
- [Flag Emojis not rendering](https://stackoverflow.com/questions/54519758/flag-emojis-not-rendering)

