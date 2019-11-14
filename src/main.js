import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import AuthHandler from './components/Navbar/AuthHandler';

import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/oauth2/v2/auth', component: AuthHandler
    }]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
