import { ref } from 'vue'

// 标记获取分页结束
export const finish = ref(false)

// 重置数据
export const resetData = (pageParams: any, itemList: any) => {
  pageParams.page = 1
  finish.value = false
  itemList.value = []
}

export const getMore = async (pageParams: any, itemList: any, getMoreAPI: any) => {
  // 退出判断，并提示用户
  if (finish.value) {
    return uni.showToast({ icon: 'none', title: '没有更多数据~' })
  }
  const res = await getMoreAPI(pageParams)
  // 数组追加
  itemList.value.push(...res.result.items)
  // 判断页码是否在后端返回的页数内
  if (pageParams.page < res.result.pages) {
    // 页码累加
    pageParams.page++
  } else {
    // 标记为已结束
    finish.value = true
  }
}
