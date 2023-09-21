import Mock from 'mockjs'
const Random = Mock.Random
const user = {
  userInfo: {
    id: 1,
    name: '管理员1',
    header: '',
    account: '3213213312',
    phone: '3213213312',
    email: Random.email(),
    address: Random.string(20),
    roles: [
      {
        name: '系统管理员'
      },
      {
        name: '操作员'
      }
    ],
    permission: [
      {
        entity: 'demo',
        permissions: ['edit', 'delete', 'download'] //当前用户对demo实体能进行的操作权限
      },
      {
        entity: 'permission',
        permissions: ['add', 'edit', 'delete'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'menu',
        permissions: ['add', 'edit', 'delete'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'role',
        permissions: ['add', 'edit', 'delete'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'user',
        permissions: ['add', 'edit', 'delete', 'start', 'stop'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'setting',
        permissions: ['add', 'edit', 'delete'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'dict',
        permissions: ['add', 'edit', 'delete'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'log',
        permissions: ['download'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'cache',
        permissions: ['delete'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'entityConfig',
        permissions: ['delete', 'edit'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'message',
        permissions: ['add', 'delete', 'edit'] //当前用户对permission实体能进行的操作权限
      },
      {
        entity: 'messageRead',
        permissions: [] //当前用户对permission实体能进行的操作权限
      }
    ],
    descrption: Random.string(200)
  }
}

export default user
