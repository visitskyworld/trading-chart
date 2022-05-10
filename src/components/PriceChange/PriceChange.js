import { SYMBOL } from '../../constants'
import { usePrice } from '../../hooks/usePrice'
import { isNegative, toFixed } from '../../utils'

import './style.css'

const PriceChange = () => {
  const { price } = usePrice('LUNAUSDT')
  return (
    <div className="price-container">
      <h1>{SYMBOL}</h1>
      <div className="price-item">
        <span>{toFixed(price?.lastPrice)}</span>
        <span className="label">${toFixed(price?.lastPrice)}</span>
      </div>
      <div className="price-item">
        <span className="label">24h Change</span>
        <span className={`${isNegative(price?.priceChangePercent) ? 'down' : 'up'}`}>
          {toFixed(price?.priceChangePercent)}%
        </span>
      </div>
      <div className="price-item">
        <span className="label">24h High</span>
        <span>{toFixed(price?.highPrice)}</span>
      </div>
      <div className="price-item">
        <span className="label">24h Low</span>
        <span>{toFixed(price?.highPrice)}</span>
      </div>
    </div>
  )
}

export default PriceChange
