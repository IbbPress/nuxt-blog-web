<template>
  <header
    class="header"
    :style="style"
  >
    <TheNavbar />

    <TransitionFadeSlide>
      <div class="banner">
        <div class="container flex-center">
          <div class="center text-center">
            <template v-if="isPostPage">
              <h1>{{ title }}</h1>
              <small class="post-meta-date" style="margin-top: 5px; color: #fff;">
                由 张文才 发布于 {{ currPost.createAt | formate }}
              </small>
            </template>
            <template v-else>
              <h1 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 5px; font-weight: 500;">
                {{ title }}
              </h1>
              <h3 style="padding: 0; font-weight: 500;">
                Coding Your Ambition
              </h3>
            </template>
          </div>
        </div>
      </div>
    </TransitionFadeSlide>
  </header>
</template>

<script>
import dayjs from 'dayjs'
import GeoPattern from 'geopattern'
import TheNavbar from './TheNavbar.vue'
import TransitionFadeSlide from '@/components/TransitionFadeSlide.vue'
const generators = [
  'octogons',
  'overlappingCircles',
  'plusSigns',
  'xes',
  // 'sineWaves',
  'hexagons',
  'overlappingRings',
  // 'plaid',
  'triangles',
  // 'squares',
  'concentricCircles',
  'diamonds',
  'tessellation',
  'nestedSquares',
  'mosaicSquares',
  'chevrons'
]
export default {
  name: 'TheHeader',
  components: {
    TheNavbar,
    TransitionFadeSlide
  },
  filters: {
    formate (time) {
      const weekMap = ['日', '一', '二', '三', '四', '五', '六']
      const day = dayjs(Number(time))
      return day.format('YYYY年MM月DD日, 星期, HH:mm').replace('星期', '星期' + weekMap[day.format('d')])
    }
  },
  computed: {
    isPostPage () {
      const { name } = this.$route
      return name === 'posts-id'
    },
    currPost () {
      return this.$store.state.currPost || {}
    },
    title () {
      return this.isPostPage ? this.currPost.title : '享受编程和技术所带来的快乐'
    },
    style () {
      // use image
      // if (this.backgroundImg) {
      //   let url = this.backgroundImg
      //   // randomly select an image if an array is provided
      //   if (Array.isArray(url)) {
      //     url = this.randomArr(url)
      //   }
      //   return {
      //     'background-size': 'cover',
      //     'background-repeat': 'no-repeat',
      //     'background-position': 'center',
      //     'background-attachment': 'scroll',
      //     'background-image': `url(${url})`
      //   }
      // }
      // use geopattern
      // avoid prerendering the geopattern in build stage or the html files will be 14KB larger
      // if (!this.$ssrContext && this.backgroundConfig.useGeo !== false) {
      //   return {
      //     'background-image': this.gpImg()
      //   }
      // }
      return {
        'background-image': this.gpImg()
      }
    }
  },
  methods: {
    gpImg () {
      return GeoPattern.generate(this.gpString(), {
        generator: this.randomArr(generators)
      }).toDataUrl()
    },
    gpString () {
      return this.title + (new Date()).toString()
    },
    randomArr (arr) {
      return arr[Math.floor(Math.random() * arr.length)]
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  padding-top: 3rem;
  .banner {
    cursor: default;
    height: 12rem;
    border-bottom: 1px solid #eaecef;
    color: #fff;
    .container {
      height: 100%;
      h1 {
        padding: 0 .6rem;
      }
    }
    .center {
      display: inline-block;
      z-index: 19;
      text-align: center;
      transition: all 0.2s ease-in-out;
      * {
        color: #fff;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
