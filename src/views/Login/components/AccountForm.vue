<script setup lang="ts">
// 账号密码登陆组件
import { onMounted, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
//表单数据类型
import type { AccountFormType } from '../types/login-type'
//表单验证规则
import { accountFormRules } from '../rules'
// 登录api接口
import { accountLogin } from '@/api/user'
// 工具包
import utils from '@/utils/utils'
// pinia方法
import { useUserStore } from '@/stores/user'
const store = useUserStore()
import { useRouter } from 'vue-router'
const router = useRouter()
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const accountForm = reactive<AccountFormType>({
  username: '',
  password: '',
  imgcode: '',
  saveUserName: false,
  saveUserPass: false
})
//获取图片验证码
import { useGetImgCode } from '../composable'
const { imgCodeSrc, getImgCode } = useGetImgCode()
//导入账号密码操作方法
import { useHandleSaveUserOrPass } from '../composable/account'
const { useSaveLocalUserOrPass, useGetLocalUserOrPass } = useHandleSaveUserOrPass(accountForm)

// 提交表单方法
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (!valid) {
      for (const key in fields) {
        utils.showError(fields[key][0].message!)
      }
      return
    }
    // 1. 点击登录按钮,判断是否保存用户名,如果保存用户名,则将用户名和保存的状态存储到本地
    useSaveLocalUserOrPass()
    // 2. 调用登录接口
    const res = await accountLogin({
      username: accountForm.username,
      password: accountForm.password,
      imgcode: accountForm.imgcode
    })
    if (res.code === 888) {
      // 存储到pinia
      store.setToken(res.token!)
      store.setUser(res.data!)

      // 跳转到主页
      router.push('/')
    } else {
      utils.showError(res.message)
    }
  })
}

onMounted(() => {
  //获取本地存储的账号密码
  useGetLocalUserOrPass()
})
</script>

<template>
  <div class="account-page">
    <el-form
      ref="ruleFormRef"
      :model="accountForm"
      :rules="accountFormRules"
      label-width="0"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item prop="username">
        <el-input
          size="large"
          prefix-icon="UserFilled"
          v-model="accountForm.username"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          size="large"
          prefix-icon="Lock"
          type="password"
          v-model="accountForm.password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="flex login-line">
          <div class="flex-item">
            <el-input
              size="large"
              prefix-icon="PictureRounded"
              v-model="accountForm.imgcode"
              placeholder="请输入图片验证码"
            />
          </div>
          <div class="code-btn">
            <img @click="getImgCode" :src="imgCodeSrc" alt="" />
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <div class="flex-item">
          <el-checkbox v-model="accountForm.saveUserName">记住用户名</el-checkbox>
        </div>
        <div class="flex-item">
          <el-checkbox v-model="accountForm.saveUserPass">记住密码</el-checkbox>
        </div>
        <div class="flex-item">
          <!-- 跳转忘记密码页面 -->
          <router-link to="/ResetPwd">忘记密码?</router-link>
        </div>
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
