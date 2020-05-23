<template>
    <v-content>
        <router-bar />
        <v-container>
            <v-row class="db-just-cent">
                <v-col>
                    <div>Filters</div>
                </v-col>
                <v-col class="db-just-cent">
                    <deal-dialog />
                </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-row class="db-just-cent">
                <deal-table />
            </v-row>
        </v-container>
    </v-content>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import RouterBar from '@/components/RouterBar';
import DealTable from '@/components/DealTable';
import DealDialog from '@/components/DealDialog';

export default defineComponent({
    name: 'DealPage',
    components: {
        RouterBar,
        DealTable,
        DealDialog,
    },
    setup() {
        //
    },
});
</script>
<style scoped>
.db-just-cent {
    justify-content: center;
}
</style>
