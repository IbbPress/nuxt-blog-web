<template>
  <div class="main-content">
    <h1 style="text-align: center;font-weight: 500;">
      标签: {{ tag }}
    </h1>
    <ul class="post-list">
      <post-item v-for="post in list" :key="post.id" :post="post || []" />
      <div v-if="list.length" class="post-item">
        <nuxt-link class="post-title" :to="`/tags`">
          更多标签...
        </nuxt-link>
      </div>
    </ul>
    <div v-if="list.length === 0" class="empty">
      <p>这里空空如也</p>
      <nuxt-link class="post-title" :to="`/tags`">
        查看所有标签
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import PostItem from '~/components/post/Item.vue'
export default {
  components: { PostItem },
  async asyncData ({ params, $axios }) {
    const { data } = await $axios.get(`/api/posts/tags/${params.tag}`)
    return { list: data, tag: params.tag }
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
