import { rest } from 'msw'
import CartSuccessFixture from './fixtures/cart-success.json'

export const handlers = [
  rest.get('/5b15c4923100004a006f3c07', (_req, res, ctx) => {
    return res(ctx.json(CartSuccessFixture))
  }),
  rest.get('/af1a02e5-ebc3-49c9-bcab-ebd955899d21', (_req, res, _ctx) => {
    return res.networkError('Failed to connect, please try again')
  }),
]
