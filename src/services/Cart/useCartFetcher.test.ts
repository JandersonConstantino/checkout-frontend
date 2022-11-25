import { renderHook, waitFor } from '@testing-library/react'
import { useCartFetcher } from './useCartFetcher'

describe('useCartFetcher', () => {
  it('must return data when request is completed with success', async () => {
    const cardId = '5b15c4923100004a006f3c07'
    const { result } = createHook(cardId)

    expect(result.current.loading).toBeTruthy()

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy()
    })

    expect(result.current.data?.id).toEqual('5b15c171e4b0023bb624f616')
    expect(result.current.data?.items).toHaveLength(3)
  })

  it('must return error when request failed', async () => {
    const cardId = 'af1a02e5-ebc3-49c9-bcab-ebd955899d21'
    const { result } = createHook(cardId)

    expect(result.current.loading).toBeTruthy()

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy()
    })

    expect(result.current.data).toBeUndefined()
    expect(result.current.error?.message).toEqual('Network Error')
  })
})

const createHook = (cardId: string) =>
  renderHook((props) => useCartFetcher(props), {
    initialProps: cardId,
  })
