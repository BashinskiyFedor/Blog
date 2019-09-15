import Sidebar from '../components/sidebar/sidebar'
import statscard from '../components/cards/statscard'
import card from '../components/cards/card'
import SidebarItem from '../components/sidebar/SidebarItem'
import DashboardNavbar from '../components/navbars/DashboardNavbar'

export default {
  install (Vue) {
    Vue.component(Sidebar.name, Sidebar)
    Vue.component(statscard.name, statscard)
    Vue.component(card.name, card)
    Vue.component(SidebarItem.name, SidebarItem)
    Vue.component(DashboardNavbar.name, DashboardNavbar)
  }
}
