# 使用 GitHub Actions 部署博客到 GitHub Pages

笔者目前的博客使用的是[Vuepress](https://v2.vuepress.vuejs.org/)，参考文档，使用 `Travis CI` 实现了博客推送更新后自动部署。

最近了解到 `GitHub Actions`，遂将博客的自动部署改为 `GitHub Actions`, 本文将简单介绍 `GitHub Actions` 以及笔者博客如何实现自动部署。

## GitHub Actions

### 为什么用GitHub Actions
- 尝鲜
- 它和 `GitHub` 集成到一起，方便
- 有很多别人已经写好的 [actions](https://github.com/marketplace?type=actions) 可以直接拿来用，避免重复造轮子，节省时间
- ...

### 什么是GitHub Actions

#### Event-Driven

>  GitHub Actions are event-driven, meaning that you can run a series of commands after a specified event has occurred

`GitHub Actions`它是事件驱动的，当某个事件，例如`push`， `merge`发生的时候，就触发对应的处理 ([workflows](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#workflows))

#### 创建GitHub Actions

1. 在Git仓库下创建 `.github/workflows` 目录， 目录下创建一个对应的 `xxxx.yaml` 配置文件，每个 `yaml` 文件对应一个 `workflows`

2. 一个`xxx.yaml`文件，内容大致如下：(这是我的博客的部署`workflows`, 具体含义见注释)

```yaml
# Optional - The name of the workflow as it will appear in the Actions tab of the GitHub repository.
# workflows 的名称
name: deploy-to-github-page
# Specify the event that automatically triggers the workflow file.
# 监听什么事件时触发这个workflows, 这里监听push
on: [push]
# Groups together all the jobs that run in the workflow file
# 这个workflows具体是由哪些任务组成的
jobs:
  # define job name
  # 任务1, `deploy`是任务的名称
  deploy:
    # Configures the job to run on an Ubuntu Linux runner
    # 在什么环境下执行这个任务
    runs-on: ubuntu-latest
    # Groups together all the steps that run in the job
    # Each item nested under this section is a separate action or shell command.
    # 任务具体包含什么步骤
    steps:
      # actions The uses keyword tells the job to retrieve v2 of the community action named actions/checkout@v2
      # 每个步骤，即可以使用(`uses`)别人写好的`actions`, 也可以跑自己写的命令(`run`)
      - uses: actions/checkout@v2 # 拉取代码
      - uses: actions/setup-node@v2 # 装node.js环境
        with: # 输入这个`actions`需要的参数，例如版本号
          node-version: '14'
        # shell command, The run keyword tells the job to execute a command on the runner.
      - run: yarn install # 安装博客的依赖
      - run: yarn build # 构建博客的静态文件
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3 # 使用别人写好把静态文件发布到`GitHub Pages`的`actions`
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist

```

部署博客的`workflows`还是蛮简单的，阅读配置文件，可以发现`GitHub Actions`的大致流程是这样的:

- 当某个事件发生，例如`push`
  - 触发`workflows`， 对应`.github/workflows`目录下定义的`yaml`配置
  - 每个`workflows`
    - 定义匹配什么事件 (`on: push`)
    - 定义都有那些任务(`jobs`)
      - `jobs`中定义任务的执行环境(`runs-on`)
      - 每个`jobs`是由一个一个步骤(`steps`)组成的
        - 每个`steps`可以是
          - `uses` 别人写好的 `actions`
          - `run` 自己定义的命令

所以，思考你想在仓库发生什么事件时，做什么任务，这个任务具体包含哪些步骤，然后编写一个配置文件，就差不多了。

## 参考链接
- [GitHub Actions vs Travis CI – Comparing CI/CD Platforms](https://www.devopsauthority.tech/2021/02/09/github-actions-vs-travis-ci/)
- [Introduction to GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions)
- [yaml](https://yaml.org/)
