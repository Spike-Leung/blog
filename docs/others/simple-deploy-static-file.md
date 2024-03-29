# 部署前端静态文件的简单步骤

笔者目前使用 Vue 开发，开发完成后需要构建静态文件，部署到服务器上，例如 Nginx, 本文将介绍从构建到部署过程中的步骤，
涉及到的一些命令 如 `tar`, `ssh`, `scp`, 以及笔者的一些小技巧。

## 1. 打包构建
执行你项目中的打包命令进行打包即可，也许是`yarn build`， 也许是`npm run build`, 具体可以看`package.json`中`scripts`中的
定义。如果没有定义，则翻阅文档找找构建工具的构建命令即可，例如这是[Vite的构建部署文档](https://cn.vitejs.dev/guide/static-deploy.html)。

在构建前需要注意的：

- 最好执行 `yarn`/`npm install` 安装当前`package.json`中指定的最新依赖，避免其他同事更新了依赖，但本地还没更新的问题
- 也许你需要打上一个版本号，方便跟踪当前的版本。(关于版本号定义，可以参考[语义化版本](https://semver.org/lang/zh-CN/))
- 也许你还需要设置一些部署时的环境变量或配置
- ...

## 2. tar打包
当执行完构建后， 在某个目录下，会生成若干的静态文件，把静态文件上传到服务器上对应的目录，即可以通过服务器访问构建好的静态文件了。

在上传时，如果一个一个文件上传，会有些麻烦， 我们可以先将这些静态文件打包成一个 tar 包再一次性上传。

### 压缩
进入到静态文件所在的目录
```shell
cd path/to/dist
```

将静态文件压缩为一个 tar 包
```shell
tar -zcvf build_1.0.tar.gz *
```

参数解释：
- `-c` 表示创建，等同于`--create`
- `-v` 显示打包时的详细输出
- `-z` 使用Gzip对打包文件进行压缩
- `-f` 指定打包后的文件名
- `*` 表示打包当前目录下的所有文件，你也可以指定一个一个的文件进行打包


## 3. scp 上传 tar 包
打包完之后，需要把 tar 包上传到服务器，可以使用 `scp` 命令， 假设要上传到 `1.1.1.1` 上的 `/home` 目录, 使用 `1.1.1.1` 的 `root`用户。

```
scp path/to/tar root@1.1.1.1:/home 
```

命令解释：
- 命令格式: `scp source copy` 从`source`传到`copy`
- `path/to/tar` tar 包所在的路径
- `root@1.1.1.1:/home` 要上传的位置
  - `root@1.1.1.1` 使用`root`登录`1.1.1.1`，进行连接
  - `:` 分隔目标机器和目录
  - `/home` 上传到机器上的目录


## 4. ssh 到目标机器
要解压目标机器上的 tar 包，先要连接到目标机器，可以使用 `ssh` 命令。

```shell
ssh root@1.1.1.1
The authenticity of host '1.1.1.1 (1.1.1.1)' can't be established.
ECDSA key fingerprint is SHA256:2CDXn8/+GTFrUT7ayu0BRrKAVShN7P13wO0bSJdSAW4.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```
命令解释:

- 使用`root`用户通过`ssh`连接`1.1.1.1`的机器
- 这里需要确认服务器的指纹，输入`yes`就好了 (不过出于安全考虑，你也可以验证一下这个指纹对不对，确定是你要连接的目标机器)
  - 这里是因为机器之前没连接过，要把目标机器的公钥存储到下来， 用来下次识别目标机器

### 避免重复输入密码
每次使用 `ssh` 命令，都要重新输入一次密码，着实麻烦，通过把 `ssh` 密钥存到服务器上，可以避免每次连接时输入密码。

生成密钥
```shell
> ssh-keygen

Generating public/private rsa key pair.
Enter file in which to save the key (path/to/.ssh/id_rsa):
...
```
执行完成后，在你指定的路径，如 `path/to/.ssh/id_rsa`中，会生成一个密钥，接下来把密钥复制到服务器上，那服务器就认识
我们的机器，就不需要重复输入密码了。

上传密钥到服务器，让服务器存储起来:

```shell
ssh-copy-id -i path/to/.ssh/id_rsa.pub root@1.1.1.1
```
参数解释：
- `-i` 指定密钥文件，注意，这里的密钥文件对应的是**公钥**，以`.pub`结尾的密钥文件
- `path/to/.ssh/id_rsa.pub` 传给服务器的公钥
- `root@1.1.1.1` 要上传的目标机器


第一次执行，还需要输入一次命令，后面就不用啦。

### 移除过期的指纹
前面使用 `ssh` 连接的时候, 需要确认`fingerprint`，一般会被保存在 `~/.ssh/known_host` 文件下（笔者是Mac系统，不同系统存放位置可能有差异）

有时，目标机器可能重装了，或者目标机器的公钥发生了变化，存储在 `~/.ssh/known_host` 的目标机器的公钥就失效了。

解决办法就是打开`~/.ssh/known_host`， 删除掉对应机器的公钥，重新用`ssh`连接机器，存储一个新的公钥就好了。


## 5. 解压 tar 包
当上传到服务器上后，需要把静态文件从 tar 包中解压出来， 你需要把文件解压到服务器指定的目录下，具体要看你服务器如何配置的。

假设你使用的是 Nginx， 查看 Nginx 配置， 可以知道要把 tar 包解压到什么目录。

```shell
    ...

    server {
        listen       9999;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            # 这里指定了静态文件所在的文件路径
            root /home/hello-world; 
            index index.html index.htm;
            try_files $uri $uri/ /index.html;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    ...
```

进入到对应的目录
```shell
cd path/to/static_file_folder
```

执行解压命令
```shell
tar -xvf build.1.0.tar.gz 
```

参数解释：
- `-x` 将 tar 包内容解压，等同于 `--extract`


至此，静态文件的上传已经完成，你应该能够通过服务器访问到这些静态文件了。

## 节省手动操作
上面那么多的步骤，每次都要部署都操作一次，也是有些麻烦，那能不能节省这些操作，一步完成呢？

结合 bash 脚本，把上面的命令组合一下，就可以实现了。

如将以下脚本保存为`tar.sh`, 只要执行`./tar.sh`即可完成打包部署的步骤。

```bash
#!/usr/bin/env sh

# abort on errors
set -e

# install 更新依赖
yarn

# build 构建
yarn build

echo "Build finish!"

# navigate into the build output directory
cd dist/

    echo "tar start"

# 打包压缩构建后的静态文件
tar zcvf build.tar.gz *

echo "tar finish"

echo 'upload to 1.1.1.1 and untar'

# 上传tar包到目标机器，并解压到对应的目录
ssh root@1.1.1.1 "tar -C /home/hello-world -xz -f-" < build.tar.gz

echo 'upload & untar done'

cd -
```
关于 Bash 脚本怎么写，可以看看[Bash 脚本教程](https://wangdoc.com/bash/)， 这里解释一下其中的某行脚本：
```bash
ssh root@1.1.1.1 "tar -C /home/hello-world -xz -f-" < build.tar.gz
```
- `ssh root@1.1.1.1` 连接机器, 参考[避免重复输入密码](#避免重复输入密码)设置免密码登录
- `"tar -C /home/hello-world -xz -f-"` 连接机器后执行 tar 解压
  - `-C` 指定解压到什么目录
  - `-xz` 执行解压
  - `-f` 指定解压的tar包
  - `-` 从标准输入中读取, 即读取`build.tar.gz`
- `< build.tar.gz` 作为tar命令的输入

## 进一步节省操作
尽管写了bash脚本，简单的执行一下就能完成部署了，但每次还要手动执行一下。

能不能每次提交时执行呢？使用一些CI工具就可以实现了，例如[GitHub Actions](https://docs.github.com/en/actions)， [Travis CI](https://www.travis-ci.com/)等。

笔者使用`GitHub Actions`实现了博客的自动部署，也许可以给你一些[参考](https://spike-leung.github.io/blog/others/deploy-blog-with-github-actions.html)。

此处不做展开，读者可自行探索 :)


## 参考链接

- [ssh 教程](https://wangdoc.com/ssh/index.html)
- [Bash 脚本教程](https://wangdoc.com/bash/)
- [How to avoid ssh from prompting key passphrase for passwordless logins](https://www.thegeekdiary.com/how-to-avoid-ssh-from-prompting-key-passphrase-for-passwordless-logins/)

