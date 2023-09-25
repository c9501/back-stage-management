<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu"
    text-color="#ccc"
    router
    background-color="#23262E"
    :collapse="isCollapse"
  >
    <MenuItem :menu="menuData" />
  </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { useMenuStore } from '@/stores/menu'
import type { MenuResponseType } from '@/types/menu'
import { watch } from 'vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getMenuData } from '@/api/user'
import { useTagsStore } from '@/stores/tags'
const store = useMenuStore()
const tagsStore = useTagsStore()
const route = useRoute()
// 宽度切换让内容相对应的切换
const isCollapse = computed(() => {
  return store.getMenuStatus()
})
//
const menuData = ref<MenuResponseType[]>([])
const getMenuList = async () => {
  const menuRes = await getMenuData()
  menuData.value = menuRes.data!
}
getMenuList()

const isTags = (path: string) => {
  const whiteList = ['/login', '/404', '/401']
  return whiteList.includes(path)
}
watch(
  route,
  (to) => {
    //判断 ：如果访问的是登录，404，401不让显示
    if (isTags(to.path)) return
    const { fullPath, meta } = to
    if (!fullPath || !meta.icon || !meta.title) return

    tagsStore.addTagsViewList({
      name: meta.title as string,
      path: fullPath,
      icon: meta.icon as string
    })
  },
  { immediate: true, deep: true }
)
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
  .el-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
}
</style>
