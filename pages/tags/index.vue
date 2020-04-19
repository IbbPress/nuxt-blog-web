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
</style>
