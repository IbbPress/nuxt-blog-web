<template>
  <div class="main-content">
    <h1 style="text-align: center;font-weight: 500;">
      所有分类目录
    </h1>
    <div class="cate-list">
      <div
        class="post-cate"
        v-for="cate in list"
        :key="cate.id"
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
