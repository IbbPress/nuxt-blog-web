<template>
  <div class="main-content">
    <h1 style="text-align: center;font-weight: 500;">
      所有分类目录
    </h1>
    <div class="cate-list">
      <div
        v-for="cate in list"
        :key="cate.id"
        class="post-cate"
      >
        <nuxt-link :to="`/categories/${cate.name}`">
          {{ cate.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const { data } = await $axios.get('/api/category')
    return { list: data }
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
