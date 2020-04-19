<template>
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
      <a class="followme">
        众里寻他
      </a>
      <!-- <div class="wechat"></div> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.gravatar {
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1rem;
  padding-bottom: 2rem;
  background-color: #fff;

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
      0% {
        transform: translate3d(0%, 0%, 0);
      }
      25% {
        transform: translate3d(-50%, -50%, 0);
      }
      50% {
        transform: translate3d(-50%, 0%, 0);
      }
      75% {
        transform: translate3d(0%, -50%, 0);
      }
      100% {
        transform: translate3d(0%, 0%, 0);
      }
    }
    @keyframes aboutbg-be-2 {
      0% {
        transform: translate3d(0%, 0%, 0);
      }
      25% {
        transform: translate3d(0%, -50%, 0);
      }
      50% {
        transform: translate3d(-20%, 0%, 0);
      }
      75% {
        transform: translate3d(-30%, -50%, 0);
      }
      100% {
        transform: translate3d(0%, 0%, 0);
      }
    }
    @keyframes aboutbg-star {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 0.5;
      }
      50% {
        opacity: 0.8;
      }
      75% {
        opacity: 0.2;
      }
      100% {
        opacity: 1;
      }
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
      opacity: 0.66;
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
    border: 5px solid hsla(0, 0%, 100%, 0.6);
    box-sizing: content-box;
    transition: transform 0.38s;
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
</style>
