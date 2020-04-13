<template>
  <nav id="navbar" class="navbar">
    <div class="container d-flex flex-justify-between">
      <div class="nav-logo">
        <nuxt-link to="/">
          文才的编程笔记
        </nuxt-link>
      </div>
      <div class="nav-menu">
        <nuxt-link class="menu menu-item-link" :class="{ active: routeName == 'index' }" to="/">
          首页
          <div class="mr-hover-effect" />
        </nuxt-link>
        <nuxt-link class="menu menu-item-link" :class="{ active: routeName === 'posts' }" to="/posts">
          归档
          <div class="mr-hover-effect" />
        </nuxt-link>
        <nuxt-link class="menu menu-item-link" :class="{ active: routeName === 'about' }" to="/about">
          关于
          <div class="mr-hover-effect" />
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    routeName () {
      return this.$route.name
    }
  }
}
</script>

<style lang="less">
#navbar {
  .css-icon {
    display: inline-block;
    height: 1em; width: 1em;
    font-size: 1em!important;
    box-sizing: border-box;
    text-indent: -9999px;
    vertical-align: middle;
    position: relative;
  }
  .css-icon::before,
  .css-icon::after {
    content: '';
    box-sizing: inherit;
    position: absolute;
    left: 50%; top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .z-icon-menu::before {
    box-shadow: 0 -.35em, 0 .35em;
    border-top: 2px solid;
    width: 100%;
  }
}
</style>
<style lang="less">
#navbar {
  position: relative;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  height: 4rem;
  line-height: 4rem;
  box-sizing: border-box;
  // border-bottom: 1px solid #eaecef;
  color: #2c3e50;
  background-color: hsla(0,0%,100%,.7);
  transition: all .5s ease-out;
  .nav-logo {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    font-weight: 500;

  }
  .nav-menu {
    display: flex;

    .menu-item-link {
      padding: 0 .75rem;
      // border-top: 2px solid transparent;
      &.active {
        font-weight: 500;
        // border-top-color: #1890ff;
      }
    }
  }
}

.loading #nav {
  transform: translate3d(0, -100%, 0);
  opacity: 0
}

.menu-item-link {
  position: relative;
  transition: all .3s linear;
}
.mr-hover-effect {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  height: 50%;
  opacity: 0;
  background: rgba(230,247,255,.1);
  border-top: 2px solid #1890ff;
  border-bottom: 2px solid #1890ff;
  transition: all .3s ease-in;
}
.menu-item-link:hover .mr-hover-effect {
  opacity: 1!important;
  height: 100%!important;
}
</style>
