export interface IProductImage {
  featured: boolean
  valid: boolean
  thumbnail: string
  small: string
  medium: string
  large: string
  extraLarge: string
}

export interface IProductPriceSpecification {
  sku: string
  price: number
  originalPrice: number
  maxPrice: number
  percent: number
  discount: number
}

export interface IProduct {
  sku: string
  name: string
  imageObjects: IProductImage[]
  priceSpecification: IProductPriceSpecification
}
