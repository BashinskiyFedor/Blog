import Sidebar from '../components/sidebar/sidebar'
import statscard from '../components/cards/statscard'

export default {
  install (Vue) {
    Vue.component(Sidebar.name, Sidebar)
    Vue.component(statscard.name, statscard)
  }
}
