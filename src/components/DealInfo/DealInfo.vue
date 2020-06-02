<template>
    <v-card outlined height="33em" color="#C4C4C4">
        <v-container class="db-dialog-cont">
            <v-row class="db-just-cent">
                <h1 class="db-red-font">DealInfo</h1>
            </v-row>
            <v-row class="db-just-cent db-text-spacing">
                <v-text-field
                    label="Revenue"
                    color="#8e0000"
                    suffix="M($)"
                    height="2em"
                    type="number"
                    v-model="dealInfo.revenue"
                    @change="updateDealRevenue"
                ></v-text-field>
            </v-row>
            <v-row class="db-just-cent db-text-spacing">
                <v-text-field
                    label="EBITDA"
                    color="#8e0000"
                    suffix="M($)"
                    height="2em"
                    type="number"
                    v-model="dealInfo.EBITDA"
                    @change="updateDealEBITDA"
                ></v-text-field>
            </v-row>
            <v-row class="db-just-cent db-text-spacing">
                <v-text-field
                    label="Loan Type"
                    color="#8e0000"
                    height="2em"
                    v-model="dealInfo.loanType"
                    @change="updateDealLoanType"
                ></v-text-field>
            </v-row>
            <v-row class="db-just-cent db-text-spacing">
                <v-text-field
                    label="Asking % Interest"
                    color="#8e0000"
                    suffix="%"
                    height="2em"
                    type="number"
                    v-model="dealInfo.askingPercent"
                    @change="updateDealPercent"
                ></v-text-field>
            </v-row>
        </v-container>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useDealInfo } from '@/hooks/useDealInfo';
export default defineComponent({
    name: 'DealInfo',
    props: {
        dealInfo: {
            type: Object,
            default: () => {
                return {
                    revenue: null,
                    EBITDA: null,
                    loanType: null,
                    askingPercent: null,
                };
            },
        },
    },
    setup(props, context) {
        let { updateDealRevenue, updateDealEBITDA, updateDealLoanType, updateDealPercent } = useDealInfo(context);
        return {
            updateDealRevenue,
            updateDealEBITDA,
            updateDealLoanType,
            updateDealPercent,
        };
    },
});
</script>
<style>
.db-dialog-cont {
    width: 90%;
}
.db-just-cent {
    justify-content: center;
}
.db-text-spacing {
    height: 6em;
}
.db-red-font {
    color: #8e0000;
}
.v-select__selections input {
    display: none;
}
</style>
