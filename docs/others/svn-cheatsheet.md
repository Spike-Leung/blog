---
tag: [svn]
---

# SVN Cheatsheet
本文整理一些SVN的常用指令，方便查询使用。

命令行相对来说还是有些麻烦的，你也可以使用GUI去完成SVN操作。

Window上有[TortoiseSVN](https://tortoisesvn.net/)

Mac有[SmartSVN](https://www.smartsvn.com/)， 笔者当时用的就是`SmartSVN`，但有些功能需要付费，有的地方也不方便，所以就学习了命令行操作。

或者也可以用`Emacs`， 它集成了一套还不错的版本控制操作，`Emacs`结合命令行，基本上覆盖了我所有的使用场景了。

## svn info
查看SVN仓库信息
``` shell
>  svn info
Path: .

Working Copy Root Path: /Users/spike/Documents/svn/project/xxxx
URL: http://1.1.1.1/xxx/xxx/xxx
Relative URL: ^/xxxx
Repository Root: xxxx
Repository UUID: xxxxx
Revision: 28885
Node Kind: directory
Schedule: normal
Last Changed Author: xxx
Last Changed Rev: 28885
Last Changed Date: 2021-07-30 16:42:16 +0800 (五, 30  7 2021)
```

## svn checkout
获取到SVN仓库地址后，拉取仓库代码
```
svn checkout URL
```
## svn list
当知道SVN仓库的URL，可以通过`svn list`查看仓库下包行那些Tags，哪些分支
```
svn list URL
```

## svn cat
查看`menu.jsp`在`12343`版本的内容
```
svn cat menu.jsp -r 12343
```

## svn log 
### 查看

查看最近10条提交记录
```
svn log -l 10
```

查看2020-01-01到2020-12-31，包含msg和msg2的日志
```
svne log  --search 'msg' --search-and 'msg2' -r {2020-01-01}:{2020-12-31}
```

查看某个提交涉及的改动文件
```
svn log -v -r <REV>
```

### 编辑
有时，提交信息错了，想去修改，可以通过以下命令：
```
svn propedit -r <REV> --revprop svn:log
```
`<REV>`是对应的日志序号，例如1234

这个命令会打开一个编辑器，让你编辑日志信息，但如果没有配置，就会出现一个报错:

`svn: could not use external editor to fetch log message`

可以去修改SVN的配置文件，指定编辑器， 在Mac中，路径一般是在`~/.subversion/config`, 找到`editor-cmd`, 指定为你喜欢的编辑器即可。
```bash
### Section for configuring external helper applications.
[helpers]
### Set editor-cmd to the command used to invoke your text editor.
###   This will override the environment variables that Subversion
###   examines by default to find this information ($EDITOR, 
###   et al).
editor-cmd = emacsclient
```

## svn update
更新SVN仓库
```
svn update
```

## svn commit
指定要提交的文件，然后提交
```
svn commit PATH...
```

但是，项目中文件可能很多，一个一个去指定还是有些麻烦的。`SVN`支持从文件读取路径，于是可以这么做：

1. `svn st -q | cut -c 9- > ~/target.txt` 把改动的文件路径全部输出到一个文件中
2. 打开`~/target.txt`, 看看有没有路径是需要删除的，有的话就删除，剩下的就是之后要提交的文件
3. `svn commit --targets ~/target.txt` 使用`~/target.txt`的内容进行提交

参考[SVN Commit specific files](https://stackoverflow.com/questions/1516188/svn-commit-specific-files)


## svn diff
查看某个文件在某个版本的改动
```
svn diff -c <REV> <PATH>
```

查看`menus.jsp`在23304相对于23314的改动
```
svn diff menu.jsp -r 23304:23314
```

### diff 美化
默认`svn diff`输出的内容颜色是一样的，只能通过`+`和`-`判断那些是增加，那些是删除, 为了直观一些，可以安装`colordiff`进行美化

1. `brew install colordiff` 安装
2. `svn diff menu.jsp -r 23304:23314 | colordiff` 通过管道把输出交给`colordiff` 美化

具体可以参考[制作一个更漂亮的svn Diff命令](http://icodeit.org/2015/02/make-a-colorful-svn-diff/)

尽管已经有了颜色区分了，但还是不太方便比对，可以参考以下两篇文章，使用比对工具进行查看：

1. [Is there any free svn diff tool for Mac Instead of use command line 'svn diff' ](https://stackoverflow.com/questions/25050303/is-there-any-free-svn-diff-tool-for-mac-instead-of-use-command-line-svn-diff)

2. [ Wrapper to use OS X FileMerge when calling `svn diff`](https://gist.github.com/dtjm/523243)


## 其他
### 节省输入
如果你使用命令行操作`SVN`, 总是频繁的输入重复的命令会很烦恼吧？你 可以通过定制一些别名来节省操作。

例如编辑日志，每次都要输入`svn propedit -r <REV> --revprop svn:log`就很麻烦，也有可能记不住那么多参数。

笔者使用的是`zsh`, 在`.zshrc`中可以定义函数, 如
```zsh
# edit svn log
function editSvnLog() {
    cd "/Users/spike/Documents/svn/project/xxxx/"
    svn propedit -r "$1" --revprop svn:log
    cd -
}
```
之后，我就可以调用`editSvnLog xxxx`去编辑日志，输入要修改的`xxxx`对应的提交信息了。

如果你用的是`bash`, 那就改`.bashrc`.

## 参考链接
- [SVN Commit specific files](https://stackoverflow.com/questions/1516188/svn-commit-specific-files) 
- [How to view changes made to files on a certain revision in Subversion](https://stackoverflow.com/questions/21720865/how-to-view-changes-made-to-files-on-a-certain-revision-in-subversion)
- [How do I ignore files in Subversion?](https://stackoverflow.com/questions/86049/how-do-i-ignore-files-in-subversion)
- [Make a Bash alias that takes a parameter?](https://stackoverflow.com/questions/7131670/make-a-bash-alias-that-takes-a-parameter)
