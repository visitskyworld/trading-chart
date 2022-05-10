import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { API_URL, SYMBOL } from '../constants'
export const usePrice = (symbol = SYMBOL) => {
  const [price, setPrice] = useState()

  const request = useCallback(async () => {
    const res = await axios.request({
      url: API_URL + '/ticker/24hr',
      method: 'get',
      params: {
        symbol: symbol,
      },
    })
    setPrice(res?.data)
  }, [symbol])

  useEffect(() => {
    request()
  }, [request])

  return {
    price,
  }
}
