export default defineNuxtConfig({
  srcDir: "./",
  css: ["@/assets/css/main.css"],

  modules: ["@pinia/nuxt"],
  //buildModules: ["@pinia/nuxt"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {},
});
