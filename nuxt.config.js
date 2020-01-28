import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

import robotsOptions from './config/robots';

/*
 ** NOTE:
 ** The NODE_ENV will always be equal to 'production' when we generate
 ** the website. Thus, we don't have a dev/production env variable
 ** for the preproduction environnement.
 ** The NETLIFY_ENV variable allow us to set a dev/production variable
 ** totaly decorrelated from the NODE_ENV variable.
 ** SEE: https://www.netlify.com/docs/continuous-deployment/#environment-variables
 */
const netlifyEnv = process.env.NODE_ENV;
const isDevEnv = netlifyEnv === 'development';
const websiteUrl = process.env.URL || `http://${process.env.HOST}:${process.env.PORT}`;

const routerBase =
    process.env.NODE_ENV === 'production' && !process.env.NETLIFY ?
    {
        router: {
            base: '/winautopilote/'
        }
    } :
    {};

// ie polyfill features
const features = ['Array.from', 'NodeList.prototype.forEach'].join('%2C');

export default {
    mode: 'universal',
    ...routerBase,
    /*
     ** Environnement variables shared for the client and server-side
     */
    env: {
        cmsToken: process.env.CMS_TOKEN,
        staticPath: process.env.NODE_ENV === 'production' && !process.env.NETLIFY ? '/winautopilote/' : '/',
        isDevEnv,
        websiteUrl
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'winAutopilote - Winpharma',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge'
            },
            {
                hid: 'author',
                name: 'author',
                content: 'Stéréosuper'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'winAutopilote - Winpharma'
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: 'Winpharma'
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'http://www.winpharma.com/winautopilote/'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: '/img/og.jpg'
            },
            {
                hid: 'og:image:width',
                property: 'og:image:width',
                content: '1200'
            },
            {
                hid: 'og:image:height',
                property: 'og:image:height',
                content: '628'
            },
            {
                hid: 'og:image:type',
                property: 'og:image:type',
                content: 'image/png'
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: 'winAutopilote, c’est simple de gagner beaucoup de temps ! La méthode winAutopilote®, unique sur le marché, atteint des gains de temps, des gains financiers et un confort encore jamais vus en matière de gestion de stock en pharmacie !'
            },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                hid: 'twitter:site',
                name: 'twitter:site',
                content: '@Winpharma'
            },
            {
                hid: 'twitter:creator',
                name: 'twitter:creator',
                content: '@Winpharma'
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: '/img/twitter.jpg'
            },
            {
                name: 'msapplication-TileColor',
                content: '#fff'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png'
            },
            {
                rel: 'mask-icon',
                href: '/safari-pinned-tab.svg',
                color: '#fff'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap'
            }
        ],
        script: [{
            nomodule: 'true',
            src: `https://polyfill.io/v3/polyfill.min.js?features=${features}`
        }]
    },
    /*
     ** Customize the progress-bar
     */
    loading: '~/components/Layout/Loader.vue',
    /*
     ** Global CSS
     */
    css: ['~/assets/scss/main.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/globals.js',
        '~/plugins/breakpoints.js',
        '~/plugins/fastdom.js',
        {
            src: '~/plugins/scripts/ga.js',
            mode: 'client'
        }
    ],
    /*
     ** Nuxt.js dev-modules
     ** SEE: https://github.com/Atinux/nuxt-prismic-showcase/tree/master/modules
     */
    buildModules: ['~/modules/crawler', '~/modules/static', '~/modules/static-medias'],
    /*
     ** Crawler config
     */
    crawler: {
        // Blacklisting all the urls containing the strings below
        // SEE: Example below
        // blacklist: ['/wp-json/', '/api.w.org/'],
    },
    generate: {
        fallback: '404.html'
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/style-resources',
        '@nuxtjs/sitemap',
        [
            '@nuxtjs/robots',
            robotsOptions({
                env: netlifyEnv,
                url: websiteUrl
            })
        ]
    ],
    /*
     ** Nuxt Style Resources module configuration
     */
    styleResources: {
        scss: [
            '~/assets/scss/abstracts/_variables.scss',
            '~/assets/scss/abstracts/_animations.scss',
            '~/assets/scss/abstracts/_functions.scss',
            '~/assets/scss/abstracts/_mixins.scss',
            '~/assets/scss/abstracts/_placeholders.scss'
        ]
    },
    /*
     ** Sitemap config
     */
    sitemap: {
        hostname: websiteUrl,
        gzip: true,
        routes: () => {
            let routes = [];
            const routesPath = path.resolve(__dirname, 'dist/routes.json');
            const exists = fs.existsSync(routesPath);
            if (!exists) return routes;
            routes = require(routesPath);
            return routes;
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Used to analyse chunks
         */
        analyze: isDevEnv ?
            {
                analyzerMode: 'static'
            } :
            false,
        /*
         ** You can extend webpack config here
         */
        transpile: [/@stereorepo/, /gsap/],
        extend(config, ctx) {
            config.resolve.alias['vue'] = 'vue/dist/vue.common';
            delete config.resolve.alias['@@'];
            delete config.resolve.alias['@'];

            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.devtool = '#source-map';
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    include: [path.resolve(__dirname, 'assets', 'js')],
                    exclude: /(node_modules)/,
                    options: {
                        sourceMap: true
                    }
                });
            }
        }
    }
};
