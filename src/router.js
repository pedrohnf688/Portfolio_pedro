import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/sobre', component: Sobre },
        { path: '/contato', component: Contato }
    ]
})