import Vue from 'vue';
import Vuex from 'vuex';
import { userInfoType } from '@/hooks/useLoginUserInfo.ts';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {
            firstName: '',
            lastName: '',
            email: '',
        },
    },
    mutations: {
        setUserInfo(state, newUserInfo: userInfoType) {
            state.userInfo = newUserInfo;
        },
    },
    actions: {
        setUserInfo({ commit }, payload) {
            commit('setUserInfo', payload);
        },
    },
    getters: {
        getUserInfo: (state) => {
            return state.userInfo;
        },
    },
    modules: {},
});
