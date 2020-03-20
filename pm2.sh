#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build && pm2 start npm --name nuxt-blog-web -- run start

cd -
