import { IProduct } from './Product'

export interface ICartItem {
  quantity: number
  items: IProduct[]
}

export interface ICartFetcher {
  id: string
  items: ICartItem[]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}
