import type { App } from 'vue'
import { createPinia } from 'pinia'
//引入pinia持久化插件
import persist from 'pinia-plugin-persistedstate'

export default function (app: App) {
  app.use(createPinia().use(persist))
}
