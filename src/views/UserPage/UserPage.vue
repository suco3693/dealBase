<template>
    <v-content>
        <router-bar />
        <v-container>
            <div>I am UserPage</div>
        </v-container>
    </v-content>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import RouterBar from '@/components/RouterBar';
export default defineComponent({
    name: 'Name',
    components: {
        RouterBar,
    },
    setup() {
        //
    },
});
</script>
<style scoped></style>
