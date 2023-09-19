import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import ResetPwd from '../views/ResetPwd/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/ResetPwd',
      name: 'ResetPwd',
      component: ResetPwd
    }
  ]
})

export default router
