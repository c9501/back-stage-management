import { createApp } from 'vue'

//全局样式
import './styles/default.scss'

import App from './App.vue'
import router from './router'

//引入全局注册
import { globalRegister } from './global'

//引入mock
import './mock'

// 引入权限文件
import './permission'

const app = createApp(App)

app.use(router)
//使用全局注册内容
app.use(globalRegister)

app.mount('#app')
