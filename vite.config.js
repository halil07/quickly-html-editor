import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/quickly-html-editor/',
    server:{
        port: 3000
    },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        coffee: resolve(__dirname, 'coffee-break.html'),
        simple: resolve(__dirname, 'simple-organik.html'),
        pizza: resolve(__dirname, 'pizza-place.html'),
      }
    }
  }
})