import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

/**
 * 填写订单-获取预付订单
 * @returns 预付订单数据集合
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 * @param data 请求参数(商品skuId、购买商品的数量、下单时已经选择好的地址id)
 * @returns 立即购买订单数据集合
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: number
  address?: string
}) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}
