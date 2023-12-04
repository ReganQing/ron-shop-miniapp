import { http } from '@/utils/http'

/**
 * 获取微信支付参数,正式微信支付
 * @param data 订单Id
 * @returns 支付信息
 */
export const payWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

/**
 * 获取微信支付参数,模拟微信支付
 * @param data 订单Id
 * @returns 支付信息
 */
export const payMockAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}
