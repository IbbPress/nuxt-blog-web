<template>
  <div class="tags-card">
    <h4 class="widget-title">
      标签
    </h4>
    <ul class="d-flex flex-wrap">
      <li v-for="tag in tags" :key="tag.id" class="width: 33.33%;">
        <i-tag>
          <nuxt-link :to="`/tags/${tag.name}`">
            {{ tag.name }}
            <!-- ({{ tag.count }}) -->
          </nuxt-link>
        </i-tag>
      </li>
    </ul>
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
}
</style>
