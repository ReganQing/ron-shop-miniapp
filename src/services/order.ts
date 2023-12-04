import type {
  OrderCreateParams,
  OrderCreateResult,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult,
} from '@/types/order'
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

/**
 * 提交订单
 * @param data 提交订单请求参数
 * @returns 提示信息和订单id
 */
export const postMemebrOrderAPI = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

/**
 * 获取订单详情
 * @param id 订单id
 * @returns 订单详情
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}

/**
 * 模拟发货-内测版
 * @description 在 DEV 环境中使用，仅在 订单状态为待发货 时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单Id
 * @returns 提示语
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 * @returns 返回信息
 */
export const putMemberOrderReceiptByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 * @returns 物流查询结果
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 * @returns 提示语
 */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `/member/order`,
    data,
  })
}
