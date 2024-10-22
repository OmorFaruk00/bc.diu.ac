import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'Business Club - Dhaka International University',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/logo/logo.png'},
      {rel: 'stylesheet', href: '/header/fonts/icomoon/style.css'}, // icon
      {rel: 'stylesheet', href: '/style.css'},
      {rel: 'dns-prefetch', href: 'https://fonts.gstatic.com/'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/owl.js', ssr: false},
    {src: '@/plugins/scrollTo.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    ['nuxt-lazy-load', {
      defaultImage: '/images/loading.gif',
      directiveOnly: true
    }],
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    'nuxt-seo-meta',
  ],


  //axios
  axios: {
    init(axios, context) {
      axios.defaults.httpsAgent = new https.Agent({rejectUnauthorized: false});
      axios.defaults.withCredentials = true;
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    // baseURL: process.env.API_HOST,
    baseURL: 'https://bcadmin.diu.ac/api/v1',

  },

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },

  server: {
    port: 3002, // default: 3000
    timing: false
  },
  // pwa
  pwa: {
    manifest: {
      name: 'DIU-CPC',
      short_name: 'DIU-CPC',
      lang: 'en',
      description: 'DIU-CPC',
      display: 'standalone',
      useWebmanifestExtension: false
    },
    meta: {
      mobileAppIOS: true,
    }
  },

  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  loading: {
    color: '#4F75B5',
    height: '2px',
    continuous: true,
    throttle: 0
  },

  //axios
  axios: {
    init(axios, context) {
      axios.defaults.httpsAgent = new https.Agent({rejectUnauthorized: false});
      axios.defaults.withCredentials = true;
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    // baseURL: process.env.API_HOST
    // baseURL: 'http://127.0.0.1:8000/api/v1/',
    baseURL: 'https://bcadmin.diu.ac/api/v1',
  }
}
