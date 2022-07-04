import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";
import plugins from  './plugins/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/theme/theme-light.scss'
import '@/styles/theme/theme-dark.scss'
createApp(App).use(createPinia()).use(router).use(ElementPlus).use(plugins).mount('#app')
