//引入icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入app类型
import type { App } from 'vue'
//导出
export default function (app: App) {
  //全局注册icon图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
