<template>
  <div class="post-container" style="background: #fff; padding: 1.5rem;">
    <div v-if="post" class>
      <article>
        <!-- <header class="post-header">
          <h1 class="post-title">
            {{ post.title }}
          </h1>
          <div class="post-meta">
            <small class="post-meta-date">
              发布于 {{ post.createAt | formate }}
            </small>
          </div>
        </header>-->
        <section
          class="post-content"
          v-html="$md.render(post.content)"
        />
        <footer v-if="false" class="post-footer">
          <div class="post-tags">
            <a href="/tag/css/" class="js-ajax-link js-tag-index">CSS</a>
          </div>
          <!-- <div class="post-share">

          </div>-->
        </footer>
      </article>
    </div>
    <!-- <post-nav /> -->
  </div>
</template>
<script>
import dayjs from 'dayjs'
import Prism from '~/plugins/prism'
// import PostNav from '@/components/PostNav.vue'
export default {
  //   components: { PostNav },
  filters: {
    formate (time) {
      const weekMap = ['日', '一', '二', '三', '四', '五', '六']
      const day = dayjs(Number(time))
      return day
        .format('YYYY年MM月DD日, 星期, HH:mm')
        .replace('星期', '星期' + weekMap[day.format('d')])
    }
  },
  // async asyncData ({ params, $axios }) {
  //   const { data } = await $axios.get(`/api/posts/${params.id}`)
  //   return { post: data.data }
  // },
  async fetch ({ store, params, $axios }) {
    const { data } = await $axios.get(`/api/posts/${params.id}`)
    store.commit('setCurrPost', data.data)
  },
  computed: {
    post () {
      return this.$store.state.currPost
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  methods: {
    onChange () {}
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-tomorrow.min.css'
        }
      ],
      title: this.post.title,
      meta: [
        { name: 'description', content: this.post.summary },
        { name: 'keywords', content: this.post.tags.join(',') },
        { name: 'author', content: this.post.author }
      ]
    }
  }
}
</script>
