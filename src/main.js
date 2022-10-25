
import { createApp } from 'vue'
import App from './App.vue'
//import router from './client/router.js'

import VueRouter from 'vue-router'
import Home from './client/views/Home.vue'
import About from './client/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
		component: About
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')