const axios = require('axios')
require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: 'http://ibb-oss.wencaizhang.com/3828f850662baee990bbdaa479ccad4d.png' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-tomorrow.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.12/dist/antd.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3eaf7c' },
  /*
  ** Global CSS
  */
  css: [
    // 'ant-design-vue/dist/antd.css',
    '@/assets/css/code.less',
    '@/assets/css/main.css',
    '@/assets/css/lib.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
  ],
  // build: {
  //   babel: {
  //     plugins: [
  //       ["import", { "libraryName": "antd", "libraryDirectory": "lib", "style": "css" }]
  //     ]
  //   }
  // },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': {
      target: process.env.BASE_URL || 'http://localhost:3000',
      // pathRewrite: {
      //   '^/api' : '/'
      // }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 8888, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        },
        styles: {
          name: 'chunk-styles',
          test: /\.(scss|css)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  extractCSS: true, /** 将css单独打包成一个文件，默认的是全部加载到有事业 **/
}
