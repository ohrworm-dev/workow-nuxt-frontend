const colors = require('vuetify/es5/util/colors').default

module.exports = {
    mode: 'universal',
    /*
     ** Customize server port
     */
    server: {
        port: process.env.PORT || 3000,
        host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost'
    },
    router: {
        routes: [
            {
                name: 'home',
                path: '/',
                component: 'pages/home/index.vue'
            }
        ]
    },
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
    css: ['~/assets/css/main.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/vuetify'],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/apollo', '@nuxtjs/axios', '@nuxtjs/auth'],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    // Give apollo module options
    apollo: {
        // optional
        watchLoading: '~/plugins/apollo-watch-loading-handler.js',
        // optional
        errorHandler: '~/plugins/apollo-error-handler.js',
        // alternative: user path to config which returns exact same config options
        test2: '~/plugins/my-alternative-apollo-config.js',
        clientConfigs: {
            default: {
                httpEndpoint: 'https://vue-graphql-hasura-endpoint.herokuapp.com/v1/graphql'
            }
        }
    },
    //
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
                }
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
    }
}
