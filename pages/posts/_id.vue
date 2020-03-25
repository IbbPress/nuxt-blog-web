<template>
  <div class="content content-post">
    <div v-if="post">
      <article>
        <header class="article-header">
          <h1 class="article-title">
            {{ post.title }}
          </h1>
          <div class="article-meta">
            <small>
              发布于 {{ post.createAt | formate }}
            </small>
          </div>
        </header>
        <div class="article-content" :class="`font-${value}`">
          <div class="content" v-html="$md.render(post.content)" />
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import Prism from '~/plugins/prism'

export default {
  filters: {
    formate (time) {
      const weekMap = ['日', '一', '二', '三', '四', '五', '六']
      const day = dayjs(Number(time))
      return day.format('YYYY年MM月DD日, 星期, HH:mm').replace('星期', '星期' + weekMap[day.format('d')])
    }
  },
  async asyncData ({ params, $axios }) {
    const { data } = await $axios.get(`/api/posts/${params.id}`)
    return { post: data.data }
  },
  data () {
    return {
      options: [
        { label: '大', value: 'large' },
        { label: '中', value: 'medium' },
        { label: '小', value: 'small' }
      ],
      value: 'medium'
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
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-tomorrow.min.css' }
      ],
      title: this.post.title
    }
  }
}
</script>

<style scoped lang="less">
.content.content-post {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &.font-small {
    font-size: 14px;
  }
  &.font-medium {
    font-size: 16px;
  }
  &.font-large {
    font-size: 18px;
  }

  article {
    padding: 10px 30px 15px 30px;
    color: #555;
    font-size: 15px;

    img {
      max-width: 100%;
    }
    .article-meta {
      padding-top: 5px;
    }
  }

}
</style>
