<template>
  <ul class="post-list">
    <li v-for="post in data" :key="post.id" class="post-item">
      <span class="post-date">{{ post.createAt | formate }} » </span>
      <nuxt-link class="post-title" :to="`/posts/${post.id}`">
        {{ post.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    formate (time) {
      return dayjs(Number(time)).format('YYYY-MM-DD')
    }
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/api/posts')
    return { data: data.data }
  }
}
</script>

<style>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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

<style scoped lang="less">
.container {
  width: 760px;
  margin: 40px auto 80px;
}
.post-list {
  line-height: 2.8em;
  border-left: 4px solid #f9f9f9;

  .post-item {
    position: relative;
    padding-left: 20px;

    &:hover:before {
      background: #1abc9c;
    }
    &:before {
      position: absolute;
      top: 50%;
      left: -2px;
      width: 8px;
      height: 8px;
      margin-top: -4px;
      margin-left: -4px;
      content: ' ';
      border-radius: 50%;
      background: #ddd;
    }

    .post-date {
      font-size: 12px;
      display: inline-block;
      color: #888;
    }
    .post-title {
      font-size: 16px;
      font-weight: normal;
      position: relative;
      display: inline-block;
      transition-duration: 0.5s;
      color: #333;
      vertical-align: middle;
      text-overflow: ellipsis;
      max-width: 430px;
      white-space: nowrap;
      overflow: hidden;
    }
    .post-title:hover {
      color: #1abc9c;
    }
  }
}
</style>
