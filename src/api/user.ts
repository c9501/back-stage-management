import request from '@/utils/request'
import type { LoginResponseType, accountLoginType } from '@/types/user'
import type { MenuResponseType } from '@/types/menu'
// 账号密码登录
export const accountLogin = (data: accountLoginType) => {
  return request<LoginResponseType>({ url: '/api/login/username', method: 'POST', data })
}
// 获取菜单列表
export const getMenuData = () => {
  return request<MenuResponseType[]>({ url: '/api/menu', method: 'POST' })
}
