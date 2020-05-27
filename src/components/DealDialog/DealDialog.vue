<template>
    <v-dialog v-model="dialog" width="70%" persistent>
        <template v-slot:activator="{ on }">
            <v-btn color="#8e0000" v-on="on">New Deal</v-btn>
        </template>

        <v-card class="db-dialog-card">
            <v-container class="db-dialog-cont">
                <v-row class="db-just-cent">
                    <h1 class="db-red-font">New Deal</h1>
                </v-row>
                <v-row class="db-just-cent">
                    <v-col>
                        <company-info :companyInfo="companyInfo" :states="usaStatesAbbrs" />
                    </v-col>
                    <v-col>
                        <deal-info :dealInfo="dealInfo" />
                    </v-col>
                </v-row>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#8e0000" @click="cancelDialog">Cancel</v-btn>
                <v-btn color="#8e0000" @click="submitDialog">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CompanyInfo from '@/components/CompanyInfo';
import DealInfo from '@/components/DealInfo';
import { useDealDialog } from '@/hooks/useDialog.ts';
import { useCompanyInfo } from '@/hooks/useCompanyInfo';
import { useDealInfo } from '@/hooks/useDealInfo';

export default defineComponent({
    name: 'DealDialog',
    components: {
        CompanyInfo,
        DealInfo,
    },
    setup(props, context) {
        const { usaStatesAbbrs, companyInfo, clearCompanyInfo } = useCompanyInfo(context);
        const { dealInfo, clearDealInfo } = useDealInfo(context);
        const clearFxns: Array<Function> = [clearCompanyInfo, clearDealInfo];
        let { dialog, cancelDialog, submitDialog } = useDealDialog(clearFxns);
        return {
            usaStatesAbbrs,
            companyInfo,
            dealInfo,
            dialog,
            cancelDialog,
            submitDialog,
        };
    },
});
</script>
<style scoped>
.db-dialog-card {
    background-color: #d1d0d0;
}
.db-dialog-cont {
    width: 90%;
}
.db-just-cent {
    justify-content: center;
}
.db-red-font {
    color: #8e0000;
}
</style>
