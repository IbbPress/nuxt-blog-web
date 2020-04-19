<template>
  <div class="category-card">
    <p>分类目录</p>
    <p v-for="cate in category" :key="cate.id">
      <nuxt-link :to="`/categories/${cate.name}`">
        {{ cate.name }}
        <!-- ({{ cate.count }}) -->
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    category () {
      return this.$store.state.category
    }
  }
}
</script>

<style lang="less">
.category-card {
  background-color: #fff;
  margin-left: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  max-height: 400px;
  overflow-y: auto;
  p {
    margin: 0;
  }
}
</style>
