<template>
  <div class="post-item">
    <p class="post-title">
      <nuxt-link class="post-link" :to="`/posts/${post.id}`">
        {{ post.title }}
      </nuxt-link>
    </p>
    <p class="post-meta-date">
      <span class="post-date">{{ post.createAt | formate }}</span>
    </p>
    <p class="post-summary" v-html="post.summary" />
    <p class="post-read-more">
      <nuxt-link class="post-link" :to="`/posts/${post.id}`">
        阅读全文…
      </nuxt-link>
    </p>
    <p v-if="post.tags" class="post-meta-tags">
      <span>标签：</span>
      <i-tag v-for="tag in post.tags" :key="tag" class="post-tags">
        <nuxt-link :to="`/tags/${tag}`">
          {{ tag }}
        </nuxt-link>
      </i-tag>
    </p>
    <p v-if="post.categories" class="post-meta-categories">
      <span>发布在</span>
      <span class="post-categories">
        <nuxt-link
          v-for="cate in post.categories"
          :key="cate"
          :to="`/categories/${cate}`"
        >{{ cate }}</nuxt-link>
      </span>
    </p>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import ITag from '~/components/common/tag.vue'
export default {
  components: { ITag },
  filters: {
    formate (time) {
      const weekMap = ['日', '一', '二', '三', '四', '五', '六']
      const day = dayjs(Number(time))
      return day
        .format('YYYY年MM月DD日, 星期')
        .replace('星期', '星期' + weekMap[day.format('d')])
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less">
.post-item {
  position: relative;
  padding: 1rem;
  &:not(:first-child) {
    border-top: 1px solid #eaecef;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .post-date {
    font-size: 12px;
    display: inline-block;
    color: #777;
  }
  .post-title {
    font-size: 1.2rem;
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
  .post-link {
    position: relative;
    letter-spacing: 1px;
    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      height: 1px;
      bottom: 0;
      left: 51%;
      right: 51%;
      background-color: #1890ff;
      transition-duration: 0.2s;
      transition-property: right, left;
      transition-timing-function: ease-out;
    }
    &:hover:before {
      left: 0;
      right: 0;
    }
  }
  .post-meta {
    color: #999;
    font-size: 0.8rem;
    span {
      display: inline-block;
      height: 100%;
    }
  }
  .post-summary {
    font-size: 0.9rem;
  }
  .post-title:hover {
    color: #1890ff;
  }
}
</style>
