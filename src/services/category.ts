import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

/**
 * 分类列表-小程序
 * @returns 分类列表数据集合
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
