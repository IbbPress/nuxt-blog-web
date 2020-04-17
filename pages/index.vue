<template>
  <div class="main-content">
    <h1 style="text-align: center;font-weight: 500;">
      最新文章
    </h1>
    <div class="post-list">
      <div v-for="post in list" :key="post.id" class="post-item">
        <p class="post-title">
          <nuxt-link class="post-link" :to="`/posts/${post.id}`">
            {{ post.title }}
          </nuxt-link>
        </p>
        <p class="post-meta">
          <span class="post-meta-date">
            <span class="post-date">{{ post.createAt | formate }}</span>
          </span>
          <span class="post-meta-tags">
            <span class="post-date">{{ post.createAt | formate }}</span>
          </span>
          <span class="post-meta-categories">
            <span class="post-date">{{ post.createAt | formate }}</span>
          </span>
        </p>
        <p class="post-summary" v-html="post.summary" />
        <p class="post-read-more">
          <nuxt-link class="post-link" :to="`/posts/${post.id}`">
            阅读全文…
          </nuxt-link>
        </p>
      </div>
      <div class="post-item">
        <p class="post-title">
          <nuxt-link class="post-link" to="/posts/">
            更多文章...
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    formate (time) {
      return dayjs(Number(time)).format('YYYY-MM-DD')
    }
  },
  async fetch ({ store, params, $axios }) {
    const { data } = await $axios.get('/api/posts')
    store.commit('setPostList', data.data)
  },
  // fetch ({ store, params, $axios }) {
  //   return $axios.get('/api/posts', {
  //     params: { pageSize: 10000 }
  //   })
  //     .then((resp) => {
  //       // console.log(resp.data)
  //       store.commit('setPostList', resp.data.data)
  //     })
  //   // $axios.get('/api/tags')
  //   //   .then((resp) => {
  //   //     console.log(resp.data)
  //   //     store.commit('setTags', resp.data)
  //   //   })
  //   // $axios.get('/api/category')
  //   //   .then((resp) => {
  //   //     store.commit('setCategory', resp.data)
  //   //   })
  // },
  computed: {
    list () {
      return this.$store.state.postList
    },
    tags () {
      // console.log('this.$store.state.tags: ', this.$store.state.tags)
      return this.$store.state.tags
    },
    category () {
      return this.$store.state.category
    }
  },
  // async asyncData ({ $axios }) {
  //   const { data } = await $axios.get('/api/posts', {
  //     params: {
  //       pageSize: 10000
  //     }
  //   })
  //   this.$store.commit('setPostList', data.data)
  //   return {
  //     data: data.data
  //   }
  // },
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
    padding: 1rem;
    &:not(:first-child) {
      border-top: 1px solid #eaecef;
    }
    p {
      margin-top: 0;
      margin-bottom: .5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }

    .post-date {
      font-size: 12px;
      display: inline-block;
      color: #888;
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
    }
    .post-meta {
      color: #999;
      font-size: .8rem;
      span {
        display: inline-block;
        height: 100%;
      }
    }
    .post-summary {
      font-size: .9rem;
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
