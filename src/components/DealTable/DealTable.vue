<template>
    <v-data-table :headers="headers" :items="mockDataSet" id="db-deal-table"> </v-data-table>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { paramCase } from 'change-case';
import { mockData } from '@/mock/mockDeals.js';
interface extraOptionsTypes {
    [key: string]: any;
}
export default defineComponent({
    name: 'DealTable',

    setup() {
        const headerSet = [
            ['Submit Date', {}],
            ['Industry', {}],
            ['EBITDA Range', {}],
            ['Revenue Range', {}],
            ['Loan Size', {}],
            ['Expected Rate', {}],
        ];

        function makeHeader(text: string, extraOptions?: extraOptionsTypes | undefined) {
            return Object.assign(
                {
                    text,
                    value: paramCase(text),
                    align: 'center',
                    sortable: true,
                    class: 'db-table-header',
                },
                extraOptions,
            );
        }
        const mockDataSet = mockData;
        const headers = headerSet.map((header: [string, extraOptionsTypes]) => makeHeader(header[0], header[1]));
        return { headers, mockDataSet };
    },
});
</script>
<style>
#db-deal-table {
    background-color: #d1d0d0 !important;
}
.v-data-table-header {
    background: #8e0000;
}
</style>
