// 引入element-plus全局注册
import registerElementPlus from './register-element-plus'
// 引入图标全局注册
import registerIcon from './register-icon'
//引入pinia
import registerPinia from './register-pinia'
//引入 app 类型
import type { App } from 'vue'

//导出
export const globalRegister = {
  install(app: App) {
    app.use(registerElementPlus)
    app.use(registerIcon)
    app.use(registerPinia)
  }
}
