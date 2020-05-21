<template>
    <v-app-bar color="#727272">
        <h1 class="db-font-color">dB</h1>
        <ul v-for="route in routes" :key="route.name">
            <router-link :to="route.route" class="db-font-color db-route">
                <div>{{ route.name }}</div>
            </router-link>
        </ul>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useRouterBar } from '@/hooks/useRouter';
export default defineComponent({
    name: 'RouterBar',

    setup() {
        const { routes } = useRouterBar();
        return {
            routes,
        };
    },
});
</script>
<style scoped>
.db-font-color {
    color: #8e0000;
}
.db-route {
    font-size: 1.5em;
    text-decoration: none;
}
</style>
