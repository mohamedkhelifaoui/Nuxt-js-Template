// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@nuxt/fonts'],
    app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Varta:wght@400;600;700&family=Garamond:wght@400;700&family=Merriweather:wght@400;700&display=swap' }
      ]
    }
  },

  css: ['@/assets/css/main.css', 'swiper/css' ,'@fortawesome/fontawesome-free/css/all.css'],

})