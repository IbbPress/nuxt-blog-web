<template>
  <div class="content content-post">
    <div v-if="post">
      <article>
        <header class="article-header">
          <h1 class="article-title">
            {{ post.title }}
          </h1>
          <div class="article-meta">
            <span class="time">
              {{ post.createAt | formate }}
            </span>
          </div>
        </header>

        <div class="article-content">
          {{ post.content }}
        </div>
        <!-- <div class="content" v-html="md.render(post.content)" /> -->
      </article>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
// import MarkdownIt from 'markdown-it'
export default {
  filters: {
    formate (time) {
      return dayjs(Number(time)).format('YYYY-MM-DD')
    }
  },
  async asyncData ({ params, $axios }) {
    const { data } = await $axios.get(`/api/posts/${params.id}`)
    return { post: data.data }
  },
  data () {
    return {
      // md: new MarkdownIt()
    }
  }
}
</script>

<style>
.content.content-post {
  width: 760px;
  margin: 50px auto;
  background-color: rgb(251, 250, 249);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}
article {
  padding: 10px 30px 15px 30px;
}
.article-content p {
  font-size: 15px;
  line-height: 2em;
  margin-bottom: 20px;
  color: #555;
}

.article-title {
  text-align: center;
}
</style>
