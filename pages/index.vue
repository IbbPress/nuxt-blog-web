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
  fetch ({ store, params, $axios }) {
    const posts = $axios.get('/api/posts')
    const tags = $axios.get('/api/tags')
    const category = $axios.get('/api/category')
    return Promise.all([posts, tags, category]).then((values) => {
      store.commit('setPostList', values[0].data.data)
      store.commit('setTags', values[1].data)
      store.commit('setCategory', values[2].data)
    })
  },
  computed: {
    list () {
      return this.$store.state.postList
    }
  },
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
