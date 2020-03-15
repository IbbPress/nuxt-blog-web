<template>
  <ul class="container list-post">
    <li
      class="item-post item"
      v-for="post in data"
      :key="post.id"
    >
      <span class="post-date">{{ post.createAt | formate }}</span>
      <a class="post-title" :href="`/posts/${post.id}`">{{ post.title }}</a>
    </li>
  </ul>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    formate(time) {
      return dayjs(Number(time)).format('YYYY-MM-DD')
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`http://localhost:3000/api/posts`)
    return { data: data.data }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<style>
.container {
  width: 500px;
    margin: 40px auto 80px;
    border-left: 4px solid #f9f9f9;
}
.list-post {
    line-height: 2.8em;
}
.item-post .post-date {
    font-size: 12px;
    display: inline-block;
    color: #888;
}
.item-post .post-title {
    font-size: 16px;
    font-weight: normal;
    position: relative;
    display: inline-block;
    transition-duration: .5s;
    color: #333;
    vertical-align: middle;
    text-overflow: ellipsis;
    max-width: 430px;
    white-space: nowrap;
    overflow: hidden;
}
.item-post .post-title:hover {
    color: #1abc9c;
}
</style>


<style>
body, .smooth-container { scroll-behavior: smooth }
html,
body {
  font-family: PingFangSC-Regular,'Roboto', Verdana, "Open Sans", "Helvetica Neue", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei", "Source Han Sans CN", "WenQuanYi Micro Hei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  width: 100%;
}
html {
  overflow: hidden;
  overflow-y: auto;
}
code,
pre,
samp {
  font-family: PingFangSC-Regular, 'Roboto', Verdana, "Open Sans", "Helvetica Neue", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei", "Source Han Sans CN", "WenQuanYi Micro Hei", Arial, sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
    a:hover {
      text-decoration: none;
    }

ul {
  line-height: 1.8em;
  padding: 0;
  list-style: none;
}
    li {
      list-style: none;
    }

.text-center {
  text-align: center;
}
@media screen and (max-width: 767px) {
  html,
  body {
    overflow-x: hidden;
  }
}

</style>