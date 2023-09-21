import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  // 自定义宽度
  const asideWidth = ref('260px')
  // 切换宽度
  const toggleAsideWidth = () => {
    asideWidth.value = asideWidth.value === '260px' ? '60px' : '260px'
  }
  // 宽度相对应的返回值
  const getMenuStatus = () => {
    return asideWidth.value === '260px' ? false : true
  }

  return { asideWidth, toggleAsideWidth, getMenuStatus }
})
