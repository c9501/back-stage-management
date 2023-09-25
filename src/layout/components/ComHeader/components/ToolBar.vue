<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const store = useUserStore()
const handleCommand = (command: string) => {
  console.log('command', command)
}
</script>

<template>
  <div class="tool-bar-page">
    <div class="toolbar-item">
      <el-icon><Search /></el-icon>
    </div>

    <div class="toolbar-item">
      <el-icon><Bell /></el-icon>
    </div>

    <div class="toolbar-item">
      <el-icon><FullScreen /></el-icon>
      <!-- <el-icon><ScaleToOriginal /></el-icon> -->
    </div>

    <div class="toolbar-item">
      <el-icon><Sunny /></el-icon>
      <!-- <el-icon><Moon /></el-icon> -->
    </div>

    <div class="toolbar-item">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            :size="30"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
          {{ store.userInfo?.name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="password">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tool-bar-page {
  height: 100%;
  display: flex;
  align-items: center;

  .el-icon {
    padding: 0 10px;
    cursor: pointer;
    color: #ccc;
  }
}
.el-icon:hover {
  color: var(--el-color-primary);
}

.el-dropdown {
  outline: none;
  cursor: pointer;
}
.el-dropdown-link {
  color: #ccc;
  display: flex;
  align-items: center;

  .el-avatar {
    margin-right: 10px;
  }
}

.el-dropdown-link:hover {
  color: var(--el-color-primary);
}
</style>
