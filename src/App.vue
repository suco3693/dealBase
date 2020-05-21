<template>
    <v-app id="app">
        <router-view />
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LandingPage from '@/views/LandingPage';
export default defineComponent({
    name: 'App',
    components: {
        LandingPage,
    },
    data: () => ({
        //
    }),
});
</script>
<style scoped>
#app {
    background-color: #727272;
    color: #8e0000 !important;
    font-family: 'Roboto' !important;
}
</style>
