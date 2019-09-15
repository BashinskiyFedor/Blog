import Chart from 'chart.js'
import { initGlobalOptions } from '../charts/config'
export default {
  mounted () {
    initGlobalOptions(Chart)
  }
}
