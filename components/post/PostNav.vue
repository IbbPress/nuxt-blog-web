<template>
  <nav class="post-nav">
    <nuxt-link class="post-nav-item post-nav-next" to="/posts/3">
      <section class="post-nav-teaser">
        <span class="post-nav-icon">
          <div class="icon-box">
            <i class="css-icon z-icon-arrow-left" />
          </div>
        </span>
        <span class="post-nav-info">
          <h4 class="post-nav-title">常见排序算法总结(待补充)</h4>
          <p class="post-nav-excerpt">
            1. 冒泡排序 冒泡排序是指所有数字两两一比较，找最大的交换到右侧，每一轮将交换得到最大的数字放最右侧，N轮后得出从小到大的数字直到最后一个数字。 2. 选择排序
            选择排序是指每一轮找最大的和最小的交换位置，小的在前面，大的在后面，直到数字只剩下一个完成选择排序。…
          </p>
        </span>
      </section>
    </nuxt-link>
    <nuxt-link class="post-nav-item post-nav-prev" to="/posts/2">
      <section class="post-nav-teaser">
        <span class="post-nav-icon">
          <div class="icon-box">
            <i class="css-icon z-icon-arrow-right" />
          </div>
        </span>
        <span class="post-nav-info">
          <h4 class="post-nav-title">那些你不知道的HTML标签</h4>
          <p
            class="post-nav-excerpt"
          >有人说HTML很简单，都不能称得上是一门语言，以前我也这么认为的，不就是一堆标签按一定规则组合嵌套摆放，后来工作一年多才发现HTML还有很多细节需要经验积累后才知道...…</p>
        </span>
      </section>
    </nuxt-link>
    <div class="clear"></div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          link: '',
          title: '',
          summary: ''
        },
        {
          link: '',
          title: '',
          summary: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.post-nav {
  position: relative;
}

@media only screen and (max-width: 70em) {
  .post-nav {
    height: 7em;
    margin: 2em 0;
  }
}

.post-nav:after {
  clear: both;
  content: "";
  display: table;
}

.post-nav .post-nav-item {
  position: fixed;
  top: 50%;
  display: block;
  margin-top: -4em;
  overflow: hidden;
  border-radius: 10em;
  transition: none;
}

@media only screen and (max-width: 70em) {
  .post-nav .post-nav-item {
    position: absolute;
    top: auto;
    margin: auto;
    max-width: 50%;
  }
}

.post-nav .post-nav-item:hover,
.post-nav .post-nav-item:focus {
  border-radius: 0;
}

.post-nav .post-nav-item:hover .post-nav-teaser .post-nav-icon,
.post-nav .post-nav-item:focus .post-nav-teaser .post-nav-icon {
  box-shadow: 0 0 0 25em #36d995;
}

@media only screen and (max-width: 50em) {
  .post-nav .post-nav-item:hover .post-nav-teaser .post-nav-icon,
  .post-nav .post-nav-item:focus .post-nav-teaser .post-nav-icon {
    box-shadow: 0 0 0 2px #36d995;
  }
}

.post-nav .post-nav-item:hover .post-nav-teaser .post-nav-info,
.post-nav .post-nav-item:focus .post-nav-teaser .post-nav-info {
  display: block;
}

@media only screen and (max-width: 50em) {
  .post-nav .post-nav-item:hover .post-nav-teaser .post-nav-info,
  .post-nav .post-nav-item:focus .post-nav-teaser .post-nav-info {
    display: none;
  }
}

.post-nav .post-nav-item:hover .post-nav-teaser .post-nav-info .post-nav-title,
.post-nav .post-nav-item:focus .post-nav-teaser .post-nav-info .post-nav-title {
  color: #1f2026;
}

.post-nav
  .post-nav-item:hover
  .post-nav-teaser
  .post-nav-info
  .post-nav-excerpt,
.post-nav
  .post-nav-item:focus
  .post-nav-teaser
  .post-nav-info
  .post-nav-excerpt {
  color: #fff;
}

.post-nav .post-nav-item.post-nav-next {
  left: 0;
  text-align: left;
}

.post-nav .post-nav-item.post-nav-next .post-nav-icon {
  float: left;
}

.post-nav .post-nav-item.post-nav-next .post-nav-info {
  padding-left: 6em;
}

.post-nav .post-nav-item.post-nav-prev {
  right: 0;
  text-align: right;
}

.post-nav .post-nav-item.post-nav-prev .post-nav-icon {
  float: right;
}

.post-nav .post-nav-item.post-nav-prev .post-nav-icon i {
  right: -0.05em;
}

.post-nav .post-nav-item.post-nav-prev .post-nav-info {
  padding-right: 6em;
}

.post-nav .post-nav-item .post-nav-teaser {
  display: block;
  padding: 1em;
  transition: all ease-out 0.2s;
  max-width: 25em;
  overflow: visible;
}

.post-nav .post-nav-item .post-nav-teaser:after {
  clear: both;
  content: "";
  display: table;
}

.post-nav .post-nav-item .post-nav-teaser .post-nav-icon {
  display: block;
  width: 5em;
  height: 5em;
  line-height: 5em;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10em;
  border: 1px solid #36d995;
  box-shadow: 0 0 0 0 transparent;
  transition: all ease-out 0.1s;
  background: #f2f3f5;
}

@media only screen and (max-width: 30em) {
  .post-nav .post-nav-item .post-nav-teaser .post-nav-icon {
    width: 4em;
    height: 4em;
    line-height: 4em;
  }
}

.post-nav .post-nav-item .post-nav-teaser .post-nav-icon i {
  /* position: relative; */
  font-size: 2em;
}

@media only screen and (max-width: 30em) {
  .post-nav .post-nav-item .post-nav-teaser .post-nav-icon i {
    font-size: 1.5em;
  }
}

.post-nav .post-nav-item .post-nav-teaser .post-nav-icon i:before {
  margin: auto;
}

.post-nav .post-nav-item .post-nav-teaser .post-nav-info {
  display: none;
  width: 100%;
  box-sizing: border-box;
  transition: all ease-out 0.2s;
}

.post-nav .post-nav-item .post-nav-teaser .post-nav-info .post-nav-title {
  display: block;
  max-height: 1.25em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 1.25em 0 0.25em;
  padding: 0;
  font-size: 1em;
  line-height: 1.25em;
  font-weight: 700;
  color: #363740;
}

.post-nav .post-nav-item .post-nav-teaser .post-nav-info .post-nav-excerpt {
  display: block;
  max-height: 1.334em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 0.75em;
  line-height: 1.334em;
  font-weight: 400;
  color: #9d9fa6;
}

.post-nav {
  .icon-box {
    position: relative;
    height: 100%;
  }
  .css-icon {
    display: inline-block;
    height: 1em;
    width: 1em;
    font-size: 2em;
    box-sizing: border-box;
    text-indent: -9999px;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .css-icon::before,
  .css-icon::after {
    content: "";
    box-sizing: inherit;
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .z-icon-arrow-left::before {
    height: 0.65em;
    width: 0.65em;
    border-style: solid;
    border-width: 2px 0 0 2px;
    -ms-transform: translate(-25%, -50%) rotate(-45deg);
    transform: translate(-25%, -50%) rotate(-45deg);
  }
  .z-icon-arrow-right::before {
    height: 0.65em;
    width: 0.65em;
    border-style: solid;
    border-width: 2px 0 0 2px;
    -ms-transform: translate(-75%, -50%) rotate(135deg);
    transform: translate(-75%, -50%) rotate(135deg);
  }
}
</style>
