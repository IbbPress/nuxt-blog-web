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
      <div class="gravatar">
        <div class="background">
          <div class="bg be-2">
            <img src="/images/about-background-be-2.jpg" alt="background" class="image">
          </div>
          <div class="bg be-1">
            <img src="/images/about-background-be-1.jpg" alt="background" class="image">
          </div>
          <div class="bg star-1">
            <img src="/images/about-background-star-1.png" alt="background-star" class="image">
          </div>
          <div class="bg star-2">
            <img src="/images/about-background-star-2.png" alt="background-star" class="image">
          </div>
        </div>
        <img src="/images/avatar.png" alt="avatar" class="avatar">
        <div class="desc">
          <h3 class="name">
            <strong>wencai zhang</strong>
          </h3>
          <p class="skills">
            数字游民
          </p>
          <a class="followme">众里寻他</a>
          <div class="wechat"></div>
        </div>
      </div>
    </div>
    <div class="about-project">
      <a target="_blank" class="project-link" rel="external nofollow noopener">
        <p class="title">
          <!-- <i class="iconfont icon-experiment" /> -->
          <span>xxxxx</span>
        </p>
        <p class="description">了解更多关于我的项目的进展</p>
      </a>
      <div class="animation">
        <div class="wave" />
        <div class="wave" />
      </div>
    </div>
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
  .gravatar {
    position: relative;
    width: 6rem;
    margin-left: 1.236rem;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: hsla(0,0%,100%,0.6);

    .background {
      display: block;
      position: absolute;
      width: 100%;
      height: 26%;
      top: 0;
      right: 0;
      z-index: 0;
      overflow: hidden;

      @keyframes aboutbg-be-1 {
        0% { transform: translate3d(0%, 0%, 0) }
        25% { transform: translate3d(-50%, -50%, 0) }
        50% { transform: translate3d(-50%, 0%, 0) }
        75% { transform: translate3d(0%, -50%, 0) }
        100% { transform: translate3d(0%, 0%, 0) }
      }
      @keyframes aboutbg-be-2 {
        0% { transform: translate3d(0%, 0%, 0) }
        25% { transform: translate3d(0%, -50%, 0) }
        50% { transform: translate3d(-20%, 0%, 0) }
        75% { transform: translate3d(-30%, -50%, 0) }
        100% { transform: translate3d(0%, 0%, 0) }
      }
      @keyframes aboutbg-star {
        0% { opacity: 1; }
        25% { opacity: .5; }
        50% { opacity: .8; }
        75% { opacity: .2; }
        100% { opacity: 1; }
      }
      .bg {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        z-index: 0;
        overflow: hidden;
        height: 100%;
        width: 100%;
        .image {
          width: auto;
          height: 200%;
        }
      }
      .bg.be-1 {
        opacity: .66;
        .image {
          animation: aboutbg-be-1 100s linear infinite;
        }
      }
      .bg.be-2 {
        opacity: 1;
        .image {
          animation: aboutbg-be-2 80s linear infinite;
        }
      }
      .bg.star-1,
      .bg.star-2 {
        width: auto;
        height: auto;
        right: 1rem;
        > .image {
          width: 5rem;
          height: auto;
          animation: aboutbg-star 6s linear infinite;
        }
      }
    }

    .avatar {
      width: 8rem;
      height: 8rem;
      z-index: 1;
      margin-top: 5rem;
      max-width: 100%;
      border-radius: 100%;
      border: 5px solid hsla(0,0%,100%,0.6);
      box-sizing: content-box;
      transition: transform .38s;
    }

    .desc {
      text-align: center;
    }
    .followme {
      margin-top: 1.666rem;
      display: inline-block;
      color: #0088f5;
      border: 1px solid #0088f5;
      border-radius: 1px;
      width: 56%;
      height: 2.68rem;
      text-align: center;
      line-height: 2.46rem;

      &:hover {
        color: #fff;
        background-color: #0088f5;
      }
    }
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
