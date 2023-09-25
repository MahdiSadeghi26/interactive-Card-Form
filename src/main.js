import "@/style.css";
import "@/assets/fonts.scss";
import 'animate.css';

import { createPinia } from "pinia";
import VeeValidatePlugin from "./includes/validation";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(VeeValidatePlugin).use(createPinia()).mount("#app");
