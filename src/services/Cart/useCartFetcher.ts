import { ICartFetcher } from 'types/Cart'
import useAxios from 'axios-hooks'

export function useCartFetcher(cartId: string) {
  const [{ data, error, loading }, refetch] = useAxios<ICartFetcher>({
    url: `/${cartId}`,
  })

  return { data, error, loading, refetch }
}
