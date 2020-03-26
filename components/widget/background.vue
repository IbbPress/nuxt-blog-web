<template>
  <div id="background">
    <div class="background-image" />
  </div>
</template>

<style lang="less" scoped>
  #background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #eee;
    > .background-image {
      position: absolute;
      width: 100vw;
      height: 100vh;
      opacity: 0.3;
      background: url('/images/background.png');
      &.dark {
        opacity: 0.2;
      }
    }
  }
</style>
