<script setup lang="ts">
import { computed } from 'vue'
import { useTagsStore } from '@/stores/tags'
import { useRouter } from 'vue-router'
import type { TagsType } from '@/types/tags'
const router = useRouter()
const store = useTagsStore()

const tagsList = computed(() => {
  return store.tagsViewList
})
//点击跳转
const handleToView = (path: string) => {
  router.push(path)
}
//标签切换
const handleCloseTag = (item: TagsType, index: number) => {
  const lastIndex = store.tagsViewList.length - 1
  const isLast = index === lastIndex
  const path = store.tagsViewList[index].path
  //删除标签
  store.removeTagsView({
    index,
    type: isLast ? 'last' : 'notlast',
    path: item.path
  })
  //标签删除后跳转
  if (isLast) {
    //删除最后一个标签。跳转当前数组最后一个
    const lastPath = store.tagsViewList[lastIndex - 1].path
    handleToView(lastPath)
  } else if (item.path === path) {
    //删除当前页标签，跳转当前页下一个
    handleToView(store.tagsViewList[index].path)
  } else {
    //删除非当前页，跳转删除页的下一个
    handleToView(store.tagsViewList[index].path)
  }
}
</script>

<template>
  <div class="tag">
    <div
      class="tag-item"
      @click="handleToView(item.path)"
      v-for="(item, index) in tagsList"
      :key="index"
      :class="{ active: item.path === $route.path }"
    >
      <el-icon class="icon">
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
      <el-icon class="close" v-if="index !== 0" @click.stop="handleCloseTag(item, index)"
        ><Close
      /></el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  color: #ccc;
  padding-left: 25px;
  overflow-x: auto;
}
.tag-item {
  margin-right: 10px;
  padding: 5px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  color: #ccc;
  min-width: 100px;

  .icon {
    margin-right: 5px;
  }

  .close {
    margin-left: 5px;
  }

  &:hover {
    background-color: rgb(45, 45, 190);
  }
}
.tag-item.active {
  background-color: rgb(16, 27, 219);
}
</style>
