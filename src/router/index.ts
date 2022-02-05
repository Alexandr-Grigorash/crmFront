import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Leads from '../pages/Leads.vue';
import Analytics from '../pages/Analytics.vue';
import Visits from '../pages/Visits.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/leads',
    name: 'Leads',
    component: Leads
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics
  },
  {
    path: '/visits',
    name: 'Visits',
    component: Visits
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
