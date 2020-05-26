import Vue from 'vue';
import Vuex from 'vuex';
import { userInfoType } from '@/hooks/useLoginUserInfo.ts';
import { companyInfoType } from '@/hooks/useCompanyInfo';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {
            firstName: '',
            lastName: '',
            email: '',
        },
        companyInfo: {
            name: '',
            website: '',
            industry: '',
            addressLineOne: '',
            city: '',
            state: '',
            zipCode: '',
        },
    },
    mutations: {
        setUserInfo(state, newUserInfo: userInfoType) {
            state.userInfo = newUserInfo;
        },
        setCompanyInfo(state, newCompanyInfo: { slot: keyof companyInfoType; updatedValue: string }) {
            state.companyInfo[newCompanyInfo.slot] = newCompanyInfo.updatedValue;
        },
        clearCompanyInfo(state) {
            state.companyInfo = {
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
    actions: {
        setUserInfo({ commit }, payload) {
            commit('setUserInfo', payload);
        },
        setCompanyInfo({ commit }, payload) {
            commit('setCompanyInfo', payload);
        },
        clearCompanyInfo({ commit }) {
            commit('clearCompanyInfo');
        },
    },
    getters: {
        getUserInfo: (state) => {
            return state.userInfo;
        },
    },
    modules: {},
});
