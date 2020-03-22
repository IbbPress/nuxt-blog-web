<template>
  <header id="header" class="header py10">
    <div class="container d-flex flex-justify-between flex-items-center">
      <div class="logo-wrapper">
        <nuxt-link class="header-logo" to="/">
          <!-- <span style="color: #000;">Ibb</span><span style="color: #00965e;">Press</span> -->
          IbbPress
        </nuxt-link>
      </div>
      <nav class="site-navbar">
        <ul id="menu" class="menu">
          <li class="menu-item">
            <nuxt-link class="menu-item-link" to="/posts">
              归档
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="less">
.header {
  border-top: 2px solid #00965e;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  background-color: #fff!important;
  margin-bottom: 1.5rem;
  .container {
    width: 1020px;
    margin: 0 auto;
    padding: 0 12px;
  }
  @keyframes logo-blink {
    0% { mask-position: -30% }
    100% { mask-position: 666% }
  }
  .header-logo {
    font-size: 22px;
    font-family: "Chancery", cursive, LiSu, sans-serif;

    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzYgMzMiPjxwYXRoIGQ9Ik02LjMgMjUuNWMtMi4zIDAtNC4xLS42LTUuOS0xLjl2LS4zbDEuMy0yLjdjLjkuOCAyLjQgMS43IDMuOCAxLjcgMS4xIDAgMi4yLS40IDIuMi0xLjcgMC0xLjEtMS0xLjUtMi4yLTItLjQtLjItLjktLjQtMS40LS42LTItMS0zLjQtMi4yLTMuNC00LjcgMC00LjUgNC4zLTUgNi4yLTUgMiAwIDQgLjUgNS4zIDEuM3YuNGwtMS4zIDIuN2MtMS0uNy0yLjItMS4xLTMuNC0xLjEtMS42IDAtMS45LjgtMS45IDEuNSAwIDEuMSAxIDEuNSAyLjQgMiAuMy4xLjYuMi45LjQgMi40IDEgMy44IDIuMSAzLjggNC44LS4xIDQuNS00IDUuMi02LjQgNS4yem0xNS4zIDBjLTYuNyAwLTcuNy01LjQtNy43LTguNiAwLTMuOCAxLjMtOC40IDcuNC04LjQgNS44IDAgNyA0LjIgNyA3LjkgMCAuNS0uMSAxLjQtLjMgMi0uOCAwLTMuNyAwLTYtLjFoLTMuMnYuMmMwIC45LjMgMy45IDMuNCAzLjkgMS4yIDAgMi4zLS41IDMuMy0xLjZsMS45IDIuM3YuM2MtMS44IDEuMy0zLjYgMi4xLTUuOCAyLjF6bS0uMy0xMy43Yy0xLjYgMC0yLjQgMS4zLTIuNSAzLjl2LjJoNC44di0uMmMuMS0yLjYtLjctMy45LTIuMy0zLjl6bTE2LjEgMjAuN2MtMi4yIDAtNC40LS42LTYuMi0xLjZsMS4yLTMuMWguMmMxIC42IDIuNCAxLjQgNC4xIDEuNCAxLjkgMCAzLTEgMy0yLjcgMC0uMi4xLTEuNy4yLTIuN3YtLjFsLS40LS4yLS4xLjFjLTEuMSAxLTIuMiAxLjktNC4xIDEuOS0zLjYgMC01LjQtMi43LTUuNC04LjUgMC00LjEgMS40LTguNCA1LjQtOC40IDEuNSAwIDMgLjcgNC4yIDJsLjEuMS4zLS4xLjMtMS4zLjMtLjMgNC4xLjFjMCAuNi0uMSAyLjEtLjEgMi45djE0Yy4xIDYtNS40IDYuNS03LjEgNi41em0wLTIwLjRjLTIuNCAwLTIuNCAzLjYtMi40IDQuOCAwIDEuNiAwIDUuMiAyIDUuMi44IDAgMS44LS42IDIuNS0xLjZ2LS4xbC4xLTcuMnYtLjFjLS42LS41LTEuNC0xLTIuMi0xek02NC42IDI1YzAtLjcuMi0xMC4yLjItMTAuMyAwLTEuNi0uMi0yLjYtMS41LTIuNi0uNyAwLTEuNi40LTIuMyAxbC0uMS0uMXYxMS45SDU2YzAtLjcuMS0xMC4yLjEtMTAuMyAwLTEuNi0uMi0yLjYtMS41LTIuNi0uNiAwLTEuNi40LTIuMyAxbC0uMS4xLjEgMTEuOWgtNVYxM2MwLTEuMS0uMS0zLjItLjEtNC4xbDQuMy0uMS4zLjIuMiAxLjQuMy4xLjEtLjFjMS40LTEuMiAzLjQtMiA0LjktMiAxLjQgMCAyLjUuNyAzLjEgMi4xbC4xLjMuMi0uMmMxLjUtMS4zIDMuNS0yLjEgNS4yLTIuMSAyLjQgMCAzLjggMS43IDMuOCA0LjggMCAuMi0uMSAxMS0uMSAxMS43aC01em0xNSAuNWMtNi43IDAtNy43LTUuNC03LjctOC42IDAtMy44IDEuMy04LjQgNy40LTguNCA1LjggMCA3IDQuMiA3IDcuOSAwIC41LS4xIDEuNC0uMyAyLS44IDAtMy43IDAtNi0uMWgtMy4ydi4yYzAgLjkuMyAzLjkgMy40IDMuOSAxLjIgMCAyLjMtLjUgMy4zLTEuNmwxLjkgMi4zdi4zYy0xLjggMS4zLTMuNiAyLjEtNS44IDIuMXptLS4zLTEzLjdjLTEuNiAwLTIuNCAxLjMtMi41IDMuOXYuMmg0Ljh2LS4yYzAtMi42LS43LTMuOS0yLjMtMy45ek05Ny4yIDI1YzAtLjcuMi0xMC4yLjItMTAuMyAwLTEuNy0uMy0yLjYtMS42LTIuNi0uNyAwLTEuNi40LTIuNSAxbC0uMS4xLjEgMTEuOWgtNVYxM2MwLTEuMS0uMS0zLjEtLjEtNC4xbDQuMy0uMS4zLjIuMiAxLjQuMy4xLjEtLjFjMS41LTEuMiAzLjYtMiA1LjItMiAyLjUgMCAzLjggMS43IDMuOCA0LjggMCAuMi0uMSAxMS0uMSAxMS43aC01LjF2LjF6bTEzLjEgMGMtNC4xIDAtNC41LTIuNS00LjUtNSAwLS43IDAtNC4zLjEtNy40di0uMmgtMS44bC4xLTMuNWgxLjhWNC4zbC4yLS4yaDQuN2MwIC42IDAgMi40LS4xIDQuNnYuMmgyLjdsLS4xIDMuNWgtMi43di4yYy4xIDMgLjEgNi4yLjEgNi44IDAgMS43IDAgMi4zIDEuNiAyLjNoLjl2My4xbC0uMi4yaC0yLjh6Ii8+PHBhdGggZD0iTTExNy4yIDI1YzAtMS40IDAtOS40LjEtMTIuNHYtLjJoLTEuOWwuMS0zLjVoMS44di0uMmMwLS4xLS4xLTIuOC0uMS0yLjggMC00LjQgMi44LTUuNCA1LjEtNS40IDEuNCAwIDIuNi4yIDMuNy43di40bC0xIDIuOGMtLjUtLjMtMS0uNC0xLjQtLjQtMS4xIDAtMS41LjgtMS41IDIuNXYyLjRoMi45bC0uMSAzLjVoLTIuOHYuMmMuMSAyLjkuMSAxMSAuMSAxMi40aC01em0xMi44LjRjLTMuNSAwLTMuOS0zLjQtMy45LTQuOCAwLTUuMiA0LjEtNS41IDguNS01LjhoLjJsLjEtLjJ2LS45YzAtMS4yLS43LTEuOS0yLjItMS45LTEuOSAwLTMuNi41LTQuOCAxbC0xLjEtMi45di0uMmMyLjQtLjkgNC45LTEuMyA3LjUtMS4zIDMuNyAwIDUuNiAxLjcgNS42IDV2Ny45YzAgMS4zLjEgMi45LjEgMy43aC00LjFsLS4zLS4zLS40LTEuMy0uMy0uMS0uMS4xYy0xLjQgMS40LTIuOSAyLTQuOCAyem00LjUtOC4yYy0yLjUuMS0zLjcuMS0zLjcgMi43IDAgMiAuOCAyLjQgMS41IDIuNC44IDAgMS44LS41IDIuNS0xLjJsLjEtLjF2LTMuNWwtLjEtLjEtLjItLjFjMC0uMS0uMS0uMS0uMS0uMXptMTIgOC4yYy0yLjcgMC00LTEuNi00LTQuOCAwLS4yLjEtMTEgLjEtMTEuOGg0LjhsLjIuMmMwIC41LS4xIDEwLjEtLjEgMTAuMyAwIDEuNy42IDIuNiAxLjYgMi42LjkgMCAyLS41IDIuNy0xLjJsLjEtLjEtLjEtMTEuOWg0LjhsLjIuMlYyMWMwIDEuMy4xIDIuOS4xIDMuN2gtNC4xbC0uMy0uMy0uNC0xLjQtLjQtLjEtLjEuMWMtMS40IDEuNy0zIDIuNC01LjEgMi40em0xMy4yLS40Yy0uMS0uOC0uMS0yLjYtLjEtMy43VjQuOWMwLTEuMSAwLTIuOC0uMS0zLjdsNC45LS4xLjIuMnYyMGMwIDEuMi4xIDIuOS4xIDMuN2gtNXptMTIuOSAwYy00LjEgMC00LjUtMi41LTQuNS01IDAtLjcgMC00LjMuMS03LjR2LS4yaC0xLjhsLjEtMy41aDEuOFY0LjNsLjItLjJoNC43YzAgLjYgMCAyLjQtLjEgNC42di4yaDIuN2wtLjEgMy41SDE3M3YuMmMuMSAzIC4xIDYuMi4xIDYuOCAwIDEuNyAwIDIuMyAxLjYgMi4zaC45djMuMWwtLjIuMmgtMi44eiIgZmlsbD0iIzAwOTY1ZSIvPjwvc3ZnPg==);
    background-repeat: no-repeat;
    width: 139px;
    height: 26px;
    display: inline-block;
    color: transparent;

    filter: none;
    mask-size: 88%;
    mask-position: -30%;
    mask-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.2)
    );
    animation: logo-blink 8s ease-in 1s infinite;
  }
  .site-navbar {
    .menu {
      display: inline-block;
      position: relative;
      padding-left: 0;
      font-family: Athelas, STHeiti, Microsoft Yahei, serif;
      line-height: normal;
      margin: 0;
      font-weight: bold;

      .menu-item {
        display: inline-block;
        display: inline-block;
        vertical-align: middle;
        transform: translateZ(0);
        backface-visibility: hidden;
        box-shadow: 0 0 1px transparent;
        position: relative;
        overflow: hidden;
        .menu-item-link {
          font-size: 18px;
          color: rgba(0,0,0,.5);
          padding-left: .75rem;
          padding-right: .75rem;
          &:hover {
            color: rgba(0,0,0,.7);
          }
        }
      }
    }
  }
}

</style>
