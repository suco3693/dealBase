<template>
    <v-dialog v-model="dialog" width="70%" persistent>
        <template v-slot:activator="{ on }">
            <v-btn color="#8e0000" v-on="on">
                New Deal
            </v-btn>
        </template>

        <v-card class="db-dialog-card">
            <v-container class="db-dialog-cont">
                <v-row class="db-just-cent">
                    <h1 class="db-red-font">New Deal</h1>
                </v-row>
                <v-row class="db-just-cent">
                    <v-col>
                        Slot1
                    </v-col>
                    <v-col>
                        Slot2
                    </v-col>
                </v-row>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#8e0000" @click="cancelDialog">
                    Cancel
                </v-btn>
                <v-btn color="#8e0000" @click="submitDialog">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
    name: 'DealDialog',

    setup() {
        let dialog = ref(false);
        function submitDialog() {
            dialog.value = false;
        }
        function cancelDialog() {
            dialog.value = false;
        }
        return { dialog, cancelDialog, submitDialog };
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
