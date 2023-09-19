import utils from '@/utils/utils'
import type { AccountFormType } from '../types/login-type'
//记住用户名密码功能
export function useHandleSaveUserOrPass(accountForm: AccountFormType) {
  //  用户名存储
  const useSaveLocalUserOrPass = () => {
    if (accountForm.saveUserName) {
      // 1. 将用户名存储到本地
      utils.saveData('username', accountForm.username)
      // 2. 将保存的状态存储到本地
      utils.saveData('saveUserName', accountForm.saveUserName)
    } else {
      //清除本地存储
      utils.removeData('username')
      utils.removeData('saveUserName')
    }
    //密码存储
    if (accountForm.saveUserPass) {
      utils.saveData('password', accountForm.password)
      utils.saveData('saveUserPass', accountForm.saveUserPass)
    } else {
      // 清楚存储
      utils.removeData('password')
      utils.removeData('saveUserPass')
    }
  }
  //本地获取账号密码信息
  const useGetLocalUserOrPass = () => {
    //获取记住账号信息
    const saveUserName = utils.getData('saveUserName')
    if (saveUserName) {
      //账号进行赋值
      accountForm.username = utils.getData('username')
    }
    //获取记住密码信息
    const saveUserPass = utils.getData('saveUserPass')
    if (saveUserPass) {
      //密码进行赋值
      accountForm.password = utils.getData('password')
    }
  }
  return { useSaveLocalUserOrPass, useGetLocalUserOrPass }
}
