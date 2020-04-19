<template>
  <div class="category-card">
    <h4 class="widget-title">
      分类目录
    </h4>
    <ul>
      <li v-for="cate in category" :key="cate.id" class="cat-item">
        <nuxt-link :to="`/categories/${cate.name}`">
          {{ cate.name }}
        <!-- ({{ cate.count }}) -->
        </nuxt-link>
      </li>
    </ul>
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
  padding: 1rem 1.5rem;
  max-height: 400px;
  overflow-y: auto;
  .widget-title {
    position: relative;
    margin-bottom: 1.5rem;
    padding: 0;
    &::after {
      background-color: #1890ff;
      content: "";
      position: absolute;
      width: 50px;
      display: block;
      height: 4px;
      bottom: -10px;
    }
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  .cat-item {
    margin: 0;
    border-bottom: 1px solid #D9D9D9;
    padding: 0.3em 0 .2em;;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
