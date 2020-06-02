<template>
    <v-card elevation="24" hover color="#d1d0d0 " class="db-user-card">
        <h1 class="db-user-header">User Profile</h1>
        <v-container class="db-user-cont">
            <v-row v-for="(val,key) in user" :key="key" class="db-user-row">
                <v-col>
                    <h3>{{key}}</h3>
                </v-col>
                <v-col class="db-col-center">
                    <text-input-switch :field="key" :value="val" @updated="updateValue" />
                </v-col>
            </v-row>
            <h6>*Click value to change & Hit Enter to Submit</h6>
        </v-container>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { defineComponent, reactive } from "@vue/composition-api";
import TextInputSwitch from "@/components/TextInputSwitch";
interface valuePayloadType {
    field: "firstName" | "lastName" | "company" | "email" | "phone";
    updatedValue: string;
}
export default defineComponent({
    name: "UserProfile",
    components: {
        TextInputSwitch
    },
    setup(props, context) {
        const user = reactive({
            firstName: "John",
            lastName: "Doe",
            company: "Facebook",
            email: "john.doe@fb.com",
            phone: "666-666-6666"
        });
        function updateValue(valuePayload: valuePayloadType) {
            let { field, updatedValue } = valuePayload;
            Vue.set(user, field, updatedValue);
            context.root.$store.dispatch("setUserInfoField", valuePayload);
        }
        return {
            user,
            updateValue
        };
    }
});
</script>
<style scoped>
.db-user-card {
    color: #8e0000 !important;
    font-family: "Roboto" !important;
    margin: 5% 10%;
}
.db-user-header {
    margin: 1em;
}
.db-user-cont {
    width: 80%;
}
.db-user-row {
    width: 60%;
}
.db-user-label {
    text-align: center;
}
.db-col-center {
    align-self: center;
}
</style>
