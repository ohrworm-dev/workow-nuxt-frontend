module.exports = {
    mode: 'universal',
    /*
     ** Customize server port
     */
    server: {
        port: process.env.PORT || 3000,
        host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost'
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
    buildModules: ['@nuxtjs/tailwindcss'],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/apollo', '@nuxtjs/axios', '@nuxtjs/auth'],
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
        redirect: {
            login: '/user/login',
            callback: '/user/login'
        },
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/api/auth/logout', method: 'delete' },
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
