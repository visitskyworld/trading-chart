import TradeViewChart from 'react-crypto-chart'
import { SYMBOL } from '../../constants'
import './style.css'

const TradeChart = () => {
  const chartLayout = {
    layout: {
      backgroundColor: '#04306b',
      borderColor: '#1e2136',
      textColor: '#ededed',
    },
  }

  const candleStickConfig = {
    upColor: '#0ecc83',
    downColor: '#fa3c58',
    borderDownColor: '#fa3c58',
    borderUpColor: '#0ecc83',
    wickDownColor: '#fa3c58',
    wickUpColor: '#0ecc83',
  }

  return <TradeViewChart pair={SYMBOL} chartLayout={chartLayout} candleStickConfig={candleStickConfig} />
}

export default TradeChart
