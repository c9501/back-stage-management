import request from '@/utils/request'
import type { LoginResponseType, accountLoginType } from '@/types/user'
// 账号密码登录
export const accountLogin = (data: accountLoginType) => {
  return request<LoginResponseType>({ url: '/api/login/username', method: 'POST', data })
}
