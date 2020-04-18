<template>
  <div class="main-content">
    <h1 style="text-align: center;font-weight: 500;">
      文章归档
    </h1>
    <div class="post-list">
      <post-item v-for="post in list" :key="post.id" :post="post || []" />
    </div>
  </div>
</template>

<script>
import PostItem from '~/components/post/Item.vue'
export default {
  components: { PostItem },
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
.main-content {
  padding: 12px;
  margin: 0;
  background-color: #fff;
}
.post-list {
  .post-item {
    position: relative;
    list-style-type: square;
    margin-left: 1em;
    margin-bottom: 1em;

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
      color: #1890ff;
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
    background-color: #1890ff;
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
