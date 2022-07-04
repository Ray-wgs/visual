import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VueSetupExtend()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/theme/index.scss" as *;`,
      },
    },
  },
})
