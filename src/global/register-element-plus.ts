//引入element-plus样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入element-plus主题
import 'element-plus/theme-chalk/dark/css-vars.css'
//引入element-plus中文包
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
//引入app类型
import type { App } from 'vue'
//导出
export default function (app: App) {
  app.use(ElementPlus, {
    locale: zhCn
  })
}
