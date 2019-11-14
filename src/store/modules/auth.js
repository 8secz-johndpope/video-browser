import api from '../../api/google';
import qs from 'qs';

const state = {
    token: null
};

const getters = {
    isLoggedIn: state =>  !!state.token
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    },
    login: () => {
        api.login();
    },
    finilizeLogin: ({ commit }, hash) => {
        const queryString = qs.parse(hash.replace('#', ''));
        commit('setToken', queryString.access_token);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default { state, getters, actions, mutations };