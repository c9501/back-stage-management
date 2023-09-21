<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { computed } from 'vue'
const store = useMenuStore()
// 开关图标的切换
const isMenuStatus = computed(() => {
  return store.getMenuStatus()
})
// 宽度切换
const handleChangeMenu = () => {
  store.toggleAsideWidth()
}
</script>

<template>
  <div class="header-page">
    <div class="toggle-menu-icon" @click="handleChangeMenu">
      <el-icon v-if="!isMenuStatus"><Fold /></el-icon>
      <el-icon v-else><Expand /></el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-page {
  display: flex;
  height: 100%;
}
.toggle-menu-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
