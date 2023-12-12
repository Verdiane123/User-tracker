const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
          additionalData: `@import "@/assets/styles/scss/style.scss";`, // Chemin vers le fichier de style principal Sass
      },
  },
  }
})
