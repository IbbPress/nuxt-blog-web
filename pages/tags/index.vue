<template>
  <div class="main-content">
    <h1 style="text-align: center;font-weight: 500;">
      所有标签
    </h1>
    <div class="tag-list">
      <i-tag
        v-for="tag in tags"
        :key="tag.id"
        class="post-tags"
      >
        <nuxt-link :to="`/tags/${tag.name}`">
          {{ tag.name }}
        </nuxt-link>
      </i-tag>
    </div>
  </div>
</template>

<script>
import ITag from '~/components/common/tag.vue'
export default {
  components: { ITag },
  async fetch ({ store, params, $axios }) {
    const { data } = await $axios.get('/api/tags')
    store.commit('setTags', data)
  },
  computed: {
    tags () {
      return this.$store.state.tags
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
