<template>
  <footer id="footer">
    <section class="credits">
      <span class="credits-theme">
        ICP <a href="http://www.beian.miit.gov.cn/" target="_blank">京ICP备19049835号</a>
      </span>
      <span class="credits-software">
        由
        <a href="https://github.com/IbbPress/nestjs-blog-server.git" target="_blank" rel="noopener noreferrer">IbbPress</a>
        、
        <a href="https://github.com/IbbPress/nuxt-blog-web.git" target="_blank" rel="noopener noreferrer">Nuxt.js</a>
        和 日月星辰 强力驱动
      </span>
    </section>
  </footer>
</template>

<style lang="less" scoped>
#footer {
  text-transform: uppercase;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  font-size: 0.75em;
  line-height: 1.334em;
  background: #1F2026;
  color: #737580;
  z-index: 20;
  transition: all ease-out 0.4s;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  opacity: 1
}

#footer a {
  color: #9D9FA6;
  font-weight: 400
}

#footer .credits {
  text-align: center;
  font-size: 0.75em;
  line-height: 1.334em;
  padding: 2.667em;
  overflow: auto
}

#footer .credits span {
  display: block
}

#footer .credits .credits-theme {
  float: left
}

#footer .credits .credits-software {
  float: right
}

.loading #footer {
  transform: translate3d(0, 100%, 0);
  opacity: 0
}
</style>
