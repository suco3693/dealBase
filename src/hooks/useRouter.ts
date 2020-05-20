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
