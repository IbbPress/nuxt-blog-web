<template>
  <div class="main-content">
    <h1 style="text-align: center;font-weight: 500;">
      「{{ category }}」目录存档
    </h1>
    <div class="post-list">
      <post-item v-for="post in list" :key="post.id" :post="post || []" />
      <div v-if="list.length" class="post-item">
        <nuxt-link class="post-title" :to="`/categories`">
          更多目录...
        </nuxt-link>
      </div>
    </div>
    <div v-if="list.length === 0" class="empty">
      <p>这里空空如也</p>
      <nuxt-link class="post-title" :to="`/categories`">
        查看所有目录
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import PostItem from '~/components/post/Item.vue'
export default {
  components: { PostItem },
  async asyncData ({ params, $axios }) {
    const { data } = await $axios.get(`/api/posts/categories/${params.category}`)
    return { list: data, category: params.category }
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
