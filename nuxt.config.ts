export default defineNuxtConfig({
  ssr:false,
  nitro: {
    preset: 'service-worker'
  },
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/content',
  ],
})  
