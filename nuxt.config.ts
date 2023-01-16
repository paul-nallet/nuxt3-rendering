export default defineNuxtConfig({
  ssr:false,
  nitro: {
    prerender:{
      routes: ['/blog/test']
    }
  },
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/content',
  ],
})  
