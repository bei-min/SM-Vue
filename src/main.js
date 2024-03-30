import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import * as Icons from '@ant-design/icons-vue'
import axios from './http/index.js'

const app = createApp(App);
app.config.globalProperties.$api = axios;

// 循环使用全部全部图标
for (const i in Icons) {
    // 全局注册一下组件
    app.component(i, Icons[i])
}
app.use(Antd)

app.use(router)

app.mount('#app')

app.use(axios)

