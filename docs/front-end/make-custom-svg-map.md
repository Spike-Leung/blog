---
tag: [svg, js]
---

# 制作 svg 地图轮廓

## 前言

由于项目基于 amMap,有时需要使用中国某些省份或者市区作为地图，
但是 ammap 没有提供相关的地图数据，官网提供了一个自制地图数据的文档，
根据此文档，只要有地图的 GIS 数据，就可以制作出想要的地图。

## 获取 GIS 数据

网上搜索下载相关地区的 GIS 数据，一般下载下来会包含`.shp`,`.shx`,`.prj`,`.dbf`等类型的文件，
这里提供一份[中国地图的 GIS 数据](https://www.ganghe.net/research/data/china-gis-data)

## 截取需要的地图轮廓

amMap 的文档提供了一些工具，不过安装有些麻烦，以前尝试过在 ubuntu 上安装，成功的截取过，
后来换了 mac，有的依赖没能装上，而且那个用于截取的软件已经停止维护了，并推荐了另一个软件，
[mapshaper](https://github.com/mbloch/mapshaper), 这个软件有 GUI，用起来还不错。

- 把 GIS 数据导入到 mapshaper 中，如果是下载了上文的中国地图 GIS 数据，里面包含了 1，2，3 
不同精度的地图，根据需要的精度导入，笔者开发的时候，需要淄博市的轮廓，于是就导入等级 3 的地图数据

- 打开 console，通过命令获得需要的轮廓
  - 过滤得到淄博的轮廓 `filter 'NAME_1 == "Shandong" && NAME_2 == "Zibo" && NAME_3 != "Gaoqing" || NAME_3 == "Zouping"'`
  - 清除淄博以外的区域 `mapshaper -clean`
¯  - 由于不需要轮廓里面的线，只需要最外面那层轮廓，将里面的线移除 `mapshaper -dissolve`, `mapshaper -clean`
- 导出成 svg 数据，到此已经得到一个淄博地图轮廓的 svg 了
- 由于要在 ammap 里用，使用 ammap 提供的[工具](http://extra.amcharts.com/mapparser3/)，
获取 json 数据，这里获取的 json 数据就能用于 mamap 了
  - 打开导出的 svg 文件，复制里面`<g>`标签的全部内容
  - 导入到[amMap parser](http://extra.amcharts.com/mapparser3/)，获取到 json 数据

## 简化地图
如果下载的地图数据很精细，导出时，可能会导出一个非常大的文件，但是太大的文件又可能不好处理，
这时，可以利用mapshaper的`Simplify`的功能去简化地图，从而导出一个大小合适的地图。

## 导出时增加信息
一般GIS数据里包含了很多地图区域的信息，例如，东莞市这个区域，包含了这块区域是什么市，属于什么省份等信息，

但是当导出svg的时候，发现这些信息丢失了。可以通过在导出的时候，指定要包含的属性，这样导出的svg就能够包含

相关的属性信息了。简单的用法：

- 在mapshaper的右上角又一个`i`的按钮，点开此按钮有一个`data`选项，选择此选项后，悬浮在地图区域的时候
就能看到此区域的相关属性信息
- 例如属性信息当中有一个id属性，那么当点击右上角`Export`的时候，在弹窗中有一个可以输入export options
的输入框，可以输入`-o svg-data=id`, 然后导出，导出的svg中就会包含一个`data-id`的属性值

## 参考链接

- [Creating custom maps for JavaScript amMap(AmMap3)](https://www.amcharts.com/docs/v3/tutorials/creating-custom-maps-for-javascript-ammap/)
- [Creating custom maps(AmMap4)](https://www.amcharts.com/docs/v4/tutorials/creating-custom-maps/)
- [中国 GIS 数据](https://www.ganghe.net/research/data/china-gis-data)
- [mapshaper](https://github.com/mbloch/mapshaper)
- [amMap parser](http://extra.amcharts.com/mapparser3/)
- [Additional attribute for SVG output #199](https://github.com/mbloch/mapshaper/issues/199)
