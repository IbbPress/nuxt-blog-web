<template>
  <div class="tags-card">
    <p>标签</p>
    <i-tag v-for="tag in tags" :key="tag.id">
      <nuxt-link :to="`/tags/${tag.name}`">
        {{ tag.name }}
        <!-- ({{ tag.count }}) -->
      </nuxt-link>
    </i-tag>
  </div>
</template>

<script>
import ITag from '~/components/common/tag.vue'
export default {
  components: { ITag },
  computed: {
    tags () {
      return this.$store.state.tags
    }
  }
}
</script>

<style lang="less">
.tags-card {
  background-color: #fff;
  margin-left: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  max-height: 400px;
  overflow-y: auto;
}
</style>
