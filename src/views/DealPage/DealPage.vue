<template>
    <v-content>
        <router-bar />
        <v-container>
            <deal-table />
        </v-container>
    </v-content>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import RouterBar from '@/components/RouterBar';
import DealTable from '@/components/DealTable';

export default defineComponent({
    name: 'DealPage',
    components: {
        RouterBar,
        DealTable,
    },
    setup() {
        //
    },
});
</script>
<style scoped></style>
