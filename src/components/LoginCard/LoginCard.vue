<template>
    <v-card elevation="24" width="21em" height="31em" hover color="#d1d0d0 " class="db-login-card">
        <div class="db-container">
            <div class="db-login-row">
                <h2 class="db-login-title">Login</h2>
            </div>
            <v-text-field placeholder="First Name" color="#8e0000" height="5em" class="db-login-row" />
            <v-text-field placeholder="Last Name" color="#8e0000" height="2em" class="db-login-row" />
            <v-text-field placeholder="Email" height="2em" color="#8e0000" class="db-login-row" />
            <v-btn color="#8e0000" class="db-login-row">Login </v-btn>
        </div>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: 'LoginCard',

    setup: () => ({
        //
    }),
});
</script>
<style>
.db-login-card {
    color: #8e0000 !important;
    font-family: 'Roboto' !important;
}
.db-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: 100%;
}
.db-login-row {
    align-self: center;
    width: 90%;
}
.db-login-title {
    text-align: center;
}
</style>
