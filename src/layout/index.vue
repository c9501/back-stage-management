<script setup lang="ts">
import ComAside from './components/ComAside/index.vue'
import ComHeader from './components/ComHeader/index.vue'
import { computed } from 'vue'
import { useMenuStore } from '@/stores/menu'
const store = useMenuStore()
// 使用计算属性获取pinia响应的宽度
const asideWidth = computed(() => {
  return store.asideWidth
})
</script>

<template>
  <el-container class="layout-container">
    <el-aside :width="asideWidth">
      <ComAside />
    </el-aside>
    <el-container>
      <el-header>
        <ComHeader />
      </el-header>
      <el-main>
        123
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100%;

  .el-aside {
    background: green;
    transition: width 0.4s linear;
  }

  .el-header {
    height: 60px;
    padding: 0 10px;
  }

  .el-main {
    padding: 10px;
    height: calc(100% - 60px);
    background: var(--el-bg-color-page);
  }
}
</style>
