<script setup lang="ts">
//手机验证码登录组件
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import type { PhoneCodeFormType } from '../types/login-type'
import { phoneCodeFormRules } from '../rules'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const loginForm = reactive<PhoneCodeFormType>({
  phone: '',
  smscode: '',
  imgcode: '',
  savePhone: false
})
//导入hook存储的获取手机验证码，获取记住手机号方法
import { useGetPhoneCode, useHandleSaveUser } from '../composable/phone-code'
//导入获取图片验证码方法
import { useGetImgCode } from '../composable'
const { disabled, getSmsCode, smsCodeBtnText } = useGetPhoneCode(loginForm)
const { saveLocalUser, getLocalUser } = useHandleSaveUser(loginForm)
const { imgCodeSrc, getImgCode } = useGetImgCode()

// 提交表单方法
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 1. 点击登录按钮,判断是否保存用户名,如果保存用户名,则将用户名和保存的状态存储到本地
      //存手机号
      saveLocalUser()
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

onMounted(() => {
  //获取本地存储的手机号
  getLocalUser()
})
</script>

<template>
  <div class="phone-code-page">
    <el-form
      ref="ruleFormRef"
      :model="loginForm"
      :rules="phoneCodeFormRules"
      label-width="0"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item prop="phone">
        <el-input
          size="large"
          prefix-icon="UserFilled"
          v-model="loginForm.phone"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item prop="smscode">
        <div class="flex login-line">
          <div class="flex-item">
            <el-input
              size="large"
              prefix-icon="Picture"
              v-model="loginForm.smscode"
              placeholder="请输入短信验证码"
            />
          </div>
          <div class="code-btn">
            <el-button :disabled="disabled" type="primary" size="large" @click="getSmsCode">{{
              smsCodeBtnText
            }}</el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="flex login-line">
          <div class="flex-item">
            <el-input
              size="large"
              prefix-icon="PictureRounded"
              v-model="loginForm.imgcode"
              placeholder="请输入图片验证码"
            />
          </div>
          <div class="code-btn">
            <img @click="getImgCode" :src="imgCodeSrc" alt="" />
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="loginForm.savePhone">记住用户名</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" round type="danger" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-line {
  width: 100%;
  .code-btn {
    width: 100px;
    margin-left: 10px;

    :deep(.el-button),
    :deep(img) {
      width: 100px;
    }

    &:deep(.el-button) {
      font-size: 12px;
    }

    img {
      height: 40px;
      cursor: pointer;
    }
  }
}
.login-btn {
  width: 100%;
}
</style>
