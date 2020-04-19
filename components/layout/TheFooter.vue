<template>
  <footer id="footer">
    <section class="credits">
      <p class="credits-software">
        Powered by
        <a href="https://github.com/IbbPress/nestjs-blog-server.git" target="_blank" rel="noopener noreferrer">IbbPress</a>
        |
        <a href="https://github.com/IbbPress/nuxt-blog-web.git" target="_blank" rel="noopener noreferrer">Nuxt.js</a>
        |
        日月星辰
      </p>
      <p>
        Copyright 2020-present
        <a href="https://github.com/wencaizhang" target="_blank">wencaizhang</a>
        | MIT License
      </p>
      <p class="credits-theme">
        ICP <a href="http://www.beian.miit.gov.cn/" target="_blank">京ICP备19049835号</a>
      </p>
    </section>
  </footer>
</template>

<style lang="less" scoped>
#footer {
  // text-transform: uppercase;
  // position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  line-height: 1.334em;
  font-size: 0.8em;
  font-weight: 400;
  color: #737580;
  z-index: 20;
  transition: all ease-out 0.4s;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  opacity: 1;

  color: #666;
  padding: 1.5rem 0;
  margin-top: 1.5rem;
  text-align: center;
  border-top: 1px solid #eaecef;
  border-top: 1px solid #d4e0f1;
  .credits {
    text-align: center;
    // padding: 2em;
    overflow: auto
  }
  a {
    color: #1e90ff;
    font-weight: 400
  }
  p {
    margin: 0;
  }
}
.loading #footer {
  transform: translate3d(0, 100%, 0);
  opacity: 0
}
</style>
