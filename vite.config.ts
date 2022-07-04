import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// element-plus 自动导入
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VueSetupExtend()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
      '@c': resolve(__dirname, './src/components'),
      '@d': resolve(__dirname, './src/directives'),
      '@p': resolve(__dirname, './src/plugins'),
      '@a': resolve(__dirname, './src/assets'),
      '@v': resolve(__dirname, './src/views'),
    },
  },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@use "@/styles/theme/theme-light.scss" as *;`,
//       },
//     },
//   },
})
