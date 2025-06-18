import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Web from '../components/Web.vue'
import Mobile from '../components/Mobile.vue'
import Data from '../components/Data.vue'
import UI from '../components/UI.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/web', name: 'web', component: Web },
  { path: '/mobile', name: 'mobile', component: Mobile },
  { path: '/data', name: 'data', component: Data },
  { path: '/ui', name: 'ui', component: UI }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
