import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"
import storeReset from './reset-store'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';

const store = createPinia()
store.use(storeReset)



const app = createApp(App);
app.use(store)
app.use(Antd)
app.mount('#app')
