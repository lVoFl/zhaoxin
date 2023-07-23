import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from './router'
import store from './store'


const app = createApp(App);
app.use(VueRouter);

app.use(store);
// @vue/runtime-core
app.config.globalProperties.$globalNum2 = 42;
app.mount('#app');