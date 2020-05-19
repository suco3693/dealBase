<template>
    <v-container>
        <v-row class="db-just-cent">
            <h1 id="db-name-plate">Deal Base</h1>
        </v-row>
        <v-row class="db-just-cent">
            <login-card />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LoginCard from '@/components/LoginCard';
export default defineComponent({
    name: 'LandingPage',
    components: {
        LoginCard,
    },
    setup: () => ({
        //
    }),
});
</script>
<style scoped>
.db-just-cent {
    justify-content: center;
}
#db-name-plate {
    font-size: 5em;
}
</style>
