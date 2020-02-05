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

- 把 GIS 数据导入到 mapshaper 中，如果是下载了上文的中国地图 GIS 数据，里面包含了 1，2，3 不同精度的地图，
  根据需要的精度导入，笔者开发的时候，需要淄博市的轮廓，于是就导入等级 3 的地图数据

- 打开 console，通过命令获得需要的轮廓
  - 过滤得到淄博的轮廓 `filter 'NAME_1 == "Shandong" && NAME_2 == "Zibo" && NAME_3 != "Gaoqing" || NAME_3 == "Zouping"'`
  - 清除淄博以外的区域 `mapshaper -clean`
¯  - 由于不需要轮廓里面的线，只需要最外面那层轮廓，将里面的线移除 `mapshaper -dissolve`, `mapshaper -clean`
- 导出成 svg 数据，到此已经得到一个淄博地图轮廓的 svg 了
- 由于要在 ammap 里用，使用 ammap 提供的[工具](http://extra.amcharts.com/mapparser3/)，获取 json 数据，这里获取的 json 数据就能用于 mamap 了
  - 打开导出的 svg 文件，复制里面`<g>`标签的全部内容
  - 导入到[amMap parser](http://extra.amcharts.com/mapparser3/)，获取到 json 数据

## 参考链接

- [Creating custom maps for JavaScript amMap](https://www.amcharts.com/docs/v3/tutorials/creating-custom-maps-for-javascript-ammap/)
- [中国 GIS 数据](https://www.ganghe.net/research/data/china-gis-data)
- [mapshaper](https://github.com/mbloch/mapshaper)
- [amMap parser](http://extra.amcharts.com/mapparser3/)
