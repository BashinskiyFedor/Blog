import DashboardLayout from '../layouts/DashboardLayout'

export const routes = [
  {
    path: '/dashboard',
    redirect: 'dashboard/statistics',
    component: DashboardLayout,
    children: [{
      path: 'statistics',
      name: 'statistics',
      component: () => import(/* webpackChunkName: "demo" */ '../views/Statistics.vue')
    }]
  }
]
