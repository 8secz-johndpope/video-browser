import api from '../../api/google';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('token')
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
        window.console.log(queryString)
        commit('setToken', queryString.access_token);
        window.localStorage.setItem('token', queryString.access_token);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default { state, getters, actions, mutations };