<script setup lang="ts">
import TagsView from './components/TagsView.vue'
import ToolBar from './components/ToolBar.vue'
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
    <!-- 菜单切换按钮 -->
    <div class="toggle-menu-icon" @click="handleChangeMenu">
      <el-icon v-if="!isMenuStatus"><Fold /></el-icon>
      <el-icon v-else><Expand /></el-icon>
    </div>
    <!-- 标签栏 -->
    <TagsView />
    <!-- 工具栏 -->
    <ToolBar />
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
