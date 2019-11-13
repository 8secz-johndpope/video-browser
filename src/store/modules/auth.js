import api from '../../api/google';

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
    finilizeLogin: () => {}
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default { state, getters, actions, mutations };