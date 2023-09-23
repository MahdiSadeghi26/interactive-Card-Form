import "@/style.css"
import "@/assets/fonts.scss"

import { createPinia } from "pinia"

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
