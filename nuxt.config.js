import axios from 'axios'
require('dotenv').config()

export default {
  mode: 'universal',

  generate: {
    async routes (callback) {
      const response = await axios.get('http://api.ibb.wencaizhang.com/api/posts')
      console.log('response length is: ', response)
      const routes = response.data.data.map(post => `posts/${post.id}`)
      callback(null, routes)
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '文才的编程笔记',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: 'http://ibb-oss.wencaizhang.com/3828f850662baee990bbdaa479ccad4d.png' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css' }
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.12/dist/antd.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1890ff' },
  /*
  ** Global CSS
  */
  css: [
    // 'ant-design-vue/dist/antd.css',
    '@/assets/css/code.less',
    '@/assets/css/custom-block.less',
    '@/assets/css/main.less',
    '@/assets/css/lib.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/prism'
    // '@/components/highlight',
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
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60 // 一小时有效期
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://api.ibb.wencaizhang.com',
    proxy: true
  },
  proxy: {
    '/api/': {
      target: process.env.BASE_URL || 'http://localhost:3000'
      // pathRewrite: {
      //   '^/api' : '/'
      // }
    }
  },
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-emoji',
      'markdown-it-mark',
      'markdown-it-toc-and-anchor',
      [
        'markdown-it-container',
        'tip', {
          validate (params) {
            // return params.trim() === 'tip'
            return params.trim().match(/^tip(.*)$/)
          },
          render (tokens, idx) {
            const m = tokens[idx].info.trim().match(/^tip\s+(.*)$/)
            const title = m ? m[1] : '提示'
            if (tokens[idx].nesting === 1) {
              const icon = `
                <i class="block-icon tip-icon">
                  <svg viewBox="64 64 896 896" data-icon="tip-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>
                </i>
              `
              return `<div class="custom-block tip"><p class="custom-block-title">${icon}${title}</p>`
            } else {
              return '</div>'
            }
          }
        }
      ],
      [
        'markdown-it-container',
        'warning', {
          validate (params) {
            // return params.trim() === 'warning'
            return params.trim().match(/^warning(.*)$/)
          },
          render (tokens, idx) {
            const m = tokens[idx].info.trim().match(/^warning\s+(.*)$/)
            const title = m ? m[1] : '注意'
            if (tokens[idx].nesting === 1) {
              const icon = `
                <i class="block-icon warning-icon">
                  <svg viewBox="64 64 896 896" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>
                </i>
              `
              return `<div class="custom-block warning"><p class="custom-block-title">${icon}${title}</p>`
            } else {
              return '</div>'
            }
          }
        }
      ],
      [
        'markdown-it-container',
        'danger', {
          validate (params) {
            // return params.trim() === 'danger'
            return params.trim().match(/^danger(.*)$/)
          },
          render (tokens, idx) {
            const m = tokens[idx].info.trim().match(/^details\s+(.*)$/)
            const title = m ? m[1] : '警告'
            if (tokens[idx].nesting === 1) {
              const icon = `
                <i class="block-icon danger-icon">
                  <svg viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
                </i>
              `
              return `<div class="custom-block danger"><p class="custom-block-title">${icon}${title}</p>`
            } else {
              return '</div>'
            }
          }
        }
      ],
      [
        'markdown-it-container',
        'details', {
          validate (params) {
            return params.trim().match(/^details(.*)$/)
          },

          render (tokens, idx) {
            const m = tokens[idx].info.trim().match(/^details\s+(.*)$/)
            const title = m ? m[1] : '详细信息'
            if (tokens[idx].nesting === 1) {
              // opening tag
              return '<details class="custom-block details"><summary>' + title + '</summary>\n'
            } else {
              // closing tag
              return '</details>\n'
            }
          }
        }
      ]
    ]
  },
  styleResources: {
    less: '@/assets/vars/*.less'
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true, // css 独立打包 link 的形式加载
    publicPath: '/app/_nuxt/', // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
    maxChunkSize: 360000,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          expansions: {
            name: 'expansions',
            test (module) {
              return /swiper|233333|lozad|marked|favico|amplitude|highlight|prismjs|markdown-it.*/.test(module.context)
            },
            chunks: 'initial',
            priority: 10
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  server: {
    port: 8889, // default: 3000
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
  extractCSS: true /** 将css单独打包成一个文件，默认的是全部加载到有事业 **/
}
