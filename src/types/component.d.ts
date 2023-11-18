/**
 * 组件类型声明
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    // 轮播图组件
    XtxSwiper: typeof XtxSwiper
  }
}
