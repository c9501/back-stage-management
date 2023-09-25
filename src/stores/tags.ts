import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PayloadType, TagsType } from '@/types/tags'

export const useTagsStore = defineStore('tags', () => {
  // tagslist数据源
  const tagsViewList = ref<TagsType[]>([
    {
      name: '工作台',
      icon: 'Monitor',
      path: '/Index/Home'
    }
  ])

  // 添加数据源
  const addTagsViewList = (tag: TagsType) => {
    // 如果当前添加的数据不在tagsViewList中则进行添加
    const isFind = tagsViewList.value.find((item) => item.path === tag.path)
    if (!isFind) {
      tagsViewList.value.push(tag)
    }
  }

  // 删除数据源
  const removeTagsView = (payload: PayloadType) => {
    // 删除最后一项
    if (payload.type === 'last') {
      // 获取非当前点击的所有数据
      const filterList = tagsViewList.value.filter((item) => item.path !== payload.path)
      tagsViewList.value = filterList
      return
    }
    // 删除不实最后一项
    if (payload.type === 'notlast') {
      tagsViewList.value.splice(payload.index as number, 1)
    }
  }

  return { tagsViewList, addTagsViewList, removeTagsView }
})
