import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue'
import Web from '../components/Web.vue';
import Mobile from '../components/Mobile.vue';
import Data from '../components/Data.vue';
import UI from '../components/UI.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name:'home',
        component:Home,
    },
    {
        path: '/web',
        name:'web',
        component:Web,
    },
    {
        path: '/mobile',
        name:'mobile',
        component:Mobile,
    },
    {
        path: '/ui',
        name:'ui',
        component:UI,
    },
    {
        path: '/data',
        name:'data',
        component:Data,
    },
];

const router = new VueRouter({
        routes,
});

export default router;