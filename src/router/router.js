import Leads from '@/pages/Leads';
import Analytics from '@/pages/Analytics';
import Visits from '@/pages/Visits';
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/leads',
        component: Leads
    },
    {
        path: '/analytics',
        component: Analytics
    },
    {
        path: '/visits',
        component: Visits
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;