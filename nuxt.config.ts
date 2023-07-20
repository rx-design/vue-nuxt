export default defineNuxtConfig({
  app: {
    rootId: 'app'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: [
    '@/assets/main.css'
  ],
  modules: [
    '@pinia/nuxt'
  ]
})
