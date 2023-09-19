import { ref } from 'vue'
import type { PhoneCodeFormType } from '../types/login-type'
import utils from '@/utils/utils'

/**
 * 获取短信验证码以及倒计时
 * @param loginForm
 */
export function useGetPhoneCode(loginForm: PhoneCodeFormType) {
  // 获取短信验证码
  let timer: number
  const currentTime = ref(0)
  //定时器文本
  const smsCodeBtnText = ref('获取验证码')
  const disabled = ref(false)
  //获取验证码
  const getSmsCode = () => {
    // TODO 调用获取短信验证码接口
    //手机号判空
    if (!loginForm.phone) {
      utils.showError('请输入手机号')
      return
    }
    //禁用
    disabled.value = true
    //清除定时器
    clearInterval(timer)
    //倒计时
    currentTime.value = 60
    smsCodeBtnText.value = currentTime.value + '秒后重新获取'
    //定时器
    timer = setInterval(() => {
      currentTime.value--
      smsCodeBtnText.value = currentTime.value + '秒后重新获取'
      if (currentTime.value <= 0) {
        disabled.value = false
        smsCodeBtnText.value = '获取验证码'
        clearInterval(timer)
        timer = 0
      }
    }, 1000)
  }
  return {
    smsCodeBtnText,
    disabled,
    getSmsCode
  }
}

/**
 * 记住手机号功能
 * @param loginForm
 */
export function useHandleSaveUser(loginForm: PhoneCodeFormType) {
  //用户手机号存储
  const saveLocalUser = () => {
    if (loginForm.savePhone) {
      console.log('123')
      // 1. 将用户名存储到本地
      utils.saveData('phone', loginForm.phone)
      // 2. 将保存的状态存储到本地
      utils.saveData('savePhone', loginForm.savePhone)
    } else {
      // 清除本地存储
      utils.removeData('phone')
      utils.removeData('savePhone')
    }
  }
  //本地获取用户手机号信息
  const getLocalUser = () => {
    loginForm.savePhone = utils.getData('savePhone')
    if (loginForm.savePhone) {
      //手机号赋值
      loginForm.phone = utils.getData('phone')
    }
  }
  return {
    saveLocalUser,
    getLocalUser
  }
}
