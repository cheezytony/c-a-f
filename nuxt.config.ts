// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  css: [
    '~/assets/css/tailwind.css',
    '@/node_modules/toastr/build/toastr.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap',
          rel: 'stylesheet',
        },
      ],
      titleTemplate: (title) => {
        return title ? `${title} - Circle Admin` : 'Circle Admin';
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:4002/api',
      assetsBaseURL: 'http://localhost:4002',
      apiTokenStorageKey: 'circle-admin:token',
    },
  },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/content',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'cookies',
  },
});
