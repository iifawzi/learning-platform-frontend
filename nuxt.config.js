import locales from "./locales/locales"
export default {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss',
    '~/assets/css/all.css',
  ],
  /*
 Global Sass files: 
  */
 styleResources: {
  scss: ['./assets/scss/variables.scss']
},
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/vuelidate.js",
    "~/plugins/axios.js",
    "~/plugins/initMixins.js"
  ],
  /*
  ** Routers configs
  */
 router: {
   middleware:["language"],
},
/*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/style-resources',
  "@nuxtjs/axios",
  'nuxt-i18n'
],
/*
** I18N Settings: 
*/
i18n: {
  seo: false,
  strategy: "prefix_and_default",
  rootRedirect: "en",
  defaultLocale: 'en',
  locales: [
    {
      code: 'en',
      iso: 'en-US'
    },
    {
      code: 'ar',
      iso: 'ar-EG'
    },
  ],
  vueI18n: {
    fallbackLocale: 'en',
    messages: locales,
  }
},
  /*
** Axios Settings: 
*/
axios: {
baseURL: 'http://localhost:3000/api/',
},
      /*
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
