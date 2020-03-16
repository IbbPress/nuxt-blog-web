<template>
  <header id="header" class="header d-flex flex-justify-between flex-items-center py20">
    <div class="logo-wrapper">
      <nuxt-link class="logo" to="/">
        IbbPress
      </nuxt-link>
    </div>
    <nav class="site-navbar">
      <ul id="menu" class="menu">
        <li class="menu-item">
          <nuxt-link class="menu-item-link" to="/posts">
            List
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header .site-navbar .menu {
  display: inline-block;
  position: relative;
  padding-left: 0;
  /* padding-right: 25px; */
  font-family: Athelas, STHeiti, Microsoft Yahei, serif;
}
.header .site-navbar .menu .menu-item {
  display: inline-block;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  backface-visibility: hidden;
  box-shadow: 0 0 1px transparent;
  position: relative;
  overflow: hidden;
}
.header .site-navbar .menu .menu-item-link {
  font-size: 18px;
}
.logo {
  font-size: 48px;
  font-family: "Chancery", cursive, LiSu, sans-serif;
}
</style>
