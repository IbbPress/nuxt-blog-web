<template>
  <div id="wrapper" class="nuxt-body d-flex flex-column">
    <client-only>
      <figure class="widget">
        <!-- <background /> -->
        <back-top />
      </figure>
    </client-only>

    <default-header v-if="showBanner" />

    <div class="container d-flex flex-auto" style="margin-top: 1rem;">
      <div class="main" style="width: 75%;">
        <nuxt />
      </div>
      <div class="aside" style="width: 25%;">
        <InfoCard />
        <PostToc v-if="isPostPage && showToc" />
      </div>
    </div>
    <default-footer />
  </div>
</template>

<script>
import TheHeader from './modules/TheHeader'
import footer from './modules/footer'
import InfoCard from './modules/InfoCard'
import PostToc from './modules/Toc'
import BackTop from '~/components/widget/BackTop'
// import Background from '~/components/widget/background'
export default {
  components: {
    defaultHeader: TheHeader,
    defaultFooter: footer,
    BackTop,
    InfoCard,
    PostToc
    // Background
  },
  computed: {
    isPostPage () {
      const { name } = this.$route
      return name === 'posts-id'
    },
    showBanner () {
      return true
    },
    showToc () {
      return false
    }
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<style>
body {
  background-color: #e9ecef;
}
.nuxt-body {
  /* min-height: 100vh;
  padding-top: 4rem; */
}
/* .container {
  width: 1020px;
  margin: 0 auto;
} */
</style>
