import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
const pinia = createPinia()

createApp(App).use(ElementPlus).use(pinia).use(router).mount('#app')
