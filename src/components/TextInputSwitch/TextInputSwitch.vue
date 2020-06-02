<template>
    <div>
        <v-text-field
            v-if="edit"
            v-model="newValue"
            @keyup.enter="edit = false"
            color="#8e0000"
            @change="emitValue"
        ></v-text-field>
        <label v-else @click="edit = true" class="db-user-label">{{newValue}}</label>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
    name: "TextInputSwitch",
    props: {
        field: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {
        let edit = ref(false);
        let newValue = ref(props.value);
        function emitValue(updatedValue: string) {
            context.emit("updated", {
                field: props.field,
                updatedValue
            });
        }
        return {
            edit,
            newValue,
            emitValue
        };
    }
});
</script>
<style scoped></style>
