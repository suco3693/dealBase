<template>
    <v-data-table :headers="headers" :items="mockDataSet" id="db-deal-table"></v-data-table>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useDealTable } from '@/hooks/useDealTable.ts';

export default defineComponent({
    name: 'DealTable',

    setup() {
        const { headers, mockDataSet } = useDealTable();

        return { headers, mockDataSet };
    },
});
</script>
<style>
#db-deal-table {
    background-color: #d1d0d0 !important;
    width: 100%;
}
.v-data-table-header {
    background: #8e0000;
}
</style>
