import { ref } from 'vue'

/**
 * 获取图形验证码
 */
export function useGetImgCode() {
  // 图片验证码转换图片路径
  const imgCodeSrc = ref(new URL('../../../assets/code.png', import.meta.url).href)

  // 点击切换图片验证码
  const getImgCode = () => {
    console.log('toggle img')
  }
  return { imgCodeSrc, getImgCode }
}
