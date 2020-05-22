<template>
    <v-content>
        <router-bar />
        <v-container>
            <div>Coming Soon</div>
        </v-container>
    </v-content>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import RouterBar from "@/components/RouterBar";
export default defineComponent({
    name: "DealStatsPage",
    components: {
        RouterBar
    },
    setup() {
        //
    }
});
</script>
<style scoped></style>
