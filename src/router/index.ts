import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LandingPage from '@/views/LandingPage';
import DealPage from '@/views/DealPage';
import DealStatsPage from '@/views/DealStatsPage';
import UserPage from '@/views/UserPage';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'LandingPAGE',
        component: LandingPage,
    },
    {
        path: '/deals',
        name: 'Deals',
        component: DealPage,
    },
    {
        path: '/deals-stats',
        name: 'DealStatsPage',
        component: DealStatsPage,
    },
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
