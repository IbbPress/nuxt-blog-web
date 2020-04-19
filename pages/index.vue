<template>
  <div class="main-content">
    <h1 style="text-align: center;font-weight: 500;">
      最新文章
    </h1>
    <div class="post-list">
      <post-item v-for="post in list" :key="post.id" :post="post || []" />
      <div class="post-item">
        <p class="post-title">
          <nuxt-link class="post-link" to="/posts/">
            更多文章...
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from '~/components/post/Item.vue'
export default {
  components: { PostItem },
  async fetch ({ store, params, $axios }) {
    const { data } = await $axios.get('/api/posts')
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
</style>
