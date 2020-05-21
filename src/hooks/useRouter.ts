import VueRouter from 'vue-router';
interface routerParamType {
    [key: string]: any | null;
}
export function useRouter() {
    function changePage(router: any, newPage: string, params: routerParamType) {
        router.push({
            name: newPage,
            params,
        });
    }
    return {
        changePage,
    };
}

export function useRouterBar() {
    const routes = [
        { name: 'Deals', route: '/deals' },
        { name: 'DealStats', route: '/deals-stats' },
        { name: 'User', route: '/user' },
    ];
    return { routes };
}
