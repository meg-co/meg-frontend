import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
      path: '/messages',
      name: 'Messages',
      component: async ()=>checkAuthentication(import(/* webpackChunkName: "messages" */ '../views/Messages.vue'), import(/* webpackChunkName: "about" */ '../views/Login.vue'))
    }
]

async function checkAuthentication(component, alternateComponent) {
  window.axios = axios;
  const jwt = window.localStorage.getItem('access_token');
  const result = await axios.get(`${process.env.VUE_APP_API_URL}/auth/me`, {headers: {Authorization: `JWT ${jwt}`}});
  if (result.status === 200) {
    return component;
  }
  else {
    return alternateComponent;
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
