import Mock from 'mockjs'
const menuData = [
  {
    name: '工作台',
    path: '/Index/Home',
    icon: 'Monitor',
    createDate: new Date().getTime(),
    description: '',
    id: 1,
    components: 'HomePage',
    requiresAuth: true,
    children: [],
    permissions: ['edit', 'delete']
  },
  {
    name: '业务菜单',
    path: '/Index/Cutomer',
    icon: 'Position',
    requiresAuth: true,
    createDate: new Date().getTime(),
    description: '',
    id: 2,
    permissions: ['edit', 'delete'],
    children: [
      {
        name: '列表示例',
        path: '/Index/Cutomer/Table',
        icon: 'Grid',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 21,
        permissions: ['edit', 'delete'],
        components: 'TableDemo'
      },
      {
        name: '树形表格',
        path: '/Index/Cutomer/TreeTable',
        icon: 'DataLine',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 22,
        permissions: ['edit', 'delete'],
        components: 'TreeTableDemo'
      },
      {
        name: '表单示例',
        path: '/Index/Cutomer/Form',
        icon: 'Crop',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 23,
        permissions: ['edit', 'delete'],
        components: 'FormDemo'
      },
      {
        name: '详情示例',
        path: '/Index/Cutomer/Info',
        icon: 'InfoFilled',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 23,
        permissions: ['edit', 'delete'],
        components: 'ViewDemo'
      },
      {
        name: '文件上传',
        path: '/Index/Cutomer/File',
        icon: 'FolderOpened',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 24,
        permissions: ['edit', 'delete'],
        components: 'UploadDemo'
      },
      {
        name: '统计图表',
        path: '/Index/Cutomer/Chart',
        icon: 'DataLine',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 24,
        permissions: ['edit', 'delete'],
        components: 'ChartDemo'
      },
      {
        name: '地图图表',
        path: '/Index/Cutomer/MapChart',
        icon: 'Location',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 24,
        permissions: ['edit', 'delete'],
        components: 'MapChartDemo'
      },
      {
        name: '富文本示例',
        path: '/Index/Cutomer/RichForm',
        icon: 'Discount',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 25,
        permissions: ['edit', 'delete'],
        components: 'RichDemo'
      }
    ]
  },
  {
    name: '基础数据',
    path: '/Index/Data',
    icon: 'Connection',
    requiresAuth: true,
    createDate: new Date().getTime(),
    description: '',
    id: 3,
    permissions: ['edit', 'delete'],
    children: [
      {
        name: '实体配置',
        path: '/Index/Data/Entity',
        icon: 'Reading',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 32,
        permissions: ['edit', 'delete'],
        components: 'EntityConfig'
      },
      {
        name: '消息数据',
        path: '/Index/Data/Message',
        icon: 'ChatLineSquare',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 31,
        permissions: ['edit', 'delete'],
        components: 'Message'
      },
      {
        name: '已读记录',
        path: '/Index/Data/MessageRead',
        icon: 'View',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 31,
        permissions: ['edit', 'delete'],
        components: 'MessageRead'
      },
      {
        name: '验证码数据',
        path: '/Index/Data/Code',
        icon: 'Picture',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 33,
        permissions: ['edit', 'delete'],
        components: 'Code'
      }
    ]
  },
  {
    name: '系统管理',
    path: '/Index/System',
    icon: 'Setting',
    requiresAuth: true,
    createDate: new Date().getTime(),
    description: '',
    id: 4,
    permissions: ['edit', 'delete'],
    children: [
      {
        name: '用户管理',
        path: '/Index/System/user',
        icon: 'UserFilled',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 41,
        permissions: ['edit', 'delete'],
        components: 'User'
      },
      {
        name: '角色管理',
        path: '/Index/System/Role',
        icon: 'Avatar',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 42,
        permissions: ['edit', 'delete'],
        components: 'Role'
      },
      {
        name: '权限管理',
        path: '/Index/System/Permission',
        icon: 'Lock',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 43,
        permissions: ['edit', 'delete'],
        components: 'Permission'
      },
      {
        name: '菜单管理',
        path: '/Index/System/Menu',
        icon: 'Menu',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 44,
        permissions: ['edit', 'delete'],
        components: 'Menu'
      },
      {
        name: '数据字典',
        path: '/Index/System/Dict',
        icon: 'Notebook',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 45,
        permissions: ['edit', 'delete'],
        components: 'Dict'
      },
      {
        name: '缓存管理',
        path: '/Index/Data/Cache',
        icon: 'Files',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 32,
        permissions: ['delete'],
        components: 'Cache'
      },
      {
        name: '日志管理',
        path: '/Index/System/Log',
        icon: 'Grid',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 45,
        permissions: ['edit', 'delete'],
        components: 'Log'
      },
      {
        name: '系统配置',
        path: '/Index/System/Setting',
        icon: 'Setting',
        requiresAuth: true,
        createDate: new Date().getTime(),
        description: '',
        id: 46,
        permissions: ['edit', 'delete'],
        components: 'Setting'
      }
    ]
  }
]

// 获取菜单列表接口
Mock.mock('/api/menu', () => {
  return {
    code: 888,
    message: '',
    data: menuData
  }
})
