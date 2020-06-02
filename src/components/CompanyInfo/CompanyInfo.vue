<template>
    <v-card outlined height="33em" color="#C4C4C4">
        <v-container class="db-dialog-cont">
            <v-row class="db-just-cent">
                <h1 class="db-red-font">Company Info</h1>
            </v-row>
            <v-row class="db-just-cent">
                <v-text-field
                    label="Name"
                    color="#8e0000"
                    height="2em"
                    v-model="companyInfo.name"
                    @change="updateCompanyName"
                ></v-text-field>
            </v-row>
            <v-row class="db-just-cent">
                <v-col>
                    <v-text-field
                        label="Website"
                        color="#8e0000"
                        height="2em"
                        v-model="companyInfo.website"
                        @change="updateCompanyWebsite"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        label="Industry"
                        color="#8e0000"
                        height="2em"
                        v-model="companyInfo.industry"
                        @change="updateCompanyIndustry"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="db-just-cent">
                <v-text-field
                    label="Address Line 1"
                    color="#8e0000"
                    height="2em"
                    v-model="companyInfo.addressLineOne"
                    @change="updateCompanyAddress1"
                ></v-text-field>
            </v-row>
            <v-row class="db-just-cent">
                <v-text-field
                    label="City"
                    color="#8e0000"
                    height="2em"
                    v-model="companyInfo.city"
                    @change="updateCompanyCity"
                ></v-text-field>
            </v-row>
            <v-row class="db-just-cent">
                <v-col>
                    <v-select
                        :items="states"
                        label="State"
                        color="#8e0000"
                        background-color="#FFFF"
                        height="2em"
                        v-model="companyInfo.state"
                        @change="updateCompanyState"
                    ></v-select>
                </v-col>
                <v-col>
                    <v-text-field
                        label="Zip Code"
                        color="#8e0000"
                        height="2em"
                        v-model="companyInfo.zipCode"
                        @change="updateCompanyZipCode"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script lang="ts">
import { usaStates } from '@/assets/usaStates';
import { defineComponent } from '@vue/composition-api';
import { useCompanyInfo } from '@/hooks/useCompanyInfo';
export default defineComponent({
    name: 'CompanyInfo',
    props: {
        companyInfo: {
            type: Object,
            default: () => {
                return {
                    name: '',
                    website: '',
                    industry: '',
                    addressLineOne: '',
                    city: '',
                    state: '',
                    zipCode: '',
                };
            },
        },
        states: {
            type: Array,
            default: () => Object.keys(usaStates),
        },
    },
    setup(props, context) {
        const {
            updateCompanyName,
            updateCompanyWebsite,
            updateCompanyIndustry,
            updateCompanyAddress1,
            updateCompanyCity,
            updateCompanyState,
            updateCompanyZipCode,
        } = useCompanyInfo(context);
        return {
            updateCompanyName,
            updateCompanyWebsite,
            updateCompanyIndustry,
            updateCompanyAddress1,
            updateCompanyCity,
            updateCompanyState,
            updateCompanyZipCode,
        };
    },
});
</script>
<style scoped>
.db-dialog-cont {
    width: 90%;
}
.db-just-cent {
    justify-content: center;
}
.db-red-font {
    color: #8e0000;
}
.v-select__selections input {
    display: none;
}
</style>
