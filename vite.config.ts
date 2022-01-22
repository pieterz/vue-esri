import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('calcite-')
        }
      }
    }),
    copy({
      targets: [
        {
          src: 'node_modules/@arcgis/core/assets/',
          dest: 'public/'
        }
      ]
    })
  ]
})
