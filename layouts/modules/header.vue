<template>
  <nav id="nav" class="nav">
    <div class="nav-logo">
      <a href="/">
        <!-- <img src="/content/images/2019/01/logo0-1.svg" alt="Logo"> -->
        文才的编程笔记
      </a>
    </div>
    <div class="nav-menu">
      <nuxt-link class="menu menu-item-link" to="/">
        首页
      </nuxt-link>
      <a class="menu" data-action="menu" data-target="menu">
        <i class="css-icon z-icon-menu"></i>
      </a>
      <!-- <a class="menu" data-action="menu" data-target="menu">
        <i class="css-icon z-icon-menu"></i>
      </a> -->
    </div>
  </nav>
</template>

<style lang="less">
#nav {
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
#nav {
  position: relative;
  background: #fff;
  z-index: 70;
  transition: all ease-out 0.4s;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  opacity: 1;
  &:after {
    clear: both;
    content: '';
    display: table
  }

  .nav-logo {
    float: left;
    max-width: 100%;
    height: 4em;
    padding: 1em;
    padding-right: 5em;
    box-sizing: border-box;

    img {
      width: auto;
      max-width: none;
      height: 2em;
      margin: 0
    }

    .name {
      display: block;
      line-height: 2em;
      font-weight: 800;
      color: #363740;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
    }
  }

  .nav-menu {
    position: absolute;
    right: 0;
    top: 0;
    &:after {
      clear: both;
      content: '';
      display: table
    }
    a {
      display: block;
      min-width: 1em;
      height: 100%;
      line-height: 1em;
      padding: 1.5em;
      text-align: center;
      float: left;
      cursor: pointer;

      &:hover,&:focus {
          background: #E1E2E6
      }

      i:before {
          margin: auto
      }
    }
  }
}

.loading #nav {
  transform: translate3d(0, -100%, 0);
  opacity: 0
}

</style>
