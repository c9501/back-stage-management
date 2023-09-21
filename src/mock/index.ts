import Mock from 'mockjs'
// mock随机
const Random = Mock.Random
// 导入数据
import user from './userData'
Mock.mock('/api/login/username', (options: any) => {
  // 没有参数时
  if (!options || !options.body) {
    return {
      code: 101,
      message: '参数为空'
    }
  }
  // 任意参数为空时
  const params = JSON.parse(options.body)
  if (!params || !params.username || !params.password || !params.imgcode) {
    return {
      code: 101,
      message: 'c参数为空'
    }
  }
  // 账号密码正确时
  if (params.username === 'admin' && params.password === '123456') {
    return {
      code: 888,
      message: '',
      data: user.userInfo,
      token: Random.string(64)
    }
  }
  // 账号密码错误
  return {
    code: 102,
    message: '用户名或密码错误'
  }
})
