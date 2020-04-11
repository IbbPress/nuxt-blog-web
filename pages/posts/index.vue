<template>
  <div class="content">
    <ul class="post-list">
      <li v-for="post in list" :key="post.id" class="post-item">
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
  async fetch ({ store, params, $axios }) {
    const { data } = await $axios.get('/api/posts', {
      params: { pageSize: 10000 }
    })
    store.commit('setPostList', data.data)
  },
  // fetch ({ store, params, $axios }) {
  //   return $axios.get('/api/posts', {
  //     params: { pageSize: 10000 }
  //   })
  //     .then((resp) => {
  //       // console.log(resp.data)
  //       store.commit('setPostList', resp.data.data)
  //     })
  //   // $axios.get('/api/tags')
  //   //   .then((resp) => {
  //   //     console.log(resp.data)
  //   //     store.commit('setTags', resp.data)
  //   //   })
  //   // $axios.get('/api/category')
  //   //   .then((resp) => {
  //   //     store.commit('setCategory', resp.data)
  //   //   })
  // },
  computed: {
    list () {
      return this.$store.state.postList
    },
    tags () {
      // console.log('this.$store.state.tags: ', this.$store.state.tags)
      return this.$store.state.tags
    },
    category () {
      return this.$store.state.category
    }
  },
  // async asyncData ({ $axios }) {
  //   const { data } = await $axios.get('/api/posts', {
  //     params: {
  //       pageSize: 10000
  //     }
  //   })
  //   this.$store.commit('setPostList', data.data)
  //   return {
  //     data: data.data
  //   }
  // },
  methods: {
    onPageChange (page, pageSize) {}
  }
}
</script>

<style scoped lang="less">
.post-list {
  padding: 12px;
  margin: 0;
  background-color: #fff;

  .post-item {
    position: relative;
    padding-left: 20px;
    list-style: none;
    margin-bottom: 1em;

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

  a:before {
    content: "";
    position: absolute;
    z-index: 1;
    height: 1px;
    bottom: 0;
    left: 51%;
    right: 51%;
    background-color: #46bd87;
    transition-duration: .2s;
    transition-property: right,left;
    transition-timing-function: ease-out;
  }
  a:hover:before {
    left: 0;
    right: 0;
  }
}
</style>
