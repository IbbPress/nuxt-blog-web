<template>
  <div class="home">
    <!--样式仿照 https://www.softorbits.com/installed.html?v=5.0&a_aid=&ref=Remover&lang=chinesesimplified&pid=bkg&enableInstall=1&activated=1&utm_nooverride=1&utm_source=Remover&utm_medium=installer&utm_term=SoftOrbits%20Background%20Remover&utm_content=action=installerpopup,v=5.0,lang=chinesesimplified&utm_campaign=Build%20SoftOrbits%20Background%20Remover%20-%20(no%20rule)%20-%20Remover -->

    <div class="blob blob-3 w-50 h-50 bg-white opacity-10 top right" />
    <div class="blob blob-4 w-25 h-25 bg-white opacity-10 bottom left" />

    <div class="home-box">
      <h2 id="indexLogo" title="For Future, For Freedom." class="web-font">
        张文才的个人网站
        <a aria-hidden="true" href="/entry/">
          <img src="http://ibb-oss.wencaizhang.com/3828f850662baee990bbdaa479ccad4d.png" alt="张文才">
        </a>
      </h2>
      <h3 title="For Future, For Freedom." aria-hidden="true">
        wencaizhang's personal website
      </h3>
      <p>
        <font aria-hidden="true">
          »
        </font>
        <nuxt-link to="/posts">
          博客
        </nuxt-link>
        <font aria-hidden="true">
          /
        </font>
        <a href="javascript:;" aria-label="给文才留言">
          留言
        </a>
        <font aria-hidden="true">
          /
        </font>
        <a href="javascript:;" aria-label="文才的实验室">
          实验
        </a>
        <font aria-hidden="true">
          /
        </font>
        <a href="javascript:;" aria-label="查看文才的个人信息">
          关于
        </a>
      </p>
      <p>
        <font aria-hidden="true">
          »
        </font>
        <i class="icon" title="Github">
          <a href="https://github.com/wencaizhang" target="_blank" aria-label="文才的 Github 地址">
            <i class="iconfont icon-github" />
          </a>
        </i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_1671456_hcboulijfy5.css' }
      ]
    }
  }
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
}

.home {
  position: relative;
  background: linear-gradient(to right, #2568ef, #ff564f) !important;
  height: 100vh;
  width: 100vw;
  font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  overflow: hidden;
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
}

.top {
  top: 0;
  bottom: auto;
}

.bottom {
  bottom: 0;
  top: auto;
}

.right {
  right: 0;
  left: auto;
}

.left {
  left: 0;
  right: auto;
}

.opacity-10 {
  opacity: 0.1;
}

.h-25 {
  height: 25% !important;
}

.w-25 {
  width: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.w-50 {
  width: 50% !important;
}

.bg-white {
  background-color: #fff !important;
}

.blob.right {
  right: -5vw;
}

.blob.top {
  top: -5vw;
}

.blob {
  position: absolute;
  z-index: 0;
  transform: scale(3);
  -webkit-mask-image: url(/blob-1.svg);
  mask-image: url(/blob-1.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.blob.blob-3 {
  -webkit-mask-image: url(/blob-3.svg);
  mask-image: url(/blob-3.svg);
}

.blob.blob-4 {
  -webkit-mask-image: url(/blob-4.svg);
  mask-image: url(/blob-4.svg);
}

/*-0---0-*/
.home-box {
  -webkit-user-select: none;
  position: absolute;
  z-index: 10;
  width: 440px;
  /* height: 240px; */
  background: rgba(97, 97, 97, 0.3);
  left: 50%;
  top: 50%;
  margin-left: -220px;
  /* margin-top: -120px; */
  margin-top: -180px;
  padding: 20px;
  border-radius: 12px;
  color: #eee;
  /* font-family: Georgia, serif; */
  transition: all 0.3s ease;
}

.home-box:hover {
  background: rgba(97, 97, 97, 0.4);
}

#indexLogo {
  cursor: pointer;
  -webkit-user-select: none;
}

.home-box h2,
.home-box h3 {
  color: #eee;
  /* font-weight: 400; */
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  margin: 0;
  padding: 0;
}

.home-box h3 {
  font-size: 16px;
  margin-bottom: 30px;
}

.home-box p {
  background: rgba(154, 154, 154, 0.5);
  padding: 10px;
  line-height: 24px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 18px;
  transition: background 0.3s;
}

.home-box p a {
  color: #eee;
  text-decoration: none;
}

.home-box p a:hover {
  text-decoration: underline;
}

.home-box h2 img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  vertical-align: middle;
  margin-left: 5px;
  border: 0;
}

.home-box .icon {
  font-size: 20px;
  margin: 4px;
}

/* font */
@font-face {
  font-family: "webfont";
  font-display: swap;
  src: url("https://at.alicdn.com/t/webfont_hbu6riqckjf.eot");
  /* IE9*/
  src: url("https://at.alicdn.com/t/webfont_hbu6riqckjf.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("https://at.alicdn.com/t/webfont_hbu6riqckjf.woff2")
      format("woff2"),
    url("https://at.alicdn.com/t/webfont_hbu6riqckjf.woff") format("woff"),
    /* chrome、firefox */ url("https://at.alicdn.com/t/webfont_hbu6riqckjf.ttf")
      format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("https://at.alicdn.com/t/webfont_hbu6riqckjf.svg#AlibabaPuHuiTiL")
      format("svg");
  /* iOS 4.1- */
}

.web-font {
  font-family: "webfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1671456_hcboulijfy5.eot?t=1583315703904'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1671456_hcboulijfy5.eot?t=1583315703904#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWYAAsAAAAACjgAAAVKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqHWIZSATYCJAMUCwwABCAFhG0HRxvdCFGUTk6X7KcmT5AtZWOx2KA2+7s5gY2BAQBAAgsoEMEEiIB+7bdP7r45DZJolOrTSQzdklkJ2jKJ0pnuJdzV0i21K/oONukyitZUL3v39+3+6iSO6lEOpVBokEQhmQz/nvaSCRmN4gQ0HVlPSjvIBwUnf8lfay33Qpl/3Dv9o84Dm8++5TTmsDFt2rIAEwxojW2dRwUUqMXeMHZhAuMJaJqR17a3vnsAvTJFEmDEmeC30BvSyjmUoK4oU9pmp7Z3XeqxIN4G8GZ/PvxDNfQCUZGAUnf/dO0BFr8smhKrenRhInjtmUF1ImEVyISbVOuZDle8akubad/rtAU01UXxa+G3ZrWpqoAvnJG8qf7hEURZIpRAkbYReUudrRxPJwh8RRD5HkHmm1aCeFG5iQEIGwDhHZBn85aSmjDo79ftU1R6k+gGysomEx/UDrlKkgwcpxEEvYjypTMoak+bGJXYtmKsDrrr3FJkXaQojTlEKBXZ1kEUxSB8hePoxC5DXCQ33su6X/gQfVT0YDenQ1GxUKxTpQBXDEGoLk9JiVD4aWaIJGmsUCwhDvyGeLJXVDc+2Fk7NsLkcbnV1RwOj96LM9ZJzwEqeo1gkiQNx+kEwaQo5hjYFdUo5fcXjDUa8dt1KcpZ0KBXzdEeIrZgRKyvQXF9nbjNqrpNKNIdIZgPCFp1C1Tr1nf4nFEt4jqJLkVcxd/TiCf0VpEOhJMG4nHdW3SMsK13JEkmmtlE6a4Q2itF0TzKm0OYYQQgcBrWB8AjR4l6xiQ/Js9+lc6nhvlwA/xgWCpfVT0Ycmc3D1eWvxhhdiLSg4Z+ZgOBpQCUr1muUYB8RJe5drhp/m9JKzwm9e9RbgRbzzkZAY45guS8OBU7bfdb7jDnwVLiNdZzzxeexz2P6R83MMWechwIvemysbXapr+slUFi1ZNVI1SU2GNjbOX7lkiy2jgfgbfKtiWx0OQ2x60IQy0DiURkL+9/0dT4fP8VOVUvJF2NhkAcOfXLOH5ZHaCNg62srlzu6amITbEpvz+8Bf/+zb3Hr3mFaeJO+3lLZzy+fPfcIzBVoo3sYiuiqo1sabrwE7BVG9jiDHj/v6GHMm1go7RkRaZWxsXt3T0V/1gjeci9yjzF7DJonoent2NNnxKibB2uqEQ2pseKKtMK/8MPTyR8XLCJ0LoRbmdQpBW5s+v/s82vGntjUnaZOsDluxR+Rqvk2wMzqTNPpM3MpB/D2DjE97H0UNh8QtZvk6Xd4yL74K03o6Vz+bcu6B5jg01HJ98jST5uGc700ooyLNX+uw+SoNbXjGFSDk7Onx91Vh/mHhUSBwXr0zAsKR7Pz0MdqJS1HvPzjkdAekq+ANWb3CdlB1AVpY301pUPHB7J+euRoP9epWfZ9XlRy06sH6iLlOa9per8PAdpCUWBoikyz8Zcm69zSzAKV3rskRcy4d10Dv20I5+UlvoJ5BMfopppSOpm0UxehULLGpTqNqFpxUbnlhGtQ8gKgGVvAIK+D4i6PiDp+0Qz+RsKU/6g1A8d0HQQNPtsmQ+iP1LTraUHvGuguJcp0wy234ncI+7iWx0U2NQj0ka4sFIsR0MblJJuo4HxvGotQ6ZlgutgMopjiZmWId3bYmBtViuVWNqJivcygX67NHLLIg/QnQYk3JNSzMxu9cfev4dwTuyWzkkpsB4hmiFyRxVF5RLohjQtlXIs8YbHVVnkZRCjwqUEWkdmEqt+CWXppULknlUU1PBmakooEysrLfYvT44x7xtJqwxcBBiSgqQhGUgWlI8k6iLtOGNMl1fsTnYfFDZwdwAAAA==') format('woff2'),
  url('//at.alicdn.com/t/font_1671456_hcboulijfy5.woff?t=1583315703904') format('woff'),
  url('//at.alicdn.com/t/font_1671456_hcboulijfy5.ttf?t=1583315703904') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1671456_hcboulijfy5.svg?t=1583315703904#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-weixin:before {
  content: "\e622";
}

.icon-rss:before {
  content: "\e6ee";
}

.icon-weibo:before {
  content: "\e75a";
}

.icon-github:before {
  content: "\e732";
}

</style>
