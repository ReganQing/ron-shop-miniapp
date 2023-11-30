import { http } from '@/utils/http'

/**
 * 加入购物车
 * @param data skuId 和数量
 * @returns skuId及商品信息
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
