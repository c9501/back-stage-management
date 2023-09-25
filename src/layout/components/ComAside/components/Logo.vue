<template>
  <div class="logo-page">
    <span v-if="!isMenuStatus">通用后台管理系统</span>
    <img :src="logo" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMenuStore } from '@/stores/menu'
const logo = new URL('@/assets/hk.png', import.meta.url).href
const store = useMenuStore()
const isMenuStatus = computed(() => {
  return store.getMenuStatus()
})
</script>
<style lang="scss" scoped>
.logo-page {
  height: 50px;
  background: var(--junjun-topbar-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  img {
    height: 30px;
    width: 30px;
    margin: 0 10px;
  }
}
</style>
