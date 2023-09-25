<script setup lang="ts">
defineProps<{
  menu: any
}>()
</script>

<template>
  <template v-for="(item, index) in menu" :key="index">
    <!-- 渲染的是有子菜单的数据 -->
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>

      <MenuItem :menu="item.children" v-if="item.children && item.children.length > 0" />
    </el-sub-menu>
    <!-- 渲染的是没有子菜单的数据 -->
    <el-menu-item v-else :index="item.path">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>
  </template>
</template>

<style lang="scss" scoped></style>
