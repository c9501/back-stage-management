<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentMap } from './types/login-type'
//引入所有的组件
import { PhoneCodeForm, AccountForm, QcodeForm } from './components'

const bgColor = 'linear-gradient(0deg, #2196f3, #00bcd4, #00bcd4, #03a9f4)'
const loginPanelWidth = '800px'
const loginPanelHeight = '400px'

const tabList = ref<ComponentMap[]>([
  { name: '免密登录', componentName: PhoneCodeForm },
  { name: '账号登录', componentName: AccountForm },
  { name: '扫码登录', componentName: QcodeForm }
])

const currentTab = ref(0)
//tab切换
const changeTab = (index: number) => {
  currentTab.value = index
}
</script>

<template>
  <div class="login-page">
    <div class="login-panel">
      <div class="login-logo-panel">
        <img src="../../assets/hk.png" alt="" />
      </div>
      <div class="login-split-line"></div>
      <div class="logion-form-panel">
        <div class="tabs">
          <div
            v-for="(item, index) in tabList"
            :key="index"
            @click="changeTab(index)"
            :class="{ selected: currentTab === index }"
            class="tab-item"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="tabs-content">
          <component :is="tabList[currentTab].componentName"></component>
        </div>
      </div>
    </div>
    <div class="login-footer">版权所有: 通用管理系统</div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  &-page {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: v-bind(bgColor);
  }

  &-panel {
    width: v-bind(loginPanelWidth);
    height: v-bind(loginPanelHeight);
    background-color: #fff;
    margin: 0 auto;
    margin-top: calc((100vh - v-bind(loginPanelHeight)) / 2);
    box-shadow: 0 0 20px 2px #000055;
    display: flex;

    .login-logo-panel {
      width: 40%;
      text-align: center;

      img {
        width: 60%;
        margin-top: calc((v-bind(loginPanelHeight) - 166px) / 2);
      }
    }

    .login-split-line {
      width: 1px;
      background-color: #f8f8f8;
      margin: 0 10px;
      height: v-bind(loginPanelHeight);
    }

    .logion-form-panel {
      flex: 1;

      .tabs {
        height: 45px;
        line-height: 45px;
        text-align: center;
        display: flex;
        margin-top: 25px;

        .tab-item {
          flex: 1;
          cursor: pointer;

          &.selected,
          &:hover {
            color: red;
          }
        }
      }

      .tabs-content {
        padding: 20px 45px 0;
      }
    }
  }

  &-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
    color: #fff;
  }
}
</style>
