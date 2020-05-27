import Vue from 'vue';
import Vuex from 'vuex';
import { userInfoType } from '@/hooks/useLoginUserInfo.ts';
import { companyInfoType } from '@/hooks/useCompanyInfo';
import { dealInfoType } from '@/hooks/useDealInfo';

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
        dealInfo: {
            revenue: '',
            EBITDA: '',
            loanType: '',
            askingPercent: '',
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
        setDealInfo(state, newDealInfo: { slot: keyof dealInfoType; updatedValue: string }) {
            state.dealInfo[newDealInfo.slot] = newDealInfo.updatedValue;
        },
        clearDealInfo(state) {
            state.dealInfo = {
                revenue: '',
                EBITDA: '',
                loanType: '',
                askingPercent: '',
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
        setDealInfo({ commit }, payload) {
            commit('setDealInfo', payload);
        },
        clearDealInfo({ commit }) {
            commit('clearDealInfo');
        },
    },
    getters: {
        getUserInfo: (state) => {
            return state.userInfo;
        },
    },
    modules: {},
});
