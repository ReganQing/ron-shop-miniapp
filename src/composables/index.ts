import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 * @returns guessRef 和事件处理函数
 */
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  // 滚动触底
  const onScrolltoLower = () => {
    guessRef.value?.getMore()
  }

  // 返回 guessRef 和事件处理函数
  return { guessRef, onScrolltoLower }
}
