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
              <a-icon type="calendar" />
              发布于 {{ post.createAt | formate }}
            </small>
          </div>
        </header>
        <div class="article-content" :class="`font-${value}`">
          <div class="content" v-html="md.render(post.content)" />
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import MarkdownIt from 'markdown-it'
import Prism from 'prismjs'

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
  mounted () {
    Prism.highlightAll()
  },
  data () {
    return {
      md: new MarkdownIt(),
      options: [
        { label: '大', value: 'large' },
        { label: '中', value: 'medium' },
        { label: '小', value: 'small' }
      ],
      value: 'medium'
    }
  },
  methods: {
    onChange () {}
  }
}
</script>

<style>
.content.content-post {
  /* width: 760px; */
  margin: 50px auto;
  /* background-color: rgb(251, 250, 249); */
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}
article {
  padding: 10px 30px 15px 30px;
  color: #555;
  font-size: 15px;
}

.article-meta {
  padding-top: 5px;
}

</style>
<style>
.article-content.font-small {
  font-size: 14px;
}
.article-content.font-medium {
  font-size: 16px;
}
.article-content.font-large {
  font-size: 18px;
}
</style>
