<template>
    <v-content>
        <router-bar />
        <v-container>
            I am Deal page
        </v-container>
    </v-content>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import RouterBar from '@/components/RouterBar';

export default defineComponent({
    name: 'DealPage',
    components: {
        RouterBar,
    },
    setup: () => ({
        //
    }),
});
</script>
<style scoped></style>
