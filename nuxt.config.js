import webpack from 'webpack'

const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
import { resolve } from 'path'

module.exports = {
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'OBPS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Online Building Permit System enables unified applications for building permits, occupancy permits, and other related permits needed and an avenue for easy tracking of their applications.' },
      { property: "og:site_name", content: "Online Building Permit System" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Online Building Permit System",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "The Online Building Permit System enables unified applications for building permits, occupancy permits, and other related permits needed and an avenue for easy tracking of their applications.",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  plugins: [
    '~/plugins/events.js',
    '~/plugins/http.js',
    '~/plugins/vue-croppa.js',
    {src: '~/plugins/localStorage.js', mode: 'client' },
    '~/plugins/filters.js',
    '~plugins/vue-the-mask.js',
    { src:'~plugins/vuelayers.js', mode: 'client' },
    {src: '~/plugins/vue-file-agent.js', mode: 'client'}
  ],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/helvetica/helvetica.css',
    '~/assets/style/helvetica-neue/helvetica-neue.css'
  ],
  env: {
    API_URL: 'http://202.137.120.41:50503/api', // waiting for the api xd
    VUE_API_URL: 'http://202.137.120.41:50503/' // waiting for the file api xd
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/date-fns'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    'nuxt-material-design-icons',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }]
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://202.137.120.41:50503/api/admin/graphiql',
      }
    }
  },
    /*
  ** If you  want to use static hosting use 'target: static' in order for the generate command to work properly.
  */

  // target: 'static',

  target: 'server', /* server hosting, when using build command */
  
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      config.resolve.symlinks = false
    },
    postcss: null
  }
}
