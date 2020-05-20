import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LandingPage from '@/views/LandingPage';

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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/DealPage'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
