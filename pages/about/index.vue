<template>
  <div class="about-page">
    <div class="about-me">
      <div class="description">
        <h3>将进酒</h3>
        <p>君不见黄河之水天上来，奔流到海不复回。</p>
        <p>君不见高堂明镜悲白发，朝如青丝暮成雪。</p>
        <p>人生得意须尽欢，莫使金樽空对月。</p>
        <p>天生我材必有用，千金散尽还复来。</p>
        <p>烹羊宰牛且为乐，会须一饮三百杯。</p>
        <p>岑夫子，丹丘生，将进酒，杯莫停。</p>
        <p>与君歌一曲，请君为我倾耳听。</p>
        <p>钟鼓馔玉不足贵，但愿长醉不复醒。</p>
        <p>古来圣贤皆寂寞，惟有饮者留其名。</p>
        <p>陈王昔时宴平乐，斗酒十千恣欢谑。</p>
        <p>主人何为言少钱，径须沽取对君酌。</p>
        <p>五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。</p>
      </div>
    </div>
    <!-- <div class="about-project">
      <a target="_blank" class="project-link" rel="external nofollow noopener">
        <p class="title">
          <span>xxxxx</span>
        </p>
        <p class="description">了解更多关于我的项目的进展</p>
      </a>
      <div class="animation">
        <div class="wave" />
        <div class="wave" />
      </div>
    </div> -->
  </div>
</template>

<style lang="less" scoped>
.about-me {
  height: auto;
  margin-bottom: 1.236rem;
  display: flex;
  justify-content: space-between;
  .description {
    flex-grow: 1;
    padding: 2rem 3rem;
    background-color: hsla(0,0%,100%,0.6);
  }
}
.about-project {
  padding: .618rem;
  overflow: hidden;
  position: relative;
  background-color: hsla(0,0%,100%,0.6);
  .animation {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    .wave {
      background: url("/images/wave.svg") repeat-x;
      background-size: contain;
      position: absolute;
      width: 6400px;
      height: 60px;
      bottom: 0;
      animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }
    .wave:nth-of-type(2) {
      margin-left: 100px;
      animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite;
      opacity: 1;
    }
    @keyframes wave {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-1600px, 0, 0);
      }
    }
  }
  .project-link {
    width: 100%;
    height: 17rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: background-color .1s;
    &:hover {
      background-color: hsla(0,0%,77.3%,0.5);
    }
    .title {
      text-transform: uppercase;
      font-family: "webfont-normal", DINRegular;
      margin-bottom: 1rem;
      font-size: 3em;
    }
    .description {
      margin-bottom: 3rem;
    }
  }
}
</style>
