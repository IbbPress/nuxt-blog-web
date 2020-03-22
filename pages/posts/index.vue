<template>
  <div class="content">
    <ul class="post-list">
      <li v-for="post in data" :key="post.id" class="post-item">
        <span class="post-date">{{ post.createAt | formate }} » </span>
        <nuxt-link class="post-title" :to="`/posts/${post.id}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
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
    const { data } = await $axios.get('/api/posts', {
      params: {
        pageSize: 10000
      }
    })
    return {
      data: data.data
    }
  },
  methods: {
    onPageChange (page, pageSize) {}
  }
}
</script>

<style scoped lang="less">
.post-list {
  background-color: #fff;
  line-height: 2.8em;
  border-left: 4px solid #f9f9f9;
  padding: 12px;
  margin: 0;

  .post-item {
    position: relative;
    padding-left: 20px;
    list-style: none;

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
      color: #3eaf7c;
    }
  }
}
</style>
