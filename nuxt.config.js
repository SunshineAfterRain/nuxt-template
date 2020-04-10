require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env' : '.env.prod'
})

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
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
    [
      '@nuxtjs/component-cache',
      {
        max: 10000, // 最大缓存数量
        maxAge: 1000 * 60 * 15 // 缓存过期时间(ms) 15min
      }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    [
      '@nuxtjs/dotenv',
      {
        filename: process.env.NODE_ENV === 'development' ? '.env' : '.env.prod'
      }
    ]
  ],
  axios: {
    proxy: true,
    prefix: 'api'
  },
  proxy: {
    '/api': {
      target: `http://${process.env.APP_URL}/secure/`,
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 9527, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
