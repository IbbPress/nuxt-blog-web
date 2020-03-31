## 缓存

`@nuxtjs/component-cache`

## markdown 解析

`@nuxtjs/markdownit`，用于在 nuxt 解析 markdown

其他插件需要自行安装，然后通过 `@nuxtjs/markdownit` 引入

## 代码块高亮

通过 plugin 的形式引入 prismjs 和相应的主题及插件

linu-number 无法生效（可能是因为此插件是需要操作 DOM）

## 部署

pm2 + nginx

```bash
# pm2.sh
npm run build && pm2 start npm --name nuxt-blog-web -- run start
```

也可以通过 `npm run generate` 生成静态网站，但是动态路由还没搞明白如何配置

## 样式

可以使用 less、scss、styl，只需引入相应插件即可

如果定义变量了，可以通过 `@nuxtjs/style-resources` 引入变量，无需 import

## 代理

`@nuxtjs/proxy`

## 环境变量

`@nuxtjs/dotenv`