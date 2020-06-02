<template>
    <v-content>
        <router-bar />
        <user-profile />
    </v-content>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import RouterBar from "@/components/RouterBar";
import UserProfile from "@/components/UserProfile";
export default defineComponent({
    name: "Name",
    components: {
        RouterBar,
        UserProfile
    },
    setup() {
        //
    }
});
</script>
<style scoped></style>
