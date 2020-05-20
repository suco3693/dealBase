<template>
    <v-container>
        <v-row class="db-just-cent">
            <h1 id="db-name-plate">Deal Base</h1>
        </v-row>
        <v-row class="db-just-cent">
            <login-card @userInfo="saveUserInfo" />
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mapActions } from 'vuex';
import LoginCard from '@/components/LoginCard';
// eslint-disable-next-line no-unused-vars
import { userInfoType } from '@/hooks/useLoginUserInfo.ts';

export default defineComponent({
    name: 'LandingPage',
    components: {
        LoginCard,
    },
    setup(props, context) {
        mapActions(['setUserInfo']);

        function saveUserInfo(userInfo: userInfoType) {
            context.root.$store.dispatch('setUserInfo', userInfo);
        }

        return {
            saveUserInfo,
        };
    },
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
