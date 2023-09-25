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
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/layout/index.vue'),
      redirect: '/Index/Home',
      children: [
        {
          path: '/Index/Home',
          name: 'index',
          component: () => import('@/views/Dashbord/index.vue'),
          meta: {
            requireAuth: true,
            title: '工作台',
            icon: 'Monitor'
          }
        },
        {
          path: '/Index/Cutomer/Table',
          name: 'Table',
          component: () => import('@/views/Demo/TableDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '列表示例',
            icon: 'Monitor'
          }
        },
        {
          path: '/Index/Cutomer/TreeTable',
          name: 'TreeTable',
          component: () => import('@/views/Demo/TreeTableDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '树形表格',
            icon: 'Monitor'
          }
        },
        {
          path: '/Index/Cutomer/Form',
          name: 'Form',
          component: () => import('@/views/Demo/FormDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '表单示例',
            icon: 'Monitor'
          }
        },
        {
          path: '/Index/Cutomer/Info',
          name: 'Info',
          component: () => import('@/views/Demo/InfoDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '详情示例',
            icon: 'Monitor'
          }
        },
        {
          path: '/Index/Cutomer/File',
          name: 'File',
          component: () => import('@/views/Demo/FileDemo/index.vue'),
          meta: {
            requireAuth: true,
            title: '文件上传',
            icon: 'Monitor'
          }
        },
        {
          path: '/Index/Cutomer/Chart',
          name: 'Chart',
          component: () => import('@/views/Demo/ChartDemo/index.vue'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/Index/Cutomer/MapChart',
          name: 'MapChart',
          component: () => import('@/views/Demo/MapChartDemo/index.vue'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/Index/Cutomer/RichForm',
          name: 'RichForm',
          component: () => import('@/views/Demo/RichFormDemo/index.vue'),
          meta: {
            requireAuth: true
          }
        }
        // ,
        // {
        //   path: '/Index/Data/Entity',
        //   name: 'Entity',
        //   component: () => import('@/views/Demo/EntityDemo/index.vue'),
        //   meta: {
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/Index/Data/Message',
        //   name: 'Message',
        //   component: () => import('@/views/Demo/MessageDemo/index.vue'),
        //   meta: {
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/Index/Data/MessageRead',
        //   name: 'MessageRead',
        //   component: () => import('@/views/Demo/MessageReadDemo/index.vue'),
        //   meta: {
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/Index/Data/Code',
        //   name: 'code',
        //   component: () => import('@/views/Demo/CodeDemo/index.vue')
        // }
      ]
    }
  ]
})

export default router
