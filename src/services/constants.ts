/** 订单状态枚举 */
export enum OrderState {
  /** 待付款 */
  WAITTOPAY = 1,
  /** 待发货 */
  WAITTOSEND = 2,
  /** 待收货 */
  WAITTOACCEPT = 3,
  /** 待评价 */
  WAITTOCOMMIT = 4,
  /** 已完成 */
  ALREADYDONE = 5,
  /** 已取消 */
  ALREADYCANCEL = 6,
}

/** 订单状态列表 */
export const orderStateList = [
  { id: 0, text: '' },
  { id: 1, text: '待付款' },
  { id: 2, text: '待发货' },
  { id: 3, text: '待收货' },
  { id: 4, text: '待评价' },
  { id: 5, text: '已完成' },
  { id: 6, text: '已取消' },
]
